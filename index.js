// index.js

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (el) {
      result.push(callback(el));
    });
    return result;
  }
  
  function myReduce(collection, callback, accumulator) {
    let startingIndex = 0;
  
    const keys = Object.keys(collection);
    if (accumulator === undefined) {
      accumulator = collection[keys[0]];
      startingIndex = 1;
    }
  
    for (let i = startingIndex; i < keys.length; i++) {
      const key = keys[i];
      accumulator = callback(accumulator, collection[key], collection);
    }
  
    return accumulator;
  }
  
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (el) {
      if (predicate(el)) {
        result.push(el);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  
  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
  
  // Uncomment the following functions if you have implementations
  // for mySortBy and myFlatten, or skip them for now.
  
  // function mySortBy(collection, callback) {
  //   // Implementation for sorting
  // }
  
  // function myFlatten(collection, shallow) {
  //   // Implementation for flattening
  // }
  
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  function myValues(collection) {
    return Object.values(collection);
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    // mySortBy,
    // myFlatten,
    myKeys,
    myValues,
  };
  