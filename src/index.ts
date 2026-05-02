import prompt from 'prompt-sync';

const input = prompt();

const titulos: string [] = ["Harry Potter e a Pedra Filosofal", 
    "Percy Jackson e o Ladrão de Raios", 
    "O Senhor dos Anéis", 
    "Hábitos Atômicos", 
    "Como Eu Era Antes de Voce"]
const autores: string [] = ["J.K. Rowling", "Rick Riordan", "J.R.R Tolkien", "James Clear", "Jojo Moyes"]
const anos: number [] = [1997, 2005, 1954, 2018, 2012]
const paginas: number [] = [224, 384, 1216, 320, 368]
const lido: string [] = ["LIDO", "LIDO", "PENDENTE", "LIDO", "PENDENTE"]
const avaliacoes: number [] = [5, 5, 0, 4, 0]

function exibirBiblioteca(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]): void {
    console.log("===MINHA BIBLIOTECA===")
    titulos.forEach((titulo, indice) => {
        const avaliacaoStr = lido[indice] === 'LIDO' ? `Avaliação: ${avaliacoes[indice]}` : 'Avaliação: N/A';
        console.log(`${indice + 1} ${titulo} - ${autores[indice]} (${anos[indice]}) - ${paginas[indice]} páginas - ${lido[indice]} - ${avaliacaoStr}`)
    })}

function adicionarLivro(titulos: string[], autores: string[], anos: number[], paginas: number[], lido: string[], avaliacoes: number[]): void {
    const nome = input('Título do Livro: ');
    const autor = input('Autor: ');
    const ano = parseInt(input('Ano: '));
    const paginasLivro = parseInt(input('Páginas: '));

    if (ano <= 0 || paginasLivro <= 0) {
        console.log("Dados inválidos!");
        return;
    }

    const seLido = input('Lido (s/n): ').toLowerCase() === 's' ? 'LIDO' : 'PENDENTE';

    let avaliacao = 0;

    if (seLido === 'LIDO') {
        avaliacao = parseInt(input('Avaliação (1-5): '));

        if (avaliacao < 1 || avaliacao > 5) {
            console.log("Avaliação inválida!");
            return;
        }
    }

    titulos.push(nome);
    autores.push(autor);
    anos.push(ano);
    paginas.push(paginasLivro);
    lido.push(seLido);
    avaliacoes.push(avaliacao);

    console.log("Livro adicionado com sucesso!");
}

    function removerLivro(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]) : void{
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

    function buscarPorTitulo(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[], termo: string): number[] {
        console.log(`Livros que contêm o termo "${termo}":`)
        const indices: number[] = [];
        for (let i = 0; i < titulos.length; i++) {
            if (titulos[i]?.toLowerCase().includes(termo.toLowerCase())) {
                const avaliacaoStr = lido[i] === 'LIDO' ? `Avaliação: ${avaliacoes[i]}` : 'Avaliação: N/A';
                console.log(`Índice ${i + 1}: ${titulos[i]} - ${autores[i]} (${anos[i]}) - ${paginas[i]} páginas - ${lido[i]} - ${avaliacaoStr}`)
                indices.push(i);
            }
        }
        if (indices.length === 0) {
            console.log("Nenhum livro encontrado com esse termo.")
        }
        return indices;
    }

    function listarPorAutor(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]) {
        console.log("Digite o nome do autor:")
        const nomeAutor = input("Autor: ")
        
        const livrosDoAutor = autores.map((autor, indice) => ({autor, indice}))
            .filter(item => item.autor.includes(nomeAutor))
        
        if (livrosDoAutor.length > 0) {
            livrosDoAutor.forEach(item => {
                const i = item.indice
                const avaliacaoStr = lido[i] === 'LIDO' ? `Avaliação: ${avaliacoes[i]}` : 'Avaliação: N/A';
                console.log(`${titulos[i]} (${anos[i]}) - ${paginas[i]} páginas - ${lido[i]} - ${avaliacaoStr}`)
            })
        } else {
            console.log("Autor não encontrado")
        }
    }

    function listarLidos(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]) {
        console.log("===LIVROS LIDOS===")
        for (let i = 0; i < titulos.length; i++) {
            if (lido[i] === "LIDO") {
                const avaliacaoStr = `Avaliação: ${avaliacoes[i]}`;
                console.log(`${i + 1} ${titulos[i]} - ${autores[i]} (${anos[i]}) - ${paginas[i]} páginas - ${lido[i]} - ${avaliacaoStr}`)
            }
        }
    }

    function listarPendentes(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]) {
        console.log("===LIVROS PENDENTES===")
        for (let i = 0; i < titulos.length; i++) {
            if (lido[i] === "PENDENTE") {
                const avaliacaoStr = `Avaliação: ${avaliacoes[i]}`;
                console.log(`${i + 1} ${titulos[i]} - ${autores[i]} (${anos[i]}) - ${paginas[i]} páginas - ${lido[i]} - ${avaliacaoStr}`)
            }
        }
    }

    function totalLivros(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]) : number {
        const total = titulos.length
        console.log(`Total de livros: ${total}`)
        return titulos.length;
    }

    function totalLidos(titulos: string[], autores: string[], anos: number[], paginas:number[], lido: string[], avaliacoes: number[]) : number {
        const total = titulos.length
        console.log(`Total de livros lidos: ${total}`)
         return lido.filter(status => status === "LIDO").length;
    }
    
    function marcarComoLido(titulos: string[], autores: string[], anos: number[], paginas: number[], lido: string[], avaliacoes: number[]): void {
        const titulo = input("Digite o título do livro: ");
        const indice = titulos.indexOf(titulo);

            if (indice === -1) {
            console.log("Livro não encontrado!");
            return;
            }

        let avaliacao: number;

        do {
        avaliacao = parseInt(input("Digite a avaliação (1 a 5): "));
            if (avaliacao < 1 || avaliacao > 5) {
                console.log("Avaliação inválida!");
            }
            } while (avaliacao < 1 || avaliacao > 5);
                lido[indice] = "LIDO";
                avaliacoes[indice] = avaliacao;

            console.log("Livro marcado como lido!");
}

    function percentualLidos(titulos: string[], autores: string[], anos: number[], paginas: number[], lido: string[], avaliacoes: number[]): void {
        const total = lido.length;
        const lidos = lido.filter(status => status === "LIDO").length;
        const percentual = total === 0 ? 0 : (lidos / total) * 100;

        console.log(`Percentual de livros lidos: ${percentual.toFixed(2)}%`);
}

    function mediaAvaliacoes(titulos: string[], autores: string[], anos: number[], paginas: number[], lido: string[], avaliacoes: number[]): void {
        const notas = avaliacoes.filter((_, i) => lido[i] === "LIDO");
        const soma = notas.reduce((acc, nota) => acc + nota, 0);
        const media = notas.length === 0 ? 0 : soma / notas.length;

        console.log(`Média das avaliações: ${media.toFixed(2)}`);
}

    function livroMaiorAvaliacao(titulos: string[], autores: string[], anos: number[], paginas: number[], lido: string[], valiacoes: number[]): void {
        const indiceMaior = avaliacoes.reduce((maiorIndice, nota, i, arr) => {
        return nota > arr[maiorIndice]! ? i : maiorIndice;
        }, 0);

        console.log(`Livro com maior avaliação: ${titulos[indiceMaior]}`);
}

    function totalPaginasLidas(titulos: string[], autores: string[], anos: number[], paginas: number[], lido: string[], avaliacoes: number[]): void {
        const total = paginas.filter((_, i) => lido[i] === "LIDO").reduce((acc, p) => acc + p, 0);
        console.log(`Total de páginas lidas: ${total}`);
}

