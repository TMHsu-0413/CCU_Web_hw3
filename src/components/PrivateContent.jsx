import React from "react";
import {Button} from 'react-bootstrap';

const PrivateContent = () => {
  const post = [{
    title: "asd",
    content: "zxc"
  },
  {
    title: "qwe",
    content: "kje"
  },
  ]
  return (
    <div className="mt-5 flex flex-col w-100 justify-between pl-10">
      {post.map((data) => {
        return (
          <>
            <div className="w-100 flex justify-between">
              <div>
                <h2 className="text-5xl font-bold">{data.title}</h2>
                <h2 className="text-3xl">{data.content}</h2>
              </div>
              <div className="flex gap-2 justify-center items-center pr-4">
                <Button variant="success">新增</Button>
                <Button variant="secondary">修改</Button>
                <Button variant="danger">刪除</Button>
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
