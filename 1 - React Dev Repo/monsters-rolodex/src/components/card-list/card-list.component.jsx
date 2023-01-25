import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        // Cannot have multiple parent level components here
        return (
            <div className='card-list'>
                {monsters.map((monster) => {

                    return (
                        // Added key={monster.id} because console wants me to add it
                        <Card monster={monster} key={monster.id} />
                    );
                })}
            </div>
        );
    }
}

export default CardList;
