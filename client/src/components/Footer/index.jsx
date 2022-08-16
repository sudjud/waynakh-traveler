import footer from './footer.module.sass';

function Footer() {

  return (
    <div className={footer.footer}>
      <div className={footer.logo}>
        <img src="./logo.png" alt="" />
      </div>
      <div className={footer.about}>
        <ul>
          <h3>About</h3>
          <li>aaaa</li>
          <li>aaaa</li>
          <li>aaaa</li>
          <li>aaaa</li>
        </ul>
      </div>
      <div className={footer.company}>
        <ul>
          <h3>Company</h3>
          <li>aaaa</li>
          <li>aaaa</li>
          <li>aaaa</li>
          <li>aaaa</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;