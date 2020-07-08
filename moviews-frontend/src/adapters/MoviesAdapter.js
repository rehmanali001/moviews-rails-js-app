let newM = document.getElementById("movies-content")
let newClass = document.getElementsByClassName("movie-title")
let newC  = document.getElementsByClassName('movie-container')
let newDiv = document.createElement('div')

class MoviesAdapter{
    constructor() {
      this.baseUrl = 'http://localhost:3000/movies'
    }
  
    getMovies() {
      return fetch(this.baseUrl)
      .then(res => res.json())
    }
  
    createMovie(titleValue, imageValue, descriptionValue) {
      const movie = {
        title: titleValue,
        image: imageValue,
        description: descriptionValue,
  
      };
      return fetch(this.baseUrl, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify(movie)
      })
      .then(res => (res.json()))
      .catch(error => console.log("Error: " + error))
    }
  }

  const sortButton = document.getElementById("sort")
sortButton.addEventListener("click", () => {
  sort();
})


function sort() {
  fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(json => {
      json.sort(function(a, b) {
        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      newM.innerHTML = ""
      json.forEach(el => {
        const moviesContainer = document.getElementById('movies-content')

        const movieBlock = document.createElement('div')
        movieBlock.className = "movie-container"
        moviesContainer.appendChild(movieBlock)

        const image = document.createElement('img')
        image.setAttribute("class", "image")
        image.src = el.image
        movieBlock.appendChild(image)

        const movieInfo = document.createElement('div')
        movieInfo.className = "movie-info"
        movieBlock.appendChild(movieInfo)

          const title = document.createElement('h1')
          title.setAttribute("class", 'movie-title')
          title.innerHTML = el.title
          movieInfo.appendChild(title)

          const description = document.createElement('h2')
          description.setAttribute("class", 'movie-description')
          description.innerHTML = `<b>Synopsis:</b> ${el.description}`
          movieInfo.appendChild(description)

          const reviewInfo = document.createElement('div')
          reviewInfo.className = "review-info"
          movieBlock.appendChild(reviewInfo)

          const reviewHeader = document.createElement('h4')
          reviewHeader.setAttribute("class", 'review-header')
          reviewHeader.innerHTML = 'Movie Thoughts:'
          reviewInfo.appendChild(reviewHeader)
      });
    })
}


