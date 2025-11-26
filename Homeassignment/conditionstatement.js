function launchBerowser(browsername) {
   
    if (browsername==="Chrome") {
        console.log("Launching Browser....");
    } else {
        console.log("Bowser not supported for launching...");
    }
}

function runTest(testType) {
    switch (testType) {
        case "smoke":
            console.log("Smoke test....");
            break;
        case "sanity":
            console.log("sanity test....");
            break;
        case "regression":
            console.log("Regression test....");
            break;
        default:
            console.log("Test type not provided, running Smoke Tests by default...");
            
    }
    
}
launchBerowser("Chrome")
runTest("sanity")

