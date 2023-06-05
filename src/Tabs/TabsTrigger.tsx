import React from "react";
import styled from "styled-components";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const Root = styled(TabsPrimitive.Trigger)`
  all: unset;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  text-align: center;
  transition: all 0.2s ease-out;
  font-weight: 500;
  user-select: none;

  :not(:last-child) {
    margin-right: 4px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[1]};
    color: ${({ theme }) => theme.colors.primary[11]};
    background-color: ${({ theme }) => theme.colors.primary[0]};
  }

  &[data-state="active"] {
    box-shadow: ${({ theme }) => theme.shadows[1]};
    color: ${({ theme }) => theme.colors.primary[11]};
    background-color: ${({ theme }) => theme.colors.primary[0]};
  }
`;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => <Root ref={ref} {...props} />);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
