let mynum = 48;
let a = parseInt(prompt("Enter a number"));
do {
  if (a > mynum) {
    alert("You have guessed a greater number!");
    a = parseInt(prompt("Guess a right answer again : "));
  } else {
    alert("You have guessed a smaller number!");
    a = parseInt(prompt("Guess a right answer again : "));
  }
} while (a != mynum);
