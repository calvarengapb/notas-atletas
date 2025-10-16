let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let relatorio = []

class NotasAtletas{
    constructor(listaDeAtletas){
        this.listaDeAtletas = listaDeAtletas;
    }


    /***  
     * faz a validacao das informações dos atletas passados na lista, 
     * quantidade de notas e intervalo de valores de notas informados para os atletas
    */
    validarLista() {
        for (let i = 0; i < this.listaDeAtletas.length; i++ ){
            if (this.listaDeAtletas[i].nome === ''){
                return false
            }
            else if(this.listaDeAtletas[i].notas.length !== 5){
                return false
            }
            
            let temNotaInvalida = this.listaDeAtletas[i].notas.some(nota => nota < 1 || nota > 10);

            if (temNotaInvalida) {
                return false;
            }
        }
        return true
    }
    
    calcularMedia(notas){
        let soma = 0;
        let notasOrganizadas = notas.sort((a, b) =>  a - b)
        let notasComputadas = notasOrganizadas.slice(1,4)
        notasComputadas.forEach(nota => soma += nota);
        return soma / notasComputadas.length
    }

    gerarRelatorio(){
        if (this.validarLista()){
            this.listaDeAtletas.map(reg => {
               let atleta = {
                  nome: reg.nome,
                  notas:reg.notas.join(','),
                  media: this.calcularMedia(reg.notas),
                }
                relatorio.push(atleta)
            })
        }
        
        relatorio.forEach(atleta => {
            console.log(`Atleta: ${atleta.nome}`)
            console.log(`Notas Obtidas: ${atleta.notas}`)
            console.log(`Média Válida: ${atleta.media}`)
            console.log('\n')
                
        })
    }

}

let competicao = new NotasAtletas(atletas)
competicao.gerarRelatorio();