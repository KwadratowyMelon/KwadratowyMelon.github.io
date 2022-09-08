import React from 'react'
import './mario.css'
import SS from '../../assets/mario_stage.png'


const Mario = () => {
  return (
    <section id="mario">
      <h5>easy javascript game made with kaboomjs (pc only)</h5>
      <h2>Wanna play Mario?</h2>
      
      <div className="container mario__container">
        <img src={SS} alt="mario game level screenshot" className="mario__image"/>
        <a href="https://kwadratowymelon.github.io/game.html" className="btn btn-primary">Play</a>
      </div>
    </section>
  )
}

export default Mario