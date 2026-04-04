import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser';
import Form from '../src/Components/Form'

test('check for label text', async () => {
    await render(<Form />);

    const label = page.getByTestId('ratingLabel').element();
    expect(label.textContent).toBe("Leave a review:");
})