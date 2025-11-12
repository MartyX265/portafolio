import Main from "./Main";

export default function Drawer() {
  return (
    <div className="drawer">
      <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Contenido principal */}
        <Main />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer-menu"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/*Selector de temas y opciones de musica*/}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
