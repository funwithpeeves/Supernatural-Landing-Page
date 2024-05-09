const text = {
    character0: "Baby",
    character1: "Nick LUCIFER",
    character2: "Clair NOVAK",
    character3: "Castiel",
    character4: "Sam Winchester",
    character5: "Dean Winchester",
};

const characters = document.querySelectorAll('.character0,.character1,.character2,.character3,.character4,.character5');
const textCharacter = document.getElementById('text-character');

characters.forEach(characters => {
    characters.addEventListener('mouseover', () =>{
        textCharacter.textContent = text[characters.classList[0]];
        textCharacter.style.display = 'block';
        textCharacter.style.color = 'red';
    });

    characters.addEventListener('mouseout', () => {
        textCharacters.style.display = 'none';
    });
});  