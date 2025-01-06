import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './SuperButton.module.css';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({ xType, className, disabled, ...restProps }) => {
  const finalClassName =
    s.button +
    (disabled ? ' ' + s.disabled : '') +
    (!xType ? ' ' + s.default : '') +
    (xType === 'secondary' ? ' ' + s.secondary : '') +
    (xType === 'red' ? ' ' + s.red : '') +
    (className ? ' ' + className : '');

  return <button disabled={disabled} className={finalClassName} {...restProps} />;
};

export default SuperButton;
