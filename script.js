// Handle Signup
function signup() {
    let username = document.getElementById("signupUsername").value.trim();
    let password = document.getElementById("signupPassword").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Store credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Signup successful! Please log in.");
    window.location.href = "login.html"; // Redirect to login page
}

// Handle Login
function login() {
    let enteredUser = document.getElementById("loginUsername").value.trim();
    let enteredPass = document.getElementById("loginPassword").value.trim();
    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (enteredUser === storedUser && enteredPass === storedPass) {
        sessionStorage.setItem("loggedIn", "true"); // Set login status
        window.location.href = "welcome.html"; // Redirect to welcome page
    } else {
        document.getElementById("errorMsg").innerText = "Invalid Credentials! Please try again.";
    }
}

// Ensure User is Logged In before accessing Welcome Page
function checkLogin() {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html"; // Redirect if not logged in
    }
}

// Handle Logout
function logout() {
    sessionStorage.removeItem("loggedIn"); // Remove login status
    window.location.href = "exit.html"; // Redirect to exit page
}

// Redirect from Exit to Login Page after few seconds
function exitPage() {
    setTimeout(() => {
        window.location.href = "login.html"; // Redirect to login page
    }, 3000); // 3 seconds delay
}

