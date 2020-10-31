let searchForm = document.getElementById('searchForm');
let searchBtn = document.getElementById('searchBtn');

searchForm.addEventListener('submit', filter);
searchBtn.addEventListener('click', filter);
function filter(e){
  e.preventDefault(); //Preventing it from submitting/refreshing page
  let searchText = document.getElementById('searchText').value;
  window.location.href = './search-results.html#' + searchText; //Changing URL i.e. indirectly passing value to search=results.html
}
