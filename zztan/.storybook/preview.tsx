import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../src/styles/index.scss"
import "./style.scss"
library.add(fas)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}
const storyWrapper = (storyFn: any) => <div style={wrapperStyle}>
  <h3>组件演示</h3>
  {storyFn()}
</div>
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({ info: { inline: true, header: false } })