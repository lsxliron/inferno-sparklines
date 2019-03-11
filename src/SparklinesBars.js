const SparklinesBars = props => {

  const { points, height, style, barWidth, margin, onMouseMove } = props
  const strokeWidth = 1 * ((style && style.strokeWidth) || 0)
  const marginWidth = margin ? 2 * margin : 0
  const width =
    barWidth ||
    (points && points.length >= 2
      ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth)
      : 0);

  return (
    <g transform="scale(1,-1)" $HasNonKeyedChildren>
      {points.map((p, i) =>
        <rect
          key={i}
          x={p.x - (width + strokeWidth) / 2}
          y={-height}
          width={width}
          height={Math.max(0, height - p.y)}
          style={style}
          onMouseMove={onMouseMove && onMouseMove.bind(this, p)}
        />,
      )}
    </g>
  )
  
}


SparklinesBars.defaultProps = {
  style: { fill: 'slategray' },
}

export default SparklinesBars