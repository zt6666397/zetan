import React from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

const App: React.FC = () => {
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={'0'} onSelect={(index) => { alert(index) }} mode='vertical' defaultOpenSubMenus={['1']}>
          <MenuItem>
            cool link
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem >
              cool link1
          </MenuItem>
            <MenuItem >
              cool link1
          </MenuItem>
            <MenuItem >
              cool link1
          </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link2
          </MenuItem>
          <li>
            Hello
          </li>
        </Menu>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
