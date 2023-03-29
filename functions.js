
const functions = {
    add : (num1, num2) => num1 + num2,
    getNull : () => null,
    createUser : () => {
        const user = {name : "hamid"}
        user["surname"] = "hamidou"
        return user
    },
    reverseString : (str) => {
        return str.toLowerCase().split('').reverse('').join('');
    },
    formaStr : (str) => {
        return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
    },
    isAnagram : (str1, str2) => {
        return functions.formaStr(str1) === functions.formaStr(str2)
    },
    chunckArray : (arr, len) => {
        const chunkedArr = [];
      
        arr.forEach(val => {
            const last = chunkedArr[chunkedArr.length - 1];
      
            if(!last || last.length === len) {
                chunkedArr.push([val]);
            } else {
                last.push(val);
            }
        })
      
        return chunkedArr;

    }
}

module.exports = functions 

console.log(functions.chunckArray([1,2,3], 1))
