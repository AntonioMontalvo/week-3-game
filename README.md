# week-3-game
Overview

In this assignment, you'll create one of two possible computer games: Hangman or Psychic. These apps will run in the browser, and feature dynamically updated HTML powered by your JavaScript code.

*Before You Begin

  1. Create a new GitHub repo called week-3-game, then clone it to your computer. DONE

  2. Inside your local week-3-game folder, create the following: index.html, composer.json and index.php DONE

    2.1 Fill in the appropriate content in the composer.json and index.php files to be able to deploy your game to heroku when it is finished. DONE
    2.2 While still in your week-3-game directory, make a folder called assets. DONE
    2.3 cd your way into the assets folder, then make three additional folders: javascript, css and images. DONE
    2.4 In the javascript folder, make a file called game.js. DONE
    2.5 In the css folder, make a file called style.css. DONE
    2.6 Also in the css folder, make a file called reset.css. Paste into it the code from the Meyerweb reset stylesheet. DONE
    2.7 In the images folder, save whatever images you plan on using.

  3. Push the above changes to GitHub.

  4. Push your selected game to heroku. Remember:
    heroku login
    heroku create
    git push heroku master

  5. Watch the demo. DONE

  6. Choose a theme for your game!  JAZZ questions, JAZZ sound-tracks and JAZZ aesthetic. DONE

  7. Use key events to listen for the letters that your players will type.

  8. Display the following on the page:

      8.1Press any key to get started!

      8.2 Wins: (# of times user guessed the word correctly).

      8.3 If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

      8.4 As the user guesses the correct letters, reveal them: m a d o _  _ a.

      8.5 Number of Guesses Remaining: (# of guesses remaining for the user).

      8.6 Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

      8.7. After the user wins/loses the game should automatically choose another word and make the user play it.

  9. Hangman Game Bonuses

    9.1 Play a song when the user guesses their word correctly.

    9.2 Write some stylish CSS rules to make a design that fits your game's theme.

HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.

Save your whole game and it's properties in an object.

Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.

Don't forget to place your global variables and functions above your object.
Remember: global variables, then objects, then calls.

 
