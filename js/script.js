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

// addEventListener('DOMContentLoaded', () => {
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
      const startIndex = (page * itemsPerPage) - itemsPerPage;
      const endIndex = page * itemsPerPage;
      console.log(endIndex)
   //loop over the student list, print 10 student according the index position
     for(let i = 0; i < list.length; i++){
        if( i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
        } else {
           list[i].style.display = 'none';
        }
    
     }
  
   }
   showPage(1, studentList); 

   /*** 
      Create the `appendPageLinks function` to generate, append, and add 
      functionality to the pagination buttons.
   ***/
  function appendPageLinks(list){
     const studentList = document.querySelector('.student-list')
     const div = document.createElement('DIV');
     div.className = 'pagination';
     const ul = document.createElement('UL');
     const li = document.createElement('LI');
     const a = document.createElement('A');
     a.setAttribute('href', '#');
     a.textContent = '1';

     li.appendChild(a);
     ul.appendChild(li);
     div.appendChild(ul);

   for (let i = 0; i < list.length % itemsPerPage; i++) {
      
   }
console.log(div);
console.log(studentList.parentElement)
    
     
  }

  appendPageLinks('');
/*
  <!-- pagination HTML to create dynamically -->
  <div class="pagination">
    <ul>
      <li>
        <a class="active" href="#">1</a>
      </li>
       <li>
        <a href="#">2</a>
      </li>
       <li>
        <a href="#">3</a>
      </li>
       <li>
        <a href="#">4</a>
      </li>
       <li>
        <a href="#">5</a>
      </li>
    </ul>
  </div>
  <!-- end pagination -->
*/



   // Remember to delete the comments that came with this file, and replace them with your own code comments.

// });