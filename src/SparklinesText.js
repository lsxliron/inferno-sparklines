const SparklinesText = props => {


    const { point, text, fontSize, fontFamily } = props;
    const { x, y } = point;
    return (
        <g>
            <text x={ x } y={ y } fontFamily={fontFamily || "Verdana"} fontSize={fontSize || 10}>
            { text }
            </text>
        </g>
    )
}

SparklinesText.defaultProps = {
    text: '',
    point: { x: 0, y: 0 }
};

export default SparklinesText