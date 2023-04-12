import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from 'react-bootstrap';
import Cookies from "universal-cookie";

const PrivateContent = () => {
  const [post, setPost] = useState([])
  const cookies = new Cookies();
  const Navigate = useNavigate()
  const params_name = useParams().name

  const handleCreate = () => {
    Navigate('/hw3/Task/' + params_name)
  }

  const handleModify = (ID) => {
    Navigate('/hw3/Task/' + params_name + '/' + ID);
  }

  const handleDelete = async (currentID) => {
    await axios.delete(process.env.REACT_APP_API + 'delPostbyID.php', { data: { ID: currentID } })
    window.location.reload()
  }

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(process.env.REACT_APP_API + 'getPostbyName.php', { params: { Name: params_name } })
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
  }, [params_name])
  return (
    <div className="mt-5 flex flex-col w-100 justify-between pl-10">
      {post.map((data) => {
        return (
          <>
            <div key={data.ID} className="w-100 flex justify-between">
              <div>
                <h2 className="text-5xl font-bold">{data.title}</h2>
                <h2 className="text-3xl">{data.content}</h2>
              </div>
              <div className="flex gap-2 justify-center items-center pr-4">
                <Button variant="success" onClick={handleCreate}>新增</Button>
                <Button variant="secondary" onClick={() => handleModify(data.ID)}>修改</Button>
                <Button variant="danger" onClick={() => handleDelete(data.ID)}>刪除</Button>
              </div>
            </div>
            <hr />
          </>
        )
      })}
    </div>
  )
}

export default PrivateContent;
