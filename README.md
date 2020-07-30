## Requisitos

- Apresentar uma interface simples e intuitiva
- Usuário é apresentado com uma lista de quadrinhos e suas devidas informações como título, capa, preço e formatos
- Usuário pode adicionar uma ou mais cópias em seu carrinho
- Usuário tem um feedback visual de quantos itens possui em seu Carrinho
- Usuário tem um feedback visual da quantidade de um certo produto ele possui em seu carrinho
- Usuário pode navegar por páginas de quadrinhos
- Página do carrinho possui uma lista com todos os itens, suas informações e quantidades presentes
- Usuário pode editar a quantidade de um certo produto em seu carrinho diretamente na página do carrinho
- Usuário opção de remover por completo um item
- Usuário clica no botão de compra e finaliza seu pedido cadastrando seu meio de pagamento

### Escolhidos

- Apresentar uma interface simples e intuitiva
- Usuário é apresentado com uma lista de quadrinhos e suas devidas informações como título, capa, preço e formatos
- Usuário pode adicionar uma ou mais cópias em seu carrinho
- Usuário tem um feedback visual de quantos itens possui em seu Carrinho
- Usuário tem um feedback visual da quantidade de um certo produto ele possui em seu carrinho
- Página do carrinho possui uma lista com todos os itens, suas informações e quantidades presentes
- Usuário pode editar a quantidade de um certo produto em seu carrinho diretamente na página do carrinho
- Usuário opção de remover por completo um item

Escolhi estes requisitos por representarem a estrutura mais fundamental de um e-commerce, criando assim um projeto focado no MVP.

## Funcionalidades

### Home

- Quadrinhos disponiveis são apresentados lado a lado de maneira responsível
- Cada Card de Quadrinho tem a opção de adicionar ao carrinho
  - Cada vez que o botão adicionar é pressionado uma cópida do produto ao carrinho
  - O card do Quadrinho possui um contador para apresentar a quantidade daquele produto no carrinho
- O Ícone do carrinho apresenta a quantidade de produtos diferentes estão presentes no carrinho
  - Ao clicar nele você é direcionado para a página do carrinho

### Carrinho

- Cada item diferente possui um card específico contendo informações sobre o produto
  - Dentro destes cards é possível observar a capa, título e quantidade do produto em questão
  - Clicando no botão (+) uma cópia extra do produto é adicionada ao carrinho
  - Clicando no botão (-) uma cópia do produto é removida carrinho, caso tenha apenas uma, o produto é removido por completo
  - Clicando no botão remover o item é removido do carrinho, independente de sua quantidade
- O valor total é calculado em tempo real de acordo com os produtos e suas quantidades no carrinho

## Bibliotecas Utilizadas

- React Router (Responsável por apresentar o elemento da devida página / Responsavel pela Função de troca de Páginas sem reload (conceito de SPA) )
- MD5 (Lib responsável por gerar a hash devida para acessar a API da Marvel. )
- Redux/React-Redux (Lib e Wrapper para adição do Padrão Redux)

## Ciclos de Vida Componentes React

- componentDidMount => Roda depois que o componente é renderizado na DOM
- componentDidUpdate => Roda assim que o update é realizado, geralmente usado para atualizar a DOM a partir da mudança
- componentWillUnmount => Roda antes do component ser destruido

Nas versões mais atualizadas do React agora são usados os hooks como o useEffect.

## 3 pontos de performance

- Armazenar os Quadrinhos já buscados no state para evitar um fetch sempre que o usuário entra na Home
- Armazenar os itens do carrinho nos cookies ou localstorage do para sempre ter um histórico do usuário para facilitar na conversão de vendas e evitar com que o usuário perca seus items em um eventual reload da página
- A lista de quadrinhos deveria vir filtrada com apenas os quadrinhos disponiveis pelo back-end, na aplicação é feito um filtro pelo front, pode custar em tempo de load da página
