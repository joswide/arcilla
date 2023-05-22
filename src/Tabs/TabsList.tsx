import React from "react";
import styled from "styled-components";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const Root = styled(TabsPrimitive.List)`
  display: inline-grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  background-color: ${({ theme }) => theme.colors.ui[3]};
  border-radius: 4px;
  padding: 4px;
`;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => <Root ref={ref} {...props} />);

TabsList.displayName = TabsPrimitive.List.displayName;
