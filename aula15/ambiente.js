let num = [2,5,1,8,0,7,9,3]
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)

var pos = num.indexOf(1)

if (pos == -1) {
    console.log('O número não foi encontrado')
} else {
    console.log(`O número esta na posição ${pos}`)
}

for (var p in num) {
    console.log(`A posição ${p} tem o valor ${num[p]}`)
}