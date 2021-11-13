import React from "react";
import Wysiwyg1Col from './acfModules/Wysiwyg1Col';
import Wysiwyg2Col from './acfModules/Wysiwyg2Col';
import Wysiwyg3Col from './acfModules/Wysiwyg3Col';
import Wysiwyg4Col from './acfModules/Wysiwyg4Col';
import WysiwygMedia from './acfModules/WysiwygMedia';
import CardContainer from './acfModules/CardContainer';
import Hero from './acfModules/Hero';
import HeroCard from "./cards/HeroCard";
import LongCard from "./cards/LongCard";

const Components = {
        wysiwyg1col    : Wysiwyg1Col,
        wysiwyg2col    : Wysiwyg2Col,
        wysiwyg3col    : Wysiwyg3Col,
        wysiwyg4col    : Wysiwyg4Col,
        wysiwygmedia   : WysiwygMedia,
        cardcontainer  : CardContainer,
        hero           : Hero,
        herocard       : HeroCard,
        longcard       : LongCard
};

const ComponentBuilder = ( module, moduleName ) => {
    if ( moduleName !== '' ) {
        // component does exist
        if (typeof Components[moduleName] !== "undefined") {
            return React.createElement(Components[moduleName], {
                module: module
            });
        }
        // component doesn't exist yet
        return React.createElement(
            () => <div>The component {moduleName} has not been created yet.</div>,
            { key: module._uid }
        );
    } else {
         // component doesn't exist yet
         return React.createElement(
            () => <div>Add modules in Wordpress to view them here</div>
        );
    }
}

export default ComponentBuilder
