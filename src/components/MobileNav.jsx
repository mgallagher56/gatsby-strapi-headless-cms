import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useStaticQuery, graphql } from "gatsby"
// import Bubbles from "./Bubbles";

const MobileNavItems = (props) => {
    const navData = useStaticQuery(graphql`
    query GET_MOBILE_N {
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
                        <li className={`menu-item ${node.node.label.toLowerCase()}`}>
                            <AniLink fade duration={1}
                                color='mediumspringgreen' to={url}
                                className='mobile-nav-link w-100 h-100'
                                onClick={props.handleClick}>
                                <p>{node.node.label}</p>
                            </AniLink>
                        </li>
                    </React.Fragment>
                } else {
                    return <React.Fragment key={index.toString()}>
                        <li className={`menu-item ${node.node.label.toLowerCase()}`}>
                            <AniLink fade duration={1}
                                color='mediumspringgreen' to={node.node.url}
                                className='mobile-nav-link w-100 h-100'
                                onClick={props.handleClick}>
                                <p>{node.node.label}</p>
                            </AniLink>
                        </li>
                    </React.Fragment>
                }
            })}
        </>
    }

    return (
        <>
            <nav className={`nav-mobile d-flex d-md-none position-absolute justify-content-center w-100 ${props.menuToggle ? 'open' : ''}`}>
                <button aria-label='mobile nav toggle' id={'nav-toggle'} className={'collapsible-nav d-md-none d-flex flex-column justify-content-center'} onClick={props.handleClick}>
                    <svg width="55" height="45" viewBox="0 0 100 100">
                        <path className={"menu-icon line1"} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className={"menu-icon line2"} d="M 20,50 H 80" />
                        <path className={"menu-icon line3"} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
                <ul id={'navbar-mobile'} ref={props.nav} className={'navbar-mobile flex-row flex-wrap w-100 h-100 position-absolute'}>
                    {navOutput(navData)}
                    {/* <Bubbles multiplier={10} /> */}
                </ul>
            </nav>
        </>
    )
}

export default MobileNavItems
