import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const TabsPanel = ({ children }: Props) => <div>{children}</div>;
