// Unit tests for the API client — fetch is stubbed.
import { afterEach, describe, expect, it, vi } from 'vitest';
import { api, ApiError } from './client';

function jsonResponse(body, { ok = true, status = 200 } = {}) {
  return {
    ok,
    status,
    headers: { get: (h) => (h.toLowerCase() === 'content-type' ? 'application/json' : null) },
    json: async () => body,
  };
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('api client', () => {
  it('POSTs the consultation payload as JSON', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ ok: true }));
    vi.stubGlobal('fetch', fetchMock);

    await api.sendConsultation({
      name: 'Jane',
      email: 'jane@x.com',
      service_interest: 'governance',
      message: 'Hi',
    });

    const [url, opts] = fetchMock.mock.calls[0];
    expect(url).toBe('/api/consultation');
    expect(opts.method).toBe('POST');
    expect(opts.headers['Content-Type']).toBe('application/json');
    expect(JSON.parse(opts.body)).toMatchObject({ name: 'Jane', service_interest: 'governance' });
  });

  it('throws ApiError carrying status + backend detail code', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        jsonResponse({ detail: 'message_not_delivered' }, { ok: false, status: 502 }),
      ),
    );

    await expect(
      api.sendConsultation({ name: 'X', email: 'x@x.com', service_interest: 'other', message: 'm' }),
    ).rejects.toMatchObject({ name: 'ApiError', status: 502, code: 'message_not_delivered' });
  });

  it('wraps network failures as ApiError(0, network_error)', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('offline')));

    const err = await api
      .sendConsultation({ name: 'X', email: 'x@x.com', service_interest: 'other', message: 'm' })
      .catch((e) => e);
    expect(err).toBeInstanceOf(ApiError);
    expect(err.status).toBe(0);
    expect(err.code).toBe('network_error');
  });
});
