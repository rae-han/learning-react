import React from 'react';
import { ColorConsumer } from '../contexts/color'

const colors = ['red', 'green', 'blue', 'magenta', 'cyan', 'yellow', 'white', 'black']

const SelectColors = () => {
  return (
    <div>
      <h2>Select Color</h2>
      <ColorConsumer>
        {({actions}) => (
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
                onClick={()=> actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault();
                  actions.setSubcolor(color)
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;