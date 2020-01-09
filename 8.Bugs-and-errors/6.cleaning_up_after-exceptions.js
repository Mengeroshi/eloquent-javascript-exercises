const accounts = {
    a: 100,
    b: 0,
    c: 20,
};

function getAccount(obo){
    let accountName = obo;
    if(!accounts.hasOwnProperty(accountName)){
        throw new Error(`No such account: ${accountName}`)
    }
    return accountName;

}
/*
function transfer(from, amount){
    if(accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount(a)] += amount;
}
*/

function transfer(from, amount){
    if(accounts[from]< amount)return;
    let progress = 0;
    try{
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount("a")] += amount;
        progress = 2;
    }finally{
        if(progress == 1){
            accounts[from] += amount;
        }
    }
}