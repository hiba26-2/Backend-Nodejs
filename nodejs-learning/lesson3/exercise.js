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