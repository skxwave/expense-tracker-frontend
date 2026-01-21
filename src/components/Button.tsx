import { Button, useTheme } from "@mui/material";

const CustomButton = (
  { children, isActive }: { children: React.ReactNode, isActive?: boolean },
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
          backgroundColor: isActive ? theme.palette.primary.main : '#2e3d58',
        },
        '& .MuiSvgIcon-root': {
          color: isActive ? theme.palette.background.default : theme.palette.text.primary,
        },
        '& .MuiTypography-root': {
          color: isActive ? theme.palette.background.default : theme.palette.text.primary,
        },
      }}
    >
      { children}
    </Button>
  )
}

export default CustomButton;