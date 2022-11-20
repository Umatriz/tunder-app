import { FC, MouseEventHandler } from "react"

import { IoPlayOutline } from "react-icons/io5"

import styles from "../Buttons.module.css"

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const PlayButton: FC<Props> = (props) => {
  return (
    <div>
      <button className={styles.button} {...props}>
        <IoPlayOutline />
      </button>
    </div>
  )
}

export default PlayButton