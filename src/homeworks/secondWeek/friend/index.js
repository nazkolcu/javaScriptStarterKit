 function isFriend(...numbers) {
  
    let sum1 = 0;
    let sum2 = 0;

    for(let j = 0; j < numbers.length; j++){
        
        let total = 0
        
        for (let i = 1; i < numbers[j]; i++) {
        
            if(numbers[j] % i == 0){
       
                total = total + i
            }

        
    }
    
    if(j == 0)
    {  
        sum1 = total
    }
    else if(j == 1)
    {
        sum2 = total
    }
   
}

if(sum1 == numbers[1] && sum2 == numbers[0]){
    console.log("arkadaşlar");
}
else{
    console.log("arkadaş değiller");
}
}


isFriend(220,284)
isFriend(220,222)
