var playerMoney = 10;

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert player that the round has started
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
  if (promptFight === 'FIGHT' || promptFight === 'fight') {
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

  // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you want to skip?")
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
  }
}

fight();

