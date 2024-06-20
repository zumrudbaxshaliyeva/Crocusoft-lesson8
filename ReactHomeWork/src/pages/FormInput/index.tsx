import React, { useState } from "react"
import '@/pages/FormInput/index.module.scss'

interface IFormData{
  name: string,
  email: string
}

const Form: React.FC = () => {
    const [data, setData] = useState<IFormData>({name: '', email: ''});

    function handleInputValue (event:React.ChangeEvent<HTMLInputElement>): void{
      const {name, value} = event.target
      setData({...data, [name]: value});
    }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>):void{
      e.preventDefault();
      console.log(data)
    }

  return (
    <React.Fragment>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={data.name} onChange={handleInputValue}/>
            <input type="email" name="email" value={data.email} onChange={handleInputValue}/>
            <button type="submit">Submit</button>
        </form>
    </React.Fragment>
  )
}

export default Form