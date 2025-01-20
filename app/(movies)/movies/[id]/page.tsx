
// export default async function MoviesDetail({ params, searchParams }) {
//     const { id } = await params;
//     console.log('params:', { id });
//     console.log('searchParams:', await searchParams);
//     return <h1>Movie {id}</h1> ;
//     }

import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../../components/movie-info";
//import getMovieInfo from "../../../../components/movie-info";
//import MovieVideos from "../../../../components/movie-videos";
import exp from "constants";
import { log } from "console";
import MovieVideos from "../../../../components/movie-videos";

// import { API_URL } from "../../../(home)/page";

// async function getMovie(id:string) {
//     // 이거 오류남 ㄹㅇ 조심하셈
//     // 와;; 이건 몰랐네 백틱으로 써야함 이거 때문에 시간날림 ㄹㅇ
//     //const response = await fetch('${API_URL}/${id}');
//     console.log(`Fetcting movies : ${Date.now()}`)
//     await new Promise((reslove) => setTimeout(reslove, 5000))
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// async function getVideos(id:string) {
//     console.log(`Fetcting movies : ${Date.now()}`)
//     await new Promise((reslove) => setTimeout(reslove, 5000))
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// }
interface IParams {
    params : {id : string};
}

export async function generateMetadata({ params }:IParams) {
    const {id}  = await params;
    console.log("generateMetadata");
    console.log("id : "+id);
    const movieInfo = await getMovieInfo(id);
    console.log("movieInfo : " + movieInfo);
    return {
        title: movieInfo.title,
    }
}

export default async function MoviesDetail({ params }:IParams) {
    const { id } = await params;
    console.log('params:', { id });
    
    // Suspense는 각 묶음마다 로딩하는 동안 대신 보여줄 UI 설정함
    // Next js는 병렬로 처리하는게 확인
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
        < MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie info</h1>}>
        < MovieVideos id={id}/>
        </Suspense>
    </div>;
}