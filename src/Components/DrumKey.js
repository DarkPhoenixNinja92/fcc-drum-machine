const DrumKey = (props) =>  {

    const playAudio = (e) => {
        if(e.target.className === 'drum-pad') {
            let audio = document.getElementById(props.audio.keyTrigger);
            audio.play();
        }
    }

    return (
        <button className="drum-pad" id="heater-1" onClick={playAudio}>{props.audio.keyTrigger}
                <audio className="clip" id={props.audio.keyTrigger} src={props.audio.url} />
        </button>
    )
}

export default DrumKey;