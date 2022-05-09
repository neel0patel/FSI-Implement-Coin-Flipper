let headsRolls = 0;
let tailsRolls = 0;

// Define a function that updates the scoreboard so that both buttons can be reused
let updateScoreboard = () => {
  // Calculate total number of rolls
  let total = headsRolls + tailsRolls;

  // Variables to track percent heads and tails
  let percentHeads = 0;
  let percentTails = 0;

  // Don't divide by 0!
  if (total > 0) {
    // Calculate percentage of heads and tails
    percentHeads = Math.round((headsRolls / total) * 100);
    percentTails = Math.round((tailsRolls / total) * 100);
  }

  // Update the display of each cell in the table
  document.getElementById("heads").textContent = headsRolls;
  document.getElementById("heads-percent").textContent = percentHeads + "%";
  document.getElementById("tails").textContent = tailsRolls;
  document.getElementById("tails-percent").textContent = percentTails + "%";
};

// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners
  document.getElementById("flip").addEventListener("click", () => {
    // Determine result using Math.random()
    let flippedHeads = Math.random() < 0.5;

    // heads vs tails flipped
    if (flippedHeads) {
      // Display the image and the message 'You Flipped Heads!'
      document.getElementById("penny-image").src =
        "assets/images/penny-heads.jpg";
      document.getElementById("message").textContent = "You Flipped Heads!";

      // Add one to the "number of heads" count flipped
      headsRolls += 1;
    } else {
      // Display the image and the message 'You Flipped Tails!'
      document.getElementById("penny-image").src =
        "assets/images/penny-tails.jpg";
      document.getElementById("message").textContent = "You Flipped Tails!";

      // Add one to the "number of tails" count flipped
      tailsRolls += 1;
    }

    // Update the scoreboard
    updateScoreboard();
  });

  document.getElementById("clear").addEventListener("click", () => {
    // Reset the values to zero
    headsRolls = 0;
    tailsRolls = 0;

    // message to the user
    document.getElementById("message").textContent =
      "Let's Get Ready to Rumble!";

    // Update the scoreboard
    updateScoreboard();
  });
});
