import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom'; 
import ErrorBoundary from './ErrorBoundary';

describe('Error Boundary', () => {
    test('Error Boundary', () => {
      const ThrowError = () => {
        throw new Error('Test');
      };
    render(
      <ErrorBoundary fallback={<ErrorBoundary />}>
        <ThrowError />
      </ErrorBoundary>
    );
  expect(screen.getByTestId('errorBoundary')).toBeVisible();
    });
  });