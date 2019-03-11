const SparklinesLine = props => {

    const { data, points, height, margin, color, style, onMouseMove } = props

    const linePoints = points.map(p => [p.x, p.y]).reduce((a, b) => a.concat(b))
    

    const closePolyPoints = [
      points[points.length - 1].x,
      height - margin,
      margin,
      height - margin,
      margin,
      points[0].y,
    ]

    const fillPoints = linePoints.concat(closePolyPoints)

    const lineStyle = {
      stroke: color || style.stroke || 'slategray',
      'stroke-width': style.strokeWidth || '1',
      'stroke-linejoin': style.strokeLinejoin || 'round',
      'stroke-linecap': style.strokeLinecap || 'round',
      fill: 'none',
    }
    const fillStyle = {
      stroke: style.stroke || 'none',
      'stroke-width': '0',
      'fill-opacity': style.fillOpacity || '.1',
      fill: style.fill || color || 'slategray',
      'pointer-events': 'auto',
    }

    const tooltips = points.map((p, i) => {

      return (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={2}
          style={fillStyle}
          // @ts-ignore
          onMouseEnter={e => onMouseMove('enter', data[i], p)}
          // @ts-ignore
          onClick={e => onMouseMove('click', data[i], p)}
        />
      )
    })

    return (
      <g>
        {tooltips}
        <polyline points={fillPoints.join(' ')} style={fillStyle} />
        <polyline points={linePoints.join(' ')} style={lineStyle} />
      </g>
    )
  }



SparklinesLine.defaultProps = {
  style: {},
  onMouseMove: () => {},
}

export default SparklinesLine