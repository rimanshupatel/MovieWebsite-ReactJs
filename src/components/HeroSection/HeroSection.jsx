import banner from "./banner.jpg";

export default function HeroSection() {
  return (
    <>
      <div className="py-4">
        <img src={banner} alt="" className="w-full" />
      </div>
    </>
  );
}
