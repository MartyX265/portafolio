import Image from "next/image";
export default function Navbar() {
  return (
    <div className="navbar bg-[rgba(255,255,255,0.4)] shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">My Portfolio</a>
      </div>
      <div className="flex-none">
        <label htmlFor="drawer-menu" className="btn btn-ghost">
          <Image src="/modernIcons/menu.svg" alt="Open Drawer" width={24} height={24}/>
        </label>
      </div>
    </div>
  );
}
