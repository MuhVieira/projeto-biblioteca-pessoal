const titulos: string [] = ["Harry Potter e a Pedra Filosofal", "Percy Jackson e o Ladrão de Raios", "O Senhor dos Anéis", "Hábitos Atômicos", "Como Eu Era Antes de Você"]
const autores: string [] = ["J.K. Rowling", "Rick Riordan", "J.R.R Tolkien", "James Clear", "Jojo Moyes"]
const anos: number [] = [1997, 2005, 1954, 2018, 2012]
const paginas: number [] = [224, 384, 1216, 320, 368]
const lido: boolean [] = [true, true, false, true, false]
const avaliacoes: number [] = [5, 5, 3, 4, 0]

function exibirBiblioteca(titulos: string[], autores: string[], anos: number[], páginas:number[], lido: boolean[], avaliacoes:number[]): void {
    titulos.forEach((titulo, indice) => {
        console.log(`${indice + 1} ${titulo} - ${autores[indice]} (${anos[indice]}) - ${páginas[indice]} páginas - Lido: ${lido[indice]} - Avaliação: ${avaliacoes[indice]}`)
    })}

exibirBiblioteca(titulos, autores, anos, paginas, lido, avaliacoes);