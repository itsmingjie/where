interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className='text-white focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5  bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-accent-800 uppercase transition-colors'
      {...props}
    >
      {children}
    </button>
  );
};
