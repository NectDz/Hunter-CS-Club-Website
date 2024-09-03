import { ReactNode } from "react";
import Button from "@mui/material/Button";

interface CommonButtonProps {
  children: ReactNode;
  color?: string; // Accepts any string value
  disabled?: boolean;
  size?: string;
  variant?: string;
  sx?: string;
}

function CommonButton({
  children,
  color,
  disabled,
  size,
  variant,
  sx,
}: CommonButtonProps) {
  return (
    <Button
      color={color as any}
      disabled={disabled}
      size={size as any}
      variant={variant as any}
      sx={sx as any}
    >
      {children}
    </Button>
  );
}

export default CommonButton;
