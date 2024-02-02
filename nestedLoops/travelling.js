function travel (input){

    let index=0
    let coment = input[index]
    index++
    while (coment !== "End") {
        let destination = coment
        let cost = Number(coment)
         if (destination !=cost) {
            console.log(`Going to ${destination}!`)
         }
        coment = input[index]
        index++
        }
}
