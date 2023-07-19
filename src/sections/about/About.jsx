import React from 'react'
import AboutImage from '/Users/austinadams/bootcamp/react-portfolio/src/assets/bean.jpg'
import './about.css'
import data from './data'
import Card from '../../components/Card'

const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="Image of Austin Adams" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h3>{item.title}</h3>
                                    <small>{item.description}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        More code will be put here later once I think what I want to type.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About