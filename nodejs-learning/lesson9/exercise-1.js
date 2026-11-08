const http=require("http")
const server=http.createServer((req,res)=>{
    res.end("Hello Student")
})
server.listen(3000,()=>{
    console.log("Server Running on Port 3000");
})