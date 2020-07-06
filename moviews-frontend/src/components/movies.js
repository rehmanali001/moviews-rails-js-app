class Movies {
    constructor() {
      this.movies = []
      this.adapter = new MoviesAdapter()
      this.initBindingsAndEventListeners()
      this.fetchAndLoadMovies()
    }
  
    initBindingsAndEventListeners() {
      this.newMovieForm = document.getElementById('new-movie-form')
      this.newMovieTitle = document.getElementById('new-movie-title')
      this.newMovieDescription = document.getElementById('new-movie-description')
      this.newMovieImage = document.getElementById('new-movie-image')
      this.newMovieForm.addEventListener('submit', this.createMovie.bind(this))
    }
  
    createMovie(e) {
      e.preventDefault(); 
      const titleValue = this.newMovieTitle.value;
      const imageValue = this.newMovieImage.value
      const descriptionValue = this.newMovieDescription.value
  
      this.adapter.createMovie(titleValue, imageValue, descriptionValue)
        .then(movie => {
        const newMovie = new Movie(movie)
        this.movies.push(newMovie)
        this.newMovieTitle.value = ' '
        this.newMovieImage.value = ' '
        this.newMovieDescription.value = ' '
        newMovie.renderMovieBlock()
        })
    }
  
    fetchAndLoadMovies() {
      this.adapter
        .getMovies()
        .then(movies => {
        movies.forEach(movie => this.movies.push(new Movie(movie)))
        })
        .then(() => {
        this.renderMovies()
      })
    }
  
    renderMovies() {
    this.movies.map(movie => movie.renderMovieBlock())
    }
  
  }