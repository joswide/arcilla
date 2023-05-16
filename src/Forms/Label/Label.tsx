import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import styled from "styled-components";
import { fontSize } from "../../styles";

type Props = typeof LabelPrimitive.Root;

const StyledLabel = styled(LabelPrimitive.Root)`
  display: block;
  ${fontSize}

  :disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const Label = React.forwardRef(
  ({ ...props }: Props, forwardedRef: React.Ref<HTMLLabelElement>) => (
    <StyledLabel ref={forwardedRef} {...props} />
  )
);
