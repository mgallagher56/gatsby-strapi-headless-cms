import React, { Component } from 'react';
import Button from '../Button';

export default class CTA extends Component {
    constructor( props ) {
        super( props );
    }

    static defaultProps = {
        title: 'Title',
        body: 'Body ',
        buttonText: 'Get in touch'
    }

    render() {
        return <section className={'container'}>
            <div className={'cta-module card row mx-auto my-5 text-center col-12 p-0 flex-md-row text-md-left'}>
                <div className={'cta-content p-2 col-12 col-md-6 offset-md-1'}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.body}</p>
                </div>
                <div className={'button-container d-flex p-3 mx-auto justify-content-around col-12 col-md-5 flex-md-row my-md-auto'}>
                    <Button text={this.props.buttonText} />
                </div>
            </div>
        </section>
    }
}
