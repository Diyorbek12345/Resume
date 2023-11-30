import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/blue_logo.jpg";
import styled from "styled-components";
import style from "./style.module.css";
import login from "../../assets/login.svg";
import korzina from "../../assets/korzina.png"

const Links = styled.li`
  color: white;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1;
  color: orange;
  text-transform: uppercase;
`;

const Headerlogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttonwrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Loginbtn = styled.button`
  gap: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: white;
  border: 2px solid white;
  background-color: transparent;
`;

export const Header = () => {
  return (
    <header className=" bg-blue-800">
      <Wrapper className="container">
        <Headerlogo>
          <div className="logo">
            <img className={style.logo} src={Logo} alt="logo" />
          </div>
          <div className="content">
            <H1>e-Shop</H1>
          </div>
        </Headerlogo>

        <nav>
          <UL>
            <Links>
              <Link to="/">Home</Link>
            </Links>
            <Links>
              <Link to="/about">About</Link>
            </Links>
            <Links>
              <Link to="/contact">Contact</Link>
            </Links>
            <Links>
              <Link to="/service">Service</Link>
            </Links>
          </UL>
        </nav>

        <Buttonwrap>
          <div className="btn gap-x-2 flex">
            <Link to="/login">
              <Loginbtn>
                <img className={style.login} src={login} alt="" />
                <p>Log in</p>
              </Loginbtn>
            </Link>
          </div>
          <Link to="/korzinka">
          
            <img className={style.korzina} src={korzina} alt="" />
          </Link>
        </Buttonwrap>
      </Wrapper>
    </header>
  );
};
