import { Slider } from "@mui/material";
import { Controller } from "react-hook-form";

export interface ISliderComponentProps {
    name:string;
    control:any;
}

const SliderComponent = ({name, control}:ISliderComponentProps) => {
    return ( 
        <Controller
        name={name}
        control={control}
        defaultValue={50}
        render={({
          fieldState: { error },
        }) => (
          <>
        <label style={{fontWeight:'600'}}>Matching score</label>
        <Slider
        sx={{
            '.MuiSlider-track':{
                border:'var(--secondary-accent-color) !important',
                backgroundColor:'var(--secondary-accent-color) !important',
                height:'5px'
            },
            '.MuiSlider-thumb':{
                border:'var(--secondary-accent-color) !important',
                backgroundColor:'var(--secondary-accent-color) !important'
                
            }
        }}
        aria-label="Matching score"
        defaultValue={50}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={0}
        max={100}
    />

    <br></br>
    {error && <span >{error.message}</span>}
    </>
      )}
    />
  );
};


export default SliderComponent;