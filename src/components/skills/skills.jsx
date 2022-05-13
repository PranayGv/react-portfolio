import React from 'react'
import './skills.css'
import { AiFillStar } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'

const skills = () => {
  return (
    <section id='skills'>
      <h5>What skills I have</h5>
      <h2>My skills</h2>

      <div className="container skills__container">
        <div className="skills_web">
          <h3>Web Development</h3>
          <article className="skills__content">
            <div className="skills__details">
              <BsCheckCircleFill className='skills__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></small></div>
            </div>
            <div className="skills__details">
              <BsCheckCircleFill className='skills__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light"><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></small>
              </div>
            </div>
            <div className="skills__details">
              <BsCheckCircleFill className='skills__details-icon'/>
              <div>
                <h4>JS / JQuery</h4>
                <small className="text-light"><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></small>
              </div>
            </div>
            <div className="skills__details">
              <BsCheckCircleFill className='skills__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className="text-light"><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></small>
              </div>
            </div>
            <div className="skills__details">
              <BsCheckCircleFill className='skills__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light"><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></small>
              </div>
            </div>
          </article>
        </div>
        <div className="skills_programming">
          <h3>Programming</h3>
          <article className="skills__content">
            <div className="skills__details">
              <BsCheckCircleFill className='skills__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className="text-light"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></small>
              </div>
            </div>
            <div className="skills__details">
              <BsCheckCircleFill className='skills__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className="text-light"><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></small>
              </div>
            </div>
            <div className="skills__details">
              <BsCheckCircleFill className='skills__details-icon'/>
              <div>
              <h4>JS / JQuery</h4>
              <small className="text-light"><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></small>
              </div>
            </div>
            <div className="skills__details">
              <BsCheckCircleFill className='skills__details-icon'/>
              <div>
              <h4>c#</h4>
              <small className="text-light"><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></small>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section >
  )
}
export default skills