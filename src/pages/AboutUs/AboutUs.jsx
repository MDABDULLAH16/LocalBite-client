import React, { useEffect } from "react";
 // Adjust path as needed
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Container from "../../components/Container/Container";
import { Link } from "react-router";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - default
    });
  }, []);

  return (
    <div className="bg-base-200 py-16">
      <Container>
        {/* Header Section */}
        <header className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold text-primary mb-4 font-poppins">
            About LocalBite
          </h1>
          <p className="text-xl   font-light max-w-3xl mx-auto">
            Connecting food enthusiasts through authentic experiences and local
            flavors.
          </p>
        </header>

        {/* Our Story Section */}
        <section className="mb-16">
          <div
            className="card lg:card-side bg-base-100 shadow-xl rounded-lg overflow-hidden"
            data-aos="fade-right"
          >
            <figure className="lg:w-1/2">
              <img
                src="https://i.ibb.co.com/bgtrb3Jw/portrait-indian-man-bazaar.jpg"
                alt="Diverse street food spread"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body lg:w-1/2 p-8">
              <h2 className="card-title text-3xl font-bold text-secondary mb-4">
                Our Story
              </h2>
              <p className="text-lg   leading-relaxed">
                <strong className="text-primary">LocalBite</strong> was born out
                of a simple observation: the best food isn't always found in
                five-star hotels; it’s often tucked away in a side alley, served
                from a vibrant street cart, or shared across a family dinner
                table.
              </p>
              <p className="text-lg   leading-relaxed mt-4">
                We realized that while large review platforms exist, they often
                lose the "local soul." We built LocalBite to give food
                enthusiasts a dedicated space to celebrate{" "}
                <strong className="text-primary">honest flavors</strong> and{" "}
                <strong className="text-primary">authentic experiences</strong>.
                Whether it’s a hidden gem in your neighborhood or a home-cooked
                masterpiece, LocalBite is where those stories are told.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-16" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-center text-secondary mb-10 font-poppins">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body items-center text-center">
                <div className="text-5xl text-primary mb-4">
                  <i className="fa-solid fa-utensils"></i>{" "}
                  {/* Example: Font Awesome icon */}
                </div>
                <h3 className="card-title text-2xl font-semibold text-neutral mb-2">
                  Discover Hidden Gems
                </h3>
                <p className=" ">
                  Use our community-driven feed to find street food and local
                  eateries that aren't on the mainstream radar.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-body items-center text-center">
                <div className="text-5xl text-primary mb-4">
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <h3 className="card-title text-2xl font-semibold text-neutral mb-2">
                  Authentic Reviews
                </h3>
                <p className=" ">
                  We prioritize honesty. Our platform allows users to share
                  high-quality photos and detailed ratings for the best dining
                  decisions.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-body items-center text-center">
                <div className="text-5xl text-primary mb-4">
                  <i className="fa-solid fa-user-group"></i>
                </div>
                <h3 className="card-title text-2xl font-semibold text-neutral mb-2">
                  Community Connection
                </h3>
                <p className=" ">
                  Follow fellow "Biters," save your favorite spots, and build a
                  digital diary of your culinary journey.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card-body items-center text-center">
                <div className="text-5xl text-primary mb-4">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <h3 className="card-title text-2xl font-semibold text-neutral mb-2">
                  Supporting Local
                </h3>
                <p className=" ">
                  By highlighting small-scale vendors and home cooks, we aim to
                  drive appreciation and business to local heroes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-secondary mb-10 font-poppins">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="card bg-base-100 shadow-md border-t-4 border-primary"
              data-aos="flip-up"
              data-aos-delay="100"
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl font-semibold text-neutral mb-2">
                  Authenticity
                </h3>
                <p className=" ">
                  We believe in real food and real opinions. No fluff, just
                  flavor.
                </p>
              </div>
            </div>
            <div
              className="card bg-base-100 shadow-md border-t-4 border-secondary"
              data-aos="flip-up"
              data-aos-delay="200"
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl font-semibold text-neutral mb-2">
                  Community
                </h3>
                <p className=" ">
                  LocalBite belongs to the people. Every review helps the
                  community grow stronger.
                </p>
              </div>
            </div>
            <div
              className="card bg-base-100 shadow-md border-t-4 border-accent"
              data-aos="flip-up"
              data-aos-delay="300"
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl font-semibold text-neutral mb-2">
                  Inclusivity
                </h3>
                <p className=" ">
                  From high-end bistros to roadside tea stalls, every "bite"
                  deserves a stage.
                </p>
              </div>
            </div>
            <div
              className="card bg-base-100 shadow-md border-t-4 border-info"
              data-aos="flip-up"
              data-aos-delay="400"
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl font-semibold text-neutral mb-2">
                  Transparency
                </h3>
                <p className=" ">
                  We ensure a safe and honest environment through dedicated
                  moderation and user accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Tech Behind the Taste Section */}
        <section className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-secondary mb-10 font-poppins">
            The Tech Behind the Taste
          </h2>
          <p className="text-xl   max-w-4xl mx-auto mb-8 leading-relaxed">
            LocalBite is a high-performance{" "}
            <strong className="text-primary">MERN Stack</strong> application
            built with modern web technologies to deliver a seamless and
            delightful user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <span
              className="badge badge-lg badge-primary p-4 text-lg font-semibold"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              MongoDB
            </span>
            <span
              className="badge badge-lg badge-secondary p-4 text-lg font-semibold"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Express.js
            </span>
            <span
              className="badge badge-lg badge-accent p-4 text-lg font-semibold"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              React
            </span>
            <span
              className="badge badge-lg badge-info p-4 text-lg font-semibold"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Node.js
            </span>
            <span
              className="badge badge-lg badge-warning p-4 text-lg font-semibold"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Tailwind CSS
            </span>
            <span
              className="badge badge-lg badge-success p-4 text-lg font-semibold"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              DaisyUI
            </span>
          </div>

          {/* MERN Stack Image - Will be replaced by image generation tag */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Architecture
            </h3>
            <p className="  max-w-2xl mx-auto mb-6">
              A visual representation of how our backend, frontend, and database
              seamlessly work together.
            </p>
            {/* <div className="max-w-xl mx-auto border border-base-300 rounded-lg p-4 shadow-md bg-white">
              <p className="text-center text-gray-500 italic">
                {/* This will be replaced by the image generation model */}
                {/* http://googleusercontent.com/image_generation_content/0 */}
              {/* </p> */}
            {/* </div> */} 
          </div>
        </section>

        {/* Call to Action / Meet the Vision */}
        <section
          className="text-center bg-primary text-primary-content p-10 rounded-lg shadow-xl"
          data-aos="zoom-in"
        >
          <h2 className="text-4xl font-bold mb-4 font-poppins">
            Meet the Vision
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            We are a team of developers and food lovers dedicated to making the
            world a little bit smaller, one bite at a time. We believe that food
            is a universal language, and through LocalBite, we’re helping
            everyone speak it.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="btn btn-secondary btn-lg text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Join the Community
            </Link>
            <Link
              to="/reviews"
              className="btn btn-neutral btn-lg text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Explore Reviews
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;