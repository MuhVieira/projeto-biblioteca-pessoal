Murilo Rezende Vieira  - 2º Sem ADS

Etapa 1:

Projeto Biblioteca pessoal iniciado.
tsconfig.json foi configurado descomentando rootDir e outDir.
Pastas src, src/index.ts, .gitignore e dist criadas com sucesso.

Este primeiro commit foi focado em configurar o projeto e criar todas as pastas necessárias, seguindo as orientações do Professor.

Etapa 2:

Dados iniciais adicionados nos arrays.
Saída formatada e validada.

Criei uma função para treinar e testar as possíveis saídas dos dados. Até o momento está correto. Consegui manter os dados sincronizados usando o forEach. Dentro da função exibirBiblioteca o forEach adiciona indice aos títulos. Também criei uma função para verificar se o livro no indice é marcado como LIDO. Se sim, apresenta a avaliação, se não apresenta a string "N/A"

Etapa 3:

Função adicionar e remover implementadas.
Menu interativo implementado.

Nessa etapa fiz alguns testes para implementar as funções de adicionar e remover livros. Diante disso precisei adicionar um menu interativo para conseguir fazer a chamada das funções que o usuário desejar. Para fazer essa função utilizei a biblioteca prompt-sync para criar os inputs do usuário. Na função removerLivro, a const indice usa indexOf para procurar na const titulos o nome do livro digitado. Ao encontrá-lo, a função splice retira o livro da biblioteca. Para o menu interativo, utilizei a estrutura de condição (if) novamente.

Etapa 4:

Funções de busca e filtros implementadas

Usei map e filter para implementar a busca por autores e usei includes em string para conseguir pesquisar por títulos dos livros. Na função buscarPorTitulo, fiz um método de loop para que o array titulos seja visitado em busca do titulo. Se o titulo for encontrado, ela retorna as informações do livro e seu indice. Caso não encontre, apresenta a mensagem de livro não encontrado. Implementei o termo assim como solicitado para melhorar a busca do usuário.

Etapa 5: Funções listarLidos e listarPendentes adicionada 

Usando uma estrutura de repetição e estruturas condicionais (if), adicionei as funções de listar livros lidos e pendentes.
Também alterei a estrutura condicional do menu de if para switch case para treinar um pouco o uso dessa função. Também alterei o sistema de avaliações e limitei as avaliações para um valor de 1 até 5 usando o if.

*Alteração: Função marcarComoLido Implementada.
Usando estruturas de repetição, a função pede um input do nome do livro que o usuário deseja marcar como lido, e após localizar o livro no array, ele pede a avaliação de 1 até 5 e marca o livro como lido. Caso o livro não exista, ele retorna a mensagem de livro não encontrado. Também usei a estrutura de condição if para não permitir que o ano do livro seja menor que 0.

Etapa 6:

Nesta etapa, as funções da seção ESTÁTISTICA foram implementadas. Essas funções mostram informações como total de páginas lidas, livro com a maior avaliação, média de avaliação e o percentual de livros lidos, usando filter, reduce e toFixed. No menu decidi implementar todas essas funções em apenas um case para que o usuário não tenha muitas opções de menu ocupando o terminal.

Etapa 7:

Usando estruturas de condição (if), e estruturas de repetição (for), criei a função exibirPorDecada, onde o array anos é verificado e usando o Math.floor para calcular o resultado e mostrar os livros de cada década.