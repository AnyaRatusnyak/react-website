import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div>
        <img
          src="https://static.rfstat.com/logo-presets/3324/thumbnail_2c96662f8556_1x.webp"
          alt="logo"
        />
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}{" "}
            <button className="btn btn-secondary" onClick={props.logout}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
