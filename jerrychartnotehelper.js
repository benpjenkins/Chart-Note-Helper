
function submit() {
  let chartnote = "Screening visit by Spiritual Care Volunteer Jerry Black\n\n";

  let unique = document.getElementById("unique_text").value;
  let position = document.getElementById("position_text").value
  let disposition = document.getElementById("disposition_text").value
  let support = document.getElementById("support_text").value;
  let need = document.getElementById("need_text").value
  let chaplain = document.getElementById("chaplain_text").value
  let action = document.getElementById("action_text").value
  
  
  chartnote += `Pt was ${position} and ${disposition} at time of visit.  `;
  chartnote += `Pt was unique because ${unique}.  `
  chartnote += `Pt relies on their ${support} for support.  `
  chartnote += `Pt desires to ${need}.  `;
  chartnote += `Volunter ${action}.\n\n`;
  chartnote += `Entered by Resident Chaplain ${chaplain}`;
  alert(chartnote);

}

