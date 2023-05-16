import * as React from "react";
import styled from "styled-components";

// rounded-md border
export const TableBlock = styled.div`
  width: 100%;
  overflow: auto;
  border: 1px solid ${({ theme }) => theme.colors.gray[6]};
  border-radius: 4px;
`;

// className={cn("w-full caption-bottom text-sm", className)}

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const TableHeader = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[6]};

  &:hover {
    tr {
      background-color: ${({ theme }) => theme.colors.gray[1]};
    }
  }
`;

// className={cn("[&_tr:last-child]:border-0", className)}
export const TableBody = styled.tbody``;

// "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
export const TableRow = styled.tr`
  &:not(:last-child) {
    td {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[6]};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[1]};
  }
`;

// "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
export const TableHead = styled.th`
  padding: 1rem;
  vertical-align: middle;
  text-align: left;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[6]};
  color: ${({ theme }) => theme.colors.gray[9]};
`;

// className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
export const TableCell = styled.td`
  padding: 1rem;
  vertical-align: middle;
`;

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    // className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    // className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

export { TableFooter, TableCaption };
