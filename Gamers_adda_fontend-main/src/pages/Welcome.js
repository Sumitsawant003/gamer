import React from 'react'

export default function Welcome() {

    setTimeout(() => {
        console.log('3min');
        window.location.href = "/login";
    }, 3000);


    return (
        <>

            <div id='welcome_into' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>Welcome Back!!!</h2>
                </div>
            </div>

        </>
    )
}
