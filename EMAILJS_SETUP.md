# Configuração e Segurança do EmailJS

Este guia explica como obter as chaves necessárias para o funcionamento do formulário de contato e como proteger sua conta.

## 1. Onde conseguir as chaves

1.  **Crie sua conta:** Acesse [https://www.emailjs.com/](https://www.emailjs.com/) e crie uma conta gratuita ("Sign Up Free").
2.  **Service ID (ID do Serviço):**
    *   No painel, clique em **"Email Services"** na barra lateral.
    *   Clique em **"Add New Service"** e escolha seu provedor (Gmail, Outlook, etc.).
    *   Conecte sua conta.
    *   Após criar, você verá o **Service ID** (ex: `service_x9s8...`). Copie-o.
3.  **Template ID (ID do Modelo):**
    *   Clique em **"Email Templates"** na barra lateral.
    *   Clique em **"Create New Template"**.
    *   Edite o modelo como quiser (Assunto, Corpo do email).
        *   Use as variáveis do seu formulário: `{{from_name}}`, `{{email}}`, `{{subject}}`, `{{message}}`.
    *   Salve o template.
    *   Vá na aba **"Settings"** do template para ver o **Template ID** (ex: `template_8d7f...`). Copie-o.
4.  **Public Key (Chave Pública):**
    *   Clique no seu nome/avatar no canto superior direito e vá em **"Account"**.
    *   Copie a **Public Key** (ex: `user_Kj8...` ou um hash longo).

---

## 2. Segurança: "Posso deixar as chaves no GitHub?"

**A resposta curta:** A **Public Key** sim, mas com proteção de domínio. A **Private Key** NUNCA.

### Por que a Public Key fica no código?
Como seu site é estático (HTML/JS) e roda direto no navegador do visitante, o código precisa ter a chave pública para "falar" com o EmailJS. Mesmo que você a esconda do GitHub, qualquer pessoa que entrar no seu site e apertar `F12` (Inspecionar) poderá vê-la na aba "Network" ou "Sources". **Não há como esconder segredos em sites puramente estáticos.**

### Como proteger então? (Whitelist)
A proteção real não é esconder a chave, mas sim dizer ao EmailJS: **"Só aceite pedidos vindos do meu site (vcorpsistem.com)"**.

1.  No painel do EmailJS, vá em **"Security"** (ou nas configurações da sua API Key).
2.  Procure por **"Allowed Domains"** (Domínios Permitidos) ou **"Origin Whitelist"**.
3.  Adicione o seu domínio: `vcorpsistem.com` (e `www.vcorpsistem.com`).
4.  (Opcional) Adicione `localhost` se quiser testar no seu computador.

**Resultado:** Se alguém roubar sua chave e tentar usar em outro site ou script, o EmailJS vai bloquear porque o pedido não veio do `vcorpsistem.com`.

## 3. Onde colocar no código

Edite o arquivo `scripts.js` e substitua os valores:

```javascript
// Inicialização
emailjs.init("SUA_PUBLIC_KEY_AQUI");

// ... dentro da função de envio ...
const serviceID = 'SEU_SERVICE_ID_AQUI';
const templateID = 'SEU_TEMPLATE_ID_AQUI';
```

Após fazer isso, faça o commit e push. Com a Whitelist configurada, você está seguro!
