/* eslint-disable react/prop-types */
import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
  color: '#5E81F4',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#5E81F4',
    transformOrigin: 'bottom left',
    color: '#5E81F4',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
const marks = [
  {
    value: 0,
    label: '1W',
  },
  {
    value: 10,
    label: '2W',
  },
  {
    value: 20,
    label: '1M',
  },
  {
    value: 30,
    label: '2M',
  },
  {
    value: 40,
    label: '5M',
  },
  {
    value: 50,
    label: '1Y',
  },
  {
    value: 60,
    label: 'All',
  },
];

const CustomizedSlider = () => (
  <PrettoSlider
    valueLabelDisplay="auto"
    aria-label="pretto slider"
    step={10}
    defaultValue={20}
    marks={marks}
    max={60}
  />
);

export default CustomizedSlider;
