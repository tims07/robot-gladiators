var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 120;

var fight = function() {
    // Alert player that the round has started
  window.alert("Welcome to Robot Gladiators!");

  // Subtract playerAttack from enemyHealth: result updates enemyHealth value
  enemyHealth = enemyHealth - playerAttack;
  // Log resulting message to console
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
  // Subtract enemyAttack from playerHealth: updated value in playerHealth variable
  playerHealth = playerHealth - enemyAttack;
  // Log resulting message to the console
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

  // Enemy Health Check
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!")
  } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.")
  }

  // Player Health Check
  if (playerHealth <= 0) {
      window.alert(playerName + " has died!")
  } else {
      window.alert(playerName + " still has " + playerHealth + " health left.")
  }

};

fight();

