console.log(isPalindrom("NawwsaN"))

function isPalindrom(str){
    const l = str.length/2
    for(let i = 0 ; i< l ; i++){
        if(str.charAt(i) != str.charAt(str.length-1-i))
            return false
    }
    return true
}