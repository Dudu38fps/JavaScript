var namorada = {nome:'Luana',
    idade: 20,
    sexo:'F',
    peso: 61,
    engravidou(p=0){
        console.log('Está grávida!')
        this.peso += p
        
    }
 }
namorada.engravidou(10)
console.log(`${namorada.nome} pesa ${namorada.peso}Kgs`)