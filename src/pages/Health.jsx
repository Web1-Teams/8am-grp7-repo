import Skelaton from "../components/Skelaton.jsx";
import styled from "styled-components";
import img10 from "../img/football.png";
import img11 from "../img/gym.png";
import img12 from "../img/nutrition.png";
import img13 from "../img/basketball.png";

export default function HealthSport() {
  return (
    <div className="row ">
    <Skelaton
      src={img10}
      paragraph="Football, also known as soccer, is a globally loved team sport played on a rectangular field. Two teams of eleven players each compete to score goals by getting the ball into the opponent’s net without using their hands, except for the goalkeeper. The game is fast-paced, requiring skill, strategy, and teamwork to succeed."
      link="https://www.kooora.com/"
      game="football"
    />
    <Skelaton
      src={img11}
      paragraph="A gym is a place designed to help individuals improve their physical fitness and overall health. It is equipped with machines, weights, and open areas for cardio, strength training, and flexibility exercises. Gyms also offer classes, personal training, and support for people of all fitness levels, promoting an active and healthy lifestyle."
      link="https://thetrackbangkok.com/"
      game="gym"
    />
    <Skelaton
      src={img12}
      paragraph="Nutrition is the science of how food affects the body, providing the essential nutrients needed for energy, growth, and overall health. A balanced diet, rich in fruits, vegetables, whole grains, proteins, and healthy fats, helps maintain optimal physical and mental well-being."
      link="https://www.calculator.net/"
      game="nutrition"
    />
    <Skelaton
      src={img13}
      paragraph="Basketball is a fast-paced team sport played on a rectangular court, where two teams of five players each compete to score points by shooting a ball through the opponent’s hoop."
      link="https://www.nba.com/"
      game="basketball"
    />
  </div>
  )
}