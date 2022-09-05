import axios from "axios"

export const getData = async (user_id) => {
  const {data: user_data} = await  axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
  const {data: user_posts} = await  axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

  console.log("user data: ",user_data)
  console.log("user posts: ", user_posts)
}