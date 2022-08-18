

// arr = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
let count = 0;
function nestedArray(arr){

    let total = [];
    arr.forEach((element) => {
    // console.log(element);
        if(typeof(element === 'number')){
            count ++;
        }else if(typeof(element === 'object')){
            total = [...total,...element]
            
        
            } 
        }      
    );
    console.log(total) 
    if(total.length === 0){
        console.log(count)
    }else{
        nestedArray(total);
    }  
    console.log(total)

}
nestedArray([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])


// یه دونه کمتر میده؟

// nestedArrconsole.log(total.length);

// function countArray(arr){
//     count = 0;
//     for(element in arr){
//         if(typeof(arr[element] === 'number')){
//         count +=1;
//     }elseif(typeof(arr[element] === 'object' && arr[element] !== null)){
//         countArray(arr[element]);
//     }
//     console.log(count);
//     }
// }

// countArray([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);