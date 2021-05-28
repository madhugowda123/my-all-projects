import React from 'react'

function Details(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                {/* image for song */}
                <img src={props.song.img_src} alt="" />
            </div>
            {/* title of the song */}
            <h3 className="details-title">{props.song.title}</h3>
            {/* artist of the song */}
            <h4 className="details-artist">{props.song.artist}</h4>
        </div>
    )
}

export default Details