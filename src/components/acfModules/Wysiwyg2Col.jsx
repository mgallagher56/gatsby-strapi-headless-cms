import React, { Component } from 'react';

export default class Wysiwyg2Col extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-5',
            columnMargin: 'mb-3 mb-md-0'
        };
    }

    render() {
        return <section className={'wysiwyg2-col ' + this.state.margin}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'wysiwyg-content-1 col-12 col-md-6 ' + this.state.columnMargin} 
                    dangerouslySetInnerHTML={{__html: this.props.module.wysiwygContent1 }} />
                    <div className={'wysiwyg-content-2 col-12 col-md-6 ' + this.state.columnMargin} 
                    dangerouslySetInnerHTML={{__html: this.props.module.wysiwygContent2 }} />
                </div>
            </div>
        </section>
    }
}