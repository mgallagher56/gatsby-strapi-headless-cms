import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { Component } from 'react';
import Button from '../Button';

export default class LongCard extends Component {

    static defaultProps = {
        title: 'Title',
        subtitle: 'Subtitle',
        body: 'Body ',
    }

    render() {
        let image = null !== this.props.module.image ? getImage(this.props.module.image.localFile) : '';
        let altTag = null !== this.props.module.image ? this.props.module.image.altText : '';

        return <div className={'card long-card row col-12 p-0 mb-3 mx-auto'}>
            <a href={this.props.module.url}>
                <div className={'card-media col-6 col-md-7 h-100 p-0'}>
                    <GatsbyImage image={image} alt={altTag} className={'h-100 w-100'} />
                </div>
                <div className={'card-content col-6 col-md-5 p-2'}>
                    <h3>{this.props.module.title}</h3>
                    <h4>{this.props.module.subtitle}</h4>
                    <div dangerouslySetInnerHTML={{ __html: this.props.module.content }}></div>
                    <Button type={'small'} href={this.props.module.url} text={this.props.module.buttonText} />
                </div>
            </a>
        </div>
    }
}