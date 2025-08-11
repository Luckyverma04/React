import react, { useId } from 'react';
function Select({
    options,
    label,
    className,
    ...props
},ref){
const id = useId();
    return(
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select {...props}
            id={id}
            ref={ref}
            className={`w-full h-10 px-3 border border-gray-300 rounded-md
             focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}>
                {options?.map((option)=>(
                    <options key={option} value={option} className='text-gray-700'>
                        {option}
                    </options>
                ))}

            </select>
            </div>
    )
}
export default React.forwardRef(Select);