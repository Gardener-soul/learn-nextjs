import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

export const metadata = {
  title : "Home",
};

async function getMovies(){
  return fetch(API_URL).then(response => response.json());
}

export default async function HomePage(){
  const movies = await getMovies();

  return (
    <div>
      {movies.map(movie =>
      <li key={movie.id}>
        <Link href={`movies/${movie.id}`}>{movie.title}</Link>
      </li>)}
    </div>
  );
}