# Word Game

## Joy of React, Project I
Both stretch goals completed.
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

* Use minLength & maxLength on the html input (although that can occasionally fail)
* Careful not to create css classes called "undefined"
* oh my god all you have to do to check for victory is if guess == solution /facepalm
    * This one I'm not fixing (I want a reference for reduce syntax anyway)
* it's a disabled= html tag on the input, not totally not showing it, if the game is over
* The text from each of the banners should've been injected via `children` (i.e. dependency injection)
* Use && instead of so many ternaries for conditional display

## Screenshots

### Keyboard

![image](https://user-images.githubusercontent.com/18037011/215325797-78b77f97-c0f9-4707-adae-c3d0033c37aa.png)

### Buttons
![image](https://user-images.githubusercontent.com/18037011/215329798-978eef9d-7d53-42e6-956d-75b439e601a8.png)
![image](https://user-images.githubusercontent.com/18037011/215329835-89f478b2-4a41-481c-84b6-00915dbb2559.png)
