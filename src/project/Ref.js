import { useRef ,useEffect} from "react";

const Example=()=>{
    const inputRef=useRef();

    const focusInput =()=>{
        inputRef.current.focus()
        
    }
    useEffect(() => {
        inputRef.current.focus()
    }, []);

    return(
        <di>
            <h1>USE REF EXAMPLE USING INPUT </h1>
            <input ref={inputRef} type="text"/>
            <button onClick={focusInput}>focus input</button>
        </di>
    )
}


export default Example;