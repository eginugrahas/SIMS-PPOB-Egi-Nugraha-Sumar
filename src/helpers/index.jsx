export const parsingRibuan = (number = 0)=>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
