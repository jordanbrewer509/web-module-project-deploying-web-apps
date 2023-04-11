import React from "react";
import './Music.css'

function Music() {
    return (
        <div className="page">
            <div className="container">
                <div className="pq">
                    <iframe 
                        width="100%" 
                        height="300"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1017798457&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    >
                    </iframe>
                </div>
                <div className="astronaut">
                    <iframe 
                        width="100%" 
                        height="300"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/591305925&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    >
                    </iframe>
                </div>
                <div>
                    <iframe 
                        width="100%" 
                        height="300"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/537017895&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    >
                    </iframe>  
                </div>
            </div>
        </div>
    )
}

export default Music