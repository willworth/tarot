const reading = [];

//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}

const startTarot = function () {
  readingIntro();
  runAnimation();
  setTimeout(getReading, 500); 
  setTimeout(renderResult, 1000); 
};
//////////////

const readingIntro = () => {
  document.querySelector("#intro").innerHTML = `Your major arcana reading for ${today} is:`;
}
///////////


/////////////animate on main run
///////  #TODO queryselectall...
const runAnimation = () => {
  document.querySelector(".past").setAttribute("src", "images/animated/spinner.gif");
  document.querySelector(".present").setAttribute("src", "images/animated/spinner.gif");
  document.querySelector(".future").setAttribute("src", "images/animated/spinner.gif");
};


/////////////////
const renderResult = () => {
  document.querySelector("#intro").innerHTML = `Your major arcana reading for ${today} is:

    ${major[reading[0]]}, ${major[reading[1]]} ${major[reading[2]]}`;


    console.log ("Your reading for " + today +
    " is: \n \n" 
    + major[reading[0]] +",   " + major[reading[1]]+ ",   "+ major[reading[2]]);

    // create file paths to images from array indexes
    let past = "images/MajorArcana" + reading[0] + ".gif";
    let present = "images/MajorArcana" + reading[1] + ".gif";
    let future = "images/MajorArcana" + reading[2] + ".gif";

    
// change image
document.querySelectorAll(".past")[0].setAttribute("src", past);
document.querySelectorAll(".present")[0].setAttribute("src", present);
document.querySelectorAll(".future")[0].setAttribute("src", future);
//change description for each card
document.querySelector("#past").innerHTML = `${major[reading[0]]}`;
document.querySelector("#present").innerHTML = `${major[reading[1]]}`;
document.querySelector("#future").innerHTML = `${major[reading[2]]}`;

};
/////////////////


///
const getReading = () => {
  console.log('called getReading!');
  // let reading = [];
  while (reading.length < 3) {
    reading.push(getNum());
  }
  console.log(reading);
  if (checkIfArrayIsUnique(reading)){
    return reading;
  }
  else {
    reading.length = 0;  // clears array
    console.log('recursion!')
    getReading();
  }
}


///////////
const getNum = () => {
  return Math.floor(Math.random() * 22);
};


/////////// date function

const getToday = function () {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  today = dd + '/' + mm + '/' + yyyy;
  //american formatting would be:
  // today = mm+'/'+dd+'/'+yyyy;

  return today;
};
const today = getToday();
//////////end date function



const major = ["0 - The Fool.",
  "I - The Magus.",
  "II - The Highpriestess.",
  "III - The Empress.",
  "IV - The Emperor.",
  "V - The Hierophant.",
  "VI - The Lovers.",
  "VII - The Chariot.",
  "VIII - Adjustment.",
  "IX - The Hermit.",
  "X - Fortune.",
  "XI - Lust.",
  "XII - The Hanged man.",
  "XIII - Death.",
  "XIV - Art.",
  "XV - The Devil.",
  "XVI - The Tower.",
  "XVII - The Star.",
  "XVIII - The Moon.",
  "XIX - The Sun.",
  "XX - The Aeon.",
  "XXI - The Universe."]