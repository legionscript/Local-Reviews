import { useState } from 'react'
import Layout from '../../../../components/Layout'
import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '75px',
    maxWidth: '95vw' 
  },
  form: {
    marginTop: '35px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0 10px',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
    margin: '0 auto'
  },
  input: {
    margin: '15px 0'
  }
}))

export default function AddReviewPage({ business }) {
  const [stars, setStars] = useState('3')
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')

  const classes = useStyles()

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

  const submitHandler = () => {
    console.log(stars)
    console.log(title)
    console.log(comment)

    const csrftoken = getCookie('csrftoken');

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    }

    const body = {
      title,
      content: comment,
      stars,
      business: business.url
    }

    const res = axios.post('http://localhost:8000/reviews/', body, config)

    console.log(res)
  }

  return (
    <Layout>
      <div className={classes.root}>
    {/* TODO */}
        <Typography variant='h3'>Creating a Review For: {business.name}</Typography>
      </div>

      <div className={classes.form}>
        <FormControl fullWidth className={classes.input}>
          <InputLabel id='stars'>Stars Rating Out of 5</InputLabel>
          <Select
          labelId='stars'
          id='starsComponent'
          label='Stars'
          onChange={e => setStars(e.target.value)}
          value={stars}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={1.5}>1.5</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={2.5}>2.5</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={3.5}>3.5</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={4.5}>4.5</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth className={classes.input}>
          <TextField
            label='Title'
            id='titleComponent'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </FormControl>

        <FormControl fullWidth className={classes.input}>
          <TextField
            label='Tell us abouty your experience here'
            id='commentComponent'
            multiline
            minRows={4}
            onChange={e => setComment(e.target.value)}
            value={comment}
          />
        </FormControl>

        <Button variant='contained' color='primary' onClick={submitHandler}>Submit Review</Button>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: {slug} }) {
  const { data } = await axios.get(`http://localhost:8000/businesses?slug=${slug}`)

  return {
    props: {
      business: data.results[0] || null,
    }
  }
}
