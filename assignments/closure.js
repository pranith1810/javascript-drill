function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter =0;
  return{
    increment(){
    counter++;
    return counter;
    },
    decrement(){
    counter--;
    return counter;
    }
  }
}

function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned

  return function(){
    if(n!=0){
    n--;
    return cb();
    }
    else 
    return null;
  };
}

function cacheFunction(cb) {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

}

// //1st function output
// const count = counterFactory();
// count.increment();
// count.increment();
// count.decrement();
// console.log(count.increment());

// //2nd function output
// const returnHello = () => 'hello';
// const limitFunc = limitFunctionCallCount(returnHello,2);
// console.log(limitFunc());
// console.log(limitFunc());
// console.log(limitFunc());


