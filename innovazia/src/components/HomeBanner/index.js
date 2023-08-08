import React from 'react'
import styles from "./homebanner.module.scss"
import Image from 'next/image'

const Homebanner = () => {
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.contentDiv}>

        </div>

        <div className={styles.bannerImageDiv}>
            <div className={styles.bgBanner}></div>
            <div className={styles.imageDiv}>
                <div className={styles.imgOne}>
                <Image
                    width={100}
                    height={100}
                    alt=""
                    src="/images/car.png"
                />
                </div>
             
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homebanner
