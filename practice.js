function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

class calculator {
    add(a,b) {
        return a + b;
    }
    subtract(a,b) {
        return a - b;
    }
    divide(a,b) {
        return a / b;
    }
    multiply(a,b) {
        return a * b;
    }
}
const calc = new calculator()

function caesarCipher(string, shift) {
    let result = []
    const alpha = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];
    let array = string.split("");
    array.forEach(element => {
        if (element == "," || element == "!" || element == " ") {
            result.push(element);
        } else if (alphabet.includes(element)) {
            temp = alphabet.findIndex((x) => x == element)           
            if (temp+shift > alphabet.length - 1) {
                result.push(alphabet[temp+shift-alpha.length])
            }else {
                result.push(alphabet[temp+shift])
            }
        }
        else {
            temp = alpha.findIndex((x) => x == element)           
            if (temp+shift > alpha.length - 1) {
                result.push(alpha[temp+shift-alpha.length])
            }else {
                result.push(alpha[temp+shift])
            }
            
        }
        
    });
    return result.join("");
}

module.exports = { capitalize, reverseString, calc, caesarCipher };