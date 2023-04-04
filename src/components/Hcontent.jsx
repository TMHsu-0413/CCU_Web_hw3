import React, { useEffect, useState } from "react";
import axios from "axios";

const Hcontent = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(process.env.REACT_APP_API + 'get3posts.php')
      res.data.map((data) => {
        let newObj = {
          "Title": data.Title,
          "Content": data.Content
        }
        setPost((prevPost) => [
          ...prevPost,
          newObj
        ])
      })
    }
    fetchData()
  }, [])
  return (
    <div className="bg-[#e3e3e3] p-5 flex flex-col flex-grow items-center">
      <h2 className="text-4xl">Welcome to Life blog</h2>
      <h2 className="text-3xl">HomePage</h2>
      <div className="mt-5 gap-2 grid grid-rows-1 grid-cols-2">
        <img src={require('../image/meme1.jpeg')} width="300px" height="300px" />
        <img src={require('../image/meme2.jpg')} width="300px" height="300px" />
      </div>
      <h2 className="mt-5">Latest 3 post</h2>
      <div className="flex w-100 flex-col self-start pl-10">
        {post.map((data) => {
          return (
            <>
              <h2 className="text-5xl">{data.Title}</h2>
              <h2 className="text-3xl">{data.Content}</h2>
              <hr className="w-100" />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Hcontent;
