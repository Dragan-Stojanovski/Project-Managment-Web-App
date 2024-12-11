import { Slider } from "@mui/material";
import { Controller } from "react-hook-form";

export interface ISliderComponentProps {
    name: string;
    control: any;
}

const SliderComponent = ({ name, control }: ISliderComponentProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={50}  // Initial default value
      render={({
        field: { value, onChange }, // Access value and onChange from the field object
        fieldState: { error },
      }) => (
        <>
          <label style={{ fontWeight: "600" }}>Matching score</label>
          <Slider
            sx={{
              ".MuiSlider-track": {
                border: "var(--secondary-accent-color) !important",
                backgroundColor: "var(--secondary-accent-color) !important",
                height: "5px",
              },
              ".MuiSlider-thumb": {
                border: "var(--secondary-accent-color) !important",
                backgroundColor: "var(--secondary-accent-color) !important",
              },
            }}
            aria-label="Matching score"
            value={value || 50} // Ensure the value is controlled by the form state
            onChange={(e, newValue) => onChange(newValue)} // Update form value when slider value changes
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
          <br />
          {error && <span>{error.message}</span>}
        </>
      )}
    />
  );
};

export default SliderComponent;