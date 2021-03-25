import { Horse } from './Horse.js';
import { Snake } from './Snake.js';
import { Animal } from './Animal.js';
  
  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");
  
  sam.move();
  tom.move(34);