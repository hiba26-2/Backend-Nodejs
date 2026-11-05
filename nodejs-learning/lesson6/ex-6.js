const path=require("path")
function isImage(filename){
    const name=filename.toLowerCase()
    const ext=path.extname(name)

    if(   ext === ".png" || ext === ".jpg" || ext === ".jpeg"
      ){
      return true
    }else{
        return false
    }
}
console.log(isImage("cat.PNG"));    // true
console.log(isImage("notes.txt"));  // false
console.log(isImage("photo.jpeg")); // true