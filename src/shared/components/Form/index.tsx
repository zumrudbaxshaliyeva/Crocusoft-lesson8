// TASK 1

import React, { useState } from 'react'

const Form: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' value={name} onChange={handleNameChange}/>
                <input type="email" placeholder='Email' value={email} onChange={handleEmailChange}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form
