import styled from "styled-components";
import * as PrimitiveSlider from "@radix-ui/react-slider";

export const SliderRoot = styled(PrimitiveSlider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;
  height: 20px;
`;

export const SliderTrack = styled(PrimitiveSlider.Track)`
  position: relative;
  flex-grow: 1;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary[6]}};
  border-radius: 9999px;
`;

export const SliderRange = styled(PrimitiveSlider.Range)`
  position: absolute;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary[8]}};
  border-radius: 9999px;
`;

// box-shadow: 0 2px 10px ${blackA.blackA7};
export const SliderThumb = styled(PrimitiveSlider.Thumb)`
  display: block;
  width: 18px;
  height: 18px;
  background-color: #fff;
  /* background-color: ${({ theme }) => theme.colors.primary[8]}}; */
  border: 2px solid ${({ theme }) => theme.colors.primary[8]}};

  border-radius: 10px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.primary[4]}};
    /* border-width: 3px; */
  }

  &:hover {
    /* background-color: ${({ theme }) => theme.colors.primary[9]}};
    background-color: #fff; */
  }
`;
