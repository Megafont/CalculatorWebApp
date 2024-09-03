'use client' // This is a React directive telling it that this component is a client component.

import React from 'react'

export default function Calculator()
{
    const [runningValue, SetRunningValue] = React.useState(Number(0));
    const [currentValue, SetCurrentValue] = React.useState(Number(0));
    const [lastOperation, SetLastOperation] = React.useState(Number(-1));
    const [memoryValue, SetMemoryValue] = React.useState(Number(0));

    var newRunningValue = Number(runningValue);
    var newCurrentValue = Number(currentValue);
    var newLastOperation = Number(lastOperation);
    var newMemoryValue = Number(memoryValue);


    // ******************************************************************************************************************************************
    // Create a class that manages the state and gives access to both the current and new values for each state variable?
    // ******************************************************************************************************************************************


    return (
        <div className="CalculatorParent">
            <table className="CalculatorTable1">
                <tbody>
                    <tr>
                        <td colSpan="5" id="DisplayBorder">
                            <p id="Display">0</p>
                        </td>
                    </tr>

                    <tr id="DisplaySpacer">
                    </tr>

                    <tr>
                        <td>
                            <button id="btnMC" className="MemButton" onClick={OnBtnMCClicked}>MC</button>
                        </td>
                        <td>
                            <button id="btnMR" className="MemButton" onClick={OnBtnMRClicked}>MR</button>
                        </td>
                        <td>
                            <button id="btnMPlus" className="MemButton" onClick={OnBtnMPlusClicked}>M+</button>
                        </td>
                        <td>
                            <button id="btnMMinus" className="MemButton" onClick={OnBtnMMinusClicked}>M-</button>
                        </td>
                        <td>
                            <button id="btnMS" className="MemButton" onClick={OnBtnMSClicked}>MS</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="CalculatorTable2">
                <tbody>
                    <tr>
                        <td>
                            <button id="btnAC" className="ClearButton" onClick={OnBtnACClicked}>AC</button>
                        </td>
                        <td>
                            <button id="btnCE" className="ClearButton" onClick={OnBtnCEClicked}>CE</button>
                        </td>
                        <td>
                            <button id="btnModulus" className="OperationButton" onClick={OnBtnModulusClicked}>%</button>
                        </td>
                        <td>
                            <button id="btnBackspace" className="OperationButton" onClick={OnBtnBackspaceClicked}>⌫</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="btnOneOverX" className="OperationButton" onClick={OnBtnOneOverXClicked}>¹⁄ₓ</button>
                        </td>
                        <td>
                            <button id="btnXSquared" className="OperationButton" onClick={OnBtnXSquaredClicked}>ₓ²</button>
                        </td>
                        <td>
                            <button id="btnSquareRootOfX" className="OperationButton" onClick={OnBtnSquareRootOfXClicked}>²√ ̅ₓ</button>
                        </td>
                        <td>
                            <button id="btnDivide" className="OperationButton" onClick={OnBtnDivideClicked}>÷</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="btn7" onClick={OnBtn7Clicked}>7</button>
                        </td>
                        <td>
                            <button id="btn8" onClick={OnBtn8Clicked}>8</button>
                        </td>
                        <td>
                            <button id="btn9" onClick={OnBtn9Clicked}>9</button>
                        </td>
                        <td>
                            <button id="btnMultiply" className="OperationButton" onClick={OnBtnMultiplyClicked}>x</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="btn4" onClick={OnBtn4Clicked}>4</button>
                        </td>
                        <td>
                            <button id="btn5" onClick={OnBtn5Clicked}>5</button>
                        </td>
                        <td>
                            <button id="btn6" onClick={OnBtn6Clicked}>6</button>
                        </td>
                        <td>
                            <button id="btnSubtract" className="OperationButton" onClick={OnBtnSubtractClicked}>̶ </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="btn1" onClick={OnBtn1Clicked}>1</button>
                        </td>
                        <td>
                            <button id="btn2" onClick={OnBtn2Clicked}>2</button>
                        </td>
                        <td>
                            <button id="btn3" onClick={OnBtn3Clicked}>3</button>
                        </td>
                        <td>
                            <button id="btnAdd" className="OperationButton" onClick={OnBtnAddClicked}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="btnPlusMinus" onClick={OnBtnPlusMinusClicked}>+/-</button>
                        </td>
                        <td>
                            <button id="btn0" onClick={OnBtn0Clicked}>0</button>
                        </td>
                        <td>
                            <button id="btnDot" onClick={OnBtnDotClicked}>.</button>
                        </td>
                        <td>
                            <button id="btnEquals" className="EqualsButton" onClick={OnBtnEqualsClicked}>=</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    ); // End Calculator


    function UpdateDisplay(value)
    {
        document.getElementById('Display').textContent = Number(value);
    }

    function OnBtn0Clicked()
    {
        AddDigitToCurValue('0');

        DebugLog("0");
    }

    function OnBtn1Clicked()
    {
        AddDigitToCurValue('1');

        DebugLog("1");
    }

    function OnBtn2Clicked()
    {
        AddDigitToCurValue('2');

        DebugLog("2");
    }

    function OnBtn3Clicked()
    {
        AddDigitToCurValue('3');

        DebugLog("3");
    }

    function OnBtn4Clicked()
    {
        AddDigitToCurValue('4');

        DebugLog("4");
    }

    function OnBtn5Clicked()
    {
        AddDigitToCurValue('5');

        DebugLog("5");
    }

    function OnBtn6Clicked()
    {
        AddDigitToCurValue('6');

        DebugLog("6");
    }

    function OnBtn7Clicked()
    {
        AddDigitToCurValue('7');

        DebugLog("7");
    }

    function OnBtn8Clicked()
    {
        AddDigitToCurValue('8');

        DebugLog("8");
    }

    function OnBtn9Clicked()
    {
        AddDigitToCurValue('9');

        DebugLog("9");
    }

    function OnBtnMCClicked()
    {
        UpdateMemoryValue(0);

        DebugLog("MC");
    }

    function OnBtnMRClicked()
    {
        UpdateCurrentValue(newMemoryValue);

        UpdateDisplay(newMemoryValue);

        DebugLog("MR");
    }

    function OnBtnMPlusClicked()
    {
        UpdateMemoryValue(Number(Number(newMemoryValue) + Number(newCurrentValue)))

        Updatedisplay(newMemoryValue);

        DebugLog("M+");
    }

    function OnBtnMMinusClicked()
    {
        UpdateMemoryValue(Number(Number(newMemoryValue) - Number(newCurrentValue)))

        Updatedisplay(newMemoryValue);

        DebugLog("M-");
    }

    function OnBtnMSClicked()
    {
        UpdateMemoryValue(newCurrentValue);

        DebugLog("MS");
    }

    function OnBtnPlusMinusClicked()
    {
        UpdateCurrentValue(Number(newCurrentValue) * Number(-1));
        UpdateDisplay(newCurrentValue);

        DebugLog("+/-");
    }

    function OnBtnDotClicked()
    {
        if (String(newCurrentValue).indexOf('.') > -1)
        {
            console.log(".    ERROR: Current value already contains a decimal symbol.");
            return;
        }

        AddDigitToCurValue('.');

        DebugLog(".");
    }

    function OnBtnBackspaceClicked()
    {
        if (String(newCurrentValue.length > 0))
        {
            UpdateCurrentValue(String(newCurrentValue).substr(1));

            UpdateDisplay(newCurrentValue);
        }

        DebugLog("BckSpc");
    }

    function OnBtnAddClicked()
    {
        var newCurVal = Number(newCurrentValue);
        if (newCurVal != 0)
            UpdateRunningValue(newCurVal);

        UpdateCurrentValue(0);
        UpdateLastOperation(1);

        UpdateCurrentValue = 0;

        DebugLog("+");
    }

    function OnBtnSubtractClicked()
    {
        var newCurVal = Number(newCurrentValue);
        if (newCurVal != 0)
            UpdateRunningValue(newCurVal);

        UpdateCurrentValue(0);
        UpdateLastOperation(2);

        UpdateCurrentValue = 0;

        DebugLog("̶-");
    }

    function OnBtnMultiplyClicked()
    {
        var newCurVal = Number(newCurrentValue);
        if (newCurVal != 0)
            UpdateRunningValue(newCurVal);

        UpdateCurrentValue(0);
        UpdateLastOperation(3);

        UpdateCurrentValue = 0;

        DebugLog("x");
    }

    function OnBtnDivideClicked()
    {
        var newCurVal = Number(newCurrentValue);
        if (newCurVal != 0)
            UpdateRunningValue(newCurVal);

        UpdateCurrentValue(0);
        UpdateLastOperation(4);

        DebugLog("÷");
    }

    function OnBtnModulusClicked()
    {
        var newCurVal = Number(newCurrentValue);
        if (newCurVal != 0)
            UpdateRunningValue(newCurVal);

        UpdateCurrentValue(0);
        UpdateLastOperation(5);

        DebugLog("%");
    }

    function OnBtnOneOverXClicked()
    {
        UpdateCurrentValue(Number(1 / Number(newCurrentValue)));

        DebugLog("¹⁄ₓ");

        UpdateDisplay(newCurrentValue);
    }

    function OnBtnXSquaredClicked()
    {
        UpdateCurrentValue(Number(newCurrentValue) * Number(newCurrentValue));

        DebugLog("ₓ²");

        UpdateDisplay(newCurrentValue);
    }

    function OnBtnSquareRootOfXClicked()
    {
        UpdateCurrentValue(Math.sqrt(Number(newCurrentValue)));

        DebugLog("²√ ̅ₓ");

        UpdateDisplay(newCurrentValue);
    }

    function OnBtnACClicked()
    {
        UpdateCurrentValue(0);
        UpdateRunningValue(0);
        UpdateLastOperation(1);
        UpdateMemoryValue(0);

        DebugLog("AC");

        UpdateDisplay(newCurrentValue);
    }

    function OnBtnCEClicked()
    {
        UpdateCurrentValue(0);

        DebugLog("CE");

        UpdateDisplay(newCurrentValue);
    }

    function OnBtnEqualsClicked()
    {
        DoOperation();

        UpdateCurrentValue(0);
        UpdateLastOperation(-1);

        DebugLog("=");
    }


    // UTILITY FUNCTIONS
    // ----------------------------------------------------------------------------------------------------------------------

    function AddDigitToCurValue(digit)
    {
        UpdateCurrentValue(currentValue + digit);
        UpdateDisplay(newCurrentValue);
    }

    function DoOperation()
    {
        switch (Number(newLastOperation))
        {
            case 1:
                UpdateRunningValue(Number(Number(newRunningValue) + Number(newCurrentValue)));
                break;
            case 2:
                UpdateRunningValue(Number(Number(newRunningValue) - Number(newCurrentValue)));
                break;
            case 3:
                UpdateRunningValue(Number(Number(newRunningValue) * Number(newCurrentValue)));
                break;
            case 4:
                UpdateRunningValue(Number(Number(newRunningValue) / Number(newCurrentValue)));
                break;
            case 5:
                UpdateRunningValue(Number(Number(newRunningValue) % Number(newCurrentValue)));
                break;
            default:
                console.log("=    ERROR: No operation is currently specified.")
                return;
        }

        UpdateCurrentValue(0);
        UpdateDisplay(newRunningValue);
    }

    function UpdateRunningValue(value)
    {
        newRunningValue = Number(value);
        SetRunningValue(value);
    }

    function UpdateCurrentValue(value)
    {
        newCurrentValue = Number(value);
        SetCurrentValue(value);
    }

    function UpdateLastOperation(value)
    {
        newLastOperation = Number(value);
        SetLastOperation(value);
    }

    function UpdateMemoryValue(value)
    {
        newMemoryValue = Number(value);
        SetMemoryValue(value);
    }

    function DebugLog(btnName)
    {
        console.log(btnName + "    RunningValue: " + newRunningValue + "    CurrentValue: " + newCurrentValue + "    LastOperation: " + newLastOperation + "    MemoryValue: " + newMemoryValue);
    }
}

