import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";
import { TabsContent } from "./TabsContent";

type Props = {
  children: React.ReactNode;

  // TODO: Add support for this
  // defaultValue: string
};

export const Tabs = ({ children }: Props) => {
  const tabsChildren =
    children && Array.isArray(children) ? children : children ? [children] : [];

  return (
    <div>
      {/* Tabs Block */}
      <TabsPrimitive.Root defaultValue="0">
        {/* Tabs List */}
        <TabsList>
          {tabsChildren.map((tabChild, tabChildIndex) => {
            const value = tabChild.props.value || tabChildIndex;

            return (
              <TabsTrigger key={tabChildIndex} value={String(value)}>
                {tabChild.props.title}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* Tabs Content */}
        {tabsChildren.map((tabChild, tabChildIndex) => {
          const value = tabChild.props.value || tabChildIndex;

          return (
            <TabsContent key={tabChildIndex} value={String(value)}>
              {tabChild.props.children}
            </TabsContent>
          );
        })}
      </TabsPrimitive.Root>
    </div>
  );
};
