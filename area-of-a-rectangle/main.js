function computeArea(width, height) {
  return width * height;
  // your code here
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testComputeArea() {
  let width = 3;
  let height = 4;
  let expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  } else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

testComputeArea();
