import React from "react";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";

interface BasicSelectProps {
	label: string;
	value: string | undefined;
	onChange: (event: SelectChangeEvent) => void;
	options: { label: string; value: string | undefined }[];
	fullWidth?: boolean;
}

const BasicSelect: React.FC<BasicSelectProps> = ({
	label,
	value,
	onChange,
	options,
	fullWidth = true,
}) => {
	return (
		<FormControl fullWidth={fullWidth}>
			<InputLabel id={`${label}-select-label`}>{label}</InputLabel>
			<Select
				labelId={`${label}-select-label`}
				id={`${label}-select`}
				value={value}
				label={label}
				onChange={onChange}
			>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default BasicSelect;
