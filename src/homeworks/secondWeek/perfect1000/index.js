function perfect() {

    for (let i = 0; i < 1000; i++) {
        let sum=0;
        for (let j = 0; j < i; j++) {
            if(i%j==0){
                sum = sum + j;
            }
            
        }

        if(sum == i)
        {console.log(i + " mükemmel sayı");}
        else{console.log(i + " mükemmel sayı değildir");}

    }
    
}

perfect()