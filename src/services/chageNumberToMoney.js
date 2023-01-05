const changeNumberToMoney=(number)=>{
    if(!number) number = 0;
    const formattedPrice= number.toLocaleString('es-CO',{style:'currency',currency:'COP'});
    return formattedPrice;
}
 export {changeNumberToMoney}