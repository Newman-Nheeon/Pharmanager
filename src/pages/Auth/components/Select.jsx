import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { useState } from 'react'
function Select(props) {
    const [isOpen, setIsOpen] = useState(false)
    const {className, ...others} = props
    return (
        <div className={`relative ${className}`}>
                <div className='absolute right-6 top-[50%] -translate-y-[50%]' >
                    {!isOpen && <MdKeyboardArrowDown className='text-slate-400' size={25}/>}
                    {isOpen && <MdKeyboardArrowUp className='text-slate-400' size={25}/>}

                </div>
               <select {...others} className="appearance-none w-full focus:outline-none p-2 bg-transparent"  onClick={() => setIsOpen(!isOpen)}>
                    {props.children}
                </select>
                </div>
    )
}

export default Select
