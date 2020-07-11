// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="post">
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch('http://localhost:3000/api/hello')
  // const posts = await res.json()
  const posts = [
    {
      title: "haaefe",
      body: "dodawduueueueuueueue"
    },
    {
      title: "ert",
      body: "35433423"
    }
  ]

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
