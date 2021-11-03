
function findPrime (...numbers) { 


  for (let i = 0; i < numbers.length; i++) {
      let result = true;
      
    for (let j = 2; j < numbers[i]; j++) {
        if(numbers[i]%j == 0){
            
            result = false;
            break;
        }
        
    }
    if(result){
        console.log(numbers[i] + " asal sayıdır!");
    }
    else{
        console.log(numbers[i] + " asal sayı değildir!");
       
    }
     
  }
    
}


findPrime(20,13,7,4)