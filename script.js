document.addEventListener("DOMContentLoaded", () => {
    // Signup
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newUser = document.getElementById("newUsername").value;
            const newPass = document.getElementById("newPassword").value;
            localStorage.setItem("user", newUser);
            localStorage.setItem("pass", newPass);
            alert("Signup successful! Please log in.");
            window.location.href = "index.html";
        });
    }

    // Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;
            const savedUser = localStorage.getItem("user");
            const savedPass = localStorage.getItem("pass");

            if (user === savedUser && pass === savedPass) {
                sessionStorage.setItem("loggedIn", "true");
                window.location.href = "welcome.html";
            } else {
                alert("Invalid credentials!");
            }
        });
    }

    // Welcome page
    if (window.location.pathname.includes("welcome.html")) {
        const user = localStorage.getItem("user");
        document.getElementById("user").textContent = user;
        document.getElementById("logoutBtn").addEventListener("click", () => {
            sessionStorage.removeItem("loggedIn");
            window.location.href = "exit.html";
        });
    }

    // Redirect to login if not logged in
    if (window.location.pathname.includes("welcome.html") && !sessionStorage.getItem("loggedIn")) {
        window.location.href = "index.html";
    }
});
