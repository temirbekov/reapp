import {ListChildComponentProps} from "react-window";
import Box from "@components/elements/atoms/Box";
import React from "react";
import {IITemData} from "./List";
import styled from "styled-components";
import Paragraph from "@components/elements/atoms/Paragraph";

const StyledRow = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0.8rem;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
`;

interface IRowProps extends ListChildComponentProps {
  data: IITemData
}

export const Row = ({ index, style, data }: IRowProps) => {
  const { points, clients, onClick } = data

  const clientId = points[index].client_id;
  const client = clients.get(clientId);
  const point = points[index];

  const handleClick = () => {
    onClick(point)
  }

  return (
    <Box style={style} onClick={handleClick}>
      <StyledRow>
        <Box pb="0.5rem">
          <Paragraph variant="body2">{client?.name}</Paragraph>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Paragraph>Price: {point.price}</Paragraph>
          <Paragraph>Type: {point.type}</Paragraph>
        </Box>
      </StyledRow>
    </Box>
  )
};
