// ==== synchronous ====

// console.log(" I ")

// console.log(" eat ")

// console.log(" spoon ") 

// console.log(" ice cream ")

// console.log(" with a ")

// ==== asynchronous ====

// console.log(" I ")

// console.log(" eat ")

// setTimeout(()=>{
    
//     console.log(" ice cream ")
    
//     },1000)

// console.log(" with a ")

// console.log(" spoon ") 

// ==== callback ====

function one(call_two){
    call_two()
    console.log("Step 1 complete. Please call step 2");
}

function two(){
    console.log("Step 2")
}

one(two)