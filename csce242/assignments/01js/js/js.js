document.getElementById("sunny-times").onclick = () => {
    document.getElementById("hide-box").classList.toggle("hide");
};

document.getElementById("storm-img").onclick = () => {
    document.getElementById("sun-img").classList.remove("hide");
    document.getElementById("storm-img").classList.add("hide");
};