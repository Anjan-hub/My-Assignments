/* Assignment Requirements:
1. Declare a const name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript */

/* const browserVersion = "Chrome"
function getBrowserVersion(params) {
    
    if (browserVersion==="Chrome") {
        var browserVersion = "Edge"
        
    }
    console.log(browserVersion);  
}
getBrowserVersion() */

const browserVersion = "Chrome"
function getBrowserVersion(params) {
    
    if (browserVersion==="Chrome") {
        let browserVersion = "Edge"
        console.log(browserVersion);
    }
    console.log(browserVersion);  
}
getBrowserVersion()