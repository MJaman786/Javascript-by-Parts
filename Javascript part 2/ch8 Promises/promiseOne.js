const promiseOne = new Promise((resolve, reject)=>{
    let myResponse = true;
    if (myResponse) {
        resolve('Successful Response')
    }else{
        reject('Response Rejected')
    }
})

promiseOne
.then((response)=>{
    console.log(`Promise Response: ${response}`);
})
.catch((erro)=>{
    console.log(`E: ${erro}`);
})
.finally(()=>{
    console.log(`Promise Execution Completed`);
})