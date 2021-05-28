import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
    return (
        <div className="c-player--controls">
            {/* to move previous song */}
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            {/* to play and pause the song */}
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            {/* to move next song */}
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default Controls