import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-yellow-700" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-t from-yellow-200 via-yellow-600 to-yellow-800  blur-0 " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-yellow-700">SUBAN</span>
          </h1>

          <h3 className="text-3xl font-semibold text-gray-500 mb-6 max-w-2xl my-6">
            Creating dynamic, user-friendly, and
            <br className="sm:block hidden" />
            responsive websites with a focus on seamless functionality and 
            aesthetics.
          </h3>

          <button
            className="bg-gradient-to-r from-[#f1f1f1cc] to-[#9e8600fb] text-yellow-100 font-bold py-3 px-6 rounded-lg hover:bg-gradient-to-l hover:from-[#915EFF] hover:to-[#6a5acd] transition transform hover:scale-105 hover:shadow-lg flex items-center gap-2 hover:text-white"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            
          >
            <span className="text-yellow-800 hover:text-white ">View M<span className="text-yellow-50">y Work</span></span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
