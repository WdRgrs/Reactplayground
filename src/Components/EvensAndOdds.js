import * as React from 'react'

const {useState, useEffect} = React;

function EvensAndOdds() {
    const [userData, setUserData] = useState();
    const [gender, setGender] = useState('')

    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => setUserData(data.results[0]));

    useEffect(() => {
        return () => {
            setGender(userData)
        }
    }, [])

    return (
        <fieldset>
            <legend>
                <h1>Random API</h1>
            </legend>
                <p>User Data: \n Gender: {gender}</p>
                <button onClick={()=> console.log(userData)}>Data</button>
            <p></p>
            
        </fieldset>
    )
}

export default EvensAndOdds
