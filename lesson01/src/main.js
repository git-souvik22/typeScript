var movie1 = {
    name: "Animal",
    ratings: 8.9,
    genra: "Action",
    printMovieInfo: function (name, price, ratings) {
        return "Movie Name: ".concat(name, ", Price: ").concat(price, ", Ratings: ").concat(ratings);
    }
};
console.log(movie1.printMovieInfo("Animal", 500, 8.8));
