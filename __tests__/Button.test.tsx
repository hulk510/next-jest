import { SimpleButton } from '@/components/SimpleButton';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('button changes state on click', () => {
  render(<SimpleButton />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('OFF');
});

test('button toggle on/off', async () => {
  const event = userEvent.setup();
  render(<SimpleButton />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('OFF');
  await event.click(button);
  expect(button).toHaveTextContent('ON');
});

test('描画されてすぐはOFF', () => {
  const view = render(<SimpleButton />);
  expect(view.container).toMatchSnapshot();
});
