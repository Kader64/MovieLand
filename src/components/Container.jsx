import { useEffect, useState } from "react";
import ShowCard from "./ShowCard"
import defaultMovieIcon from "../assets/noMovie.png"

function Container({query, category}){
    const [shows, setShows] = useState()

    function loadData() {
        let url;
        if (category === "Movies") {
            if (query === "") {
                url = "https://api.tvmaze.com/shows";
                fetch(url)
                    .then(res => res.json())
                    .then(json => setShows(json))
            }
            else {
                url = "https://api.tvmaze.com/search/shows?q=" + query;
                fetch(url)
                    .then(res => res.json())
                    .then(json => {
                        let x = json.map(data => data.show)
                        setShows(x)
                    })
            }
        }
        else if (category === "People") {
            if (query === "") {
                url = "https://api.tvmaze.com/people";
                fetch(url)
                    .then(res => res.json())
                    .then(json => setShows(json))
            }
            else {
                url = "https://api.tvmaze.com/search/people?q=" + query;
                fetch(url)
                    .then(res => res.json())
                    .then(json => {
                        let x = json.map(data => data.person)
                        setShows(x)
                    })
            }
        }
    }

    useEffect(() => {
        loadData()
    }, [query, category])

    return (
        <div className="main">
            {
                shows && shows.length > 0?
                    shows.map((data, i) => {
                        if (i > 120) return;
                        if (data.image) {
                            return <ShowCard src={data.image.medium} name={data.name} url={data.url} />
                        }
                        return <ShowCard src={defaultMovieIcon} name={data.name} url={data.url} />
                    })

                    :

                    <div className="main-notfound">No matches found</div>
            }
        </div>
    )
}

export default Container