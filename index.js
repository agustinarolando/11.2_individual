const POST = (data) => {
    try {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });

    } catch (error) {
        console.log("Error: ", error);
    };

};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("send").addEventListener("click", () => {
        let obj = {
            "name" : document.getElementById("name").value,
            "lastname" : document.getElementById("lastname").value,
            "dateofbirth" : document.getElementById("birthdate").value
        };

        POST(obj);
    });
});