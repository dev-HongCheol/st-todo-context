import headerCss from './Header.module.css';

const Header = () => {
  return (
    <div>
      <ul className={headerCss.header}>
        <li>리스트</li>
        <li>완료</li>
      </ul>
    </div>
  );
};

export default Header;
