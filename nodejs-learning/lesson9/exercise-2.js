
const http=require("http")
const server=http.createServer(
    (req,res)=>{
        if(req.url==="/"){
            res.end("HomePage")
        }else if(req.url==="/about"){
            req.end("About Page")
        }else {
      res.end("Page Not Found");
    }
    }
)

server.listen(3000);