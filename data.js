var s_array = [];

function addStudents(){
    
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var score = parseInt(document.getElementById("score").value);


    let dataList = document.getElementById("students");
    
    var listItem = document.createElement("tr");
        // listItem.classList.add("td");
        
        var s_id = document.createElement("td");
        // id.classList.add("col-sm");
        s_id.innerText =  id;

        var s_name = document.createElement("td");
        // name.classList.add("col-sm");
        s_name.innerText =  name;

        var s_score = document.createElement("td");
        // score.classList.add("col-sm");
        s_score.innerText =  score;

        dataList.appendChild(listItem);

        listItem.appendChild(s_id);
        listItem.appendChild(s_name);
        listItem.appendChild(s_score);
        
        s_array.push({
            id:"",
            name:"",
            score: score
        })
}



// document.write("<h3>JSON</h3>");
// document.write("<pre class='alert alert-secondary'>"); // 1) Bootstrap class
// document.write(JSON.stringify(students, undefined, 2));
// document.write("</pre>");
// document.write("<br/>");
// var names = [];

// students.forEach(student => {
//     names.push(student.name);
// });

// document.writeln("Students are:" + names);

// document.write("<pre>");
// document.writeln(`Average: ${calculateAverage()}`);
// document.write("</pre>");

function calculateAverage(){

    var average = 0;
    s_array.forEach(student => {
        average = average + student.score;
    });
    average = average / s_array.length;

    return average.toFixed(2);
}

// function loadDataGrid() {

//     var i = 0;
//     let dataList = document.getElementById("dataList");
    
//     while (i < students.length)
//     {
//         var listItem = document.createElement("tr");
//         // listItem.classList.add("td");
        
//         var id = document.createElement("td");
//         // id.classList.add("col-sm");
//         id.innerText =  students[i].id;

//         var name = document.createElement("td");
//         // name.classList.add("col-sm");
//         name.innerText =  students[i].name;

//         var score = document.createElement("td");
//         // score.classList.add("col-sm");
//         score.innerText =  students[i].score;

//         dataList.appendChild(listItem);

//         listItem.appendChild(id);
//         listItem.appendChild(name);
//         listItem.appendChild(score);

//         i = i + 1; // Alternatively, use i++;

//         // Other ways:
//         // i += 2;
//         // i += 3;
//     }
// }

function displayAverage()
{
    var resultSection = document.getElementById("resultSection");
    var paragraph = document.createElement("p");
    paragraph.classList.add("badge"); // 2) Bootstrap classes
    paragraph.classList.add("badge-info");

    paragraph.innerText = "Average: " + calculateAverage();

    resultSection.appendChild(paragraph);
}

function myReplacer(name, val) {
    if (typeof val === 'string') {
        return val.toString().toUpperCase();  
     } else {
        return val; // return as is
    }
};

// Old-way of loading data (ol). No longer used
function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < s_array.length)
    {
        var listItem = document.createElement("li");
        
        console.log(s_array[i]);
        listItem.innerText = s_array[i].name;

        dataList.appendChild(listItem);
        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}


document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event);
});

