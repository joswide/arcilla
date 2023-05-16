// @ts-ignore
import styled from 'styled-components';
import { blackA } from '@radix-ui/colors';
import { pixels } from "../../utils";
import { SIZES } from "../../aliases";

export const UnitBlock = styled.span`
  position: absolute;
  text-align: right;
  right: 0px;
  top: 50%;
  padding-right: 8px;
  transform: translate(0, -50%);
`;

export const Input = styled.input<any>`
  transition: all 1.2s ease-in-out;
  all: unset;
  box-sizing: border-box;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  font-size: 15px;
  font-size: ${
    // @ts-ignore
    ({ theme, size }) => theme.fontSizes[SIZES[size]]
  };
  line-height: 1;

  color: #fff;
  color: ${({ theme }) => theme.colors.primary[11]};
  background-color: ${({ theme }) => theme.colors.primary[0]};
  box-shadow: 0 0 0 1px ${blackA.blackA9};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary[7]};

  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary[8]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[9]};
  }

  &::selection {
    background-color: ${({ theme }) => theme.colors.primary[6]};
    color: #fff;
  }

  padding: 0 ${
    // @ts-ignore
    ({ theme, size }) => pixels(theme.space[SIZES[size]]) / 2
  }px;
  height: ${
    // @ts-ignore
    ({ theme, size }) => `${pixels(theme.space[SIZES[size]]) * 2 + pixels(theme.space[SIZES[size]]) / 2}px`
  };
`;

// height: ${({ theme, size = "medium" }) => `${pixels(theme.space[SIZES[size] || 1]) * 2 + pixels(theme.space[SIZES[size]]) / 2}px`};

