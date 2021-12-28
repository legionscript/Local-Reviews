import { createContext, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const AuthenticationContext = createContext()

export const AuthenticationProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [accessToken, setAccessToken] = useState(null)
	const [error, setError] = useState(null)

	const router = useRouter()

	// Login User
	const login = async({username, password}) => {
		const config = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}

		const body = {
			username,
			password
		}

		try {
			const { data:accessResponse } = await axios.post('http://localhost:3000/api/login', body, config)
			
			if (accessResponse && accessResponse.user) {
				setUser(accessResponse.user)
			}

			if (accessResponse && accessResponse.access) {
				setAccessToken(accessResponse.access)
			}

			router.push('/')
		} catch(error) {
		  if (error.response & error.response.data) {
		  	setError(error.response.data.message)
		  	return      
	      } else if (error.request) {
		    setError('Something went wrong')
		    return  
	      } else {
			setError('Something went wrong')
			return
	      }
	      console.error('Error', error.message);
	      setError('Something went wrong')
	      return
		}
	}

	return (
		<AuthenticationContext.Provider value={{ user, accessToken, error, login }}>
			{children}
		</AuthenticationContext.Provider>
	)
}

export default AuthenticationContext