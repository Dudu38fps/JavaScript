var academia = {
    nome: 'Eduardo',
    idade: 19,
    peso: 65,
    metadieta: 3500,
    metapeso: 70

}

if (academia.metadieta >= 2700) {
    console.log(`Você está em Bulking`)

} else if (academia.metadieta <= 2699) {
    console.log(`Você está em Cutting`)

}

if (academia.peso <= academia.metapeso) {
    console.log("Você presisa ganhar peso")
    for (var c = academia.peso; c -= academia.metapeso; c++ ) {
        console.log('ganhando peso')
    }
} else {
    console.log('Você bateu a meta!!')
}



