import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
    // Cannot have multiple parent level components here
    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                // Added key={monster.id} because console wants me to add it
                <Card monster={monster} key={monster.id} />
            );
        })}
    </div>
);

export default CardList;
