import { Grid, Card, CardHeader, Avatar, makeStyles } from '@material-ui/core'
import Layout from '../components/Layout'
import axios from 'axios'
import {useRouter} from 'next/router'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '75px auto',
    maxWidth: '95vw'
  },
  categoryCard: {
    cursor: 'pointer'
  }
}))

export default function Home({ categories }) {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Layout>
      <Grid container className={classes.root} spacing={3}>
      {categories.map(category => (
        <Grid item xs={12} md={4}>
          <Card onClick={() => router.push(`/categories/${category.slug}`)} className={classes.categoryCard}>
            <CardHeader
              avatar={
                <Avatar aria-label='category'>
                  C
                </Avatar>
              }
              title={`${category.name}`}
              subheader={`See all ${category.name} business`}
            />
          </Card>
        </Grid>
      ))}
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:8000/categories')

  return {
    props: {
      categories: data.results
    }
  }
}
