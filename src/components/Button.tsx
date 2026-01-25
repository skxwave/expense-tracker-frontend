import { Button, useTheme } from "@mui/material";

const CustomButton = (
  { children, isActive, onClick }: { children: React.ReactNode, isActive?: boolean, onClick?: () => void },
) => {
  const theme = useTheme()

  return (
    <Button
      sx={{
        width: '100%',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        textTransform: 'none',
        py: 2,
        px: 2,
        borderRadius: 2,
        backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
        color: isActive ? theme.palette.background.default : theme.palette.text.primary,
        '&:hover': {
          backgroundColor: isActive ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.08)',
        },
        '& .MuiSvgIcon-root': {
          color: isActive ? theme.palette.background.default : theme.palette.text.primary,
        },
        '& .MuiTypography-root': {
          color: isActive ? theme.palette.background.default : theme.palette.text.primary,
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default CustomButton;