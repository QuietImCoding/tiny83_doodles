# tiny83_doodles

My little paste-in-terminal js for hand-editing tiny83 screens

## DISCLAIMER

You should NEVER paste random JS into your browser console without knowing what it does.
I strongly encourage you to take a look at the code and notice a lack of references to ethers / metamask / web3 / crypto in general before using it...

That being said, pasting js in your console is exactly how you run this.

## Directions for use

- Copy the code from tiny83.js
- Open your browser console, thus exposing the sensitive underbelly of your web browser
  - This can be done by Right Clicking on the page, and then clicking "Inspect Element". There should then be a tab called "Console" you should click on.
- Once again read the disclaimer above. If you didn't download the code from the QuietImCoding github repo right before using it, or think it may have been changed, check the code again... Seriously, pasting random stuff into your console is __bad news__
- Paste the code into your console and hit Enter.
_ You should now be able to draw on the page!! Some tips:
  - If you want to "clear" the canvas, type 0,0 into the "Screen code" box
  - Clicking a cell will toggle it on or off
  - When you're done, click the "print code" button, and an alert will pop up with the numbers you need to paste into "Screen code".
  - If you're satisfied with your work, paste the numbers into the box next to "Screen code" and mint away. If you're super cautious like me, you'll open a new clean instance of tiny83 and paste the screen code there to make suer the js you ran didn't mess with minting somehow.


Hope you enjoy!