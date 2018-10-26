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
// Variable for console.log showing all studentinfo
const showStudent = document.getElementsByClassName('student-item');

console.log(numberOfStudents, StudentsPerPage, totalPages /* showStudent */);

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

const showPage = (list, page) => {
    for (i = 0; i < showStudent.length; i++)
        if (i < StudentsPerPage){
            showStudent[i].style.display = 'block';
        } else {
            showStudent[i].style.display = 'none';
        }
};

// Runs showPage function
showPage();

// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = (list) => {
    const pageDiv = document.getElementsByClassName("page")[0];
    let newDiv = document.createElement("div");
    newDiv.className = "pagination";
    pageDiv.appendChild(newDiv);
    const pageUl = document.getElementsByName("ul");
    let newUl = document.createElement("ul");
    newDiv.appendChild(newUl);

    // for loop som lager sidevisningen.
    for (i = 0; i < totalPages; i++) {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        newUl.appendChild(newLi);
        newLi.appendChild(newA);
        newA.innerHTML += i+1;
    }
    document.querySelector("a").addEventListener("click", function () {
        //document.getElementById("demo").innerHTML = "Hello World";
    });

    

    console.log(pageDiv, newDiv);
};
appendPageLinks();

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here