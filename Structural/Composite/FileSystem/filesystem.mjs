
import Directory from './directory.mjs';
import File from './file.mjs';


let Inception = new File("Inception.mp4");
let scifi = new Directory("Sci-Fi");
scifi.add(Inception);


let Joker = new File("Joker.mp4");
let JohnWick = new File("John Wick.mp4");
let action = new Directory("Action");
action.add(Joker);
action.add(JohnWick);


let Movies = new Directory("Movies");

Movies.add(scifi);
Movies.add(action);

Movies.stats();