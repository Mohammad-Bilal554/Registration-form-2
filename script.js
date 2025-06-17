document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const errorMessage = document.getElementById("errorMessage");

    const formType = document.getElementById("formType");
    const currentPage = window.location.pathname.split("/").pop();

    formType.value = currentPage;
    const heading = document.querySelector(".form-container h2");
    switch (formType.value) {
        case "index.html":
            heading.textContent = "User Registration Form";
            break;
        case "employee.html":
            heading.textContent = "Employee Registration Form";
            break;
        case "owner.html":
            heading.textContent = "Owner Registration Form";
            break;
    }


    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        errorMessage.textContent = "";

        const usernameRegex = /^[A-Za-z0-9_]{4,}$/;
        if (!usernameRegex.test(username)) {
            errorMessage.textContent = "ID must be at least 4 characters and contain only letters, numbers, or underscores.";
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            errorMessage.textContent = "Please enter a valid email address.";
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            errorMessage.textContent = "Password must be at least 8 characters and include lowercase, uppercase, number, and special character.";
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            return;
        }
        alert("Form submitted successfully!");
        switch (formType.value) {
            case "index.html":
                window.location.href = "user-home.html";
                break;
            case "employee.html":
                window.location.href = "employee-home.html";
                break;
            case "owner.html":
                window.location.href = "owner-home.html";
                break;
            default:
                window.location.href = "index.html"; // fallback
        }
    });
});

function changepass() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

function redirectForm() {
    const selected = document.getElementById("formType").value;
    localStorage.setItem("selectedForm", selected);
    if (selected) {
        window.location.href = selected;
    }
}










