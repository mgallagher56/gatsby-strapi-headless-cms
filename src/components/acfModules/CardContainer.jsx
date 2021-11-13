import React, { Component } from 'react';
import Glider from '../Glider';
import ModuleParser from '../ModuleParser';
export default class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.glider = React.createRef();
        this.cards = this.props.module.cards;
        this.cardType = this.props.module.cardType.length ? this.props.module.cardType : 'herocard';
    }

    componentDidMount() {
        new Glider(this.glider.current, {
            slidesToShow: 8,
            slidesToScroll: 1,
            draggable: true,
            dots: '.dots',
            arrows: '.arrows'
        })
    }

    render() {
        if (null !== this.cards) {
            if ('longcard' !== this.cardType) {
                return (
                    <section className={'card-container'}>
                        <div className={'row justify-content-center'}>
                            <div ref={this.glider} className="glider draggable">
                                <ModuleParser moduleData={this.cards} moduleName={this.cardType} />
                            </div>
                        </div>
                        <div role="tablist" className="dots"></div>
                    </section>
                )
            } else {
                return (<section className={'container'}>
                    <div className={'row'}>
                        <ModuleParser moduleData={this.cards} moduleName={this.cardType} />
                    </div>
                </section>
                )
            }
        } else {
            return (
                <section className={'card-container container'}>
                    <h3>Add cards to card container in wordpress</h3>
                </section>
            )
        }
    }
}
