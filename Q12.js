const number = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 1000);
});


number.then((num)=>{
    return num*2
}).then((result)=>{
    return result+5
}).then((display)=>{
    console.log(display);
    
}).catch((err)=>{
    console.log(err);
    
})