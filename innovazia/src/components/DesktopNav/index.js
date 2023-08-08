import React from 'react'
import styles from "./desktopnav.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const DesktopNav = () => {
  return (
    <div>
      <div className={styles.mainDiv}>
        <ul>
            <li>
                <div className={styles.logoDiv}>
                    <Image
                    src="/images/logo.png"
                    width={100}
                    height={75}
                    />
                </div>
            </li>
        </ul>
        <div className={styles.menu}>
                    <ul>
                        <li>
                            <Link href="#">
                                SERVICES
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                clients
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                ABOUT us
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Platforms
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.btnDiv}>
                    <button>
                        LETS TAlk
                    </button>
                    <div className={styles.asideNav}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                </div>
             

      </div>
    </div>
   )
}

export default DesktopNav
