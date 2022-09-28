import { renderWithRouter } from '@test-utils';
import React from 'react';
import reduxMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { initialState } from '@store';
import Libraries from './Libraries.container';

describe('Libraries', () => {
    const mockStore = reduxMockStore(),
        renderLibraries = (store: ReturnType<typeof mockStore>) =>
            renderWithRouter(
                <Provider store={store}>
                    <Libraries />
                </Provider>
            );

    it('should render properly', () => {
        const store = mockStore({ ...initialState, loading: { libraries: { isLoading: false } } });
        const { container } = renderLibraries(store);
        expect(container).toMatchSnapshot();
    });

    it('should show loading if isLoading Prop is true', () => {
        const store = mockStore({ ...initialState, loading: { libraries: { isLoading: true } } });
        const { container } = renderLibraries(store);
        expect(container).toMatchSnapshot();
    });
});
