// const PLAYERS = [
//     "Spiderman",
//     "Captain America",
//     "Wonderwoman",
//     "Popcorn",
//     "Gemwoman",
//     "Bolt",
//     "Antwoman",
//     "Mask",
//     "Tiger",
//     "Captain",
//     "Catwoman",
//     "Fish",
//     "Hulk",
//     "Ninja",
//     "Black Cat",
//     "Volverine",
//     "Thor",
//     "Slayer",
//     "Vader",
//     "Slingo"
// ];

// // initialize players with image and strength
// const initPlayers = (players) => {
//     let detailedPlayers = [];
//     // Create players using for loop
//     // Type your code here

//     return detailedPlayers;
// }

// // getting random strength
// const getRandomStrength = () => {
//     // Return a random integer (0,100]
//     // Note: You can use Math.random() and Math.ceil()
// }

// const buildPlayers = (players, type) => {
//     let fragment = '';

//     // Loop through players and accumulate HTML template
//     // depending of type of player(hero|villain)
//     // Type your code here

//     return fragment;
// }
// // Display players in HTML
// const viewPlayers = (players) => {

//     document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
//     document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

// }

// window.onload = () => {
//     viewPlayers(initPlayers(PLAYERS));
// }



















const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

const initPlayers = (players) => {
    let detailedPlayers = [];

    for (let i = 0; i < players.length; i++) {
        let player = {
            name: players[i],
            strength: getRandomStrength(),
            image: `images/super-${i + 1}.png`,
            type: i % 2 === 0 ? "hero" : "villain"
        };
        detailedPlayers.push(player);
    }

    return detailedPlayers;
};

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
};

const buildPlayers = (players, type) => {
    let fragment = '';

    for (let i = 0; i < players.length; i++) {
        if (players[i].type === type) {
            fragment += `
                <div class="player">
                    <img src="${players[i].image}" alt="${players[i].name}">
                    <h2>${players[i].name}</h2>
                    <p class="strength">${players[i].strength}</p>
                </div>
            `;
        }
    }

    return fragment;
};

const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
};

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
};

// Add CSS classes to align players in groups of three per row
document.addEventListener('DOMContentLoaded', function () {
    const heroes = document.querySelectorAll('#heroes .player');
    const villains = document.querySelectorAll('#villains .player');

    for (let i = 0; i < heroes.length; i += 3) {
        heroes[i].classList.add('first-in-row');
        villains[i].classList.add('first-in-row');
    }
});
