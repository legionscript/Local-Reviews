import Layout from '../../../components/Layout'
import AverageReview from '../../../components/AverageReview'
import { Button, Card, Grid, Link, List, ListItem, ListItemText, makeStyles, Typography } from "@material-ui/core";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '75px',
    maxWidth: '95vw' 
  },
  addReview: {
    marginTop: '15px'
  },
  description: {
    paddingTop: '15px'
  }
}))

export default function BusinessPage({business, averageReview}) {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <Typography variant='h2'>{business.name}</Typography>
          <Typography variant='h4'>{business.price_range}</Typography>
          <AverageReview value={averageReview} />

          <div className={classes.addReview}>
            <Button variant='contained' color='primary'>Write a Review</Button>
          </div>

          <div className={classes.description}>
            <Typography variant='p'>{business.description}</Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <List>
              <ListItem>
                <ListItemText primary='Website' secondary={business.website} />
              </ListItem>

              <ListItem>
                <ListItemText primary='Address' secondary={`${business.street_address} ${business.city}, ${business.region}`} />
              </ListItem>

              <ListItem>
                <ListItemText primary='Phone' secondary={business.phone} />
              </ListItem>

              <ListItem>
                <ListItemText primary='Hours' secondary={business.hours} />
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps({ query: {slug} }) {
  const { data } = await axios.get(`http://localhost:8000/businesses?slug=${slug}`)

  let avgReview = null

  if (data && data.results && data.results[0].reviews) {
    let totalReviewsStars = 0
    for (let i = 0; i < data.results[0].reviews.length; i++) {
      totalReviewsStars = totalReviewsStars + Number(data.results[0].reviews[i].stars)
    }

    const inverse = 1 / 2

    avgReview = Math.round((totalReviewsStars / data.results[0].reviews.length) / inverse) * inverse
  }

  return {
    props: {
      business: data.results[0] || null,
      averageReview: avgReview
    }
  }
}
