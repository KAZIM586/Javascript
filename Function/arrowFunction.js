// using of this keyword

const user = {
    userName:"Sonu",
    price:989,

    wecomeMessage: function(){
        console.log(`${this.userName}, welcome to website.`);
    }
}

user.wecomeMessage()

const add = (num1,num2) => {
    return num1 + num2;
}
console.log("Sum of two number is:",add(5,8));