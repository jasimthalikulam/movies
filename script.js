const API_KEY = 'api_key=2fefbec1fa9d82f1f9bf7411445be50a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const searchURL = BASE_URL +'/search/movie?'+API_KEY;

const card = document.getElementById('card');
const srcbar= document.getElementById('srcbar')
const search = document.getElementById('search')

fetch(API_URL)
.then(res=>res.json())
.then(data=>{
    show(data.results)
})
function show(dat)
{ 
    card.innerHTML = ``;
    dat.forEach(poster=>
        {
            const {title,poster_path} = poster
            const mov = document.createElement('div');
            mov.classList.add('poster');
            mov.innerHTML=
            `
            <div class = "shadow-lg  bg-white rounded w-60">
            <div class="flex justify-center overflow-hidden"> 
              <img class=" border border-gray-300 w-full relative " src="${IMG_URL+poster_path}" alt="movie poster" />
              <p class="absolute flex pt-64 text-white w-40 justify-center text-2xl">${title}</p>
           </div>
            `
            card.appendChild(mov);
        })
}
srcbar.addEventListener('submit',(e)=>{
    e.preventDefault();
    const txt = search.value;
    SRC_URL = searchURL+'&query='+txt
        fetch(SRC_URL)
        .then(res=>res.json())
        .then(data=>{
            show(data.results)
        })
    
})