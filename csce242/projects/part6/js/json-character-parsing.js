const getCharacters = async() => {
    const url = "https://mikaelhuffman.github.io/csce242/projects/part6/json/characters.json"

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error) {
        console.log("sorry");
    }
};

const showCharacters = async() => {
    const characters = await getCharacters();

    characters.forEach((characters)=>{
        console.log(characters.name);
    });
};

showCharacters();