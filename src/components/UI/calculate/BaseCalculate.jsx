import {React, useState} from 'react';
import Button from '../button/Button';
import ButtonList from '../buttonList/ButtonList';
import Label from '../label/Label';
import classes from './Calculate.module.css';


function BaseCalculate() {
    let [buttons, setButtons] = useState(
        [
            'AC', '+/-', '%', '<', 
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', ',', '=', '+'
        ]
    )  
    let [label, setLabel] = useState('0');
    let [answer, setAnswer] = useState(0);
      
    
    function isOperation(sym){
        return sym === '*' || sym === '/' || sym === '+' || sym === '-';
    }
    
    function isNumber(sym){
        return /^[0-9]+$/.test(sym);
    }

    function getAnswer(ans){ 
        if(!/[^0-9]/.test(ans))
            return parseFloat(ans);

        function operation(a,b,o){
            console.log(a,b, o)
            switch(o){
                case "-":
                    return a - b;
                case "+":
                    return a + b;
                case "*":
                    return a * b;
                case "/":
                    return a / b;
            }
        }
        
        let valL = "";
        for(let x = 0; x < ans.length; ++x){
            let valR = `${valL}${ans[x]}`;
            let ansL = getAnswer(valL);
            let ansR = getAnswer(ans.replace(valR, ""));

            if(ans[x] === '+')
                return operation(ansL, ansR, ans[x]);

            valL = `${valL}${ans[x]}`;
        }
        valL = "";
        for(let x = 0; x < ans.length; ++x){
            let valR = `${valL}${ans[x]}`;
            let ansL = getAnswer(valL);
            let ansR = getAnswer(ans.replace(valR, ""));

            if(ans[x] === '-')
                return operation(ansL, ansR, ans[x]);

            valL = `${valL}${ans[x]}`;
        }
        valL = "";
        for(let x = 0; x < ans.length; ++x){
            let valR = `${valL}${ans[x]}`;
            let ansL = getAnswer(valL);
            let ansR = getAnswer(ans.replace(valR, ""));

            if(ans[x] === '*' || ans[x] === '/')
                return operation(ansL, ansR, ans[x]);

            valL = `${valL}${ans[x]}`;
        }
    }

    function pushButton(btn){
        // числа
        if (isNumber(btn)){
            if(label === '0') setLabel(btn);
            else setLabel(label + btn);
            return 0;
        } 
        if (btn === ','){
            if(/[0-9]$/.test(label))setLabel(label + btn);
            else if(/[+-\/\*]$/.test(label))setLabel(`${label}0${btn}`);
            return 0;
        }
        
        // операции +-*/
        if (isOperation(btn)){
            if(isOperation(label[label.length - 1]))setLabel(label.replace(/.$/, btn)); 
            else setLabel(label +  btn);
            return 0;
        }    

        switch(btn){
            case "AC":
                setLabel("0");  
                break;
            case '+/-':
                setAnswer(-answer);
                break;
            case '<' :
                setLabel(label.replace(/.$/, ""));
                break;
            case '=':
                setAnswer(getAnswer(label));
                break;
            case '%':
                setAnswer(getAnswer(label) / 100 * answer );
                break;
            default:
                setLabel(label);
        }
        // console.log(answer);
        // setAnswer( Math.round( answer*1000) / 1000);
        if(label.length === 1 && '<')
            setLabel("0");
            
        
    }
    return (
        <div className={classes.calculate}>
            <Label text={label} answer={answer}></Label>
            <ButtonList buttons={buttons} push={pushButton}></ButtonList>
           </div>
    )
}

export default BaseCalculate;

