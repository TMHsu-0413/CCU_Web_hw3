import React from "react";

const Hcontent = () => {
  const post =[{
    title:"asd",
    content:"zxc"
    },
    {
      title:"qwe",
      content:"kje"
    },
  ]
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
              <h2 className="text-5xl">{data.title}</h2>
              <h2 className="text-3xl">{data.content}</h2>
              <hr className="w-100" />
            </>
        )})}
      </div>
    </div>
  )
}

export default Hcontent;
