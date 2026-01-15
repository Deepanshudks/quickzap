import ClassNames from "classnames";
import { Button, CircularProgress } from "@mui/material";
import type { ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  loadingContent?: string;
}

const CustomButton = ({
  children,
  variant = "contained",
  size = "large",
  className = "",
  loading = false,
  loadingContent = "Loading",
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      disableElevation
      size={size}
      className={ClassNames("capitalize! whitespace-nowrap!", className)}
      variant={variant}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <div className="flex items-center gap-1">
          {`${loadingContent}...`} <CircularProgress thickness={4} size={24} />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default CustomButton;
