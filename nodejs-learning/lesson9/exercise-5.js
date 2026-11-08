const http=require("http");

const server=http.createServer((req,res)=>{
  
   const url = new URL(req.url, "http://localhost:3000");

  if (url.pathname === "/greet") {
    const name = url.searchParams.get("name") || "Guest";
    res.end("Hello " + name);
  } else {
    res.end("Home Page");
  }
});

server.listen(3000,()=>{
  console.log(("Server running on port 3000"))
}); 

