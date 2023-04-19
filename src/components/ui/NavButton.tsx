import { AnchorHTMLAttributes, FC, forwardRef } from "react";

interface NavBubbleProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

const NavBubble: FC<NavBubbleProps> = forwardRef<
	HTMLAnchorElement,
	NavBubbleProps
>(({ className, children, href, ...props }, ref) => {
	return (
		<a
			ref={ref}
			href={href}
			className={`cursor-pointer active:scale-95 inline-flex items-center justify-center transition-color ring-2 ring-slate-400 hover:ring-white focus:ring-white focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
			{...props}
		>
			{children}
		</a>
	);
});

export default NavBubble;
