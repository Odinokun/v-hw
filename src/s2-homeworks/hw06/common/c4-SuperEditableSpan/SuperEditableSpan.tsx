import React, { DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState } from 'react';
import s from './SuperEditableSpan.module.css';
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText';
import editIcon from './editIcon.svg';

// тип пропсов обычного input
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
// тип пропсов обычного span
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

// здесь мы говорим что у нашего input будут такие же пропсы как у обычного input, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = Omit<DefaultInputPropsType, 'type'> & {
  // и + ещё пропсы которых нет в стандартном input
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;

  spanProps?: DefaultSpanPropsType & { defaultText?: string }; // пропсы для span
};

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({
  autoFocus,
  onBlur,
  onEnter,
  spanProps,
  ...restProps
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, defaultText, ...restSpanProps } = spanProps || {};

  const onEnterCallback = () => {
    setEditMode(false);
    onEnter?.();
  };
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditMode(false);
    onBlur?.(e);
  };
  const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setEditMode(true);
    onDoubleClick?.(e);
  };

  const spanClassName = s.span + (className ? ' ' + className : '');

  return (
    <>
      {editMode ? (
        <SuperInputText
          autoFocus={autoFocus || true}
          onBlur={onBlurCallback}
          onEnter={onEnterCallback}
          className={s.input}
          {...restProps} // отдаём input остальные пропсы если они есть (value например там внутри)
        />
      ) : (
        <div className={s.spanBlock}>
          <img src={editIcon} className={s.pen} alt={'edit'} />
          <span onDoubleClick={onDoubleClickCallBack} className={spanClassName} {...restSpanProps}>
            {children || restProps.value || defaultText}
          </span>
        </div>
      )}
    </>
  );
};

export default SuperEditableSpan;
