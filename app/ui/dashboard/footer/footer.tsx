import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lama Dev</div>
      <div className={styles.text}>(c) All rights reserved.</div>
    </div>
  );
}
export default Footer;
