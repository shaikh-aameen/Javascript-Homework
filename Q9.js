function task(status) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (status) {
                resolve("Task completed successfully")
            } else {
                reject("Task failed")
            }
        }, 2000);
    })
}

task(true).then((result)=>{
    console.log(result);
    
}).catch((err)=>{
    console.log(err);
    
})