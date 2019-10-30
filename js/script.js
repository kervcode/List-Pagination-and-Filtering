/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
// grab all the the student list in the HTML DOM

addEventListener('DOMContentLoaded', () => {
   const studentList = document.querySelectorAll('.student-item');
   const itemsPerPage = 10;

   /*** 
      Create the `showPage` function to hide all of the items in the 
      list except for the ten you want to show.

      Pro Tips: 
      - Keep in mind that with a list of 54 students, the last page 
         will only display four.
      - Remember that the first student has an index of 0.
      - Remember that a function `parameter` goes in the parens when 
         you initially define the function, and it acts as a variable 
         or a placeholder to represent the actual function `argument` 
         that will be passed into the parens later when you call or 
         "invoke" the function 
   ***/

   // create function that hides all element of the student list items
   function showPage(page,list) {
      //
      
      const startIndex = (page * itemsPerPage) - itemsPerPage;
      console.log(startIndex)
      // end index
      const endIndex = page * itemsPerPage;
      console.log(endIndex)
      /*
      Loop over items in the list parameter
      -- Inside the loop, display any list item with an 
      -- index that is greater than or equal to the start index variable and less than the end index variable.
      */
     for(let i = 0; i < list.length; i++){
      
        if( list[i] >= startIndex && list[i] < endIndex){
         console.log(list[i]);  
         list[i].style.display = '';
        } else {
           list[i].style.display = 'none';
        }
      
      // console.log(list[i])
     }
  
   }
   showPage(2, studentList);

   /*** 
      Create the `appendPageLinks function` to generate, append, and add 
      functionality to the pagination buttons.
   ***/





   // Remember to delete the comments that came with this file, and replace them with your own code comments.

});