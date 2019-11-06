/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



// grab all the the student list in the HTML DOM

addEventListener('load', () => {
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
      // console.log('student list: ' + studentList.length);
      // console.log(startIndex);
      // console.log(endIndex);
   }
   
   showPage(1, studentList); 

   /*** 
      Create the `appendPageLinks function` to generate, append, and add 
      functionality to the pagination buttons.
   ***/
  function appendPageLinks(list){
     const page = document.querySelector('.page');
     const div = document.createElement('DIV');
     div.className = 'pagination';
     page.appendChild(div);

     const ul = document.createElement('UL');
     div.appendChild(ul);

     let pageNumber = Math.ceil(list.length / itemsPerPage),
         ii = 1;
      while (ii <= pageNumber) {
         let li = document.createElement('LI');
         ul.appendChild(li);
   
         let a = document.createElement('A');
         a.setAttribute('href', '#');
         a.textContent = ii;
         li.appendChild(a);
         ii++;
      }
      //select all a elements
      const links = document.querySelector('ul');
      
      
      // console.log(links.firstElementChild);
      //remove active class
      
         // add event listeners to each link
      ul.addEventListener('click', (e) => {
         let targetLink = e.target;
         let pageIndex = parseInt(targetLink.innerText);

         showPage(pageIndex, studentList);

         for (let iii = 0; iii < links.length; iii++){
            let link = links[iii];
            // add active class to first page
            link.classList.remove('active');
   
            if (link.innerHTML === '1'){
               link.classList.add('active');
            }
         }

       
         console.log(targetLink);
         if (targetLink.tagName === 'A' && targetLink.classList !== 'active'){
            targetLink.classList.add('active');
         } else {
            targetLink.classList.remove('active')
         }
      });
      

  }

  

  appendPageLinks(studentList);
    
   // Remember to delete the comments that came with this file, and replace them with your own code comments.

});