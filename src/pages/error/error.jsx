import React from "react";
import ERROR from "../../assets/404_img.jpg";
import style from "./style.module.css"

export const Error = () => {
  return (
    <div className="container">
      <div className={style.img}>
        <img src={ERROR} alt="" />
      </div>
      <h1 className={style.error}>We could not find this page</h1>
    
    
    </div>
  );
};
