import { useEffect, useRef, useState } from "react";
import { History } from "./components/history";
import { Randomizer } from "./components/randomizer";

const intervals = [
  "Minor Second",
  "Major Second",
  "Minor Third",
  "Major Third",
  "Fourth",
  "Tritone",
  "Fifth",
  "Minor Sixth",
  "Major Sixth",
  "Minor Seventh",
  "Major Seventh",
  "Octave"
];

export default function App() {
  const currentRef = useRef(null);
  const [history, setHistory] = useState([])
  const [interval, setInterval] = useState(false)
  const [isEnabled, setIsEnabled] = useState(true)
  const [audioSrc, setAudioSrc] = useState(null)

  useEffect(() => {
    const audio = currentRef.current;
    audio.play()
  }, [audioSrc])

  const changeInterval = () => {
    let rand = Math.floor(Math.random() * intervals.length)
    let currentInterval = intervals[rand]

    do {
      rand = Math.floor(Math.random() * intervals.length);
      currentInterval = intervals[rand];
    } while (currentInterval === interval);

    // Play new interval
    setIsEnabled(false)

    const currentAudioSrc = currentInterval.replace(/\s+/g, '');
    currentRef.current.pause()
    setAudioSrc(currentAudioSrc)

    setInterval(currentInterval)
    const newArr = [currentInterval, ...history];
    setHistory(newArr)

    // Button cooldown
    setTimeout(() => setIsEnabled(true), 1000)
  }

  const handleClear = () => setHistory([])

  return (
    <div className="main">
      <Randomizer handleClick={changeInterval} interval={interval} isEnabled={isEnabled} />
      {history.length != 0 && <History history={history} handleClear={handleClear} />}
      <audio ref={currentRef} src={`${audioSrc}.mp3`} />
    </div>
  );
}
