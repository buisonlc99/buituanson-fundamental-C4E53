let loop = true
let myShop = ["T-Shirt","Sweater"]
while(loop){
let answer = prompt("Welcome to our shop!!what do you want?(C/R/U/D)").toLowerCase()
if(answer =="r"){
    myShop.forEach((myShop, index) => {
        console.log(`${index+1}.${myShop}`)
    });
}else if(answer=="c"){
    let created = prompt("muốn thêm gì bạn ei??")
    myShop.push(created)
    myShop.forEach((myShop, index) => {
        console.log(`${index+1}.${myShop}`)
    });
}else if(answer=="u"){
    let userUpdate = prompt("bạn muốn update theo i or v ?").toLowerCase()
    if(userUpdate=="i"){
        let userUpdate1 = Number(prompt("nhập thứ bạn muốn sửa theo i đi"))
        if(userUpdate1<0 || userUpdate1>myShop.length){
            alert("nhập sai rồi bé ơi-_-")
        }else{
            let userUpdate1_1 = prompt("muốn sửa thành gì nào")
            myShop[userUpdate1-1] = userUpdate1_1
            }
        }else if(userUpdate=="v"){
            let userUpdate2 = prompt("nhập thứ muốn sửa theo v đi bạn")
            if(myShop.includes(userUpdate2)){
                let userUpdate2_1 = myShop.indexOf(userUpdate2)
                let userUpdate2_2 = prompt("muốn sửa thành gì nèo ?")
                myShop[userUpdate2_1] = userUpdate2_2
        }else{
            alert("nhập sái rồi bé ưi")
        }
    }
    myShop.forEach((myShop, index) => {
        console.log(`${index+1}.${myShop}`)})
}else if(answer=="d"){
    let delete_ = prompt("muốn delete theo i or v").toLowerCase()
    if(delete_ =="i"){
        let delete1 = Number(prompt("nhập theo i thứ muốn sửa đi bạn yêu"))
        if(delete1<0 || delete1>myShop.length){
            alert("nhập sai r b ơi")
        }else{
            myShop.splice(delete1-1, 1)
        }
    }else if(delete_ =="v"){
        let delete2 = prompt("nhập thứ muốn xóa theo v đi bạn")
        if(myShop.includes(delete2)){
            let delete2_1 = myShop.indexOf(delete2)
            myShop.splice(delete2_1, 1)
        }else{
            alert("nhập sai rồi bạn ơi")
        }
    }myShop.forEach((myShop, index) => {
        console.log(`${index+1}.${myShop}`)
    });
}else{
    alert("sai roi")
}}
