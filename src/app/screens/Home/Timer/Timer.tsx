import { FC, useEffect, useState, useRef } from 'react';
import ProgressBar from 'react-customizable-progressbar'

import PlayButton from '../Buttons/PlayButton/PlayButton';
import StopButton from '../Buttons/StopButton/StopButton';

import styles from "./Timer.module.css"

type Props = {}

const Timer: FC = ({}: Props) => {

  const [secondsLeft, setSecondsLeft] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(true)
  const [mode, setMode] = useState<string>('work')
  const [step, setStep] = useState<number>(0)

  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)
  
  const tick = () => {
    secondsLeftRef.current--
    setSecondsLeft(secondsLeftRef.current)
  }

  const swichMode = () => {
    const nextMode = mode === 'work' ? 'break' : 'work'
    const nextSecond = (nextMode === 'work' ? 25 * 60 : 5 * 60)

    setMode(nextMode)
    modeRef.current = nextMode;

    setSecondsLeft(nextSecond)
    secondsLeftRef.current = nextSecond;
  }

  useEffect(() => {
    secondsLeftRef.current = 25 * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return
      }

      if (secondsLeftRef.current === 0) {
        return swichMode()
      }

      tick()
    }, 1000)

    return () => clearInterval(interval);

  }, [])

  const totalSeconds = mode === 'work'
    ? 25 * 60
    : 5 * 60;

  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  return (
    <div className={styles.container}>
      <ProgressBar
        progress={percentage}
        radius={100}
        steps={100}
        strokeColor='#7C9473'
        strokeWidth={3}
        trackStrokeColor='#CDD0CB'
        trackStrokeWidth={3}
        pointerRadius={5}
        pointerStrokeWidth={2}
        pointerStrokeColor='#7C9473'
        pointerFillColor='#E8EAE6'
      >
        <div className={styles.indicator}>
          <div>{minutes + ':' + seconds}</div>
        </div>
      </ProgressBar>
      {
        isPaused ?
        <PlayButton onClick={() => {
          setIsPaused(false)
          isPausedRef.current = false
        }} /> :
        <StopButton onClick={() => {
          setIsPaused(true)
          isPausedRef.current = true
        }} />
      }
    </div>
  )
}

export default Timer