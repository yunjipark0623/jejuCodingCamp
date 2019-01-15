(function() {
  // var 변수는 여기까지 hoisting이 된다.
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // ReferenceError: i is not defined
