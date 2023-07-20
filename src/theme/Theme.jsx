import Modal from "../components/Modal"
import { primaryColors, backgroundColors } from "./data"
import PrimaryColor from './PrimaryColor'
import BackgroundColor from './BackgroundColor'
import './theme.css'

const Theme = () => {
    return (
        <Modal className="theme__modal">
            <h3>Choose your theme!</h3>
            <small>Please select the background color you wish to change to.</small>
            <div className='theme__primary-colors'>
                {
                    primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className} />)
                }
            </div>
            <div className="theme__background-wrapper">
                <h5>Background Color</h5>
                <div className="theme__background-colors">
                    {
                        backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                    }
                </div>
            </div>
        </Modal>
    )
}

export default Theme