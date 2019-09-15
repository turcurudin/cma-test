var artwork = [];

//fetch the JSON data from the server
const request = async () => {
    
}

var departments = new Set();  //We need each dept name to occur only once
var dropdown = document.getElementById("selectDept");
var e = document.getElementById("displayArea");
var p = document.createElement("p");
var n = document.createTextNode("");

document.addEventListener("DOMContentLoaded", async function(){
    const response = await fetch('/static/json/artwork.json');
    artwork = await response.json();
    dropdown = document.getElementById("selectDept");
    for (var i = 0; i < artwork.artwork.length; ++i) {
        departments.add(artwork.artwork[i].department[0].name);
    }

    function addToOptions(values){
        var option = document.createElement("option");
        option.text = values;
        dropdown.add(option);
    }

    departments.forEach(addToOptions); //iterate through the set of dept names
                                       // and add them to the dropdown options

    e = document.getElementById("displayArea");
    p = document.createElement("p");
    n = document.createTextNode("");
    p.appendChild(n);
    e.appendChild(p);
    
});

function displayDetails(){
    var choice = dropdown.options[dropdown.selectedIndex].text;
    var results = artwork.artwork.filter(entry => entry.department[0].name == choice);
    
    while (p.hasChildNodes()) {
        p.removeChild(p.firstChild);
    }
    
    //needs formatting work and organized display of all data
    for (var i = 0; i < results.length; ++i){
        n = document.createElement("IMG");
        n.src = "static/images/" + results[i].accession_number + "_reduced.jpg";
        n.height = "300";
        p.appendChild(n);
        n = document.createElement("BR");
        p.appendChild(n);
        n = document.createTextNode("Title: " + results[i].title);
        p.appendChild(n);
        n = document.createElement("BR");
        p.appendChild(n);
        n = document.createElement("BR"); //repeated <br/> tags to give more separation.
        p.appendChild(n);
    }

    e.replaceChild(p, e.childNodes[0]);
}