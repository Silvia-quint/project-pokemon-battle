// Choose Pokemon of the all roster.

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

const lifeResetP1 = () => {
  // clearInterval(idIntervalP1);
  lifeP1 = 100;
};

const setDefenseMessageP1 = () => {
  statusP1.innerHTML += "<div class=\"event\">**Well Done! You've stopped the attack!</div>";
};
const setAttackMessageP1 = (lifeDecreaseP1) => {
  statusP1.innerHTML += `<div class="event">**Auch! You've lost (<strong>-${lifeDecreaseP1}%</strong>) of life</div>`;
};
const endMessageP1 = () => {
  statusP1.innerHTML += "<div class=\"event\">**<strong>Sorry, you've lost the game...</strong></div>";
};
const winMessageP1 = () => {
  statusP2.innerHTML += "<div class=\"event\">**<strong>Congratulation! YOU'VE WIN!!</strong></div>";
};

// const idIntervalP1 = setInterval(() => attackP1(), 1000);

// STAGE - PLAYER 2.
const lifeBarP2 = document.querySelector(".player2 .life-container .life");
const statusP2 = document.querySelector(".player2 .status");

let lifeP2 = 100;

const getRandomNumberP2 = (min = 1, max = 6) => {
  return Math.floor(Math.random() * max) + min;
};

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

const lifeResetP2 = () => {
  // clearInterval(idIntervalP2);
  lifeP2 = 100;
};

const setDefenseMessageP2 = () => {
  statusP2.innerHTML += "<div class=\"event\">**Well Done! You've stopped the attack!</div>";
};
const setAttackMessageP2 = (lifeDecreaseP2) => {
  statusP2.innerHTML += `<div class="event">**Auch! You've lost (<strong>-${lifeDecreaseP2}%</strong>) of life</div>`;
};
const endMessageP2 = () => {
  statusP2.innerHTML += "<div class=\"event\">**<strong>Sorry, you've lost the game...</div>";
};
const winMessageP2 = () => {
  statusP1.innerHTML += "<div class=\"event\">**<strong>Congratulation! YOU'VE WIN!!</strong> </div>";
};

// const idIntervalP2 = setInterval(() => attackP2(), 1000);

// ATTACK BUTTON P1 AND P2

// eslint-disable-next-line no-undef
start1.addEventListener("click", attackP2);
// eslint-disable-next-line no-undef
start2.addEventListener("click", attackP1);
