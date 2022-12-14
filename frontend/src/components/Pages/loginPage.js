import styled from 'styled-components'

const LoginPage =() => {
    return(
        <StyledLoginPage>
            <div className='login-signup'>
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
            <div className='entry'>
                <input type='email' id='email' name='email' placeholder='Enter your Email'/>
                <input type='password' id='password' name='password' placeholder='Password'/>
            </div>
        </StyledLoginPage>
    )
}

const StyledLoginPage = styled.div`
    h1{
        color: red;
    }
`

export default LoginPage