//If value is passed from other page, remove "#" from URL and call getMedia()
window.addEventListener('load', (event) => {
  let searchPassID = window.location.hash.slice(1);
  getMedia(searchPassID);
});

function getMedia(searchID){
  let loader= document.getElementById('loader');
  let resultHead= document.getElementById('result-head');
  let tDetParent= document.getElementById('Tdetailsparent');
  let desc1= document.getElementById('description1');
  let desc2= document.getElementById('description2');
  let descPic= document.getElementById('description-pic');
  loader.classList.remove("d-none"); //to show loader
  axios.get('https://www.omdbapi.com/?apikey=45ad3714&i='+searchID) //to get results from OMDB API
    .then( (response)=>{
      let media= response.data;
      console.log(media);

      console.log(media.Language);
      if(media.Language.indexOf(",")>=0){
        media.Language=media.Language.substr(0,media.Language.indexOf(','));
      }

      let output=`<div class="row" id="Tdetailsparent">
                    <div class="col-md-4 col-sm-12">
                      <ul class="Tdetails">
                        <li class="border-bottom border-secondary">Category <span class="float-right text-white-50"> Cate1</span></li>
                        <li class="border-bottom border-secondary">Type <span class="float-right text-white-50"> ${media.Type}</span></li>
                        <li class="border-bottom border-secondary">Language <span class="float-right text-white-50"> ${media.Language}</span></li>
                        <li class="border-bottom border-secondary">Total size <span class="float-right text-white-50"> xx MB</span></li>
                        <li class="border-bottom border-secondary">Uploaded by <span class="float-right text-white-50"> Adam</span></li>
                      </ul>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <ul class="Tdetails">
                        <li class="border-bottom border-secondary">Downloads <span class="float-right text-white-50"> dnld1</span></li>
                        <li class="border-bottom border-secondary">Last checked <span class="float-right text-white-50"> chkd1</span></li>
                        <li class="border-bottom border-secondary">Last downloaded <span class="float-right text-white-50"> Latdl1</span></li>
                        <li class="border-bottom border-secondary">Seeders <span class="text-success float-right text-white-50"> seed1</span></li>
                        <li class="border-bottom border-secondary">Leechers <span class="text-danger float-right text-white-50"> leech1</span></li>
                      </ul>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <ul class="Tdwnld float-right">
                        <li class="py-2"><a class="btn btn-success btn-sm text-white btn-dwnld" href="#" role="button"> <i class="fas fa-magnet mr-2"></i>MAGNET DOWNLOAD</a></li>
                        <li><a class="btn btn-danger btn-sm text-white btn-dwnld" href="#" role="button"> <i class="fas fa-angle-double-down mr-2"></i>TORRENT DOWNLOAD</a></li>
                      </ul>
                    </div>`;
      loader.classList.add("d-none"); //to hide loader
      resultHead.innerHTML=media.Title;
      tDetParent.innerHTML=output;
      desc1.innerHTML=media.Plot;
      descPic.style.backgroundImage = `url('${media.Poster}')`;
      desc2.innerHTML=`${media.Title} <br/> ${media.Year} <br/> ${media.Rated} <br/> ${media.Released} <br/> ${media.Genre} <br/> ${media.Language} <br/> ${media.Country} <br/> ${media.Metascore}`;
    })
    .catch( (err)=>{
      loader.classList.add("d-none"); //to hide loader
      resultHead.innerHTML=`File Not Found`;
      console.log(err);
    })
}
