
import { useState, useEffect, useRef } from 'react'
import { FaApple,FaExclamationCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { handleSignup, closeSignup, openLogin } from '../utils/AuthSlice'
import { auth, Provider, } from "../utils/firebase.config";
import { signInWithPopup, sendSignInLinkToEmail } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { actionCodeSettings } from '../auth/email/auth_email_link_actioncode_settings';
import { CloseBtn } from './Buttons';






export default function Auth() {
    // const authState = useAuthState(auth)




    const dialogRef = useRef()

    const issignUpActive = useSelector(state => state.sideBarActive.signUp)
    const theme = useSelector(state => state.theme.mytheme)
    const dispatch = useDispatch()
    const [formError, setFormError] = useState({
        active: false,
        message:''
    })
    const closeEvent = () => dispatch(closeSignup())
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch('http://localhost:1000/signup',{
            headers:{
                'Content-Type' : 'application/json'
            },
            method:'POST',
            body:JSON.stringify(credentials)
        }).then(res =>{
            if(res.status === 409){

                setFormError(state=>{
                return {
                    ...state,
                    message:res.json(),
                    active:true,
                   
                }
                })
            } 
        })
        .catch(err=>console.log(err))
        //    signInWithEmail()
    }
    const toggleDialog = useSelector(state => state.auth.signup)
  




    const handleEmailInput = (e) => {
        setCredentials(state => {
            return {
                ...state,
                email: e.target.value
            }
        })
    }
    const handlePasswordInput = (e) => {
        setCredentials(state => {
            return {
                ...state,
                password: e.target.value
            }
        })
    }


    const signInWithGoogle = () => {
        signInWithPopup(auth, Provider).then(res =>
            console.log(res)
        )
    }
    const signInWithEmail = async () => {
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then((res) => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                console.log(res)
                window.localStorage.setItem('emailForSignIn', email);
                console.log(localStorage.getItem('emailForSignIn'))
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn(errorCode, errorMessage)
            });
    }
  













    return <>
        {toggleDialog &&
            <section className={`md:block w-full md:mr-0 md:px-0 min-h-screen  md:h-full fixed md:overflow-auto  -top-20 left-0  md:top-0 md:py-3 md:bg-opacity-30   md:bg-red-100 z-50 no-scrollbar  `}>
                <dialog ref={dialogRef} open={true} onClose={() => dispatch(closeSignup())} className={`${theme ? 'bg-black text-white' : 'bg-sky-700'}  h-full dialog overflow-auto no-scrollbar  w-full px-4  mt-16 md:top-2 md:mt-2  md:w-2/6 absolute  } `}>
                    <CloseBtn closeEvent={closeEvent} />
                    <h3 className='font-semibold sm:ml-4 text-xl mt-8 sm:mt-0 inline-block '>
                        IT'S FREE! Track your favourite coin easily with CoinMamba 🚀
                    </h3>
                    <p className='font-light text-neutral-400 mt-4'>
                        By continuing, you agree to CoinMamba <a href="#" className='underline'>Terms of Service </a>and acknowledge you've read our
                        <a href="#" className='underline'> Privacy Policy</a>
                    </p>
                    <div className={` ${formError.active ? 'block' : 'hidden'} ${theme ? 'bg-[rgb(146,134,135)] text-[rgb(100,36,57)] ' : 'bg-[rgb(248,215,218)] text-[rgb(151,28,98)]'} w-full py-3 pl-5 rounded text-sm mt-4`}>
                           <span className='bg-[rgb(100,36,57)] inline-block  rounded-full h-2 w-2'></span> {formError.message.response}
                        </div>
                    <button onClick={signInWithGoogle} className='w-full rounded  flex gap-20 items-center mt-4 border  p-3 '>

                        <img src="https://static.coingecko.com/s/google-167c1e093ccfc014420e14da91325a1f70c91e592f58164fefe84603d2fde02e.svg" />
                        <h4 className=''> Continue with Google</h4>
                    </button>
                    <button className='w-full rounded mt-4  flex gap-20 border p-3 '>
                        <FaApple className='inline-block text-2xl' /> Continue with Apple
                    </button>
                    <h4 className="text-neutral-400 font-normal text-sm text-center mt-4 relative  after:content-[''] after:h-[1px] after:w-[45%] after:absolute after:right-0 after:top-1/2 after:bg-neutral-400  before:content-[''] before:h-[1px] before:w-[45%] before:absolute before:left-0 before:top-1/2 before:bg-neutral-400">Or</h4>
                    <form  >
                        
                        <label className='mt-4 relative' htmlFor="email">
                            Email
                            <input type="email" onChange={handleEmailInput} value={credentials.email} name="email" id="email" placeholder='Email' className={`${formError.active ? 'outline outline-red-600' : 'outline-none'}  ${theme ? 'bg-neutral-900' : ''} rounded w-full p-3`} 
                            
                            />
                            <FaExclamationCircle className={` ${formError.active ? 'block' : 'hidden'} inline-block absolute right-4 top-[60%] text-red-600 '`} />
                        </label>

                        <label className='relative top-2' htmlFor="password">
                            Password
                            <input type="password" onChange={handlePasswordInput} value={credentials.password} name="password" id="password" placeholder='Password' className={` ${theme ? 'bg-neutral-900' : ''} rounded w-full p-3`} />
                        </label>
                        <p className='text-neutral-400 font-light mt-6 text-sm'>Password must contain at least 8 characters including 1 uppercase letter,1 lowercase letter, 1 number and 1 special character</p>

                        <input type="checkbox" className='mt-3' name="" id="checkbox" /> <label htmlFor='checkbox'>I would like to suscribe to the CoinMamba daily newsletter </label>

                        <button type="submit " onClick={(e) => handleSubmit(e)} className='bg-green-600 block w-full text-center   mt-4 h-12 text-neutral-100 p-3  rounded'>
                            SIGN UP

                        </button>
                    </form>

                    <div className='border-t  border-0 mt-4 text-center'>
                        <h4>
                            Already have an account? <span className='ml-4 text-green-600'><button onClick={() => dispatch(openLogin())}>Login</button></span>
                        </h4>
                        <h4>Didn't receive confirmation instructtions?</h4>
                        <h4 className={`text-green-600`}>Resend confirmation instructions</h4>

                    </div>
                </dialog>
            </section>}
    </>

}