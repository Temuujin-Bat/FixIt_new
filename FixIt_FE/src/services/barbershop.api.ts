// Third party
import axios from "axios";

// Components
import { TAxiosError } from "../types/responses";
import { BASE_URL } from "../../config";
import { CONTROLLERS } from "../utils/enums";

const BarbershopsController = () => {
  const controllerName = CONTROLLERS.CUSTOMER;

  const getAllBarbershops = async <T>(): Promise<
    T | { success: boolean; error: TAxiosError }
  > => {
    try {
      const res = await axios.post<T>(
        `${BASE_URL}/${controllerName}/barbershops/get`,
        {},
      );

      return res.data;
    } catch (err) {
      throw err;
    }
  };

  return {
    getAllBarbershops,
  };
};

export { BarbershopsController };
