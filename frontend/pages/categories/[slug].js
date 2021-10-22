import React, { useState } from 'react';
import Layout from '../../components/Layout'
import AverageReview from '../../components/AverageReview'
import { Box, Button, Divider, InputLabel, Select, FormControl, MenuItem, Card, CardContent, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import axios from 'axios'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '75px',
    maxWidth: '95vw'
  },
  subtitle: {
    color: 'grey'
  },
  card: {
    cursor: 'pointer'
  },
  filterContainer: {
    margin: '0 25px'
  },
  clearFilters: {
    marginTop: '15px'
  }
}))

const Category = ({ category, averageReviews }) => {
  const classes = useStyles()
  const router = useRouter()

  const [price, setPrice] = useState('')
  const [numReviews, setNumReviews] = useState('')
  const [avgReview, setAvgReview] = useState('')

  const handleBusinessClick = business => {
    router.push(`/business/${business.slug}`)
  }

  const handleClearFilters = () => {
    setPrice('')
    setNumReviews('')
    setAvgReview('')
  }

  return (
    <Layout>
    	<Grid container className={classes.root}>
        <Grid item xs={12} md={3}>
          <Box className={classes.filterContainer}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant='h5'>Filter the Results</Typography>
                <Divider />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='price'>Price</InputLabel>
                  <Select
                    labelId='price'
                    id='priceInput'
                    label='Price'
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                  >

                  <MenuItem value={'$'}>Very Cheap</MenuItem>
                  <MenuItem value={'$$'}>Cheap</MenuItem>
                  <MenuItem value={'$$$'}>Moderate</MenuItem>
                  <MenuItem value={'$$$$'}>Expensive</MenuItem>
                  <MenuItem value={'$$$$$'}>Very Expensive</MenuItem>
              </Select>
              </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='numReviews'>Number of Reviews</InputLabel>
                  <Select
                    labelId='numReviews'
                    id='numReviewsInput'
                    label='Number of Reviews'
                    onChange={e => setNumReviews(e.target.value)}
                    value={numReviews}
                  >

                  <MenuItem value={5}>5+</MenuItem>
                  <MenuItem value={10}>10+</MenuItem>
                  <MenuItem value={15}>15+</MenuItem>
              </Select>
              </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='avgReview'>Average Review</InputLabel>
                  <Select
                    labelId='avgReview'
                    id='avgReviewInput'
                    label='Average Review'
                    onChange={e => setAvgReview(e.target.value)}
                    value={avgReview}
                  >

                  <MenuItem value={3}>3+ Stars</MenuItem>
                  <MenuItem value={4}>4+ Stars</MenuItem>
                  <MenuItem value={5}>5 Stars</MenuItem>
              </Select>
              </FormControl>
              </Grid>

              <Grid item>
                <Button variant='outlined' color='secondary' className={classes.clearFilters} onClick={handleClearFilters}>Clear Filters</Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
        {category.business.map(business => (
          (!price || price === business.price_range) && (!numReviews || business.reviews.length >= numReviews) && (!avgReview || averageReviews[business.url] >= avgReview) && (
            <Card className={classes.card} onClick={() => handleBusinessClick(business)}>
              <Box>
                <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant='h5'>{business.name}</Typography>
                    <Typography variant='subtitle1'>{business.price_range}</Typography>
                    <Link variant='subtitle1' href={business.website}>{business.website}</Link>
                    <Typography variant='subtitle1'>{business.phone}</Typography>
                    <Typography variant='subtitle1' className={classes.subtitle}>{business.description}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <AverageReview value={averageReviews[business.url]} />
                    <Typography variant='subtitle1'>{business.hours}</Typography>
                    <Typography variant='subtitle1'>{business.street_address} {business.city}, {business.region} {business.postal_code} {business.country}</Typography>
                  </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Card>
          )
        ))}
        </Grid>
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps({ query: {slug} }) {
  const { data } = await axios.get(`http://localhost:8000/categories?slug=${slug}`)

  let avgReviews = {}

  if (data && data.results && data.results[0].business) {
    for (let i = 0; i < data.results[0].business.length; i++) {
      let totalReviewsStars = 0;
      for (let j = 0; j < data.results[0].business[i].reviews.length; j++) {
        totalReviewsStars = totalReviewsStars + Number(data.results[0].business[i].reviews[j].stars)
      }

      const inverse = 1 / 2

      avgReviews[data.results[0].business[i].url] = Math.round((totalReviewsStars / data.results[0].business[i].reviews.length) / inverse) * inverse
    }
  }

  console.log(avgReviews)

  return {
    props: {
      category: data.results[0] || null,
      averageReviews: avgReviews
    }
  }
}

export default Category;