import {useContext} from 'react'
import NavigationTab from './NavigationTab'
import Overview from './Overview'
import { NavigationBtn } from '../../components/Buttons'
import { ComponentContext } from './ContextProvider'




const Markets = () => {


  const {setComponent,
    theme,
    tab,
    toggleGeneral,
    toggleSocial,
    toggleDeveloper,
    toggleWidgets,} = useContext(ComponentContext)
  return (
     
    <>
         <ul className={`relative md:pb-7 pb-2  mt-8 h-min border-b-[1px] w-full overflow-y-hidden border-neutral-400
gap-5  flex`} >

        <li className={`hover:border-b-2  -mb-2 md:-mb-7 border-cyan-100  min-w-max  `}> <button onClick={setComponent(<Overview/>)}>
        Overview </button> </li>
        <li className={` border-b-2 -mb-2 md:-mb-7`}><button onClick={setComponent(<Markets/>)} >Markets</button></li>
        <li className={`hover:border-b-2    -mb-2 md:-mb-7 border-cyan-100  min-w-max`}><button  onClick={setComponent(<Markets/>)}>Historical Data</button></li>
        <li className={`hover:border-b-2    -mb-2 md:-mb-7 border-cyan-100  min-w-max`}><button  onClick={setComponent(<Markets/>)}>Tokenomics</button></li>
        <li className='text-green-600 px-2 rounded bg-green-200 '>
          New
        </li>

      </ul>
      

      <NavigationTab>
      <li >
          <NavigationBtn event={toggleGeneral} theme={theme} variant={tab.general} >
            Spot
          </NavigationBtn>
        </li>
        <li>
          <NavigationBtn event={toggleSocial} theme={theme} variant={tab.social} >
            Perpetuals
          </NavigationBtn>
        </li>
        <li>
          <NavigationBtn event={toggleDeveloper} theme={theme} variant={tab.developer} >
            Futures
          </NavigationBtn>
        </li>
      </NavigationTab>
      </>
  )
}

export default Markets