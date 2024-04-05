document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-container form");
    const loginErrorContainer = document.querySelector(".login-container .no");
    const loginSuccessContainer = document.querySelector(".login-container .yes");
    

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const login = {
            email: loginForm.querySelector("#email").value,
            password: loginForm.querySelector("#password").value,
          
        };
       
      
    
       fetch("/api/login",{
            method: "POST",
            body: JSON.stringify(login),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data)=> {
            if (data.status === "error") {
                loginSuccessContainer.style.display = "none";
                if (loginErrorContainer) { // Vérifie si l'élément existe avant d'accéder à la propriété 'style'
                    loginErrorContainer.style.display = "block";
                    loginErrorContainer.innerText = data.error;
                }
            } else {
                if (loginErrorContainer) { // Vérifie si l'élément existe avant d'accéder à la propriété 'style'
                    loginErrorContainer.style.display = "none";
                }
                loginSuccessContainer.style.display = "block";
                loginSuccessContainer.innerText = data.success;
            }
        })
        .catch((error) => {
            console.error("Error:", error)
        });
    });

});
