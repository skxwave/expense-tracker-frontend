import { Button, useTheme } from "@mui/material";

const CustomButton = ({
  children,
  isActive,
  isCentral,
  onClick,
  sx,
  type,
  disabled,
}: {
  children: React.ReactNode,
  isActive?: boolean,
  isCentral?: boolean,
  onClick?: () => void,
  sx?: object,
  type?: "button" | "submit" | "reset"
  disabled?: boolean,
},
) => {
  const theme = useTheme()

  return (
    <Button
      sx={{
        width: '100%',
        alignContent: isCentral ? 'center' : 'flex-start',
        justifyContent: isCentral ? 'center' : 'flex-start',
        textTransform: 'none',
        py: 2,
        px: 2,
        borderRadius: 2,
        backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
        color: isActive ? theme.palette.text.secondary : theme.palette.text.primary,
        '&:hover': {
          backgroundColor: isActive ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.08)',
        },
        '& .MuiSvgIcon-root': {
          color: isActive ? theme.palette.text.secondary : theme.palette.text.primary,
        },
        '& .MuiTypography-root': {
          color: isActive ? theme.palette.text.secondary : theme.palette.text.primary,
        },
        ...sx,
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default CustomButton;