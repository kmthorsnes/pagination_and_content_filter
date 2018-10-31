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
            showStudent[i].style.display = 'block';
        } else {
            showStudent[i].style.display = 'none';
        }

};

// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = (StudentsPerPage) => {
    // removes pagination if it already exists
    document.getElementsByClassName("pagination").remove;
    let pageDiv = document.getElementsByClassName("page")[0];
    let newDiv = document.createElement("div");
    newDiv.className = "pagination";
    pageDiv.appendChild(newDiv);
    let pageUl = document.getElementsByName("ul");
    let newUl = document.createElement("ul");
    newDiv.appendChild(newUl);
    
    // loop for creating Li and a tags for pagination
    for (i = 0; i < totalPages; i++) {
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
            console.log(this);
            this.classList.add("active");
            showPage(showStudent, this);            
        });
    };
    // console.log(pageDiv, newDiv);
};
// Runs appenPageLinks for creating pagination
appendPageLinks();
// Runs showPage function and starts on first page
showPage(StudentsPerPage, 2);

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here