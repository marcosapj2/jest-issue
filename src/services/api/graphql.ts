import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const uri = `${process.env.REACT_APP_GRAPHQL_API}`

const httpLink = new HttpLink({ uri })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({ addTypename: false }),
})

export default client
