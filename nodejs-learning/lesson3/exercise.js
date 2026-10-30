const studentName = "Hiba";

const registration = new Promise((resolve, reject) => {
  if(studentName=="Hiba"){
    resolve("Registration Successful")
  }else{
    reject("Registration failed")
  }
});

registration.then((result=>{
    console.log(result)
})).catch((err=>{
    console.log("error:" ,err)}
))

//Error-first callback 

function registerStudent(name, callback) {
    if(name){

        callback(null,'Registration successful ')
    }else{
        callback("Name is required", null)
    }
 
}

registerStudent(studentName, (err, result) => {
  if(err){
    console.log(err)
    return
  }
  console.log(result)
});

console.log("Downloading file")

setTimeout(()=>{
console.log('Download Complete')
},3000)
console.log("you can continue working")