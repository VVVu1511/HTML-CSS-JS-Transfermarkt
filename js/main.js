//set border for daddy search box

function setBlueBorderForHeaderSearch(){
    let text = document.querySelector('.content-header-searching-search-text');
    let search_box = document.querySelector('.content-header-searching-search');
    let msg_box = document.querySelector('.alert-message');

    text.addEventListener('focus',()=>{
        search_box.style.border = '3px solid #62A3F0';
    });

    text.addEventListener('blur',()=>{
        search_box.style.border = 'none';
        if(text.value != ''){
            msg_box.style.display = 'block';
            msg_box.textContent = "Hello, welcome to Manchester United " + text.value;

            setTimeout(()=>{
                msg_box.style.display = 'none';
            },3000);
        }
    })
}

function changeContentOfSpotlight(){
    let listOfDots = document.querySelectorAll('.spotlight-section-lists-advertise--list-dots .fa-solid');
    let listOfLeftArrows = document.querySelectorAll('.fa-angle-left');
    let listOfRightArrows = document.querySelectorAll('.fa-angle-right');
    let listOfSpotlightSection = document.querySelectorAll('.spotlight-section-lists-advertise--listitem');

    let preactive = -1;
    let active = -1;

    for(let i = 0; i < listOfDots.length; i++){
        if(listOfDots[i].style.color != "white"){
            active = i;
            break;
        }
    }

    preactive = active;


    for(let i = 0; i < listOfLeftArrows.length; i++){
        listOfLeftArrows[i].addEventListener('click',()=>{
            if(active > 0) active = active - 1;
        });
    }

    for(let j = 0; j < listOfRightArrows.length; j++){
        listOfRightArrows[j].addEventListener('click',()=>{
            if(active < listOfDots.length - 1) active = active + 1;
        });
    }

    if(preactive != -1){
        listOfSpotlightSection[preactive].style.display = 'none';
        listOfDots[preactive].style.color = 'white';
    }

    if(active != -1){
        listOfSpotlightSection[active].style.display = 'block';
        listOfDots[active].style.color = 'gray';
    }
}

setBlueBorderForHeaderSearch();
changeContentOfSpotlight();


