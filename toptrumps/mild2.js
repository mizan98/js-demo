let card = [
    {name: "pichu",  strength: 40},
    {name: "pikachu", strength: 50},
    {name : "raichu", strength: 60},
    {name : "bulbasaur", strength: 40},
    {name: "ivysaur", strength: 50},
    {name: "venusaur", stength: 60},
    {name: "charmander", strength: 40},
    {name: "charmeleon", strength: 50},
    {name: "charizard", strength: 60},
    {name: "squirtle", strength: 40},
    {name: "wartortle", strength: 50},
    {name: "blastoise", strength: 60},
    {name: "onyx", strength: 70},
    {name: "steelix", strength: 80},
    {name: "ponyta", strength: 60},
    {name: "caterpee", strength: 20},
    {name: "caterpod", strength: 30},
    {name: "taurus", strength: 60},
    {name: "tentacool", strength: 50},
    {name: "tentacruel", strength: 60},
    {name: "koffing", strength: 30},
    {name: "weeaing", strength: 40},
    {name: "snorlax", strength: 70},
    {name: "pidgey", strength: 20},
    {name: "pidgeotto", strength: 30},
    {name: "pidget", strength: 40},
    {name: "ekans", strength: 50},
    {name: "arbok", strength: 60},
    {name: "jigglypuff", strength: 80},
    {name: "lickitung", strength: 50},
    {name: "meowth", strength: 40}
]
shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    {    
    return a;
    }
}

class NewGame {
        constructor(players1, computer){
            this._players1 = players1
            this._computer = computer
            this._player1 = []
            this._player2 = []
        }
}
const play1 = new NewGame ("test")
let test1 = play1.shuffle(card)

let halfDeck = test1.slice(0, 14)
let halfDeck2 = test1.slice(14)
let deck1 = this._player1.push(halfDeck)
let deck2 = this._player2.push(halfDeck2)

let plyr1 = prompt ("welcome to TopTrumps. Please enter your name:")
            alert("Welcome", plyr1)
            alert (plyr1, "your opponent will be the computer")

const beginGame = new NewGame (deck1, deck2)





