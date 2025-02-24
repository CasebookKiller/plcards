import ReactDOM from 'react-dom/client';

import { Root } from '@/components/Root';

// Раскомментируйте этот импорт на случай, если вы захотите разрабатывать приложение за пределами
// приложения Telegram в вашем браузере.
import './mockEnv.ts';

import 'primereact/resources/themes/lara-dark-cyan/theme.css';
import './index.css';

document.title = import.meta.env.VITE_APP_TITLE;

ReactDOM.createRoot(document.getElementById('root')!).render(<Root/>);
