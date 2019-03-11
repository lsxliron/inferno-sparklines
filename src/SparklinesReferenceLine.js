import * as dataProcessing from './dataProcessing';

const SparklinesReferenceLine = props => {

    const { points, margin, type, style, value } = props

    const ypoints = points.map(p => p.y)
    const y = type == 'custom' ? value : dataProcessing[type](ypoints)

    return (
        <line
            x1={points[0].x} 
            y1={y + margin}
            x2={points[points.length - 1].x} 
            y2={y + margin}
            style={style} />
    )

}

SparklinesReferenceLine.defaultProps = {
    type: 'mean',
    style: { stroke: 'red', 
            'fill-opacity': .75, 
            'stroke-dasharray': '2, 2' 
    }
}

export default SparklinesReferenceLine