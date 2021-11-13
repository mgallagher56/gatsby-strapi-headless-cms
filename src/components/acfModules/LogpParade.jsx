import React, { Component } from 'react';
import card_eg from '../../assets/images/gatsby-icon.png'


export default class LogoParade extends Component {

    render() {
        return <section className={'conatiner'}>
            <div className={'row'}>
                <div className={'col-12 d-flex flex-wrap justify-content-center'}>
                    <img className={'col-2'} src={card_eg} alt={''} />
                    <img className={'col-2'} src={card_eg} alt={''} />
                    <img className={'col-2'} src={card_eg} alt={''} />
                    <img className={'col-2'} src={card_eg} alt={''} />
                    <img className={'col-2'} src={card_eg} alt={''} />
                    <img className={'col-2'} src={card_eg} alt={''} />
                    <img className={'col-2'} src={card_eg} alt={''} />
                </div>
            </div>
        </section>
    }
}