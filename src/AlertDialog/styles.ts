import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled as styled0 } from '@stitches/react';
import { violet, blackA, red, mauve } from '@radix-ui/colors';
import styled, { keyframes } from 'styled-components';

const overlayShow = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(.96);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;


export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
  background-color: ${blackA.blackA9};
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const AlertDialogContent = styled(AlertDialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`;

export const AlertDialogTitle = styled(AlertDialog.Title)`
  margin: 0;
  color: ${mauve.mauve12};
  font-size: 17px;
  font-weight: 500;
`;

export const AlertDialogDescription = styled(AlertDialog.Description)`
  margin-bottom: 20px;
  color: ${mauve.mauve11};
  font-size: 15px;
  line-height: 1.5;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Button = styled0('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  cursor: 'pointer',

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        '&:hover': { backgroundColor: red.red5 },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        '&:hover': { backgroundColor: mauve.mauve5 },
        '&:focus': { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});
