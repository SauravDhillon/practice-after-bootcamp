export const preparePlayerData = (playerData) => {
  const playerDataArray = Object.values(playerData);
  return playerDataArray;
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
  // output array of players with win key
  return playerDataArray.map(player => {
    // Calculating the number of wins in matchData 
  const currentWins = matchData.reduce((accumulator, match) =>{
    // Add a win if gamerTag matches 
    if(match.winner === player.gamerTag){
      return accumulator += 1;
    }else {
      return accumulator;
    }
  }, 0);

  // Assigns the value to the wins key
  player.wins = currentWins;

  return player;
  });
};