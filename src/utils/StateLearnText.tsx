import { useState } from "react"


export const Text =()=>{
    const [inputText, setInputText]=useState("")
   
    return (
        <>
        <label htmlFor="">Input text</label>
        <input type="text" value={inputText}
        onChange={e => setInputText(e.target.value)} />
        <p>Hello {inputText}</p>
        </>
    )
}