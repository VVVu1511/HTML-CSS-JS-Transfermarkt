//set border for daddy search box

const names = [
    "Ethan",
    "Liam",
    "Alexander",
    "Mateo",
    "Sebastian",
    "James",
    "Benjamin",
    "Caleb",
    "Daniel",
    "Lucas",
    "Olivia",
    "Emma",
    "Sophia",
    "Isabella",
    "Mia",
    "Ava",
    "Amelia",
    "Grace",
    "Chloe",
    "Harper",
    "Ronaldo",
    "Messi",
    "Lamine Yamal",
    "Kevin",
    "Foden",
    "Mohamed Salah"
];
  
function changeContentOfMostViewedPlayer(){
    left = document.querySelector('.spotlight-section-lists-advertise--advertiseviewed---view .left-right .left');
    right = document.querySelector('.spotlight-section-lists-advertise--advertiseviewed---view .left-right .right');
    inforOfViewedSection = document.querySelectorAll('.spotlight-section-lists-advertise--advertiseviewed---view .infor');

    let active = 0;
    let preactive = 0;

    left.addEventListener('click',()=>{
        preactive = active;
        if(active > 0) active = active - 1;
        else active = inforOfViewedSection.length - 1;
       
        
        inforOfViewedSection[preactive].style.display = 'none';
        inforOfViewedSection[active].style.display = 'flex';
    });

    right.addEventListener('click',()=>{
        preactive = active;
        
        if(active < inforOfViewedSection.length - 1) active = active + 1;
        else active = 0;
        
        inforOfViewedSection[preactive].style.display = 'none';
        inforOfViewedSection[active].style.display = 'flex';
    });

}

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

function supportChangingContent(listOfDots,listOfSpotlightSection,preactive,active){
    listOfSpotlightSection[preactive].style.display = "none";
    listOfDots[preactive].style.color = "white";
    listOfSpotlightSection[active].style.display = "block";
    listOfDots[active].style.color = "gray";
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

    for(let i = 0; i < listOfLeftArrows.length; i++){
        listOfLeftArrows[i].addEventListener('click',()=>{
            preactive = active;
            if(active > 0) active = active - 1;
            else active = listOfDots.length - 1;

            supportChangingContent(listOfDots,listOfSpotlightSection,preactive,active);
        });
    }

    for(let j = 0; j < listOfRightArrows.length; j++){
        listOfRightArrows[j].addEventListener('click',()=>{
            preactive = active;
            if(active < listOfDots.length - 1) active = active + 1;
            else active = 0;

            supportChangingContent(listOfDots,listOfSpotlightSection,preactive,active);
        });
    }

    for(let j = 0; j < listOfDots.length; j++){
        listOfDots[j].addEventListener('click',()=>{
            preactive = active;
            active = j;
            supportChangingContent(listOfDots,listOfSpotlightSection,preactive,active);
        })
    }

}

function changeColorOfBars(){
    all_header_items = document.querySelectorAll('.content-header-lists-listitem');
    all_header_items_bars = document.querySelectorAll('.content-header-lists-listitem-bar');

    for(let i = all_header_items.length - 1; i > 0; i--){
        all_header_items[i].addEventListener('mouseover',()=>{
            all_header_items[0].style.color = 'white';
            all_header_items_bars[0].style.display = 'none';
            isItemHover = true;
        });

        all_header_items[i].addEventListener('mouseout',()=>{
            all_header_items[0].style.color = '#62A3F0';
            all_header_items_bars[0].style.display = 'block';
        });
    }
}

function searchFootballersByName(){
    let search_box_text = document.querySelector('.content-header-searching-search-text');

    search_box_text.addEventListener('input',()=>{
        let input = search_box_text.value;
        let search_list = document.querySelector('.content-header-searching-search-output');
        
        let search_list_items = search_list.querySelectorAll("div");

        
        if(input.length > 0){
            for(let child of search_list_items){
                if(input != child.textContent.substring(0,input)){
                    search_list.removeChild(child);
                }
            }

            console.log(input);
            for(let i = 0; i < names.length; i++){
                if(input == names[i].substring(0,input.length)){
                    let new_nodes = document.createElement("div");
                    new_nodes.textContent = names[i];
                    search_list.appendChild(new_nodes);
                }
            }

            if(search_list.childNodes.length == 0) search_list.style.display = 'none';
            else search_list.style.display = 'block';
        }

        else{
            for(let child of search_list_items){
                search_list.removeChild(child);
            }
        }
    });
}

function rating(){
    let stars = document.querySelectorAll('.rating');

    
    for(let i = 0; i < stars.length; i++){
        stars[i].addEventListener('click',()=>{
            for(let j = 0; j < stars.length; j++){
                if(j >= 0 && j <= i){
                    if(!stars[j].classList.contains('rating-active')) stars[j].classList.add('rating-active');
                }
                else{
                    if(stars[j].classList.contains('rating-active')) stars[j].classList.remove('rating-active');
                }
            }
        });
    }
}

changeColorOfBars();
setBlueBorderForHeaderSearch();
changeContentOfSpotlight();
changeContentOfMostViewedPlayer();
searchFootballersByName();
rating();






