var valores = [2,4,5,94,2,47,90,0]

console.log(valores)
/*
for (var pos = 0; pos <valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
    */
 for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
 }