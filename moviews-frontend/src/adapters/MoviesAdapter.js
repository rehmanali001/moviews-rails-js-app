class MoviesAdapter{
    constructor() {
      this.baseUrl = 'https://moviews-app.herokuapp.com/'
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