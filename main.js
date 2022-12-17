// buttons  Précedent et Prochain
let pages = 1;

  document.querySelector('.btn_precedent').addEventListener('click', function(){
    if (pages > 1) {
      pages --
      chargerFilms()
      numPage()
      
    }
  })
  
  document.querySelector('.btn_prochain').addEventListener('click', function(){
    if (pages < 1000) {
      pages ++
      chargerFilms()
      numPage()
    }
  })

  function numPage (){
    document.querySelector(".numPage").innerHTML = `Pag.  ${pages}`
  }

  numPage()


  // Function Charger Films

function chargerFilms () {                                      // Créer la fonction chargerFilms
  
  //  HttpRequest 
  
  // étape 1
  let films = new XMLHttpRequest                                //  Créer nouvelle requête Films
  
  // étape 2
  films.addEventListener('load', ()=>{                          // Event Load a Films
    let data = JSON.parse(films.responseText)                   //  data  ====> json
    //console.log(data.results);
    let peliculas = ""
    data.results.forEach(pelicula => {                          //  forEach pour parcourir l'objet
    //console.log(pelicula.title)
    
    // Pour traiter les images rendez-vous sur ( https://developers.themoviedb.org/3/movies/get-popular-movies ) => GETTING STARTED => images
      peliculas += `
        <div class="film">
          <img  class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"/>    
          <h3 class = " title " >${pelicula.title}</h3>
        </div>
      `
    });
    document.querySelector(".container").innerHTML = peliculas;   
  })

  // étape 3
  
  // Pour obtenir uniquement le film avec l'identifiant 550
  //films.open('GET', 'https://api.themoviedb.org/3/movie/550?api_key=3b8c00b8ac683276327acf4d9aea5b34')
  //Pour obtenir les films les plus populaires, nous changeons 550 pour populaire ( https://developers.themoviedb.org/3/movies/get-popular-movies )
  films.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=3b8c00b8ac683276327acf4d9aea5b34&page=${pages}`)
  
  // étape 4
  films.send();
}

chargerFilms ()             // Charger la fonction


