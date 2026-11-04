const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "images/charactor.webp",

  attacked: function () {
    if (this.health > 0) {
      this.health = Math.max(0, this.health - 20);
      renderCharacter();

      if (this.health === 0) {
        const statusEl = document.querySelector("#statusMessage");
        statusEl.textContent = `${this.name} has died!`;
        statusEl.hidden = false;
        alert("Character Died");
      }
    }
  },

  levelUp: function () {
    this.level += 1;
    renderCharacter();
  }
};

// Select DOM elements
const imageEl = document.querySelector("#characterImage");
const nameEl = document.querySelector("#characterName");
const classEl = document.querySelector("#characterClass");
const levelEl = document.querySelector("#characterLevel");
const healthEl = document.querySelector("#characterHealth");
const attackedBtn = document.querySelector("#attackedBtn");
const levelUpBtn = document.querySelector("#levelUpBtn");

// Render character properties to the DOM
function renderCharacter() {
  imageEl.setAttribute("src", character.image);
  imageEl.setAttribute(
    "alt",
    `${character.name}, the ${character.class}`
  );
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = character.level;
  healthEl.textContent = character.health;
}

// Event listeners for Attacked and Level Up buttons
attackedBtn.addEventListener("click", function () {
  character.attacked();
});

levelUpBtn.addEventListener("click", function () {
  character.levelUp();
});

// Initialize card on load
renderCharacter();

