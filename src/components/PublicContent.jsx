import React from "react";

const PublicContent = () => {
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
    <div className="mt-5 flex w-100 flex-col self-start pl-10">
      {post.map((data) => {
        return (
          <>
            <h2 className="text-5xl">{data.title}</h2>
            <h2 className="text-3xl">{data.content}</h2>
            <hr className="w-100" />
          </>
        )
      })}
    </div>
  )
}

export default PublicContent;
