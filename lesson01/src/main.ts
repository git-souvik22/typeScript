interface MovieDetails {
    readonly name: string,
    ratings: number,
    printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
    genra: string,
}

const movie1: MovieGenra = {
    name: "Animal",
    ratings: 8.9,
    genra: "Action",
    printMovieInfo: (name: string, price: number, ratings: number) => {
        return `Movie Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    }
};

console.log(movie1.printMovieInfo("Animal", 500, 8.8));