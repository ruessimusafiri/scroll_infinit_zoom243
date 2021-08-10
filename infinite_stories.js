const container =document.querySelector('.st_panel');

let limit=4;
let pageCount=1;
let postCount=1;

const getPost=async()=>{
    const response =await fetch(`https://apibookin.zoom243.com/stories.php?_limit=${limit}$_page=${pageCount}`);
    
    const data=await response.json();

    data.map((curElm,index)=>{
        const htmlData=`
        
         
        <div class="circle">
        <a      href="stories.php">
        <img src="https://apibookin.zoom243.com/${curElm.img}" alt="" class="img_story"/>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
           xml:space="preserve">  
          <circle cx="50" cy="50" r="40" />
        </svg>
        </a>
      </div>
      
        `;
        // container.insertAdjacentHTML('beforebegin',htmlData);
        container.insertAdjacentHTML('beforeend',htmlData);
        // alert('hello');
    })
}




getPost();


const showData=()=>{

    setTimeout(()=>{
            pageCount++;
            getPost();
    },300)

}


for (let i = 0; i < 1000; i++) {
    // pageCount++;
    getPost();
  }

  

 
$(function() {
    $('#stories').scroll( function() {
        var $width = $('#stories').outerWidth()
        var $scrollWidth = $('#stories')[0].scrollWidth; 
        var $scrollLeft = $('#stories').scrollLeft();

        if ($scrollWidth - $width === $scrollLeft){
            alert('right end');
             showData();
        }
        if ($scrollLeft===0){
            showData();
            // alert('left end');
        }
    });
});
// window.addEventListener('scroll',()=>{
//     const {scrollHeight,scrollTop,ClientHeight}=document.documentElement;
//     if(scrollTop+ClientHeight >= scrollHeight){

//         showData();
//         alert('fin');
//     }
// })