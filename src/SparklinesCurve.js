const SparklinesCurve = props => {

    const { points, height, margin, color, style, divisor } = props
    let prev
    const curve = (p) => {
        let res

        if (!prev) {
            res = [p.x, p.y]
        } else {
            const len = (p.x - prev.x) * divisor
            res = [ "C",
                //x1
                prev.x + len,
                //y1
                prev.y,
                //x2,
                p.x - len,
                //y2,
                p.y,
                //x,
                p.x,
                //y
                p.y
            ]
        }
        prev = p
        return res

    }
    const linePoints = points
        .map((p) => curve(p))
        .reduce((a, b) => a.concat(b))
    const closePolyPoints = [
        "L" + points[points.length - 1].x, height - margin,
        margin, height - margin,
        margin, points[0].y
    ]
    const fillPoints = linePoints.concat(closePolyPoints)

    const lineStyle = {
        stroke: color || style.stroke || 'slategray',
        'stroke-width': style.strokeWidth || '1',
        'stroke-linejoin': style.strokeLinejoin || 'round',
        'stroke-linecap': style.strokeLinecap || 'round',
        fill: 'none'
    }
    const fillStyle = {
        stroke: style.stroke || 'none',
        'stroke-width': '0',
        ['fill-opacity']: style.fillOpacity || '.1',
        fill: style.fill || color || 'slategray'
    }

    return (
        <g $HasNonKeyedChildren>
            <path d={"M"+fillPoints.join(' ')} style={fillStyle} />
            <path d={"M"+linePoints.join(' ')} style={lineStyle} />
        </g>
    )

}


SparklinesCurve.defaultProps = {
    style: {},
    divisor: 0.25
}

export default SparklinesCurve