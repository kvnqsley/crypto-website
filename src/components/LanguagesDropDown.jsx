import data from '../languages.json'
export default function LanguagesDropDown ({languageDDActive}){

    return<>
    <div  className={`${languageDDActive ? 'hidden' : 'block' } w-[40%] pl-8 absolute left-[52%] max-h-[30rem]  top-14 border bg-sky-700  border-sky-900`}>
        <h3 className='mt-4 text-lg font-semibold'>Language</h3>
<ul className='mt-4 grid grid-cols-3'>
    {data.languages.map(language=><li className='max-w-max pl-4 pr-5  hover:bg-orange-100 overflow-hidden max-h-7'>{language.nativeName}</li>)}
</ul>
    </div>
    </>
}