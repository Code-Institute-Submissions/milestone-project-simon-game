# Interactive Frontend Development Milestone Project
For my IFD Milestone Project, I am creating a single page application for a game called “Simon”.  
It is a game where the computer selects a pattern of colours and the user-player must copy the exact sequence to progress to the next level where the sequence gets harder.  It is a fun game for everybody to play.

## UX
A typical player of Simon would be looking for the following. 

1. An easy to follow user interface that is also appealing to the eye.  
2. Immediately know where the start button is for instant play.  
3. Clearly highlighted game-tiles and sound notification on selection.
4. Reassurance that they are following the proper sequence set out by the computer and notification if they win or lose.  
5. A new user will want to know how to play the game in a single sentence and be excited to play.

To add a bit of excitement to the game, I created a spaceship scenario where you must select the proper button-sequence to land your ship. 
I called the game "Space captain Simon" where the computer is your captain with the sequence you must follow. Working with "mobile-first" in mind, 
I decided to divide the page into two sections: the top-header section for the start button, a short explanation and a level counter; and the main body section for the four game-tiles. 
I used shaded versions of red, green, yellow and blue on the gaming-tiles so when they are selected they will turn into normal red, green, yellow and blue colours giving a “light up” effect.  
The mock-up I used for planning the application is a file in my project under the name simonGameMockUp.jpeg

In the top section I have put the name of the game on top.  Below that, I have the start button with a single sentence underneath to describe what the user must do to play the game. 
Then under that I have a game counter to show what level the user is in the game. I used the "impact" font on the lettering to create a robotic/space feel to the game. 

In the main body section, I have the four game-tiles in a cross formation on a black background so the colours will really light up out of the dark body.


## Features
### Existing Features
- Start button: If the user clicks on this button, the computer will randomly select a game tile starting with one tile and adding an extra tile as the player progresses through each level.
- Game counter: notifies the player what level they are on.  If the player fails to follow the sequence the counter will say “You crashed - Try again” and if the player wins the game the counter will display “You Win!”.
- Game tiles: When selected by the computer or clicked by the user-player, the game tiles will “light up” and play a short tone to signify it’s selection.

### Features Left to Implement
- a high score counter.
- running audio while game is being played to create more atmosphere.
- advertise more games available etc.

## Technologies Used
Javascript: For game interaction and game-tiles animation  
Scss: to add logic to my stylesheets.  
Bootstrap (getbootstrap.com): For the Grid System and buttons across the site.
- Hover(cdnjs): I used "sweep to bottom" hover on the start button.  When the user hovers over the start button, a transparent shade sweeps down over the selection to highlight what the user is about to select. 
- Font Awesome: I put a star at either side of the label on the start button using font-awesome. 
- Fonts: I used "impact" font on the headings and buttons to create a space vibe.  

## Testing
As per my primary targets above:

1. A regular player will see the start button on landing and can get started straight away.
2. A new player will be excited to see a spaceship-scenario with a quick explanation under the start button. They will know how they are progressing by the game-counter and sounds on the buttons they select.


Other Testing...

- Jasmine: Set up a Jasmine Testing folder with specs and scripts files to test the start button and the color-changing functions of the game-tile.  
- HTML and CSS code was validated through the relevant validators.

## Deployment
I deployed my project using Github Pages. From my repository, I selected "Settings" and scrolled down to Github Pages. I clicked on the "Source" drop-down menu and selected "Master Branch" then clicked "Save". 
I then received the link to my website and copied it. I pasted the link into the top of my repository along with a short description of the project. I clicked on the link and did more testing of my site and 
everything is working. Here is the live link to my "Simon" game https://jeffoneillstudent.github.io/milestone-project-simon-game/
## Credits
### Content
The information on Simon game from the brief (YouTube).

### Media
Sounds created by me in Garageband App on Mac.

### Acknowledgements
Code institute tutorials.  
w3schools.com  
Slack  
Javascript tutorials on Udemy  
stackoverflow.com
