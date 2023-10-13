const contactButton = document.getElementById('contact-sphere');
const discordButton = document.getElementsByClassName('hidden')[0];
const gitHubButton = document.getElementsByClassName('hidden')[1];
const emailButton = document.getElementsByClassName('hidden')[2];


// console.log(emailButton)
function unCollapseContactSpherse() {
    if (discordButton.style.opacity === '0'){
        discordButton.style.opacity = '100';
        gitHubButton.style.opacity = '100';
        emailButton.style.opacity = '100';
    } else {
        discordButton.style.opacity = '0';
        gitHubButton.style.opacity = '0';
        emailButton.style.opacity = '0';
    }
}

contactButton.onclick = unCollapseContactSpherse