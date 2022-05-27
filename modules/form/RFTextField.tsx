import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import TextField, { OnePirateTextFieldProps } from '../components/TextField';

function RFTextField(
    props: OnePirateTextFieldProps & FieldRenderProps<string, HTMLElement>,
) {
    const {
        autoComplete,
        input,
        InputProps,
        meta: { touched, error, submitError },
        ...other
    } = props

    return (
        <TextField
            variant="standard"
            error={Boolean(!!touched && (error || submitError))}
            {...input}
            {...other}
            InputProps={{
              inputProps: {
                autoComplete,
              },
              ...InputProps,
            }}
            helperText={touched ? error || submitError : ''}
        />
    )
}

export default RFTextField;