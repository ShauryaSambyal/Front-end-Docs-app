import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

  const ref = useRef(null)


  const data = [
    {desc: 'Most Awaited Download of All Time available to you for just 0.9mb', 
    filesize: ".9mb", 
    close: true, 
    tag: {isOpen: false, tagTitle: 'Download Now', tagColor: 'green'}
  },
  {desc: 'A 3mb patch update for Free Fire India', 
    filesize: "3mb", 
    close: false, 
    tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'blue'}
  },
  {desc: 'Upload the snippets of your code and view them by arranging them in any order', 
    filesize: "Max size: 10mb", 
    close: false, 
    tag: {isOpen: true, tagTitle: 'Upload', tagColor: 'green'}
  },
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground