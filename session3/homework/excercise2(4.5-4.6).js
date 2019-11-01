//4.5
let loop = true
let count = 1
let month = 1
let mySheeps = [20,15,30,55,40]
console.log(`hello my name is sơn, here is my flock ${mySheeps}`)
while(loop){
console.log(`month ${month}`)
    for(let i = 0;i<mySheeps.length;i++){
    mySheeps[i]+=50
}
console.log(`one month has passed,now these is my flock ${mySheeps}`)
let max = 0
for(let a = 0;a<mySheeps.length;a++){
    if(mySheeps[a]>max){
        max = mySheeps[a]
    }
}
console.log(`this is my sheep biggest ${max}`)
let number = mySheeps.indexOf(max)
mySheeps[number]=8
console.log(`after shearing, here is my flock ${mySheeps}`)
count+=1
month+=1
if(count==4){
loop = false
}
}
//4.6
let sum = 0
for(let b = 0;b<mySheeps.length;b++){
    sum +=mySheeps[b]
}
console.log(`my flock has size in total: ${sum}`)
console.log(`i would get ${sum} * 2$ = ${sum*2}`)