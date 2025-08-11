import React,{useId} from "react";
// function Input({}){
//     return (
//         <div>Input</div>
//     )
// }
const Input = React.forwardRef(function Input({label,type ='text',className ='',...props},ref){
    const id = useId();
return 
<div className="w-full">
    {label && <label className="inline-block mb-1 pl-1"
    htmlFor={id}>
        {label}
    </label>
    }
    <input
    type ='text'
    className={`w-full border border-gray-300
         rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
         ref={ref}
            id={id}
            {...props}
    />
</div>
})
export default Input;