import { writable } from "svelte/store";

/** GET /api/get-my-dear-guest のレスポンスの型 */
export interface Guest {
  id: string;
  familyName: string;
  givenName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  birthday: string;
  postalCode: string;
  prefecture: string;
  address: string;
  willAttend: string;
  willUseShuttleBus: string;
  completed: boolean;
}

export const guestId = writable<string | null>(null);
export const familyName = writable<string | null>(null);
export const givenName = writable<string | null>(null);
export const completed = writable(false);
export const loading = writable(true);
export const willAttend = writable<string | null>(null);
export const phoneNumber = writable<string | null>(null);
export const email = writable<string | null>(null);
export const birthday = writable<string | null>(null);
export const postalCode = writable<string | null>(null);
export const prefecture = writable<string | null>(null);
export const address = writable<string | null>(null);
export const willUseShuttleBus = writable<string | null>(null);
