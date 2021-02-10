import React from 'react';

const GifListContainer = (props) => {

    function renderGifs(){
        return(
            <ul>
                {props.gifs.map(gif => <li><img src={gif.images.downsized.url} alt=''/></li>)}
            </ul>
        )
    }

    return(
        <div>
            {renderGifs()}
        </div>
    )
}

export default GifListContainer