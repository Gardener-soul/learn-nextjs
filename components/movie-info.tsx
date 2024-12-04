import {API_URL} from "../app/(home)/page";
import styles from "../styles/movie-info.module.css"

export async function getMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfos({id}: {id: string}) {
  const movie = await getMovies(id);

  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster}/>
      <div className={styles.info}>
        <h2 className={styles.title}>{movie.title}</h2>
        <h3>* {movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}> 링크 -> </a>
      </div>
    </div>
  );
}