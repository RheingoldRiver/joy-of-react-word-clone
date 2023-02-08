# Word Game

## Joy of React, Project I
Both stretch goals completed.

### Additional bonus things I did

* Add a "Cheat Mode"
    * Cheat mode allows you to click the keyboard to see if a letter is in the word. "Cheat mode misplaced" has a value less than guessed-but-incorrect-placement.
    * Cheat mode also enables ctrl+Z, which is implemented via ~~two hooks, useModifierKey and useHotkey~~ [the ctrlKey property of keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/ctrlKey) and one hook, useHotKey.
    * Cheat mode setting is stored in localStorage.
* Spent a while making actually nice css for the keyboard (at least I think so) (I followed Refactoring UI's advice and added more whitespace between the letters than I was going to, and used a box shadow instead of an outline or border, and wow it actually looks good see screenshots)

### Notes before watching solutions
- I made two separate objects for tracking the positions & the states of each letter, because it was a LOT faster to type out each of the letters that way:

```js
export const KEYBOARD_LEETERS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

export const DEFAULT_LETTERS = {
    A: "incorrect",
    B: "incorrect",
    C: "incorrect",
    // snip
    Z: "incorrect",
  }
  ```
  
  Rather than a single state variable tracking both the letter & the position along with its state. This was just so much easier to type. But, it's less clean cos it's 2 things to pass between objects. So that's kinda bad.
  
- I also called the keyboard key `Key` which is legal but not a good conflict with `key` so that's not something I will do again.
- I'm not sure where the keyboard should've gone. I put it inside of the game but maybe I should've lifted ALL the state up into the app so the keyboard could've gone there. Not sure.
- When implementing the keyboard I wasn't sure how the logic should've worked for if you previously got a letter right but now got it misplaced. I chose to overwrite it (just because that was how it works by default) but yeah not sure what should be done in the original game, I've never played it.
- I think I was a little overboard with individual component creation.
### Notes while watching solutions

* ~~Use minLength & maxLength on the html input (although that can occasionally fail)~~ just kidding use [input pattern](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_pattern)
* Careful not to create css classes called "undefined"
* oh my god all you have to do to check for victory is if guess == solution /facepalm
    * This one I'm not fixing (I want a reference for reduce syntax anyway)
* it's a disabled= html tag on the input, not totally not showing it, if the game is over
* The text from each of the banners should've been injected via `children` (i.e. dependency injection)
* Use && instead of so many ternaries for conditional display

## Screenshots

### Keyboard
![image](https://user-images.githubusercontent.com/18037011/217552313-f582742b-7d5a-44b7-98c7-055188f96802.png)


### Buttons
![image](https://user-images.githubusercontent.com/18037011/217552530-6d9310ba-fa6f-499a-a8bc-bc1225ea15f4.png)
![image](https://user-images.githubusercontent.com/18037011/217552672-5da863f8-f0f8-424d-863a-2cc72c5f35eb.png)

### Cheat Mode
![image](https://user-images.githubusercontent.com/18037011/217553654-f019c20a-6ec5-42ac-bfb7-6c1f815b798c.png)
