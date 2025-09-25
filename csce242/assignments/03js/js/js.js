const clouds = document.getElementById("cloud-container");
clouds.innerHTML = "";

document.getElementById("btn-draw").onclick = () => {

    for(let i=0; i<6; i++) {
    const p = document.createElement("p");
    p.classList.add("cloud");
    clouds.append(p);
    };
};