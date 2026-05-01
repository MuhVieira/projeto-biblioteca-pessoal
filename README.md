Etapa 1:

Projeto Biblioteca pessoal iniciado.
tsconfig.json foi configurado descomentando rootDir e outDir.
Pastas src, src/index.ts, .gitignore e dist criadas com sucesso.

Este primeiro commit foi focado em configurar o projeto e criar todas as pastas necessárias, seguindo as orientações do Professor.

Etapa 2:

Dados iniciais adicionados nos arrays.
Saída formatada e validada.

Criei uma função para treinar e testar as possíveis saídas dos dados. Até o momento está correto. Consegui manter os dados sincronizados usando o forEach.

Etapa 3:

Função adicionar e remover adicionadas
Menu interativo implementado

Nessa etapa fiz alguns testes para implementar as funções de adicionar e remover livros. Diante disso precisei adicionar um menu interativo para conseguir fazer a chamada das funções que o usuário desejar.

Etapa 4:

Funções de busca e filtros implementadas

Usei map e filter para implementar a busca por autores e usei includes em string para conseguir pesquisar por títulos dos livros

Etapa 5: Funções listarLidos e listarPendentes adicionada 

Usando uma estrutura de repetição e estruturas condicionais (if), adicionei as funções de listar livros lidos e pendentes.
Também troquei a estrutura condicional do menu de if para switch. Sendo mais versátil e fácil de alterar. Também alterei o sistema de avaliações e limitei as avaliações para um valor de 1 até 5 usando o if

*Alteração: Função marcarComoLido Implementada

Usando estruturas de repetição, a função pede um input do nome do livro que o usuário deseja marcar como lido, e após localizar o livro no array, ele pede a avaliação de 1 até 5 e marca o livro como lido. Caso o livro não exista, ele retorna a mensagem de livro não encontrado