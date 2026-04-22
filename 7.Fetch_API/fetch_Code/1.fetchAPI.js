// fetch ak inbuild function hai js me

//  body(...) ReadableStream - body ke ander data hota hai -
    // raw data ko json banana padega


fetch("https://randomuser.me/api/")
.then((rawdata)=>{
    return rawdata.json();
})
.then((data)=>{
    console.log(adata.results[0]);
})
.catch((err)=>{
    console.log(err);
})