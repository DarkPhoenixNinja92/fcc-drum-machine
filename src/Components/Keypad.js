import DrumKey from "./DrumKey";
import {SoundBank} from '../Utilities/SoundBank';

const Keypad = () => {

    return(
        <div className="keypad">
            {SoundBank.map((sound) => {
                return (
                    <DrumKey audio={sound}/>
                )
            })}
        </div>
    )
}

export default Keypad;