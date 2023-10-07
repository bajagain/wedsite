document.getElementById("changeContentBtn").addEventListener("click", function() {
    var dynamicContent = document.getElementById("dynamicContent");
    dynamicContent.textContent = "Content changed dynamically with JavaScript!";
    dynamicContent.style.color = "green";
});
