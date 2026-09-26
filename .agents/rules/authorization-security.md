# Rule: Autorização Segura e Controle de Acesso

## Validação no Servidor
- Toda rota privada deve validar explicitamente a autenticação e as permissões do usuário no backend.
- A restrição visual de interface no frontend serve para UX, mas **nunca substitui a autorização no servidor**.

## Mitigação de IDOR / BOLA (Broken Object Level Authorization)
- Nunca busque registros no banco utilizando unicamente o `id` da URL sem conferir vínculo com o usuário ou organização solicitante:
  ```typescript
  // CORRETO:
  const contract = await prisma.contract.findFirst({
    where: {
      id: contractId,
      OR: [
        { athleteId: currentUser.id },
        { agentId: currentUser.id },
        { sponsorId: currentUser.organizationId }
      ]
    }
  });
  ```
- IDs sequenciais nunca devem ser expostos publicamente; utilize UUID v7 ou slugs seguros.

## Princípio do Menor Privilégio
- Perfis de patrocinador acessam apenas atletas associados aos seus contratos ativos.
- Perfis de atleta visualizam exclusivamente suas próprias informações e contratos.
- Ações críticas de agentes e administradores devem registrar trilha de auditoria completa.
