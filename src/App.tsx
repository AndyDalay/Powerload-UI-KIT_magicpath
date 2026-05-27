import { Theme } from './settings/types';
import { CeldaCarga } from '@/components/generated/CeldaCarga';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return <CeldaCarga />;
}

export default App;
