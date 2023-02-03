import Logo from '../assets/Logo/Logo.png'
import Button from '../components/button'
import Input from '../components/input/input'

export default function Login() {
  return (
    <div className='wrapper'>
      <div className='container' >
        <img src={Logo} alt='logo' />
        <form className='form-container'>
          <h1 className='login-heading'>Login To Your Account</h1>
          <h6 className='login-sub-heading'>Please enter your login details</h6>
          <Input type={'email'} placeholder={'write your email'} name={'email'} required={true} />
          <Input type={'password'} placeholder={'enter your password'} name={'password'} minLength={6} required={true} />
          <div className='remember'>
            <div>
              <input type={'checkbox'} id='remember' className='checkbox' />
              <label htmlFor='rember' >Remember me</label>
            </div>
            <a href={'/'} >Forgot password</a>
          </div>
          <Button className={'btn-filled'} text={'Login'} />
          <hr />
          <a href='/'>Don't have an account?</a>
          <br />
          <Button className={'btn-empty'} text={'Register'} />

        </form>
      </div>
    </div>
  )
}
