# Fluxo de pagamento — testar em DEV (sandbox Pagar.me)

A página `folha-ia.html` agora tem uma seção **Planos & Preços** cujos CTAs levam ao
**auto-cadastro** do app RH-Inteligente. Este é o caminho para testar o funil completo
(site → cadastro → trial → pagamento) contra o **sandbox** do Pagar.me, sem tocar em produção.

## URLs (dev-aware, automático)

O botão detecta o ambiente sozinho (script no fim do `folha-ia.html`):

| Site aberto em | CTA "Começar grátis" aponta para |
|---|---|
| `localhost` / `127.0.0.1` | `http://127.0.0.1:5081/registro` (front do Vite) |
| qualquer outro host | `https://demo-rh.vcorpsistem.com/registro` (homologação) |

> Quando a produção subir, troque `APP_PROD` no script do fim de `folha-ia.html`.

## Passo a passo (tudo local)

1. **Suba o app RH** (no repo `Rh-Inteligente`):
   ```bash
   cd src/API && dotnet run                # API em http://127.0.0.1:5080
   cd src/frontend && npm run dev          # front em http://127.0.0.1:5081
   ```
   (a `SecretKeyTest` do Pagar.me sandbox já está no `.env` do RH)

2. **Sirva este site**:
   ```bash
   python -m http.server 8080              # abra http://localhost:8080/folha-ia.html
   ```

3. **No site** → seção *Planos & Preços* → **Começar grátis** → cai no `/registro` do app.

4. **Cadastre a empresa** (nome, CNPJ, e-mail, nome do dono, senha). Cria Empresa + Dono +
   **trial de 14 dias** (RH + Escala liberados).

5. **Verifique o e-mail SEM SMTP**: no console da **API** procure a linha
   `[EMAIL:VERIFICACAO][DEV] link para <email>: http://127.0.0.1:5081/verificar-email?... · código: ...`
   Abra o link (ou informe o código) → e-mail verificado.

6. **Login** com o dono → entra no app em trial. Clique **Assinar agora** (topo) para abrir o
   paywall com as 3 formas de pagamento.

7. **Pague no sandbox**:
   - **Cartão**: `4111 1111 1111 1111`, validade `12/30`, CVV `123`, um telefone e endereço
     quaisquer → aprova na hora (recusa de teste: `4000 0000 0000 0010`).
   - **PIX anual à vista**: gera o QR (copia-e-cola); o sandbox não “paga” PIX sozinho, então
     use o cartão para validar a ativação ponta a ponta.
   - **Boleto**: gera o boleto pagável (ativa quando o webhook confirmar).

Ao aprovar, a assinatura ativa com o snapshot da tabela e o app libera.

## Notas de segurança (já implementadas no app RH)

- O **número do cartão nunca passa pelo backend** — é tokenizado direto no Pagar.me (PCI).
- O **valor é calculado no servidor** (o request não define preço).
- Ativação só ocorre com pagamento **re-verificado no gateway** (webhook/poll não são confiados).
- Preços deste site são **estáticos** (o endpoint `/plataforma/precos` exige auth + CORS e não
  é consumível por um site público). Mantenha os valores aqui em sincronia com a tabela do app.
