import { useHooks } from "./Sandbox.hooks";
// @ts-ignore
import styles from "./Sandbox.module.css";

interface Props {}

const Sandbox: React.FunctionComponent<Props> = () => {
  // @ts-ignore
  const _ = useHooks();

  return (
    <>
      <div className={styles["container"]}>
        <p>This is sandbox screen</p>
      </div>
    </>
  );
};

export default Sandbox;
