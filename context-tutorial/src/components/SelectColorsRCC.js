import React, { Component } from 'react';
import ColorContext from '../contexts/color'

const colors = ['red', 'green', 'blue', 'magenta', 'cyan', 'yellow', 'white', 'black']

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = color => {
    this.context.actions.setColor(color)
  }

  handleSetSubcolor = subcolor => {
    this.context.actions.setSubcolor(subcolor)
  }

  render() {
    return (
      <div>
        <h2>Select Color</h2>
          <div style={{ display: 'flex' }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                }}
                onClick={() => { this.handleSetColor(color) }}
                onContextMenu={e => {
                  e.preventDefault();
                  this.handleSetSubcolor(color);
                }}
              ></div>
            ))}
          </div>
        <hr />
      </div>
    );
  }
};

export default SelectColors;