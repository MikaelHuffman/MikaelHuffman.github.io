document.getElementById("li-ex1").onclick = () => {
    document.getElementById("div-watering").classList.toggle("hidden");
}

document.getElementById("li-ex2").onclick = () => {
    document.getElementById("div-clock").classList.toggle("hidden");
}
const plant1 = document.getElementById("div-plant1");
const plant2 = document.getElementById("div-plant2");
const plant3 = document.getElementById("div-plant3");
const plant4 = document.getElementById("div-plant4");

document.getElementById("input-range").addEventListener("input", () => {
    let days = document.getElementById("input-range").value;

    if(days >= 1 && days <= 2){
        plant1.classList.remove("hidden");
        plant2.classList.add("hidden");
        plant3.classList.add("hidden");
        plant4.classList.add("hidden");
    } else if(days >= 3 && days <= 5){
        plant1.classList.add("hidden");
        plant2.classList.remove("hidden");
        plant3.classList.add("hidden");
        plant4.classList.add("hidden");
    } else if(days >= 6 && days <= 9){
        plant1.classList.add("hidden");
        plant2.classList.add("hidden");
        plant3.classList.remove("hidden");
        plant4.classList.add("hidden");
    } else if(days >= 10 && days <= 12){
        plant1.classList.add("hidden");
        plant2.classList.add("hidden");
        plant3.classList.add("hidden");
        plant4.classList.remove("hidden");
    }

    document.getElementById("input-days").innerHTML = days;
});

function clock() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');

    const currentTime = `${hours}:${minutes}`;

    document.getElementById("clock").innerHTML = currentTime;
}

clock();

setInterval(updateClock, 60000);

