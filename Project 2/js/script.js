const lists = Array.from( document.querySelectorAll(`li`));


const profile_list = document.getElementById('contact-list');
const pagination =  document.getElementById('page-nav');

 let current_page =1;
 let profiles =10;

 function DisplayProfile(items, wrapper, profile_per_page, page){
    wrapper.innerHTML = "";
    page--;

    let start = profile_per_page*page;
    let end = start + profile_per_page;
    let profileItems =items.slice(start, end);
   
    for(let i = start; i< profileItems.length; i++){
        let profile = profileItems[i];
        let profile_element = document.createElement(`div`);
        profile_element.classList.add(`profile`);
        const item = `
                    <li>
                    <img src="${profileItems.img_url} >
                    <h3>${profileItems.title}</h3>
                    
                    <span>${profileItems.email}</span>
                    </li>`;
        profile_element.innerHTML = profile;
       
        wrapper.appendChild(profile_element);
        

    }
 }

    function setUpPages(items, wrapper, pages){
        wrapper.innerHTML = "";
        let countPage = Math.ceil(items.length/pages);
        for(let i =1; i < countPage +1; i++){
            let btn = PaginationFunc(i);
            wrapper.appendChild(btn);
        }
    }

    function PaginationFunc(page){
        let button = document.createElement('button');
        button.innerHTML = page;

        if (current_page == page) button.classList.add('active');
        return button;
    }

 DisplayProfile(lists, profile_list, profiles,current_page);
 setUpPages(lists, pagination, profiles);
