import { AnchorHTMLAttributes, FC, forwardRef } from "react";

interface NavBubbleProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

const NavBubble: FC<NavBubbleProps> = forwardRef<
	HTMLAnchorElement,
	NavBubbleProps
>(
	(
		{ className, children, href = "https://github.com/da8ah", ...props },
		ref,
	) => {
		return (
			<a
				ref={ref}
				href={href}
				target="_blank"
				rel="noopener"
				className={`cursor-pointer rounded-full bg-gray-500 bg-opacity-30 hover:bg-transparent active:scale-95 inline-flex items-center justify-center transition-color ring-1 hover:ring-2 ring-slate-400 hover:ring-white focus:ring-white focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
				{...props}
			>
				{children}
			</a>
		);
	},
);

export default NavBubble;
