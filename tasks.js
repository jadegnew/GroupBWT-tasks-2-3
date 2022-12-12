//#region Задача 2
const isPrime = (num) => {
    if (num < 2) return false;
    else if(num == 2) return true;
    let i = 2;
    const lim = Math.sqrt(num);
    while(i <= lim){
        if(num % i == 0) return false;
        i += 1;
    }
    return true;
};

const reverseNumber = (n) => {
    return (n < 0 ? -1 : 1) * parseInt(n.toString().split('').reverse().join(''));
}

const findPalyndrome = (a, b) => {
    let counter = 0;
    for(a; a < b; a++){
        if(isPrime(a) && isPrime(reverseNumber(a)))
            counter += 1;
    }
    return counter;
};
let a = 5, b = 1000
console.log(`Количество простых чисел полиндромов в диапазоне от ${a} до ${b}: ${findPalyndrome(a, b)}`);

//#endregion

//#region Задача 3

const countWords = (string) => {
    string = string.replace(/[^a-zа-яё0-9\s]/gi, ' ');
    string = string.replace(/[\s]+/gim, ' ');
    console.log(string);
    let matches = string.match(/\S+/g) || [];
    console.log(matches.length);
}

countWords('Text,... на ? language,- :"" , where nujno узнать count слов');

//#endregion