import React, { useState, useEffect } from 'react';
import '../css-components/toggle.css';

function Toggle() {
    const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
    
    return(  <div class="header">
        <div id="mode" onClick={toggleTheme}>
            <input type='checkbox' id="switch" name="switch" >
            </input>
            <label for="switch">
        </label>
        </div>
      </div> )
}

export default Toggle