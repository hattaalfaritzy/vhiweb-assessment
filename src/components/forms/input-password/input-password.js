import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import InputText from '../input-text/input-text';

export default function InputPassword({
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const eyeIconProps = { className: 'text-lg text-primary cursor-pointer' };

  return (
    <InputText
      type={showPassword ? 'text' : 'password'}
      iconRight={showPassword ? (
        <BsEye onClick={() => setShowPassword(!showPassword)} {...eyeIconProps} />
      ) : (
        <BsEyeSlash onClick={() => setShowPassword(!showPassword)} {...eyeIconProps} />
      )}
      {...props}
    />
  );
}
