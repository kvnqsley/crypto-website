import {FaEye,FaApple, FaRocket, FaGoogle } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { openSignup } from '../utils/Sidebarslice'
export default  function SignUp (){
    const issignUpActive = useSelector(state=>state.sideBarActive.signUp)
   const dispatch =useDispatch()
   const handleSubmit = (e)=>{
       e.preventDefault()
   }
    return<>
    <section className={`min-h-screen px-4 z-[20] top-0 left-0 bg-sky-700 absolute  ${issignUpActive ? 'block' :'hidden' }`}>
    <div onClick={()=>dispatch(openSignup())}  className="  w-18 inline-block h-10">
    <div className='w-6 bg-slate-900 mt-1 h-1 ml-2 translate-y-6 rotate-45'></div>
   
   <div className='w-6 bg-slate-900 mt-1 ml-2 h-1  translate-y-4 -rotate-45'></div>
    
    </div>
        <h3 className='font-semibold text-xl mt-8 inline-block '>
            IT'S FREE! Track your favourite coin easily with Cryptonnite <FaRocket className='inline-block text-red-800'/>
        </h3>
        <p className='font-light text-neutral-400 mt-4'> 
            By continuing, you agree to Cryptonnite <a href="#" className='underline'>Terms of Service and acknowledge you've read our</a>
             <a href="#" className='underline'>Privacy Policy</a>
        </p>
        <button className='w-full roundedrounded  flex gap-20 items-center mt-4 border  p-3 '>
        <FaGoogle className='inline-flex w-3 ml-0  '/> <h4 className=''> Continue with Google</h4>
        </button>
        <button className='w-full rounded mt-4  flex gap-20 border p-3 '>
           <FaApple className='inline-block'/> Continue with Apple
        </button>
        <h4  className="text-neutral-400 font-normal text-sm text-center mt-4 relative  after:content-[''] after:h-[1px] after:w-[45%] after:absolute after:right-0 after:top-1/2 after:bg-neutral-400  before:content-[''] before:h-[1px] before:w-[45%] before:absolute before:left-0 before:top-1/2 before:bg-neutral-400">Or</h4>
        <form action="#">
            <label className='mt-4' htmlFor="email">
                Email
                <input type="email" name="email" id="email" placeholder='Email' className='rounded w-full p-3' />
            </label>

            <label className='relative top-2' htmlFor="password">
                Password
                <input type="password" name="password" id="password" placeholder='Password'className='rounded w-full p-3' /> 
            </label>
            <p className='text-neutral-400 font-light mt-6 text-sm'>Password must contain at least 8 characters including 1 uppercase letter,1 lowercase letter, 1 number and 1 special character</p>
            
           <input type="checkbox" className='mt-3' name="" id="checkbox" /> <label htmlFor='checkbox'>I would like to suscribe to the Cryptonnite daily newsletter </label>
       
       <input type="submit " onClick={(e)=>handleSubmit} value="" placeholder='Sign Up'className='bg-green-600 block w-full text-center   mt-4 placeholder:text-neutral-100 p-3  rounded'/>
        </form>
        <div className='border-t  border-0 mt-4 text-center'>
            <h4>
                Already have an account? <span className='ml-4 text-green-600'><a href="#">Login</a></span>
            </h4>
        </div>
        </section>
        </>

}