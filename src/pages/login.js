import Logo from '../assets/Logo/Logo.png'
import Input from '../components/input'

export default function Login() {
  return (
    <div className='wrapper'>
        <div className='container' >
          <img src={Logo} alt='logo'/>
            <form className='form-container'>
            <h1 className='login-heading'>Login To Your Account</h1>
            <h6 className='login-sub-heading'>Please enter your login details</h6>
            <Input type={'email'} placeholder={'write your email'} name={'email'} />
            <Input type={'password'} placeholder={'enter your password'} name={'password'} />
            <div className='remember'>
              <input type={'checkbox'} id='remember' />
              <label htmlFor='rember' >Remember me</label>
              <a href={'/'} >Forgot password</a>
            </div>
            
            </form>
        </div>
    </div>
  )
}
