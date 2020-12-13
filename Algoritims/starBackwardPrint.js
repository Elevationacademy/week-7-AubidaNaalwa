printStars(5)
function printStars(num){
    printStarsRec('*', num)
}
function printStarsRec(star,num){
    if(star.length == num ){
        console.log(star)
        return
    }
    printStarsRec(star+'*',num)
    console.log(star)
    return
}