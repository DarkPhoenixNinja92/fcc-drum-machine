import Keypad from "./Keypad";
import RenderDescription from "./RenderDescription";
import { SoundBank } from "../Utilities/SoundBank";

const DrumPad = () => {
    const renderReturn = (e) => {
        
    }
    return (
        <div id="drum-machine">
            <Keypad />
            <div id="display">
            </div>
        </div>
    )
}

export default DrumPad;