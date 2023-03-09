import NavBar from "./Navbar"
import styles from './Layout.module.css'

const Layout = ( {children} ) => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}

export default Layout