import prompt from 'prompt-sync';

const input = prompt();

const titulos: string [] = ["Harry Potter e a Pedra Filosofal", 
    "Percy Jackson e o Ladrão de Raios", 
    "O Senhor dos Anéis", 
    "Hábitos Atômicos", 
    "Como Eu Era Antes de Você"]
const autores: string [] = ["J.K. Rowling", "Rick Riordan", "J.R.R Tolkien", "James Clear", "Jojo Moyes"]
const anos: number [] = [1997, 2005, 1954, 2018, 2012]
const paginas: number [] = [224, 384, 1216, 320, 368]
const lido: boolean [] = [true, true, false, true, false]
const avaliacoes: number [] = [5, 5, 3, 4, 0]

function exibirBiblioteca(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: boolean[], avaliacoes: number[]): void {
    console.log("===MINHA BIBLIOTECA===")
    titulos.forEach((titulo, indice) => {
        console.log(`${indice + 1} ${titulo} - ${autores[indice]} (${anos[indice]}) - ${paginas[indice]} páginas - Lido: ${lido[indice]} - Avaliação: ${avaliacoes[indice]}`)
    })}

    function adicionarLivro(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: boolean[], avaliacoes: number[]): void {
        const nome = input('Título do Livro: ');
        const autor = input('Autor: ');
        const ano = parseInt(input('Ano: '), 10);
        const paginasLivro = parseInt(input('Páginas: '), 10);
        const seLido = input('Lido (s/n): ').toLowerCase() === 's';
        const avaliacao = parseInt(input('Avaliação do Livro: '), 10);

        titulos.push(nome);
        autores.push(autor);
        anos.push(ano);
        paginas.push(paginasLivro);
        lido.push(seLido);
        avaliacoes.push(avaliacao);

        console.log("Livro Adicionado com Sucesso!");
    }

    function removerLivro(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: boolean[], avaliacoes: number[]) {
        console.log("Digite o título a ser removido:");

        const remover = input('Título: ')
        const indice = titulos.indexOf(remover);

        if (indice !== -1) {
            titulos.splice(indice, 1);
            autores.splice(indice, 1);
            anos.splice(indice, 1);
            paginas.splice(indice, 1);
            lido.splice(indice, 1);
            avaliacoes.splice(indice, 1);
            console.log("Livro removido com sucesso!");
        } else {
            console.log("Livro não encontrado")
        }
    }

function menu(): void {
    while (true) {
        console.log("Escolha uma opção abaixo: ")
        console.log("1: Exibir Biblioteca")
        console.log("2: Adicionar novo livro")
        console.log("3: Remover livro")
        console.log("0: Sair")

        const escolha = input("Opção: ")

        if (escolha === "1") {
            exibirBiblioteca(titulos, autores, anos, paginas, lido, avaliacoes);
        } else if (escolha === "2") {
            adicionarLivro(titulos, autores, anos, paginas, lido, avaliacoes);
        } else if (escolha === "3") {
            removerLivro(titulos, autores, anos, paginas, lido, avaliacoes);
        } else if (escolha === "0") {
            console.log("Saindo...");
            break;
        } else {
            console.log("Opção inválida.")
        }
    }
}

menu();