import { DrawerProvider } from './drawer';
import { LocaleProvider } from './locale';
import { PatientsProvider } from './patients';
import { ThemeProvider } from './theme';
import { UserProvider } from './user';

const ContextWrapper = ({ children }) => {
  return (
    <LocaleProvider>
        <ThemeProvider>
          <UserProvider>
            <DrawerProvider>
              <PatientsProvider>{children}</PatientsProvider>
            </DrawerProvider>
          </UserProvider>
        </ThemeProvider>
    </LocaleProvider>
  );
};

export default ContextWrapper;
