import './card.styles.css'

const Card = ({ monster: { id, name, email }}) => { // This is another way of destructuring
    // Removed the key here because I already have one in the card-list
    return (
        <div className='card-container'>
            <img 
            className='mons-img' 
            alt={`monster ${name}`} 
            src={`https://robohash.org/${id}?set=set2`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;