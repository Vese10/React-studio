import { useState, useEffect } from "react"

function Example(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Conteggio: ${count}`;
  }, [count]);

  return(
    <>
      <p>Conteggio: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </>
  )
}

export default Example