interface Props {
	children: React.ReactNode;
	id: string;
}

export function Heading({ children, id }: Props) {
	return (
		<div id={id} className="pt-link -mt-link">
			<h2>{children}</h2>
		</div>
	);
}
