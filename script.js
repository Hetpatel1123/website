// Handle Signup
function signup() {
    let username = document.getElementById("signupUsername").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let signupMsg = document.getElementById("signupMsg");

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Store credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    signupMsg.innerText = "Signup successful! Redirecting to login...";
    setTimeout(() => {
        window.location.href = "login.html"; // Redirect to login page
    }, 2000);
}

// Handle Login
function login() {
    let enteredUser = document.getElementById("loginUsername").value.trim();
    let enteredPass = document.getElementById("loginPassword").value.trim();
    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");
    let errorMsg = document.getElementById("errorMsg");

    if (enteredUser === storedUser && enteredPass === storedPass) {
        sessionStorage.setItem("loggedIn", "true"); // Store login state
        window.location.href = "welcome.html"; // Redirect to welcome page
    } else {
        errorMsg.innerText = "Invalid username or password!";
    }
}

// Ensure User is Logged In before accessing Welcome Page
function checkLogin() {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html"; // Redirect if not logged in
    } else {
        document.getElementById("usernameDisplay").innerText = localStorage.getItem("username");
    }
}

// Handle Logout
function logout() {
    sessionStorage.removeItem("loggedIn"); // Clear login state
    window.location.href = "exit.html"; // Redirect to exit page
}

// Redirect from Exit to Login Page after few seconds
function exitPage() {
    setTimeout(() => {
        window.location.href = "login.html"; // Redirect to login page
    }, 3000); // 3 seconds delay
}

