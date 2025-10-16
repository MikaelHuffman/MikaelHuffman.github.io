const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log("sorry");
    }
};

const showShoes = async() => {
    console.log("test");
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe)=>{
        const section = document.createElement("section");
        const h3 = document.createElement("h3");
        const br = document.createElement("br")
        const p = document.createElement("p");
        h3.innerHTML = shoe.name;

        p.innerHTML = `Brand: ${shoe.brand}`;
        section.append(h3);
        section.append(p);
        shoeListDiv.append(section);
 
        const ul = document.createElement("ul");
        shoeListDiv.append(ul);
        shoe.reviews.forEach((review) => {
            const li = document.createElement("li");
            li.innerHTML = review;
            ul.append(li);
        });

        /*
        const img = document.createElement("img");
        section.append(img);
        img.src = `https;//portiaportia.github.io/json/${shoe.img}`;

        shoeListDiv.append(section);*/
    });
};

showShoes();