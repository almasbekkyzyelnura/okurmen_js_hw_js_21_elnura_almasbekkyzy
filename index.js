
//indexOf
const arr = [1, 2, 3, 4, 5,6,7];
console.log('indexOF',arr.indexOf(3));



//join
console.log('join',arr.join(',')); 



// keys
const keys = arr.keys();
    console.log('keys',keys);


// lastIndexOF
 console.log('lastIndexOF','***', arr.lastIndexOf(4));


//of
 const array = [
    {
      name: 'li',
      student : 1,
    },
    {
      name: 'pi',
      student : 2,
    },
  ];
  console.log('of', array);
  


//reduce
const reduced = arr.reduce((acc, val) => acc + val, 0);
console.log('reduce', reduced); 



//shift
const shift = arr.shift();
console.log( arr);  
console.log('shirft',shift);  



//ToRevesed
const reversed = arr.slice().reverse();
console.log('toReversed', reversed); 


//toSorted
const sorted = arr.slice().sort();
console.log('toSorted', sorted); 


//toSpiliced
const spliced = arr.slice(2);
console.log('toSpliced', spliced);  