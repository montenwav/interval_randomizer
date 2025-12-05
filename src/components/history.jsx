export function History({ history, handleClear }) {
  return (
    <div className="history_container">
      <div className="history">
        {
          history.map((interval, idx) => {
            return <p key={idx}>{interval}</p>
          })
        }
      </div>
      <button className='btn clearhistory' onClick={handleClear}>Clear history</button>
    </div>
  )
}
