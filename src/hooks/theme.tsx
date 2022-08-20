import {
  createTheme,
  PaletteMode,
  Theme,
  ThemeProvider,
} from '@mui/material';
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useMemo,
} from 'react';

interface IThemeColorProps {
  toggleColorMode?(): void;
  theme?: Theme;
}

interface IThemeColorProviderProps {
  children?: ReactNode;
}

const ThemeColorContext = createContext({} as IThemeColorProps);

const ThemeColorProvider: React.FC<IThemeColorProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const getDesignToken = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            text: {
              primary: '#000',
              secondary: '#fff',
            },
            common: {
              black: '#fff',
              white: '#000',
            },
            background: {
              default: '#aaaaaa30',
            },
          }
        : {
            text: {
              primary: '#fff',
              secondary: '#000',
            },
            common: {
              black: '#1a161c',
              white: '#fff',
            },
            background: {
              default: '#000',
            },
          }),
    },
  });

  const theme = createTheme(getDesignToken(mode), []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeColorContext.Provider value={colorMode}>
        {children}
      </ThemeColorContext.Provider>
    </ThemeProvider>
  );
};

function useThemeMode(): IThemeColorProps {
  const context = useContext(ThemeColorContext);

  return context;
}

export { ThemeColorContext, ThemeColorProvider, useThemeMode };
