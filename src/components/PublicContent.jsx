import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PublicContent = () => {
  const [post, setPost] = useState([])
  const name = useParams().name;

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(process.env.REACT_APP_API + 'getPostbyName.php', { params: { Name: name } })
      res.data.map((data) => {
        let newObj = {
          ID: data.ID,
          title: data.title,
          content: data.content
        }
        setPost((prevPost) => [
          ...prevPost,
          newObj
        ])
      })
    }
    fetchData()

    // clear Post 
    return (() => {
      setPost([])
    })
  }, [name])
  return (
    <div className="mt-5 flex w-100 flex-col self-start pl-10">
      {post.map((data) => {
        return (
          <div key={data.ID}>
            <h2 className="text-5xl">{data.title}</h2>
            <h2 className="text-3xl">{data.content}</h2>
            <hr className="w-100" />
          </div>
        )
      })}
    </div>
  )
}

export default PublicContent;
