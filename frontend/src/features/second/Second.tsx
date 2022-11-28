import { useHooks } from "./Second.hooks";
import styles from "./Second.module.css";

interface Props {}

const Second: React.FunctionComponent<Props> = () => {
  const { localCounter, globalCounter, incrementCounter } = useHooks();

  return (
    <>
      <div className={styles["container"]}>
        <p>This is second screen</p>
        <p> localCounter = {localCounter} </p>
        <p> globalCounter = {globalCounter} </p>
        <button onClick={incrementCounter}>increment counter</button>
      </div>
    </>
  );
};

export default Second;
