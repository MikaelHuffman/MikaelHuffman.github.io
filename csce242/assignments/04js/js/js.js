    const catsBefore = [];
    catsBefore["Franklin"] = "images/cat1_before.png";
    catsBefore["Douglas"] = "images/cat2_before.png";
    catsBefore["Berlin"] = "images/cat3_before.png";
    catsBefore["Tokyo"] = "images/cat4_before.png";

    const catPics = document.getElementById("cat-container");

    for(let cat in catsBefore) {
        let catContainer = document.createElement("div");
        catContainer.classList.add("cat-img");
        
        let img = document.createElement("img");
        img.src=catsBefore[cat];

        let p = document.createElement("p");
        p.classList.add("titlecard");
        p.innerHTML = `Please adopt ${cat}`;

        catContainer.onmouseover = () => {
            p.style.display = "flex";
        }
        catContainer.onmouseleave = () => {
            p.style.display = "none";
        }
        
        catContainer.append(img);
        catContainer.append(p);
        catPics.append(catContainer);
    }
