import { useState } from "react";
import styles from "./Import.module.css";
import axios from "axios";
import BaseButton from "../../components/base-components/base-button";

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
		<div className={styles.container}>
			<h1>Import jobs</h1>
			<input type="file" onChange={handleFileChange} />
			<BaseButton
				type="submit"
				onClick={handleUpload}
				text="Import"
			></BaseButton>
		</div>
	);
};

export default Import;
