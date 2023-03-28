import { API } from 'aws-amplify'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type Post = {
  id: string
  name: string
}
export default function Index() {
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    async function fetchData() {
      console.log('fetchData...')
      const data = await API.get('jiboapi', '/posts', {})
      console.log('data', data)
      setPosts(data.items)
    }
    if (router.isReady) fetchData()
  }, [router.isReady])

  return (
    <>
      Posts:
      <ul>
        {posts &&
          posts.map(post => (
            <li key={post.id}>
              {post.id} - {post.name}
            </li>
          ))}
      </ul>
    </>
  )
}
