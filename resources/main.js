const contactButton = document.getElementById('contact-sphere');

/**  Her er det fare for at man velger feil elementer hvis man legger på "hidden" et annet sted.
 * Bedre å legge på id på hver av de og selected med getElementById
*/
const discordButton = document.getElementsByClassName('hidden')[0];
const gitHubButton = document.getElementsByClassName('hidden')[1];
const emailButton = document.getElementsByClassName('hidden')[2];

// Ser at hele filen er litt dårlig formatert. Bruker du Prettier med formatOnSave?

// console.log(emailButton)
// function unCollapseContactSpherse() {
    
//     if (discordButton.style.opacity === '0'){
//         discordButton.style.opacity = '100';
//         gitHubButton.style.opacity = '100';
//         emailButton.style.opacity = '100';
//     } else {
//         discordButton.style.opacity = '0';
//         gitHubButton.style.opacity = '0';
//         emailButton.style.opacity = '0';
//     }
// }

// contactButton.onclick = unCollapseContactSpherse
// // contactButton.addEventListener('mouseover', unCollapseContactSpherse)

//Koden over endrer opacity uten delay son funksjonen under.  

function unCollapse() {
    const elements = document.querySelectorAll(".small-sphere");

    for (const element of elements) {
      element.classList.toggle("small-sphere-transformed");

    }
  };
  
//   const changeButton = document.querySelector("#change");
  contactButton.addEventListener("click", unCollapse);

const arrowAbout = document.querySelectorAll('.arrow')[0];
const arrowSkills = document.querySelectorAll('.arrow')[1];
const aboutText = document.getElementById('about');
const skillPage = document.getElementById('skills');

function arrowRotateSkillsShow () {
  arrowAbout.classList.toggle('arrow-transform');
  arrowSkills.classList.toggle('arrow-transform');


  skillPage.style.display = 'block';
  aboutText.style.display = 'none';
//   // arrowSkills.classList.toggle('arrow-transform');
};

function arrowRotateAboutShow () {
  arrowAbout.classList.toggle('arrow-transform');
  arrowSkills.classList.toggle('arrow-transform');

  skillPage.style.display = 'none';
  aboutText.style.display = 'block';
  // arrowSkills.classList.toggle('arrow-transform');
};

arrowAbout.onclick = arrowRotateSkillsShow;
arrowSkills.onclick = arrowRotateAboutShow;

