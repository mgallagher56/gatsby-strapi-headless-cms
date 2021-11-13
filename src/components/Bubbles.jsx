import React, { Component } from 'react';
import bubbleImg from '../assets/images/bubble.png';
import bubbleBlue from '../assets/images/bubble-blue.png';
import bubbleMint from '../assets/images/bubble-mint.png'
import bubbleOrange from '../assets/images/bubble-orange.png'
import bubblePink from '../assets/images/bubble-pink.png'
import bubbleYellow from '../assets/images/bubble-yellow.png'

export default class Bubbles extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
            {[...Array(this.props.multiplier).keys()].map(i => i + 1).map(
                () => ( <div>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubbleBlue } className={ 'bubble' } alt={ 'bubble' }/>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubbleMint } className={ 'bubble' } alt={ 'bubble' }/>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubbleOrange } className={ 'bubble' } alt={ 'bubble' }/>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubblePink } className={ 'bubble' } alt={ 'bubble' }/>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubbleYellow } className={ 'bubble' } alt={ 'bubble'} />
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                    </div>
                )
            )}
            </div>
        )
    }
}