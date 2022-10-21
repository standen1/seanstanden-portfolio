import { render } from "@testing-library/react";
import Header from './Header';

describe("Site Header", () => {
    test("Check if renders in document.", () => {
        const { queryByTestId } = render(
            <Header />
        );
        expect(queryByTestId("site-header")).toBeTruthy();
    });
});