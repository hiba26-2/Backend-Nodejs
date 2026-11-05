const fs=require("fs")

const stream=fs.createReadStream("test.txt",{
    encoding:"utf8",
    highWaterMark:5
})
//when node js reads a file it emits "data" 
  let count=0
stream.on("data",(chunk)=>{
  ;
    count++;
    console.log("got chunk:",chunk);
  
})
//when file end
stream.on("end",()=>{
    console.log("Finished reading.Total junks:",count);
})
