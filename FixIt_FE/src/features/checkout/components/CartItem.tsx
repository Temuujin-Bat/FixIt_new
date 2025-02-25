// @mui
import {
  Box,
  Stack,
  TableRow,
  TableCell,
  Typography,
  IconButton,
} from "@mui/material";
// utils
import { FC } from "react";
// @types
import { TCheckoutCartItem } from "../../../types";
import Image from "../../../components/image";
import { ColorPreview, Iconify, IncrementerButton } from "../../../components";
import { fCurrency } from "../../../utils/formatNumber";

type TCartItem = {
  row: TCheckoutCartItem;
  onDelete: VoidFunction;
  onDecrease: VoidFunction;
  onIncrease: VoidFunction;
};

const CartItem: FC<TCartItem> = ({ row, onDelete, onDecrease, onIncrease }) => {
  const { name, price, colors, thumbNail, quantity, unitsInStock } = row;

  return (
    <TableRow>
      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Image
          alt="product image"
          src={thumbNail}
          sx={{
            width: 64,
            height: 64,
            borderRadius: 1.5,
            mr: 2,
          }}
        />

        <Stack spacing={0.5}>
          <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
            {name}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: "body2", color: "text.secondary" }}
          >
            <ColorPreview colors={colors} />
          </Stack>
        </Stack>
      </TableCell>

      <TableCell>{fCurrency(price)}</TableCell>

      <TableCell>
        <Box sx={{ width: 96, textAlign: "right" }}>
          <IncrementerButton
            quantity={quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            disabledDecrease={quantity <= 1}
            disabledIncrease={quantity >= (unitsInStock || 0)}
          />
        </Box>
      </TableCell>

      <TableCell align="right">{fCurrency(price * quantity)}</TableCell>

      <TableCell align="right">
        <IconButton onClick={onDelete}>
          <Iconify icon="eva:trash-2-outline" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export { CartItem };
