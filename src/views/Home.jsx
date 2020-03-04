import React, { Component } from 'react'
import PostList from '../components/PostList'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    setInterval(async () => {
      this.setState({
        loading: true
      })

      const response = await window.fetch('https://api.github.com/users/kodemia/repos')
      const payload = await response.json()
      const posts = payload.map((repos) => ({
        img: repos.owner.avatar_url,
        name: repos.name,
        private: repos.private,
        ownerLogin: repos.owner.login,
        createdAt: repos.created_at,
        updatedAt: repos.updated_at
      }))

      this.setState({
        posts,
        loading: false
      })
    }, 2000)
  }

  render() {

    return <PostList list={this.state.posts} />
  }
}

export default Home
