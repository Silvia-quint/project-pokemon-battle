// CHOOSE POKEMON TO THE ALL ROSTER.

const pokemonRoster = document.querySelectorAll(".pokemon");
const player1 = document.querySelector(".player1 .pokemon-selected>h1");
const player2 = document.querySelector(".player2 .pokemon-selected>h1");

function choosePokemonP1() {
  player1.innerHTML = pokemonRoster[getPokemonRandom()].innerHTML;
}

function choosePokemonP2() {
  player2.innerHTML = pokemonRoster[getPokemonRandom()].innerHTML;
}

const getPokemonRandom = (max = 14) => {
  return Math.floor(Math.random() * max);
};

// -> Selec buttons
// eslint-disable-next-line no-undef
button1.addEventListener("click", choosePokemonP1);
// eslint-disable-next-line no-undef
button2.addEventListener("click", choosePokemonP2);

// STAGE - PLAYER 1.
const lifeBarP1 = document.querySelector(".player1 .life-container .life");
const statusP1 = document.querySelector(".player1 .status");

let lifeP1 = 100;

const getRandomNumberP1 = (min = 1, max = 6) => {
  return Math.floor(Math.random() * max) + min;
};

// -> Attack
const attackP1 = () => {
  const lifeDecreaseP1 = getRandomNumberP1(0, 10);
  lifeP1 -= lifeDecreaseP1;
  lifeBarP1.style.setProperty("--life", `${lifeP1}%`);

  if (lifeP1 <= 0) {
    endMessageP1();
    winMessageP1();
    lifeResetP1();
  } else {
    if (lifeDecreaseP1 === 0) { setDefenseMessageP1(); } else { setAttackMessageP1(lifeDecreaseP1); }
  }
};

// -> Reset life
const lifeResetP1 = () => {
  lifeP1 = 100;
};

// -> Healer life
const lifeHealed10P1 = () => {
  const potion1Healer = 10;
  lifeP1 += potion1Healer;
  lifeBarP1.style.setProperty("--life", `${lifeP1}%`);
  healer10MessageP1();
};

const lifeHealed20P1 = () => {
  const potion2Healer = 20;
  lifeP1 += potion2Healer;
  lifeBarP1.style.setProperty("--life", `${lifeP1}%`);
  healer20MessageP1();
};

// -> Messages
const setDefenseMessageP1 = () => {
  statusP1.innerHTML += "<div class=\"event\">**Well Done! You've stopped the attack!</div>";
};
const setAttackMessageP1 = (lifeDecreaseP1) => {
  statusP1.innerHTML += `<div class="event">**Auch! You've lost <strong>-${lifeDecreaseP1}%</strong> of life</div>`;
};
const endMessageP1 = () => {
  statusP1.innerHTML += "<div class=\"event\">**<strong>Sorry, you've lost the game...</strong></div>";
};
const winMessageP1 = () => {
  statusP2.innerHTML += "<div class=\"event\">**<strong>Congratulation! YOU'VE WIN!!</strong></div>";
};
const healer10MessageP1 = () => {
  statusP1.innerHTML += "<div class=\"event\">**Potion Restored <strong>+10%</strong> of health</div>";
};
const healer20MessageP1 = () => {
  statusP1.innerHTML += "<div class=\"event\">**Potion Restored <strong>+20%</strong> of health</div>";
};

// STAGE - PLAYER 2.
const lifeBarP2 = document.querySelector(".player2 .life-container .life");
const statusP2 = document.querySelector(".player2 .status");

let lifeP2 = 100;

const getRandomNumberP2 = (min = 1, max = 6) => {
  return Math.floor(Math.random() * max) + min;
};

// -> Attack
const attackP2 = () => {
  const lifeDecreaseP2 = getRandomNumberP2(0, 10);
  lifeP2 -= lifeDecreaseP2;
  lifeBarP2.style.setProperty("--life", `${lifeP2}%`);

  if (lifeP2 <= 0) {
    endMessageP2();
    winMessageP2();
    lifeResetP2();
  } else {
    if (lifeDecreaseP2 === 0) { setDefenseMessageP2(); } else { setAttackMessageP2(lifeDecreaseP2); }
  }
};

// -> Reset life
const lifeResetP2 = () => {
  lifeP2 = 100;
};

// -> Healer life
const lifeHealed10P2 = () => {
  const potion1Healer = 10;
  lifeP2 += potion1Healer;
  lifeBarP2.style.setProperty("--life", `${lifeP2}%`);
  healer10MessageP2();
};

const lifeHealed20P2 = () => {
  const potion2Healer = 20;
  lifeP2 += potion2Healer;
  lifeBarP2.style.setProperty("--life", `${lifeP2}%`);
  healer20MessageP2();
};

// -> Messages
const setDefenseMessageP2 = () => {
  statusP2.innerHTML += "<div class=\"event\">**Well Done! You've stopped the attack!</div>";
};
const setAttackMessageP2 = (lifeDecreaseP2) => {
  statusP2.innerHTML += `<div class="event">**Auch! You've lost <strong>-${lifeDecreaseP2}%</strong> of life</div>`;
};
const endMessageP2 = () => {
  statusP2.innerHTML += "<div class=\"event\">**<strong>Sorry, you've lost the game...</div>";
};
const winMessageP2 = () => {
  statusP1.innerHTML += "<div class=\"event\">**<strong>Congratulation! YOU'VE WIN!!</strong> </div>";
};
const healer10MessageP2 = () => {
  statusP2.innerHTML += "<div class=\"event\">**Potion Restored <strong>+10%</strong> of health</div>";
};
const healer20MessageP2 = () => {
  statusP2.innerHTML += "<div class=\"event\">**Potion Restored <strong>+20%</strong> of health</div>";
};

// ATTACK BUTTON P1 AND P2

// eslint-disable-next-line no-undef
start1.addEventListener("click", attackP2);
// eslint-disable-next-line no-undef
start2.addEventListener("click", attackP1);

// HEALER BUTTONS P1 AND P2

// eslint-disable-next-line no-undef
potion1P1.addEventListener("click", lifeHealed10P1);
// eslint-disable-next-line no-undef
potion2P1.addEventListener("click", lifeHealed20P1);

// eslint-disable-next-line no-undef
potion1P2.addEventListener("click", lifeHealed10P2);
// eslint-disable-next-line no-undef
potion2P2.addEventListener("click", lifeHealed20P2);

// OPTION PARA ACORTR LOS MENSAJES Y LIMPIAR EL CUADRO
// ==> if (array.length > 5) array.shift()
