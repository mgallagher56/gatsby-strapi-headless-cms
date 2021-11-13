import React, { Component } from 'react';
import DesktopNav from './DesktopNav';
import { TimelineMax } from 'gsap';
import MobileNavItems from './MobileNav';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuToggle: false,
            navHeight: '',
            clickCount: 0,
        };
        this.nav = React.createRef();
        this.navBar = React.createRef();
        this.tl = new TimelineMax({ paused: true });
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();
        this.setState(prevState => ({
            menuToggle: !prevState.menuToggle,
        }));
        if (!this.state.menuToggle) {
            this.navAnimation.play();
            document.body.style.overflowY = 'hidden';
            document.getElementById('navbar-mobile').style.top = window.scrollY + 'px';
            // this.bubbleAnimation('play')

        } else {
            this.navAnimation.reverse(1);
            document.body.style.overflowY = 'visible';
            // this.bubbleAnimation('pause')
        }
    }

    componentDidMount() {
        this.setState(({
            navHeight: document.getElementById('nav-toggle').offsetHeight.toString() + 'px',
        }));

        let navItems = this.nav.current.querySelectorAll('.menu-item');
        this.listItems = [];
        let listLength = navItems.length;

        for (let i = 0; i < listLength; i++) {
            let tempList = navItems[i];
            let sublistLength = tempList.children.length;
            for (let j = 0; j < sublistLength; j++) {
                this.listItems.push(tempList.children[j]);
            }
        }

        this.navBackground = this.navBar.current.parentElement.nextSibling.children;
        this.navAnimation = this.tl.fromTo([this.navBackground, this.listItems],
            { filter: '' },
            {
                filter: 'blur(8px)',
                duration: .1
            }, 'blur')
            .fromTo(this.listItems,
                {
                    y: '100vh'
                },
                {
                    y: 0,
                    duration: .5,
                    ease: 'ease',
                    stagger: 0.1,
                }, 'blur')

            .fromTo(this.listItems,
                {
                    scale: .5,
                    filter: 'blur(8px)'
                },
                {
                    duration: .5,
                    scale: 1,
                    stagger: 0.10,
                    delay: .5,
                    filter: '',
                }, 'blur'
            );

        // let rand = (max, min) => {
        //     return Math.floor(Math.random() * max) + min
        // }

        // this.bubbleAnimation = (control) => {
        //     let timelineArray = [];
        //     setTimeout(() => {
        //         let bubbles = document.querySelectorAll('.bubble');
        //         Array.from(bubbles).map((bubble) => {
        //              timelineArray.push(new TimelineMax({ repeat: 0, delay: .5 }).fromTo(bubble,
        //                 {
        //                     x: rand(100, 0) + 'vw',
        //                     y: '130vh',
        //                     scale: '0.' + rand(9, 1),
        //                     zIndex: 100
        //                 },
        //                 {
        //                     x: rand(120, 100) + 'vw',
        //                     y: rand(75, -20) + 'vh',
        //                     scale: rand(3, 1) + '.' + rand(9, 0),
        //                     duration: rand(12, 7),
        //                     delay: rand(3, 0),
        //                     ease: Linear.easeNone,
        //                     stagger: 0.4,
        //                     display: 'none',
        //                     zIndex: 100
        //                 }, 'bubbles'
        //             ))
        //             return timelineArray;
        //         })
        //         switch (control) {
        //             case 'pause':
        //                 timelineArray.map((timeline) => {
        //                     return timeline.pause();
        //                 })
        //                 break;
        //             case 'play':
        //                 timelineArray.map((timeline) => {
        //                     return timeline.play();
        //                 })
        //                 break;
        //         }
        //     }, 300)
        // }
    }

    render() {
        return (
            <div ref={this.navBar}>
                <MobileNavItems 
                    menuToggle={this.state.menuToggle} 
                    nav={this.nav} 
                    handleClick={this.handleClick} 
                />
                <DesktopNav />
            </div>
        );
    }
}