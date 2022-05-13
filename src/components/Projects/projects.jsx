import React from 'react'
import './projects.css'
import IMG1 from '../../assets/chatbot.jpg'
import IMG2 from '../../assets/spacewalker.png'
import IMG3 from '../../assets/Hellobot.png'
import IMG4 from '../../assets/Arduino_Uno.jpg'

const projects = () => {
  return (
    <section id='projects'>
      <h5>My projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG1} alt="image" /></div>
          <h3>Voice assistant</h3>
          <h5 className='textlight'>Made using AI, ML, NLP and Python</h5>
          <a href="https://www.youtube.com/watch?v=BEUFMG3K2Qs" className='btn'>Watch Video</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG2} alt="image" /></div>
          <h3>Space Walker</h3>
          <h5 className='textlight'>Made using C#, Unity3d and Blender</h5>
          <a href="https://play.google.com/store/apps/details?id=com.Pranay.SpaceWalker" className='btn'>Install</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG3} alt="image" /></div>
          <h3>Discord Bot</h3>
          <h5 className='textlight'>Made using Python and Discord library</h5>
          <a href="https://discord.com/api/oauth2/authorize?client_id=874130980376555590&permissions=8&scope=bot" className='btn'>Add to Discord</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG4} alt="image" /></div>
          <h3>Ardiuno Robots</h3>
          <h5 className='textlight'>Made Robots like BT-Rover, Obstacle avoiding, Automatic Plant Irrigation system, Smart Dustbin</h5>
          <a href="https://www.google.com/search?nfpr=1&q=arduino+robots&spell=1&sa=X&ved=2ahUKEwjm3MPu99v3AhWUSmwGHV5oBzgQBSgAegQIARAy&biw=1920&bih=935&dpr=1"className='btn'>Google Search</a>
        </article>
      </div>
    </section>
  )
}

export default projects