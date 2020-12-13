printStarSeries(5, 3)

function printStarSeries(num, count){
    star = '*'
    for(let i = 0 ;i< count; i++){
        printStars(num)
        printStarsRec('*',num)
        console.log()
    }
}

function printStars(num){
    let star = '*'
    for(let i = 0; i < num ;i++){
        console.log(star)
        star+='*'
    } 
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