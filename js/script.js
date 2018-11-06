/******************************************
Treehouse Techdegree:
Karl-Magnus Thorsnes
FSJS project 2 - List Filter and Pagination
******************************************/

// Variable that counts the beginning number of students
let numberOfStudents = document.getElementsByClassName('student-item').length;
// Maximum number of students per page
let maxStudentsPerPage = 10;
// Getting the initial list of students
let showStudent = document.getElementsByClassName('student-item');

// Function for showing the correct list of students per page
let showPage = (list, pageNumber) => {
    min = pageNumber * maxStudentsPerPage - maxStudentsPerPage;
    max = pageNumber * maxStudentsPerPage - 1;
    for (i = 0; i < list.length; i++)
        if (
            (i >= min) && (i <= max)
        ) {
            list[i].style.display = "block";
        } else {
            list[i].style.display = "none";
        }
};

// Function for creating and appending the pagination
let appendPageLinks = (list) => {
    // removes pagination if it already exists
    let removePagination = document.getElementsByClassName("pagination");
    while (removePagination.length > 0) removePagination[0].remove();
    // calculates the initial number of pages to be created
    let totalPages = Math.ceil(numberOfStudents / maxStudentsPerPage);
    // Selects the existing div, creates new div, and declares class, it and appends it to the existing one
    let pageDiv = document.getElementsByClassName("page")[0];
    let newDiv = document.createElement("div");
    newDiv.className = "pagination";
    pageDiv.appendChild(newDiv);
    // creates new unordered list element and appends it to the newly created div
    let newUl = document.createElement("ul");
    newDiv.appendChild(newUl);

    // Loop for creating li-elements and and a tags for pagination. Appends To the new unordered list
    for (i = 0; i < totalPages; i++) {
        let newLi = document.createElement("li");
        let newA = document.createElement("a");
        newUl.appendChild(newLi);
        newLi.appendChild(newA);
        // Gives text content to the pagination 
        newA.innerHTML += i + 1;
        // Selects all a tags 
        let links = document.querySelectorAll("a");
        // Adds click function that on click each link first removes active classes
        links[i].addEventListener("click", function () {
            for (i = 0; i < totalPages; i++) {
                let links = document.querySelectorAll("a");
                links[i].classList.remove("active");
            }
            // then adds active class to the link/button which just got clicked, then sets currentPage to equal that page
            this.classList.add("active");
            currentPage = (document.getElementsByClassName('active')[0].innerHTML);
            console.log("You are on page " + currentPage, "Total number of students" + list.length);
            // calls the showPage function and use the argument passed in, in the showPage function together with currentpage
            showPage(list, currentPage);
        });
    };
};

// Function for creating and adding searching functionality
let searchField = () => {
    // Creates search button and field, declares ID and class accoring to CSS which place and styles it. 
    let searchDiv = document.createElement("div");
    searchDiv.className = "student-search";
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
    // Creates search functionality // Code inspiration from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list
    // Adds functionality for search button
    document.getElementById("btnid").addEventListener("click", function () {
        // Removes error message if present
        let removeErrorMessage = document.getElementsByClassName("error-message");
        while (removeErrorMessage.length > 0) removeErrorMessage[0].remove();
        // Select the element where the search term is input
        input = document.getElementById("Input");
        // Set all search value to uppercase
        filter = input.value.toLocaleUpperCase();
        // Selects the unordered list
        ul = document.getElementsByClassName("student-list")[0];
        // Selects the list element within the unordered list
        li = ul.getElementsByTagName("li");
        // Creates empty array for storing student if they match search term.
        inputArray = [];
        // loops over all list elements
        for (i = 0; i < li.length; i++) {
            
            a = li[i].getElementsByTagName("h3")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) >= 0) {
                inputArray.push(li[i]);
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
        let totalPages = Math.ceil(numberOfStudents / maxStudentsPerPage);
        console.log("the number of persons found:" + numberOfStudents, totalPages);
        appendPageLinks(inputArray);
        showPage(inputArray, 1);
    });
};

// Running funtion for showing the first 10 students when page loads
showPage(showStudent, 1);
// Runs appenPageLinks for creating pagination
appendPageLinks(showStudent);
// Runs searcField function creating search functionality
searchField();   


