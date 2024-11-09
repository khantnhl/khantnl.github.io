import React from "react";
import {Typewriter} from "react-simple-typewriter"; // Use the correct default import

const Home = () => {
    return (
    <section className="intro">
      <h1>
        <Typewriter
          words={["Hi, my name is Khant."]}
          typeSpeed={100}
          delaySpeed={1000}
        />
      </h1>
      <p>
        <Typewriter
          words={["I am passionate about Deep Learning and Cyber Security."]}
          typeSpeed={50}
          deleteSpeed={10}
          delaySpeed={1000}
          loop={false}
        />
      </p>
    </section>
    )
}

export default Home;