function vacation (input){
    index = 0;
    let vacation = Number(input[0]);
    index ++;   
    let startMoney = Number(input[1]);
    index ++;
    let command = input[index];
    index ++;

    let spendCounter = 0;
    let dayCounter = 0;
    let savedMoney = 0;
    savedMoney += startMoney;

    while(command === 'spend') {
        spendCounter++;
        dayCounter++;
        let currentMoney = Number(input[index]);
        index++;
        savedMoney = savedMoney - currentMoney;
 
        if(savedMoney < 0) {
            savedMoney = 0;
        }
        command = input[index];
        index++;
    }

    while(command === 'save') {
        spendCounter === 0;
        dayCounter++;
        let currentMoney = Number(input[index]);
        index++;
        savedMoney += currentMoney;
        command = input[index];
        index++;
    }

    if (spendCounter >= 5){
        console.log(`You can't save the money.`);
        console.log(`${dayCounter}`)
    } else if (savedMoney < vacation) {
        console.log(`You can't save the money.`);
        console.log(`${dayCounter}`)
    }
 
    if (savedMoney >= vacation) {
        console.log(`You saved the money for ${dayCounter} days.`)
    }
}