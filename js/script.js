/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// grab all the the student list in the HTML DOM
addEventListener('load', () => {
   const studentList = document.querySelectorAll('.student-item');
   const itemsPerPage = 10;

   // create function that hides all element of the student list items
   function showPage(page,list) {
      const startIndex = (page * itemsPerPage) - itemsPerPage;
      const endIndex = page * itemsPerPage;
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

   
  function appendPageLinks(list){
     const page = document.querySelector('.page');
     const div = document.createElement('DIV');
     div.className = 'pagination';
     page.appendChild(div);
     const ul = document.createElement('UL');
     div.appendChild(ul);

     let pageNumber = Math.ceil(list.length / itemsPerPage),
         j = 1;

      while (j <= pageNumber) {
         let li = document.createElement('LI');
         ul.appendChild(li);
   
         let a = document.createElement('A');
         a.setAttribute('href', '#');
         a.textContent = j;
         li.appendChild(a);
         j++;
      }
      //select all a elements
      const links = document.querySelector('ul');
      const aLinks = document.getElementsByTagName('a');
      //remove active class
      function removeClass() {
         for (let k = 0; k < aLinks.length; k++){
         let link = aLinks[k];
         // add active class to first page
         link.classList.remove('active');
         }
      }

      document.querySelector('a').classList.add('active');
         // add event listeners to each link
      ul.addEventListener('click', (e) => {
         let targetLink = e.target;
         let pageIndex = parseInt(targetLink.innerText);
         removeClass();
         targetLink.classList.add('active');
         showPage(pageIndex, studentList); 
      });
  }
  appendPageLinks(studentList);
});