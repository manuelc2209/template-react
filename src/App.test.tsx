import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false
        }
    }
});

describe('App', () => {
    test('renders', () => {
        const { container } = render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        );
        expect(container).toBeDefined();
    });
});
