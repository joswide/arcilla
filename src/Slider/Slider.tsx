import React from "react";
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "./styles";

// type Props = {
//   defaultValue?: number;
//   min?: number;
//   max?: number;
//   step?: number;
// }

const Slider = () => (
  <form>
    <SliderRoot defaultValue={[50]} max={100} step={1} aria-label="Volume">
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </SliderRoot>
  </form>
);

export default Slider;
