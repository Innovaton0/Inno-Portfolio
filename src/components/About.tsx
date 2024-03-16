import React from 'react'

function About() {
  return (
    <div name="about" 
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod assumenda blanditiis veritatis! Asperiores, soluta vel iure impedit pariatur, vero consequuntur praesentium similique harum quaerat possimus animi voluptates! Dolores maiores neque deserunt! Necessitatibus veritatis et dicta blanditiis, repellendus quos fugit.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo error tempore molestiae asperiores aperiam? Quas at fugit quidem non atque culpa quae cum, inventore amet, itaque aut sunt voluptatem vel architecto pariatur autem nostrum delectus, iure perferendis quod debitis esse.
            </p>
        </div>
    </div>
  )
}

export default About