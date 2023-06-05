import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";
import { TabsContent } from "./TabsContent";

type Props = {
  children: React.ReactNode;
  fullWidth?: boolean;

  // TODO: Add support for this
  // defaultValue: string
};

export const Tabs = ({ children, fullWidth = false }: Props) => {
  const tabsChildren =
    children && Array.isArray(children) ? children : children ? [children] : [];

  return (
    <div>
      {/* Tabs Block */}
      <TabsPrimitive.Root defaultValue="0">
        {/* Tabs List */}
        {/* @ts-ignore */}
        <TabsList fullWidth={fullWidth}>
          {tabsChildren.map((tabChild, tabChildIndex) => (
            <TabsTrigger
              key={tabChildIndex}
              value={String(tabChild.props.value || tabChildIndex)}
            >
              {tabChild.props.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* Tabs Content */}
        {tabsChildren.map((tabChild, tabChildIndex) => (
          <TabsContent
            key={tabChildIndex}
            value={String(tabChild.props.value || tabChildIndex)}
          >
            {tabChild.props.children}
          </TabsContent>
        ))}
      </TabsPrimitive.Root>
    </div>
  );
};
