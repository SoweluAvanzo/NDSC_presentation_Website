// API client for the self-hosted Norta DeSyCo backend.
// Replaces the former @base44/sdk. Same-origin: in dev Vite proxies /api
// to the backend; in production Caddy does.

const BASE = "/api";

export class ApiError extends Error {
  constructor(status, code, data) {
    super(code || `HTTP ${status}`);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.data = data;
  }
}

async function request(path, { method = "GET", body } = {}) {
  const opts = { method, headers: {} };
  if (body !== undefined) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(body);
  }

  let res;
  try {
    res = await fetch(`${BASE}${path}`, opts);
  } catch (e) {
    throw new ApiError(0, "network_error", { cause: String(e) });
  }

  let data = null;
  if ((res.headers.get("content-type") || "").includes("application/json")) {
    data = await res.json().catch(() => null);
  }
  if (!res.ok) {
    const code = data && typeof data.detail === "string" ? data.detail : `http_${res.status}`;
    throw new ApiError(res.status, code, data);
  }
  return data;
}

export const api = {
  sendConsultation: (payload) => request("/consultation", { method: "POST", body: payload }),
};
