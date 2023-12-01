import { useState } from 'react';
import './App.css';

function App() {
  const [numExib, setNumExib] = useState('');
  const [vlPass, setVlPass] = useState('');
  const [operador, setOperador] = useState('');
  const [conta, setConta] = useState('');
  const [valConta, setValConta] = useState(false);
  const [histContas, setHistContas] = useState('');
  const [histLeft, setHistLeft] = useState('');
  const maxLenght = 18;

  const calculateResult = () => {
    let resultado;
    if (operador == "÷") {
      setNumExib(parseFloat(vlPass) / parseFloat(numExib));
    }else if (operador == "x") {
      setNumExib(parseFloat(vlPass) * parseFloat(numExib));
    }else if (operador == "+") {
      setNumExib(parseFloat(vlPass) + parseFloat(numExib));
    }else if (operador == "-") {
      setNumExib(parseFloat(vlPass) - parseFloat(numExib));
    }
    if (!valConta) {
      const resultadoConta = `${vlPass} ${operador} ${numExib} = ${resultado} `;
      const result = `${vlPass} ${operador} ${numExib} =  `;
      setConta(resultadoConta);
      setConta(result);
      setHistContas(prevHistorico => [...prevHistorico, resultadoConta]);
      setHistLeft(prevHistorico => [...prevHistorico, result]);
      setValConta(true);
    }
  };
  
  const bttNumb = (number) => {
    const vlExato = number.target.value;
    if (valConta) {
      setValConta(false);
      setConta('');
    }
    if (numExib == '') {
      setNumExib(vlExato);
    } else {
      setNumExib(numExib + vlExato);
    }
  };

  const bttIgual = () => {
    calculateResult();
  };

  const bttLimparHist = () => {
    setNumExib('0');
    setVlPass('');
    setOperador('');
    setConta('');
  };

  const bttZerar = () => {
    setNumExib(0);
  };

  const bttBackSpace = () => {
    setNumExib((prevValue) => {
      const stringValue = String(prevValue);
      return stringValue.slice(0, -1);
    });
  };

  function operadorResult (e) {
    var operador = e.target.value;
   setOperador(operador)
   setVlPass(numExib)
   setNumExib(''); 
  }

  return (
    <>
      <div className='div-centro'>
        <div className='calc-esq'>
        <div className='div-res'>
            {numExib.length > maxLenght ? '...' + numExib.slice(-maxLenght) : numExib}
            <div className='div-histlow'>{conta}</div>
          </div>
          <div className='div-nums'>
            <button className='btn' id="CE" onClick={bttLimparHist}>AC</button>
            <button className='btn' id="C" onClick={bttZerar}>C</button>
            <button className='btn back' id="8" onClick={() => bttBackSpace()}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.70015 6.35982L3.53349 11.3598C3.22445 11.7307 3.22445 12.2693 3.53349 12.6402L7.70015 17.6402C7.89015 17.8682 8.1716 18 8.46838 18H18C19.6569 18 21 16.6569 21 15V9C21 7.34315 19.6569 6 18 6H8.46837C8.1716 6 7.89015 6.13182 7.70015 6.35982Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 10L13 12M13 12L11 14M13 12L11 10M13 12L15 14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
            <button className='btn' id="7" onClick={bttNumb} value={7}>7</button>
            <button className='btn' id="1" onClick={bttNumb} value={8}>8</button>
            <button className='btn' id="1" onClick={bttNumb} value={9}>9</button>
            <button className='btn oper' id="divisao" onClick={operadorResult} value={"÷"}>÷</button>
            <button className='btn' id="1" onClick={bttNumb} value={4}>4</button>
            <button className='btn' id="1" onClick={bttNumb} value={5}>5</button>
            <button className='btn' id="1" onClick={bttNumb} value={6}>6</button>
            <button className='btn oper' id="1" onClick={operadorResult} value={"x"}>x</button>
            <button className='btn' id="1" onClick={bttNumb} value={1}>1</button>
            <button className='btn' id="2" onClick={bttNumb} value={2}>2</button>
            <button className='btn' id="3"onClick={bttNumb} value={3}>3</button>
            <button className='btn oper' id="0" onClick={operadorResult} value={"-"}>-</button>
            <button className='btn' id="5" onClick={bttNumb} value={0}>0</button>
            <button className='btn' id="6" onClick={bttNumb} value={"."}>,</button>
            <button className='btn oper' id="4" onClick={() => bttIgual()}>=</button>
            <button className='btn oper' id="8" onClick={operadorResult} value={"+"}>+</button>
          </div>
        </div>
        <div className='calc-esq'>
          <div className='div-hist'>
            
            <div className='label-res'>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.67541V3C3 2.44772 2.55228 2 2 2C1.44772 2 1 2.44772 1 3V7C1 8.10457 1.89543 9 3 9H7C7.55229 9 8 8.55229 8 8C8 7.44772 7.55229 7 7 7H4.52186C4.54218 6.97505 4.56157 6.94914 4.57995 6.92229C5.621 5.40094 7.11009 4.22911 8.85191 3.57803C10.9074 2.80968 13.173 2.8196 15.2217 3.6059C17.2704 4.3922 18.9608 5.90061 19.9745 7.8469C20.9881 9.79319 21.2549 12.043 20.7247 14.1724C20.1945 16.3018 18.9039 18.1638 17.0959 19.4075C15.288 20.6513 13.0876 21.1909 10.9094 20.9247C8.73119 20.6586 6.72551 19.605 5.27028 17.9625C4.03713 16.5706 3.27139 14.8374 3.06527 13.0055C3.00352 12.4566 2.55674 12.0079 2.00446 12.0084C1.45217 12.0088 0.995668 12.4579 1.04626 13.0078C1.25994 15.3309 2.2082 17.5356 3.76666 19.2946C5.54703 21.3041 8.00084 22.5931 10.6657 22.9188C13.3306 23.2444 16.0226 22.5842 18.2345 21.0626C20.4464 19.541 22.0254 17.263 22.6741 14.6578C23.3228 12.0526 22.9963 9.30013 21.7562 6.91897C20.5161 4.53782 18.448 2.69239 15.9415 1.73041C13.4351 0.768419 10.6633 0.756291 8.14853 1.69631C6.06062 2.47676 4.26953 3.86881 3 5.67541Z" fill="#0F0F0F"></path> <path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2344 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.546 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" fill="#0F0F0F"></path> </g></svg>
              <p>Resultados</p>
            </div>
            <div className='div-histleft'>
              {histContas}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
