import { icons } from "./iconsPack";

export const Icon = (props) => {
  const {
    type,
    width = "100%",
    height = "100%",
    className,
    color = "#fff",
  } = props;

  return (
    <svg
      className={className}
      viewBox={icons[type].viewBox}
      width={width}
      height={height}
      fill={color}
      aria-hidden
    >
      {icons[type].path}
    </svg>
  );
};