function menu(): void {
    while (true) {
        console.log("Escolha uma opção abaixo: ")
        console.log("1: Exibir Biblioteca")
        console.log("2: Adicionar novo livro")
        console.log("3: Remover livro")
        console.log("4: Buscar livros")
        console.log("5: Buscar por autor")
        console.log("6: Listar livros lidos")
        console.log("7: Listar livros pendentes")
        console.log("8: Total de livros")
        console.log("9: Total de livros lidos")
        console.log("10: Marcar como lido")
        console.log("11: Estátisticas")

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
                const termoBusca = input("Digite o termo para buscar nos títulos: ");
                buscarPorTitulo(titulos, autores, anos, paginas, lido, avaliacoes, termoBusca);
                break;
            case "5":
                listarPorAutor(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "6":
                listarLidos(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "7":
                listarPendentes(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "8":
                totalLivros(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "9":
                totalLidos(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "10":
                marcarComoLido(titulos, autores, anos, paginas, lido, avaliacoes);
                break;
            case "11":
                console.log("===ESTATÍSTICAS===")
                percentualLidos(titulos, autores, anos, paginas, lido, avaliacoes);
                mediaAvaliacoes(titulos, autores, anos, paginas, lido, avaliacoes);
                livroMaiorAvaliacao(titulos, autores, anos, paginas, lido, avaliacoes);
                totalPaginasLidas(titulos, autores, anos, paginas, lido, avaliacoes);
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