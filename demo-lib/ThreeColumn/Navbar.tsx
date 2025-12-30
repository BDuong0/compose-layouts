import {
  NavigationMenu,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full pb-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-14 [&_*]:no-underline'>
        <NavigationMenu className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          <span className="hidden font-bold text-xl sm:inline-block">My Fitness Blog</span>
          <ul className="flex justify-between m-0 gap-6 mr-20">
            <li><a href="" className="font-semibold hover:underline">DIY Projects</a></li>
            <li><a href="" className="font-semibold hover:underline">Recipes</a></li>
            <li><a href="" className="font-semibold hover:underline">My Fitness Philosophy</a></li>
            <li><a href="" className="font-semibold hover:underline">Blog</a></li>
          </ul>
        </NavigationMenu>
    </header>
  );
};

export default Navbar;
