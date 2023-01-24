/** @format */

import React from "react";
import "./About.css";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonIcon from "@material-ui/icons/Person";
const About = () => {
  return (
    <section className="about"  id ="about">
      <div className="cont1">
        <h4>Welcome To My Website</h4>
        <div className="paragraph">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            temporibus accusamus placeat recusandae laudantium id quia obcaecati
            explicabo ea commodi.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            neque, delectus labore incidunt voluptate possimus? Necessitatibus
            amet nobis sapiente recusandae illo omnis quam quis corrupti.
            Eveniet veniam velit sunt pariatur..
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae est
            molestias illum illo ducimus nisi molestiae amet quae, dolor fugiat
            perferendis facere quibusdam repudiandae, ut modi obcaecati.
          </p>
        </div>
      </div>
      <div className="cont2">
        <div className="means">
          <div className="moneyIcon">
            <MonetizationOnIcon />
          </div>
          <h4>Means of Living</h4>

          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="transform">
          <div className="personIcon">
            <PersonIcon />
          </div>
          <h4>Transform Lives</h4>

          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
