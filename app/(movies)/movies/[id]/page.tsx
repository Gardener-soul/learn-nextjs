import MovieInfos, {getMovies} from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";
import {Suspense} from "react";

interface IParams{
  params: {id: string};
}

export async function generateMetadata({params:{id}}:IParams) {
  const movie = await getMovies(id)

  return {
    title: movie.title,
  }
}

export default async function MovieDetail({
params
}: {
  params: Promise<{ id: string }>;
}) {
  const {id} = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Infos</h1>}>
        <MovieInfos id={id}/>
      </Suspense>
      <Suspense fallback={<h1>Loading Video Infos</h1>}>
        <MovieVideos id={id}/>
      </Suspense>
    </div>
  );
}
