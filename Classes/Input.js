class Input {
  constructor(key) {
    this.key = key;
  }

  onKeyDown(keyInput) {

    let backspace = 8;
    let tab = 9;
    let enter = 13;
    let shift = 16;
    let ctrl = 17;
    let alt = 18;
    let escape = 27;
    let spacebar = 32;
    let left_arrow = 37;
    let up_arrow = 38;
    let right_arrow = 39;
    let down_arrow = 40;

    let zero = 48;
    let one = 49;
    let two = 50;
    let three = 51;
    let four = 52;
    let five = 53;
    let six = 54;
    let seven = 55;
    let eight = 56;
    let nine = 57;

    let a = 65;
    let b = 66;
    let c = 67;
    let d = 68;
    let e = 69;
    let f = 70;
    let g = 71;
    let h = 72;
    let i = 73;
    let j = 74;
    let k = 75;
    let l = 76;
    let m = 77;
    let n = 78;
    let o = 79;
    let p = 80;
    let q = 81;
    let r = 82;
    let s = 83;
    let t = 84;
    let u = 85;
    let v = 86;
    let w = 87;
    let x = 88;
    let y = 89;
    let z = 90;

    let numpad_0 = 96;
    let numpad_1 = 97;
    let numpad_2 = 98;
    let numpad_3 = 99;
    let numpad_4 = 100;
    let numpad_5 = 101;
    let numpad_6 = 102;
    let numpad_7 = 103;
    let numpad_8 = 104;
    let numpad_9 = 105;

    switch (keyInput) {

      /*------------Basic Keyboard-----------------*/
      case "backspace":
        if (this.key[backspace]) {
          return true;
        }
        break;
      case "tab":
        if (this.key[tab]) {
          return true;
        }
        break;
      case "enter":
        if (this.key[enter]) {
          return true;
          console.log("hello");
        }
        break;
      case "shift":
        if (this.key[shift]) {
          return true;
        }
        break;
      case "ctrl":
        if (this.key[ctrl]) {
          return true;
        }
        break;
      case "alt":
        if (this.key[alt]) {
          return true;
        }
        break;
      case "escape":
        if (this.key[escape]) {
          return true;
        }
        break;
      case "spacebar":
        if (this.key[spacebar]) {
          return true;
        }
      case "left_arrow":
        if (this.key[left_arrow]) {
          return true;
        }
        break;
      case "up_arrow":
        if (this.key[up_arrow]) {
          return true;
        }
        break;
      case "right_arrow":
        if (this.key[right_arrow]) {
          return true;
        }
        break;
      case "down_arrow":
        if (this.key[down_arrow]) {
          return true;
        }
        break;

        /*------------Numbers-----------------*/
      case "one":
        if (this.key[one]) {
          return true;
        }
        break;
      case "two":
        if (this.key[two]) {
          return true;
        }
        break;
      case "three":
        if (this.key[three]) {
          return true;
        }
        break;
      case "four":
        if (this.key[four]) {
          return true;
        }
        break;
      case "five":
        if (this.key[five]) {
          return true;
        }
        break;
      case "six":
        if (this.key[six]) {
          return true;
        }
        break;
      case "seven":
        if (this.key[seven]) {
          return true;
        }
        break;
      case "eight":
        if (this.key[eight]) {
          return true;
        }
        break;
      case "nine":
        if (this.key[nine]) {
          return true;
        }
        break;

        /*------------Letters-----------------*/
      case "a":
        if (this.key[a]) {
          return true;
        }
        break;
      case "b":
        if (this.key[b]) {
          return true;
        }
        break;
      case "c":
        if (this.key[c]) {
          return true;
        }
        break;
      case "d":
        if (this.key[d]) {
          return true;
        }
        break;
      case "e":
        if (this.key[e]) {
          return true;
        }
        break;
      case "f":
        if (this.key[f]) {
          return true;
        }
        break;
      case "g":
        if (this.key[g]) {
          return true;
        }
        break;
      case "h":
        if (this.key[h]) {
          return true;
        }
        break;
      case "i":
        if (this.key[i]) {
          return true;
        }
        break;
      case "j":
        if (this.key[j]) {
          return true;
        }
        break;
      case "k":
        if (this.key[k]) {
          return true;
        }
        break;
      case "l":
        if (this.key[l]) {
          return true;
        }
        break;
      case "m":
        if (this.key[m]) {
          return true;
        }
        break;
      case "n":
        if (this.key[n]) {
          return true;
        }
        break;
      case "o":
        if (this.key[o]) {
          return true;
        }
        break;
      case "p":
        if (this.key[p]) {
          return true;
        }
        break;
      case "q":
        if (this.key[q]) {
          return true;
        }
        break;
      case "r":
        if (this.key[r]) {
          return true;
        }
        break;
      case "s":
        if (this.key[s]) {
          return true;
        }
        break;
      case "t":
        if (this.key[t]) {
          return true;
        }
        break;
      case "u":
        if (this.key[u]) {
          return true;
        }
        break;
      case "v":
        if (this.key[v]) {
          return true;
        }
        break;
      case "w":
        if (this.key[w]) {
          return true;
        }
        break;
      case "x":
        if (this.key[x]) {
          return true;
        }
        break;
      case "y":
        if (this.key[y]) {
          return true;
        }
        break;
      case "z":
        if (this.key[z]) {
          return true;
        }
        break;

        /*------------Numpad-----------------*/
      case "numpad_0":
        if (this.key[numpad_0]) {
          return true;
        }
        break;
      case "numpad_1":
        if (this.key[numpad_1]) {
          return true;
        }
        break;
      case "numpad_2":
        if (this.key[numpad_2]) {
          return true;
        }
        break;
      case "numpad_3":
        if (this.key[numpad_3]) {
          return true;
        }
        break;
      case "numpad_4":
        if (this.key[numpad_4]) {
          return true;
        }
        break;
      case "numpad_5":
        if (this.key[numpad_5]) {
          return true;
        }
        break;
      case "numpad_6":
        if (this.key[numpad_6]) {
          return true;
        }
        break;
      case "numpad_7":
        if (this.key[numpad_7]) {
          return true;
        }
        break;
      case "numpad_8":
        if (this.key[numpad_8]) {
          return true;
        }
        break;
      case "numpad_9":
        if (this.key[numpad_9]) {
          return true;
        }
        break;
      default:
        console.error("Key not found");
        break;
    }

    function Logging(message) {
      console.log(message);
    }
  }


  onKeyUp() {}
  mouseDown() {}
  mouseUp() {}


}
