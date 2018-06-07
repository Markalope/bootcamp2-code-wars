function capitalize(s){
  let letters = s.toUpperCase().split("");
  let letters2 = s.toLowerCase().split("");
  
  for (i=0; i < letters.length; i +=2) {
    letters[i] = letters[i].toLowerCase();
    letters2[i] = letters2[i].toUpperCase();
    }
    letters = letters.join("");
    letters2 = letters2.join("");
    console.log(letters);
    console.log(letters2);
    return [letters2, letters];
};