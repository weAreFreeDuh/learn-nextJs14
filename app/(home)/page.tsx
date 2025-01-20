import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title : "Home",
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    console.log("im fetching"); 
    //await new Promise((reslove) => setTimeout(reslove, 5000))
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            <h1>Hello NextJs</h1> <br/>
            {movies.map(movie => 
                // <div key={movie.id}>
                //     <img src={movie.poster_path} alt={movie.title}/>
                //     <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                // </div>
                <Movie
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                />
            )}
        </div>
        );
}

// Next Js 는 url를 작성할 필요가 없음
// 폴더 위치 자체가 위치를 의미한다.
// 현재 app 위치가 

//() 괄호로 이름을 지어주면 Url에 영향을 주지 않는다