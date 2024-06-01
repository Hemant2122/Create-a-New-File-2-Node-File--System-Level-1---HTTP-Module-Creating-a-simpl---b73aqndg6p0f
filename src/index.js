const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
    //Write your code here
    //Don't change function name
    await fs.writeFile(fileName, fileContent);
};
writeFile(fileName, fileContent)
.then((data) => {
    if(!fileName){
        console.log("File myfile.txt created and data written successfully!");
    }else{
        console.log("myfile.txt already exists. Skipping write operation"); 
    }
})
// .then((data) => console.log("File myfile.txt created and data written successfully!"))
// .then((data) => console.log("myfile.txt already exists. Skipping write operation"))
module.exports =  writeFile ;
