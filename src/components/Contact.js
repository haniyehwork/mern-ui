import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Contact = ({cards}) => {
    return(
        <div>
            {
                cards.map(card => {
                    return(
                        <div key={card.id} className='ui raised very padded text container segment' style={{scrollMarginTop: '80px'}}>
                            <Link to={`/${card.title}`} className='ui header'>{card.title}</Link>
                            <p>{card.body}</p>
                        </div>
                    )
                })
            }
        
        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Contact);