import { API_URL } from "../app/(home)/page";
import styels from "../styles/movie-videos.module.css"

async function getVideos(id:string) {
    console.log(`Fetcting movies : ${Date.now()}`)
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id} : {id : string}){
    const videos = await getVideos(id);
    //return <h6>{JSON.stringify(videos)}</h6>
    return <div className={styels.container}>
        {videos.map(video => <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} 
        title={video.name}/>)}
    </div>
}