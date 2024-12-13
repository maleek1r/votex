document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    alert(`A verification email has been sent to ${email}`);

    sessionStorage.setItem('verificationCode', verificationCode);

    console.log('Registration successful!');
});