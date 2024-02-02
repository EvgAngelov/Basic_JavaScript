function cake (input){
    let index = 0;
    let length = Number(input[index]);
    index ++;
    let wide = Number(input[index]);
    index ++;
    let command = input[index];
    index ++;
    let countPieces = length * wide;

    while(command !== "STOP"){   
        let currentPieces = Number(command);
        countPieces -= currentPieces;
            if(countPieces < 0){
                break;
            }
        command = input[index];
        index ++;
    }
    diff = Math.abs(countPieces)
    if (countPieces>=0) {
        console.log(`${diff} pieces are left.`);
    } else if (countPieces<0) {
        console.log(`No more cake left! You need ${diff} pieces more.`);    
    } 
}