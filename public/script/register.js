const registerForm = document.querySelector(".register-container form");
const registerErrorContainer = document.querySelector(".register-container .Error");
const registerSuccessContainer = document.querySelector(".register-container .Success");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const register = {
        name: registerForm.querySelector("#Name").value,
        email: registerForm.querySelector("#Email").value,
        password: registerForm.querySelector("#Password").value
    };

    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then((data) => {
        if (data.status === "error") {
            registerSuccessContainer.style.display = "none";
            registerErrorContainer.style.display = "block";
            registerErrorContainer.innerText = data.error;
        } else {
            registerErrorContainer.style.display = "none";
            registerSuccessContainer.style.display = "block";
            registerSuccessContainer.innerText = data.success;
        }
    })
    .catch((error) => {

        console.error("Error:", error);
    });
});