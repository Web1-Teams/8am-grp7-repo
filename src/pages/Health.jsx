import Skelaton from "../components/Skelaton.jsx";
import styled from "styled-components";
import img10 from "../img/football.png";
import img11 from "../img/gym.png";
import img12 from "../img/nutrition.png";
import img13 from "../img/basketball.png";

export default function HealthSport() {
  return (
    <div>
    <Skelaton
      src={img10}
      paragraph="Football, also known as soccer in some countries, is the world’s most popular sport, played and watched by millions. It involves two teams of eleven players each, competing to score goals by getting the ball into the opposing team’s net using their feet, head, or body, except their hands. The simplicity of the game and minimal equipment requirements make it accessible to people of all ages and skill levels."
      link="https://www.kooora.com/"
      game="football"
    />
    <Skelaton
      src={img11}
      paragraph="A gym is a dedicated space where people go to improve their physical fitness and overall health. Equipped with a variety of machines, weights, and spaces for cardio, strength training, and flexibility exercises, gyms cater to individuals of all fitness levels"
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