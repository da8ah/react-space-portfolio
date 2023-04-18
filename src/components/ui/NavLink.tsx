import { AnchorHTMLAttributes, FC, forwardRef } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

const NavLink: FC<NavLinkProps> = forwardRef<HTMLAnchorElement, NavLinkProps>(
	({ className, children, href, ...props }, ref) => {
		return (
			<a
				ref={ref}
				href={href}
				className={`cursor-pointer p-2 text-gray-400 hover:text-white active:scale-95 inline-flex items-center justify-center rounded-md text-lg font-medium transition-color focus:outline-none focus:ring-2 focus-ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
				{...props}
			>
				{children}
			</a>
		);
	},
);

export default NavLink;
