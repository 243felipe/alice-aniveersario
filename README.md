# 👑✨ Convite Mágico - Alice 4 Anos! ✨👑

![Version](https://img.shields.io/badge/version-2.0.0-pink)
![License](https://img.shields.io/badge/license-MIT-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.160-orange)

> Um site interativo MÁGICO com tema de princesa, elementos 3D animados e muito mais para celebrar o aniversário de 4 anos da Alice! 🎉

---

## 🌟 Características

### ✨ Design Moderno e Mágico
- **Tema Princesa**: Cores rosa, roxo e dourado com gradientes suaves
- **Glassmorphism**: Efeitos de vidro fosco modernos
- **Animações Suaves**: Transições e micro-interações encantadoras
- **Responsivo**: Funciona perfeitamente em desktop, tablet e celular

### 🎨 Elementos 3D Interativos
- **Coroa 3D Animada**: Coroa dourada girando com joias brilhantes
- **Estrelas Flutuantes**: 100 estrelas em 3D animadas no fundo
- **Partículas Mágicas**: Emojis flutuantes (✨🎀💖⭐🦄👑)
- **Efeito Confete**: Animação de confete ao confirmar presença

### 🎯 Funcionalidades
- ⏰ **Contagem Regressiva**: Timer ao vivo até o dia da festa
- 📝 **Formulário de Confirmação**: Interface linda e intuitiva
- 👥 **Lista de Confirmados**: Veja quem já confirmou presença
- 📊 **Estatísticas**: Total de confirmados e convidados
- 🎪 **Galeria**: Seção para momentos especiais da Alice

### 🚀 Tecnologias Utilizadas
- **TypeScript**: Código tipado e seguro
- **Three.js**: Renderização 3D de alta performance
- **SCSS**: Estilos avançados e organizados
- **Vite**: Build tool super rápido
- **API REST**: Integração com backend

---

## 📦 Instalação

### Pré-requisitos
- Node.js >= 18.0.0
- npm ou yarn

### Passos

1. **Clone ou extraia o projeto**
```bash
cd frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Compile os estilos SCSS**
```bash
npm run compile
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

5. **Acesse no navegador**
```
http://localhost:3000
```

---

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria versão de produção |
| `npm run preview` | Visualiza build de produção |
| `npm run compile` | Compila SCSS para CSS |

---

## 🗂️ Estrutura do Projeto

```
frontend/
│
├── index.html          # Página principal (HTML completo)
├── main.ts            # Código TypeScript (3D, animações, API)
├── styles.scss        # Estilos SCSS (tema princesa)
├── vite.config.ts     # Configuração do Vite
├── tsconfig.json      # Configuração do TypeScript
├── package.json       # Dependências e scripts
│
├── API_BACKEND.md     # 📚 Documentação completa da API
└── README.md          # Este arquivo
```

---

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Rosa Primário | `#ff6b9d` | Títulos, botões, destaques |
| Roxo Secundário | `#c44dff` | Subtítulos, ícones |
| Azul Royal | `#667eea` | Gradientes, detalhes |
| Dourado | `#ffd700` | Coroa 3D, estrelas |
| Rosa Claro | `#fff0f6` | Fundo geral |
| Branco | `#ffffff` | Cards, texto em destaque |

---

## 🎯 Funcionalidades Detalhadas

### 1. Hero Section (Tela Inicial)
- Coroa emoji animada (flutuando e girando)
- Nome "Alice" com gradiente animado
- Decoração com emojis (🎀🎂🎈🦄⭐)
- Indicador de scroll animado

### 2. Contagem Regressiva
- Atualização em tempo real (1 segundo)
- Cards com efeito glassmorphism
- Animação ao passar o mouse
- Exibe: Dias, Horas, Minutos, Segundos

### 3. Detalhes do Evento
- 4 cards informativos:
  - 📅 Data
  - 🕐 Horário
  - 📍 Local
  - 🎭 Tema
- Animações de hover 3D

### 4. Formulário de Confirmação
- Validação em tempo real
- Radio buttons customizados
- Campo condicional para quantidade extra
- Loading state ao enviar
- Mensagem de sucesso com confete

### 5. Lista de Confirmados
- Carrega automaticamente via API
- Exibe nome, número de pessoas e status
- Grid responsivo
- Atualiza após cada confirmação

### 6. Galeria Mágica
- 4 cards com gradientes diferentes
- Representa cada ano da Alice (1, 2, 3, 4)
- Animação 3D ao hover
- Placeholder para fotos

### 7. Scene 3D (Three.js)
- Canvas fullscreen no fundo
- Coroa 3D dourada com 6 joias coloridas
- 100 estrelas animadas aleatoriamente
- Iluminação ambiente + point light
- Performance otimizada

---

## 🔌 Integração com Backend

O frontend está preparado para se comunicar com uma API REST. Veja a documentação completa em **[API_BACKEND.md](./API_BACKEND.md)**.

### Endpoints Utilizados

```typescript
// POST - Confirmar presença
POST http://localhost:8080/api/confirmar

// GET - Listar confirmações
GET http://localhost:8080/api/confirmacoes

// GET - Obter estatísticas
GET http://localhost:8080/api/estatisticas

// DELETE - Deletar confirmação (admin)
DELETE http://localhost:8080/api/confirmacoes/:id
```

### Configuração da URL da API

Para alterar a URL base da API, edite o arquivo `main.ts`:

```typescript
// Linha 8
const API_BASE_URL = 'http://localhost:8080/api';
```

---

## 🎭 Animações Incluídas

| Animação | Descrição | Elementos |
|----------|-----------|-----------|
| `float` | Flutuação suave | Coroa emoji, ícones |
| `rotate` | Rotação contínua | Coroa 3D |
| `bounce` | Pulo suave | Decorações, indicador scroll |
| `wiggle` | Balanço lateral | Emojis decorativos |
| `gradientShift` | Gradiente animado | Nome "Alice" |
| `pulse` | Pulsação | Mensagem de sucesso |
| `confettiFall` | Queda de confete | Após confirmação |

---

## 📱 Responsividade

### Breakpoints

- **Desktop**: >= 1024px
- **Tablet**: 768px - 1023px
- **Mobile**: <= 767px
- **Mobile Pequeno**: <= 480px

### Ajustes Automáticos

- Tamanho de fonte fluido com `clamp()`
- Grid responsivo com `auto-fit` e `minmax()`
- Ocultar elementos decorativos em mobile
- Reorganização de layout em telas pequenas

---

## 🚀 Build para Produção

1. **Criar build**
```bash
npm run build
```

2. **Arquivos gerados**
```
dist/
├── index.html
├── assets/
│   ├── main-[hash].js
│   └── styles-[hash].css
└── ...
```

3. **Testar build**
```bash
npm run preview
```

4. **Deploy**
   - Upload da pasta `dist/` para seu servidor
   - Ou use plataformas como:
     - Vercel
     - Netlify
     - GitHub Pages
     - AWS S3 + CloudFront

---

## 🔧 Configurações Avançadas

### Alterar Data da Festa

Edite `main.ts` linha 459:

```typescript
new CountdownTimer('2025-10-14T16:00:00');
```

### Alterar Informações do Evento

Edite `index.html` na seção "Detalhes do Reino Encantado":

```html
<p>14 de Outubro de 2025</p>
<p>16:00 horas</p>
<p>Rua das Flores, 123</p>
```

### Personalizar Cores

Edite `styles.scss` no início do arquivo:

```scss
$primary-pink: #ff6b9d;
$secondary-purple: #c44dff;
$accent-gold: #ffd700;
```

### Ajustar Performance 3D

Edite `main.ts` linha 119 para reduzir estrelas:

```typescript
for (let i = 0; i < 50; i++) { // Era 100
```

---

## 🐛 Troubleshooting

### Problema: Three.js não carrega
**Solução**: Certifique-se de que instalou as dependências:
```bash
npm install
```

### Problema: SCSS não compila
**Solução**: Execute o comando de compilação:
```bash
npm run compile
```

### Problema: API retorna erro 404
**Solução**: Verifique se o backend está rodando em `http://localhost:8080`

### Problema: Animações lentas em mobile
**Solução**: Reduza o número de partículas e estrelas 3D

---

## 📊 Performance

### Otimizações Implementadas

- ✅ Lazy loading de imagens
- ✅ Minificação de código
- ✅ Tree shaking automático (Vite)
- ✅ Compressão Gzip/Brotli
- ✅ Prefetch de recursos críticos
- ✅ Render otimizado do Three.js
- ✅ Debounce em eventos de scroll

### Métricas Esperadas (Lighthouse)

- Performance: **90+**
- Accessibility: **95+**
- Best Practices: **90+**
- SEO: **100**

---

## 🎉 Recursos Extras

### Fontes Google
- **Pacifico**: Títulos principais
- **Dancing Script**: Subtítulos e assinaturas
- **Quicksand**: Corpo do texto

### Emojis Utilizados
👑 🎀 💖 ⭐ 🦄 🎂 🎈 🎉 🎊 🎁 ✨ 💫 🌟 📅 🕐 📍 🎭 👤 💌 👥 💬

---

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir!

---

## 👨‍👩‍👧 Créditos

**Desenvolvido com 💖 para a Princesa Alice!**

- Design: Tema Princesa moderno
- Desenvolvimento: TypeScript + Three.js + SCSS
- Animações: CSS3 + Three.js
- Ícones: Emojis nativos

---

## 📞 Suporte

Para dúvidas ou problemas:

1. Consulte a [Documentação da API](./API_BACKEND.md)
2. Verifique a seção de Troubleshooting acima
3. Entre em contato com a família da Alice

---

## 🎊 Changelog

### v2.0.0 (2025-10-01)
- ✨ Adicionado elementos 3D com Three.js
- 🎨 Design completamente reformulado
- 🎯 Sistema de partículas animadas
- ⏰ Contagem regressiva em tempo real
- 📝 Lista de confirmados dinâmica
- 🎪 Galeria de momentos
- 📊 Integração completa com API
- 🚀 Migração para Vite
- 💅 Tema princesa com glassmorphism

### v1.0.0 (2025-09-01)
- 🎉 Versão inicial
- Formulário básico de confirmação
- Design simples

---

**🎂 Que a festa seja MÁGICA! ✨👑**
