import React from "react";
import styled from "styled-components";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { property } from "../utils/property";

const Root = styled(TabsPrimitive.Content)`
  ${property("marginTop", "small")}
`;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ ...props }, ref) => <Root ref={ref} {...props} />);

TabsContent.displayName = TabsPrimitive.Content.displayName;
