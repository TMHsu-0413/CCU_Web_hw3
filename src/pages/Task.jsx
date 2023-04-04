import axios from "axios";
import React, { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";

const Task = () => {
  const idRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  const Navigate = useNavigate();
  const params = useParams();
  const cookies = new Cookies();
  var params_name = params.name;
  var params_id = null;
  var EditMode = false;
  
  if (params.id !== undefined){
    EditMode = true
    params_id = params.id
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    if (!EditMode){
      await axios.post(process.env.REACT_APP_API + 'addPost.php',{
        title:title,
        content:content,
        name:cookies.get('Name')
      })
      Navigate('/User/' + params_name)
    }
    else {
      await axios.put(process.env.REACT_APP_API + 'modifyPostbyID.php',{
        ID: idRef.current.value,
        title:title,
        content:content
      })
      Navigate('/User/' + params_name)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(process.env.REACT_APP_API + 'getPostbyID.php', { params: {
        ID: params_id
      }});
      idRef.current.value = res.data[0]["ID"];
      titleRef.current.value = res.data[0]["title"];
      contentRef.current.value = res.data[0]["content"];
    }
    if (params_id !== null){
      fetchData()
    }
  },[])
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f2f2f2]">
      <div className="w-96 rounded" style={{
        boxShadow: "rgba(0,0,0,0.1) 0px 5px 10px 0px"
      }}>
        <div className="py-5 bg-white w-100 flex flex-col justify-center items-center">
          {EditMode && <h2>Post edit</h2>}
          {!EditMode && <h2>Post create</h2>}
          <Form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            {EditMode &&

              <Form.Group className="mb-3" controlId="formId">
                <Form.Label>ID</Form.Label>
                <Form.Control required ref={idRef} className="max-w-xl" type="Text" disabled />
              </Form.Group>
            }

            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={titleRef} className="max-w-xl" type="Text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control required ref={contentRef} as="textarea" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Store
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Task;
