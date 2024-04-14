import { writable, type Writable } from "svelte/store";

const images: Writable<number[]> = writable([]);

const defaultMap = new Map();

const pictures = writable(defaultMap);

const media: Writable<{ data: number }> = writable({ "data": 0 });

export { images, pictures, media }