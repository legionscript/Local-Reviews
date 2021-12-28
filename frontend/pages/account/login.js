import { useState, useContext } from 'react'
import { Button, Card, CardContent, makeStyles, TextField, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import AuthenticationContext from '../../context/AuthenticationContext'
import axios from 'axios'
import {useRouter} from 'next/router'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '75px auto',
    maxWidth: '95vw'
  },
  form: {
    marginTop: '35px',
    [theme.breakpoints.down('sm')]: {
    	width: '100%',
    	padding: '0 10px',
    },
    [theme.breakpoints.up('md')]: {
    	width: '50%',
    },
    margin: '0 auto',
  },
  title: {
  	marginBottom: '8px',
  },
  input: {
  	margin: '15px 0',
  },
  linkContainer: {
  	'margin': '15px 0',
  },
  link: {
  	color: '#0645AD',
  	transition: '0.3s',
  	'&:hover': {
  		color: '#3366BB',
  		transition: '0.3s'
  	}
  }
}))

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()
  const router = useRouter()

  const {login} = useContext(AuthenticationContext)

  const submitHandler = e => {
  	e.preventDefault();
  	login({username, password})
  }

  return (
    <Layout>
      <div className={classes.root}>
      	<div className={classes.form}>
      		<Typography variant='h3' className={classes.title}>Login</Typography>
      		<Card>
      			<CardContent>
      				<form onSubmit={submitHandler}>
      					<div className={classes.input}>
      						<TextField label='Username' fullWidth onChange={e => setUsername(e.target.value)} value={username} />
      					</div>

      					<div className={classes.input}>
      						<TextField label='Password' inputProps={{ 'type': 'password' }} fullWidth onChange={e => setPassword(e.target.value)} value={password} />
      					</div>

      					<div className={classes.input}>
      						<Button variant='contained' color='primary' type='submit'>Login</Button>
      					</div>

      					<div className={classes.linkContainer}>
      						<Link href='account/register'>
      							<a className={classes.link}>Don't have an account? Sign Up</a>
      						</Link>
      					</div>
      				</form>
      			</CardContent>
      		</Card>
      	</div>
      </div>
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const { data } = await axios.get('http://localhost:8000/categories')

//   return {
//     props: {
//       categories: data.results
//     }
//   }
// }