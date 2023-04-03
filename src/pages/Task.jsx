import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap"

const Task = () => {
  const idRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()
  var EditMode = true
  const handleSubmit = () => {
    return 1
  }
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
