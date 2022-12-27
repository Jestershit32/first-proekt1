import { useState } from "react"

const imgs = [
    require('./img/1(1).jpg'),
    require('./img/1(2).jpg'),
    require('./img/1(3).jpg'),
    require('./img/1(4).jpg'),
    require('./img/1(5).jpg'),
]

export function PhotoshopBlock() {
    return (
        <div className="photoshop-block" >
            <div className="photoshop-block-label">
                / /растровая
                ГРАФИКА
            </div>
            <div className="photoshop-block-lowertext">
                Adobe Photoshop
            </div>
            <img src={require("./img/Group12.png")} className="photoshop-block-img-1" alt="" />
            <Gallery imgGall_1={imgs} />
        </div>
    )
}

function Gallery(props) {
    const [nums, setNums] = useState(props.imgGall_1.length)

    return (
        <>
            <img src={props.imgGall_1[nums - 1]} className="photoshop-block-gallery-1" alt="" />
            <input type="button" onClick={() => { nums > 2 ? setNums(nums - 1) : setNums(props.imgGall_1.length) }} className="photoshop-block-button" value='>' />
            <img src={props.imgGall_1[nums - 2]} className="photoshop-block-gallery-2" alt="" />
        </>
    )
}