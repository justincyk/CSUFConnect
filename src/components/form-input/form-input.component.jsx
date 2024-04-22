import { FormInputLabel, Input, Group } from "./form-input.styles";

// Can take multiple arguments due to the spread "..."
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {/* Destructure the otherProps object now */}
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
