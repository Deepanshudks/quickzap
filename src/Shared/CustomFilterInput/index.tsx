import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";

import classNames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";

interface FormikProps {
  setFieldValue: (field: string, value: any) => void;
  values: { [key: string]: any };
  errors: { [key: string]: any };
  touched: { [key: string]: any };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

interface CustomInputProps extends Omit<TextFieldProps, "InputProps"> {
  name: string;
  formik?: FormikProps;
  size?: any;
  formLabel?: string;
  InputProps?: any;
  setValue?: (value: any) => void;
  uppercase?: boolean;
}

const CustomFilterInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  setValue,
  name,
  formik,
  size = "small",
  onBlur,
  disabled = false,
  formLabel,
  InputProps = {},
  className = "",
  type,
  color = "warning",
  helperText,
  uppercase = false,
  slotProps,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fieldValue, setFieldValue] = useState<any>(value);

  const getFormikValue = useCallback((formikValues: any, fieldName: string) => {
    const arrayMatch = fieldName.match(/^(\w+)\[(\d+)\]\.(.+)$/);
    if (arrayMatch) {
      const [_, arrayName, index, fieldName] = arrayMatch;
      const arrayValue = formikValues[arrayName];
      return arrayValue?.[Number(index)]?.[fieldName];
    }

    if (fieldName.includes(".")) {
      const fieldPath = fieldName.split(".");
      let currentValue = formikValues;
      for (const path of fieldPath) {
        if (!currentValue?.[path]) return undefined;
        currentValue = currentValue[path];
      }
      return currentValue;
    }
    return formikValues[fieldName];
  }, []);

  useEffect(() => {
    if (formik) {
      setFieldValue(getFormikValue(formik.values, name));
    } else if (value !== undefined) {
      setFieldValue(value);
    }
  }, [formik?.values, value, name, getFormikValue]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<any>) => {
      let newValue = event.target.value;
      if (newValue.length > 0 && newValue.startsWith(" ")) {
        newValue = newValue.trimStart();
      }
      newValue = newValue.replace(/  +/g, " ");
      const updatedValue = uppercase ? newValue.toUpperCase() : newValue;
      setFieldValue(updatedValue);
      if (formik) formik.setFieldValue(name, updatedValue);
      else if (setValue) setValue(updatedValue);
      else if (onChange) {
        const modifiedEvent = {
          ...event,
          target: { ...event.target, value: updatedValue },
        };
        onChange(modifiedEvent);
      }
    },
    [formik, name, onChange, setValue, uppercase]
  );

  const error = useMemo(() => {
    if (!formik) return null;

    const arrayMatch = name.match(/^(\w+)\[(\d+)\]\.(.+)$/);
    if (arrayMatch) {
      const [_, arrayName, index, fieldName] = arrayMatch;
      return (
        formik.touched?.[arrayName]?.[Number(index)]?.[fieldName] &&
        formik.errors?.[arrayName]?.[Number(index)]?.[fieldName]
      );
    }
    if (name.includes(".")) {
      const fieldPath = name.split(".");
      let touchedValue = formik.touched;
      let errorValue = formik.errors;
      for (const path of fieldPath) {
        touchedValue = touchedValue?.[path];
        errorValue = errorValue?.[path];
        if (!touchedValue || !errorValue) break;
      }
      return touchedValue && errorValue;
    }
    return formik.touched?.[name] && formik.errors?.[name];
  }, [formik, name]);

  const passwordInputProps =
    type === "password"
      ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
                size="small"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }
      : {};

  return (
    <FormControl
      className={classNames(className, " flex ", formik ? " pb-3!" : "")}
      fullWidth
    >
      {formLabel && <p className="py-1 text-black!">{formLabel}</p>}
      <TextField
        size={size}
        name={name}
        disabled={disabled}
        color={color}
        slotProps={{
          ...slotProps,
          input: {
            className: classNames(
              uppercase ? "!uppercase" : "",
              disabled ? "!text-black !text-opacity-100" : "",
              "rounded-lg!"
            ),
            ...InputProps,
            ...passwordInputProps,
          },
        }}
        type={showPassword && type === "password" ? "text" : type}
        error={!!error}
        onBlur={formik?.handleBlur || onBlur}
        value={fieldValue}
        onChange={handleChange}
        {...rest}
      />
      <FormHelperText
        error={!!error}
        className="text-red-500! absolute -bottom-3"
      >
        {helperText || error}
      </FormHelperText>
    </FormControl>
  );
};

export default React.memo(CustomFilterInput);
