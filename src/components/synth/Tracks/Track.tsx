import styles from './track.module.css';

function Track() {
  return (
    <div className="flex h-[154px] w-[154px] flex-wrap items-center justify-between gap-[20px] rounded-lg border p-[20px]">
      <input
        type="range"
        min={0}
        max={100}
        className={styles.knobRange}
      ></input>
    </div>
  );
}

export default Track;
