console.log("initiate")

////////////////////////////////////////////////
console.log("invoke")

//////////////////////////////////////////////////

const student = {
    workEthic:"outstanding",
    bodyType:"lean",
    gender:"male",
    favFood:"pizza"
} 
console.log(student)
//////////////////////////////////////////////////
let favouriteFruit = [
    "mango",
    "lychee",
    "strawberry",
    "papaya"
]
console.log(favouriteFruit)
console.log("----------------")
 
const reSult = () => {
    console.log(favouriteFruit.shift())
    console.log(favouriteFruit.push("kiwi"))
 }
 reSult()
 console.log("----------------")
 console.log(favouriteFruit)