# 🚲 Bikcraft

Projeto de uma loja de **bicicletas artesanais** fictícia, desenvolvido para fins de estudo e prática de **HTML, CSS e JavaScript**.

O site apresenta o catálogo de bicicletas, páginas institucionais e formulário de orçamento, com foco em:
* ✅ **Design Responsivo** (Desktop, Tablet e Mobile)
* ✅ **Organização Modular de Código** (HTML e CSS)
* ✅ **Boas Práticas de Desenvolvimento Front-End**

---

## 🔗 Demonstração
> 🌐 [**Acesse o projeto no GitHub Pages**](https://gabriella-pio.github.io/bikcraft)

---

## 📂 Estrutura do Projeto

A organização do projeto segue uma abordagem modular, onde os arquivos CSS são separados por contexto (global, página específica ou componente) e o JavaScript utiliza um plugin para auxiliar nas animações.

```text
bikcraft/
├── bicicletas/            # Páginas de produtos individuais
│   ├── magic.html
│   ├── nebula.html
│   └── nimbus.html
│
├── css/                   # Estilos organizados por módulos
│   ├── bicicleta/         # Estilos da página de produto individual
│   ├── bicicletas/        # Estilos da lista de bicicletas
│   ├── contato/           # Estilos de contato e lojas
│   ├── global/            # Estilos globais (header, footer, reset)
│   ├── home/              # Estilos da página inicial
│   ├── orcamento/         # Estilos da página de orçamento
│   ├── seguros/           # Estilos da página de seguros
│   ├── termos/            # Estilos da página de termos
│   ├── utilidades/        # Classes reutilizáveis (cores, tipografia, formulário, etc.)
│   ├── style.css
│   └── style.min.css
│
├── js/                    # Scripts JavaScript
│   ├── plugins/
│   │   └── simple-anime.js   # Plugin de animação
│   └── script.js             # Lógica principal
│
├── img/                    # Imagens otimizadas do projeto
│
├── index.html              # Página inicial
├── bicicletas.html         # Página de catálogo de bicicletas
├── contato.html            # Página de contato
├── orcamento.html          # Página de orçamento
├── seguros.html            # Página de seguros
└── termos.html             # Página de termos e condições
```

---

## 💡 Conceitos Praticados

| Área | Conceitos Chave |
| :--- | :--- |
| **HTML** | Semântica com HTML5, Acessibilidade Básica. |
| **CSS** | Layouts com **Flexbox** e **Grid**, Design Responsivo (`@media`), Organização **Modular**, Definição de **Utilidades** (tipografia, cores). |
| **JS** | Interatividade, Manipulação do DOM, Integração de **Plugins** (Animação). |
| **Geral** | Versionamento com Git e GitHub. |

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **Simple-Anime.js** (Plugin de Animação)
* **Git & GitHub**

---

## 🚀 Como Executar o Projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/Gabriella-Pio/bikcraft.git](https://github.com/Gabriella-Pio/bikcraft.git)
    ```
2.  Entre na pasta do projeto:
    ```bash
    cd bikcraft
    ```
3.  Abra o arquivo `index.html` no seu navegador.

---

## 🧑‍💻 Desenvolvedora

**Gabriella Pio Corrêa**
📍 Desenvolvedora em formação - Estudante de Engenharia de Software

---
Este projeto é apenas para fins de estudo e aprendizado. Feito a partir das aulas da plataforma Origamid.
