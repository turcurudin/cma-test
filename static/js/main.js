var artwork = JSON.parse('[{ "creator": [], "title": "Virgin and Child with Saints", "accession_number": "1916.796", "tombstone": "Virgin and Child with Saints, c. 1510. Italy, Venice, 16th century. Oil on wood; framed: 109.5 x 149.9 x 9.5 cm (43 1/8 x 59 x 3 3/4 in.); unframed: 77.8 x 118.7 cm (30 5/8 x 46 3/4 in.). The Cleveland Museum of Art, Holden Collection 1916.796", "department": [ { "id": "10", "name": "European Painting and Sculpture" } ], "id": "97158" }, {"creator": [], "title": "Listening Angel", "accession_number": "1916.965", "tombstone": "Listening Angel, 16th century. Northern Italy, 16th century. Oil on canvas; unframed: 59.6 x 49.5 cm (23 7/16 x 19 1/2 in.). The Cleveland Museum of Art, Holden Collection 1916.965", "department": [ { "id": "10", "name": "European Painting and Sculpture" } ], "id": "97335" }, {"creator": [], "title": "Two Putti", "accession_number": "1916.966", "tombstone": "Two Putti, 1700s. Italy, 18th century. Oil on canvas; framed: 138 x 114 x 10 cm (54 5/16 x 44 7/8 x 3 15/16 in.); unframed: 103 x 81.5 cm (40 9/16 x 32 1/16 in.). The Cleveland Museum of Art, Holden Collection 1916.966", "department": [ { "id": "10", "name": "European Painting and Sculpture" } ], "id": "97336" }, {"creator": [], "title": "Harp", "accession_number": "1918.356", "tombstone": "Harp, 1900s. Central Africa, Democratic Republic of the Congo, Mangbetu, 20th century. Wood; overall: 63.6 cm (25 1/16 in.). The Cleveland Museum of Art, The Charles G. King, Jr. Collection.  Gift of Ralph King in memory of Charles G. King, Jr. 1918.356", "department": [ { "id": "0", "name": "African Art" } ], "id": "98657" }, {"creator": [], "title": "Figurine", "accession_number": "1921.1699", "tombstone": "Figurine, 1325-1521. Mexico, Aztec. Pottery; overall: 19.8 cm (7 13/16 in.). The Cleveland Museum of Art, Gift of Edward B. Greene 1921.1699", "department": [ { "id": "2", "name": "Art of the Americas" } ], "id": "103042" }]');

//work in progress JSON fetcher
//probably need to run in Flask to test this
let url = '/static/js/test.json';
fetch(url)
.then(res => res.json())
.then((out) => {
    console.log('Checkout this JSON! ', out);
})
.catch(err => {throw err });
//end fetcher

                
var departments = new Set();  //We need each dept name to occur only once
var dropdown = document.getElementById("selectDept");
var e = document.getElementById("displayArea");
var p = document.createElement("p");
var n = document.createTextNode("");

document.addEventListener("DOMContentLoaded", function(){
    dropdown = document.getElementById("selectDept");
    for (var i = 0; i < artwork.length; ++i) {
        departments.add(artwork[i].department[0].name);
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
    var results = artwork.filter(entry => entry.department[0].name == choice);
    
    while (p.hasChildNodes()) {
        p.removeChild(p.firstChild);
    }
    
    //needs formatting work and organized display of all data
    for (var i = 0; i < results.length; ++i){
        n = document.createElement("IMG");
        n.src = "images/" + results[i].accession_number + "_reduced.jpg";
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