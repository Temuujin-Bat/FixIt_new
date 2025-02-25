
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import {Iconify} from "../../../components";
import { GameTypes } from "../data/gameTypes.tsx";


const AirsoftGameTypes = () => {
  return (
    <div>
      {GameTypes.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill"/>}>
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            {accordion.detail}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export {
  AirsoftGameTypes
}
