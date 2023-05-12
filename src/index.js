const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
    "Don't be a git, use git.",
    "npm install happiness --save",
    "JavaScript is like a box of chocolates. You never know what you're gonna get.",
    "git commit -m \"I love you\"",
    "npm run away",
    "JavaScript makes me smile. Sometimes.",
    "git push origin master",
    "npm start a new life",
    "JavaScript is not Java. Repeat after me.",
    "git stash your problems away"
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };