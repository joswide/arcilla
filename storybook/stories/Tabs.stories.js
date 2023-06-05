// import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsPanel, Paragraph } from "arcilla";

const Story = () => {
  return (
    <Tabs>
      <TabsPanel title="Tab 2">
        <Paragraph size="large">
          La libertad, Sancho, es uno de los más preciosos dones que a los
          hombres dieron los cielos; con ella no pueden igualarse los tesoros
          que encierra la tierra ni el mar encubre; por la libertad, así como
          por la honra, se puede y debe aventurar la vida, y, por el contrario,
          el cautiverio es el mayor mal que puede venir a los hombres.
        </Paragraph>
      </TabsPanel>
      <TabsPanel title="Tab 1">
        <Paragraph size="large">
          ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de
          las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
          relleno estándar de las industrias desde el año 1500, cuando un
          impresor (N. del T. persona que se dedica a la imprenta) desconocido.
        </Paragraph>
      </TabsPanel>
    </Tabs>
  );
};

export default {
  title: "Tabs",
  component: Story,
  argTypes: {},
};

export const Default = {
  args: {},
};
