// src/utils/slugify.js
export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // non-alphanum jadi dash
    .replace(/(^-|-$)/g, '');    // hapus dash di awal/akhir
}
