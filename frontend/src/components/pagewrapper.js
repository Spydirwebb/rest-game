import { Link } from 'react-router-dom';
import styled from 'styled-components'

const PageWrapper = (props) => {
    return (
        <StyledPageWrapper>
            <div>
                <nav>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/login' className='nav-link' >Login/SignUp</Link>
                    <Link to='/characters' className='nav-link'>List of Characters</Link>
                </nav>
                <div className='page-details'>
                    {props.children}
                </div>
                
            </div>
        </StyledPageWrapper>
    )
}

const StyledPageWrapper = styled.div`
    nav {
        width:100%;
        background-color:grey;
        height: 1.5rem;
        padding: 1rem;
    }
    .nav-link {
        margin: 1.5rem;
        font-weight: bold;
    }
    
    .page-details{
        margin-left: 2rem;
    }
`

export default PageWrapper