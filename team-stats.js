const team = {
    _players: [
      {firstName: 'Ted', lastName: 'Williams', age: 32},
      {firstName: 'Jake', lastName: 'Jones', age: 28},
      {firstName: 'Josh', lastName: 'Jessup', age: 30}
    ],
    _games: [
      {opponent: 'Saints', teamPoints: 50, opponentPoints: 45},
      {opponent: 'Bucaneers', teamPoints: 43, opponentPoints: 52},
      {opponent: 'Packers', teamPoints: 50, opponentPoints: 40}
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
    this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game) 
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games)