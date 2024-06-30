import React from "react";
import { checkout, logo, footerIcon } from "../../assets/images/index";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname.includes("login") || pathname.includes("admin")) {
    return <></>;
  }
  return (
    <section id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer-col">
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
            <p>8 (800) 890-46-56</p>
            <img src={checkout} alt="" />
            <Link to={"/"}>Политика конфидециальности</Link>
            <Link to={"/"}>Пользовательское соглашение</Link>
            <img src={footerIcon} alt="" />
            <img className="footer-icon" src={footerIcon} alt="" />
            <img className="footer-icon" src={footerIcon} alt="" />
          </div>
          <div className="footer-col">
            <h3>Покупателям</h3>
            <Link to={"/"}>О компании</Link>
            <Link to={"/"}>Доставка и оплата</Link>
            <Link to={"/"}>Возврат</Link>
            <Link to={"/"}>Гарантии</Link>
            <Link to={"/"}>Контакты</Link>
            <Link to={"/"}>Блог</Link>
          </div>
          <div className="footer-col">
            <h3>Товары</h3>
            <Link to={"/"}>Люстры</Link>
            <Link to={"/"}>Светильники</Link>
            <Link to={"/"}>Бра</Link>
            <Link to={"/"}>Торшеры</Link>
            <Link to={"/"}>Комплектуюшие</Link>
            <Link to={"/"}>Настольные лампы</Link>
          </div>
          <div className="footer-col">
            <h3></h3>
            <Link to={"/"}>Споты</Link>
            <Link to={"/"}>Трековые светильники</Link>
            <Link to={"/"}>Уличные светильники</Link>
            <Link to={"/"}>Технические светильники</Link>
            <Link to={"/"}>Светодиодные ленты</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
