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

console.log(totalPages, numItems, StudentsPerPage);

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

$("#hide").click(function(){
    $(".student-item").hide();
});


$("#show").click(function(){
    $(".student-item").show();
});


$(".student-item").hide();

// Shows only the first 10 students.
// $('.student-item:lt(10)').show();
$(".student-item").slice(0,StudentsPerPage).show();


// $('.student-list').not(':visible').hide();

$('.student-item').addClass("after");


// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here



// $("#hide").click(function(){
//     $(".student-list").hide();
// });
// $("#show").click(function(){
//     $(".student-list").show();
// });


