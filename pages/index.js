import React from 'react'
import Head from '../components/head'
import 'isomorphic-fetch'
import "../styles/materialize-v1.0.0/sass/materialize.scss";
import "./index.scss"

const Home = (props) => {
  console.log(props)
  return (
    <div>
      <Head title="Home" />

    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(process.env.API_URL || 'http://localhost:8080')
  const json = await res.json()
  return json
}



export default Home
