import DropDown from './DropDown';
import { Link } from "react-router";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Trang chủ</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Giới thiệu Công ty
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Trải nghiệm khách hàng
              </Link>
            </li>
            {/* <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>             */}
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/destination" onClick={() => setMobileToggle(false)}>
        Định cư
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/destination" onClick={() => setMobileToggle(false)}>
              Hoa Kỳ
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => setMobileToggle(false)}>
              Hy Lạp
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => setMobileToggle(false)}>
              Thổ Nhĩ Kỳ
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => setMobileToggle(false)}>
              Síp (Cyprus)
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => setMobileToggle(false)}>
              Caribe
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => setMobileToggle(false)}>
              New Zealand
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => setMobileToggle(false)}>
              Canada
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link to="/tour" onClick={() => setMobileToggle(false)}>
        Trải nghiệm
        </Link>
      </li> 
      
      <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Bản tin
        </Link>
      </li>        

      <li>
        <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
          Bình luận
        </Link>
      </li>
      
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Sự kiện
        </Link>
      </li>
    </ul>
  );
}
