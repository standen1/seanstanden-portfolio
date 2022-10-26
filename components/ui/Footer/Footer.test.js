import { render } from "@testing-library/react";
import Footer from './Footer';

describe("Site Header", () => {
    test("Check if renders in document.", () => {
        const { queryByTestId } = render(
            <Footer />
        );
        expect(queryByTestId("site-footer")).toBeTruthy();
    });
});