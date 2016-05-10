'use strict';

import {h, Component} from 'preact';

class Base extends Component {
  render({text, backgroundImage, children, className}) {
    let {base, box, icon} = styles();
    icon.backgroundImage = `url('${backgroundImage}')`;
    return (
      h('div', {
          className,
          style: base
        },
        h('div', {style: box},
          h('div', {style: icon}),
          text || '',
          children
        )
      )
    )
  }
}

export default Base;

function styles() {
  return {
    base: {
      backgroundColor: 'rgb(244, 252, 255)',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    box: {
      color: '#ED6C30',
      textAlign: 'center',
      display: 'block',
      fontSize: '44px',
      fontWeight: 'bold',
      position: 'absolute',
      width: 300,
      height: 405,
      margin: 'auto',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    icon: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      width: 230,
      height: 230,
      margin: 'auto'
    }
  }
}
