import { useState } from 'react';

let imgsReq = [
    require('./img/1(1).jpg'),
    require('./img/1(2).jpg'),
    require('./img/1(3).jpg'),
    require('./img/1(4).jpg'),
    require('./img/1(5).jpg'),
]

export function PhotoshopBlock() {

    const imgs = imgsReq.map((img, key) => {
        if (key === 0) {
            return ([img, "photoshop-block-gallery-1"])
        } else if (key === 1) {
            return ([img, "photoshop-block-gallery-2"])
        } else {
            return ([img, "photoshop-block-gallery-0"])
        }

    })
    const [photoNum, setPhotoNum] = useState(imgs);

    return (
        <div id="photoshop" className="photoshop-block" >
            <div className="photoshop-block-label">
                / /растровая
                ГРАФИКА
            </div>
            <div className="photoshop-block-lowertext">
                Adobe Photoshop
            </div>
            <img src={require("./img/Group12.png")} className="photoshop-block-img-1" alt="" />
            <Gallery photoNum={photoNum} />
            <GalleryButton click={() => setPhotoNum(slyder(photoNum))} />
        </div>
    )
}



let imgNum = 1;
function slyder(photoNum) {

    if (photoNum.length === imgNum + 1) {
        imgNum = 1;
    } else {
        imgNum++;
    }
    const photoNumNew = photoNum.map((photo, key) => {
        if (key === imgNum - 1) {
            photo[1] = "photoshop-block-gallery-1";
        } else if (key === (imgNum)) {
            photo[1] = "photoshop-block-gallery-2";
        }
        else {
            photo[1] = "photoshop-block-gallery-0";
        }
        return photo;
    })
    return (photoNumNew)
}


function Gallery(props) {
    const photoNum = props.photoNum;
    const photoItems = photoNum.map((photo) =>
        <GalleryItem url={photo[0]} style={photo[1]} />
    );
    return (
        photoItems
    )
}


function GalleryItem(props) {
    return (
        <img src={props.url} className={"animation " + props.style} alt="" />
    )
}
function GalleryButton(props) {
    return (
        <input onClick={props.click} type="button" value=">" className="animation photoshop-block-button" />
    )
}




