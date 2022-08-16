import header from './header.module.sass';

function Header() {

  return (
    <div className={header.header}>
      <div className={header.img}><img src="./logo.png" alt="logo" /></div>
    </div>
  )
};
export default Header;