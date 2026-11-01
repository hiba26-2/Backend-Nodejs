const { log } = require("console")
const fs=require("fs")
/*
fs.writeFileSync("student.txt","I am learning node")
const data=fs.readFileSync("student.txt","utf8")

console.log(data)

fs.writeFileSync("diary.txt","Today I learned Node.js")
fs.appendFileSync("diary.txt","\nI also learned about the fs module")
const data=fs.readFileSync("diary.txt","utf8")
console.log(data)

fs.writeFileSync("old-notes.txt","These notes are no longer needed")
fs.unlinkSync("old-notes.txt")
if(fs.existsSync("old-notes.txt")){
    console.log(true)
}else{
     console.log(false)
}*/
try{
const data=fs.readFileSync("unkown.txt","utf8")
console.log(data);
}catch(err){
    if(err.code==="ENOENT"){
        console.log("File not Found")
    }else{
        console.log("Error:",err.code);
    }
}

