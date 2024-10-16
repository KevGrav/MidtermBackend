import React, {useState} from 'react'

const Reg = () => {
    const [data, setData] = useState({})
    
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
      <>
      <div>Stock Room</div>
        <input name='item' placeholder='item' onChange={(e) => handleChange(e)}></input>
        <input name='quantity' placeholder='quantity' onChange={(e) => handleChange(e)}></input>
        <input name='first' placeholder='first' onChange={(e) => handleChange(e)}></input>



      </>
  )
}

export default Reg