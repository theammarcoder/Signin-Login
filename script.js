function login(event) {
    event.preventDefault();
    const correctEmail = "amaar@gmail.com";
    const correctPassword = "12345";

    const useremail = document.getElementById("email").value
    const userpassword = document.getElementById("password").value
    const message = document.getElementById("message")

    if (useremail === correctEmail && userpassword === correctPassword) {
        message.textContent = "Login successful!"
    }else {
        message.textContent = "Invalid email or password"
    }
}