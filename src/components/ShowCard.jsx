function ShowCard(props) {
    return (
        <div className="movieCard">
            <a href={props.url}>
                <img src={props.src} />
                <div className="movieCard-title">{props.name}</div>
            </a>
        </div>
    )
}

export default ShowCard;