let account = {
    money: 500,
    add(newMoney){
        this.money += newMoney;
    },
    get myMoney(){
        return this.money;
    },
    set setMoney(value){
        this.money = value;
    }
}

Object.defineProperty( account, 'date', {
    get : function() {
        return "17.12.2021";
    }
});

Object.defineProperty( account, 'income', {
    value : function() {
            return account.money * 1.25;
    }
});

account.sentence = () => `You have ${account.money}$.`

console.log(account.myMoney);
account.add(200);
console.log(account.myMoney);

account.setMoney = 150;
console.log(account.myMoney);

console.log(account.date);

console.log(account.income());

account.owner = "Ania";
console.log(account.owner);

console.log(account.sentence());