    const catsBefore = [];
    catsBefore["Franklin"] = "images/cat1_before.png";
    catsBefore["Douglas"] = "images/cat2_before.png";
    catsBefore["Berlin"] = "images/cat3_before.png";
    catsBefore["Tokyo"] = "images/cat4_before.png";

    const catsAfter = [];
    catsAfter["Franklin"] = "images/cat1_after.png";
    catsAfter["Douglas"] = "images/cat2_after.png";
    catsAfter["Berlin"] = "images/cat3_after.png";
    catsAfter["Tokyo"] = "images/cat4_after.png";

    const catPics = document.getElementById("cat-container");
    let popup = document.getElementById("span-popup");

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

        img.onclick = () => {
            let span = document.getElementById("span-popup");

            let catContainer2 = document.createElement("div");
            catContainer2.id = "div-after";
            let img2 = document.createElement("img");
            img2.src=catsAfter[cat];

            let p2 = document.createElement("p");
            p2.classList.add("p-x");
            p2.innerHTML = "x";

            let p3 = document.createElement("p");
            p3.classList.add("p-header");
            p3.innerHTML = `${cat} after adoption!`;

            catContainer2.append(p2);
            catContainer2.append(p3);
            catContainer2.append(img2);
            span.append(catContainer2);
            span.style.display = "flex";

            p2.onclick = () => {
                document.getElementById("div-after").remove();
                span.style.display = "none";
            }
        }
    }

