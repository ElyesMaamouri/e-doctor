
//Display all picture office @media 768px
let pictures = document.querySelectorAll("#all-others-images");
document.querySelector("#showImage").addEventListener("click", function () {
    pictures.forEach( (element) => {
        if (element.style.display === "inherit") {
            showImage.style.display = "none";
            element.style.display = "none";
             removeImage.style.display = "none";
        }
        else {
            removeImage.style.display = "inherit";
            element.style.display = "inherit";
     showImage.style.display = "none";
         
        }
    });
});
document.querySelector("#removeImage").addEventListener("click", function () {
    pictures.forEach( (element) => {
        if (element.style.display === "none") {
            showImage.style.display = "inherit";
            element.style.display = "inherit";
             removeImage.style.display = "inherit";
        }
        else {
            removeImage.style.display = "none";
            element.style.display = "none";
     showImage.style.display = "inherit";
         
        }
    });
});

// Config Map 
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

function toggleEnable(id) {
    var textbox = document.getElementById(id);
    if (textbox.disabled) {
      
        document.getElementById(id).disabled = false;
        textbox.focus()
        textbox.placeholder = ''
      
     }  
 }

 //Tab

 function openProject(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  
  function appointment(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("card-meeting");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-meeting", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active-meeting";
  
  }
  
//Display name file input upload file
function displayFileName(input) {
  var fileNameDisplayId = input.id.replace("fileInput", "fileNameDisplay");
  var fileNameDisplay = document.getElementById(fileNameDisplayId);
  if (input.files && input.files.length > 0) {
      var fileName = input.files[0].name;
      var fileNameParts = fileName.split('.');
      var fileNameWithoutExtension = fileNameParts[0];
      var fileExtension = fileNameParts.length > 1 ? '.' + fileNameParts[fileNameParts.length - 1] : '';
      var maxLength = 15;
      var truncatedFileName = fileNameWithoutExtension.length > maxLength ? fileNameWithoutExtension.substring(0, maxLength) + '...' : fileNameWithoutExtension;
      fileNameDisplay.textContent = truncatedFileName + fileExtension;
  } else {
      fileNameDisplay.textContent = '';
  }
}

