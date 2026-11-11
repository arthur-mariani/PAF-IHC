# PAF-IHC

> Protótipo acadêmico de alta fidelidade para orientar usuários que não conseguem utilizar o crédito de Vale-Transporte no cartão.

## Versão final

O protótipo está publicado e pode ser acessado pelo endereço:

### [Acessar o protótipo de alta fidelidade](https://arthur-mariani.github.io/PAF-IHC/)

## Sobre o projeto

O **PAF-IHC** foi desenvolvido para a disciplina de Interação Humano-Computador a partir da **TAR-07 — Resolver indisponibilidade de crédito de Vale-Transporte** e do **Cenário 04**.

O problema abordado ocorre quando uma passageira recebe a informação de que o benefício foi enviado pelo empregador, mas o crédito ainda não está disponível no cartão. Nesse contexto, a pessoa precisa compreender a situação, identificar o próximo passo e encontrar um local de atendimento adequado.

A interface utiliza como referência a organização visual do portal da SEMOB-DF, mantendo elementos institucionais familiares. A implementação foi criada de forma independente para fins acadêmicos, sem reproduzir o backend ou as integrações do serviço oficial.

## Objetivo

Oferecer uma experiência clara, direta e adequada a dispositivos móveis para que a pessoa usuária consiga:

1. encontrar a opção **“Cartão ou crédito com problema”**;
2. informar se o empregador confirmou o envio do Vale-Transporte;
3. compreender a situação apresentada para o crédito;
4. identificar a orientação correspondente;
5. localizar um ponto de atendimento e consultar seu horário.

## Fluxo do protótipo

O fluxo principal é composto por quatro etapas:

1. **Diagnóstico:** a pessoa informa o que sabe sobre o envio do benefício pelo empregador;
2. **Situação:** o protótipo apresenta o estado correspondente à resposta;
3. **Orientação:** a pessoa recebe recomendações sobre o que fazer;
4. **Atendimento:** a pessoa consulta locais e horários demonstrativos.

## Funcionalidades

- página inicial inspirada na estrutura visual do portal da SEMOB-DF;
- acesso rápido para problemas relacionados ao cartão ou crédito;
- diagnóstico com diferentes possibilidades de resposta;
- apresentação dinâmica da situação do benefício;
- recomendações adequadas ao cenário informado;
- busca demonstrativa de locais de atendimento;
- indicador visual de progresso entre as etapas;
- navegação por teclado e foco visível;
- adaptação para celular, tablet e desktop;
- otimizações específicas para aparelhos Android e modo paisagem;
- hospedagem estática pelo GitHub Pages.

## Tecnologias

- HTML5 semântico;
- CSS3 responsivo;
- JavaScript sem dependências externas;
- GitHub Pages.

O projeto não utiliza frameworks, banco de dados ou serviços de backend.

## Estrutura

```text
PAF-IHC/
├── .nojekyll
├── index.html
├── credito/
│   ├── index.html
│   ├── situacao/index.html
│   ├── orientacao/index.html
│   └── atendimento/index.html
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        ├── main.js
        └── credit-flow.js
```

## Acessibilidade e responsividade

O protótipo inclui:

- link para acesso direto ao conteúdo principal;
- elementos semânticos e navegações identificadas;
- rótulos acessíveis para campos e controles;
- foco visível para navegação por teclado;
- áreas de toque adequadas para telas móveis;
- respeito à preferência de redução de movimento;
- suporte a áreas seguras e diferentes tamanhos de tela;
- layouts específicos para orientação retrato e paisagem.

## Aviso

Este projeto possui finalidade acadêmica e **não representa um serviço oficial da SEMOB-DF**. Os locais, endereços, horários e procedimentos exibidos no fluxo são demonstrativos e não devem ser utilizados como informação operacional oficial.
