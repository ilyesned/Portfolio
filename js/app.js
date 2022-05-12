function imgshow() {
    var img = document.querySelector("#imgid");
    img.style.display = "none";
}

setInterval(imgshow, /* 5500 */1);


/* var messageArray = ["Développeur front-end et back-end utlisant HTML, CSS, JS, PHP, MySQL, Python, JAVA"];
var textPosition = 0;
var textSpeed = 100;

typewriter = () => {
    document.querySelector("#message").
    innerHTML = messageArray[0].substring(0, textPosition) + 
    "<span>\u25ae</span>";

    if(textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, textSpeed);
    }
}

window.addEventListener("load", typewriter); */