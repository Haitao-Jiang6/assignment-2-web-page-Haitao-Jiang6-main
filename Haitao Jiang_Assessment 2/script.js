// step 3: function to change displayed image and its description
function changeImage(images,imgDescription){
    document.getElementById("displayed-image").src = images;
    document.getElementById("image-description").innerText = imgDescription;
}




// Step 4: Theme toggle function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Step 6: Storing theme in local storage
}


// Step 5: Update heading with user's name on page load
function loadUserSettings() {
    const userName = new URLSearchParams(window.location.search).get("user_name") || localStorage.getItem("user_name");
    if (userName) {
        document.getElementById("main-heading").innerText = `Hello, ${userName}`;
        localStorage.setItem("user_name", userName); 
    }
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme); 
}

    //  Displaying the current time on a web page
    var dateTime=new Date();
    var hh=dateTime.getHours();
    var mm=dateTime.getMinutes();
    var ss=dateTime.getSeconds();
        document.getElementById("time").innerHTML=hh+":"+mm+":"+ss;