import React, { useRef } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import '../../styles/colorpicker.css';

const ColorPicker = props => {
  const { children, show, setShow, color, onColorChange } = props;

  const defaultColors = [
    '#ffef7f',
    '#ffc785',
    '#8F6132',
    '#f1daf5',
    '#df7599',
    '#D84447',
    '#8f0018',
    '#7189bf',
    '#7258AA',
    '#661F62',
    '#4A5A12',
    '#77da57',
    '#72d6c9',
    '#ededed',
    '#646464',
    '#22222a'
  ];

  const onChangeComplete = color => {
    onColorChange(color.hex);
  };

  const onHide = () => {
    setShow(false);
  };

  const ref = useRef();
  let firstChild = (Array.isArray(children) ? children[0] : children) || <div ref={ref} />;

  if (firstChild.ref === null) {
    throw new Error('First child has to have a ref defined!');
  }
  const target = firstChild.ref.current;

  return (
    <>
      {children || firstChild}
      <Overlay {...props} onHide={onHide} rootClose target={target} show={show}>
        <Popover content={false}>
          <SketchPicker
            color={color}
            presetColors={defaultColors}
            onChangeComplete={onChangeComplete}
            disableAlpha={true}
            className='picker-input'
          />
        </Popover>
      </Overlay>
    </>
  );
};

export default ColorPicker;
