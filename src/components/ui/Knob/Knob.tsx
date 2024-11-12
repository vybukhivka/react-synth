import styles from './knob.module.css';

function Knob() {
  return <input type="range" min={0} max={100} className={styles.knobRange} />;
}

export default Knob;
