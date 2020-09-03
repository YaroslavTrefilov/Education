async function getResponse()  {
    let response = await fetch('https://random-data-api.com/api/users/random_user?size=30')
    let content =  await response.json()

    let list = document.querySelector('.posts')


    let key;
    
    for (key in content) {
        list.innerHTML += `
            <li class="post">
                <span> ${content[key].first_name + ' ' + content[key].last_name } </span>
                <img src="${content[key].avatar}" />
                <span> ${content[key].email} </span>
            </li>
        `
        
    }

}

getResponse()


