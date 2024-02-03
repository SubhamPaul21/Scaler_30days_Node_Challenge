const { exec } = require('child_process');

function executeCommand(command) {
    // Implementation
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log("Error:", error.message);
        } else if (stdout) {
            console.log(stdout);
        } else {
            console.log("StdErr:", stderr);
        }
    })
}

executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!