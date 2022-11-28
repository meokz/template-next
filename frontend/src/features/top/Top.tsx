import { useHooks } from "./Top.hooks";
import styles from "./Top.module.css";

interface Props {}

const Top: React.FunctionComponent<Props> = () => {
  const { userInfo } = useHooks();

  return (
    <>
      <div className={styles["container"]}>
        <p>This is top screen</p>
        {userInfo !== undefined && (
          <p>
            {userInfo.userId} , {userInfo.id}, {userInfo.title}, {userInfo.completed}
          </p>
        )}
      </div>
    </>
  );
};

export default Top;
