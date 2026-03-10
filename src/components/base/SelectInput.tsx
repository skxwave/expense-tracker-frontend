import { Select, useTheme, type SelectChangeEvent, type SxProps } from "@mui/material";

const SelectInput = ({ children, defaultValue, value, onChange, sx }: { children: React.ReactNode; defaultValue?: string | number; value?: string | number; onChange?: (e: SelectChangeEvent<string | number>) => void; sx?: SxProps }) => {
  const theme = useTheme();

  return (
    <Select
      {...(value !== undefined ? { value, onChange } : { defaultValue })}
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