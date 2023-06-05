import React from "react";
import styled from "styled-components";
import * as TabsPrimitive from "@radix-ui/react-tabs";

type Props = {
  fullWidth?: boolean;
};

const Root = styled(TabsPrimitive.List)<Props>`
  display: ${({ fullWidth }) => (fullWidth ? "grid" : "inline-grid")};
  grid-auto-flow: column;
  /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
  background-color: ${({ theme }) => theme.colors.ui[3]};
  border-radius: 4px;
  padding: 4px;
`;

type ElementProps = typeof TabsPrimitive.List & Props;

export const TabsList = React.forwardRef<
  React.ElementRef<ElementProps>,
  React.ComponentPropsWithoutRef<ElementProps>
>(({ className, ...props }, ref) => <Root ref={ref} {...props} />);

TabsList.displayName = TabsPrimitive.List.displayName;
