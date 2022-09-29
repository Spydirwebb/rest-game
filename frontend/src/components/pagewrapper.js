import { Link } from 'react-router-dom';

const PageWrapper = (props) => {
    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/characters'>List of Characters</Link>
            </nav>
            {props.children}
        </div>
    )
}

export default PageWrapper