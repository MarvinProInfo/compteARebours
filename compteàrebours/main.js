function compte_A_Rebours() {
    let compteARebours = document.getElementById('comptearebours');
let dateActuelle = new Date();
let dateEvenement = new Date("Mar 28 16:30:00 2021");
let totalSeconde = (dateEvenement - dateActuelle) / 1000;

let prefixe = "Compte à rebours terminé dans";
if(totalSeconde < 0){
    prefixe = "Compte à rebours terminé il y a";
    totalSeconde = Math.abs(totalSeconde);
}
if(totalSeconde > 0){
let jours = Math.floor(totalSeconde/(60*60*24));
let heures = Math.floor((totalSeconde -(jours * 60 * 60 * 24))/(60*60));
let minutes = Math.floor((totalSeconde-((jours*60*60*24+heures*60*60)))/60);
let secondes = Math.floor(totalSeconde- ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

let et = "et";
let motJour = "jours,";
let motHeure = "heures,";
let motMinute = "minutes,";
let motSeconde = "secondes";

if(jours == 0){
    jours = '';
    motJour = '';
}else if(jours == 1){
    motJour = "jour,";
}

if(heures == 0){
    heures ='';
    motHeure = '';
}else if(heures == 1){
    motHeure = "heure,";
}

if(minutes == 0){
    minutes = '';
    motMinute = '';
}else if(minutes == 1){
    motMinute = 'minute,';
}

if(secondes == 0){
    secondes = '';
    motSeconde = '';
    et = '';
}else if(secondes == 1){
    motSeconde = "seconde";
}

if(minutes ==0 && heures == 0 && jours == 0){
    et = "";
}

compteARebours.innerHTML = prefixe + jours + ' ' + motJour + ' ' + heures + ' ' + motHeure + ' ' + minutes + ' ' + motMinute + ' ' + et + ' ' + secondes + ' ' + motSeconde;
}else{
    compteARebours.innerHTML = "Compte à rebours terminé."
}
let actualisation = setTimeout('compte_A_Rebours()', 1000);
}

compte_A_Rebours();

