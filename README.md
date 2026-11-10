# PAF-IHC

> Protótipo acadêmico de alta fidelidade, responsivo e compatível com GitHub Pages, voltado à orientação de usuários com crédito de Vale-Transporte indisponível no cartão.

## Sobre o projeto

O **PAF-IHC** é um protótipo de alta fidelidade desenvolvido para a disciplina de Interação Humano-Computador. A solução parte da **TAR-07 — Resolver indisponibilidade de crédito de Vale-Transporte** e do **Cenário 04**, no qual uma passageira precisa compreender a situação do benefício, identificar o próximo passo e localizar atendimento adequado.

A interface utiliza como referência a organização visual da página inicial do portal da SEMOB-DF, preservando elementos familiares como cabeçalho institucional, busca, navegação, acesso rápido, notícias, serviços e rodapé. O código foi reconstruído como uma implementação acadêmica independente, sem copiar o backend ou as integrações do portal oficial.

## Objetivo

Oferecer uma experiência móvel clara e direta para que a pessoa usuária consiga:

1. encontrar a opção **“Cartão ou crédito com problema”**;
2. informar se o empregador confirmou o envio do Vale-Transporte;
3. compreender o estado apresentado para o crédito;
4. identificar o próximo passo recomendado;
5. localizar um ponto de atendimento e consultar seu horário.

## Estado atual

O repositório contém a estrutura completa da página principal:

- barra de serviços governamentais e acessibilidade;
- identificação da Secretaria e canais de contato;
- campo de busca;
- navegação institucional;
- área de destaque;
- painel de acesso rápido;
- seção de notícias;
- serviços mais procurados;
- projetos, transparência e rodapé;
- adaptação responsiva para celular, tablet e desktop;
- menu móvel com atributos de acessibilidade.

O fluxo específico de cartão e crédito será implementado nas próximas etapas. Até lá, o acesso permanece como uma âncora demonstrativa na página principal.

## Tecnologias

- HTML5 semântico;
- CSS3 responsivo;
- JavaScript sem dependências externas;
- GitHub Pages para hospedagem estática.

O projeto não exige Node.js, frameworks, banco de dados ou etapa de compilação.

## Estrutura

```text
PAF-IHC/
├── .nojekyll
├── index.html
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

## Executar localmente

Na raiz do repositório, execute:

```bash
python3 -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

Também é possível abrir `index.html` diretamente, mas o servidor local reproduz melhor o comportamento esperado no GitHub Pages.

## Publicação no GitHub Pages

Todos os arquivos utilizam caminhos relativos e funcionam em um endereço com subdiretório, como `https://<usuario>.github.io/PAF-IHC/`.

Para publicar:

1. abra **Settings → Pages** no repositório;
2. em **Build and deployment**, escolha **Deploy from a branch**;
3. selecione a branch `main` e a pasta `/ (root)`;
4. salve a configuração e aguarde a publicação.

O arquivo `.nojekyll` impede o processamento desnecessário pelo Jekyll.

## Acessibilidade e responsividade

A base inclui:

- link para pular diretamente ao conteúdo principal;
- navegações identificadas por rótulos acessíveis;
- foco visível para teclado;
- alvos de interação adequados para telas móveis;
- menu com estado `aria-expanded`;
- respeito à preferência `prefers-reduced-motion`;
- layouts específicos para diferentes larguras de tela.

## Próximas etapas

- implementar o fluxo de diagnóstico do crédito;
- criar as variações de estado do benefício;
- adicionar a busca de locais de atendimento;
- validar textos e procedimentos com fontes oficiais;
- realizar avaliação de usabilidade do protótipo de alta fidelidade.

## Padrão de commits

O projeto utiliza mensagens curtas e objetivas no padrão de *Conventional Commits*:

```text
feat: adiciona uma nova funcionalidade
fix: corrige um comportamento ou defeito
docs: altera documentação
style: altera apenas apresentação visual
refactor: reorganiza o código sem mudar o comportamento
test: adiciona ou atualiza verificações
chore: realiza manutenção do projeto
```

## Aviso

Este projeto possui finalidade acadêmica e **não representa um serviço oficial da SEMOB-DF**. Procedimentos, endereços, horários e responsabilidades institucionais devem ser confirmados em fontes oficiais antes de serem apresentados como informação real.
