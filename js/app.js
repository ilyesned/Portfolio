document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    console.log("loaded");

    let parents, child, i
    child = ["Linux", "OS", "Android"]

    parents = document.querySelectorAll("section")[1]
    for(x=0; x<parents.childNodes.length; x++){
        console.log(parents.childNodes[x].innerText)
    } 
    /* Dans le dom créer un élément html */
    el = document.createElement("ul")
    
    parents.prepend(el)
    /*for(data of child){
        el.innerHTML += `<li>${data}`
    }*/

    for(index of child){
        let value = child[index]
        el.innerHTML += `<li>${index} : ${value}`
        
    }

    

    const userDate = ({
        datecopy : new Date(),
        date : document.querySelector("footer")
    })

    
    console.log(datecopy.getFullYear())
    date.innerHTML += ` ${datecopy.getFullYear()}`
    date.textContent() = date


});