//Write a function called hasDuplicate which accepts an array 
//and returns true or false if that array contains a duplicate
const hasDuplicate = array => new Set(array).size !== array.length;

//Write a function called vowelCount which accepts a string and 
//returns a map where the keys are numbers 
//and the values are the count of the vowels in the string.

function vowelCount(string){
    const countMap = new Map();
    string = string.toLowerCase();
    for(let char of string){
        //if the letter is a vowel
        if("aeiou".indexOf(char) !== -1){
            //and if it is in the map already, add to count
            if(countMap.has(char)){
                countMap.set(char, countMap.get(char)+1);
            }
            //otherwise add it to the map
            else{
                countMap.set(char, 1);
            }
        }
    }
    return countMap;
}