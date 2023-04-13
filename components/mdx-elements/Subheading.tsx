interface Props {
	children: React.ReactNode;
	id: string;
}

export function Subheading({ children, id }: Props) {
	return (
		<span id={id} className="pt-link -mt-link">
			<h3>{children}</h3>
		</span>
	);
}
