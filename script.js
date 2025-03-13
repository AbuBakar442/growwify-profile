document.addEventListener("DOMContentLoaded", function() {
    console.log("AB Profile Page Loaded!");
    
    // Example JS Functionality - Button Click Alert
    const btn = document.querySelector(".btn");
    if (btn) {
        btn.addEventListener("click", function() {
            alert("Redirecting to Growwify Packages...");
        });
    }
});
