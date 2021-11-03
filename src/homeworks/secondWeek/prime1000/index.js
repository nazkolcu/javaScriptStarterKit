function prime() {
    
    for (let i = 0; i < 1000; i++) {
        let result = true;
        for (let j = 2; j < i; j++) {
            if(i%j == 0){
                
                result = false;
                break;
            }
            
        }
        if(result){
            console.log(i + " asal sayıdır!");
        }
        else{
            console.log(i + " asal sayı değildir!");
           
        }
        
    }

}

prime()