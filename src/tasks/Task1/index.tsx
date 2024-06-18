import React, { useState } from 'react'
import './index.scss'

const Index: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    function handleName(e) {
        setName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Submitted name: ' + name)
        console.log('Submitted email: ' + email)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Task1</h2>
                <div className="nameInput">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id='name'
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div className="emailInput">
                    <label htmlFor="email">E-mail: </label>
                    <input
                        type="email"
                        id='email'
                        value={email}
                        onChange={handleEmail}
                    />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Index
