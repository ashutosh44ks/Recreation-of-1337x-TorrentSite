let searchForm = document.getElementById('searchForm');
let searchBtn = document.getElementById('searchBtn');

searchForm.addEventListener('submit', filter);
searchBtn.addEventListener('click', filter);
function filter(){
  let searchText = document.getElementById('searchText').value;
  window.location.hash = searchText; //append searchText to the URL
  getMedia(searchText);
}

//If value is passed from other page, remove "#" from URL and call getMedia()
window.addEventListener('load', (event) => {
  let searchPassText = window.location.hash.slice(1);
  getMedia(searchPassText);
});


function getMedia(searchText){
  let loader= document.getElementById('loader');
  let itemList= document.getElementById('item-list');
  let resultHead= document.getElementById('result-head');
  loader.classList.remove("d-none"); //to show loader
  axios.get('https://www.omdbapi.com/?apikey=45ad3714&s='+searchText) //to get results from OMDB API
    .then( (response)=>{
      let media= response.data.Search;
      let output="";
      console.log(media);
      media.forEach(item => {
          output+=`<div class="col bg-dark m-1 text-center p-2 output">
                      <a href="${'./file-template.html#'+ item.imdbID}">
                        <img class='py-1' src='${item.Poster}'>
                        <h5 class="text-white title">${item.Title.toUpperCase()}</h5>
                        <small class="text-warning">${item.Year+" "+item.Type.toUpperCase()}</small>
                      </a>
                    </div>`;
      });
      loader.classList.add("d-none"); //to hide loader
      resultHead.innerHTML=`Showing results for: ${decodeURI(searchText)}`; //to remove %20 (if any)
      itemList.innerHTML=output;
    })
    .catch( (err)=>{
      loader.classList.add("d-none"); //to hide loader
      resultHead.innerHTML=`0 results found for: ${decodeURI(searchText)}`; //to remove %20 (if any)
      itemList.innerHTML="";
      console.log(err);
    })
}
