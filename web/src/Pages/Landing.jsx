import { StatusBar } from 'expo-status-bar';
import React, { createElement } from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks'

import { StyleSheet, Text, View } from 'react-native';

const client = new ApolloClient({
  uri: 'https://workers-graphql-server.gabtorres.workers.dev/',
})

const GET_POSTS = gql`
  {
    post {
      id
      text
    }
  }
`

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  return (
    <View>
        {data.post.map( ({ text }) => (
          <h3>{text}</h3>
        ))}
    </View>
  );
}

function AddPost() {
  let input
  const [createPost] = useMutation(
    gql `
      mutation createPost($text: String!) {
        createPost(text: $text){
          id
          text
        }
      }
    `,
    {
      update(
        cache,
        {
          data: { createPost },
        },
      ) {
        const { post } = cache.readQuery({query: GET_POSTS})
        cache.writeQuery({
          query: GET_POSTS,
          data: { post: [createPost].concat(post)}
        })
      }
    }
  )

  return (
    <View>
      <form
        onSubmit={e => {
          e.preventDefault()
          createPost({ variables: { text: input.value } })
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Post</button>
      </form>
    </View>
  )
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Posts/>
      <AddPost/>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
