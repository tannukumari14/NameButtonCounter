"use client"
import React, { useState } from 'react'
import World from "./world.js";
import Score from "./score.js";


function Page() {
	const [count, setCount] = useState({
	sonam:1,
	tanu:2,
	deepu:3,
	ruksan:4
})

	const increaseCount = (person) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [person]: prevCounts[person] + 1,
    }));
  };
  
  return (
     <div>
      <h1>hello world</h1>
      <World name="sonam" color="red" onClick={() => increaseCount('sonam')} />
      <World name="tanu" color="blue" onClick={() => increaseCount('tanu')} />
      <World name="deepu" color="pink" onClick={() => increaseCount('deepu')} />
      <World name="ruksana" color="yellow" onClick={() => increaseCount('ruksana')} />
      <Score count={count} />
    </div>
  );
}

export default Page;

