//4.1
let sheepSize = [30,5,17,29,23,355,39]
console.log(`this is sheep size [${sheepSize}]`)
//4.2
let sizeMax = 0
for(let i=0;i<7;i++){
    if(sizeMax<sheepSize[i]){
        sizeMax=sheepSize[i]
    }
}
console.log(`my biggest sheep has size: ${sizeMax}`)
//4.3
let indexSheep = sheepSize.indexOf(sizeMax)
sheepSize[indexSheep] = 8
console.log(`after shearing, here my flock [${sheepSize}]`)
//4.4
for(let a = 0;a<sheepSize.length;a++){
    sheepSize[a]+=50
}
    console.log(`one month has passed, now here my flock [${sheepSize}]`)
//4.5


