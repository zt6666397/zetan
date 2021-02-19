import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
import Button from './components/Button/button'
import Input from './components/Input'
library.add(fas)
const App: React.FC = () => {
  const [show, setShow] = useState(false)
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme='primary' size='10x' />
        <Menu defaultIndex={'0'} onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['1']}>
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
        </Menu>
        <Button size='lg' onClick={() => { setShow(!show) }}>Toggle</Button>
        <Transition in={show} timeout={300} animation='zoom-in-left'>
          {/* <FontAwesomeIcon icon={faCoffee} size='10x' /> */}
          <div>
            <p>11111111111111111111111111111111111111s</p>
            <p>11111111111111111111111111111111111111s</p>
            <p>11111111111111111111111111111111111111s</p>
            <p>11111111111111111111111111111111111111s</p>
          </div>
        </Transition>
        <Transition in={show} timeout={300} animation='zoom-in-left' wrapper>
          {/* <FontAwesomeIcon icon={faCoffee} size='10x' /> */}
          <Button size='lg'>Click</Button>
        </Transition>
        <Input icon='search' />
      </header>
    </div>
  );
}

export default App;
