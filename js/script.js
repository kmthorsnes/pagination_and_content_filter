/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

// Variable that counts number of student
let numItems = $('.student-details').length;
// Maximum number of students per page
const StudentsPerPage = 10;
// Variable that calculates the numbers of pagination.  
let totalPages = Math.ceil(numItems / StudentsPerPage);

let showStudent = document.getElementsByClassName('student-item');
let numberofstudent = document.getElementsByClassName('student-item').length;

console.log(totalPages, numItems, StudentsPerPage, showStudent, showStudent.length, numberofstudent);

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
const appendPageLinks = () => {
    // determine how many pages are needed for the list by dividing the total number of list items by the max number of items per page
    // create a div, give it the “pagination” class, and append it to the .page div
    let newDiv = document.createElement('div');
    newDiv.className = "pagination";
    document.getElementById(".page")(page);
    // add a ul to the “pagination” div
    // for every page
    // add li and a tags with the page number text
    // add an event listener to each a tag, or add an event listener to the pagination div, and use event delegation to target the a tags to define what happens they are clicked
    // calls the showPage function to display the appropriate page
    // loop over pagination links to remove active class from all
    // add the active class to the link that was just clicked, otherwise known as the
    event.target
};

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here




// $("#hide").click(function(){
//     $(".student-item").hide();
// });

// $("#show").click(function(){
//     $(".student-item").show();
// });

// // Hides all students
// $(".student-item").hide();

// // Shows only the first 10 students. // should maybe input number of students? 
// $('.student-item:lt(10)').show();

// Adds class for pagination


// $('.student-list').not(':visible').hide();
//$('.student-item').addClass("after");





// $("#hide").click(function(){
//     $(".student-list").hide();
// });
// $("#show").click(function(){
//     $(".student-list").show();
// });

