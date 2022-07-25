import React, {ReactNode, useRef} from "react";
import {useResize} from "@hooks/screen/useResize";
import Box from "@components/elements/atoms/Box";

interface FixedListHeightProps {
  onSetHeight: (height: number) => void
  children: ReactNode
}

export const FixedListHeight = ({ onSetHeight, children }: FixedListHeightProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  useResize(() => {
    if (listRef.current) {
      onSetHeight(listRef.current.clientHeight)
    }
  })

  return (
    <Box height="100%" ref={listRef}>
      {children}
    </Box>
  )
}
