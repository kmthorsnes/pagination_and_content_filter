/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

// Variable that counts number of student
const numberOfStudents = document.getElementsByClassName('student-item').length;
// Maximum number of students per page
const StudentsPerPage = 10;
// Variable that calculates the numbers of pagination.  
const totalPages = Math.ceil(numberOfStudents / StudentsPerPage);
// Getting all student
const showStudent = document.getElementsByClassName('student-item');
console.log(numberOfStudents, StudentsPerPage, totalPages);


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

const showPage = (StudentsPerPage, page) => {
    for (i = 0; i < numberOfStudents; i++)
        if (
            (i >=
                (
                    (StudentsPerPage * page) -
                    (StudentsPerPage)
                )
            )
            &&
            (i <
                (StudentsPerPage * page)
            )
            ) {
            showStudent[i].style.display = 'block';
        } else {
            showStudent[i].style.display = 'none';
        }

};

// Runs showPage function and starts on first page
showPage(StudentsPerPage, 2);

// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = (StudentsPerPage) => {
    // removes pagination if it already exists:
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

    for (i = 0; i < totalPages; i++) {
        // creates li and a tags for all pages
        let newLi = document.createElement("li");
        let newA = document.createElement("a");
        newUl.appendChild(newLi);
        newLi.appendChild(newA);
        // adds pagination "+1" for zero indexing
        newA.innerHTML += i + 1;
        // selects pagination links and removes the active class from all
        let links = document.querySelectorAll("a");
        links[i].classList.remove('active');
        // adds eventlistener for all pagination links
        links[i].addEventListener("click", function () {
            event.target.classList.add("active");
            console.log(this);
        });
    };
    
};
appendPageLinks();

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here