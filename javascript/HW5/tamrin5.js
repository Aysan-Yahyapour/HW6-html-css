function evenDasht(str){
    let total = '';
    for(let i = 0; i <= str.length -1; i ++){
        if(str[i-1] % 2 === 0 && str[i] % 2 === 0){
            total += `-${str[i]}`

    

        }else{
            total += str[i]
        }
    }
    console.log(total)
}

evenDasht('025468')


// str = '025468';
// for(let i=0 ; i <= str.lenght; i++){
//     console.log(str[i])
// }





// function evenDasht(str){
//     let totalArray = '';
//     let strArr = str. split('');
//     let numArr = strArr. map(Number);
//     for(let i = 0; i < numArr.length; i++) {
//         totalArray.push(i);
//         if(numArr[i-1]%2===0 && numArr[i]%2===0) {
//             let total = `${numArr[i-1]} - ${numArr[i]}`;
//             totalArray.push(total);
//     }
//     console.log(totalArray)
// }
// }

// evenDasht('025468');