let chartnote = "Screening visit by Spiritual Care Volunteer Jerry Black  ";

function addToChart() {
  //helper function to add user input to user selected input
  if (document.getElementById("charthelper").position.value !== null) {  
    var position = document.getElementById("charthelper").position.value;
    chartnote += "Pt was " + position + " at time of chaplain visit.";
  }
}

function submit() {
  addToChart();
  alert(chartnote);
}

