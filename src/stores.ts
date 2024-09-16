import { writable } from "svelte/store";

export interface Guest {
  id: string;
  familyName: string;
  givenName: string;
  completed: boolean;
}

export const guestId = writable<string | null>(null);
export const familyName = writable<string | null>(null);
export const givenName = writable<string | null>(null);
export const completed = writable(false);
export const loading = writable(true);
