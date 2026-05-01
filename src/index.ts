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
const lido: string [] = ["LIDO", "LIDO", "PENDENTE", "LIDO", "PENDENTE"]
const avaliacoes: number [] = [5, 5, 3, 4, 0]

function exibirBiblioteca(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]): void {
    console.log("===MINHA BIBLIOTECA===")
    titulos.forEach((titulo, indice) => {
        console.log(`${indice + 1} ${titulo} - ${autores[indice]} (${anos[indice]}) - ${paginas[indice]} páginas - ${lido[indice]} - Avaliação: ${avaliacoes[indice]}`)
    })}

    function adicionarLivro(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]): void {
        const nome = input('Título do Livro: ');
        const autor = input('Autor: ');
        const ano = parseInt(input('Ano: '));
        const paginasLivro = parseInt(input('Páginas: '));
        const seLido = input('Lido (s/n): ').toLowerCase() === 's' ? 'LIDO' : 'PENDENTE';
        const avaliacao = parseInt(input('Avaliação do Livro: '));

        titulos.push(nome);
        autores.push(autor);
        anos.push(ano);
        paginas.push(paginasLivro);
        lido.push(seLido);
        avaliacoes.push(avaliacao);

        console.log("Livro Adicionado com Sucesso!");
    }

    function removerLivro(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]) {
        console.log("Digite o título a ser removido: ");

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

    function buscarPorTitulo(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]) {
        console.log("Digite o título do livro:")
        const buscaPor = input("Título: ")

        for (let i = 0; i < titulos.length; i++) {
            if (titulos[i]?.includes(buscaPor)) {
                console.log(`${titulos[i]} - ${autores[i]} (${anos[i]}) - ${paginas[i]} páginas - ${lido[i]} - Avaliação: ${avaliacoes[i]}`)
                return
            }
        }
    }

    function listarPorAutor(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]) {
        console.log("Digite o nome do autor:")
        const nomeAutor = input("Autor: ")
        
        const livrosDoAutor = autores.map((autor, indice) => ({ autor, indice }))
            .filter(item => item.autor.includes(nomeAutor))
        
        if (livrosDoAutor.length > 0) {
            livrosDoAutor.forEach(item => {
                const i = item.indice
                console.log(`${titulos[i]} (${anos[i]}) - ${paginas[i]} páginas - ${lido[i]} - Avaliação: ${avaliacoes[i]}`)
            })
        } else {
            console.log("Autor não encontrado")
        }
    }

function menu(): void {
    while (true) {
        console.log("Escolha uma opção abaixo: ")
        console.log("1: Exibir Biblioteca")
        console.log("2: Adicionar novo livro")
        console.log("3: Remover livro")
        console.log("4: Buscar livros")
        console.log("5: Buscar por autor")
        console.log("0: Sair")

        const escolha = input("Opção: ")

        switch (escolha) {
            case "1": 
                exibirBiblioteca(titulos, autores, anos, paginas, lido, avaliacoes);
            break;
            case "2":
                adicionarLivro(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "3":
                removerLivro(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "4":
                buscarPorTitulo(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "5":
                listarPorAutor(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "0":
                console.log("Saindo...");
                process.exit();
            default: 
                console.log("Opção inválida");
        }
    }
}

menu();