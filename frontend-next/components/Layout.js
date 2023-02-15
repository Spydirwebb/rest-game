import NavBar from "./Navbar"
import styles from './Layout.module.css'

const Layout = ( {children} ) => {
    return (
        <div className={styles.container}>
            <NavBar />
            {children}
        </div>
    )
}

export default Layout