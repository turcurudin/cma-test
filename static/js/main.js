var artwork = [];

//fetch the JSON data from the server
const request = async () => {
    
}

var departments = new Set();  //We need each dept name to occur only once
var dropdown = document.getElementById("selectDept");
var e = document.getElementById("displayArea");
var r;
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
});

function displayDetails(){
    e = document.getElementById("displayArea");
    var choice = dropdown.options[dropdown.selectedIndex].text;
    var results = artwork.artwork.filter(entry => entry.department[0].name == choice);
    
    while (e.hasChildNodes()) {
        e.removeChild(e.firstChild);
    }
    
    //needs formatting work and organized display of all data
    for (var i = 0; i < results.length; ++i){
        var r = document.createElement("DIV"); //create a row for the entry
        r.className = "row"; 

        //first column contains title and image
        var c1 = document.createElement("DIV");
        c1.className = "column"; 
        p = document.createElement("p");
        n = document.createTextNode("Title: " + results[i].title);
        p.appendChild(n);
        n = document.createElement("BR");
        p.appendChild(n);
        n = document.createElement("IMG");
        n.src = "static/images/" + results[i].accession_number + "_reduced.jpg";
        n.width = "300"
        p.appendChild(n);
        c1.appendChild(p);
        r.appendChild(c1);
        
        //second column contains tombstone
        var c2 = document.createElement("DIV");
        c2.className = "column"; 
        p = document.createElement("p");
        n = document.createTextNode("Tombstone: " + results[i].tombstone);
        p.appendChild(n);
        n = document.createElement("BR");
        p.appendChild(n);
        c2.appendChild(p);
        r.appendChild(c2);
        
        //third column contains other data
        var c3 = document.createElement("DIV");
        c3.className = "column";
        p = document.createElement("p");        
        n = document.createTextNode("Accession Number: " + results[i].accession_number);
        p.appendChild(n);
        n = document.createElement("BR");
        p.appendChild(n);
        n = document.createTextNode("ID: " + results[i].id);
        p.appendChild(n);
        n = document.createElement("BR");
        p.appendChild(n);
        
        //list creators
        n = document.createTextNode("Creator(s): ");
        p.appendChild(n);
        n = document.createElement("BR");
        p.appendChild(n);
        for (var j = 0; j < results[i].creator.length; ++j){
            n = document.createTextNode(results[i].creator[j].role);
            p.appendChild(n);
            n = document.createTextNode(": " + results[i].creator[j].description);
            p.appendChild(n);
            n = document.createElement("BR");
            p.appendChild(n);
        }
        
        c3.appendChild(p);
        r.appendChild(c3);
        
        e.appendChild(r);
    }

    //e.replaceChild(r, e.childNodes[0]);
    
}