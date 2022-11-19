import { Dispatch, FC, SetStateAction } from "react"
import { IoPlayOutline, IoPauseCircleOutline } from "react-icons/io5"

import styles from "./Buttons.module.css"

type Props = {
  pause: boolean,
  setPause: Dispatch<SetStateAction<boolean>>,
}

const Buttons: FC<Props> = ({ pause, setPause }) => {
  const stop = () => {
    setPause(true)
  }

  const play = () => {
    setPause(false)
  }

  return (
    <div className={styles.container}>
      {
        pause ?
        <button className={styles.button} onClick={stop}>
          <IoPlayOutline />
        </button> :
        <button className={styles.button} onClick={play}>
          <IoPauseCircleOutline />
        </button>
      }
    </div>
  )
}

export default Buttons