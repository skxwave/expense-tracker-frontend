import { Select, useTheme, type SxProps } from "@mui/material";

const SelectInput = ({ children, defaultValue, sx }: { children: React.ReactNode; defaultValue: string; sx?: SxProps }) => {
  const theme = useTheme();

  return (
    <Select
      defaultValue={defaultValue}
      size="small"
      sx={{
        minWidth: 150,
        borderRadius: 3,
        backgroundColor: `${theme.palette.background.paper}`,
        ...sx,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.text.primary,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.text.primary,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.text.primary,
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            mt: 1,
            borderRadius: 2,
          },
        },
        MenuListProps: {
          sx: {
            backgroundColor: theme.palette.background.paper,
          }
        }
      }}
    >
      {children}
    </Select>
  )
}

export default SelectInput;