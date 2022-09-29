import Keypad from "./Keypad";
import { SoundBank } from "../Utilities/SoundBank";
import RenderDescription from "./RenderDescription";

const DrumPad = () => {
    return (
        <div id="drum-machine">
            <Keypad />
            <div id="display">
            </div>
        </div>
    )
}

export default DrumPad;