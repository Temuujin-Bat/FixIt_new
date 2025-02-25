// MUI
import {
  Collapse,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// Components
import { TEvent } from "../type";

export default function UserEventsRegisteredPlayers({
  isOpen,
  event,
}: {
  isOpen: boolean;
  event?: TEvent;
}) {
  return (
    <Collapse timeout={{ enter: 500, exit: 300 }} in={isOpen} unmountOnExit>
      <Paper
        elevation={10}
        sx={{
          borderRadius: "0px 0px 20px 20px",
          transition: "opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <TableContainer sx={{ borderRadius: "0px 0px 20px 20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    textAlign={"right"}
                    variant="subtitle1"
                    color={"primary.darker"}
                  >
                    שם:
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle1"
                    color={"primary.darker"}
                    textAlign={"right"}
                  >
                    מייל:
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle1"
                    color={"primary.darker"}
                    textAlign={"right"}
                  >
                    טלפון:
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle1"
                    color={"primary.darker"}
                    textAlign={"right"}
                  >
                    פרטים נוספים:
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {event?.eventInfo?.registeredPlayers?.length ? (
                event?.eventInfo?.registeredPlayers?.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Typography variant="body2" textAlign={"right"}>
                        {player.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" textAlign={"right"}>
                        {player.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" textAlign={"right"}>
                        {player.phone}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" textAlign={"right"}>
                        {player.message}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4}>
                    <Typography
                      textAlign="center"
                      variant="subtitle1"
                      color="error.main"
                    >
                      אין שחקנים רשומים
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Collapse>
  );
}
