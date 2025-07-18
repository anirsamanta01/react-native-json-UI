import React from 'react'
import Layout from './Layout'
import Account from '../screens/Account'
import json from '../json/account.json'

const Home = () => {
  return (
  <Layout>
   <Account e={json} />
  </Layout>
  )
}

export default Home
