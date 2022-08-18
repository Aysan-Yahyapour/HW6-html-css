let str ="ali"
let result = []


function getSubstring(inputArr){
  let temp = "";
  inputArr.forEach(function(element, index){
  temp= temp + element;
  result.push(temp);
  // console.log(inputArr)
}
  )}



str.split('').forEach(function(element, index)
{getSubstring ([...str.slice(index)])
})

console.log(result)