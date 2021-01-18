import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { IconCheck, IconChecked } from './images/index';

interface IProp {
  value?: boolean;
  label?: string;
  onChange?: (value: any) => void;
}

const Index: React.FC<IProp> = ({ onChange, value, label }) => {
  useEffect(() => {
    if (typeof value !== 'undefined') {
      setCurrentValue(value);
    }
  }, [value]);
  const [currentValue, setCurrentValue] = useState(false);
  const checked = typeof value === 'undefined' ? currentValue : value;

  // 失去焦点验证数字，不正确则设置为0
  const onClick = () => {
    setCurrentValue(!checked);
    onChange && onChange(!checked);
  };
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.8}
      style={styles.checkBox}
    >
      <Image style={styles.icon} source={checked ? IconChecked : IconCheck} />
      {label ? <Text style={styles.checkBoxLabel}>{label}</Text> : null}
    </TouchableOpacity>
  );
};

export default Index;

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 20,
    height: 20,
  },
  checkBoxLabel: {
    marginLeft: 5,
    fontSize: 12,
    color: '#666',
  },
});
