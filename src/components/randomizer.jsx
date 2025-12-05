export function Randomizer({ interval, handleClick, isEnabled }) {
  return (
    <div className="randomizer">
      <button disabled={!isEnabled} className={`btn ${!isEnabled && 'disabledbtn'}`} onClick={handleClick}>
        Get interval
      </button>
      {interval &&
        <p className="intervaltext">{interval}</p>
      }
    </div>
  )
}
