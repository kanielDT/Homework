let animal = "lion"
switch(animal) {
    case "lion" :
        console.log("lions goes rawr!")
        break;
    case "horse":
        console.log("horses go neigh!")
        break;
    case "bird":
        console.log("birds chirp!")
        break;
}
////////////////////////////////////////////////////
function typeFruit(fruitColor){
   if(fruitColor === "orange"){
      console.log("the color of this fruit is orange")
   }
   else if(fruitColor === "apple"){
      console.log("the color of this fruit is red")
   }
   else if(fruitColor === "grape"){
      console.log("fruit it is either red or green")
   }
   else (fruitColor === false)
      return
   
}

typeFruit("orange")

/////////////////////////////////////////////////////

// declaring a function 
function add(num1, num2) {
   let reSult = num1 + num2
   console.log('reSult ->', reSult) 
   return reSult 
}

add(80, 5)

// assigning RESULT from function to RES variable
// function needs to return something otherwise is undefined
// const res = add(3, 90)
// console.log('res -> ', res)




