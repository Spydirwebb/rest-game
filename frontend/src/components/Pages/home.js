import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            <h1>Welcome to my REST REACT Game!</h1>
            <h3><Link to='/characters'>Look at the characters!</Link></h3>
        </div>
    )
}

export default Home