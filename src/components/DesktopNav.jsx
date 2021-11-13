
import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import logo from '../assets/images/logo.png';
import { useStaticQuery, graphql } from "gatsby"

const DesktopNav = () => {
    const navData = useStaticQuery(graphql`
    query GET_NAV {
        allWpMenuItem {
          totalCount
          edges {
            node {
              label
              url
            }
          }
        }
      }
      
    `)

    let navOutput = (data) => {
        return <>
            { data.allWpMenuItem.edges.map((node, index) => {
                if (node.node.url === '/home/') {
                    let url = '/';
                    return <React.Fragment key={index.toString()}>
                        <li className={'mr-3'}>
                            <AniLink
                                paintDrip
                                duration={1}
                                color='mediumspringgreen'
                                to={url}
                                className=' nav-logo'>
                                <img src={logo} alt={'Logo'} width={100} height={39}></img>
                            </AniLink>
                        </li>
                    </React.Fragment>
                } else {
                    return <React.Fragment key={index.toString()}>
                        <li >
                            <AniLink
                                paintDrip
                                duration={1}
                                color='mediumspringgreen'
                                to={node.node.url}
                                className='nav-animation'>
                                {node.node.label}
                            </AniLink>
                        </li>
                    </React.Fragment>
                }
            })}
        </>
    }


    return (
        <nav className={'container nav-desktop'}>
            <ul className='navbar-nav mr-auto navbar-desktop d-none d-md-flex flex-row justify-content-around'>
                {navOutput(navData)}
            </ul>
        </nav>
    )
}

export default DesktopNav
