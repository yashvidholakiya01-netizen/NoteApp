import React, { useState } from 'react'

const App = () => {
  const [Title, setTitle] = useState("")
  const [Notes, setNotes] = useState("")
  const [Tasks, setTasks] = useState([])

  function submitFrom() {
    console.log("tasks Added", { Heading: Title, List: Notes });
    let newTask = [...Tasks];
    newTask.push({ Heading: Title, List: Notes });
    setTasks(newTask);

    console.log(Tasks)
    setTitle("");
    setNotes("");
  }
  return (
    <div>
      {/* 1024(lg/max-lg) thi small mate -> flex nahi lagu pade */}
      {/* 1024(lg) thi small mate -> flex lagu pade */}
      <section className="lg:flex items-center justify-items-center h-screen">
        {/* submit from UI */}
        {/* form for add new task */}
        <div className="lg:w-1/2 h-screen flex items-center justify-center p-4 ">
          <div className='bg-black/70 max-w-sm w-full p-2 rounded-3xl shadow-2xl'>
            <form action="" className='bg-black text-white w-full h-auto rounded-2xl p-6' onSubmit={(e) => { e.preventDefault(); submitFrom(); }}>
              <h1 className='text-center text-4xl font-bold my-1'> Add Your Task </h1>
              <input className='w-full px-4 py-2 bg-[#222] rounded-md my-2 text-white ' type="text" placeholder='Heading' value={Title} onChange={(e) => {
                setTitle(e.target.value)
              }} />
              <textarea row={3} className='w-full px-4 py-2 bg-[#222] rounded-md my-2 text-white ' placeholder='Note..' value={Notes} onChange={(e) => {
                setNotes(e.target.value)
              }}></textarea>
              <input className='w-full bg-white text-black rounded-md font-semibold px-4 py-2 my-2 active:scale-95 active:bg-white/50
             active:text-white' type="submit" value="Add Task" onChange={(e) => {
                  setTasks(e.target.value)
                }}></input>
            </form>
          </div>
        </div>

        {/* div for show all tasks */}
        <div className='lg:w-1/2 w-full h-screen lg:border-l-4 border-dashed border-black max-lg:border-t-4 bg-gray-200 flex items-center justify-center p-4 overflow-auto'>

          {Tasks.map((task,id) => {
            return (
          <div key={id} className="w-full max-w-78 h-78 bg-white rounded-4xl shadow-2xl flex items-end justify-center p-4 relative">
            <img src="https://pngimg.com/d/pin_PNG64.png" alt="pin" className='w-15 h-auto absolute z-10 top-2' />
            <div className='w-full h-60 bg-orange-200 rounded-4xl'>
              <h1 className='text-3xl'>{id + 1}</h1>
              <h1 className='text-2xl font-semibold text-center my-1'>{task.Heading}</h1>
              <p className='text-gray-400 font-medium text-center text-xl'>{task.List}</p>
            </div>
          </div>
          )
          })}
        </div>
      </section>
    </div>
  )
}

export default App