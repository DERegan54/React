// Choose a random fruit from items array. 

function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

// Here's the function I wrote: 
//Remove first appearance of item and return array.  
//Return undefined if item is not found

// function remove(item, items) {
//     for (let i = 0; i < items.length; i++) {
//       if (items[i] === item) {
//         return [items.slice(0, i)]
//       }
//     }
//   }
  
//Here's the solution function
/** return copy of array w/o first appearance of item
 *
 * If not found, return undefined.
 *
 **/

function remove(item, items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)]
    }
  }
}


export {choice, remove}