import Main from "./Main";

export default function Drawer() {
  return (
    <div className="drawer">
      <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Contenido principal */}
        <Main />
      </div>
      <div className="drawer-side bg-[rgba(0,0,0,0.4)]">
        <label
          htmlFor="drawer-menu"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[rgba(255,255,255,0.5)] backdrop-blur-sm min-h-full w-80 p-4">
          {/*Selector de temas y opciones de musica*/}
          <li>
            <a>Language Selectors, coming soon!</a>
          </li>
          <li>
            <a>Theme Selectors, coming soon!</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
