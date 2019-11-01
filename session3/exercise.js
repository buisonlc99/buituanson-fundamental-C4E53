let menu = ["cơm","phở","cháo","bún","mì","bánh mỳ"]
let user = prompt("bạn muốn nhập c/r/u/d: ")
if(user== "c"){
    let answer = prompt("muốn thêm món gì nào: ")
    menu.push(answer)
    menu.forEach((monan, index) => {
        console.log(`${index+1}.${monan}`)
    });
}else if(user=="r"){
    console.log(menu)
}else if(user=="u"){
    let user1 = prompt("sửa theo i or v: ")
    if(user1 == "v"){
        let user1_1 = prompt("muốn sửa món nào(v): ")
        if(menu.includes(user1_1)){
            let a = prompt("sửa thành gì nào: ")
            let a1 = menu.indexOf(user1_1)
            menu[a1]=a
        }else{
            alert("nhập sai rồi")
        }
    
}else if(user1== "i"){
    let user1_2 = Number(prompt("muốn sửa món nào(i): "))
    if(user1_2<0 || user1_2>menu.length){
        alert("nhập sai rồi b")
    }else{
        let b = prompt("sửa thành gì nào: ")
    menu[user1_2] = b
    }
}
console.log(menu)
}else if(user=="d"){
    let dele = prompt("muốn xóa món theo i or v")
    if(dele="i"){
        let dele1 = Number(prompt("nhập món bạn muốn xóa theo i đi"))
        if(dele1>menu.length || dele1<0){
            alert("nhập sai rồi bé ưi")
        }else{
            menu.splice(dele1,1)
        }
    }else if(dele="v"){
        let dele2 = prompt("nhập món cưng muốn xóa theo v đi")
        if(menu.includes(dele2)){
            menu.splice(dele2,1)
        }else{
            alert("nhập sai rồi cưng")
        }
    }console.log(menu)
}
