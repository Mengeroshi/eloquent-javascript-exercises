console.log(new Date().getFullYear());

console.log(new Date(2009,11,9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));


console.log(new Date(2009,11,9).getTime());

console.log(new Date(Math.floor(1578633625*1000)));// <=== multiplicado por 1000 por que esta en milisegundos

function getDate(string){
    let[_, month, day, year] = 
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month -1, )
}

console.log(getDate("1-30-2003"));