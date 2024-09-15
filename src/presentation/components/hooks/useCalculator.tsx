import React, {useRef, useState} from 'react';


enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
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

  const setLastNumber = () =>{
    if(number.endsWith('.')){
      setPrevNumber(number.slice(0, -1));
    }else {
      setPrevNumber(number);
    }

    setNumber('0');
  }

    const divideOperation = () => {
      setLastNumber();
      lastOperation.current = Operator.divide
    }

    const multiplyOperator = () => {
      setLastNumber();
      lastOperation.current = Operator.multiply
    }

    const subtractOperation = () => {
      setLastNumber();
      lastOperation.current = Operator.subtract;
    }

    const addOperation = () => {
      setLastNumber();
      lastOperation.current = Operator.add;
    }

    const calculatorResult = () =>{
      const num1 = Number(number);
      const num2 = Number(prevNumber);

      switch(lastOperation.current){
        case Operator.add:
         setNumber(`${num1 + num2}`);
         break;
         case Operator.subtract:
         setNumber(`${num2 -num1 }`);
         break;
         case Operator.multiply:
         setNumber(`${num1 * num2}`);
         break;
         case Operator.divide:
         setNumber(`${ num2 / num1}`);
         break;

        default:
          throw new Error('Operation not implemented');
      }

      setPrevNumber('0')
    }

  return {
    //Properties
    number,
    prevNumber,
    //Methods
    buildNumber,
    toggleSing,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperator,
    subtractOperation,
    addOperation,
    calculatorResult
  };
};
