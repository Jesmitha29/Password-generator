function generatePassword() {

    const length = document.getElementById("length").value;

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*";

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
    document.getElementById("message").innerText =
        "Password generated successfully!";
}

function copyPassword() {

    const password =
        document.getElementById("password").value;

    if (password === "") {
        document.getElementById("message").innerText =
            "Generate a password first!";
        return;
    }

    navigator.clipboard.writeText(password);

    document.getElementById("message").innerText =
        "Password copied!";
}
