import React,{useRef, useEffect} from 'react'
import './programtag.css'

const ProgramTag = () => {
  const programTage =useRef(null);

  useEffect(() => {
    programTage.current.focus();
  },[])
  return (
    <div className="program-container">
      <div>
        <button defaultValue={"will focus"} className="tag_all">All</button>
      </div>
      <div>
        <button ref={programTage} defaultValue={"won't focus"} className="tag_feature">Featured</button>
      </div>
      <div>
        <button ref={programTage} defaultValue={"won't focus"} className="tag_feature">Design</button>
      </div>
      <div>
        <button ref={programTage} defaultValue={"won't focus"} className="tag_feature">Development</button>
      </div>
    </div>
  )
}

export default ProgramTag
