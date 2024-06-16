for (var a = 1; a <= 10; a++) {
    console.log(a)
}

var idade = 22

if (idade <= 20) {
    for (var idade = 1 ; idade <=20 ; idade++) {
        console.log(`Você tem ${idade} anos`)
    }
} else if (idade > 20) {
    console.log('Se fudeu, você passou dos 20')
}