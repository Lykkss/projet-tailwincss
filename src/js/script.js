document.addEventListener("DOMContentLoaded", function () {
    fetch("Header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement du header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("Footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement du header:", error));
});
