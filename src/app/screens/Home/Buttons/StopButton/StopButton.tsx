import { FC, MouseEventHandler } from "react"

import { IoPauseCircleOutline } from "react-icons/io5"

import styles from "../Buttons.module.css"

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const StopButton: FC<Props> = (props) => {
  return (
    <div>
      <button className={styles.button} {...props}>
        <IoPauseCircleOutline />
      </button>
    </div>
  )
}

export default StopButton