const Image = ({data : {name,imageURL}}) => {

    return (<div style={{textAlign:"center"}}>
        <a href={imageURL}  className="img-container">
            <img src={imageURL} alt={name} />
        </a >
            <h6>{name}</h6>
            </div>
    )
}

export default Image
