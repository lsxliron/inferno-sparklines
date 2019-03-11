import { stdev } from './dataProcessing'
import { mean } from './dataProcessing'

const SparklinesNormalBand = props => {
    const { points, margin, style } = props
    const ypoints = points.map(p => p.y)
    const dataMean = mean(ypoints)
    const dataStdev = stdev(ypoints)
    return (
        <rect x={points[0].x} y={dataMean - dataStdev + margin}
            width={points[points.length - 1].x - points[0].x} height={dataStdev * 2}
            style={style} />
    )

}

SparklinesNormalBand.defaultProps = {
    style: { fill: 'red', 'fill-opacity': .1 }
}

export default SparklinesNormalBand