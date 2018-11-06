/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/// Add variables that store DOM elements you will need to reference and/or manipulate

// Variable that counts beginning number of students
let numberOfStudents = document.getElementsByClassName('student-item').length;
// Maximum number of students per page
let studentsPerPage = 10;
// Variable that calculates the numbers of pagination.  
//let totalPages = Math.ceil(numberOfStudents / studentsPerPage);
// Getting all student info
let showStudent = document.getElementsByClassName('student-item');

// Create a function that hides all students except the 10 we want to show
let showPage = (list, pageNumber) => {
    min = pageNumber * studentsPerPage - studentsPerPage;
    max = pageNumber * studentsPerPage - 1;
    for (i = 0; i < list.length; i++)
        if (
            (i >= min) && (i <= max)
        ) {
            list[i].style.display = "block";
        } else {
            list[i].style.display = "none";
        }
};
showPage(showStudent, 1);

// Creates and appends the pagination links
let appendPageLinks = (list) => {
    // removes pagination if it already exists
    let totalPages = Math.ceil(numberOfStudents / studentsPerPage);
    let removePagination = document.getElementsByClassName("pagination");
    while (removePagination.length > 0) removePagination[0].remove();
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
            console.log("You are on page " + currentPage, "Total number of students" + list.length);
            showPage(list, currentPage);
            });
    };
    
};
appendPageLinks(showStudent);



let searchField = () => {
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
        // Removes error element
        let removeErrorMessage = document.getElementsByClassName("error-message");
        while (removeErrorMessage.length > 0) removeErrorMessage[0].remove();
        input = document.getElementById("Input");
        filter = input.value.toLocaleUpperCase();
        ul = document.getElementsByClassName("student-list")[0];
        li = ul.getElementsByTagName("li");
        inputArray = []
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("h3")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) >= 0) {
                inputArray.push(input.value);
                showStudent[i].style.display = "block";
                

            } else {
                showStudent[i].style.display = "none";
                console.log("no persons found");
            }
        
        };
        console.log(inputArray);



        numberOfStudents = inputArray.length;
        if (numberOfStudents == 0) {
            let noResultsDiv = document.createElement("div");
            noResultsDiv.className = "error-message"
            let noResultsDivPlacer = document.getElementsByClassName("student-list")[0];
            let noResultParagraph = document.createElement("p");
            noResultParagraph.id = "errorId"
            noResultsDivPlacer.appendChild(noResultsDiv);
            noResultsDiv.appendChild(noResultParagraph);
            noResultParagraph.innerHTML = "No student found";
        };
        let totalPages = Math.ceil(numberOfStudents / studentsPerPage);
        console.log("the number of persons found:" + numberOfStudents, totalPages);
        appendPageLinks(inputArray);
        showPage(inputArray, currentPage);
    });
};
searchField();

// Runs appenPageLinks for creating pagination
//appendPageLinks(totalPages);
// Runs showPage function and starts on first page
// showPage(studentsPerPage, 1);
// searchField();   
