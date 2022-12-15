
const Characters = ({name, 
    status, 
    species, 
    type, 
    gender, 
    image}) => {
    return (
        <div className={'Characters'}>
            <li>
                <a href="" target="_blank" rel="noreferrer">
                    <h4>{name}</h4>
                </a>
                <img src={image}></img>
                
            <span className = 'card-detail'>
                Status: {status}
                </span>
                <span className="card-detail">
                    Species {species}
                </span>
                <span className='card-details'>
                    Gender: {gender}
                </span>
            </li>
        </div>
    )
}

export default Characters