import{Component} from 'react'
import {GiAirBalloon, GiPartyPopper} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
class ErrorBoundary extends Component {
    state = {
      hasError: false
    };
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can log the error or perform any other actions here
      console.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render an error fallback component here
        return <>
       <main  className={`  sm:w-[calc(100% - 32rem)] mt-20   w-[calc(100% - 16rem)] sm:ml-16 ml-4 mr-4  sm:mr-16 min-h-screen`}>
       <div className={`  gap-x-10 grid grid-cols-1 gap-y-16 grid-rows-1 sm:grid-cols-2 `}>
       <div>
           <h3 className='text-[2em] text-neutral-400 font-semibold'>
             Uh oh... <span className='block'>
               I think we're lost.
             </span>
           </h3>
           <p className='text-lg '>
             The page you're looking for could not be found.
           </p>
          <button className='bg-green-500 rounded mt-6   p-2 hover:bg-green-600  text-white '>
            Take me home
          </button>
          <button className='inline-block rounded ml-8  p-2 bg-blue-300 outline-2 outline outline-neutral-300 hover:outline-green-500'>
          <FaSearch className='inline-block' /> Search
          </button>
          <ul className='mt-5'>
          <li className='text-green-500 p-1'>
            <Link to={'/'}>Browse cryptocurrency ecosystems</Link>
          </li>
          <li className='text-green-500 p-1'>
            <Link to={'/nft'}>Browse NFTs
          </Link>
          </li>
          <li className='text-green-500 p-1'>
            <Link to={'/exchanges'}>Browse exchanges 
          </Link>
          </li>
          <li className='text-green-500 p-1'>
            <Link to={'/learn'}>
            Learn cryptocurrency
          </Link>
          </li>


          </ul>
   
         </div>
       <div className='animate-balloon'>
     <GiAirBalloon className='sm:text-[400px] text-[200px] text-red-300'/>
        </div>
       </div>
        <p className='text-white'>
          Need help?<Link className='text-green-500' to={'/contact'}> Contact us</Link>
          </p>
       </main>
    
        </>
      
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary