import NavLinks from "./Navlinks.json";
import Search from "./Search";
function Navbar() {
  return (
    <div className=" fixed w-full bg-white z-[99] flex items-center justify-between py-3 px-8 border border-b-2 capitalize">
      <div>
        <h1 className="font-bold text-3xl">TubeFlix</h1>
      </div>
      <ul className="flex">
        {NavLinks.map((links) => {
          const { id, title, link } = links;
          return (
            <li key={id} className="px-3 text-lg font-medium">
              <a href={link} className="cursor-pointer">
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <Search />
    </div>
  );
}
export default Navbar;
