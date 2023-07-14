import { useState, useContext, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaApple } from 'react-icons/fa'
import { closeLogin, handleSignup } from '../utils/AuthSlice'
import { auth, Provider } from "../utils/firebase.config";
import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import {AuthContext} from "../utils/AuthenticationProvider"
import FormErrorMessage from '../utils/FormErrorMessage';
import { CloseBtn } from './Buttons';


const Login = ({banner,setBanner}) => {
    const dispatch = useDispatch()
    const [UserImpl] = useAuthState(auth)
    const [isAuthenticated,updateAuthenticationStatus] = useContext(AuthContext)
    const toggleDialog = useSelector(state => state.auth.login)
    const theme = useSelector(state => state.theme.mytheme)
    const closePage=()=>dispatch(closeLogin())
    const credentialsInitialState ={
        email: '',
        password: ''
    }
        const [credentials, setCredentials] = useState(
            credentialsInitialState
        )
    
        const formInitialState =  {
            active: false,
        message: '',
     
        }
        
        const [formError, setFormError] = useState(
           formInitialState
        )
       
    const [formChecked, setFormChecked] = useState(true)
    const onLoginSuccess=()=>{
        setCredentials(credentialsInitialState)
        dispatch(closeLogin())
        updateAuthenticationStatus(true)
        setBanner(state=> {
            return {
             ...state,
             active:true,
             message:'Signed In Successfully'
            }
           })
           console.log(banner)
    }
    const handleSubmit = async (e) => {

        e.preventDefault()
        if (credentials.email === '' ) return ;
         
        else{
          
            fetch('https://coinmamba.onrender.com/login', {
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                method: 'POST',
                credentials:'include',
                body: JSON.stringify(credentials)
            }).then(res => {
         
              if (res.status === 409) {
                    res.json().then(data => setFormError(state => {
                        return {
                            ...state,
                            message: data.error,
                            active: true,
    
                        }
                        
                    }))
                    console.log(formError)
    
                 }
                 else if (res.status == 200){
                   onLoginSuccess()
                }
            }
            ).catch(err => console.log(err))
        }
        //    signInWithEmail()
    }
    const handleEmailChange = (e) => {
        setCredentials(state => {
            return {
                ...state,
                email: e.target.value
            }
        })
    }
    const handlePasswordChange = (e) => {
        setCredentials(state => {
            return {
                ...state,
                password: e.target.value
            }
        })
    }
    const handleForm = () => [
        setFormChecked(false)
    ]

    const signInWithGoogle = () => {
        signInWithPopup(auth, Provider).then(res =>
            console.log(res)
        )
    }
    if (UserImpl?.emailVerified) {
        dispatch(closeLogin())
    }

    return <>
        {
            toggleDialog && <section className={`md:block w-full md:mr-0 md:px-0  h-[150vh] fixed md:overflow-auto  -top-20 left-0 overflow-scroll   md:top-0 md:py-3 md:bg-opacity-30 no-scrollbar    md:bg-red-100 z-50 `}>
                <dialog open={true} onClose={() => dispatch(closeLogin())} className={`${theme ? 'bg-black text-white' : 'bg-sky-700'} overflow-scroll no-scrollbar  min-h-full dialog   w-full px-4  mt-16 md:top-2 md:mt-2  md:w-2/6 absolute  } `}>
                  
                    <CloseBtn closeEvent={closePage } />
                    <FormErrorMessage formError={formError} theme={theme} />
                    <h3 className='font-semibold  text-xl mt-8 sm:mt-0 '>
                        Login to track your favourite coin easily 🚀
                    </h3>
                    <form action="# " >
                        <label className='mt-4' htmlFor="email">
                            Email
                            <input type="email" onChange={handleEmailChange} value={credentials.email} name="email" id="email" placeholder='Email' className={`${theme ? 'bg-neutral-900' : ''} border-1 hover:bg-opacity-30 hover:bg-slate-400 hover:border-neutral-400 rounded w-full p-3`} />
                        </label>

                        <label className='relative top-2' htmlFor="password">
                            Password
                            <input type="password" onChange={handlePasswordChange} value={credentials.password} name="password" id="password" placeholder='Password' className={` ${theme ? 'bg-neutral-900' : ''} rounded w-full p-3 border-1 hover:bg-opacity-30 hover:bg-slate-400 hover:border-neutral-400`} />
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" onChange={handleForm} checked={formChecked} className='mt-8 cursor-pointer' /> Remember me
                        </label>
                        <p className='inline-block text-green-400 float-right font-light mt-6 text-sm'>Forgot your password?</p>


                        <button type="submit " onClick={(e) => handleSubmit(e)} className='bg-green-600 block w-full text-center   mt-4 h-12 text-neutral-100 p-3  rounded'>
                            LOGIN

                        </button>


                    </form>
                    <div className='flex items-center gap-x-1 justify-center'>
                        <span className='bg-neutral-400 inline-block w-[47%] i h-[1px]'></span> <span className='w-[5%] inline-block text-neutral-400'>Or</span><span className='inline-block  bg-neutral-400 top-0 w-[47%] relative right-4 h-[1px]'></span>
                    </div>
                    <button onClick={signInWithGoogle} className='w-full rounded  flex gap-20 items-center mt-4 border  p-3 '>

                        <img src="https://static.coingecko.com/s/google-167c1e093ccfc014420e14da91325a1f70c91e592f58164fefe84603d2fde02e.svg" />
                        <h4 className=''> Continue with Google</h4>
                    </button>
                    <button className='w-full rounded mt-4  flex gap-20 border p-3 '>
                        <FaApple className='inline-block text-2xl' /> Continue with Apple
                    </button>

                    <p className='font-light text-neutral-400 text-center mt-4'>
                        By continuing, you agree to CoinMamba <a href="#" className='underline'>Terms of Service </a>and acknowledge you've read our
                        <a href="#" className='underline'> Privacy Policy</a>
                    </p>

                    <div className='border-t  border-0 mt-4 text-center'>
                        <h4 className='py-3'>
    
                            Don't have an account? <span className='ml-4 text-green-600'><button onClick={() => {dispatch(closeLogin());dispatch(handleSignup())}}>Sign up</button></span>
                        </h4>
                        <h4>Didn't receive confirmation instructtions?</h4>
                        <h4 className={`text-green-600`}>Resend confirmation instructions</h4>

                    </div>
                </dialog>
            </section>
        }
    </>
}

export default Login