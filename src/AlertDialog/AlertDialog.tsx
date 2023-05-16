import React from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import {
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  // Button,
  Flex,
} from "./styles";

import { Button } from "../Button";

type Props = {
  title: string;
  body: string;
};

const AlertDialog = ({ title, body }: Props) => (
  <RadixAlertDialog.Root>
    <RadixAlertDialog.Trigger asChild>
      <Button variant="solid" color="gray" size="medium">
        Delete account
      </Button>
    </RadixAlertDialog.Trigger>

    <RadixAlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{body}</AlertDialogDescription>

        <Flex style={{ justifyContent: "flex-end" }}>
          <RadixAlertDialog.Cancel asChild>
            <Button
              size="medium"
              variant="light"
              color="gray"
              style={{ marginRight: 25 }}
            >
              Cancel
            </Button>
          </RadixAlertDialog.Cancel>
          <RadixAlertDialog.Action asChild>
            <Button size="medium" variant="solid" color="danger">
              Yes, delete account
            </Button>
          </RadixAlertDialog.Action>
        </Flex>
      </AlertDialogContent>
    </RadixAlertDialog.Portal>
  </RadixAlertDialog.Root>
);

export default AlertDialog;
