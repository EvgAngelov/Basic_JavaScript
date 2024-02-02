function examPreparation (input){
    let index = 0;
    let negativeGradeCount = Number(input[index]);
    index ++;

    let command = input[index];
    index ++;
    let negativeGradeCounter = 0;
    let sumOfGrade = 0;
    let sumOfProblems = 0;
    let taskName = "";
    let isNeedBreak = false;

    while(command !== "Enough"){
        taskName = command;
        let tempGrade = Number(input[index]);
        index ++;
        sumOfProblems ++;
        sumOfGrade += tempGrade;
        if(tempGrade <= 4.00){
            negativeGradeCounter ++;
            if(negativeGradeCounter >= negativeGradeCount){
                isNeedBreak = true;
                break;
            }
        }
        command = input[index];
        index ++;
    }

    let avg = sumOfGrade / sumOfProblems;
        if(isNeedBreak){
            console.log(`You need a break, ${negativeGradeCounter} poor grades.`)
        }else{
            console.log(`Average score: ${avg.toFixed(2)}`);
            console.log(`Number of problems: ${sumOfProblems}`);
            console.log(`Last problem: ${taskName}`);
        }
}