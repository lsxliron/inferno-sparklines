const SparklinesSpots = props => {

    const lastDirection = (points) => {

        Math.sign = Math.sign || function(x) { return x > 0 ? 1 : -1; }

        return points.length < 2
            ? 0
            : Math.sign(points[points.length - 2].y - points[points.length - 1].y)
    }

    

    const { points, size, style, spotColors } = props

    const startSpot = <circle
                        cx={points[0].x}
                        cy={points[0].y}
                        r={size}
                        style={style} />

    const endSpot = <circle
                        cx={points[points.length - 1].x}
                        cy={points[points.length - 1].y}
                        r={size}
                        style={style || { fill: spotColors[lastDirection(points)] }} />

    return (
        <g>
            {style && startSpot}
            {endSpot}
        </g>
    )

}


SparklinesSpots.defaultProps = {
    size: 2,
    spotColors: {
        '-1': 'red',
        '0': 'black',
        '1': 'green'
    }
}

export default SparklinesSpots