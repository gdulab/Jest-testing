import { cleanup, render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

const testCasesPLNtoUSD = [
    { from: 'PLN', to: 'USD', amount: 100, result: 'PLN 100.00 = $28.57' },
    { from: 'PLN', to: 'USD', amount: 24, result: 'PLN 24.00 = $6.86' },
    { from: 'PLN', to: 'USD', amount: 113, result: 'PLN 113.00 = $32.29' },
    { from: 'PLN', to: 'USD', amount: 4273, result: 'PLN 4,273.00 = $1,220.86' }
]

const testCasesUSDtoPLN = [
    { from: 'USD', to: 'PLN', amount: 140, result: '$140.00 = PLN 490.00' },
    { from: 'USD', to: 'PLN', amount: 2456, result: '$2,456.00 = PLN 8,596.00' },
    { from: 'USD', to: 'PLN', amount: 11, result: '$11.00 = PLN 38.50' },
    { from: 'USD', to: 'PLN', amount: 47, result: '$47.00 = PLN 164.50' }
]

const testCasesSameCurency = [
    { from: 'USD', to: 'USD', amount: 235, result: '$235.00 = $235.00' },
    { from: 'USD', to: 'USD', amount: 4723, result: '$4,723.00 = $4,723.00' },
    { from: 'PLN', to: 'PLN', amount: 235, result: 'PLN 235.00 = PLN 235.00' },
    { from: 'PLN', to: 'PLN', amount: 7239, result: 'PLN 7,239.00 = PLN 7,239.00' }
]

const testCasesNegativeValue = [
    { from: 'PLN', to: 'USD', amount: -100, result: 'Wrong value...' },
    { from: 'USD', to: 'PLN', amount: -140, result: 'Wrong value...' },
    { from: 'USD', to: 'USD', amount: -4723, result: 'Wrong value...' },
    { from: 'PLN', to: 'PLN', amount: -235, result: 'Wrong value...' },
]

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    })

    for (const testObj of testCasesPLNtoUSD) {
        it('should render proper info about conversion when PLN -> USD', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.result);
        })
        cleanup();
    }

    for (const testObj of testCasesUSDtoPLN) {
        it('should render proper info about conversion when USD -> PLN', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.result);
        })
        cleanup();
    }

    for (const testObj of testCasesSameCurency) {
        it('should render proper info about conversion when currences are identical', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.result);
        })
        cleanup();
    }

    for (const testObj of testCasesNegativeValue) {
        it('should render proper message when value is negative', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.result);
        })
        cleanup();
    }
});