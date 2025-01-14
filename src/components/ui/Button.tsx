import { ButtonHTMLAttributes, FC, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, disabled, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={`cursor-pointer py-2 text-gray-400 hover:text-white active:scale-95 inline-flex items-center justify-center text-lg font-medium transition-color focus:outline-none focus:ring-2 focus-ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		);
	},
);

export default Button;
