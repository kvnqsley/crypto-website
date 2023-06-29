
import { Link } from 'react-router-dom'
import { NavigationBtn } from '../../components/Buttons'


const Section2 = ({ theme,
  toggleSocial,
  toggleGeneral,
  toggleDeveloper,
  toggleWidgets,
  tab }) => {



  return (
    <div>
      <ul className={`relative md:pb-7 pb-2  mt-8 h-min border-b-[1px] w-full overflow-y-hidden border-neutral-400
gap-5  flex`} >

        <li className={` cursor-pointer border-b-2 -mb-2 md:-mb-7 `}>Overview</li>
        <li className={`hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100  min-w-max`}><Link to={'/exchanges/derivatives'}>Markets</Link></li>
        <li className={`hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100  min-w-max`}><Link to={'/exchanges/derivatives'}>Historical Data</Link></li>
        <li className={`hover:border-b-2  cursor-pointer  -mb-2 md:-mb-7 border-cyan-100  min-w-max`}><Link to={'/exchanges/derivatives'}>Tokenomics</Link></li>
        <li className='text-green-600 px-2 rounded bg-green-200 '>
          New
        </li>

      </ul>
      <ul className='flex justify-between mt-4 md:w-[25vw] sm:w-[50vw]'>
        <li >
          <NavigationBtn event={toggleGeneral} theme={theme} variant={tab.general} >
            General
          </NavigationBtn>
        </li>
        <li>
          <NavigationBtn event={toggleSocial} theme={theme} variant={tab.social} >
            Social
          </NavigationBtn>
        </li>
        <li>
          <NavigationBtn event={toggleDeveloper} theme={theme} variant={tab.developer} >
            Developer
          </NavigationBtn>
        </li>


        <li>
          <NavigationBtn event={toggleWidgets} theme={theme} variant={tab.widgets}>
            Widgets
          </NavigationBtn>

        </li>

      </ul>
    </div>
  )
}

export default Section2