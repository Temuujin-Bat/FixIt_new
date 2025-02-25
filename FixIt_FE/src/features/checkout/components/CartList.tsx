// @mui
import { Table, TableBody, TableContainer } from '@mui/material';
// @types
// components
import { FC } from 'react';
//
import { TCheckoutCartItem } from '../../../types';
import { Scrollbar, TableHeadCustom } from '../../../components';
import { CartItem } from './CartItem';

const TABLE_HEAD = [
  { id: 'product', label: 'מוצר' },
  { id: 'price', label: 'מחיר' },
  { id: 'quantity', label: 'כמות' },
  { id: 'totalPrice', label: 'מחיר כולל', align: 'right' },
  { id: '' },
];

type TCartList = {
  products: TCheckoutCartItem[];
  onDelete: (id: number) => void;
  onDecreaseQuantity: (id: number) => void;
  onIncreaseQuantity: (id: number) => void;
};

const CartList: FC<TCartList> = ({
  products,
  onDelete,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => (
  <TableContainer sx={{ overflow: 'unset' }}>
    <Scrollbar>
      <Table sx={{ minWidth: 720 }}>
        <TableHeadCustom headLabel={TABLE_HEAD} />

        <TableBody>
          {products.map((row) => (
            <CartItem
              key={row.id}
              row={row}
              onDelete={() => onDelete(row.id)}
              onDecrease={() => onDecreaseQuantity(row.id)}
              onIncrease={() => onIncreaseQuantity(row.id)}
            />
          ))}
        </TableBody>
      </Table>
    </Scrollbar>
  </TableContainer>
);

export {
  CartList,
};
