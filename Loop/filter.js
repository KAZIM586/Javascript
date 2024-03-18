let nums = [1,2,3,4,5,6,7,8,9,10]
 let newnums=nums.forEach((elemetns) =>{       //for each loop dow=es not return any vlaue
    // console.log(elemetns);
    return elemetns;
})
console.log(newnums);



let num = [1,2,3,4,5,6,7,8,9,10]
const newnum =num.filter((number) => number>5)  // filtermethod return value
console.log(newnum);