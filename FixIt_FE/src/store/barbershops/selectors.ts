// Third party
import { RootState } from "../index";

const getBarbershops = (state: RootState) =>
  state.barbershopsReducer.barbershops;

export { getBarbershops };
