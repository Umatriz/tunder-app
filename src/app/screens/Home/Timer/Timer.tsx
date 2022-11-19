import { FC, useEffect, useState, useRef } from 'react';
import ProgressBar from 'react-customizable-progressbar'

import styles from "./Timer.module.css"
import Buttons from "../Buttons/Buttons"

type Props = {}

const Timer: FC = ({}: Props) => {

  const [secondsLeft, setSecondsLeft] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(true)
  const [mode, setMode] = useState<string>('work')
  const [step, setStep] = useState<number>(0)

  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)
  
  const totalSeconds = secondsLeft

  const initTimer = () => {
    setSecondsLeft(25 * 60)
  }
  
  const tick = () => {
    setSecondsLeft(secondsLeft - 1)
  }

  const swichMode = () => {
    const nextMode = mode === 'work' ? 'break' : 'work'
    const nextSecond = (nextMode === 'work' ? 25 * 60 : 5 * 60)

    setMode(nextMode)
    setSecondsLeft(nextSecond)
  }

  useEffect(() => {
    initTimer()

    setInterval(() => {
      if (isPausedRef) {
        return
      }

      if (secondsLeftRef.current === 0) {
        return swichMode()
      }

      tick()
    }, 1000)
  }, [])

  useEffect(() => {
    setStep(totalSeconds - secondsLeft)
  }, [secondsLeft])

  const steps = secondsLeft

  return (
    <div className={styles.container}>
      <ProgressBar
        progress={step}
        radius={100}
        steps={steps}
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
          <div>5</div>
        </div>
      </ProgressBar>
      <Buttons pause={isPaused} setPause={setIsPaused} />
    </div>
  )
}

export default Timer