export function FigmaBlock() {

    return (
        <div id='Figma' className="figma-block" >
            <div className="figma-block-zagolovok">
                <h1 className="figma-block-zagolovok-h1-first">МАКЕТ ИЗ</h1>
                <h1 className="figma-block-zagolovok-h1-second">FIGMA</h1>
            </div>
            <div className="fidma-block-designtext">
                Дизайн, как видно, самостоятельный.
                Я не претиндую на звание дизайнер года,
                но все же старался сделать что-то уникальное
            </div>
            <div className="figma-block-iframe-figma">
                <iframe width="100%"
                    height="100%"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F6hrcoD9CgoUHtgaWrmWNOZ%2FUntitled%3Fnode-id%3D16%253A20%26t%3DAn6x8ENSqK01nzK3-1" allowfullscreen>

                </iframe>
            </div>
            <div className="figma-block-label-small">* данный сайт создан по макету из Figma</div>
        </div>
    )
}

