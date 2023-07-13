import React from 'react'
import data from './data'
import './header.css'

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile">
                    <img src="" alt="" />
                </div>
                <h3>Austin Adams</h3>
                <p>Some text will go here later once I think of something better to write</p>
                <div className="header__cta">
                    <a href="#contact">Reach Out To Me</a>
                    <a href="#portfolio">Projects</a>
                </div>
                <div className="header__socials">
                    {
                        data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Header