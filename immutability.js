//Arrays
const arrayOfNumbers = [1, 2, 3, 4, 5];
const copyArrayOfNumbers = arrayOfNumbers;
const newArray = copyArrayOfNumbers.push(2,3);
console.log(arrayOfNumbers);
console.log(copyArrayOfNumbers);

const object = {
  key: "Value of Key",
};

// Here we have created reference to the same Object in the memory 
// so when add any new keys in copy it gets added in original object
// same thing doesn't happen when we use spread operator below
// because it creates a brand new copy of object and we continue to amend 
// on to it 
const copyOfObject = object;

copyOfObject["key1"] = "Value of key1";
console.log(object);
console.log(copyOfObject);

// using spread operator 

const copyOfObject1 = { ...object};
copyOfObject1["key2"] = "Value of key2";
console.log(object);
console.log(copyOfObject1);
const copyArrayOfNumbers1 = [...arrayOfNumbers];