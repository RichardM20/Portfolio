import "../styles/about.css";

const AboutFragment = ({id}) => {
  return (
    <>
      <div  id={id} className="about-me--container">
        <p>About Me</p>
        <div className="about-me--card">
          <p>
            I have over 2 years of experience in software development, and my
            area of expertise lies in the{" "}
            <a href="https://flutter.dev/" target="_blank">
              Flutter
            </a>
            framework. I thrive on tackling challenges that seem almost
            impossible to overcome, pushing myself to surpass them each day. I
            enjoy sharing my opinions and expressing my perspective in any given
            situation. When I encounter a roadblock in finding a solution, I try
            to step back from the problem, take a breather, and return stronger.
            I am constantly learning and always open to others' opinions and
            critiques, as I believe they provide valuable opportunities for
            growth and self-improvement, both personally and professionally.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutFragment;
