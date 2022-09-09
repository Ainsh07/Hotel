let searchBtn = document.getElementById("search-btn");
let placeInp = document.getElementById("search-input");
console.log('placeName', placeInp);
searchBtn.addEventListener("click", ()=> {
    let placeName = placeInp.value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '23c3877b72msh7fbd8995e46cbedp155a90jsn9f6f2ac20b08',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
    
    fetch('https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040', options)
        .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));


        .then(resp => {
            console.log(resp);

            document.getElementById("count").innerText = `${hotelImages.length} + place found `
                let data1 = "";
                resp.hotelImages.map( values => {
                    data1 += `
                            <div class="hotel1">
                                <img src="${values.baseUrl.replace('{size}', values.sizes[0])}" >
                                <p> ${values.imageId}</p>
                            </div> `
                    console.log("DATA: ", data1);
            
               
                // use id here
                document.getElementsById("hotel-list").innerHTML= data1;
            });
    })

    .catch(err => console.error(err)) 
    

     
});

    // ----------hamburger js ------------
const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(n =>
        n.addEventListener("click", () =>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));