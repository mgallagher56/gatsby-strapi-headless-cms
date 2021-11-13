import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { Component } from 'react';
import Button from '../Button';

export default class HeroCard extends Component {

    static defaultProps = {
        title: 'Title',
        subtitle: 'Subtitle',
        body: 'Body ',
    }

    render() {
        let image = null !== this.props.module.image ? getImage(this.props.module.image.localFile) : '';
        let altTag = null !== this.props.module.image ? this.props.module.image.altText : '';

        return <>
            <div className={'card hero-card my-3 mx-3 col-8 col-md-4'}>
                <div className={'card-media'}>
                    <GatsbyImage image={image} alt={altTag} className={'h-100 w-100'} />
                </div>
                <div className={'card-content p-2'}>
                    <a href={this.props.module.url}>
                        <h3>{this.props.module.title}</h3>
                        <p className={'p-large'}>{this.props.module.subtitle}</p>
                        <div className='mb-3' dangerouslySetInnerHTML={{__html: this.props.module.content }}></div>
                        <Button type={'small'} href={this.props.module.url} text={this.props.module.buttonText} />
                    </a>
                </div>
            </div>
        </>
    }
}
