import { useEffect } from 'react'
import data from './data'
import HeaderImage from '/Users/austinadams/bootcamp/react-portfolio/src/assets/bean.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile" data-aos="fade-in">
                    <img src={HeaderImage} alt="Me in Chicago" />
                </div>
                <h3 data-aos="fade-up">Austin Adams</h3>
                <p data-aos="fade-up">Full Stack Web Developer</p>
                <div className="header__cta" data-aos="fade-up">
                    <a href="#contact" className='btn primary'>Reach Out To Me</a>
                    <a href="#portfolio" className='btn light'>Projects</a>
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