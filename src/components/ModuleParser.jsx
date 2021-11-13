import React, { Component } from 'react';
import ComponentBuilder from './ComponentBuilder'

class ModuleParser extends Component {

    static defaultProps = {
        moduleData: [],
        moduleName: ''
    }

    render() {
        return <>
            {
                this.props.moduleData.map((module, index) => {
                    let moduleName = module.fieldGroupName.includes('Layouts') ?
                        module.fieldGroupName.substr('Page_Pagebuilder_Layouts_'.length).toLowerCase() : this.props.moduleName;
                    return <React.Fragment key={index.toString()}>
                        {ComponentBuilder(module, moduleName)}
                        <React.Fragment />
                    </React.Fragment>
                })
            }
        </>
    }
}

export default ModuleParser;
