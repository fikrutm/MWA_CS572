

interface  bankAccount{
    money:number,
    deposit:(value:number)=>void;
}

interface myself{
    name:string,
    bankAccount: bankAccount,
    hobbies:string[]
}

let bankAccount:bankAccount={
    money:2000,
    deposit:function(value){
        this.money+=value
    }
}

let myself:myself={
    name:"Asaad",
    bankAccount:bankAccount,
    hobbies:["Violin","Cooking"]
}

console.log(myself.bankAccount.deposit(3000));
