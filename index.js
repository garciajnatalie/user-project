//var hello = 'hello';

//at the end of a statement put a semicolon
//function run code when alerted by page?

//event of the page being fully loaded - wait for page to be fully loaded.
document.addEventListener('DOMContentLoaded', function() {

//all other code goes inside function
// use querySelector every time want to select something on the page
  var form = document.querySelector('form');
      //console.log(form); //anytime don't know what going to do console log it.
  form.addEventListener('submit', function(event) {
    //prevent the default functionality of this form
    event.preventDefault();
    console.log('form submitted');
  })

// try to select .first-name in variable

//first_name_input = snake case
//first-name-input = kebab case

//camel case = convention
// select first name input and last name input
  var firstNameInput = document.querySelector('.first-name');
  var lastNameInput = document.querySelector('.last-name');
  console.log(firstNameInput, lastNameInput);





     //alert('hello');
     //2 1 on the page. what this is doing is waiting for the page to be fully loaded until code runs document.addEventListener is important and we'll need to most projects
     //console.log(1);

});

//console.log(2);
