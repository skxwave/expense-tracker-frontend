import { Select, useTheme } from "@mui/material";

const SelectInput = ({ children, defaultValue }: { children: React.ReactNode; defaultValue: string }) => {
  const theme = useTheme();

  return (
    <Select
      defaultValue={defaultValue}
      size="small"
      sx={{
        minWidth: 150,
        backgroundColor: `${theme.palette.background.paper}`,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.divider,
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