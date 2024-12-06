import { useState } from "react";
import styles from "./Import.module.css";
import axios from "axios";

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
		await axios.post("http://localhost:3001/import", formData, { headers: {} });
	};

	return (
		<>
			<div className={styles.container}>
				<h1>Import jobs</h1>
				<input type="file" onChange={handleFileChange} />
				<button onClick={handleUpload}>Import</button>
			</div>
		</>
	);
};

export default Import;
