const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-36">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Our Store</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to VegaMovies, your go-to destination for all your movie
            entertainment needs! At VegaMovies, we’re passionate about bringing
            you the latest and greatest movies in the best possible quality. Our
            mission is simple: to provide movie enthusiasts like you with a
            convenient and accessible platform to download your favorite films.
            Whether you’re into action, romance, comedy, or anything in between,
            we’ve got you covered. With a wide selection of movies available for
            download, ranging from 480p to stunning 4K resolution, there’s
            something for everyone at VegaMovies. We believe in offering choice
            and flexibility, so you can enjoy your movies exactly how you want,
            whenever you want. Got questions or suggestions?
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We’d love to hear from you! Feel free to reach out to us at
            contact@vegamoviez.com.in. Your feedback helps us improve and ensure
            that VegaMovies remains your ultimate destination for movie magic.
            Thank you for choosing VegaMovies. Sit back, relax, and enjoy the
            show!
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>

        {/* Image and Extra Components */}
        <div className="md:w-1/2 flex justify-center">
          <div className="max-w-md rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/images/about-image.jpg"
              alt="About Us"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Meet Our Team</div>
              <p className="text-gray-700 text-base">
                Our team is dedicated to providing you with the best shopping
                experience.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #E-commerce
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Shopping
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
