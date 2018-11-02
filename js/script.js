/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/// Add variables that store DOM elements you will need to reference and/or manipulate

// Variable that counts number of students
const numberOfStudents = document.getElementsByClassName('student-item').length;
// Maximum number of students per page
const studentsPerPage = 10;
// Variable that calculates the numbers of pagination.  
const totalPages = Math.ceil(numberOfStudents / studentsPerPage);
// Getting all student info
const showStudent = document.getElementsByClassName('student-item');

// Create a function that hides all students except the 10 we want to show

const showPage = (list, pageNumber) => {
    for (i = 0; i < numberOfStudents; i++) 
        if (
            (i >=
                (
                    (list * pageNumber) -
                    (list)
                )
            )
            &&
            (i <
                (list * pageNumber)
            )
            ) {
            showStudent[i].style.display = "block";
        } else {
            showStudent[i].style.display = "none";
        }

};

// Creates and appends the pagination links
const appendPageLinks = () => {
    // removes pagination if it already exists
    document.getElementsByClassName("pagination").remove;
    // Selects the existing page div
    let pageDiv = document.getElementsByClassName("page")[0];
    // Creates new the new div, and names it and appends it to the existing one
    let newDiv = document.createElement("div");
    newDiv.className = "pagination";
    pageDiv.appendChild(newDiv);
    // creates new list and appends it to the newly created div
    let newUl = document.createElement("ul");
    newDiv.appendChild(newUl);
    
    // loop for creating Li and a tags for pagination
    for (i = 0; i < totalPages; i++) {
        // creates li and a tags for all pages
        let newLi = document.createElement("li");
        let newA = document.createElement("a");
        newUl.appendChild(newLi);
        newLi.appendChild(newA);
        newA.innerHTML += i + 1; 
        let links = document.querySelectorAll("a"); 
        links[i].addEventListener("click", function () {
            for (i = 0; i < totalPages; i++) {
                let links = document.querySelectorAll("a"); 
                links[i].classList.remove("active");
            }
            this.classList.add("active");
            currentPage = (document.getElementsByClassName('active')[0].innerHTML);
            showPage(studentsPerPage, currentPage);
            console.log(currentPage);
        });
    };
};
// Runs appenPageLinks for creating pagination
appendPageLinks();
// Runs showPage function and starts on first page
showPage(studentsPerPage, 1);

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here

// 
const searchField = () => {
    // Creates search button and field, place and styles it. 
    let searchDiv = document.createElement("div");
    searchDiv.className = "student-search"
    let searchDivPlacer = document.getElementsByClassName("page-header cf")[0];
    searchDivPlacer.appendChild(searchDiv);
    let searchField = document.createElement("input");
    searchField.setAttribute("type", "text");
    searchField.placeholder = "Search for students..."
    searchField.title = "Type in a name";
    searchDiv.appendChild(searchField);

    searchField.id = "Input";
    var btn = document.createElement("button");
    btn.className = "student-search button";
    btn.id = "btnid"
    let btnTxt = document.createTextNode("Search"); 
    document.body.appendChild(btn);
    btn.appendChild(btnTxt); 
    searchDiv.appendChild(btn);
    searchDiv.style.cssFloat = "right";

    // Creates search functionality // Code base from:  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list
        
    document.getElementById("btnid").addEventListener("click", function () {
        input = document.getElementById("Input");
        filter = input.value.toLocaleUpperCase();
        ul = document.getElementsByClassName("student-list")[0];
        li = ul.getElementsByTagName("li");
        inputArray = []
                for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("h3")[0];

            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                showStudent[i].style.display = "block";
                inputArray.push(input.value);
                
            } else {
                showStudent[i].style.display = "none";
            }
        }
        console.log(input.value);
        showPage(input.value);
        });
};



// Runs SearchField 
searchField();