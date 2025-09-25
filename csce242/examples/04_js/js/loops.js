document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);

    //loop and write the numbers one through ten
    for(let i=0; i<=10; i++) {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = `${i} banana(s)`;

    }
};

document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);

    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";

    if(startNum > endNum) {
        error.innerHTML = "* The second number must be greater than the first";
        return;
    }

    // Loop for every number from start to end display the number in paragraphs
    // if they did 5 and 9, it should go 5, 6, 7, 8, 9

    for(let i = startNum; i<=endNum; i++) {
        const p = document.createElement("p");
        p.innerHTML = i;
        resultDiv.append(p);
        p.onclick = () => {
            console.log(`You clicked Number ${i}`);
        };
    }
};

document.getElementById("btn-show-toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["ball", "skipping rope", "doll", "mini car", "elmo"];

    // First way to iterate (bad)
    /*for(let i = 0; i <= toys.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(li);
    }*/

    // preferred way to iterate
    toys.forEach((toy, i)=>{
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    });
};

document.getElementById("btn-show-toy-prices").onclick = () => {
    const toys = [];
    toys["ball"] = 2.99;
    toys["barbie"] = 19.99;
    toys["skipping rope"] = 1.98;
    toys["match box car"] = 2.54;

    const toyDiv = document.getElementById("toy-prices");
    toyDiv.innerHTML = "";

    const priceP = document.getElementById("price-p");
    priceP.innerHTML = "";

    for(let toy in toys){
        const p = document.createElement("p");
        p.innerHTML = toy;
        toyDiv.append(p);

        //when i click paragraph, show price in a div below

        p.onclick = () => {
            priceP.innerHTML = `${toy} costs ${toys[toy]}`;
        };
    }
};