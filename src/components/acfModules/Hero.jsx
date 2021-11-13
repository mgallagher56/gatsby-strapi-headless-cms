import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { Component } from 'react';

export default class Hero extends Component {


    render() {
        let image = null !== this.props.module.image ? getImage(this.props.module.image.localFile) : '';
        let altTag = null !== this.props.module.image ? this.props.module.image.altText : '';

        return <section className={'hero-module mb-5 mt-md-5'}>
            <div className={'row h-100 d-flex'}>
                <div className={'hero-content d-flex flex-column text-center justify-content-center align-items-center col-12 p-5 col-lg mx-auto'}
                    dangerouslySetInnerHTML={{ __html: this.props.module.wysiwyg }} />
                <div className={'hero-media d-flex col-12 col-lg overflow-hidden'}>
                    <GatsbyImage
                        className={'hero_image'}
                        image={image}
                        alt={altTag}
                    />
                </div>
            </div>
        </section>
    }
}
