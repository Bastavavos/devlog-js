// Cours 8 de Codecademy
console.log("exo-6");

/* var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo.cars)

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo.bathrooms = 1
console.log(joeInfo.bathrooms)

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

joeInfo.garage = true
console.log(joeInfo.garage) 
console.log("Joe a un garage")*/


let team = {
    players: [{
        firstName:"Pablo",
        lastName:"Sanchez",
        age:11,
        
    }],
    games: [{
        opponent:"Broncos",
        teamPoints:42,
        opponentPoints:27,
    }],

    addPlayer(firstName, lastName, age) {
        this.players.push({
            firstName : firstName,
            lastName : lastName,
            age : age,
        })
    },

    addGames(opponent, teamPoints, opponentPoints) {
        this.games.push({
            opponent : opponent,
            teamPoints : teamPoints,
            opponentPoints : opponentPoints,
        })
    },

    getMaxAge(){
        for (let i = 0; i < this.players.length; i++) {
            if (players[i]>0)
            max = players[i]
        }
    }

}

team.addPlayer("joueur","faible",20)
team.addPlayer("joueur","moyen",25)
team.addPlayer("joueur","pro",22)
team.addPlayer("joueur","semi-pro",29)
team.addPlayer("joueur","dounia",18)
console.log(team.players)
team.addGames("City", 30, 45)
team.addGames("United", 12, 48)
team.addGames("Real", 24, 12)
console.log(team.games)

// on initialise nos teampoints
let totalTeamPoints = 0
team.games.forEach(zak => { // forEach pour chaque, element = zak (on le nomme comme veut)
   console.log(zak.teamPoints)
   totalTeamPoints += zak.teamPoints
});
console.log(totalTeamPoints)

let totalOpponentPoints = 0
team.games.forEach(zak => { // forEach = pour chaque, element = zak (on le nomme comme veut)
   console.log(zak.opponentPoints)
   totalOpponentPoints += zak.opponentPoints // += permet d'éviter d'écrire totalOpponentPoint = totalOppo + zak.oppo
});
console.log(totalOpponentPoints)

let moyenneOpponent = totalOpponentPoints / team.games.length //on divise le tot par la taille du tableau games
console.log(moyenneOpponent)


function vieux () {
    let max
    for (i = 0; i < team.players.length; i++) {
        if (!max) {
            max = team.players[i]
        }
        if (max.age<team.players[i].age) {
            max = team.players[i]
        }
    }
    return max
}

console.log(vieux())

