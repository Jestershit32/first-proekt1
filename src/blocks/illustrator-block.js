import React, { useState } from "react";
const imgUrl = [
    require('./imgIllustrator/1.jpg'),
    require('./imgIllustrator/2.jpg'),
    require('./imgIllustrator/3.jpg'),
    require('./imgIllustrator/4.jpg'),
    require('./imgIllustrator/5.jpg'),
    require('./imgIllustrator/6.jpg'),
    require('./imgIllustrator/7.jpg'),
    require('./imgIllustrator/8.jpg'),
]



export function IllustratorBlock() {



    return (
        <div className="illustrator-block">
            <div className="illustrator-block-h1">/ /векторная ГРАФИКА </div>
            <h3 className="illustrator-block-h3">Adobe illustrator</h3>
            <Gallery />
        </div>

    )
}

function Gallery() {
    const [activeCum, setActiveCum] = useState("none");
    const style = [
        [1, 1, 2, 2],
        [1, 2, 2, 3],
        [1, 3, 2, 4],
        [1, 4, 3, 5],
        [2, 1, 4, 3],
        [2, 3, 3, 4],
        [3, 3, 4, 4],
        [3, 4, 4, 5]
    ];

    const items = style.map((item, key) => {
        function onOf(value) {
            if (value === "none") {
                return key;
            } else {
                return "none";
            }
        }
        function onStyle() {
            if (key === activeCum) {
                return [[1, 1, 4, 5], 200]
            } else {
                return [item, 0]
            }
        }
        return (
            <GalleryItem url={imgUrl[key]} style={onStyle()} click={() => setActiveCum(onOf(activeCum))} />
        )
    })
    return (
        <div className="illustrator-block-gallery">
            {items}
        </div>
    )
}
function GalleryItem(props) {
    const src = props.url;
    const style = {
        gridArea: props.style[0].join('/'),
        zIndex: props.style[1]
    }
    return (
        <img src={src} style={style} className="animation illustrator-block-gallery-item + " onClick={props.click} alt="">
        </img>
    )

}