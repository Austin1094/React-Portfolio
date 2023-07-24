import AboutImage from '/Users/austinadams/bootcamp/react-portfolio/src/assets/bean.jpg'
import './about.css'
import data from './data'
import Card from '../../components/Card'

const About = () => {
    return (
        <section id="about" data-aos="fade-in">
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
                        Hello, and welcome to my portfolio! My name is Austin Adams, and I am a full-stack web developer, and a soon-to-be graduate of Rutgers Coding Bootcamp. When I'm not expanding my coding knowledge, you can often find me going to concerts or attending a sporting event. I'm looking forward to hearing back from you! You can contact me via email or LinkedIn at the bottom!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About