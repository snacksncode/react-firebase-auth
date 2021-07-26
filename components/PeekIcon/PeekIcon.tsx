import styles from "./PeekIcon.module.scss";
import ClosedEyeIcon from "./ClosedEyeIcon";
import OpenedEyeIcon from "./OpenedEyeIcon";
import useKeyClick from "../../hooks/useKeyClick";

interface Props {
  onClick: () => any;
  isPeeked: boolean;
}

const PeekIcon = ({ onClick, isPeeked }: Props) => {
  const { ref, handleKeyboardEvent } = useKeyClick();
  return (
    <div ref={ref} tabIndex={0} onKeyPress={handleKeyboardEvent} onClick={onClick} className={styles.wrapper}>
      {isPeeked ? <ClosedEyeIcon /> : <OpenedEyeIcon />}
    </div>
  );
};

export default PeekIcon;
