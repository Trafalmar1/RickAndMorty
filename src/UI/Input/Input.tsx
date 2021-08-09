import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { FC } from "react";

import {
  StyledInput,
  InputWrapper,
  Options,
  Option,
  OptionsContainer,
} from "./styles";

type InputProps = {
  value: string;
  name: string;
  placeholder?: string;
  color?: string;
  margin?: string;
  options?: string[];
  onChange?: (name: string, value: string) => void;
};

const Input: FC<InputProps> = ({
  value,
  name,
  placeholder,
  color,
  options,
  margin,
  onChange,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: any) => {
    const { current: wrap } = wrapRef;
    if (wrap && !wrap.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange && onChange(name, value);
  };

  const getPlaceholder = () => {
    return placeholder
      ? placeholder
      : name[0].toUpperCase() + name.substring(1);
  };

  const focusHandler = () => {
    if (options && options.length) setShowOptions(true);
  };

  const selectHandler = (value: string) => {
    onChange && onChange(name, value);
    setShowOptions(false);
  };

  const selectEnterPressHandler = (
    event: React.KeyboardEvent<HTMLDivElement>,
    value: string
  ) => {
    if (event.key === "Enter") {
      onChange && onChange(name, value);
      setShowOptions(false);
    }
  };

  const inputEnterPressHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setShowOptions(false);
    }
  };

  const filteredOptions = useCallback((): string[] => {
    if (!options) return [];
    const filteredOptions = options.filter(
      (item) => item.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    if (!filteredOptions[0]) return [];

    const isOneElementInArray = filteredOptions.length === 1;
    const isInputEqualsElement =
      filteredOptions[0].toLowerCase() === value.toLowerCase();

    if (isOneElementInArray && isInputEqualsElement) return [];

    return filteredOptions;
  }, [value, options]);

  return (
    <InputWrapper margin={margin} ref={wrapRef}>
      <StyledInput
        color={color}
        value={value}
        name={name}
        placeholder={getPlaceholder()}
        onChange={changeHandler}
        onFocus={focusHandler}
        onKeyPress={inputEnterPressHandler}
      />
      {showOptions && filteredOptions().length > 0 && (
        <Options>
          <OptionsContainer>
            {filteredOptions().map((o) => (
              <Option
                tabIndex={0}
                key={name + o}
                onKeyPress={(event: any) => selectEnterPressHandler(event, o)}
                onClick={() => selectHandler(o)}
              >
                {o}
              </Option>
            ))}
          </OptionsContainer>
        </Options>
      )}
    </InputWrapper>
  );
};
export default Input;
