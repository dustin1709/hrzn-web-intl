import DropDown from './DropDown';
import { Link } from "react-router";
import { HashLink } from 'react-router-hash-link';

export default function Nav({ setMobileToggle }) {

  const NavChild = [
        {name: 'usa', title: 'Hoa Kỳ'},   
        {name: 'greece', title: 'Hy Lạp'},  
        {name: 'cyprus', title: 'Đảo Síp'},    
        {name: 'turkey', title: 'Thổ Nhĩ Kỳ'},
        {name: 'malta', title: 'Malta'},       
        {name: 'caribe', title: 'Các quốc đảo Caribe'},     
        {name: 'canada', title: 'Canada'},
        {name: 'newzealand', title: 'New Zealand'},
  ]

  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Trang chủ</Link>
        <DropDown>
          <ul>
            <li>
              <HashLink to={"/#about"}>
              Giới thiệu Công ty
              </HashLink>
            </li>
            <li>
              <HashLink to={"/#customerexp"}>
              Trải nghiệm khách hàng
              </HashLink>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/dinhcu" onClick={() => setMobileToggle(false)}>
        Định cư
        </Link>
        <DropDown>
          <ul>
            {
              NavChild.map((item, i) => (
                <li key={i}>
                <HashLink to={`/dinhcu/#${item.name}`} onClick={() => setMobileToggle(false)}>
                  {item.title}
                </HashLink>
                </li>
              )
              
            )}
          </ul>
        </DropDown>
      </li>

      <li>
        <Link to="/tour" onClick={() => setMobileToggle(false)}>
        Trải nghiệm
        </Link>
      </li> 
      
      <li>
        <Link to="/news" onClick={() => setMobileToggle(false)}>
          Bản tin
        </Link>
      </li>        

      <li>
        <Link to="/rating" onClick={() => setMobileToggle(false)}>
          Đánh giá
        </Link>
      </li>

      <li>
        <Link to="/events" onClick={() => setMobileToggle(false)}>
          Sự kiện
        </Link>
      </li>
      <li className='show-btn'>
      <div className="header-btn d-flex align-items-center">
                <div className="main-button header-btn-1">
                <Link to="/contact" className='theme-btn'>
                <span> Liên hệ tư vấn <i className="bi bi-arrow-right"></i></span></Link>
                  </div>

              </div>
      </li>
    </ul>
  );
}
