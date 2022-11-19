import { FC } from "react"

import { IoPauseCircleOutline } from "react-icons/io5"

import styles from "../Buttons.module.css"

type Props = {}

const PlayButton: FC = () => {
  return (
    <div>
      <button className={styles.button}>
        <IoPauseCircleOutline />
      </button>
    </div>
  )
}

export default PlayButton