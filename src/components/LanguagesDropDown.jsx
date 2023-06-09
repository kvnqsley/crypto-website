import data from '../languages.json'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'
import { toggleSidebarLanguages } from '../utils/LangSlice'


export default function LanguagesDropDown ({languageDDActive}){
    const theme = useSelector(state=>state.theme.mytheme)
    const dispatch = useDispatch()
    const isLangActive = useSelector(state=>state.language.value)
    
    return<>
    <div  className={`${ isLangActive ? 'block  translate-x-0 ' : 'hidden translate-x-full' } ${theme ? 'bg-black text-white' :'bg-sky-700'} z-50  w-full left-0 ease-in duration-200   md:w-[40%] min-h-screen pl-8 absolute md:left-[52%] md:max-h-[30rem] top-0 md:top-10 border   border-sky-900`}>
        <h3 className='mt-4 md:hidden  text-lg font-semibold'><FaArrowLeft onClick={()=>dispatch(toggleSidebarLanguages())} className='inline-block text-[1.3rem]  text-slate-50 mr-36'/>Language</h3>
<ul className='mt-4 md:grid grid-cols-3'>
    {data.languages.map(language=><li key={nanoid()} className='max-w-max pl-4 pr-5 pt-2 md:pt-0 hover:bg-orange-100 overflow-hidden max-h-7'>{language.nativeName}</li>)}
</ul>
    </div>
    </>
}
