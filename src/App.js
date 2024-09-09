import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
 

 // Importing components directly
import Navbar from "./components/Navbar";
 
import Sidebar from "./components/Sidebar";
 

// Importing pages directly
import Ecommerce from './pages/Ecommerce';
import Orders from './pages/Orders';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Kanban from './pages/Kanban';
import Editor from './pages/Editor';
import Calendar from './pages/Calendar';
import ColorPicker from './pages/ColorPicker';

// Importing charts directly
import Area from './pages/Charts/Area';
import Bar from './pages/Charts/Bar';
import Line from './pages/Charts/Line';
import Pie from './pages/Charts/Pie';
import Financial from './pages/Charts/Financial';
import ColorMapping from './pages/Charts/ColorMapping';
import Pyramid from './pages/Charts/Pyramid';
import Stacked from './pages/Charts/Stacked';
import './App.css';

 

import { useStateContext } from './context/ContextProvider';
import ThemeSetting from './components/ThemeSetting';

const App = () => {
 const {activeMenu ,setThemeSettings ,currentColor ,setCurrentColor ,setCurrentMode ,currentMode} = useStateContext();
 useEffect(() => {
  const currentThemeColor = localStorage.getItem('colorMode');
  const currentThemeMode = localStorage.getItem('themeMode');
  if (currentThemeColor && currentThemeMode) {
    setCurrentColor(currentThemeColor);
    setCurrentMode(currentThemeMode);
  }
}, [setCurrentColor, setCurrentMode]);

 
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
            <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>

 <ThemeSetting/> 

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
 
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
