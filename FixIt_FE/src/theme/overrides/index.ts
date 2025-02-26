// Third party
import merge from 'lodash/merge';

// Components
import TextFieldOverrides from './TextFieldOverrides';

export default function ComponentsOverrides() {
  return merge(
    TextFieldOverrides(),
  );
}
