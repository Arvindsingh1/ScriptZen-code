let numArr = [1,2,3,4,5] ;

let newArr  = [] ; 

// newArr = [5,10,15,20,25] ; 

 numArr.forEach((number)=>{
    number = number * 5 ;
    newArr.push(number) ;
})

console.log(newArr);