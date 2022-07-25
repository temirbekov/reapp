import Paragraph from "@components/elements/atoms/Paragraph";
import ContainerFull from "@components/templates/ContainerFull";
import Box from "@components/elements/atoms/Box";

import React from "react";
import List from "./List";
import MapBox from "./MapBox";


const MapPage = () => {
  return (
    <ContainerFull>
      <Paragraph mt="1.5rem" mb="1rem" variant="h4">
        Карта
      </Paragraph>
      <Box
        display="grid"
        gridTemplateColumns={ {mobile: '1fr', tabletL: '300px 1fr' }}
        gridAutoRows={ {mobile: "240px 1fr", tabletL: '1fr' }}
        gridGap="1rem"
        gridRowGap="1rem"
        height="calc(100vh - 8rem)"
      >
        <Box height={ {mobile: '240px', tabletL: '100%' }}>
          <List />
        </Box>
        <Box>
          <MapBox />
        </Box>
      </Box>
    </ContainerFull>
  )
}

export default MapPage