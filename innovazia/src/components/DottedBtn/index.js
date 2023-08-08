import React from 'react'
import styles from "./dottBtn.module.scss"

const DottedBtn = ({btnName}) => {
  return (
    <div>
      <button className={styles.btn}>
        {btnName}

      </button>
    </div>
  )
}

export default DottedBtn
