// Integration test: <ConsultationFormModal> against a mocked API client.
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

vi.mock('@/api/client', () => ({
  ApiError: class ApiError extends Error {},
  api: { sendConsultation: vi.fn() },
}));

import { api } from '@/api/client';
import ConsultationFormModal from './ConsultationFormModal';

beforeEach(() => {
  vi.clearAllMocks();
});

async function fillAndSubmit(user) {
  await user.type(screen.getByLabelText(/^name/i), 'Jane Founder');
  await user.type(screen.getByLabelText(/^email/i), 'jane@example.com');
  await user.type(screen.getByLabelText(/message/i), 'We want to launch a DAO.');
  // Radix Select for the service interest.
  await user.click(screen.getByRole('combobox'));
  await user.click(await screen.findByRole('option', { name: 'Other' }));
  await user.click(screen.getByRole('button', { name: /send request/i }));
}

describe('<ConsultationFormModal>', () => {
  it('renders the consultation form when open', () => {
    render(<ConsultationFormModal open onOpenChange={vi.fn()} />);
    expect(screen.getByText('Request a Consultation')).toBeInTheDocument();
    expect(screen.getByLabelText(/^name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument();
  });

  it('submits the form and shows the success state', async () => {
    api.sendConsultation.mockResolvedValue({ ok: true });
    const user = userEvent.setup();

    render(<ConsultationFormModal open onOpenChange={vi.fn()} />);
    await fillAndSubmit(user);

    expect(await screen.findByText(/Request Sent Successfully/i)).toBeInTheDocument();
    expect(api.sendConsultation).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Jane Founder',
        email: 'jane@example.com',
        service_interest: 'other',
      }),
    );
  });

  it('shows an error message when the API call fails', async () => {
    api.sendConsultation.mockRejectedValue(Object.assign(new Error('x'), { status: 500 }));
    const user = userEvent.setup();

    render(<ConsultationFormModal open onOpenChange={vi.fn()} />);
    await fillAndSubmit(user);

    expect(await screen.findByText(/failed to send your request/i)).toBeInTheDocument();
    expect(screen.queryByText(/Request Sent Successfully/i)).not.toBeInTheDocument();
  });
});
