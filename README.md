# 🦸‍♂️ Desafio Classificador de Nível de Herói

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![DIO.me](https://img.shields.io/badge/DIO.me-Bootcamp-blue?style=for-the-badge) ![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)

> "Todo grande sistema começa com uma lógica simples e sólida."

Este repositório contém a solução para o **Desafio de Lógica de Programação** proposto pela [DIO.me](https://www.dio.me/). O objetivo principal foi consolidar conhecimentos em **estruturas de decisão** e **lógica condicional**, fundamentos essenciais para qualquer Engenheiro de Computação.

## 💻 Sobre o Projeto

O desafio consiste em criar um sistema que recebe o nome de um herói e a sua quantidade de experiência (XP), classificando-o em um ranking que vai do nível **Ferro** ao **Radiante**.

Apesar de ser um exercício introdutório, ele toca em conceitos que eu utilizo e estudo diariamente, seja na faculdade ou visando minha carreira em Security:
* **Tratamento de Dados:** Entrada de variáveis (Nome e XP).
* **Lógica Booleana:** Uso de operadores (`&&`, `<=`, `>=`) para definir intervalos.
* **Fluxo de Controle:** Estruturação de `if/else` encadeados para tomada de decisão.

## 🛠️ Tecnologias Utilizadas

* **JavaScript:** Linguagem escolhida para a implementação da lógica.
* **Node.js:** Ambiente de execução (opcional, para rodar localmente).

## 🧠 A Lógica por trás do Código (Engineering Mindset)

Como aspirante a **Engenheiro de Segurança**, vejo este código além do jogo. A lógica de "Classificação por Intervalos" é a mesma utilizada, por exemplo, para classificar a severidade de vulnerabilidades (CVSS) ou filtrar logs de rede:

```javascript
// Exemplo da estrutura utilizada no projeto
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
}
// ... e assim por diante
