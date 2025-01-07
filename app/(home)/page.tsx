export const metadata = {
    title : "Home",
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    console.log("im fetching")
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            <h1>Hello NextJs</h1> <br/>
            {JSON.stringify(movies)}
        </div>);
}

// Next Js 는 url를 작성할 필요가 없음
// 폴더 위치 자체가 위치를 의미한다.
// 현재 app 위치가 

//() 괄호로 이름을 지어주면 Url에 영향을 주지 않는다