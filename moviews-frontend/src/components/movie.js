class Movie {

    constructor(movieJSON) {
      this.id = movieJSON.id
      this.title = movieJSON.title
      this.image = movieJSON.image
      this.description = movieJSON.description
      this.reviews = movieJSON.reviews
    }
  
    renderMovieBlock() {
      const moviesContainer = document.getElementById('movies-content')
  
        const movieBlock = document.createElement('div')
        movieBlock.className = "movie-container"
        moviesContainer.appendChild(movieBlock)
  
          const reviewButton = document.createElement("BUTTON")
          reviewButton.setAttribute("id", `review-button-${this.id}`)
          reviewButton.setAttribute("onclick", "openForm()")
          reviewButton.innerHTML = "Add A Review"
          movieBlock.appendChild(reviewButton)
  
              reviewButton.addEventListener('click', this.getAndFormatNewReviewForm.bind(this))
  
          const deleteButton = document.createElement("BUTTON")
          deleteButton.setAttribute("id", `delete-button-${this.id}`)
          deleteButton.innerHTML = "Delete Movie"
          movieBlock.appendChild(deleteButton)
      
            deleteButton.addEventListener('click', () => {
              movieBlock.remove()
              this.deleteMovie(`${this.id}`)
            })
  
  
          const image = document.createElement('img')
          image.setAttribute("class", "image")
          image.src = this.image
          movieBlock.appendChild(image)
  
          const movieInfo = document.createElement('div')
          movieInfo.className = "movie-info"
          movieBlock.appendChild(movieInfo)
  
            const title = document.createElement('h1')
            title.setAttribute("class", 'movie-title')
            title.innerHTML = this.title
            movieInfo.appendChild(title)
  
            const description = document.createElement('h2')
            description.setAttribute("class", 'movie-description')
            description.innerHTML = `<b>Synopsis:</b> ${this.description}`
            movieInfo.appendChild(description)
  
            const reviewInfo = document.createElement('div')
            reviewInfo.className = "review-info"
            movieBlock.appendChild(reviewInfo)
  
            const reviewHeader = document.createElement('h4')
            reviewHeader.setAttribute("class", 'review-header')
            reviewHeader.innerHTML = 'Movie Thoughts:'
            reviewInfo.appendChild(reviewHeader)
  
            const reviews = document.createElement('div')
            reviews.setAttribute("id", `review-${this.id}`)
            reviewInfo.appendChild(reviews)
            reviews.innerHTML = this.reviews.map(review => this.reviewBody(review)).join('')
  
    }
  
    reviewBody(review){
      return `<p>${review.body}</p>`
    }
  
    deleteMovie(id){
      return fetch('http://localhost:3000/movies' + '/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        }
      })
    }
  
    getAndFormatNewReviewForm(event){
      event.preventDefault();
      const newReviewForm = document.getElementById('new-review-form') 
      const submitButton = document.createElement("button") 
      submitButton.innerHTML = "Add"
      submitButton.id = "review-submit"
      submitButton.type = "submit"
      const buttonDiv = document.getElementById("buttons")
      buttonDiv.appendChild(submitButton)
      submitButton.addEventListener('click', this.submitReviewInputs.bind(this))
    }
  
    submitReviewInputs(event){
      event.preventDefault();
      const buttonDiv = document.getElementById("buttons")
      const submitButton = document.getElementById("review-submit")
      const form = document.getElementById('new-review-form')
      const newReviewBody = document.getElementById('new-review-body')
      const reviewBox = document.getElementById(`review-${this.id}`)
      const pDiv = document.createElement('p')
      reviewBox.appendChild(pDiv)
  
      const reviewAddition = {
          movie_id: this.id ,
          body: newReviewBody.value,
      };
      return fetch('http://localhost:3000/reviews', {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify(reviewAddition)
      })
      .then(res => res.json())
        .then(review => {
  
        pDiv.innerHTML - review.body
        newReviewBody.value = ' '
        buttonDiv.removeChild(submitButton)
        closeForm()
      })
    }
  
  }