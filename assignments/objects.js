const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  let keyArray = []
  for(let key in obj){
      keyArray.push(key);
  }
  return keyArray;
}

function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  let valueArray = []
  for(let key in obj){
      valueArray.push(obj[key]);
  }
  return valueArray;
}

function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  for(let key in obj)
  {
      obj[key]=cb(obj[key],key);
  }

}

function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  let keyValueArray = []
  for(let key in obj){
      keyValueArray.push([key,obj[key]]);
  }
  return keyValueArray;
}

/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  let newObj = {};
  for(let key in obj){
    newObj[obj[key]] = key; 
 }
 return newObj;
}

function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  for(let key in defaultProps){
    if(!(key in obj)){
      obj[key] = defaultProps[key];
    }
  }
  return obj;
}

//callback function for mapObject
const changeValues = (value,key)=>{
    if(typeof value === 'number')
    {
        return  value+5;
    }
    else if(key === 'name')
    {
        return  'Batman';
    }
    else if(key === 'location')
    {
        return 'New York';
    }
};

//output for each function
// let ansKeyArray = [];
// ansKeyArray = keys(testObject);
// console.log(ansKeyArray);

// let ansValueArray = [];
// ansValueArray = values(testObject);
// console.log(ansValueArray);

// mapObject(testObject,changeValues);
// console.log(testObject);

// let ansKeyValueArray = [];
// ansKeyValueArray = pairs(testObject);
// console.log(ansKeyValueArray);

// let ansNewObj = invert(testObject);
// console.log(ansNewObj); 

// let newObj=defaults(testObject,{animal:'bat',hair:'brown',location:'New York'});
// console.log(newObj);
