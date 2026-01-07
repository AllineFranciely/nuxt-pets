# 🐶🐱 Nuxt Pets

Projeto frontend desenvolvido com **Nuxt (Vue 3)** simulando um cenário real de **BFF (Backend for Frontend)** integrado a um **backend GraphQL**, inspirado em desafios técnicos para vagas de frontend pleno.

O objetivo é demonstrar boas práticas de arquitetura frontend, consumo de APIs, organização de projeto e experiência do usuário.

---

## 🚀 Stack utilizada

### Frontend

* **Nuxt 3**
* **Vue 3 (Composition API)**
* **TypeScript**
* **$fetch / Nitro API**

### Backend (Mock)

* **Apollo Server**
* **GraphQL**
* **Vite**

### Gerenciamento

* **pnpm / npm**
* **Git (Conventional Commits)**

---

## 🧠 Arquitetura

```
Frontend (Nuxt Pages)
        ↓
BFF (server/api/*)
        ↓
Mock GraphQL (Apollo Server)
```

### Por que BFF?

* Isola o frontend do schema GraphQL
* Permite transformar dados para o formato ideal da UI
* Centraliza tratamento de erros
* Simula arquitetura real usada em produtos de escala

---

## 📂 Estrutura do projeto

```
nuxt-pets/
├─ app/
│  ├─ app.vue
│  │
│  ├─ components/
│  │  ├─ ErrorMessage.vue
│  │  ├─ PetCard.vue
│  │  ├─ PetDetails.vue
│  │  └─ SkeletonCard.vue
│  │
│  ├─ composables/
│  │  └─ usePets.ts
│  │
│  └─ pages/
│     └─ pet/
│        ├─ index.vue
│        └─ [id].vue
│
├─ server/
│  └─ api/
│     ├─ pets.get.ts
│     └─ pets/
│        └─ [id].get.ts
│
├─ mock-gql/
│  ├─ server.js
│  └─ package.json
│
├─ public/
│  └─ pets/
│     ├─ rex.jpg
│     ├─ mia.jpg
│     ├─ thor.jpg
│     ├─ luna.jpg
│     ├─ bob.jpg
│     ├─ nina.jpg
│     ├─ max.jpg
│     ├─ bella.jpg
│     ├─ rocky.jpg
│     ├─ mel.jpg
│     ├─ simba.jpg
│     ├─ lilo.jpg
│     ├─ toby.jpg
│     ├─ lola.jpg
│     ├─ duke.jpg
│     ├─ kiwi.jpg
│     ├─ apolo.jpg
│     ├─ frida.jpg
│     ├─ zeus.jpg
│     └─ pipoca.jpg
│
├─ .env
├─ .gitignore
├─ nuxt.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ tsconfig.json
└─ README.md
```

---

## 🔌 Backend GraphQL (Mock)

O backend GraphQL é um servidor **Apollo Server standalone**, rodando localmente.

### ▶️ Subir o servidor GraphQL

```bash
cd mock-gql
node server.js
```

Servidor disponível em:

```
http://localhost:4000/graphql
```

### Exemplo de query

```graphql
query {
  pets {
    id
    name
    age
    type
    image
  }
}
```

---

## 🔁 BFF (Backend for Frontend)

Os endpoints Nuxt ficam em `server/api` e são responsáveis por:

* Consumir o GraphQL
* Tratar erros
* Adaptar dados para a UI

### Exemplos

```
GET /api/pets
GET /api/pets/:id
```

---

## 🖼️ Imagens dos pets

As imagens são servidas estaticamente pelo Nuxt:

```
/public/pets/*.jpg
```

Exemplo de acesso direto:

```
http://localhost:3000/pets/rex.jpg
```

---

## ▶️ Rodando o projeto

### 1️⃣ Instalar dependências

```bash
pnpm install
# ou
npm install
```

### 2️⃣ Subir o Nuxt

```bash
pnpm dev
# ou
npm run dev
```

Acesse:

```
http://localhost:3000
```

---

## 🧪 O que este projeto demonstra

* Uso real de **Nuxt + Vue 3**
* Integração com **GraphQL**
* Implementação de **BFF**
* Organização de código frontend
* Boas práticas de arquitetura
* Simulação de desafio técnico profissional

---

## 📝 Boas práticas adotadas

* Separação clara de responsabilidades (UI / lógica / dados)
* Uso de BFF para desacoplar frontend do GraphQL
* Composables para reuso de lógica
* Componentes pequenos e focados
* Tratamento de loading e erro

---

## 📌 Próximos passos (possíveis melhorias)

* Paginação
* Loading skeleton
* Tratamento visual de erros
* Testes unitários
* Design system

---

## 🐾 Motivação

Projeto inspirado no ecossistema pet e na preocupação com experiência do usuário, performance e escalabilidade — valores essenciais em produtos digitais modernos.

---

Feito com 💙,  café ☕ e pets 🐾

![2026-01-06 18-11-48](https://github.com/user-attachments/assets/d764591c-dc3d-4949-a230-816b65b54397)
