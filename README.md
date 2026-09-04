# Calculadora Web

Calculadora simples construída com **HTML, CSS e JavaScript puro** (sem frameworks ou bibliotecas externas), com as quatro operações básicas: adição, subtração, multiplicação e divisão.

![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)


## ⚙️ Funcionalidades

- Operações: soma (`+`), subtração (`-`), multiplicação (`x`), divisão (`÷`)
- Números decimais (`.`)
- `C` — limpa toda a operação (reset completo)
- `CE` — apaga o último dígito digitado
- Encadeamento de operações (ex: `2 + 3 + 4 =`)
- Layout responsivo básico via tabela HTML

## 📁 Estrutura do projeto

```
.
├── index.html    # Estrutura da calculadora (teclado + visor)
├── style.css     # Estilização visual
└── script.js     # Lógica de cálculo e eventos de clique
```

## 🚀 Como executar

Não há dependências nem processo de build. Basta:

1. Clonar o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Abrir o arquivo `index.html` diretamente no navegador
   (ou usar a extensão **Live Server** do VS Code para recarregamento automático).

## 🧠 Como funciona

- Cada botão (`.btn`) recebe um `addEventListener('click', ...)` via `querySelectorAll`.
- Se o conteúdo do botão for um número, ele é concatenado na variável `value` e exibido no visor.
- Se for um operador, a função `Math()` decide o fluxo: guarda o primeiro operando em `valueAux`, salva o operador em `lastOp` e zera o visor para o próximo número.
- O `=` (ou o próximo operador digitado) dispara `calculate()`, que aplica a operação salva em `lastOp` sobre `valueAux` e `value`.


## 📄 Licença

Este projeto está sob a licença MIT — sinta-se livre para usar e modificar.
