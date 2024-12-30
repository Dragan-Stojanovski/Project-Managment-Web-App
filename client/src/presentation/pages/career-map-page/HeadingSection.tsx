interface HeadingSectionProps {
	title: string;
	sector: string;
}

const HeadingSection = ({ title, sector }: HeadingSectionProps) => {
	return (
		<>
			<h1
				style={{
					fontSize: "32px",
					marginBottom: "60px",
					width: "84%",
					margin: "0 auto",
				}}
			>
				{title}
			</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "84%",
					margin: "0 auto",
					fontSize: "20px",
					marginBottom: "30px",
				}}
			>
				<p style={{ flex: "1", paddingRight: "20px" }}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages.
				</p>
				<img
					src={`../../../../assets/${sector}`}
					alt="Sample Image"
					style={{
						maxWidth: "65%",
						height: "auto",
					}}
				/>
			</div>
		</>
	);
};

export default HeadingSection;
