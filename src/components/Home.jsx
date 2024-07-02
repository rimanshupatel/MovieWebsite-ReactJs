import HeroSection from "./HeroSection/HeroSection";
import { UseGloballyContext } from "../Context/Context";
export default function Home() {
  const { info, loading } = UseGloballyContext();

  return (
    <>
      {!loading ? (
        <section>
          <HeroSection />
          <div className="container mx-auto">
            <div>
              <h1 className="my-8 px-2 font-bold text-4xl border-l-8 border-red-400 ">
                Features
              </h1>
            </div>
            <div className="my-12 grid grid-cols-5 gap-4">
              {info.map((movie) => {
                const { Title, Poster, imdbID, Type, Year } = movie;
                const movieName = Title.substring(0, 30);
                return (
                  <a
                    key={imdbID}
                    href={`movie/${imdbID}`}
                    className="rounded-lg shadow-xl shadow-gray-200  hover:scale-[1.03] "
                  >
                    <div className=" h-[27rem] ">
                      <div>
                        <img
                          src={Poster}
                          alt={imdbID}
                          className="h-[280px] w-[235px] "
                        />
                      </div>
                      <div className="px-2 py-2 ">
                        <h1 className="font-semibold text-lg">
                          {Title.length > 20 ? `${movieName}....` : Title}
                        </h1>
                        <div className=" py-4">
                          <p className="font-semibold">
                            Year :<span> {Year}</span>
                          </p>
                          <p className="font-semibold">
                            Type :<span> {Type}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! you enter wrong keywords.
            </h1>
            <p className="text-lg text-gray-700 mb-6">{`Please, enter valid keywords for relevent search result`}</p>
          </div>
        </div>
      )}
    </>
  );
}
