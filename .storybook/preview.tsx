import { configure, addDecorator } from '@storybook/react'
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const styles: React.CSSProperties = {
  textAlign: 'none'
}
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
addDecorator(CenterDecorator)