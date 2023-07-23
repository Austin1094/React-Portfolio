import data from './data'
import Scrollspy from 'react-scrollspy'
import Nav from './Nav'
import './floating-nav.css'

const FloatingNav = () => {
    return (
        <ul id='floating__nav'>
            <Scrollspy offset={-400} className='scrollspy' items={['header', 'about', 'projects', 'contact']} currentClassName="active">
                {
                    data.map(item => <Nav key={item.id} text={item} />)
                }
            </Scrollspy>
        </ul>
    )
}

export default FloatingNav