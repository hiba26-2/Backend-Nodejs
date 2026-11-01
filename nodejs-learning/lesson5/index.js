const fs=require("fs/promises")

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
}
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


fs.writeFileSync("message.txt","Leaning asynchronous Node.js")
fs.readFile("message.txt","utf8",(err,data)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(data);
    console.log("Program Finished");
})
console.log("Reading File...");
*/

async function manageFile(){
   await fs.writeFile("task.txt","I am learning async and await")
    try{
       const data= await fs.readFile("task.txt","utf8")
    console.log(data);
    }catch(err){
        console.log('Error',err.message);
    }
}
manageFile();