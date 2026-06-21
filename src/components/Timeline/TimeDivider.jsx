import './TimeDivider.css'

function TimeDivider({ month }) {
  return (
    <div className="time-divider">
      <div className="divider-line"></div>
      <div className="divider-text">{month}</div>
      <div className="divider-line"></div>
    </div>
  )
}

export default TimeDivider
