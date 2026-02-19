import { Paper, type PaperProps, useTheme } from '@mui/material';
import { type ReactNode } from 'react';

interface StyledPaperProps extends Omit<PaperProps, 'elevation' | 'sx'> {
  children?: ReactNode;
  padding?: number;
  marginBottom?: number;
  fullHeight?: boolean;
  withBorder?: boolean;
  withOverflow?: boolean;
  customSx?: PaperProps['sx'];
}

/**
 * StyledPaper - A reusable Paper component with common default styles
 * Eliminates duplication across the application for themed paper elements
 * 
 * @param padding - Padding value (default: 3)
 * @param marginBottom - Margin bottom value (default: none)
 * @param fullHeight - Apply height: '100%' (default: false)
 * @param withBorder - Apply border with theme divider color (default: true)
 * @param withOverflow - Apply overflow: 'hidden' (default: false)
 * @param customSx - Additional custom sx styles to merge
 */
const StyledPaper = ({
  padding = 3,
  marginBottom,
  fullHeight = false,
  withBorder = true,
  withOverflow = false,
  customSx = {},
  children,
  ...paperProps
}: StyledPaperProps) => {
  const theme = useTheme();

  const sx = {
    p: padding,
    ...(marginBottom && { mb: marginBottom }),
    ...(fullHeight && { height: '100%' }),
    ...(withBorder && { border: `1px solid ${theme.palette.divider}` }),
    borderRadius: 2,
    ...(withOverflow && { overflow: 'hidden' }),
    ...customSx,
  };

  return (
    <Paper elevation={0} sx={sx} {...paperProps}>
      {children}
    </Paper>
  );
};

export default StyledPaper;
