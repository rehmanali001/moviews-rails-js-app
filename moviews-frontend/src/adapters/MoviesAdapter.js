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