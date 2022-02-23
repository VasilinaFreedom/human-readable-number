module.exports = function toReadable (number) {
    let arr = Array.from(String(number))
        let tro =arr.map(item=>{
           if(item == '1'){return 'one'}
          else if(item == '2'){return 'two'}
          else if(item == '3'){return 'three'}
          else if(item == '4'){return 'four'}
          else if(item == '5'){return 'five'}
          else if(item == '6'){return 'six'}
          else if(item == '7'){return 'seven'}
          else if(item == '8'){return 'eight'}
          else if(item == '9'){return 'nine'}
          else if(item == '0'){return '0'}
        })
            
            if(number == 10){return 'ten'}
           else if(number == 0){return 'zero'}
           else if(number == 11){return 'eleven'}
           else if(number == 12){return 'twelve'}
           else if(number == 13){return 'thirteen'}
           else if(number == 15){return 'fifteen'}
           else if((number>=14 && number<20) && number !=18) {return `${tro[1]}teen`}
          else if(number == 18){return 'eighteen'}
          else if(number == 100){return 'one hundred'}
        let arrOne = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
        let arrZero = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty', 'ninety']
        let x = number.toString() //наше число превращаем в строку
        let y = x[0]//берем первую цифру числа и выводим результат из массива, равный этой цифре
        let z = x[1]
        let o = x[2]
        
          if(tro.length===2 && z==='0'){ return `${arrZero[y]}${tro[1]}`.slice(0, -1)}
        else if(tro.length===2 && z!='0'){ return `${arrZero[y]} ${tro[1]}`}
        else if (tro.length===3 && z!='0' && z!='1' && o!=0){return `${tro[0]} hundred ${arrZero[z]} ${tro[2]}`}
        else if (tro.length===3 && z==='0' && o===0){return `${tro[0]} hundred ${tro[2]}`.slice(0, -1) }
        else if (tro.length===3 && z==='0' && o!=0){return `${tro[0]} hundred ${tro[2]}`}
        else if (tro.length===3 && z==='1' && o!='0'){return `${tro[0]} hundred ${arrOne[o]}`}
        else if (tro.length===3 && z==='1' && o==='0'){return `${tro[0]} hundred ten`}
        else if (tro.length===3 && z!='1'&& z!='0' && o==='0'){return `${tro[0]} hundred ${arrZero[z]} `.slice(0, -1)}
        else if (tro.length===3 && z==='0' && o==='0'){return `${tro[0]} hundred ${arrZero[z]}`.slice(0, -1)}

    return tro.join('')
}
