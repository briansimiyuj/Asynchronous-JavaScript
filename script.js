console.log(1)

console.log(2)


setTimeout(() => {
    
    console.log('Callback function just fired')  // This doesn't block the rest of the code from executing

}, 2000)


console.log(3)

console.log(4)