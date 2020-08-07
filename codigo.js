
const arr = [4, 5, 9, 12, 13, 1, 10, 2,12]; 
function findSum(nums, combineNum, sum){
    const sums = [];
    nums.map((num, i) => {                                                          //corresponde a el numero e i al indice
        for (let index = i; index < nums.length; index++) {                         //ciclo que termina hasta la ultima posision del areglo
            
            if(index + combineNum > nums.length) 
            return
            const slicedArray = nums.slice(index + 1, index+combineNum);                    //recorre el areglo y lo guarda a la variable slicedArray            
            const tempSum = slicedArray.reduce((pre,current) => pre + current , num);       //parte que hace las interaciones iterador acumulativo y ahí 
                                                                                            //uso el numero actual como valor inicial y luego voy sumando 
                                                                                            //todos los restantes del slice,                    
            
            if(sum == tempSum){                             // compara y guarda los valores 
                sums.push([
                    num,
                    ...slicedArray
                ])
            }
        }
    })
    return sums;            //retorna el resultado deseado
}


findSum(arr, 4 , 18)
console.log(findSum(arr, 2 , 17))