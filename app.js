const personajes = {
    Kai: {
    nombre: "Kai",
    edad: 24,
    raza: "Humano",
    clase: "Guerrero",
    fuerza: 90,
    velocidad: 65,
    inteligencia: 50,
    vida: 100,
    arma: "Espada larga",
    habilidadEspecial: "Golpe sísmico"
    },

    Luna: {
    nombre: "Luna",
    edad: 19,
    raza: "Elfa",
    clase: "Maga",
    fuerza: 35,
    velocidad: 80,
    inteligencia: 95,
    vida: 75,
    arma: "Bastón mágico",
    habilidadEspecial: "Tormenta de hielo"
    },

    Drako: {
    nombre: "Drako",
    edad: 32,
    raza: "Dragón humanoide",
    clase: "Berserker",
    fuerza: 98,
    velocidad: 70,
    inteligencia: 60,
    vida: 120,
    energia: 80,
    arma: "Hacha de fuego",
    habilidadEspecial: "Furia volcánica",
    debilidad: "Agua congelada",
    nivel: 15
    },

    Nahia: {
    nombre: "Nahia",
    edad: 27,
    raza: "Sirena",
    clase: "Sanadora",
    fuerza: 40,
    velocidad: 75,
    inteligencia: 92,
    vida: 85,
    energia: 110,
    arma: "Cetro de coral",
    habilidadEspecial: "Curación marina",
    debilidad: "Electricidad",
    nivel: 14
    } 
};

const botones = document.querySelectorAll(".character-btn");

const characterCard = document.querySelector("#characterCard");
const charName = document.querySelector("#charName");
const charDesc = document.querySelector("#charDesc");
const charDetails = document.querySelector("#charDetails");

const collapseCard = new bootstrap.Collapse(characterCard, {
    toggle: false
});

let personajeActivo = null;

botones.forEach((item) => {
    item.addEventListener("click", () => {  
    const charKey = item.id;
    const personaje = personajes[charKey];

    if (!personaje) return;
    
    if (personajeActivo === charKey) {
        item.classList.remove("active");
        personajeActivo = null;
        return;
        collapseCard.hide();
    }

    personajeActivo = charKey;

    botones.forEach((boton) => boton.classList.remove("active"));
    item.classList.add("active");

    charName.textContent = personaje.nombre;
    charDesc.textContent = `${personaje.raza} - ${personaje.clase}`;

    charDetails.innerHTML = `
    <p>Fuerza: ${personaje.fuerza}</p>
    <p>Velocidad: ${personaje.velocidad}</p>
    <p>Inteligencia: ${personaje.inteligencia}</p>
    <p>Vida: ${personaje.vida}</p>
    <p>Arma: ${personaje.arma}</p>
    <p>Habilidad especial: ${personaje.habilidadEspecial}</p>
    <p>Edad: ${personaje.edad}</p>
    `;

    collapseCard.show();
    });
});