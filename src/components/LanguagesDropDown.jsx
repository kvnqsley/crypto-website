import data from '../languages.json'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'
import { togggleLanguages } from '../utils/LangSlice'
export default function LanguagesDropDown ({languageDDActive}){
    const dispatch = useDispatch()
    const isLangActive = useSelector(state=>state.language.value)
    return<>
    <div  className={`${ isLangActive ? 'block  translate-x-0 ' : 'hidden translate-x-full' } z-20  w-full left-0 ease-in duration-200   md:w-[40%] min-h-screen pl-8 absolute md:left-[52%] md:max-h-[30rem] top-0 md:top-28 border bg-sky-700  border-sky-900`}>
        <h3 className='mt-4   text-lg font-semibold'><FaArrowLeft onClick={()=>dispatch(togggleLanguages())} className='inline-block text-[1.3rem] md:hidden text-slate-50 mr-36'/>Language</h3>
<ul className='mt-4 md:grid grid-cols-3'>
    {data.languages.map(language=><li key={nanoid()} className='max-w-max pl-4 pr-5 pt-2 md:pt-0 hover:bg-orange-100 overflow-hidden max-h-7'>{language.nativeName}</li>)}
</ul>
    </div>
    </>
}