import { UseFormReturn, FormProvider as Form } from 'react-hook-form';
import {FC} from "react";

type TFormProvider = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

const FormProvider: FC<TFormProvider> = ({ children, onSubmit, methods }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}

export {
  FormProvider
}
