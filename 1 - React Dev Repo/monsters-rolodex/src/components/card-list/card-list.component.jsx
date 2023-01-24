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
                        <Card monster={monster} />
                    );
                })}
            </div>
        );
    }
}

export default CardList;
