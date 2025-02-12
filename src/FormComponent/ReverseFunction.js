import React from 'react'

const ReverseFunction = () => {
// const arr=[12,4,2,1,3];
// let newArray=[];
// for(let i=arr.length-1;i>=0;i--){
//     newArray.push(arr[i])
// }
// console.log(newArray,'new');


// const arr=[12,3,2,1,5];
// let temp;
// for(let i=0;i<arr.length;i++){
// for(let j=0;j<arr.length-i-1;j++){
//     if(arr[j]>arr[j+1]){
//          temp= arr[j];
//          arr[j]=arr[j+1];
//          arr[j
//             +1
//          ]=temp
//     }
// }
// }


const arr = [12, 3, 2, 1, 5, 3, 12, 7, 5];
let duplicates = [];
let see = {};

for (let i = 0; i < arr.length; i++) {
    console.log([arr[i]]);
console.log(see,'aa');

    if (see[arr[i]]) {
        
        duplicates.push(arr[i]);
    } else {
        console.log('trur',see[arr[i]]);
        
        see[arr[i]] = true;
    }
}

console.log(duplicates);  // Output: [3, 12, 5]

let a=2;
let b=5;

[a,b]=[b,a]
console.log(a,'a');



// console.log(arr,'temo');

  return (
    <div>
      
    </div>
  )
}

export default ReverseFunction
