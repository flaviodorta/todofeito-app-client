export type AppThemeContextType = {
  toggleMode: () => void;
  mode: string;
};

export type AppThemeProviderProps = {
  children: JSX.Element;
};
