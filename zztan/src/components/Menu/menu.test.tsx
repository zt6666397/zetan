import React from 'react'
import { fireEvent, render, RenderResult, cleanup, await, wait, waitFor } from '@testing-library/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}
const testVerProps: MenuProps = {
    defaultIndex: '0',
    mode: 'vertical'
}
const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem>
                active
            </MenuItem>
            <MenuItem disabled>
                disabled
            </MenuItem>
            <MenuItem >
                cool link
            </MenuItem>
            <SubMenu title="dropdown">
                <MenuItem >
                    drop1
                </MenuItem>
            </SubMenu>
        </Menu>
    )
}
const creatStyleFile = () => {
    const cssFile: string = `
    .zetan-submenu {
        display:none;
    }
    .zetan-submenu.menu-opened {
        display:block;
    }
    `
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = cssFile
    return style

}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem compoment', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        wrapper.container.append(creatStyleFile())
        menuElement = wrapper.getByTestId('test-menu')
        // wrapper.container. 也可以获取
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')

    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('zetan-menu test')
        expect(menuElement.querySelectorAll(':scope>li').length).toEqual(4)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
    it('click items should change active and call the right callback', () => {
        const chirdItem = wrapper.getByText('cool link')
        fireEvent.click(chirdItem)
        expect(chirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith('2')
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenLastCalledWith('1')
    })
    it('should render vertical mode when mode is set to vertical', () => {
        cleanup()
        const wrapper = render(generateMenu(testVerProps))
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
    it('should show dropdown items when hover on subMenu', async () => {
        expect(wrapper.queryByText('drop1')).not.toBeVisible()
        const dropdownElement = wrapper.getByText('dropdown')
        fireEvent.mouseEnter(dropdownElement)
        await waitFor(() => {
            expect(wrapper.queryByText('drop1')).toBeVisible()
        })
        fireEvent.click(wrapper.getByText('drop1'))
        expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
        fireEvent.mouseLeave(dropdownElement)
        await waitFor(() => {
            expect(wrapper.queryByText('drop1')).toBeVisible()
        })
    })
    it('should show dropdown items when click on subMenu', () => {
        const dropdownElement = wrapper.getByText('dropdown')
        fireEvent.click(dropdownElement)
        expect(wrapper.queryByText('drop1')).not.toBeVisible()
    })
})