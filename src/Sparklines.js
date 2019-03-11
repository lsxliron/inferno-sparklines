import { createComponentVNode, Fragment } from 'inferno'
import SparklinesText from './SparklinesText';
import SparklinesLine from './SparklinesLine';
import SparklinesCurve from './SparklinesCurve';
import SparklinesBars from './SparklinesBars';
import SparklinesSpots from './SparklinesSpots';
import SparklinesReferenceLine from './SparklinesReferenceLine';
import SparklinesNormalBand from './SparklinesNormalBand';
import dataToPoints from './dataProcessing/dataToPoints'

const Sparklines = props => {

    const { data, limit, width, height, svgWidth, svgHeight, preserveAspectRatio, margin, style, max, min } = props

    if (data.length === 0) return null
    const points = dataToPoints({ data, limit, width, height, margin, max, min })
    const svgOpts = { style: style, viewBox: `0 0 ${width} ${height}`, preserveAspectRatio: preserveAspectRatio }
    if (svgWidth > 0) 
        svgOpts['width'] = svgWidth
    if (svgHeight > 0) 
        svgOpts['height'] = svgHeight
    const children = Array.isArray(props.children)?props.children:[props.children]
    return (
        <svg {...svgOpts} $HasNonKeyedChildren>
            {
                
                children.map(function(child) {
                    // @ts-ignore
                    const childProps = child?child.props:{}
                    // return cloneVNode(child, { data, points, width, height, margin,  ...childProps})
                    return child?createComponentVNode(child.flags, child.type, { data, points, width, height, margin, ...child.props }):<Fragment></Fragment>
                })
            }
        </svg>
    )

}

Sparklines.defaultProps = {
    data: [],
    width: 240,
    height: 60,
    //Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle.
    preserveAspectRatio: 'none', //https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
    margin: 2
}

// export default Sparklines
export { Sparklines, SparklinesLine, SparklinesCurve, SparklinesBars, SparklinesSpots, SparklinesReferenceLine, SparklinesNormalBand, SparklinesText }
