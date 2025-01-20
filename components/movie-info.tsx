import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export async function getMovieInfo(id:string) {
    console.log("getMovieInfo");
    // 이거 오류남 ㄹㅇ 조심하셈
    // 와;; 이건 몰랐네 백틱으로 써야함 이거 때문에 시간날림 ㄹㅇ
    //const response = await fetch('${API_URL}/${id}');
    console.log(`Fetcting movies : ${Date.now()}`)
    //await new Promise((reslove) => setTimeout(reslove, 5000))
    //throw new Error("something is broken")
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id} : {id : string}){
    console.log("MovieInfo");
    const movieInfo = await getMovieInfo(id);
    //return <h6>{JSON.stringify(movieInfo)}</h6>
    return <div className={styles.container}>
        <img className={styles.poster} src={movieInfo.poster_path}></img>
        <div className={styles.info}>
            <h1 className={styles.title}>{movieInfo.title}</h1>
            <h3>{movieInfo.vote_average}</h3>
            <p>{movieInfo.overview}</p>
            <a href={movieInfo.homepage} target={"_blank"}>Home</a>
        </div>
    </div>
}