# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


m1 = Movie.create(title: "Star Wars", description: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.", image: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg")
m2 = Movie.create(title: "Pulp Fiction", description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.", image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg")
m3 = Movie.create(title: "Jaws", description: "When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.", image: "https://upload.wikimedia.org/wikipedia/en/e/eb/JAWS_Movie_poster.jpg")
m4 = Movie.create(title: "Jurrasic Park", description: "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.", image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg")


r1 = Review.create(body: "Great Movie, a must see sci-fi!", reviewer: "Ray", movie_id: 1)
r2 = Review.create(body: "This is great thriller, definitely enjoyed it!", reviewer: "John", movie_id: 4)
r3 = Review.create(body: "So good!", reviewer: "Matt", movie_id: 3)
r4 = Review.create(body: "I loved this movie!", reviewer: "Emily", movie_id: 2)
r5 = Review.create(body: "Very awesome adventure film!", reviewer: "Maddy", movie_id: 4)
r6 = Review.create(body: "A beautiful space opera film!", reviewer: "George", movie_id: 1)