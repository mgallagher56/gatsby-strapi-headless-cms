import React from "react"

const Footer = () => (
    <footer className={'container'} style={{
        marginTop: `2rem`,
        }}>
        © {new Date().getFullYear()}
    </footer>
)

export default Footer