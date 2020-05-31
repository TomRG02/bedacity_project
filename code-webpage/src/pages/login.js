import React from 'react'
import Layout from '../components/layout'

const Login = () => {
    return(
        <Layout>
            <h2>Login Page</h2>
            {/* Login Form */}
            <div>
                <form method="post" action="#">
                    <input type="name" placeholder="Name" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div> {/* End Login Form */}            
        </Layout>
    )
}

export default Login