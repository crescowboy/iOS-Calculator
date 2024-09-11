import React, {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  // Borrar el ultimo numero
  const deleteOperation = () => {
    let lastNumber = number.slice(0, -1);
    setNumber(lastNumber);

    if (
      lastNumber.length === 0 ||
      (lastNumber.includes('-') && lastNumber.length === 1)
    ) {
      setNumber('0');
    }
  };

  const toggleSing = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const buildNumber = (numberString: String) => {
    if (number.includes('.') && numberString === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      //Evaluar si es otro cero o no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      // Evaluar si es diferente de cero, no hay punto, y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      // Evitar 000000
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  return {
    //Properties
    number,
    //Methods
    buildNumber,
    toggleSing,
    clean,
    deleteOperation,
  };
};
