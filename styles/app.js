const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
       sectBtn[i].addEventListener('click', function(){
            const currentBtn = document.querySelector('.active-btn');
            if (currentBtn) currentBtn.classList.remove('active-btn');
            this.classList.add('active-btn');
                   })
    }

    //Sections Active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            //e.target.classlist.add('active')

            //ide other sections
            sections.forEach((section) =>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');


        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        document.body.classList.toggle('light-mode');
    })
}


PageTransitions();