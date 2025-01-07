
// export default async function MoviesDetail({ params, searchParams }) {
//     const { id } = await params;
//     console.log('params:', { id });
//     console.log('searchParams:', await searchParams);
//     return <h1>Movie {id}</h1> ;
//     }

export default async function MoviesDetail({ params } : { params: { id: string } }) {
    const { id } = await params;
    console.log('params:', { id });
    return <h1>Movie : {id}</h1>;
    }