function sumOfTwoNums (input){
    let startingNumber = Number(input[0]);
    let finalNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combination = 0;
    let isFound = false;

        for(let i = startingNumber; i <= finalNumber; i++){
            for(let j = startingNumber; j <= finalNumber; j ++){
                combination ++;
                if(i + j === magicNumber){
                    console.log(`Combination N:${combination} (${i} + ${j} = ${magicNumber})`);
                    isFound = true;
                    break;
                }
            }if(isFound){               
                break;
            }
        }
        if(!isFound){
            console.log(`${combination} combinations - neither equals ${magicNumber}`);
        }
}