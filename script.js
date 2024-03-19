const cardContainer = document.querySelector('.card-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const card = document.querySelector('.card');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelector('.card-text');

const menuLinks = document.querySelectorAll('.menubar a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menubar').style.display = 'none';
    });
});

gsap.registerPlugin(ScrollTrigger, ScrollTrigger);

// REVEAL //
gsap.utils.toArray("#animateUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});


let cardIndex = 0;

// Array of titles and descriptions
const cards = [
    { 
        title: 'FridgeSnap', 
        description: 'An Android image-classification application, designed to reduce food waste. Built using Java, Python, XML, Tensorflow. <br><br> <a href="https://github.com/liiiiamb/FridgeSnap">GitHub Repository</a><br><br><a href="https://www.softwareimpacts.com/article/S2665-9638(23)00122-7/fulltext">FridgeSnap Research Paper</a>'
    },
    { title: 'Clapperboard', description: 'A website built for Movie and TV show enjoyers to queue titles. This site uses the TMDB API to collect and query movie/show information. <br><br> <a href="https://github.com/liiiiamb/Clapperboard">GitHub Repository' },
    { title: 'GasCert', description: 'A mobile application, built using Flutter, that simplifies the data entry process of Gas Safety Certificates. Includes the flutter package flutter_pdf_view to generate and display PDF safety certificates. <br><br><a href="https://github.com/liiiiamb/gascert-code">GitHub Repository' },
    { title: 'Robot Juice', description: 'A website built for a Web Design and Development module I took during my first year at university. Built using HTML, CSS, JavaScript, and JQuery. Includes fully functional pages and a survey implemented using JQuery <br><br> <a href="https://github.com/liiiiamb/RobotJuice">GitHub Repository' },
    { title: 'SortYourMedia', description: 'A Java program developed to allow users to upload music files, which could then be organized. Allows users to combine locally-stored music files in one central location. <br><br> <a href="https://github.com/liiiiamb/SortYourMedia">GitHub Repository' },
    { title: 'Vending Machine', description: 'Developed in partial completion of a Software Engineering module undertaken at University - an application developed to act as a vending machine front-end for users. This application contains an SQL database backend which contains drink names, drink prices, etc.<br><br> <a href="https://github.com/liiiiamb/VendingMachine">GitHub Repository' },
    { title: 'HealthBot', description: 'Development of a small-scale healthcare chatbot that uses a custom intents file - developed for partial completion of a Complex Systems module undertaken at University.<br><br> <a href="https://github.com/liiiiamb/HealthcareChatbot">GitHub Repository' },
    { title: 'Video Game Review Classification', description: 'Work undertaken for the completion of part of my Intelligent Systems module at University - a classification model using KNN, Naive-Bayes and SVC to classify video game reviews.<br><br> <a href="https://github.com/liiiiamb/VideoGameReviewClassification">GitHub Repository' },
];

// Display initial card
updateCard();

// Event listeners for navigation arrows
leftArrow.addEventListener('click', () => {
    cardIndex = (cardIndex - 1 + cards.length) % cards.length;
    updateCard();
});

rightArrow.addEventListener('click', () => {
    cardIndex = (cardIndex + 1) % cards.length;
    updateCard();
});

// Function to update card content
function updateCard() {
    const currentCard = cards[cardIndex];
    cardTitle.textContent = currentCard.title;
    cardText.innerHTML = currentCard.description;
}
