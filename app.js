
var readline = require('readline')

 var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })

 entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    let nomeAluno = nome

    entradaDeDados.question('Digite o nome do curso: ', function(curso){
let nomeCurso = curso

        entradaDeDados.question('Digite a nota1: ', function(valor1){
            let nota1 = valor1

            entradaDeDados.question('Digite a nota2: ', function(valor2){
               let nota2 = valor2

                entradaDeDados.question('Digite a nota3: ', function(valor3){
                   let nota3 = valor3
                    
                    entradaDeDados.question('Digite a nota4: ', function(valor4){
                       let nota4 = valor4
                        let resultado

                        if(nomeAluno == '' || nomeCurso == '' || nota1 =='' || nota2 =='' || nota3 =='' || nota4 ==''){
                            console.log('ERRO: É obrigatorio o preenchimento de todas as entradas de dados.')
                        }else{

                             if(isNaN(nota1) == true || isNaN(nota2) == true || isNaN(nota3) == true || isNaN(nota4) == true){
                                console.log ('ERRO: É obrigatorio a entrada de valores numericos nas notas.')

                                }else{

                                if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10 ){
                                console.log('ERRO: É obrigatorio a entrada de valores entre 0 e 10.')

                                    }else{
                                    resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) /4
                                    
                                    if(resultado >= 7 && resultado <= 10){
                                        situação = "APROVADO"
                                    }else{
                                        if(resultado >= 5 && resultado < 7){
                                            situação = "RECUPERAÇÃO"
                                        }else{
                                            situação = "REPROVADO"
                                        }
                                    }//Finaliza o processamento de situação do aluno

                                    //Impressão do boletim do aluno
                                    console.log(`******BOLETIM****** \n
                                    * Aluno: ${nomeAluno}
                                    * Nome do Curso: ${nomeCurso}
                                    * Notas do Aluno: ${nota1} , ${nota2} , ${nota3} , ${nota4}
                                    * Média Final: ${resultado.toFixed(1)}
                                    * Situação Final: ${situação}
                                    * *************************************************************
                                    `)

                                    
                                        

                                    
                        
                                }  
                                }
                                }
                        
                    })//Fechamento da nota4
                })//Fechamento da nota3
            })//Fechamento da nota2
        })//Fechamento da nota1
    })//Fechamento do curso
})//Fechamento do nome