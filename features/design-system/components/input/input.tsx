import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, ...props }: InputProps, ref): JSX.Element => {
    return (
      <input
        className='border ext-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-accent-500 focus:border-accent-500'
        ref={ref}
        {...props}
      >
        {children}
      </input>
    );
  }
);
