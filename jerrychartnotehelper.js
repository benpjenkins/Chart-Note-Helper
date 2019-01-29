let chartnote = "Screening visit by Spiritual Care Volunteer Jerry Black\n";

function addToChart(position, disposition, unique, support, need, card, chaplain) {
  //helper function to add user input to user selected input
  /*next goal is to add correct ids to html and access that information in js
    This may mean reworking the helper function or breaking it up into several.
    Current parameters will probably need to be stored as variables instead.
    Consider using an object to store user inputs as well.
  */
  chartnote += "Pt was ${position} and ${disposition} at time of visit.  ";
  chartnote += "${unique}.  ";
  chartnote += "Pt relies on their ${support} for support.  "
  chartnote += "Pt desires to ${need}.  ";
  chartnote += "Volunter left chaplain card.\n";
  chartnote += "Entered by Resident Chaplain ${chaplain}";
}

function submit() {
  addToChart();
  alert(chartnote);
  //this function needs the ability to copy chartnote to the clipboard
}
