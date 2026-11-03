
const path = require("path");

const allowedExtensions = [".jpg", ".jpeg", ".png"];

function generateUploadPath(originalName) {
    const extension = path.extname(originalName).toLowerCase();

    if (!allowedExtensions.includes(extension)) {
        console.log("Only images are allowed");
        return;
    }

    const newName = Date.now() + extension;

    const savePath = path.join(
        __dirname,
        "uploads",
        newName
    );

    console.log("Original name:", originalName);
    console.log("New name:", newName);
    console.log("Full path:", savePath);
}

generateUploadPath("My Photo.JPG");
generateUploadPath("document.pdf");
generateUploadPath("cat.PNG");
