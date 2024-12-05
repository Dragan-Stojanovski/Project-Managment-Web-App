import { useState } from "react";
import styles from "./Import.module.css";

const Import = (): JSX.Element => {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setFile(event.target.files[0]);
		}
	};

	const handleUpload = async () => {
		if (!file) {
			alert("Please select a file to upload!");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);

		try {
			const response = await fetch("https://your-backend-api.com/import", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}

			const data = await response.json();
			console.log("File uploaded successfully:", data);
		} catch (error) {
			console.error("Error uploading file:", error);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<h1>Import jobs</h1>
				<input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
				<button onClick={handleUpload}>Import</button>
			</div>
		</>
	);
};

export default Import;
