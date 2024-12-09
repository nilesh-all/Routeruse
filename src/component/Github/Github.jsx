import React, { useEffect, useState } from "react";

function Github(){
    const [data,setData] = useState([])
useEffect(() => {
    fetch('https://api.github.com/users/nilesh-all')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        setData(data);
    })
},[])

    return<>
   <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto m-4">
  <div className="flex flex-col items-center text-center">
    <img
      src={data.avatar_url}
      alt="profile"
      className="w-32 h-32 rounded-full border-gray-300"
    />
    <h1 className="text-2xl font-bold mt-4">{data.name || "Your Name"}</h1>
    <p className="text-gray-500">{data.bio || "Your bio goes here!"}</p>
    <a href="nileshmagardehere@gmail.com">
    <p className="text-gray-400">nileshmagardehere@gmail.com</p>
    </a>
  </div>
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
    <div className="grid grid-cols-3 gap-4">
      {["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS"].map(
        (tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 text-sm font-medium py-1 px-3 rounded-lg"
          >
            {tech}
          </span>
        )
      )}
    </div>
  </div>
  <div className="flex justify-between items-center mt-6 text-center">
    <div>
      <h3 className="text-xl font-semibold">{data.followers || 0}</h3>
      <p className="text-gray-500">Followers</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold">{data.following || 0}</h3>
      <p className="text-gray-500">Following</p>
    </div>
  </div>
</div>
       
    </>
}

export default Github