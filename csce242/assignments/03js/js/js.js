const clouds = document.getElementById("cloud-container");
clouds.innerHTML = "";

const trees = document.getElementById("tree-container");
trees.innerHTML - "";

const sunOrMoon = document.getElementById("sun-moon");
sunOrMoon.innerHTML = "";

const now = new Date();
const currentHour = now.getHours();



document.getElementById("btn-draw").onclick = () => {

    if((currentHour) >= 18 || (currentHour <= 6 )) {
        document.body.style.background = "black";
        document.getElementById("p-assignment").style.color = "white";
        document.getElementById("p-loops").style.color = "white";
        const p = document.createElement("p");
        p.classList.add("moon");
        sunOrMoon.append(p);
    } else {
        document.body.style.background = "lightblue";
        const p = document.createElement("p");
        p.classList.add("sun");
        sunOrMoon.append(p);
    }

    for(let i=0; i<6; i++) {
        const p = document.createElement("p");
        p.classList.add("cloud");
        clouds.append(p);

        const p2 = document.createElement("p2");
        p2.classList.add("tree");
        trees.append(p2);
    };

};