let pages = 1;

  document.querySelector('.btn_precedent').addEventListener('click', function(){
    if (pages > 1) {
      pages --
      chargerFilms()
    }
  })

  document.querySelector('.btn_prochain').addEventListener('click', function(){
    if (pages < 1000) {
      pages ++
      chargerFilms()
    }
  })


function chargerFilms () {

  let films = new XMLHttpRequest

    films.addEventListener('load', ()=>{
    let data = JSON.parse(films.responseText)
    //console.log(data.results);

    let peliculas = ""
    data.results.forEach(pelicula => {
      //console.log(pelicula.title)

      peliculas += `
          <div class="film">
            <img  class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"/>
            <h3 class = " title " >${pelicula.title}</h3>
          </div>
          
        `

    });

    document.querySelector(".container").innerHTML = peliculas;

    
  })

  // para obtener solo la pelicula con el ide 550
  //films.open('GET', 'https://api.themoviedb.org/3/movie/550?api_key=3b8c00b8ac683276327acf4d9aea5b34')
  
  // Para obtener las peliculas mas populares cambiamos 550 por popular ( https://developers.themoviedb.org/3/movies/get-popular-movies )
  films.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=3b8c00b8ac683276327acf4d9aea5b34&page=${pages}`)
  
  films.send();
  

}
chargerFilms () 


