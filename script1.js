// Votre console affichera beaucoup d'erreurs c'est tout à fait normal si vous suivez l'ordre synchrone des exercices à la fin vous ne devriez plus avoir d'erreur.

// Exercice 1 V
// Insérez votre code ici
const firstname = "Bubulle";
const lastname = "XXXX";

// Ne touchez pas à ceci
document.querySelector("h1").textContent = `Bonjour ${firstname} ${lastname}`;

// Exercice 2
// Insérez votre code ici
let age = Number(32);

// Ne touchez pas à ceci
document.querySelector(
  "p"
).textContent = `Tu t'appelles donc ${firstname} et tu as ${age} ans 😊 si mes calculs sont justes tu es né en ${
  2023 - age
}`;
// Exercice 3
// Insérez votre code ici
let year = Number(2023);
const birthYear = Number(year - age);

// Exercice 4
// Insérez votre code ici
let user = [firstname, lastname, age, year, birthYear];
// Ne touchez pas à ceci
user.forEach((infoUser) => {
  switch (infoUser) {
    case firstname:
      document.getElementById("firstname").textContent = `Salut ${firstname} !`;
      break;
    case lastname:
      document.getElementById(
        "lastname"
      ).textContent = `Bonjour Monsieur/Madame ${lastname} !`;
      break;
    case age:
      document.getElementById(
        "age"
      ).textContent = `Quel âge as-tu ? ${age} ans`;
      break;
    case year:
      document.getElementById(
        "year"
      ).textContent = `On est toujours en ${year}`;
      break;
    case birthYear:
      document.getElementById(
        "birthYear"
      ).textContent = `Tu es donc né en ${birthYear}`;
      break;
    default:
      console.log("Oups il y a une erreur");
      break;
  }
});
// Exercice 5
// Insérez votre code ici

/* Merci Sara
let colorLigthBlue = "lightblue";
let colorPink = "pink";
document.body.style.background = `linear-gradient(${colorPink}, ${colorLigthBlue})`;
*/
let backgroundColor = "LightSalmon";
// Ne touchez pas à ceci
document.body.style.backgroundColor = backgroundColor;
// Insérez votre réassignation de backgroundColor ici
backgroundColor = "lightblue";

document.body.style.backgroundColor = backgroundColor;

// Exercice 6
// Insérez votre code ici
// Insérer une image
let myImage = new Image(100, 200);
let car = {
  brand: "peogot",
  modele: "403",
  yearConstruct: 1956,
  color: "lightblue",
  image:
    "https://media.gqmagazine.fr/photos/5b9914e0ee2d490011499721/16:9/w_1920,c_limit/main_jpg_9325.jpg",
};
console.log(car);
// Ne touchez pas à ceci
document.getElementById(
  "firstItem"
).textContent = `La marque de ta voiture : ${car.brand}`;
document.getElementById(
  "secondItem"
).textContent = `Le modèle de ta voiture : ${car.model}`;
document.getElementById(
  "thirdItem"
).textContent = `Ta voiture a été contruite en : ${car.yearConstruct}`;
document.getElementById(
  "fourthItem"
).textContent = `Ta voiture est de couleur : ${car.color}`;
document.getElementById("car").scr = car.image;
// Exercice 7
// Insérez votre code ici
// const matches = document.querySelectorAll("p");
const buttons = document.querySelectorAll("button");
console.log(buttons);
const cat = document.getElementById("cat");
console.log(cat); // <img id="cat" />

// Ne touche pas à ceci
const catURL = [
  "https://s1.1zoom.me/big0/812/Cats_Glance_Kittens_558640_1280x720.jpg",
  "https://img3.wallspic.com/crops/4/8/6/4/94684/94684-chat_siberien-chat_siamois-chaton-chat_persan-chat-1280x720.jpg",
  "https://chatfaitdubien.fr/wp-content/uploads/2016/09/chaton.jpg",
];
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Photo 1":
        cat.src = catURL[0];
        break;
      case "Photo 2":
        cat.src = catURL[1];
        break;
      case "Photo 3":
        cat.src = catURL[2];
        break;
      default:
        console.log("Erreur");
        break;
    }
  });
});





const fruits = ["pomme", "orange", "banane"];
const listOutput = document.getElementById("listOutput");
fruits.forEach((fruit) => {
  listOutput.innerHTML += `<li>${fruit}</li>`;
});
fruits.forEach((fruit) => {
  listOutput.innerHTML += `<li>${fruit}</li>`;
});