import { ModeOfOperation, utils } from "aes-js";

const KEY = utils.utf8.toBytes("69b18cd79d9a04556c5dc4d50c87dad3");
const IV = Array.from({ length: 16 }, (_, index) => 21 + index);
const SEGMENT_SIZE = 16;

export function encryptRequest(data: unknown): string {
  let text = JSON.stringify(data)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const missing = (SEGMENT_SIZE - (text.length % SEGMENT_SIZE)) % SEGMENT_SIZE;
  text = text.padEnd(text.length + missing);

  const cipher = new ModeOfOperation.cfb(KEY, IV, SEGMENT_SIZE);
  const encrypted = cipher.encrypt(utils.utf8.toBytes(text));
  const bytes = new Uint8Array([...IV, ...encrypted]);

  return btoa(String.fromCharCode(...bytes));
}

export function decryptRequest<T>(data: string): T {
  const raw = Uint8Array.from(atob(data), (char) => char.charCodeAt(0));
  const cipher = new ModeOfOperation.cfb(KEY, IV, SEGMENT_SIZE);
  const text = utils.utf8.fromBytes(cipher.decrypt(raw));

  return JSON.parse(text.slice(text.indexOf("d:") + 2)) as T;
}
