const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    // Implementation
    try {
        const fetchedExtension = path.extname(filePath);
        if (fetchedExtension === expectedExtension) {
            console.log(`File has the expected extension: ${fetchedExtension}`);
        } else if (fetchedExtension === "") {
            throw new Error("Extension of file not provided!");
        } else {
            console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${fetchedExtension}`);
        }
        // console.log(fetchedExtension);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png