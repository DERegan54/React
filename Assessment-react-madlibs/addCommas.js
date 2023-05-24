function addCommas(num) {
  let numArr = Array.from(num.toString()); 
  let revNumArr = numArr.reverse();
  let currentCommaIdx;
   if(revNumArr.includes('-')){
       revNumArr.pop();
   }
   console.log(revNumArr)
   if (revNumArr.includes('.')) {
       let decIdx = revNumArr.indexOf('.');  
       currentCommaIdx = decIdx + 3;
   } else {
       currentCommaIdx = 3;
   let revNumArrWithCommas = placeCommas(revNumArr, currentCommaIdx);
   let numArrWithCommas = revNumArrWithCommas.reverse();
   let numStrWithCommas = numArrWithCommas.join();
   return numStrWithCommas;
   }
}

function placeCommas(arr, currentCommaIdx) {
   let comma  = '.';
   if (currentCommaIdx >= arr.length-1){
       return;
   } else {
       currentCommaIdx = 3;
   }
   arr.splice(currentCommaIdx, 0, comma);
   currentCommaIdx = currentCommaIdx + 3;
   return placeCommas(arr, currentCommaIdx);
}

module.exports = addCommas;





module.exports = addCommas;