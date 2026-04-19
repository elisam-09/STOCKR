'use strict';
// =============================================
// STOCKR www2 — Monochrome
// =============================================

// ── SVG Icons ─────────────────────────────────
const IC = {
  home:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  box:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  tag:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  dollar:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  bar:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  plus:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  left:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  search:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  alert:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  check:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  xmark:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  warn:     `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  chevron:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  minus:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  inbox:    `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  tagLg:    `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  dollarLg: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  download: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  trending: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  settings: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  user:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  users:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  usersLg:  `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  phone:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  bell:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  moon:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  logout:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  info:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  truck:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  trash:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  eye:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  whatsapp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  pdf:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  camera:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  cameraLg: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  logo:     `<svg width="22" height="22" viewBox="0 0 576 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18zM288 102.2l52.8 107.5c4.6 9.3 13.4 15.8 23.7 17.3l118.1 17.2-85.5 83.5c-7.4 7.2-10.8 17.6-9 27.8L411 473.1l-105.6-56.3c-9.3-5-20.4-5-29.7 0L170.1 473.1l20.2-117.6c1.8-10.2-1.6-20.6-9-27.8L95.8 244.2l118.1-17.2c10.3-1.5 19.1-8 23.7-17.3L288 102.2zm195.2-61.7c-5.6-11.2-16.9-18.5-29.5-18.5s-23.9 7.2-29.5 18.5l-21.8 44.4-48.8 7.1c-12.1 1.8-22.2 10.2-25.9 21.8s-.7 24.4 7.9 32.9l35.4 34.5-8.3 48.8c-2.1 12.1 3 24.4 13 31.6s23.2 8.1 34.1 2.3l43.8-23 43.8 23c10.9 5.7 24.1 4.9 34.1-2.3s15.1-19.5 13-31.6l-8.4-48.8 35.4-34.5c8.6-8.5 11.7-21.4 7.9-32.9s-13.8-20-25.9-21.8l-48.8-7.1-21.5-44.3z"/></svg>`,
  logoLg:   `<svg width="40" height="40" viewBox="0 0 576 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18zM288 102.2l52.8 107.5c4.6 9.3 13.4 15.8 23.7 17.3l118.1 17.2-85.5 83.5c-7.4 7.2-10.8 17.6-9 27.8L411 473.1l-105.6-56.3c-9.3-5-20.4-5-29.7 0L170.1 473.1l20.2-117.6c1.8-10.2-1.6-20.6-9-27.8L95.8 244.2l118.1-17.2c10.3-1.5 19.1-8 23.7-17.3L288 102.2zm195.2-61.7c-5.6-11.2-16.9-18.5-29.5-18.5s-23.9 7.2-29.5 18.5l-21.8 44.4-48.8 7.1c-12.1 1.8-22.2 10.2-25.9 21.8s-.7 24.4 7.9 32.9l35.4 34.5-8.3 48.8c-2.1 12.1 3 24.4 13 31.6s23.2 8.1 34.1 2.3l43.8-23 43.8 23c10.9 5.7 24.1 4.9 34.1-2.3s15.1-19.5 13-31.6l-8.4-48.8 35.4-34.5c8.6-8.5 11.7-21.4 7.9-32.9s-13.8-20-25.9-21.8l-48.8-7.1-21.5-44.3z"/></svg>`,
  cart:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  sova: `<svg width="24" height="24" viewBox="0 0 466 466" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M139.8,45c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5c-12.253,0-23.152,5.907-30,15.023C102.953,35.907,92.053,30,79.8,30c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5c12.406,0,22.5,10.094,22.5,22.5c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5C117.3,55.094,127.394,45,139.8,45z"/><path d="M422.411,424.297L200.338,96.142c-5.44-8.039-13.984-14.288-24.005-17.705c0.642-12.645,0.967-26.383,0.967-40.937v-30c0-4.143-3.357-7.5-7.5-7.5h-120c-4.143,0-7.5,3.357-7.5,7.5v30c0,57.634,5.026,100.198,15.819,133.955c11.204,35.041,28.415,59.516,45.405,80.706c3.173,5.901,6.513,11.827,9.749,17.563c18.762,33.257,38.02,67.4,45.635,128.945c0.011,0.503,0.07,0.993,0.176,1.467c1.819,15.173,2.938,31.993,3.171,50.864h-52.454c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h60h60c4.143,0,7.5-3.357,7.5-7.5c0-19.311-2.089-36.706-5.754-52.5h20.321c4.143,0,7.5-3.357,7.5-7.5v-65.549c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5V391h-16.913c-16.582-52.774-51.15-86.389-80.492-114.912c-11.674-11.348-22.7-22.066-31.316-32.786c-0.024-0.03-0.048-0.06-0.072-0.09c-0.005-0.006-0.01-0.013-0.016-0.02C76.087,194.048,57.299,150.686,57.299,37.5V15h105v22.5c0,16.614-0.43,32.124-1.277,46.099c-0.225,3.711,2.303,7.027,5.941,7.793c8.797,1.853,16.63,6.771,20.952,13.157l133.232,196.875c-6.405,0.715-12.873,1.077-19.335,1.077c-94.841,0-172-77.159-172-172c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,103.112,83.888,187,187,187c9.625,0,19.265-0.744,28.726-2.201l79.451,117.404c2.321,3.432,6.984,4.331,10.414,2.008C423.834,432.39,424.733,427.727,422.411,424.297z M177.248,451c-0.203-16.354-1.068-31.286-2.477-45h21.627c4.143,0,7.5-3.357,7.5-7.5v-26.824c4.119,8.688,7.695,17.986,10.572,28.015c0.098,0.612,0.262,1.201,0.498,1.754c4.094,14.811,6.668,31.201,7.22,49.556H177.248z M188.898,345.563V391h-15.945c-5.984-42.622-17.451-72.693-29.973-97.849C158.902,308.727,175.227,325.423,188.898,345.563z"/></svg>`,
  spectraEye: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5C7.45 5 3.57 7.95 2 12c1.57 4.05 5.45 7 10 7s8.43-2.95 10-7c-1.57-4.05-5.45-7-10-7zm0 11.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"/><text x="12" y="14.5" text-anchor="middle" font-size="5.5" font-weight="800" fill="white" font-family="system-ui">$</text></svg>`,
  // New feature icons
  shop:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1-4h16l1 4"/><path d="M3 9v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9"/><path d="M9 21V9"/><path d="M3 9h18"/><rect x="13" y="13" width="5" height="4" rx="1"/></svg>`,
  megaphone:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  globe:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  link:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  wallet:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  gift:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  percent:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  share2:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  map:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  layers:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  zap:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  barcode:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="2" y1="4" x2="2" y2="20"/><line x1="6" y1="4" x2="6" y2="20"/><line x1="9" y1="4" x2="9" y2="20"/><line x1="13" y1="4" x2="13" y2="20"/><line x1="16" y1="4" x2="16" y2="20"/><line x1="20" y1="4" x2="20" y2="20"/><line x1="22" y1="4" x2="22" y2="20"/></svg>`,
  instagram:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  facebook: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  youtube:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  tiktok:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.6a8.21 8.21 0 0 0 4.76 1.51V6.69h-1z"/></svg>`,
  creditCard:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  package:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  grid:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  target:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  star:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  clock:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  mail:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>`,
  smartphone:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  qrcode:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="4" height="4"/><line x1="22" y1="14" x2="22" y2="22"/><line x1="14" y1="22" x2="22" y2="22"/></svg>`,
  receipt:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/></svg>`,
};

// ── Auth store (localStorage) ──────────────────
const AUTH_KEY  = 'stockr_session';
const USERS_KEY = 'stockr_users';

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch { return []; }
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEY)); } catch { return null; }
}
function saveSession(user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}
function clearSession() {
  localStorage.removeItem(AUTH_KEY);
}

// ── Unit lists ────────────────────────────────
const UNITS = ['g','kg','t','ml','cl','l','m³','cm','m','m²','pce','lot','sac','carton','h','j','mois'];

const UNIT_COND = {
  'sac':    { label:'Contenance du sac',            opts:['25 kg','50 kg','100 kg','Autre'] },
  'lot':    { label:'Nombre de pièces par lot',      opts:['6','12','24','Autre'] },
  'carton': { label:"Nombre d'unités par carton",    opts:['6','12','24','48','Autre'] },
};

// ── Unit conversion helpers ───────────────────
const UNIT_FACTORS = { g:1,kg:1000,t:1e6, ml:1,cl:10,l:1000,'m³':1e6, cm:1,m:100, h:1,j:24,mois:720 };
const UNIT_GROUPS  = [['g','kg','t'],['ml','cl','l','m³'],['cm','m'],['h','j','mois']];

function compatibleUnits(unit) {
  const grp = UNIT_GROUPS.find(g => g.includes(unit));
  return grp || [unit];
}
function convertQty(qty, from, to) {
  if (from === to) return qty;
  const f = UNIT_FACTORS[from], t = UNIT_FACTORS[to];
  if (!f || !t) return qty;
  const result = qty * f / t;
  return Math.abs(result) < 0.01 ? 0 : parseFloat(result.toPrecision(10));
}
function fmtQty(n) {
  if (n == null || Math.abs(n) < 0.01) return '0';
  return parseFloat(parseFloat(n).toFixed(4)).toString();
}
// Affiche les quantités de recette dans l'unité la plus lisible (g au lieu de kg si < 1 kg)
function fmtRecipeQty(qty, unit) {
  if (qty == null) return `0 ${unit}`;
  if (unit === 'kg' && qty < 1)  return `${Math.round(qty * 1000)} g`;
  if (unit === 'L'  && qty < 1)  return `${Math.round(qty * 1000)} mL`;
  return `${parseFloat(parseFloat(qty).toFixed(3))} ${unit}`;
}

// ── API base ──────────────────────────────────
const API_BASE = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:5001'
  : (window.__STOCKR_API_URL__ || 'https://stockr-production-c175.up.railway.app');

// ── i18n ─────────────────────────────────────
const LANGS = {
  fr: {
    // Nav
    home:'Accueil', stock:'Stock', products:'Produits', sales:'Ventes', bilan:'Bilan',
    // Auth
    login:'Connexion', register:"S'inscrire", loginSub:'Accède à ton espace', registerSub:'Crée ton compte',
    email:'Email', password:'Mot de passe', confirmPwd:'Confirmer', name:'Nom complet',
    noAccount:'Pas encore de compte ?', hasAccount:'Déjà un compte ?',
    loginBtn:'Se connecter', registerBtn:'Créer mon compte', next:'Suivant',
    // Home
    hello:'Bonjour', alerts:'Alertes', caToday:'CA Auj.', profitToday:'Bénéf.',
    overview:'Vue d\'ensemble', caTotal:'CA Total', profit:'Bénéfice', avgMargin:'Marge moy.',
    stockVal:'Val. stock', salesCount:'Ventes', trend7d:'Tendance 7 jours', weekTotal:'Total semaine',
    topProducts:'Top produits', details:'Détails', bestMargins:'Meilleures marges',
    nav:'Navigation', recentSales:'Dernières ventes', viewAll:'Voir tout', noSalesYet:'Aucune vente pour l\'instant',
    restockAlert:'à réapprovisionner', aiPredictions:'Prédictions IA',
    // Products
    finishedProducts:'Produits finis', newProduct:'Nouveau produit', editProduct:'Modifier le produit',
    productName:'Nom du produit', purchasePrice:'Prix d\'achat', sellingPrice:'Prix de vente',
    composition:'Composition', perUnit:'quantité par unité produite', create:'Créer ce produit',
    update:'Mettre à jour', margin:'marge', costLabel:'Coût', profitUnit:'Bénéf.',
    available:'fab.', unavailable:'Indispo', noProducts:'Aucun produit',
    noProductsSub:'Crée un produit fini à partir de tes articles en stock.',
    createProduct:'Créer un produit', productSub:'Produit fini composé d\'articles',
    // Sales
    newSale:'Nouvelle vente', product:'Produit', quantity:'Quantité', confirm:'Confirmer',
    cartQuestion:'Faire un panier ?', closeCart:'Fermer panier', cart:'Panier',
    emptyCart:'Panier vide — ajoute des produits ci-dessus.', total:'Total',
    validateSale:'Valider la vente', history:'Historique', noSales:'Aucune vente',
    noSalesSub:'Les ventes apparaîtront ici.', today:'Aujourd\'hui', select:'— Sélectionner —',
    // Financial
    financialTitle:'Bilan financier', period:'période sélectionnée', avgTicket:'Ticket moy.',
    articles:'Articles',
    // Stock
    addArticle:'Ajouter un article', articleName:'Nom de l\'article', unit:'Unité',
    initialStock:'Stock initial', alertThreshold:'Seuil d\'alerte', deliveryDays:'Délai livraison (j)',
    addThisArticle:'Ajouter cet article', all:'Tout', outOfStock:'Rupture', low:'Faible', ok:'OK',
    // Settings
    settings:'Paramètres', myAccount:'Mon compte', modify:'Modifier', appearance:'Apparence',
    darkMode:'Mode sombre', lightMode:'Mode clair', data:'Données', exportCSV:'Exporter (CSV)',
    exportArticles:'Articles', exportProducts:'Produits + marges', exportSales:'Historique ventes',
    exportAll:'Tout exporter', session:'Session', logout:'Se déconnecter',
    save:'Sauvegarder', cancel:'Annuler', business:'Commerce',
    installApp:'Installer STOCKR', installSub:'Ajouter à l\'écran d\'accueil',
    language:'Langue', app:'Application',
    // Detail / forms
    noArticles:'Aucun article', noResults:'Aucun résultat',
    noArticlesSub:'Ajoute ton premier article de stock.', noResultsSub:'Essaie un autre terme.',
    revenueChart:'Chiffre d\'affaires',
    editStock:'Modifier le stock', reception:'Réception', withdrawal:'Retrait',
    inStock:'en stock', thresholdMin:'Seuil minimum', thresholdAuto:'Seuil auto',
    deliveryTime:'Délai livraison', usedIn:'Utilisé dans', infoTitle:'Informations',
    deleteArticle:'Supprimer cet article', unitLabel:'Unité de mesure',
    alertAutoInfo:'Le seuil d\'alerte sera calculé automatiquement quand tu associes cet article à un produit.',
    addStockSub:'Ajouter un article à ton stock', newArticle:'Nouvel article',
    emailAddr:'Adresse email', profitShort:'bénéf.', saleOf:'vente(s)',
    addArticlesFirst:'Ajoute d\'abord des articles au stock pour définir la composition.',
    noSalesPeriod:'Aucune vente sur cette période.',
    // Clients
    clients:'Clients', addClient:'Ajouter un client', newClient:'Nouveau client',
    clientName:'Nom du client', clientPhone:'Téléphone', clientEmail:'Email',
    clientNotes:'Notes', noClients:'Aucun client', noClientsSub:'Ajoute ton premier client.',
    clientDetail:'Fiche client', purchases:'Achats', totalSpent:'Total dépensé',
    lastPurchase:'Dernier achat', noPurchases:'Aucun achat', clientOf:'client(s)',
    selectClient:'— Client (optionnel) —', topClients:'Meilleurs clients',
    addClientSub:'Enregistrer un nouveau client',
    // Notifications
    notifications:'Notifications', noNotifs:'Tout est en ordre !',
    noNotifsSub:'Aucune alerte pour le moment.',
    stockAlert:'Alerte stock', outOfStockAlert:'Rupture de stock',
    lowStockAlert:'Stock faible', orderSuggestion:'Commander',
    unitsRemaining:'restant(s)', belowThreshold:'sous le seuil de',
    // Search
    searchAll:'Rechercher articles, produits, clients…', searchResults:'Résultats',
    // Locations
    locations:'Emplacements', allLocations:'Tous les emplacements', addLocation:'Ajouter',
    locationName:'Nom de l\'emplacement', noLocations:'Aucun emplacement',
    manageLocations:'Gérer les emplacements', currentLocation:'Emplacement actuel',
    locationPlaceholder:'Ex: Riviera, Plateau, Marcory…',
    // Spectra
    spectraTitle:'Spectra — Scanner', spectraCapture:'Scanner le stock',
    spectraScan:'Prendre une photo', spectraAnalyzing:'Analyse en cours…',
    spectraDetected:'Articles détectés', spectraConfirm:'Confirmer', spectraSkip:'Ignorer',
    spectraDone:'Inventaire mis à jour', spectraViewStock:'Voir le stock',
    spectraNoDetection:'Aucun article détecté — réessaie avec une meilleure photo',
    spectraInventory:'Inventaire rapide', spectraCompare:'Comparer au stock',
    spectraMatch:'Correspond', spectraMissing:'Manquant', spectraExtra:'Excédent',
    spectraScanSub:'Scanne tes étagères pour vérifier le stock rapidement.',
    spectraAudit:'Audit Express', spectraAuditSub:'Détecte les écarts et vols en un scan',
    spectraReception:'Réception Magique', spectraReceptionSub:'Entrée de stock en 1 clic',
    spectraReceptionDone:'Arrivage confirmé',
    spectraAdjust:'Ajuster le stock', spectraSignalLoss:'Signaler une perte',
    spectraGap:'Écart détecté', spectraGapMsg:'articles manquants vs le système',
    spectraNewDelivery:'Nouvel arrivage détecté', spectraConfirmReception:'Confirmer la réception',
    spectraItemsReceived:'articles reçus',
    // Invoice
    invoice:'Facture', invoiceNumber:'N° Facture', invoiceDate:'Date',
    invoiceClient:'Client', invoiceItems:'Articles', invoiceQty:'Qté',
    invoiceUnitPrice:'Prix unit.', invoiceTotal:'Total', invoiceSubtotal:'Sous-total',
    invoiceTax:'TVA', invoiceThankYou:'Merci pour votre confiance !',
    invoicePayment:'Mode de paiement', invoiceCash:'Espèces', invoiceMobile:'Mobile Money',
    invoiceGenerate:'Générer facture', invoiceShare:'Partager',
    saleConfirmed:'Vente confirmée', unitsSold:'unité(s) vendue(s)',
    businessLogo:'Logo entreprise', uploadLogo:'Télécharger un logo',
    // Catalog
    catalog:'Catalogue', createCatalog:'Créer un catalogue', selectProducts:'Sélectionner',
    catalogTitle:'Catalogue WhatsApp', catalogSub:'Partager sur WhatsApp',
    catalogGenerate:'Générer', catalogShare:'Partager sur WhatsApp',
    catalogFomo:'Alerte stock faible !', catalogFomoSub:'Articles bientôt épuisés',
    catalogLastPieces:'Dernières pièces !', catalogHurry:'Faites vite !',
    // Misc
    required:'requis', fillAll:'Remplis tous les champs', pwdMismatch:'Les mots de passe ne correspondent pas',
    pwdShort:'Mot de passe trop court (min. 6 caractères)',
    welcome:'Bienvenue', offlineMode:'Mode hors-ligne activé', delete:'Supprimer',
    emptyCartMsg:'Le panier est vide', search:'Rechercher…',
    errLoad:'Erreur de chargement', nameRequired:'Nom requis', chooseProduct:'Choisis un produit',
    insufficientStock:'Stock insuffisant', pdfOffline:'PDF non disponible hors-ligne',
    infoUpdated:'Infos mises à jour', installed:'Installé sur votre écran d\'accueil',
    updateAvailable:'Mise à jour disponible — rechargez',
    // Suppliers
    suppliers:'Fournisseurs', addSupplier:'Ajouter un fournisseur', supplierName:'Nom du fournisseur',
    supplierPhone:'Téléphone', supplierEmail:'Email', supplierNotes:'Notes / Produits fournis',
    noSuppliers:'Aucun fournisseur', noSuppliersSub:'Enregistre tes fournisseurs pour mieux gérer tes commandes.',
    supplierDetail:'Fiche fournisseur', supplierOf:'fournisseur(s)',
    // Stock history
    stockHistory:'Historique mouvements', entry:'Entrée', exit:'Sortie', adjustment:'Ajustement',
    noMovements:'Aucun mouvement', movementDate:'Date', movementType:'Type', movementQty:'Quantité',
    // Export
    exportSuccess:'Export réussi', downloading:'Téléchargement…',
    // Quick sale
    quickSale:'Vente rapide', quickSaleSub:'Enregistre une vente en un clic',
    // Spectra demo
    spectraDemo:'Mode Démo', spectraDemoSub:'Tester Spectra sans caméra',
    spectraDemoRunning:'Simulation en cours…',
    // Onboarding
    getStarted:'Commencer', step1:'Ajoute tes articles en stock',
    step2:'Crée des produits finis', step3:'Enregistre tes ventes',
    welcomeMsg:'Bienvenue sur STOCKR ! Commence par ajouter tes premiers articles.',
    // Purchase orders
    purchaseOrders:'Commandes d\'achat', newOrder:'Nouvelle commande', orderSupplier:'Fournisseur',
    orderArticle:'Article', orderQty:'Quantité', orderStatus:'Statut',
    orderPending:'En attente', orderReceived:'Reçue', orderCancelled:'Annulée',
    noOrders:'Aucune commande', markReceived:'Marquer reçue',
    orderDate:'Date commande', orderTotal:'Montant total',
    // Pricing
    pricing:'Tarifs', freePlan:'Gratuit', proPlan:'Pro', businessPlan:'Business',
    perMonth:'/mois', currentPlan:'Plan actuel', upgrade:'Passer au plan',
    unlimited:'Illimité', included:'Inclus',
    // Multi-currency
    currency:'Devise', changeCurrency:'Changer de devise', taxRate:'Taux TVA (%)',
    // Article extras
    reference:'Référence / Code-barres', articleNotes:'Notes', noNotes:'Aucune note',
    articlePrice:'Prix unitaire', articleCategory:'Catégorie',
    // Reorder suggestions
    reorderSuggestions:'Réapprovisionnement suggéré', toReorder:'à commander',
    daysRemaining:'jours restants', createOrder:'Commander',
    // Subscriptions
    subscription:'Abonnement', myPlan:'Mon plan', activePlan:'Plan actif',
    planFeatures:'Fonctionnalités incluses', choosePlan:'Choisir ce plan',
    planActivated:'Plan activé avec succès !', planFree:'Plan gratuit actif',
    trialDays:'jours d\'essai restants', subscriptionManage:'Gérer l\'abonnement',
    paymentMethod:'Moyen de paiement', billingCycle:'Cycle de facturation',
    monthly:'Mensuel', yearly:'Annuel', yearlyDiscount:'2 mois offerts',
    cancelPlan:'Résilier', confirmCancel:'Confirmer la résiliation',
    renewDate:'Prochain renouvellement',
    // Expiry tracking
    expiryDate:'Date de péremption', expiresIn:'Expire dans',
    expired:'Expiré', daysLeft:'jours', expiryAlerts:'Alertes péremption',
    noExpiry:'Pas de date de péremption', expiringSoon:'Bientôt périmé',
    expiryToday:'Expire aujourd\'hui !', addExpiry:'Ajouter date péremption',
    // Quick actions
    quickActions:'Actions rapides', scanStock:'Scanner', addSale:'Vente',
    newArticleShort:'Article', viewReport:'Rapport',
    // Activity feed
    activityFeed:'Activité récente', activitySale:'Vente enregistrée',
    activityStock:'Stock modifié', activityNewArt:'Article ajouté',
    activityNewClient:'Client ajouté', activityOrder:'Commande créée',
    justNow:'À l\'instant', minutesAgo:'min', hoursAgo:'h',
    // Advanced metrics
    stockTurnover:'Rotation stock', salesVelocity:'Vélocité ventes',
    avgDailySales:'Ventes/jour moy.', bestDay:'Meilleur jour',
    worstDay:'Pire jour', growthRate:'Croissance',
    // Misc extra
    copied:'Copié !', shared:'Partagé !', noData:'Pas de données',
    profitChart:'Évolution bénéfice', clientsChart:'Répartition clients',
    // Boutique en ligne
    boutique:'Boutique', boutiqueTitle:'Ma Boutique en ligne', boutiqueSetup:'Configurer ma boutique',
    boutiqueProducts:'Produits en vitrine', boutiqueLink:'Lien de la boutique', boutiqueCopy:'Copier le lien',
    boutiqueTheme:'Thème', boutiquePublish:'Publier', boutiqueDraft:'Brouillon', boutiqueOrders:'Commandes reçues',
    boutiqueDelivery:'Livraison', boutiqueFees:'Frais de livraison', boutiqueZone:'Zone de livraison',
    boutiqueNoProducts:'Aucun produit dans la boutique', boutiqueAddProducts:'Ajouter des produits',
    boutiqueShare:'Partager ma boutique', boutiqueQR:'QR Code boutique', boutiqueVisits:'Visites',
    boutiqueConversion:'Taux de conversion', boutiquePending:'En attente',
    // Marketing
    marketing:'Marketing', marketingTitle:'Centre Marketing', promotions:'Promotions',
    newPromo:'Nouvelle promo', promoName:'Nom de la promo', promoDiscount:'Réduction (%)',
    promoStart:'Date début', promoEnd:'Date fin', promoActive:'Active', promoExpired:'Expirée',
    promoProducts:'Produits en promo', noPromos:'Aucune promotion',
    campaigns:'Campagnes', newCampaign:'Nouvelle campagne', campaignName:'Nom',
    campaignType:'Type', campaignSMS:'SMS', campaignWhatsApp:'WhatsApp',
    campaignEmail:'Email', campaignSend:'Envoyer', campaignSchedule:'Programmer',
    campaignSent:'Envoyée', campaignDraft:'Brouillon', noCampaigns:'Aucune campagne',
    loyaltyProgram:'Programme fidélité', loyaltyPoints:'Points fidélité',
    loyaltyReward:'Récompense', loyaltyLevel:'Niveau',
    // Réseaux sociaux
    socialMedia:'Réseaux sociaux', socialConnect:'Connecter', socialPost:'Publier',
    socialSchedule:'Programmer un post', socialCaption:'Légende', socialHashtags:'Hashtags',
    socialPreview:'Aperçu', socialStats:'Statistiques', socialFollowers:'Abonnés',
    socialEngagement:'Engagement', socialReach:'Portée', socialPlatform:'Plateforme',
    socialAutoPost:'Publication auto', socialProductPost:'Publier un produit',
    socialStory:'Story', socialReel:'Reel', socialNoAccounts:'Aucun compte connecté',
    // Paiements
    payments:'Paiements', paymentMethods:'Moyens de paiement', addPayment:'Ajouter',
    waveMoney:'Wave', orangeMoney:'Orange Money', moovMoney:'Moov Money',
    mtnMomo:'MTN MoMo', paypal:'PayPal', visa:'Visa/Mastercard',
    paymentPhone:'Numéro de paiement', paymentActive:'Actif', paymentInactive:'Inactif',
    paymentQR:'QR de paiement', paymentHistory:'Historique paiements',
    paymentReceived:'Paiement reçu', paymentPending:'En attente',
    paymentTotal:'Total reçu', paymentSetup:'Configurer',
    // Intégrations
    integrations:'Intégrations', integrationsTitle:'Intégrations & Connexions',
    integrationsAvailable:'Disponibles', integrationsConnected:'Connectées',
    integrationsSetup:'Configurer', integrationsSync:'Synchroniser',
    integrationsAPI:'Clé API', integrationsWebhook:'Webhook',
    // Spectra amélioré
    spectraCount:'Comptage automatique', spectraYolo:'Détection YOLO',
    spectraBarcode:'Scanner code-barres', spectraBatch:'Scan en lot',
    spectraHistory:'Historique scans', spectraAccuracy:'Précision',
    spectraItems:'articles détectés', spectraQuantity:'Quantité détectée',
    spectraAutoName:'Nom détecté', spectraAutoCount:'Nombre détecté',
    spectraMultiScan:'Multi-scan', spectraContinuous:'Scan continu',
    // Commandes d'achat améliorées
    orderDelivery:'Suivi livraison', orderExpected:'Livraison prévue',
    orderTracking:'N° suivi', orderShipped:'Expédiée', orderDelivered:'Livrée',
    orderDeliveryDays:'Délai estimé (jours)', orderUrgent:'Urgent',
    orderNotes:'Notes commande', orderHistory:'Historique commandes',
    orderAutoReorder:'Réapprovisionnement auto',
    // Plus menu
    more:'Plus', moreTitle:'Plus de fonctionnalités',
    version:'Version',
  },
  en: {
    home:'Home', stock:'Stock', products:'Products', sales:'Sales', bilan:'Reports',
    login:'Login', register:'Sign up', loginSub:'Access your workspace', registerSub:'Create your account',
    email:'Email', password:'Password', confirmPwd:'Confirm', name:'Full name',
    noAccount:'Don\'t have an account?', hasAccount:'Already have an account?',
    loginBtn:'Sign in', registerBtn:'Create my account', next:'Next',
    hello:'Hello', alerts:'Alerts', caToday:'Rev. Today', profitToday:'Profit',
    overview:'Overview', caTotal:'Revenue', profit:'Profit', avgMargin:'Avg Margin',
    stockVal:'Stock Val.', salesCount:'Sales', trend7d:'7-Day Trend', weekTotal:'Week total',
    topProducts:'Top Products', details:'Details', bestMargins:'Best Margins',
    nav:'Navigation', recentSales:'Recent Sales', viewAll:'View all', noSalesYet:'No sales yet',
    restockAlert:'to restock', aiPredictions:'AI Predictions',
    finishedProducts:'Finished Products', newProduct:'New Product', editProduct:'Edit Product',
    productName:'Product name', purchasePrice:'Purchase price', sellingPrice:'Selling price',
    composition:'Composition', perUnit:'quantity per unit produced', create:'Create product',
    update:'Update', margin:'margin', costLabel:'Cost', profitUnit:'Profit',
    available:'avail.', unavailable:'Unavail.', noProducts:'No products',
    noProductsSub:'Create a finished product from your stock items.',
    createProduct:'Create a product', productSub:'Finished product made from articles',
    newSale:'New Sale', product:'Product', quantity:'Quantity', confirm:'Confirm',
    cartQuestion:'Make a cart?', closeCart:'Close cart', cart:'Cart',
    emptyCart:'Cart empty — add products above.', total:'Total',
    validateSale:'Confirm sale', history:'History', noSales:'No sales',
    noSalesSub:'Sales will appear here.', today:'Today', select:'— Select —',
    financialTitle:'Financial Report', period:'selected period', avgTicket:'Avg ticket',
    articles:'Articles',
    addArticle:'Add Article', articleName:'Article name', unit:'Unit',
    initialStock:'Initial stock', alertThreshold:'Alert threshold', deliveryDays:'Delivery time (d)',
    addThisArticle:'Add this article', all:'All', outOfStock:'Out', low:'Low', ok:'OK',
    settings:'Settings', myAccount:'My Account', modify:'Edit', appearance:'Appearance',
    darkMode:'Dark mode', lightMode:'Light mode', data:'Data', exportCSV:'Export (CSV)',
    exportArticles:'Articles', exportProducts:'Products + margins', exportSales:'Sales history',
    exportAll:'Export all', session:'Session', logout:'Sign out',
    save:'Save', cancel:'Cancel', business:'Business',
    installApp:'Install STOCKR', installSub:'Add to home screen',
    language:'Language', app:'Application',
    noArticles:'No articles', noResults:'No results',
    noArticlesSub:'Add your first stock item.', noResultsSub:'Try another term.',
    revenueChart:'Revenue',
    editStock:'Edit stock', reception:'Receive', withdrawal:'Withdraw',
    inStock:'in stock', thresholdMin:'Minimum threshold', thresholdAuto:'Auto threshold',
    deliveryTime:'Delivery time', usedIn:'Used in', infoTitle:'Information',
    deleteArticle:'Delete this article', unitLabel:'Unit',
    alertAutoInfo:'The alert threshold will be set automatically when you add this article to a product.',
    addStockSub:'Add an item to your stock', newArticle:'New Article',
    emailAddr:'Email address', profitShort:'profit', saleOf:'sale(s)',
    addArticlesFirst:'Add articles to stock first to define composition.',
    noSalesPeriod:'No sales in this period.',
    clients:'Clients', addClient:'Add Client', newClient:'New Client',
    clientName:'Client name', clientPhone:'Phone', clientEmail:'Email',
    clientNotes:'Notes', noClients:'No clients', noClientsSub:'Add your first client.',
    clientDetail:'Client details', purchases:'Purchases', totalSpent:'Total spent',
    lastPurchase:'Last purchase', noPurchases:'No purchases', clientOf:'client(s)',
    selectClient:'— Client (optional) —', topClients:'Top Clients',
    addClientSub:'Register a new client',
    notifications:'Notifications', noNotifs:'All clear!',
    noNotifsSub:'No alerts at the moment.',
    stockAlert:'Stock alert', outOfStockAlert:'Out of stock',
    lowStockAlert:'Low stock', orderSuggestion:'Order',
    unitsRemaining:'remaining', belowThreshold:'below threshold of',
    searchAll:'Search articles, products, clients…', searchResults:'Results',
    locations:'Locations', allLocations:'All locations', addLocation:'Add',
    locationName:'Location name', noLocations:'No locations',
    manageLocations:'Manage locations', currentLocation:'Current location',
    locationPlaceholder:'E.g. Downtown, Mall, Branch 2…',
    spectraTitle:'Spectra — Scanner', spectraCapture:'Scan stock',
    spectraScan:'Take a photo', spectraAnalyzing:'Analyzing…',
    spectraDetected:'Detected items', spectraConfirm:'Confirm', spectraSkip:'Skip',
    spectraDone:'Inventory updated', spectraViewStock:'View stock',
    spectraNoDetection:'No items detected — try a better photo',
    spectraInventory:'Quick inventory', spectraCompare:'Compare to stock',
    spectraMatch:'Match', spectraMissing:'Missing', spectraExtra:'Extra',
    spectraScanSub:'Scan your shelves to quickly verify stock.',
    spectraAudit:'Express Audit', spectraAuditSub:'Detect gaps and theft in one scan',
    spectraReception:'Magic Reception', spectraReceptionSub:'Stock entry in 1 click',
    spectraReceptionDone:'Delivery confirmed',
    spectraAdjust:'Adjust stock', spectraSignalLoss:'Report loss',
    spectraGap:'Gap detected', spectraGapMsg:'items missing vs system',
    spectraNewDelivery:'New delivery detected', spectraConfirmReception:'Confirm reception',
    spectraItemsReceived:'items received',
    invoice:'Invoice', invoiceNumber:'Invoice #', invoiceDate:'Date',
    invoiceClient:'Client', invoiceItems:'Items', invoiceQty:'Qty',
    invoiceUnitPrice:'Unit price', invoiceTotal:'Total', invoiceSubtotal:'Subtotal',
    invoiceTax:'Tax', invoiceThankYou:'Thank you for your business!',
    invoicePayment:'Payment method', invoiceCash:'Cash', invoiceMobile:'Mobile Money',
    invoiceGenerate:'Generate invoice', invoiceShare:'Share',
    saleConfirmed:'Sale confirmed', unitsSold:'unit(s) sold',
    businessLogo:'Business logo', uploadLogo:'Upload a logo',
    catalog:'Catalog', createCatalog:'Create catalog', selectProducts:'Select',
    catalogTitle:'WhatsApp Catalog', catalogSub:'Share on WhatsApp',
    catalogGenerate:'Generate', catalogShare:'Share on WhatsApp',
    catalogFomo:'Low stock alert!', catalogFomoSub:'Items running out soon',
    catalogLastPieces:'Last pieces!', catalogHurry:'Hurry up!',
    required:'required', fillAll:'Fill in all fields', pwdMismatch:'Passwords don\'t match',
    pwdShort:'Password too short (min 6 characters)',
    welcome:'Welcome', offlineMode:'Offline mode activated', delete:'Delete',
    emptyCartMsg:'Cart is empty', search:'Search…',
    errLoad:'Loading error', nameRequired:'Name required', chooseProduct:'Choose a product',
    insufficientStock:'Insufficient stock', pdfOffline:'PDF unavailable offline',
    infoUpdated:'Info updated', installed:'Installed on home screen',
    updateAvailable:'Update available — reload',
    // Suppliers
    suppliers:'Suppliers', addSupplier:'Add supplier', supplierName:'Supplier name',
    supplierPhone:'Phone', supplierEmail:'Email', supplierNotes:'Notes / Products supplied',
    noSuppliers:'No suppliers', noSuppliersSub:'Register your suppliers to better manage orders.',
    supplierDetail:'Supplier details', supplierOf:'supplier(s)',
    // Stock history
    stockHistory:'Movement history', entry:'Entry', exit:'Exit', adjustment:'Adjustment',
    noMovements:'No movements', movementDate:'Date', movementType:'Type', movementQty:'Quantity',
    // Export
    exportSuccess:'Export successful', downloading:'Downloading…',
    // Quick sale
    quickSale:'Quick sale', quickSaleSub:'Record a sale in one click',
    // Spectra demo
    spectraDemo:'Demo Mode', spectraDemoSub:'Test Spectra without camera',
    spectraDemoRunning:'Simulation running…',
    // Onboarding
    getStarted:'Get started', step1:'Add your stock items',
    step2:'Create finished products', step3:'Record your sales',
    welcomeMsg:'Welcome to STOCKR! Start by adding your first items.',
    // Misc extra
    // Purchase orders
    purchaseOrders:'Purchase orders', newOrder:'New order', orderSupplier:'Supplier',
    orderArticle:'Article', orderQty:'Quantity', orderStatus:'Status',
    orderPending:'Pending', orderReceived:'Received', orderCancelled:'Cancelled',
    noOrders:'No orders', markReceived:'Mark received',
    orderDate:'Order date', orderTotal:'Total amount',
    // Pricing
    pricing:'Pricing', freePlan:'Free', proPlan:'Pro', businessPlan:'Business',
    perMonth:'/month', currentPlan:'Current plan', upgrade:'Upgrade to',
    unlimited:'Unlimited', included:'Included',
    // Multi-currency
    currency:'Currency', changeCurrency:'Change currency', taxRate:'Tax rate (%)',
    // Article extras
    reference:'Reference / Barcode', articleNotes:'Notes', noNotes:'No notes',
    articlePrice:'Unit price', articleCategory:'Category',
    // Reorder suggestions
    reorderSuggestions:'Reorder suggestions', toReorder:'to order',
    daysRemaining:'days remaining', createOrder:'Create order',
    // Subscriptions
    subscription:'Subscription', myPlan:'My plan', activePlan:'Active plan',
    planFeatures:'Included features', choosePlan:'Choose this plan',
    planActivated:'Plan activated successfully!', planFree:'Free plan active',
    trialDays:'trial days remaining', subscriptionManage:'Manage subscription',
    paymentMethod:'Payment method', billingCycle:'Billing cycle',
    monthly:'Monthly', yearly:'Yearly', yearlyDiscount:'2 months free',
    cancelPlan:'Cancel', confirmCancel:'Confirm cancellation',
    renewDate:'Next renewal',
    // Expiry tracking
    expiryDate:'Expiry date', expiresIn:'Expires in',
    expired:'Expired', daysLeft:'days', expiryAlerts:'Expiry alerts',
    noExpiry:'No expiry date', expiringSoon:'Expiring soon',
    expiryToday:'Expires today!', addExpiry:'Add expiry date',
    // Quick actions
    quickActions:'Quick actions', scanStock:'Scan', addSale:'Sale',
    newArticleShort:'Article', viewReport:'Report',
    // Activity feed
    activityFeed:'Recent activity', activitySale:'Sale recorded',
    activityStock:'Stock modified', activityNewArt:'Article added',
    activityNewClient:'Client added', activityOrder:'Order created',
    justNow:'Just now', minutesAgo:'min', hoursAgo:'h',
    // Advanced metrics
    stockTurnover:'Stock turnover', salesVelocity:'Sales velocity',
    avgDailySales:'Avg daily sales', bestDay:'Best day',
    worstDay:'Worst day', growthRate:'Growth',
    // Misc extra
    copied:'Copied!', shared:'Shared!', noData:'No data',
    profitChart:'Profit evolution', clientsChart:'Client breakdown',
    // Online store
    boutique:'Store', boutiqueTitle:'My Online Store', boutiqueSetup:'Setup my store',
    boutiqueProducts:'Showcase products', boutiqueLink:'Store link', boutiqueCopy:'Copy link',
    boutiqueTheme:'Theme', boutiquePublish:'Publish', boutiqueDraft:'Draft', boutiqueOrders:'Orders received',
    boutiqueDelivery:'Delivery', boutiqueFees:'Delivery fees', boutiqueZone:'Delivery zone',
    boutiqueNoProducts:'No products in store', boutiqueAddProducts:'Add products',
    boutiqueShare:'Share my store', boutiqueQR:'Store QR Code', boutiqueVisits:'Visits',
    boutiqueConversion:'Conversion rate', boutiquePending:'Pending',
    // Marketing
    marketing:'Marketing', marketingTitle:'Marketing Center', promotions:'Promotions',
    newPromo:'New promo', promoName:'Promo name', promoDiscount:'Discount (%)',
    promoStart:'Start date', promoEnd:'End date', promoActive:'Active', promoExpired:'Expired',
    promoProducts:'Products on sale', noPromos:'No promotions',
    campaigns:'Campaigns', newCampaign:'New campaign', campaignName:'Name',
    campaignType:'Type', campaignSMS:'SMS', campaignWhatsApp:'WhatsApp',
    campaignEmail:'Email', campaignSend:'Send', campaignSchedule:'Schedule',
    campaignSent:'Sent', campaignDraft:'Draft', noCampaigns:'No campaigns',
    loyaltyProgram:'Loyalty program', loyaltyPoints:'Loyalty points',
    loyaltyReward:'Reward', loyaltyLevel:'Level',
    // Social media
    socialMedia:'Social Media', socialConnect:'Connect', socialPost:'Post',
    socialSchedule:'Schedule post', socialCaption:'Caption', socialHashtags:'Hashtags',
    socialPreview:'Preview', socialStats:'Statistics', socialFollowers:'Followers',
    socialEngagement:'Engagement', socialReach:'Reach', socialPlatform:'Platform',
    socialAutoPost:'Auto post', socialProductPost:'Post a product',
    socialStory:'Story', socialReel:'Reel', socialNoAccounts:'No connected accounts',
    // Payments
    payments:'Payments', paymentMethods:'Payment methods', addPayment:'Add',
    waveMoney:'Wave', orangeMoney:'Orange Money', moovMoney:'Moov Money',
    mtnMomo:'MTN MoMo', paypal:'PayPal', visa:'Visa/Mastercard',
    paymentPhone:'Payment number', paymentActive:'Active', paymentInactive:'Inactive',
    paymentQR:'Payment QR', paymentHistory:'Payment history',
    paymentReceived:'Payment received', paymentPending:'Pending',
    paymentTotal:'Total received', paymentSetup:'Setup',
    // Integrations
    integrations:'Integrations', integrationsTitle:'Integrations & Connections',
    integrationsAvailable:'Available', integrationsConnected:'Connected',
    integrationsSetup:'Setup', integrationsSync:'Sync',
    integrationsAPI:'API Key', integrationsWebhook:'Webhook',
    // Enhanced Spectra
    spectraCount:'Auto counting', spectraYolo:'YOLO Detection',
    spectraBarcode:'Barcode scanner', spectraBatch:'Batch scan',
    spectraHistory:'Scan history', spectraAccuracy:'Accuracy',
    spectraItems:'detected items', spectraQuantity:'Detected quantity',
    spectraAutoName:'Detected name', spectraAutoCount:'Detected count',
    spectraMultiScan:'Multi-scan', spectraContinuous:'Continuous scan',
    // Enhanced purchase orders
    orderDelivery:'Delivery tracking', orderExpected:'Expected delivery',
    orderTracking:'Tracking #', orderShipped:'Shipped', orderDelivered:'Delivered',
    orderDeliveryDays:'Estimated delay (days)', orderUrgent:'Urgent',
    orderNotes:'Order notes', orderHistory:'Order history',
    orderAutoReorder:'Auto reorder',
    // More menu
    more:'More', moreTitle:'More features',
    version:'Version',
  }
};
let _lang = localStorage.getItem('stockr_lang') || 'fr';
function t(k) { return (LANGS[_lang] || LANGS.fr)[k] || (LANGS.fr)[k] || k; }
function sym() { return S.session?.currency_symbol || 'FCFA'; }
function setLang(l) { _lang = l; localStorage.setItem('stockr_lang', l); render(); }

// ── Facture & WhatsApp ────────────────────────
function _invNum(id) { return 'INV-' + String(id).slice(-6).toUpperCase(); }

function generateInvoicePDF(sales) {
  if (!Array.isArray(sales)) sales = [sales];
  if (typeof window.jspdf === 'undefined') { showToast(t('pdfOffline'), 'error'); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const sym  = S.session?.currency_symbol || 'FCFA';
  const biz  = S.session?.business || S.session?.name || 'Mon Commerce';
  const invId = _invNum(sales[0].id);
  const locale = _lang === 'en' ? 'en-US' : 'fr-FR';
  const dateObj = new Date(sales[0].date);
  const date  = dateObj.toLocaleDateString(locale, { day:'numeric', month:'long', year:'numeric' });
  const time  = dateObj.toLocaleTimeString(locale, { hour:'2-digit', minute:'2-digit' });
  const clientName = sales[0]?.clientName || null;
  const client = sales[0]?.clientId ? S.clients.find(c => c.id === sales[0].clientId) : null;
  const logoData = localStorage.getItem('stockr_logo') || null;
  const loc = S.currentLocation ? S.locations.find(l => l.id === S.currentLocation) : null;
  const tier = client && S.loyaltyConfig?.enabled ? _getClientTier(client) : null;

  // ── Header indigo avec bande décorative ──
  doc.setFillColor(79, 70, 229);
  doc.rect(0, 0, 210, 50, 'F');
  // Bande accent violet foncé
  doc.setFillColor(67, 56, 202);
  doc.rect(0, 45, 210, 5, 'F');

  // Logo if available
  let logoX = 16;
  if (logoData) {
    try {
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(14, 6, 22, 22, 2, 2, 'F');
      doc.addImage(logoData, 'JPEG', 16, 8, 18, 18);
      logoX = 42;
    } catch(e) {}
  }

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24); doc.setFont('helvetica', 'bold');
  doc.text(biz, logoX, 18);
  doc.setFontSize(9); doc.setFont('helvetica', 'normal');
  doc.text(S.session?.email || '', logoX, 25);
  if (loc) doc.text((loc.name || '') + (loc.address ? ' · ' + loc.address : ''), logoX, 31);
  if (S.session?.phone) doc.text(IC && 'Tel : ' + S.session.phone, logoX, 37);

  // Invoice number badge
  doc.setFillColor(255, 255, 255, 0.2);
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.3);
  doc.roundedRect(140, 8, 55, 28, 2, 2, 'S');
  doc.setFontSize(9); doc.setFont('helvetica', 'normal');
  doc.text('FACTURE', 167.5, 14, { align: 'center' });
  doc.setFontSize(14); doc.setFont('helvetica', 'bold');
  doc.text(invId, 167.5, 22, { align: 'center' });
  doc.setFontSize(8); doc.setFont('helvetica', 'normal');
  doc.text(date, 167.5, 28, { align: 'center' });
  doc.text(time, 167.5, 33, { align: 'center' });

  // ── Status badge (PAYE) ──
  let y = 60;
  const pm = sales[0]?.paymentMethod || 'cash';
  const pmLabels = {cash:'Especes',wave:'Wave',orange:'Orange Money',moov:'Moov Money',mtn:'MTN MoMo',paypal:'PayPal',visa:'Carte bancaire'};
  doc.setFillColor(16, 185, 129);
  doc.roundedRect(16, y - 5, 32, 10, 2, 2, 'F');
  doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
  doc.text('PAYE', 32, y + 1.5, { align: 'center' });
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(9); doc.setFont('helvetica', 'normal');
  doc.text('Mode : ' + (pmLabels[pm] || pm), 52, y + 1);

  // ── Client info block ──
  y = 78;
  if (clientName || client) {
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(16, y - 6, 178, client?.phone || client?.email ? 26 : 16, 2, 2, 'F');
    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.3);
    doc.roundedRect(16, y - 6, 178, client?.phone || client?.email ? 26 : 16, 2, 2, 'S');
    doc.setTextColor(79, 70, 229); doc.setFontSize(8); doc.setFont('helvetica', 'bold');
    doc.text('FACTURE A', 20, y - 1);
    doc.setTextColor(30, 30, 30); doc.setFontSize(11); doc.setFont('helvetica', 'bold');
    doc.text(clientName || client?.name || 'Client', 20, y + 5);
    doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(100, 100, 100);
    let cy = y + 11;
    if (client?.phone) { doc.text('Tel : ' + client.phone, 20, cy); cy += 5; }
    if (client?.email) { doc.text('Email : ' + client.email, 20, cy); cy += 5; }
    if (client?.address) { doc.text('Adresse : ' + client.address, 20, cy); }
    // Tier badge on the right
    if (tier) {
      const hex = (tier.color||'#4F46E5').replace('#','');
      const r = parseInt(hex.substring(0,2),16), g = parseInt(hex.substring(2,4),16), b = parseInt(hex.substring(4,6),16);
      doc.setFillColor(r, g, b);
      doc.roundedRect(140, y - 1, 54, 10, 2, 2, 'F');
      doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
      doc.text('CLIENT ' + tier.name.toUpperCase(), 167, y + 5, { align: 'center' });
    }
    y += (client?.phone || client?.email ? 26 : 16);
  }

  // ── En-tête tableau ──
  y += 4;
  doc.setFillColor(79, 70, 229);
  doc.roundedRect(16, y - 2, 178, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
  doc.text('DESIGNATION', 20, y + 4.5);
  doc.text('QTE', 120, y + 4.5, { align: 'center' });
  doc.text('PU', 155, y + 4.5, { align: 'right' });
  doc.text('TOTAL', 192, y + 4.5, { align: 'right' });

  // ── Lignes produits ──
  y += 14; let grandTotal = 0; let totalProfit = 0;
  doc.setTextColor(30, 30, 30); doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
  sales.forEach((s, i) => {
    const unitPrice = s.qty > 0 ? Math.round(s.total / s.qty) : 0;
    grandTotal += s.total;
    totalProfit += (s.profit || 0);
    if (i % 2 === 1) { doc.setFillColor(249, 250, 251); doc.rect(16, y - 5, 178, 9, 'F'); }
    doc.text(s.productName.length > 40 ? s.productName.substring(0, 40) + '...' : s.productName, 20, y);
    doc.text(String(s.qty), 120, y, { align: 'center' });
    doc.text(fmtPDF(unitPrice) + ' ' + sym, 155, y, { align: 'right' });
    doc.setFont('helvetica', 'bold');
    doc.text(fmtPDF(s.total) + ' ' + sym, 192, y, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    y += 9;
  });

  // ── Totals block ──
  y += 2;
  doc.setDrawColor(79, 70, 229); doc.setLineWidth(0.8); doc.line(16, y, 194, y); y += 8;
  const taxRate = parseFloat(S.session?.tax_rate) || 0;
  doc.setFontSize(9); doc.setTextColor(100, 100, 100); doc.setFont('helvetica', 'normal');
  doc.text('Sous-total', 155, y, { align: 'right' });
  doc.text(fmtPDF(grandTotal) + ' ' + sym, 192, y, { align: 'right' }); y += 7;
  if (sales[0]?.promoName && sales[0]?.promoDiscount) {
    doc.setTextColor(220, 38, 38);
    doc.text(`Promo "${sales[0].promoName}" (-${sales[0].promoDiscount}%)`, 155, y, { align: 'right' });
    doc.text('Applique', 192, y, { align: 'right' });
    y += 7;
    doc.setTextColor(100, 100, 100);
  }
  if (taxRate > 0) {
    const tva = Math.round(grandTotal * taxRate / 100);
    doc.text(`TVA (${taxRate}%)`, 155, y, { align: 'right' });
    doc.text(fmtPDF(tva) + ' ' + sym, 192, y, { align: 'right' }); y += 7;
    grandTotal += tva;
  }

  // Total final
  y += 2;
  doc.setFillColor(79, 70, 229);
  doc.roundedRect(110, y - 1, 84, 12, 2, 2, 'F');
  doc.setTextColor(255, 255, 255); doc.setFontSize(12); doc.setFont('helvetica', 'bold');
  doc.text('TOTAL A PAYER', 140, y + 7, { align: 'right' });
  doc.setFontSize(13);
  doc.text(fmtPDF(grandTotal) + ' ' + sym, 192, y + 7, { align: 'right' });
  // Side stats
  doc.setTextColor(100, 100, 100); doc.setFontSize(8); doc.setFont('helvetica', 'normal');
  doc.text(sales.length + ' article' + (sales.length>1?'s':''), 20, y + 4);
  doc.text(sales.reduce((s,v) => s + v.qty, 0) + ' unites', 20, y + 9);

  // ── Loyalty points earned block ──
  y += 18;
  if (client && S.loyaltyConfig?.enabled) {
    const pointsEarned = Math.floor(grandTotal * (S.loyaltyConfig.pointsPerFcfa || 1) * (tier?.multiplier || 1));
    const totalPoints = client.loyaltyPoints || 0;
    doc.setFillColor(255, 251, 235);
    doc.setDrawColor(251, 191, 36);
    doc.setLineWidth(0.5);
    doc.roundedRect(16, y, 178, 18, 2, 2, 'FD');
    doc.setTextColor(180, 83, 9); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
    doc.text('*** POINTS FIDELITE ***', 20, y + 6);
    doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(120, 70, 10);
    doc.text(`Gagnes sur cet achat : +${pointsEarned} pts${tier?.multiplier>1?' (x'+tier.multiplier+' palier '+tier.name+')':''}`, 20, y + 11);
    doc.text(`Solde total : ${totalPoints} pts`, 20, y + 15.5);
    // Next reward hint
    const rewards = (S.loyaltyConfig.rewards||[]).slice().sort((a,b)=>a.points-b.points);
    const nextReward = rewards.find(r => r.points > totalPoints);
    if (nextReward) {
      doc.setTextColor(100, 60, 10);
      doc.text(`Prochaine recompense : ${nextReward.name} dans ${nextReward.points - totalPoints} pts`, 130, y + 11);
    } else if (rewards.length > 0) {
      doc.setTextColor(16, 185, 129);
      doc.setFont('helvetica', 'bold');
      doc.text('Vous pouvez echanger une recompense !', 130, y + 11);
    }
    y += 22;
  }

  // ── Tracking link + boutique URL ──
  const bc = S.boutiqueConfig || {};
  const boutiqueUrl = (bc.customDomainVerified && bc.customDomain) ? ('https://' + bc.customDomain) : (bc.domain ? ('https://' + bc.domain + '.stockr.shop') : null);
  if (boutiqueUrl) {
    doc.setFillColor(238, 242, 255);
    doc.roundedRect(16, y, 178, 12, 2, 2, 'F');
    doc.setTextColor(79, 70, 229); doc.setFontSize(8); doc.setFont('helvetica', 'bold');
    doc.text('Suivez votre commande :', 20, y + 5);
    doc.setFont('helvetica', 'normal');
    doc.text(boutiqueUrl + '/suivi?inv=' + invId, 20, y + 9);
    y += 16;
  }

  // ── Notes ──
  y += 4;
  doc.setTextColor(120, 120, 120); doc.setFontSize(7);
  const conditions = bc.conditions || 'Paiement comptant. Marchandise vendue non reprise ni echangee sauf defaut d\'origine.';
  const wrapped = doc.splitTextToSize('Conditions : ' + conditions, 178);
  doc.text(wrapped, 16, y);

  // ── Pied de page ──
  doc.setFillColor(248, 250, 252);
  doc.rect(0, 268, 210, 30, 'F');
  doc.setDrawColor(79, 70, 229); doc.setLineWidth(1);
  doc.line(16, 268, 194, 268);
  doc.setTextColor(79, 70, 229); doc.setFontSize(10); doc.setFont('helvetica', 'bold');
  doc.text('Merci de votre confiance !', 105, 276, { align: 'center' });
  doc.setTextColor(100, 100, 100); doc.setFontSize(8); doc.setFont('helvetica', 'normal');
  doc.text(biz + (S.session?.email ? ' · ' + S.session.email : '') + (loc ? ' · ' + loc.name : ''), 105, 282, { align: 'center' });
  const activePayments = (S.paymentMethods||[]).filter(m=>m.active);
  if (activePayments.length > 0) {
    doc.setFontSize(7);
    doc.text('Paiements acceptes : ' + activePayments.map(m=>m.name).join(' · '), 105, 287, { align: 'center' });
  }
  doc.setFontSize(6); doc.setTextColor(160, 160, 160);
  doc.text('Facture generee par STOCKR · stockr.app', 105, 293, { align: 'center' });

  doc.save(`${t('invoice')}-${invId}.pdf`);
  showToast(t('invoice') + ' PDF');
}

function shareViaWhatsApp(sales) {
  if (!Array.isArray(sales)) sales = [sales];
  const csym = S.session?.currency_symbol || 'FCFA';
  const biz  = S.session?.business || S.session?.name || 'Mon Commerce';
  const date = new Date(sales[0].date).toLocaleDateString('fr-FR');
  const invId = _invNum(sales[0].id);
  const total = sales.reduce((s, v) => s + v.total, 0);
  const taxRate = parseFloat(S.session?.tax_rate) || 0;
  const pmLabels = {cash:'Especes',wave:'Wave',orange:'Orange Money',moov:'Moov Money',mtn:'MTN MoMo',paypal:'PayPal',visa:'Carte bancaire'};
  const pm = sales[0]?.paymentMethod || 'cash';
  const clientName = sales[0]?.clientName;
  const client = clientName ? S.clients.find(c => c.name === clientName || String(c.id) === String(sales[0]?.clientId)) : null;
  const loc = S.currentLocation ? S.locations.find(l => l.id === S.currentLocation) : null;

  const lines = [
    '================================',
    `       *${biz}*`,
    loc ? `       ${loc.name}` : '',
    S.session?.email ? `       ${S.session.email}` : '',
    '================================',
    '',
    `*RECU N° ${invId}*`,
    `Date : ${date}`,
    clientName ? `Client : ${clientName}` : '',
    client?.phone ? `Tel : ${client.phone}` : '',
    '',
    '--------------------------------',
  ];
  sales.forEach(s => {
    const u = s.qty > 0 ? Math.round(s.total / s.qty) : 0;
    lines.push(`${s.productName}`);
    lines.push(`  ${s.qty} x ${fmt(u)} ${csym} = *${fmt(s.total)} ${csym}*`);
  });
  lines.push('--------------------------------');
  if (sales[0]?.promoName) {
    lines.push(`Promo : ${sales[0].promoName} (-${sales[0].promoDiscount||0}%)`);
  }
  lines.push(`Sous-total : ${fmt(total)} ${csym}`);
  if (taxRate > 0) {
    const tva = Math.round(total * taxRate / 100);
    lines.push(`TVA (${taxRate}%) : ${fmt(tva)} ${csym}`);
    lines.push(`*TOTAL TTC : ${fmt(total + tva)} ${csym}*`);
  } else {
    lines.push(`*TOTAL : ${fmt(total)} ${csym}*`);
  }
  lines.push('');
  lines.push(`Paiement : ${pmLabels[pm] || pm}`);
  if (S.loyaltyConfig?.enabled && client?.loyaltyPoints > 0) {
    lines.push(`Points fidelite : ${client.loyaltyPoints} pts`);
  }
  lines.push('');
  lines.push('Merci pour votre achat !');
  lines.push(`_${biz} — Propulse par STOCKR_`);

  // Target client's WhatsApp if phone available
  const phone = client?.phone?.replace(/[\s\-\(\)]/g, '') || '';
  const waUrl = phone ? `https://wa.me/${phone}?text=` : 'https://wa.me/?text=';
  window.open(waUrl + encodeURIComponent(lines.filter(l=>l!=='').join('\n')), '_blank');
}

// ── Chart ─────────────────────────────────────
let _chart = null;

function buildChartData() {
  const now = new Date();
  if (S.period === 'today') {
    const labels = ['0h','3h','6h','9h','12h','15h','18h','21h'];
    const data = labels.map((_, i) => {
      const start = i * 3, end = (i + 1) * 3;
      return S.sales
        .filter(s => { const d = new Date(s.date); return d.toDateString() === now.toDateString() && d.getHours() >= start && d.getHours() < end; })
        .reduce((sum, s) => sum + s.total, 0);
    });
    return { labels, data };
  }
  const days = S.period === '30d' ? 30 : 7;
  const labels = [], data = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now - i * 86400000);
    labels.push(d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }));
    data.push(S.sales.filter(s => new Date(s.date).toDateString() === d.toDateString()).reduce((sum, s) => sum + s.total, 0));
  }
  return { labels, data };
}

function renderRevenueChart() {
  const canvas = document.getElementById('revenue-chart');
  if (!canvas || typeof Chart === 'undefined') return;
  if (_chart) { _chart.destroy(); _chart = null; }
  const { labels, data } = buildChartData();
  const isDark = S.darkMode;
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const tickColor = isDark ? '#6A6A6A' : '#8A8A8A';
  _chart = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: 'rgba(79,70,229,0.15)',
        borderColor: '#4F46E5',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1e1b4b',
          titleFont: { size: 11 },
          bodyFont: { size: 12, weight: '700' },
          callbacks: { label: ctx => `  ${Math.round(ctx.raw).toLocaleString('fr-FR')} ${sym()}` }
        }
      },
      scales: {
        y: {
          grid: { color: gridColor },
          border: { display: false },
          ticks: { color: tickColor, font: { size: 9 }, callback: v => v >= 1000 ? (v/1000).toFixed(0)+'k' : v }
        },
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: tickColor, font: { size: 9 }, maxRotation: 0 }
        }
      }
    }
  });
}

let _profitChart = null;
function renderProfitChart() {
  const canvas = document.getElementById('profit-chart');
  if (!canvas || typeof Chart === 'undefined') return;
  if (_profitChart) { _profitChart.destroy(); _profitChart = null; }
  const { labels, data: revData } = buildChartData();
  // Build profit data for same time buckets
  const filtered = salesForPeriod();
  const profitByLabel = {};
  labels.forEach(l => profitByLabel[l] = 0);
  filtered.forEach(s => {
    const d = new Date(s.date);
    let lbl;
    if (S.period === 'today') { lbl = d.getHours() + 'h'; }
    else if (S.period === '7d') { lbl = d.toLocaleDateString(_lang, { weekday: 'short' }).slice(0, 3); }
    else { lbl = d.toLocaleDateString(_lang, { day: '2-digit', month: 'short' }); }
    if (profitByLabel[lbl] !== undefined) profitByLabel[lbl] += (s.profit || 0);
  });
  const profitData = labels.map(l => profitByLabel[l] || 0);
  const isDark = S.darkMode;
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const tickColor = isDark ? '#6A6A6A' : '#8A8A8A';
  _profitChart = new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: profitData,
        borderColor: '#059669',
        backgroundColor: 'rgba(5,150,105,0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: '#059669',
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#064e3b',
          titleFont: { size: 11 }, bodyFont: { size: 12, weight: '700' },
          callbacks: { label: ctx => `  ${Math.round(ctx.raw).toLocaleString('fr-FR')} ${sym()}` }
        }
      },
      scales: {
        y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 9 }, callback: v => v >= 1000 ? (v/1000).toFixed(0)+'k' : v } },
        x: { grid: { display: false }, border: { display: false }, ticks: { color: tickColor, font: { size: 9 }, maxRotation: 0 } }
      }
    }
  });
}

// ── State ─────────────────────────────────────
const S = {
  // Auth
  authView:    'login',   // 'login' | 'register'
  authStep:    1,         // étape inscription : 1 = identifiants, 2 = profil
  authEmail:   '',
  authPwd:     '',
  authPwd2:    '',
  authName:    '',
  authBiz:     '',
  authShowPwd: false,
  authProfile: 'transformer', // 'transformer' | 'reseller'
  authCountry: 'SN',
  authLang:    'fr',
  authCurrency:'XOF',
  authTax:     0,         // taux TVA en %
  session:     null,      // { id, name, email, business, profile, currency, currency_symbol, country, language, tax_rate }
  token:       null,

  // App
  view:       'home',
  articles:   [],
  products:   [],
  sales:      [],
  selectedId: null,
  qty:        1,
  action:     'add',
  search:     '',
  filter:     'all',
  period:     'all',
  darkMode:     false,
  settingsEdit: false,
  unitDropOpen: false,
  unitCondVal:  '',
  unitCondOther:'',
  compUnits:     {},
  cart:          [],
  cartOpen:      false,
  editProductId: null,
  clients:       [],
  selectedClientId: null,
  clientSearch:  '',
  saleClientFilter: null,
  globalSearch:  '',
  predictions:   [],
  sovaTab: 'overview',  // 'overview' | 'alerts' | 'tomorrow' | 'articles'
  sovaArticle: null,    // article_id sélectionné dans tab articles
  // Locations
  locations:        JSON.parse(localStorage.getItem('stockr_locations') || '[]'),
  currentLocation:  localStorage.getItem('stockr_current_location') || null,
  locationAdd:      false,
  // Catalog
  catalogView:      'select', // 'select' | 'preview'
  catalogSelected:  [],
  // Suppliers
  suppliers:        JSON.parse(localStorage.getItem('stockr_suppliers') || '[]'),
  selectedSupplierId: null,
  // Stock movements
  stockMovements:   JSON.parse(localStorage.getItem('stockr_movements') || '[]'),
  // Purchase orders
  purchaseOrders:   JSON.parse(localStorage.getItem('stockr_orders') || '[]'),
  // Subscription
  subscription: JSON.parse(localStorage.getItem('stockr_subscription') || '{"plan":"free","activated":null,"billing":"monthly"}'),
  // Activity feed
  activities: JSON.parse(localStorage.getItem('stockr_activities') || '[]'),
  // Boutique state
  boutiqueConfig: JSON.parse(localStorage.getItem('stockr_boutique') || '{"name":"","description":"","theme":"modern","published":false,"products":[],"deliveryFees":0,"deliveryZones":[],"visits":0}'),
  boutiqueOrders: JSON.parse(localStorage.getItem('stockr_boutique_orders') || '[]'),
  // Marketing state
  promotions: JSON.parse(localStorage.getItem('stockr_promotions') || '[]'),
  campaigns: JSON.parse(localStorage.getItem('stockr_campaigns') || '[]'),
  loyaltyConfig: (() => {
    const raw = JSON.parse(localStorage.getItem('stockr_loyalty') || '{"enabled":false,"pointsPerFcfa":1,"rewards":[]}');
    if (!raw.tiers) {
      raw.tiers = [
        { id:'bronze',   name:'Bronze',   min:0,    color:'#CD7F32', gradient:'linear-gradient(135deg,#CD7F32,#8B4513)', icon:'🥉', perk:'Points x1',   multiplier:1 },
        { id:'silver',   name:'Argent',   min:500,  color:'#A8A9AD', gradient:'linear-gradient(135deg,#D1D5DB,#6B7280)', icon:'🥈', perk:'Points x1.2 · -5% anniv.', multiplier:1.2 },
        { id:'gold',     name:'Or',       min:2000, color:'#FFD700', gradient:'linear-gradient(135deg,#FFD700,#DAA520)', icon:'🥇', perk:'Points x1.5 · livraison gratuite', multiplier:1.5 },
        { id:'platinum', name:'Platine',  min:5000, color:'#8B5CF6', gradient:'linear-gradient(135deg,#A78BFA,#6D28D9)', icon:'💎', perk:'Points x2 · priorité VIP', multiplier:2 },
      ];
    }
    if (raw.tierMode === undefined) raw.tierMode = 'spent'; // 'spent' | 'points'
    return raw;
  })(),
  banners: JSON.parse(localStorage.getItem('stockr_banners') || '[]'),
  popups: JSON.parse(localStorage.getItem('stockr_popups') || '[]'),
  reviews: JSON.parse(localStorage.getItem('stockr_reviews') || '[]'),
  trackingLinks: JSON.parse(localStorage.getItem('stockr_tracking') || '[]'),
  // Social media state
  socialAccounts: JSON.parse(localStorage.getItem('stockr_social') || '[]'),
  scheduledPosts: JSON.parse(localStorage.getItem('stockr_posts') || '[]'),
  // Payment methods state
  paymentMethods: JSON.parse(localStorage.getItem('stockr_payments') || '[]'),
  paymentHistory: JSON.parse(localStorage.getItem('stockr_payment_history') || '[]'),
  // Integrations state
  integrationsConfig: JSON.parse(localStorage.getItem('stockr_integrations') || '[]'),
  // API & webhooks state
  apiConfig: JSON.parse(localStorage.getItem('stockr_api') || '{"token":null,"createdAt":null,"webhooks":[]}'),
  // Spectra enhanced state
  spectraScanHistory: JSON.parse(localStorage.getItem('stockr_spectra_history') || '[]'),
  spectraMode: 'photo', // 'photo' | 'barcode' | 'continuous' | 'yolo'
  form: { name: '', stock: 0, min: 0, unit: '', lead: 7, ref: '', price: 0, expiry: '' },
  spectra: {
    step:      'camera',   // 'camera' | 'loading' | 'confirm' | 'done'
    queue:     [],         // détections en attente de confirmation
    current:   0,          // index dans queue
    confirmed: [],         // items validés par l'utilisateur
    naming:    false,      // l'utilisateur est en train de nommer un article inconnu
    results:   [],         // résultats finaux après /confirm
  },
};

// Helper pour accéder aux données SOVA selon l'ancien ou nouveau format
function sovaData() {
  const d = S.predictions;
  if (!d) return { preds: [], score: 50, isNew: false };
  if (Array.isArray(d)) return { preds: d, score: 50, isNew: false };
  return {
    preds: d.predictions || [],
    score: d.score || 50,
    isNew: true,
    introKey: d.intro_key,
    revRisk: d.revenue_at_risk || 0,
    revRiskList: d.revenue_at_risk_articles || [],
    producible: d.producible || [],
    blocked: d.blocked || [],
    tomorrow: d.tomorrow || null,
  };
}

// ── Mode local (localStorage) ─────────────────
let USE_LOCAL = false; // basculé automatiquement si l'API n'est pas joignable

const LS_USERS   = 'stockr_users_v2';
const LS_SESSION = 'stockr_session';

function _lsUsers()         { try { return JSON.parse(localStorage.getItem(LS_USERS)) || []; } catch { return []; } }
function _lsSave(users)     { localStorage.setItem(LS_USERS, JSON.stringify(users)); }
function _lsData(uid)       { try { return JSON.parse(localStorage.getItem('stockr_data_' + uid)) || { articles:[], products:[], sales:[] }; } catch { return { articles:[], products:[], sales:[] }; } }
function _lsSaveData(uid,d) { localStorage.setItem('stockr_data_' + uid, JSON.stringify(d)); }
function _uid()             { return S.session?.id; }

function _localApi(method, path, body) {
  // ── Auth ──
  if (path === '/api/auth/register' && method === 'POST') {
    const users = _lsUsers();
    if (users.find(u => u.email === body.email)) throw new Error('Email déjà utilisé');
    const user = { id: Date.now(), email: body.email, _pwd: body.password, name: body.name, business_name: body.business_name || body.name, currency: body.currency || 'XOF', country: body.country || 'SN', language: body.language || 'fr', profile: body.profile || 'transformer', tax_rate: parseFloat(body.tax_rate) || 0, auth_token: 'local_' + Date.now() };
    users.push(user);
    _lsSave(users);
    _lsSaveData(user.id, { articles: [], products: [], sales: [], clients: [] });
    return { user };
  }
  if (path === '/api/auth/login' && method === 'POST') {
    const user = _lsUsers().find(u => u.email === body.email && u._pwd === body.password);
    if (!user) throw new Error('Email ou mot de passe incorrect');
    return { user: { ...user, auth_token: 'local_' + user.id } };
  }
  if (path === '/api/auth/profile' && method === 'GET') {
    return _lsUsers().find(u => u.id === _uid()) || {};
  }
  if (path === '/api/auth/profile' && method === 'PUT') {
    const users = _lsUsers(); const u = users.find(u => u.id === _uid());
    if (u) { Object.assign(u, body); _lsSave(users); }
    return u;
  }
  if (path === '/api/auth/logout' && method === 'POST') { return {}; }

  const d = _lsData(_uid());

  // ── Articles ──
  if (path === '/api/articles/' && method === 'GET') return d.articles;
  if (path === '/api/articles/' && method === 'POST') {
    const a = { id: Date.now(), name: body.name, quantity: body.quantity || 0, unit: body.unit || 'pcs', alert_threshold: body.alert_threshold || 0, lead_time_days: body.lead_time_days || 7, daily_avg_demand: 0 };
    d.articles.push(a); _lsSaveData(_uid(), d); return a;
  }
  const artId = path.match(/\/api\/articles\/(\d+)/)?.[1];
  if (artId && method === 'PUT') {
    const a = d.articles.find(a => a.id === parseInt(artId));
    if (a) { Object.assign(a, { quantity: body.quantity ?? a.quantity, alert_threshold: body.alert_threshold ?? a.alert_threshold, lead_time_days: body.lead_time_days ?? a.lead_time_days }); _lsSaveData(_uid(), d); }
    return a;
  }
  if (artId && method === 'DELETE') {
    d.articles = d.articles.filter(a => a.id !== parseInt(artId)); _lsSaveData(_uid(), d); return {};
  }

  // ── Products ──
  if (path === '/api/products/' && method === 'GET') return d.products.map(p => ({ ...p, composition: (p.composition||[]).map(c => ({ article: d.articles.find(a=>a.id===c.article_id)||{id:c.article_id,name:'?',unit:'pcs'}, quantity_used: c.quantity_used })) }));
  if (path === '/api/products/' && method === 'POST') {
    const p = { id: Date.now(), name: body.name, price: body.price || 0, purchase_price: body.purchase_price || 0, composition: body.composition || [] };
    d.products.push(p); _lsSaveData(_uid(), d);
    return { ...p, composition: p.composition.map(c => ({ article: d.articles.find(a=>a.id===c.article_id)||{id:c.article_id,name:'?',unit:'pcs'}, quantity_used: c.quantity_used })) };
  }
  const prodId = path.match(/\/api\/products\/(\d+)/)?.[1];
  if (prodId && method === 'PUT') {
    const p = d.products.find(p => p.id === parseInt(prodId));
    if (p) { p.name = body.name || p.name; p.price = body.price ?? p.price; p.purchase_price = body.purchase_price ?? p.purchase_price ?? 0; p.composition = body.composition || p.composition; _lsSaveData(_uid(), d); }
    return { ...p, composition: (p.composition||[]).map(c => ({ article: d.articles.find(a=>a.id===c.article_id)||{id:c.article_id,name:'?',unit:'pcs'}, quantity_used: c.quantity_used })) };
  }
  if (prodId && method === 'DELETE') {
    d.products = d.products.filter(p => p.id !== parseInt(prodId)); _lsSaveData(_uid(), d); return {};
  }

  // ── Sales ──
  if (path === '/api/sales/' && method === 'GET') return d.sales;
  if (path === '/api/sales/' && method === 'POST') {
    const p = d.products.find(p => p.id === body.product_id);
    if (!p) throw new Error('Produit introuvable');
    for (const c of (p.composition||[])) {
      const art = d.articles.find(a => a.id === c.article_id);
      if (!art || art.quantity < c.quantity_used * body.quantity) throw new Error(`Stock insuffisant : ${art?.name||'?'}`);
    }
    for (const c of (p.composition||[])) {
      const art = d.articles.find(a => a.id === c.article_id);
      if (art) art.quantity = Math.round((art.quantity - c.quantity_used * body.quantity) * 10) / 10;
    }
    const sale = { id: Date.now(), product_id: body.product_id, product_name: p.name, quantity: body.quantity, client_id: body.client_id || null, client_name: body.client_name || null, timestamp: new Date().toISOString() };
    d.sales.unshift(sale); _lsSaveData(_uid(), d);
    return { sale };
  }

  // ── Clients ──
  if (!d.clients) d.clients = [];
  if (path === '/api/clients/' && method === 'GET') return d.clients;
  if (path === '/api/clients/' && method === 'POST') {
    const c = { id: Date.now(), name: body.name, phone: body.phone || '', email: body.email || '', notes: body.notes || '', created_at: new Date().toISOString() };
    d.clients.push(c); _lsSaveData(_uid(), d); return c;
  }
  const clientId = path.match(/\/api\/clients\/(\d+)/)?.[1];
  if (clientId && method === 'PUT') {
    const c = d.clients.find(c => c.id === parseInt(clientId));
    if (c) { c.name = body.name || c.name; c.phone = body.phone ?? c.phone; c.email = body.email ?? c.email; c.notes = body.notes ?? c.notes; _lsSaveData(_uid(), d); }
    return c;
  }
  if (clientId && method === 'DELETE') {
    d.clients = d.clients.filter(c => c.id !== parseInt(clientId)); _lsSaveData(_uid(), d); return {};
  }

  // ── Predictions (stub local) ──
  if (path === '/api/predictions/') return [];

  // ── Spectra (offline: simulate detection from existing stock) ──
  if (path === '/api/spectra/scan' && method === 'POST') {
    // Offline: generate detections based on existing articles
    const arts = d.articles.length > 0 ? d.articles : [
      { name: 'Article A', quantity: 10, unit: 'pce' },
      { name: 'Article B', quantity: 5, unit: 'pce' },
      { name: 'Article C', quantity: 8, unit: 'pce' },
    ];
    const detections = arts.slice(0, 8).map(a => ({
      detected_name: a.name,
      matched_name: a.name,
      matched_id: a.id || null,
      matched_unit: a.unit || 'pce',
      quantity: Math.max(1, Math.floor(Math.random() * ((a.quantity || 10) + 4))),
      confidence: Math.floor(82 + Math.random() * 17),
    }));
    return { detections };
  }
  if (path === '/api/spectra/confirm' && method === 'POST') {
    const results = [];
    for (const item of (body.items || [])) {
      const art = d.articles.find(a => a.id === item.article_id || a.name.toLowerCase() === item.name.toLowerCase());
      if (art) {
        art.quantity = (art.quantity || 0) + item.quantity;
        results.push({ name: art.name, new_qty: item.quantity, unit: art.unit || item.unit || 'pce' });
      } else {
        const newArt = { id: Date.now() + Math.floor(Math.random()*1000), name: item.name, quantity: item.quantity, unit: item.unit || 'pce', alert_threshold: 0, lead_time_days: 7 };
        d.articles.push(newArt);
        results.push({ name: item.name, new_qty: item.quantity, unit: item.unit || 'pce' });
      }
    }
    _lsSaveData(_uid(), d);
    return { results };
  }

  throw new Error('Route locale non supportée : ' + path);
}

// ── API helper ────────────────────────────────
async function api(method, path, body) {
  if (USE_LOCAL) {
    try { return _localApi(method, path, body); }
    catch(e) { throw new Error(e.message); }
  }
  try {
    const res = await fetch(API_BASE + path, {
      method,
      headers: { 'Content-Type': 'application/json', ...(S.token ? { 'Authorization': `Bearer ${S.token}` } : {}) },
      body: body ? JSON.stringify(body) : undefined
    });
    if (res.status === 401) {
      // Token invalide ou expiré → déconnexion automatique
      clearSession();
      S.session = null; S.token = null; USE_LOCAL = false;
      render();
      return;
    }
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(typeof err.error === 'string' ? err.error : (err.error?.error || err.message || `Erreur ${res.status}`));
    }
    return res.json();
  } catch(e) {
    if (e.message === 'Failed to fetch' || e.name === 'TypeError' || e.message.includes('503')) {
      USE_LOCAL = true;
      showToast(t('offlineMode'), '');
      return _localApi(method, path, body);
    }
    throw e;
  }
}

// ── Mapping API → state ───────────────────────
function articleFromAPI(a) {
  return { id: a.id, name: a.name, stock: a.quantity, unit: a.unit, min: a.alert_threshold || 0, lead: a.lead_time_days };
}
function productFromAPI(p) {
  return {
    id: p.id, name: p.name, price: p.price, purchasePrice: p.purchase_price || 0,
    composition: (p.composition || []).map(c => ({ id: c.article.id, qty: c.quantity_used }))
  };
}
function marginPct(p) {
  return p.price > 0 ? Math.round(((p.price - p.purchasePrice) / p.price) * 100) : 0;
}
function profitUnit(p) {
  return p.price - p.purchasePrice;
}
function saleFromAPI(s) {
  const product = S.products.find(p => p.id === s.product_id);
  const price = product ? product.price : 0;
  const cost  = product ? product.purchasePrice : 0;
  return { id: s.id, productId: s.product_id, productName: s.product_name, qty: s.quantity, total: price * s.quantity, profit: (price - cost) * s.quantity, date: s.timestamp, clientId: s.client_id || null, clientName: s.client_name || null };
}

// ── Charger données depuis l'API ──────────────
async function loadData() {
  // Si token présent, toujours essayer l'API réelle
  if (S.token && USE_LOCAL) USE_LOCAL = false;
  try {
    const [arts, prods, sales, preds, clients] = await Promise.all([
      api('GET', '/api/articles/'),
      api('GET', '/api/products/'),
      api('GET', '/api/sales/'),
      api('GET', '/api/predictions/').catch(() => null),
      api('GET', '/api/clients/').catch(() => []),
    ]);
    S.products    = prods.map(productFromAPI);
    S.articles    = arts.map(articleFromAPI);
    S.sales       = sales.map(saleFromAPI);
    S.predictions = preds || null;
    S.clients     = clients || [];
    recalcAllMins();
    render();
  } catch(e) {
    console.error('loadData error:', e);
    showToast(e.message || t('errLoad'), 'error');
    render();
  }
}

// ── Helpers ───────────────────────────────────
const $ = id => document.getElementById(id);

function fmt(n) {
  return Math.round(n).toLocaleString('fr-FR');
}
function fmtPDF(n) {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');
}
function fmtCurrency(n) {
  const sym = S.session?.currency_symbol || 'FCFA';
  return `${fmt(n)} ${sym}`;
}
function fmtDate(iso) {
  const d = new Date(iso), now = new Date(), diff = now - d;
  if (diff < 60000)    return "À l'instant";
  if (diff < 3600000)  return `Il y a ${Math.floor(diff/60000)} min`;
  if (diff < 86400000) return `Il y a ${Math.floor(diff/3600000)} h`;
  return d.toLocaleDateString('fr-FR', { day:'numeric', month:'short' });
}
function initials(name) {
  return name.trim().split(/\s+/).slice(0,2).map(w=>w[0].toUpperCase()).join('');
}
function stockStatus(stock, min) {
  if (stock === 0) return { label:'Rupture', cls:'st-out', icon:IC.xmark, bar:'out' };
  if (stock < min) return { label:'Faible',  cls:'st-low', icon:IC.warn,  bar:'low' };
  return               { label:'OK',       cls:'st-ok',  icon:IC.check, bar:''    };
}
function productMaxMake(product) {
  if (!product.composition.length) return 99;
  return Math.floor(Math.min(...product.composition.map(c => {
    const a = S.articles.find(x => x.id === c.id);
    return a ? a.stock / c.qty : 0;
  })));
}
function salesForPeriod() {
  const now = new Date();
  if (S.period==='today') return S.sales.filter(s => new Date(s.date).toDateString()===now.toDateString());
  if (S.period==='7d')    return S.sales.filter(s => new Date(s.date) >= new Date(now-7*86400000));
  if (S.period==='30d')   return S.sales.filter(s => new Date(s.date) >= new Date(now-30*86400000));
  return S.sales;
}

// ── Calcul seuil auto ─────────────────────────
// Somme des qty requises de cet article dans tous les produits
function recalcMin(articleId) {
  let total = 0;
  S.products.forEach(p => {
    const comp = p.composition.find(c => c.id === articleId);
    if (comp) total += comp.qty;
  });
  const art = S.articles.find(a => a.id === articleId);
  if (art && total > 0) art.min = total;
}
function recalcAllMins() {
  S.articles.forEach(a => recalcMin(a.id));
}

// ── Activity Feed ─────────────────────────────
function logActivity(type, detail, extra = {}) {
  const act = { id: Date.now(), type, detail, date: new Date().toISOString(), ...extra };
  S.activities.unshift(act);
  if (S.activities.length > 100) S.activities = S.activities.slice(0, 100);
  localStorage.setItem('stockr_activities', JSON.stringify(S.activities));
}
function fmtTimeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return t('justNow');
  if (mins < 60) return `${mins} ${t('minutesAgo')}`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} ${t('hoursAgo')}`;
  return new Date(iso).toLocaleDateString(_lang === 'en' ? 'en-US' : 'fr-FR', { day:'numeric', month:'short' });
}

// ── Subscription Manager ──────────────────────
function activatePlan(planKey) {
  S.subscription = {
    plan: planKey,
    activated: new Date().toISOString(),
    billing: S.subscription.billing || 'monthly',
    trialEnd: planKey !== 'free' ? new Date(Date.now() + 14 * 86400000).toISOString() : null,
  };
  localStorage.setItem('stockr_subscription', JSON.stringify(S.subscription));
  logActivity('plan', t('planActivated') + ' ' + planKey.toUpperCase());
  showToast(t('planActivated'));
  render();
}
function cancelPlan() {
  if (!confirm(t('confirmCancel') + ' ?')) return;
  S.subscription = { plan: 'free', activated: null, billing: 'monthly' };
  localStorage.setItem('stockr_subscription', JSON.stringify(S.subscription));
  showToast(t('planFree'));
  render();
}
function setBilling(cycle) {
  S.subscription.billing = cycle;
  localStorage.setItem('stockr_subscription', JSON.stringify(S.subscription));
  render();
}
function getPlanLimits(plan) {
  const limits = {
    free:     { articles: 50, sales: 100, locations: 1, spectra: 5, suppliers: 3, orders: 10 },
    pro:      { articles: -1, sales: -1, locations: 5, spectra: -1, suppliers: -1, orders: -1 },
    business: { articles: -1, sales: -1, locations: -1, spectra: -1, suppliers: -1, orders: -1 },
  };
  return limits[plan] || limits.free;
}

// ── Expiry Date Helpers ───────────────────────
function getExpiryStatus(expiryDate) {
  if (!expiryDate) return null;
  const now = new Date(); now.setHours(0,0,0,0);
  const exp = new Date(expiryDate); exp.setHours(0,0,0,0);
  const diff = Math.ceil((exp - now) / 86400000);
  if (diff < 0) return { status: 'expired', days: Math.abs(diff), color: 'var(--danger)', label: t('expired') };
  if (diff === 0) return { status: 'today', days: 0, color: 'var(--danger)', label: t('expiryToday') };
  if (diff <= 7) return { status: 'soon', days: diff, color: 'var(--warning)', label: `${diff} ${t('daysLeft')}` };
  if (diff <= 30) return { status: 'ok', days: diff, color: 'var(--success)', label: `${diff} ${t('daysLeft')}` };
  return { status: 'ok', days: diff, color: 'var(--text-3)', label: `${diff} ${t('daysLeft')}` };
}
function getExpiringArticles() {
  return S.articles
    .filter(a => a.expiry)
    .map(a => ({ ...a, expiryInfo: getExpiryStatus(a.expiry) }))
    .filter(a => a.expiryInfo && a.expiryInfo.days <= 30)
    .sort((a, b) => a.expiryInfo.days - b.expiryInfo.days);
}

// ── Toast ──────────────────────────────────────
function showToast(msg, type='') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  $('toast-container').appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity 0.25s';
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 250);
  }, 2600);
}

// ── Auth Actions ───────────────────────────────
async function doLogin() {
  const email = S.authEmail.trim();
  const pwd   = S.authPwd;
  if (!email || !pwd) { showToast(t('fillAll'), 'error'); return; }
  try {
    const data = await api('POST', '/api/auth/login', { email, password: pwd });
    const u = data.user;
    S.token   = u.auth_token;
    S.session = {
      id: u.id, name: u.name, email: u.email, business: u.business_name,
      profile:         u.profile         || 'transformer',
      currency:        u.currency        || 'XOF',
      currency_symbol: getCurrencySymbol(u.currency || 'XOF'),
      country:         u.country         || 'SN',
      language:        u.language        || 'fr',
      tax_rate:        u.tax_rate        || 0,
    };
    saveSession({ ...S.session, token: S.token });
    S.authEmail = S.authPwd = '';
    S.view = 'home';
    render();
    await loadData();
  } catch(e) {
    showToast(e.message || 'Email ou mot de passe incorrect', 'error');
  }
}

function authNextStep() {
  const name  = S.authName.trim();
  const email = S.authEmail.trim();
  const pwd   = S.authPwd;
  const pwd2  = S.authPwd2;
  if (!name || !email || !pwd) { showToast(t('fillAll'), 'error'); return; }
  if (pwd !== pwd2)            { showToast(t('pwdMismatch'), 'error'); return; }
  if (pwd.length < 6)          { showToast(t('pwdShort'), 'error'); return; }
  S.authStep = 2;
  render();
}

const CURRENCIES = [
  { code:'XOF', label:'Franc CFA (FCFA)', symbol:'FCFA' },
  { code:'EUR', label:'Euro (€)',          symbol:'€'    },
  { code:'USD', label:'Dollar ($)',        symbol:'$'    },
  { code:'MAD', label:'Dirham (DH)',       symbol:'DH'   },
  { code:'GBP', label:'Livre sterling (£)',symbol:'£'    },
  { code:'NGN', label:'Naira (₦)',         symbol:'₦'    },
  { code:'GHS', label:'Cedi (₵)',          symbol:'₵'    },
  { code:'XAF', label:'Franc CFA Centrafrique', symbol:'FCFA' },
];

const COUNTRIES = [
  { code:'SN', label:'Sénégal'      },
  { code:'CI', label:"Côte d'Ivoire"},
  { code:'ML', label:'Mali'         },
  { code:'BF', label:'Burkina Faso' },
  { code:'GN', label:'Guinée'       },
  { code:'BJ', label:'Bénin'        },
  { code:'TG', label:'Togo'         },
  { code:'CM', label:'Cameroun'     },
  { code:'CD', label:'RD Congo'     },
  { code:'MG', label:'Madagascar'   },
  { code:'MA', label:'Maroc'        },
  { code:'DZ', label:'Algérie'      },
  { code:'TN', label:'Tunisie'      },
  { code:'FR', label:'France'       },
  { code:'BE', label:'Belgique'     },
  { code:'CH', label:'Suisse'       },
  { code:'CA', label:'Canada'       },
  { code:'US', label:'États-Unis'   },
  { code:'GB', label:'Royaume-Uni'  },
];

function getCurrencySymbol(code) {
  return CURRENCIES.find(c => c.code === code)?.symbol || code;
}

async function doRegister() {
  const name     = S.authName.trim();
  const business = (S.authBiz || '').trim();
  const email    = S.authEmail.trim();
  const pwd      = S.authPwd;
  try {
    const data = await api('POST', '/api/auth/register', {
      email,
      password:      pwd,
      name,
      business_name: business || name,
      country:       S.authCountry,
      language:      S.authLang,
      currency:      S.authCurrency,
      profile:       S.authProfile,
      tax_rate:      parseFloat(S.authTax) || 0,
    });
    const u = data.user;
    S.token   = u.auth_token;
    S.session = {
      id: u.id, name: u.name, email: u.email, business: u.business_name,
      profile:         S.authProfile,
      currency:        S.authCurrency,
      currency_symbol: getCurrencySymbol(S.authCurrency),
      country:         S.authCountry,
      language:        S.authLang,
      tax_rate:        parseFloat(S.authTax) || 0,
    };
    saveSession({ ...S.session, token: S.token });
    S.authEmail = S.authPwd = S.authPwd2 = S.authName = S.authBiz = '';
    S.authStep = 1;
    S.view = 'home';
    showToast(`Bienvenue, ${name} !`);
    render();
    await loadData();
  } catch(e) {
    showToast(e.message || 'Erreur lors de la création du compte', 'error');
  }
}

async function doLogout() {
  if (!confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) return;
  try { await api('POST', '/api/auth/logout'); } catch(e) { /* ignore */ }
  clearSession();
  S.session = null; S.token = null;
  S.articles = []; S.products = []; S.sales = []; S.cart = [];
  S.view = 'home'; S.authView = 'login';
  S.authEmail = S.authPwd = S.authPwd2 = S.authName = S.authBiz = '';
  render();
}

// ── App Actions ───────────────────────────────
async function applyStock() {
  const art = S.articles.find(a => a.id === S.selectedId);
  if (!art) return;
  if (S.action === 'remove' && art.stock < S.qty) { showToast(t('insufficientStock'), 'error'); return; }
  const newStock = S.action === 'add'
    ? Math.round((art.stock + S.qty) * 10) / 10
    : Math.round((art.stock - S.qty) * 10) / 10;
  try {
    await api('PUT', `/api/articles/${art.id}`, { quantity: newStock });
    art.stock = newStock;
    logMovement(art.name, S.action === 'add' ? 'entry' : 'exit', S.qty, S.action === 'add' ? t('reception') : t('withdrawal'));
    logActivity('stock', `${art.name}: ${S.action === 'add' ? '+' : '-'}${S.qty} ${art.unit}`);
    showToast(S.action === 'add' ? `+${S.qty} ${art.unit}` : `-${S.qty} ${art.unit}`);
    S.qty = 1;
    render();
  } catch(e) {
    showToast(e.message, 'error');
  }
}

async function deleteArticle(id) {
  const art = S.articles.find(a => a.id === id);
  if (!art) return;
  try {
    await api('DELETE', `/api/articles/${id}`);
    S.products.forEach(p => { p.composition = p.composition.filter(c => c.id !== id); });
    S.articles = S.articles.filter(a => a.id !== id);
    showToast(`"${art.name}" supprimé`);
    nav('pantry');
  } catch(e) {
    showToast(e.message, 'error');
  }
}

function recordSale() {
  const sel   = $('sale-product');
  const qtyEl = $('sale-qty');
  if (!sel || !sel.value) { showToast(t('chooseProduct'), 'error'); return; }
  const product = S.products.find(p => p.id === parseInt(sel.value));
  if (!product) return;
  const qty = Math.max(1, parseInt(qtyEl.value) || 1);
  for (const comp of product.composition) {
    const art = S.articles.find(a => a.id === comp.id);
    if (!art || art.stock < comp.qty * qty) {
      showToast(`Stock insuffisant : ${art ? art.name : '?'}`, 'error');
      return;
    }
  }
  product.composition.forEach(comp => {
    const art = S.articles.find(a => a.id === comp.id);
    if (art) art.stock = Math.round((art.stock - comp.qty * qty) * 10) / 10;
  });
  let saleTotal = product.price * qty;
  const saleCost = (product.purchasePrice || 0) * qty;
  const pmSel = $('sale-payment');
  const payMethod = pmSel ? pmSel.value : 'cash';
  const clientSel = $('sale-client');
  const clientId = clientSel ? parseInt(clientSel.value) || null : null;
  const client = clientId ? S.clients.find(c => c.id === clientId) : null;
  const PMLABELS = {cash:'Especes',wave:'Wave',orange:'Orange Money',moov:'Moov Money',mtn:'MTN MoMo'};
  // Apply promo
  const promo = _getActivePromo(product.id);
  let promoName = null, promoDiscount = 0;
  if (promo) { promoDiscount = promo.discount; promoName = promo.name; saleTotal = Math.round(saleTotal * (100 - promoDiscount) / 100); }
  S.sales.unshift({ id: Date.now(), productId: product.id, productName: product.name, qty, total: saleTotal, profit: saleTotal - saleCost, date: new Date().toISOString(), paymentMethod: payMethod, clientId, clientName: client?.name || null, promoName, promoDiscount });
  // Loyalty points (with tier multiplier)
  if (S.loyaltyConfig?.enabled && clientId) {
    const cl = S.clients.find(c => c.id === clientId);
    if (cl) {
      const tier = _getClientTier(cl);
      const mult = tier?.multiplier || 1;
      const pts = Math.floor(saleTotal * (S.loyaltyConfig.pointsPerFcfa || 1) * mult);
      cl.loyaltyPoints = (cl.loyaltyPoints || 0) + pts;
      localStorage.setItem('stockr_clients', JSON.stringify(S.clients));
      // Check tier upgrade
      const newTier = _getClientTier(cl);
      if (newTier && tier && newTier.id !== tier.id && newTier.min > tier.min) {
        showToast(`🎉 ${cl.name} a atteint le palier ${newTier.name} ${newTier.icon||''} !`, 'success');
      }
    }
  }
  logActivity('sale', `${product.name} x${qty} — ${fmt(saleTotal)} ${sym()} (${PMLABELS[payMethod]||payMethod})`);
  showToast(`${t('saleConfirmed')} — ${fmt(saleTotal)} ${sym()}`);
  render();
}

async function saveArticle() {
  const f = S.form;
  if (!f.name.trim()) { showToast(t('nameRequired'), 'error'); return; }
  try {
    const data = await api('POST', '/api/articles/', {
      name:            f.name.trim(),
      quantity:        parseFloat(f.stock) || 0,
      unit:            f.unit || 'pcs',
      alert_threshold: parseFloat(f.min) || null,
      lead_time_days:  parseInt(f.lead) || 7,
      ref:             f.ref || null,
      price:           parseFloat(f.price) || 0,
    });
    const newArt = articleFromAPI(data);
    newArt.ref = f.ref || '';
    newArt.price = parseFloat(f.price) || 0;
    newArt.expiry = f.expiry || '';
    S.articles.push(newArt);
    localStorage.setItem('stockr_articles', JSON.stringify(S.articles));
    logActivity('new_article', f.name.trim());
    showToast(`"${f.name}" ${t('added') || 'ajouté'}`);
    S.form = { name:'', stock:0, min:0, unit:'', lead:7, ref:'', price:0, expiry:'' };
    nav('pantry');
  } catch(e) {
    showToast(e.message, 'error');
  }
}

async function saveProduct() {
  const nameEl  = $('prod-name');
  const priceEl = $('prod-price');
  if (!nameEl || !nameEl.value.trim()) { showToast(t('nameRequired'), 'error'); return; }
  const composition = [];
  document.querySelectorAll('.comp-input').forEach(row => {
    const artId = parseInt(row.dataset.id);
    const art   = S.articles.find(a => a.id === artId);
    const qtyEl = row.querySelector('.comp-qty');
    const rawQty = parseFloat(qtyEl?.value) || 0;
    if (rawQty > 0 && art) {
      const selUnit   = S.compUnits[artId] || art.unit;
      const converted = convertQty(rawQty, selUnit, art.unit);
      composition.push({ article_id: artId, quantity_used: converted });
    }
  });
  try {
    const costEl = $('prod-cost');
    const data = await api('POST', '/api/products/', {
      name:           nameEl.value.trim(),
      purchase_price: parseFloat(costEl?.value) || 0,
      price:          parseFloat(priceEl?.value) || 0,
      composition
    });
    S.products.push(productFromAPI(data));
    // Recharger les articles (stocks peuvent avoir changé)
    const arts = await api('GET', '/api/articles/');
    S.articles = arts.map(articleFromAPI);
    recalcAllMins();
    showToast(`Produit "${nameEl.value}" créé`);
    nav('products');
  } catch(e) {
    showToast(e.message, 'error');
  }
}

// ── Export CSV ────────────────────────────────
function downloadCSV(filename, rows) {
  const BOM = '\uFEFF';
  const csv = BOM + rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
  showToast(`${filename} téléchargé`);
}

function exportArticlesCSV() {
  const rows = [['Nom', 'Stock', 'Unité', 'Seuil alerte', 'Délai (j)']];
  S.articles.forEach(a => rows.push([a.name, a.stock, a.unit, a.min, a.lead || '']));
  downloadCSV(`stockr_articles_${new Date().toISOString().slice(0,10)}.csv`, rows);
}

function exportProductsCSV() {
  const rows = [['Nom', 'Prix achat', 'Prix vente', 'Marge %', 'Bénéfice/u', 'Composition']];
  S.products.forEach(p => {
    const comp = p.composition.map(c => {
      const a = S.articles.find(a => a.id === c.id);
      return a ? `${fmtRecipeQty(c.qty, a.unit)} ${a.name}` : '';
    }).filter(Boolean).join(' + ');
    rows.push([p.name, p.purchasePrice || 0, p.price, marginPct(p) + '%', profitUnit(p), comp]);
  });
  downloadCSV(`stockr_produits_${new Date().toISOString().slice(0,10)}.csv`, rows);
}

function exportSalesCSV() {
  const rows = [['Date', 'Produit', 'Quantité', 'Total', 'Bénéfice']];
  S.sales.forEach(s => rows.push([fmtDate(s.date), s.productName, s.qty, s.total, s.profit || 0]));
  downloadCSV(`stockr_ventes_${new Date().toISOString().slice(0,10)}.csv`, rows);
}

function exportAllCSV() {
  exportArticlesCSV();
  setTimeout(() => exportProductsCSV(), 300);
  setTimeout(() => exportSalesCSV(), 600);
}

function calcCompCost() {
  let total = 0;
  document.querySelectorAll('.comp-input').forEach(row => {
    const artId = parseInt(row.dataset.id);
    const art   = S.articles.find(a => a.id === artId);
    const qtyEl = row.querySelector('.comp-qty');
    const rawQty = parseFloat(qtyEl?.value) || 0;
    if (rawQty > 0 && art && art.price > 0) {
      const selUnit   = S.compUnits[artId] || art.unit;
      const converted = convertQty(rawQty, selUnit, art.unit);
      total += converted * art.price;
    }
  });
  const costEl = $('prod-cost');
  if (costEl && total > 0) {
    costEl.value = Math.round(total);
    updateMarginPreview();
  }
}

function updateMarginPreview() {
  const cost = parseFloat($('prod-cost')?.value) || 0;
  const price = parseFloat($('prod-price')?.value) || 0;
  const box = document.getElementById('margin-preview');
  const val = document.getElementById('margin-val');
  if (!box || !val) return;
  if (price > 0) {
    const pct = Math.round(((price - cost) / price) * 100);
    const profit = price - cost;
    val.innerHTML = `${pct}% · ${t('profitShort')} ${fmt(profit)} ${sym()}/u`;
    val.style.color = pct >= 20 ? 'var(--success)' : pct >= 0 ? 'var(--warning)' : 'var(--danger)';
    box.style.display = '';
  } else {
    box.style.display = 'none';
  }
}

function toggleCart() {
  S.cartOpen = !S.cartOpen;
  render();
}

async function deleteProduct(id) {
  const p = S.products.find(p => p.id === id);
  if (!p) return;
  if (!confirm(`Supprimer "${p.name}" ?`)) return;
  try {
    await api('DELETE', `/api/products/${id}`);
    S.products = S.products.filter(p => p.id !== id);
    showToast(`"${p.name}" supprimé`);
    render();
  } catch(e) {
    showToast(e.message, 'error');
  }
}

async function saveEditProduct() {
  const nameEl  = $('prod-name');
  const priceEl = $('prod-price');
  if (!nameEl?.value.trim()) { showToast(t('nameRequired'), 'error'); return; }
  const p = S.products.find(p => p.id === S.editProductId);
  if (!p) return;
  const composition = [];
  document.querySelectorAll('.comp-input').forEach(row => {
    const artId = parseInt(row.dataset.id);
    const art   = S.articles.find(a => a.id === artId);
    const qtyEl = row.querySelector('.comp-qty');
    const rawQty = parseFloat(qtyEl?.value) || 0;
    if (rawQty > 0 && art) {
      const selUnit   = S.compUnits[artId] || art.unit;
      const converted = convertQty(rawQty, selUnit, art.unit);
      composition.push({ article_id: artId, quantity_used: converted });
    }
  });
  try {
    const costEl = $('prod-cost');
    const data = await api('PUT', `/api/products/${p.id}`, {
      name:           nameEl.value.trim(),
      purchase_price: parseFloat(costEl?.value) || 0,
      price:          parseFloat(priceEl?.value) || 0,
      composition,
    });
    p.name  = data.name;
    p.price = data.price;
    p.purchasePrice = data.purchase_price || 0;
    p.composition = (data.composition || []).map(c => ({ id: c.article.id, qty: c.quantity_used }));
    // Recharger les articles (stocks peuvent avoir changé)
    const arts = await api('GET', '/api/articles/');
    S.articles = arts.map(articleFromAPI);
    recalcAllMins();
    showToast(`"${p.name}" mis à jour`);
    nav('products');
  } catch(e) {
    showToast(e.message, 'error');
  }
}

function toggleAuthPwd(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  S.authShowPwd = !S.authShowPwd;
  // Zéro render() — DOM direct uniquement, les champs ne sont jamais vidés
  const pEl  = document.getElementById('auth-pwd');
  const p2El = document.getElementById('auth-pwd2');
  if (pEl)  pEl.classList.toggle('pwd-masked', !S.authShowPwd);
  if (p2El) p2El.classList.toggle('pwd-masked', !S.authShowPwd);
  document.querySelectorAll('.pwd-eye').forEach(btn => {
    btn.innerHTML = S.authShowPwd ? IC.eyeOff : IC.eye;
  });
}

// ── Cart actions ──────────────────────────────
function addToCart() {
  const sel   = $('sale-product');
  const qtyEl = $('sale-qty');
  if (!sel?.value) { showToast(t('chooseProduct'), 'error'); return; }
  const product = S.products.find(p => p.id === parseInt(sel.value));
  if (!product) return;
  const qty = Math.max(1, parseInt(qtyEl?.value) || 1);
  const existing = S.cart.find(c => c.productId === product.id);
  if (existing) { existing.qty += qty; }
  else { S.cart.push({ productId:product.id, productName:product.name, qty, unitPrice:product.price, unitCost:product.purchasePrice }); }
  showToast(`${product.name} ajouté au panier`);
  render();
}

function removeFromCart(idx) {
  S.cart.splice(idx, 1);
  render();
}

async function confirmCart() {
  if (!S.cart.length) { showToast(t('emptyCartMsg'), 'error'); return; }
  const clientSel = $('sale-client');
  const clientId = clientSel ? parseInt(clientSel.value) || null : null;
  const client = clientId ? S.clients.find(c => c.id === clientId) : null;
  const pmSel = $('sale-payment');
  const payMethod = pmSel ? pmSel.value : 'cash';
  try {
    let total = 0, count = 0, newSales = [];
    for (const item of S.cart) {
      const data = await api('POST', '/api/sales/', { product_id: item.productId, quantity: item.qty, client_id: clientId, client_name: client?.name || null });
      const product = S.products.find(p => p.id === item.productId);
      let lineTotal = (product?.price || 0) * item.qty;
      let lineProfit = ((product?.price || 0) - (product?.purchasePrice || 0)) * item.qty;
      // Apply promo discount
      const promo = _getActivePromo(item.productId);
      let promoName = null, promoDiscount = 0;
      if (promo) {
        promoDiscount = promo.discount;
        promoName = promo.name;
        const discount = Math.round(lineTotal * promoDiscount / 100);
        lineTotal -= discount;
        lineProfit -= discount;
      }
      total += lineTotal;
      count += item.qty;
      const newSale = { id: data.sale.id, productId: data.sale.product_id, productName: data.sale.product_name, qty: data.sale.quantity, total: lineTotal, profit: lineProfit, date: data.sale.timestamp, clientId, clientName: client?.name || null, paymentMethod: payMethod, promoName, promoDiscount };
      S.sales.unshift(newSale);
      newSales.push(newSale);
    }
    // Loyalty points (with tier multiplier)
    if (S.loyaltyConfig?.enabled && clientId) {
      const cl = S.clients.find(c => c.id === clientId);
      if (cl) {
        const tier = _getClientTier(cl);
        const mult = tier?.multiplier || 1;
        const pts = Math.floor(total * (S.loyaltyConfig.pointsPerFcfa || 1) * mult);
        cl.loyaltyPoints = (cl.loyaltyPoints || 0) + pts;
        localStorage.setItem('stockr_clients', JSON.stringify(S.clients));
        const newTier = _getClientTier(cl);
        if (newTier && tier && newTier.id !== tier.id && newTier.min > tier.min) {
          showToast(`🎉 ${cl.name} a atteint le palier ${newTier.name} ${newTier.icon||''} !`, 'success');
        }
      }
    }
    // Payment history
    if (payMethod !== 'cash') {
      S.paymentHistory.unshift({ id:Date.now(), provider:payMethod, amount:total, clientName:client?.name||'Client', date:new Date().toISOString() });
      localStorage.setItem('stockr_payment_history', JSON.stringify(S.paymentHistory));
    }
    S.cart = [];
    showToast(`${count} ${t('unitsSold')} — ${fmt(total)} ${sym()}`);
    showReceiptBanner(newSales, total);
    // Recharger les articles pour avoir les stocks à jour
    const arts = await api('GET', '/api/articles/');
    S.articles = arts.map(articleFromAPI);
    recalcAllMins();
    render();
  } catch(e) {
    showToast(e.message, 'error');
  }
}

// ── Unit combobox actions (DOM direct — zéro render() pendant la frappe) ──
function _unitDropHTML() {
  const q = (S.form.unit || '').toLowerCase();
  const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const filtered = UNITS.filter(u => u.toLowerCase().includes(q));
  if (!filtered.length) return `<div class="unit-opt" style="color:var(--text-3);cursor:default">${t('noResults')}</div>`;
  return filtered.map(u => {
    const hi = q ? u.replace(new RegExp(safe,'gi'), m => `<strong>${m}</strong>`) : u;
    return `<div class="unit-opt" onmousedown="event.preventDefault()" onclick="selectUnit('${u}')">${hi}</div>`;
  }).join('');
}
function openUnitDrop() {
  S.unitDropOpen = true;
  const wrap = document.getElementById('unit-combo-wrap');
  if (!wrap || document.getElementById('unit-dropdown')) return;
  const dd = document.createElement('div');
  dd.className = 'unit-dropdown'; dd.id = 'unit-dropdown';
  dd.innerHTML = _unitDropHTML();
  wrap.appendChild(dd);
}
function updateUnitDrop() {
  const inp = document.getElementById('unit-input');
  if (inp) S.form.unit = inp.value;
  const dd = document.getElementById('unit-dropdown');
  if (!dd) { openUnitDrop(); return; }
  dd.innerHTML = _unitDropHTML();
}
function closeUnitDrop() {
  S.unitDropOpen = false;
  const dd = document.getElementById('unit-dropdown');
  if (dd) dd.remove();
}
function selectUnit(u) {
  S.form.unit = u; S.unitDropOpen = false; S.unitCondVal = ''; S.unitCondOther = '';
  closeUnitDrop();
  render(); // re-render uniquement pour afficher/cacher la section conditionnelle
}
function selectUnitCond(v) { S.unitCondVal = v; S.unitCondOther = ''; render(); }

async function saveAccountInfo() {
  const nameVal  = ($('set-name')?.value  || '').trim();
  const bizVal   = ($('set-biz')?.value   || '').trim();
  if (!nameVal) { showToast(t('nameRequired'), 'error'); return; }
  try {
    await api('PUT', '/api/auth/profile', { name: nameVal, business_name: bizVal });
    S.session.name     = nameVal;
    S.session.business = bizVal;
    saveSession({ ...S.session, token: S.token });
    S.settingsEdit = false;
    showToast(t('infoUpdated'));
    render();
  } catch(e) {
    showToast(e.message, 'error');
  }
}

function toggleDark() {
  S.darkMode = !S.darkMode;
  document.body.classList.toggle('dark', S.darkMode);
  render();
}

function changeCurrency(code) {
  if (!S.session) return;
  S.session.currency = code;
  S.session.currency_symbol = getCurrencySymbol(code);
  // Save to localStorage
  const saved = JSON.parse(localStorage.getItem('stockr_session') || '{}');
  saved.currency = code;
  saved.currency_symbol = S.session.currency_symbol;
  localStorage.setItem('stockr_session', JSON.stringify(saved));
  showToast(t('infoUpdated'));
  render();
}

function changeTaxRate(val) {
  if (!S.session) return;
  S.session.tax_rate = parseFloat(val) || 0;
  const saved = JSON.parse(localStorage.getItem('stockr_session') || '{}');
  saved.tax_rate = S.session.tax_rate;
  localStorage.setItem('stockr_session', JSON.stringify(saved));
  showToast(t('infoUpdated'));
}

// ── Bannière reçu post-vente ──────────────────
function showReceiptBanner(sales, total) {
  const existing = document.getElementById('receipt-banner');
  if (existing) existing.remove();
  const sym = S.session?.currency_symbol || 'FCFA';
  const el = document.createElement('div');
  el.id = 'receipt-banner';
  el.className = 'receipt-banner';
  // Stocker les ventes dans un attribut data sérialisé
  const sid = 'rb_' + Date.now();
  window[sid] = sales;
  el.innerHTML = `
    <div class="receipt-banner-left">
      <div class="receipt-banner-title">${t('saleConfirmed')}</div>
      <div class="receipt-banner-total">${fmt(total)} ${sym}</div>
    </div>
    <div class="receipt-banner-btns">
      <button class="rb-btn rb-pdf" onclick="generateInvoicePDF(window['${sid}']);document.getElementById('receipt-banner').remove()">
        ${IC.pdf} PDF
      </button>
      <button class="rb-btn rb-wa" onclick="shareViaWhatsApp(window['${sid}']);document.getElementById('receipt-banner').remove()">
        ${IC.whatsapp} WhatsApp
      </button>
      <button class="rb-close" onclick="document.getElementById('receipt-banner').remove()">✕</button>
    </div>`;
  document.body.appendChild(el);
  setTimeout(() => { const b = document.getElementById('receipt-banner'); if (b) b.remove(); }, 10000);
}

// ── Navigate ──────────────────────────────────
function nav(view, extra={}) {
  Object.assign(S, extra);
  S.view = view;
  render();
}

// ── Render ────────────────────────────────────
function render() {
  const viewEl = $('view');
  const navEl  = $('nav');

  // Pas de session → écran auth
  if (!S.session) {
    navEl.style.display = 'none';
    viewEl.innerHTML = vAuth();
    viewEl.scrollTop = 0;
    return;
  }

  const map = {
    home: vHome, pantry: vPantry, products: vProducts,
    sales: vSales, financial: vFinancial,
    detail: vDetail, add: vAdd, 'add-product': vAddProduct,
    'edit-product': vEditProduct, settings: vSettings,
    spectra: vSpectraEnhanced, clients: vClients, 'add-client': vAddClient,
    'client-detail': vClientDetail, notifications: vNotifications,
    catalog: vCatalog, suppliers: vSuppliers,
    'add-supplier': vAddSupplier, 'supplier-detail': vSupplierDetail,
    'stock-history': vStockHistory, 'purchase-orders': vPurchaseOrdersEnhanced,
    'add-order': vAddOrder, pricing: vPricing, subscription: vSubscription,
    sova: vSova,
    // ── Nouvelles vues v2 ──
    more: vMore, boutique: vBoutique, marketing: vMarketing,
    'social-media': vSocialMedia, 'payments-setup': vPayments,
    integrations: vIntegrations,
    'promo-form': vPromoForm, 'promo-detail': vPromoDetail,
    'banner-form': vBannerForm, 'popup-form': vPopupForm,
    'review-form': vReviewForm, 'tracking-form': vTrackingForm,
    'boutique-appearance': vBoutiqueAppearance,
    'boutique-domain': vBoutiqueDomain,
    'boutique-pixels': vBoutiquePixels,
    'boutique-code': vBoutiqueCode,
    'api-settings': vApiSettings,
  };
  viewEl.innerHTML = (map[S.view] || vHome)();
  if (!S.globalSearch) viewEl.scrollTop = 0;

  if (S.view === 'financial') requestAnimationFrame(() => { renderRevenueChart(); renderProfitChart(); });

  // Restore focus on global search after re-render
  if (S.view === 'home' && S.globalSearch) {
    const gs = $('global-search');
    if (gs) { gs.focus(); gs.setSelectionRange(gs.value.length, gs.value.length); }
  }

  const hideNav = ['detail','add','add-product','edit-product','add-client','client-detail','notifications','catalog','add-supplier','supplier-detail','stock-history','purchase-orders','add-order','pricing','subscription','boutique','boutique-appearance','boutique-domain','boutique-pixels','boutique-code','marketing','social-media','payments-setup','integrations','api-settings','spectra'].includes(S.view);
  navEl.style.display = hideNav ? 'none' : '';
  if (!hideNav) navEl.innerHTML = renderNav();
}

function renderNav() {
  const tabs = [
    { id:'pantry',    icon:IC.box,    label:t('stock')    },
    { id:'products',  icon:IC.tag,    label:t('products') },
    { id:'home',      icon:IC.home,   label:t('home')     },
    { id:'sales',     icon:IC.dollar, label:t('sales')    },
    { id:'financial', icon:IC.bar,    label:t('bilan')    },
  ];
  return tabs.map(t => `
    <button class="nav-tab ${S.view===t.id?'active':''}" onclick="nav('${t.id}')">
      ${t.icon}
      <span class="nav-label">${t.label}</span>
    </button>`).join('');
}

// ── AUTH ──────────────────────────────────────
function vAuth() {
  const isLogin = S.authView === 'login';
  if (!isLogin && S.authStep === 2) return vAuthStep2();

  return `
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-logo">${IC.box}<span>STOCKR</span></div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
        <button onclick="setLang('fr')" style="padding:4px 10px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;border:1px solid ${_lang==='fr'?'var(--accent)':'var(--border)'};background:${_lang==='fr'?'var(--accent-light)':'transparent'};color:${_lang==='fr'?'var(--accent)':'var(--text-3)'}">FR</button>
        <button onclick="setLang('en')" style="padding:4px 10px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;border:1px solid ${_lang==='en'?'var(--accent)':'var(--border)'};background:${_lang==='en'?'var(--accent-light)':'transparent'};color:${_lang==='en'?'var(--accent)':'var(--text-3)'}">EN</button>
      </div>
      <div class="auth-title">${isLogin ? t('login') : t('register')}</div>
      <div class="auth-sub">${isLogin ? t('loginSub') : 'Étape 1/2'}</div>

      ${!isLogin ? `
      <div class="form-group">
        <label class="form-label">Prénom / Nom *</label>
        <input class="input" id="auth-name" type="text" placeholder="ex: Fatou Diallo" autocomplete="name" value="${S.authName}" oninput="S.authName=this.value">
      </div>
      <div class="form-group">
        <label class="form-label">Nom du commerce</label>
        <input class="input" id="auth-biz" type="text" placeholder="ex: Boutique Wax de Fatou" value="${S.authBiz||''}" oninput="S.authBiz=this.value">
      </div>` : ''}

      <div class="form-group">
        <label class="form-label">Email *</label>
        <input class="input" id="auth-email" type="email" placeholder="ton@email.com" autocomplete="email" value="${S.authEmail}" oninput="S.authEmail=this.value">
      </div>
      <div class="form-group">
        <label class="form-label">Mot de passe *</label>
        <div class="pwd-wrap">
          <input class="input ${S.authShowPwd?'':'pwd-masked'}" id="auth-pwd" type="text" placeholder="••••••••" autocomplete="${isLogin?'current-password':'new-password'}" value="${S.authPwd}" oninput="S.authPwd=this.value">
          <button class="pwd-eye" onclick="toggleAuthPwd(event)" type="button">${S.authShowPwd?IC.eyeOff:IC.eye}</button>
        </div>
      </div>
      ${!isLogin ? `
      <div class="form-group">
        <label class="form-label">Confirmer le mot de passe *</label>
        <div class="pwd-wrap">
          <input class="input ${S.authShowPwd?'':'pwd-masked'}" id="auth-pwd2" type="text" placeholder="••••••••" autocomplete="new-password" value="${S.authPwd2}" oninput="S.authPwd2=this.value">
        </div>
      </div>` : ''}

      <button class="btn btn-primary" style="margin-top:8px" onclick="${isLogin ? 'doLogin()' : 'authNextStep()'}">
        ${isLogin ? t('loginBtn') : t('next') + ' →'}
      </button>
      <div class="auth-switch">
        ${isLogin ? t('noAccount') : t('hasAccount')}
        <button onclick="S.authView='${isLogin?'register':'login'}';S.authStep=1;S.authShowPwd=false;render()">
          ${isLogin ? t('register') : t('loginBtn')}
        </button>
      </div>
    </div>
  </div>`;
}

function vAuthStep2() {
  const profiles = [
    {
      id: 'transformer',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      label: 'Transformateur',
      desc:  'Tu fabriques des produits à partir de matières premières (boulanger, couturier, restaurateur…)',
    },
    {
      id: 'reseller',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
      label: 'Revendeur',
      desc:  'Tu achètes des produits et les revends — à l\'unité, en pack ou en gros (épicier, boutique, import/export…)',
    },
  ];

  return `
  <div class="auth-wrap">
    <div class="auth-card">
      <button class="back-btn" style="margin-bottom:12px" onclick="S.authStep=1;render()">${IC.left}</button>
      <div class="auth-title">Ton profil</div>
      <div class="auth-sub">Étape 2 sur 2 — Ces paramètres sont modifiables plus tard</div>

      <div class="form-group" style="margin-top:16px">
        <label class="form-label">Type de commerce *</label>
        <div class="profile-cards">
          ${profiles.map(p => `
          <div class="profile-card ${S.authProfile===p.id?'selected':''}" onclick="S.authProfile='${p.id}';render()">
            <div class="profile-card-icon">${p.icon}</div>
            <div class="profile-card-label">${p.label}</div>
            <div class="profile-card-desc">${p.desc}</div>
          </div>`).join('')}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Pays</label>
        <select class="input" onchange="S.authCountry=this.value">
          ${COUNTRIES.map(c => `<option value="${c.code}" ${S.authCountry===c.code?'selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Devise</label>
        <select class="input" onchange="S.authCurrency=this.value">
          ${CURRENCIES.map(c => `<option value="${c.code}" ${S.authCurrency===c.code?'selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Langue</label>
        <select class="input" onchange="S.authLang=this.value">
          <option value="fr" ${S.authLang==='fr'?'selected':''}>Français</option>
          <option value="en" ${S.authLang==='en'?'selected':''}>English</option>
          <option value="ar" ${S.authLang==='ar'?'selected':''}>العربية</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Taux de TVA (%)</label>
        <input class="input" type="number" min="0" max="100" step="0.5"
               placeholder="ex: 18" value="${S.authTax||''}"
               oninput="S.authTax=this.value">
        <div class="form-hint">Utilisé pour le calcul des factures. 0 si non applicable.</div>
      </div>

      <button class="btn btn-primary" style="margin-top:8px" onclick="doRegister()">
        Créer mon compte
      </button>
    </div>
  </div>`;
}

// ── HOME ──────────────────────────────────────
function vHome() {
  const low     = S.articles.filter(a => a.stock < a.min && a.min > 0);
  const totalCA = S.sales.reduce((s,v) => s+v.total, 0);
  const totalProfit = S.sales.reduce((s,v) => s+(v.profit||0), 0);
  const avgMargin = totalCA > 0 ? Math.round((totalProfit / totalCA) * 100) : 0;
  const stockVal = S.articles.reduce((s,a) => s+a.stock*(a.price||0), 0);
  const today   = new Date().toDateString();
  const todaySales = S.sales.filter(s => new Date(s.date).toDateString()===today);
  const todayCA = todaySales.reduce((s,v)=>s+v.total,0);
  const todayProfit = todaySales.reduce((s,v)=>s+(v.profit||0),0);

  // Top products by revenue
  const prodStats = {};
  S.sales.forEach(s => {
    if (!prodStats[s.productName]) prodStats[s.productName] = { qty:0, rev:0, profit:0 };
    prodStats[s.productName].qty += s.qty;
    prodStats[s.productName].rev += s.total;
    prodStats[s.productName].profit += (s.profit||0);
  });
  const topProducts = Object.entries(prodStats).sort((a,b)=>b[1].rev-a[1].rev).slice(0,3);
  const maxRev = topProducts.length ? topProducts[0][1].rev : 1;

  // Best margin products
  const bestMargin = S.products.filter(p => p.purchasePrice > 0 && p.price > 0)
    .map(p => ({ name: p.name, margin: marginPct(p), profit: profitUnit(p), price: p.price }))
    .sort((a,b) => b.margin - a.margin).slice(0, 3);

  // Week sales trend (last 7 days)
  const weekDays = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const ds = d.toDateString();
    const dayCA = S.sales.filter(s => new Date(s.date).toDateString() === ds).reduce((s,v)=>s+v.total, 0);
    weekDays.push({ label: d.toLocaleDateString('fr', {weekday:'short'}).slice(0,3), ca: dayCA });
  }
  const maxDay = Math.max(...weekDays.map(d=>d.ca), 1);

  // Global search
  const _gq = S.globalSearch.trim().toLowerCase();
  const _showSearch = _gq.length >= 2;
  let _searchHTML = '';
  if (_showSearch) {
    const ma = S.articles.filter(a => a.name.toLowerCase().includes(_gq)).slice(0,4);
    const mp = S.products.filter(p => p.name.toLowerCase().includes(_gq)).slice(0,4);
    const mc = S.clients.filter(c => c.name.toLowerCase().includes(_gq) || (c.phone||'').includes(_gq)).slice(0,4);
    const ms = S.sales.filter(s => s.productName.toLowerCase().includes(_gq) || (s.clientName||'').toLowerCase().includes(_gq)).slice(0,4);
    const total = ma.length + mp.length + mc.length + ms.length;
    if (total === 0) {
      _searchHTML = `<div class="card" style="text-align:center;padding:32px 18px;color:var(--text-3)"><div style="font-size:32px;margin-bottom:8px">🔍</div><div style="font-size:13px">${t('noResults')}</div></div>`;
    } else {
      if (ma.length) _searchHTML += `<div class="section-hd"><div class="section-lbl">${t('articles')} (${ma.length})</div></div>` + ma.map(a => `<div class="card card-tap" style="margin-bottom:4px" onclick="nav('detail',{selectedId:${a.id}})"><div class="article-row"><div class="article-avatar">${initials(a.name)}</div><div class="article-info"><div class="article-name">${a.name}</div><div class="article-meta">${fmtQty(a.stock)} ${a.unit}</div></div><div style="color:var(--gray-4)">${IC.chevron}</div></div></div>`).join('');
      if (mp.length) _searchHTML += `<div class="section-hd"><div class="section-lbl">${t('products')} (${mp.length})</div></div>` + mp.map(p => `<div class="card card-tap" style="margin-bottom:4px" onclick="nav('products')"><div class="article-row"><div class="article-avatar">${initials(p.name)}</div><div class="article-info"><div class="article-name">${p.name}</div><div class="article-meta">${fmt(p.price)} ${sym()}</div></div><div style="color:var(--gray-4)">${IC.chevron}</div></div></div>`).join('');
      if (mc.length) _searchHTML += `<div class="section-hd"><div class="section-lbl">${t('clients')} (${mc.length})</div></div>` + mc.map(c => `<div class="card card-tap" style="margin-bottom:4px" onclick="nav('client-detail',{selectedClientId:${c.id}})"><div class="article-row"><div class="article-avatar">${initials(c.name)}</div><div class="article-info"><div class="article-name">${c.name}</div><div class="article-meta">${c.phone||c.email||''}</div></div><div style="color:var(--gray-4)">${IC.chevron}</div></div></div>`).join('');
      if (ms.length) _searchHTML += `<div class="section-hd"><div class="section-lbl">${t('sales')} (${ms.length})</div></div>` + ms.map(s => `<div class="card" style="margin-bottom:4px"><div class="sale-item" style="padding:0"><div class="sale-dot"></div><div class="sale-info"><div class="sale-prod">${s.productName}</div><div class="sale-date">${fmtDate(s.date)}${s.clientName?' · '+s.clientName:''}</div></div><div class="sale-right"><div class="sale-total">${fmt(s.total)} ${sym()}</div></div></div></div>`).join('');
    }
  }

  return `
  <div class="hero anim">
    <div class="hero-top">
      <div>
        <div class="hero-greeting">${t('hello')}, ${S.session.name.split(' ')[0]}</div>
        <div class="hero-name">${S.session.business || S.session.name}</div>
        ${S.locations.length > 0 ? `<div class="hero-location">
          <select class="location-select" onchange="setLocation(this.value?Number(this.value):null)" style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);color:#fff;padding:4px 10px;border-radius:8px;font-size:11px;font-weight:600;outline:none;cursor:pointer;-webkit-appearance:none;appearance:none">
            <option value="" style="color:#000">${t('allLocations')}</option>
            ${S.locations.map(l => `<option value="${l.id}" style="color:#000" ${S.currentLocation===l.id?'selected':''}>${l.name}${l.type?' ('+({'store':'Boutique','warehouse':'Entrepôt','popup':'Pop-up'}[l.type]||l.type)+')':''}</option>`).join('')}
          </select>
        </div>` : ''}
      </div>
      <div style="display:flex;gap:8px">
        <button class="hero-btn" onclick="nav('notifications')" style="position:relative">${IC.bell}${low.length>0?`<span style="position:absolute;top:-2px;right:-2px;width:18px;height:18px;border-radius:50%;background:var(--danger);color:#fff;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center">${low.length}</span>`:''}</button>
        <button class="hero-btn" onclick="nav('settings')">${IC.settings}</button>
      </div>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-val">${S.articles.length}</div>
        <div class="hero-stat-lbl">${t('articles')}</div>
      </div>
      <div class="hero-stat ${low.length>0?'warn':''}">
        <div class="hero-stat-val">${low.length}</div>
        <div class="hero-stat-lbl">${t('alerts')}</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-val">${fmt(todayCA)}</div>
        <div class="hero-stat-lbl">${t('caToday')}</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-val" style="color:#34d399">${fmt(todayProfit)}</div>
        <div class="hero-stat-lbl">${t('profitToday')}</div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="search-wrap" style="margin-bottom:12px">
      <span class="search-ico">${IC.search}</span>
      <input class="input input-search" type="text" placeholder="    ${t('searchAll')}" value="${S.globalSearch.replace(/"/g,'&quot;')}" oninput="S.globalSearch=this.value;render()" id="global-search">
    </div>
    ${_showSearch ? _searchHTML : ''}
    ${!_showSearch ? `
    <div class="section-hd" style="margin-top:4px"><div class="section-lbl" style="font-size:12px;letter-spacing:.5px;color:var(--text-3);font-weight:700">✦ TES AGENTS IA</div></div>
    <div class="agent-card agent-sova" onclick="nav('sova')">
      <div class="agent-icon agent-icon-sova">${IC.sova}</div>
      <div class="agent-info">
        <div class="agent-name agent-name-sova">SOVA</div>
        <div class="agent-sub">Intelligence de stock · prévisions & alertes</div>
      </div>
      <svg class="agent-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
    </div>
    <div class="agent-card agent-spectra" onclick="nav('spectra')">
      <div class="agent-icon agent-icon-spectra">${IC.spectraEye}</div>
      <div class="agent-info">
        <div class="agent-name agent-name-spectra">Spectra</div>
        <div class="agent-sub">Scanner IA · audit automatique du stock</div>
      </div>
      <svg class="agent-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
    </div>
    <div class="quick-actions-bar">
      <button class="qa-btn qa-product" onclick="nav('add-product')">
        <div class="qa-ico">${IC.tag}</div>
        <div class="qa-lbl">Produit</div>
      </button>
      <button class="qa-btn qa-sale" onclick="nav('sales')">
        <div class="qa-ico">${IC.dollar}</div>
        <div class="qa-lbl">${t('addSale')}</div>
      </button>
      <button class="qa-btn qa-article" onclick="nav('add')">
        <div class="qa-ico">${IC.plus}</div>
        <div class="qa-lbl">${t('newArticleShort')}</div>
      </button>
      <button class="qa-btn qa-report" onclick="nav('financial')">
        <div class="qa-ico">${IC.bar}</div>
        <div class="qa-lbl">${t('viewReport')}</div>
      </button>
    </div>` : ''}

    ${!_showSearch && low.length > 0 ? `
    <div class="alert-banner" onclick="nav('pantry',{filter:'low'})">
      <div class="alert-ico">${IC.alert}</div>
      <div style="flex:1">
        <div class="alert-title">${low.length} ${t('lowStockAlert')}</div>
        <div class="alert-sub">${low.slice(0,3).map(a=>a.name).join(' · ')}</div>
      </div>
      <div class="alert-arrow">${IC.chevron}</div>
    </div>` : ''}

    ${(() => {
      if (_showSearch) return '';
      const expiring = getExpiringArticles();
      if (expiring.length === 0) return '';
      return `
      <div class="alert-banner expiry-alert" onclick="nav('pantry')">
        <div class="alert-ico" style="background:rgba(245,158,11,.12);color:var(--warning)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div style="flex:1">
          <div class="alert-title">${expiring.length} ${t('expiringSoon')}</div>
          <div class="alert-sub">${expiring.slice(0,3).map(a => `${a.name} (${a.expiryInfo.label})`).join(' · ')}</div>
        </div>
        <div class="alert-arrow">${IC.chevron}</div>
      </div>`;
    })()}

    ${(() => {
      if (_showSearch) return '';
      const critical = sovaData().preds.filter(p => p.status === 'critical');
      if (!critical.length) return '';
      return `
      <div class="section-hd"><div class="section-lbl" style="display:flex;align-items:center;gap:6px"><span style="color:#8A6729">${IC.sova}</span>SOVA IA</div></div>
      ${critical.slice(0, 3).map((p, i) => `
      <div class="pred-card critical" style="animation-delay:${i * 0.06}s">
        <div class="pred-dot"></div>
        <div class="pred-body">
          <div class="pred-name">${p.article_name}</div>
          <div class="pred-msg">${p.message || (p.action ? p.action.verb : '')}</div>
        </div>
      </div>`).join('')}`;
    })()}

    ${(() => {
      if (_showSearch) return '';
      const reorder = S.articles.filter(a => a.min > 0 && a.stock < a.min).map(a => {
        const toOrder = Math.ceil(a.min * 2 - a.stock);
        const avgDaily = a.lead > 0 ? Math.max(1, a.min / a.lead) : 1;
        const daysLeft = Math.max(0, Math.floor(a.stock / avgDaily));
        return { ...a, toOrder, daysLeft };
      }).sort((a,b) => a.daysLeft - b.daysLeft);
      if (reorder.length === 0) return '';
      return `
      <div class="section-hd"><div class="section-lbl">${t('reorderSuggestions')}</div></div>
      ${reorder.slice(0,4).map((a, i) => `
      <div class="card anim" style="margin-bottom:6px;border-left:3px solid ${a.daysLeft<=2?'var(--danger)':a.daysLeft<=5?'var(--warning)':'var(--accent)'};animation-delay:${i*0.04}s">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:14px;font-weight:700;color:var(--text-1)">${a.name}</div>
            <div style="font-size:11px;color:var(--text-3)">${a.stock} ${a.unit} — ${a.daysLeft} ${t('daysRemaining')}</div>
          </div>
          <button class="btn btn-primary" style="padding:6px 12px;font-size:11px" onclick="nav('add-order')">
            ${IC.plus} ${a.toOrder} ${a.unit}
          </button>
        </div>
      </div>`).join('')}`;
    })()}

    ${_showSearch ? 'w' : `<div class="section-hd"><div class="section-lbl">${t('overview')}</div></div>
    <div class="metric-grid">
      <div class="metric-card anim" style="animation-delay:0s">
        <div class="metric-val">${fmt(totalCA)}</div>
        <div class="metric-lbl">${t('caTotal')}</div>
      </div>
      <div class="metric-card anim" style="animation-delay:0.04s">
        <div class="metric-val" style="color:var(--success)">${fmt(totalProfit)}</div>
        <div class="metric-lbl">${t('profit')}</div>
      </div>
      <div class="metric-card anim" style="animation-delay:0.08s">
        <div class="metric-val" style="color:${avgMargin>=20?'var(--success)':avgMargin>=0?'var(--warning)':'var(--danger)'}">${avgMargin}%</div>
        <div class="metric-lbl">${t('avgMargin')}</div>
      </div>
    </div>
    <div class="metric-grid">
      <div class="metric-card anim" style="animation-delay:0.12s">
        <div class="metric-val">${fmt(stockVal)}</div>
        <div class="metric-lbl">${t('stockVal')}</div>
      </div>
      <div class="metric-card anim" style="animation-delay:0.16s">
        <div class="metric-val">${S.products.length}</div>
        <div class="metric-lbl">${t('products')}</div>
      </div>
      <div class="metric-card anim" style="animation-delay:0.20s">
        <div class="metric-val">${S.sales.length}</div>
        <div class="metric-lbl">${t('salesCount')}</div>
      </div>
    </div>`}

    ${!_showSearch && S.sales.length > 0 ? `
    <div class="section-hd"><div class="section-lbl">${t('trend7d')}</div></div>
    <div class="card anim" style="animation-delay:0.1s">
      <div style="display:flex;align-items:flex-end;gap:4px;height:80px;padding:4px 0">
        ${weekDays.map(d => `
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px">
          <div style="width:100%;background:${d.ca>0?'var(--accent)':'var(--gray-2)'};border-radius:4px 4px 0 0;min-height:4px;height:${Math.max(4, (d.ca/maxDay)*60)}px;transition:height .3s"></div>
          <div style="font-size:10px;color:var(--text-3);white-space:nowrap">${d.label}</div>
        </div>`).join('')}
      </div>
      <div style="text-align:center;font-size:11px;color:var(--text-3);margin-top:6px">
        ${t('weekTotal')} : <strong style="color:var(--text-1)">${fmt(weekDays.reduce((s,d)=>s+d.ca,0))} ${sym()}</strong>
      </div>
    </div>` : ''}

    ${!_showSearch && topProducts.length > 0 ? `
    <div class="section-hd">
      <div class="section-lbl">${t('topProducts')}</div>
      <button class="section-act" onclick="nav('financial')">${t('details')}</button>
    </div>
    <div class="card anim" style="animation-delay:0.15s">
      ${topProducts.map(([name, d], i) => `
      <div style="display:flex;align-items:center;gap:10px;${i>0?'margin-top:12px;padding-top:12px;border-top:1px solid var(--border)':''}">
        <div style="width:28px;height:28px;border-radius:8px;background:${i===0?'var(--accent)':i===1?'var(--gray-6)':'var(--gray-4)'};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:var(--white);flex-shrink:0">${i+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;color:var(--text-1)">${name}</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:4px">
            <div style="flex:1;height:6px;background:var(--gray-2);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${Math.round((d.rev/maxRev)*100)}%;background:${i===0?'var(--accent)':i===1?'var(--gray-6)':'var(--gray-4)'};border-radius:3px;transition:width .4s"></div>
            </div>
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:13px;font-weight:700;color:var(--text-1)">${fmt(d.rev)} ${sym()}</div>
          ${d.profit > 0 ? `<div style="font-size:11px;color:var(--success)">+${fmt(d.profit)} ${t('profitShort')}</div>` : ''}
        </div>
      </div>`).join('')}
    </div>` : ''}

    ${!_showSearch && bestMargin.length > 0 ? `
    <div class="section-hd"><div class="section-lbl">${t('bestMargins')}</div></div>
    <div class="card anim" style="animation-delay:0.2s">
      ${bestMargin.map((p, i) => `
      <div style="display:flex;align-items:center;gap:10px;${i>0?'margin-top:10px;padding-top:10px;border-top:1px solid var(--border)':''}">
        <div style="width:40px;height:40px;border-radius:50%;background:${p.margin>=30?'rgba(5,150,105,.12)':p.margin>=15?'rgba(217,119,6,.12)':'rgba(220,38,38,.12)'};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:${p.margin>=30?'var(--success)':p.margin>=15?'var(--warning)':'var(--danger)'};flex-shrink:0">${p.margin}%</div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600;color:var(--text-1)">${p.name}</div>
          <div style="font-size:11px;color:var(--text-3)">${fmt(p.price)} · ${t('profitShort')} ${fmt(p.profit)} ${sym()}/u</div>
        </div>
      </div>`).join('')}
    </div>` : ''}

    ${(() => {
      if (_showSearch) return '';
      const cs = {};
      S.sales.forEach(s => { if (!s.clientId) return; if (!cs[s.clientId]) cs[s.clientId] = { name: s.clientName, total: 0, count: 0 }; cs[s.clientId].total += s.total; cs[s.clientId].count += s.qty; });
      const topC = Object.entries(cs).sort((a,b) => b[1].total - a[1].total).slice(0,3);
      const maxC = topC.length > 0 ? topC[0][1].total : 1;
      if (topC.length === 0) return '';
      return `
    <div class="section-hd">
      <div class="section-lbl">${t('topClients')}</div>
      <button class="section-act" onclick="nav('clients')">${t('viewAll')}</button>
    </div>
    <div class="card anim" style="animation-delay:0.25s">
      ${topC.map(([id, d], i) => `
      <div style="display:flex;align-items:center;gap:10px;cursor:pointer;${i>0?'margin-top:12px;padding-top:12px;border-top:1px solid var(--border)':''}" onclick="nav('client-detail',{selectedClientId:${id}})">
        <div style="width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,var(--accent),#6366f1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff;flex-shrink:0">${initials(d.name)}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;color:var(--text-1)">${d.name}</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:4px">
            <div style="flex:1;height:5px;background:var(--gray-2);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${Math.round((d.total/maxC)*100)}%;background:var(--accent);border-radius:3px"></div>
            </div>
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:13px;font-weight:700;color:var(--text-1)">${fmt(d.total)} ${sym()}</div>
          <div style="font-size:11px;color:var(--text-3)">${d.count} ${t('purchases').toLowerCase()}</div>
        </div>
      </div>`).join('')}
    </div>`;
    })()}

    ${!_showSearch ? `<div class="section-hd"><div class="section-lbl">${t('nav')}</div></div>
    <div class="quick-grid">
      <button class="quick-btn" onclick="nav('boutique')">
        <span class="quick-ico">${IC.shop}</span>
        <div class="quick-label">${t('boutique')||'Boutique'}</div>
        <div class="quick-sub">Vendre en ligne</div>
      </button>
      <button class="quick-btn" onclick="nav('marketing')">
        <span class="quick-ico">${IC.megaphone}</span>
        <div class="quick-label">${t('marketing')||'Marketing'}</div>
        <div class="quick-sub">Promos & campagnes</div>
      </button>
      <button class="quick-btn" onclick="nav('clients')">
        <span class="quick-ico">${IC.users}</span>
        <div class="quick-label">${t('clients')}</div>
        <div class="quick-sub">${S.clients.length} clients</div>
      </button>
      <button class="quick-btn" onclick="nav('more')">
        <span class="quick-ico">${IC.grid}</span>
        <div class="quick-label">${t('more')||'Plus'}</div>
        <div class="quick-sub">${(S.integrationsConfig||[]).filter(i=>i.connected).length} connecte(s)</div>
      </button>
    </div>

    ${S.products.length > 0 ? `
    <div class="section-hd"><div class="section-lbl">${t('quickSale')}</div></div>
    <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px">
      ${S.products.slice(0,6).map(p => `
      <button class="quick-sale-chip" onclick="quickSaleProduct(${p.id})">
        <span style="font-weight:700;font-size:12px">${p.name}</span>
        <span style="font-size:11px;color:var(--accent)">${fmt(p.price)} ${S.session?.currency_symbol||'FCFA'}</span>
      </button>`).join('')}
    </div>` : ''}

    ${S.activities.length > 0 ? `
    <div class="section-hd"><div class="section-lbl">${t('activityFeed')}</div></div>
    <div class="card anim activity-feed" style="animation-delay:0.22s">
      ${S.activities.slice(0,6).map((a, i) => {
        const ico = a.type === 'sale' ? IC.dollar : a.type === 'stock' ? IC.box : a.type === 'new_article' ? IC.plus : a.type === 'plan' ? IC.logo : IC.info;
        const color = a.type === 'sale' ? 'var(--success)' : a.type === 'stock' ? 'var(--accent)' : a.type === 'new_article' ? 'var(--warning)' : 'var(--text-3)';
        return `<div class="activity-item ${i > 0 ? 'bordered' : ''}" style="animation-delay:${i*0.04}s">
          <div class="activity-ico" style="color:${color};background:${color}12">${ico}</div>
          <div class="activity-body">
            <div class="activity-text">${a.detail}</div>
            <div class="activity-time">${fmtTimeAgo(a.date)}</div>
          </div>
        </div>`;
      }).join('')}
    </div>` : ''}

    <div class="section-hd">
      <div class="section-lbl">${t('recentSales')}</div>
      <button class="section-act" onclick="nav('sales')">${t('viewAll')}</button>
    </div>
    ${S.sales.length === 0 ? `
    <div class="card" style="text-align:center;padding:18px;color:var(--text-3);font-size:13px">${t('noSalesYet')}</div>
    ` : S.sales.slice(0,4).map((s,i) => `
    <div class="card anim" style="animation-delay:${i*0.04}s">
      <div class="sale-item" style="padding:0">
        <div class="sale-dot"></div>
        <div class="sale-info">
          <div class="sale-prod">${s.productName}</div>
          <div class="sale-date">${fmtDate(s.date)}</div>
        </div>
        <div class="sale-right">
          <div class="sale-total">${fmt(s.total)} ${sym()}</div>
          <div class="sale-qty">×${s.qty}${s.profit ? ` · <span style="color:var(--success)">+${fmt(s.profit)}</span>` : ''}</div>
        </div>
      </div>
    </div>`).join('')}` : ''}
  </div>`;
}

// ── PANTRY ────────────────────────────────────
function vPantry() {
  const q = S.search.toLowerCase();
  // Filter by location first
  let baseList = S.currentLocation ? S.articles.filter(a => !a.locationId || a.locationId === S.currentLocation) : S.articles;
  let list = baseList.filter(a => a.name.toLowerCase().includes(q));
  if (S.filter==='out') list = list.filter(a => a.stock===0);
  else if (S.filter==='low') list = list.filter(a => a.stock>0 && a.stock<a.min && a.min>0);
  else if (S.filter==='ok')  list = list.filter(a => a.stock>=a.min || a.min===0);

  return `
  <div class="page-header">
    <div class="page-header-row">
      <button class="back-btn" onclick="nav('home')">${IC.left}</button>
      <div class="page-title">${t('stock')}</div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="fab fab-outline" onclick="nav('spectra')" title="Spectra" style="color:#7c3aed;border-color:#c4b5fd;background:rgba(124,58,237,0.08)">${IC.spectraEye}</button>
        <button class="fab" onclick="nav('add')">${IC.plus}</button>
      </div>
    </div>
    <div class="search-wrap">
      <span class="search-ico">${IC.search}</span>
      <input class="input input-search" type="text" placeholder="    ${t('search')}" value="${S.search.replace(/"/g,'&quot;')}" oninput="S.search=this.value;render()">
    </div>
    <div class="filter-row">
      <button class="filter-chip ${S.filter==='all'?'active':''}" onclick="S.filter='all';render()">${t('all')} (${baseList.length})</button>
      <button class="filter-chip ${S.filter==='out'?'active':''}" onclick="S.filter='out';render()">${t('outOfStock')}</button>
      <button class="filter-chip ${S.filter==='low'?'active':''}" onclick="S.filter='low';render()">${t('low')}</button>
      <button class="filter-chip ${S.filter==='ok'?'active':''}"  onclick="S.filter='ok';render()">${t('ok')}</button>
    </div>
    ${S.locations.length > 0 ? `
    <div class="filter-row" style="margin-top:-4px">
      <button class="filter-chip ${!S.currentLocation?'active':''}" onclick="setLocation(null)" style="font-size:10px;padding:4px 10px">${IC.home} Tous</button>
      ${S.locations.map(l => `<button class="filter-chip ${String(S.currentLocation)===String(l.id)?'active':''}" onclick="setLocation(${l.id})" style="font-size:10px;padding:4px 10px">${l.name}</button>`).join('')}
    </div>` : ''}
  </div>
  <div class="container">
    ${list.length===0 ? `
    <div class="empty">
      <div class="empty-ico">${IC.inbox}</div>
      <div class="empty-title">${S.articles.length===0 ? t('noArticles') : t('noResults')}</div>
      <div class="empty-text">${S.articles.length===0 ? t('noArticlesSub') : t('noResultsSub')}</div>
      ${S.articles.length===0 ? `<button class="btn btn-primary" style="width:auto;padding:11px 24px" onclick="nav('add')">${t('addArticle')}</button>` : ''}
    </div>` : list.map((a,i) => {
      const st  = stockStatus(a.stock, a.min);
      const pct = a.min > 0 ? Math.min(100, Math.round((a.stock / Math.max(a.min*2,1))*100)) : 100;
      return `
      <div class="card card-tap anim" style="animation-delay:${i*0.04}s" onclick="nav('detail',{selectedId:${a.id}})">
        <div class="article-row">
          <div class="article-avatar">${initials(a.name)}</div>
          <div class="article-info">
            <div class="article-name">${a.name}</div>
            <div class="article-meta">${fmtQty(a.stock)} ${a.unit}${a.min>0 ? ` · seuil ${fmtQty(a.min)}` : ''}</div>
            <div class="progress"><div class="progress-bar ${st.bar}" style="width:${pct}%"></div></div>
          </div>
          <div class="article-right">
            <span class="status ${st.cls}">${st.icon} ${st.label}</span>
            ${(() => { const exp = getExpiryStatus(a.expiry); return exp && exp.days <= 30 ? `<span class="expiry-badge-sm" style="color:${exp.color}">${exp.label}</span>` : ''; })()}
            <div style="color:var(--gray-4)">${IC.chevron}</div>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ── PRODUCTS ──────────────────────────────────
function vProducts() {
  return `
  <div class="page-header">
    <div class="page-header-row">
      <button class="back-btn" onclick="nav('home')">${IC.left}</button>
      <div class="page-title">${t('finishedProducts')}</div>
      <button class="fab" onclick="nav('add-product')">${IC.plus}</button>
    </div>
  </div>
  <div class="container">
    ${S.products.length===0 ? `
    <div class="empty">
      <div class="empty-ico">${IC.tagLg}</div>
      <div class="empty-title">${t('noProducts')}</div>
      <div class="empty-text">${t('noProductsSub')}</div>
      <button class="btn btn-primary" style="width:auto;padding:11px 24px" onclick="nav('add-product')">${t('createProduct')}</button>
    </div>` : S.products.map((p,i) => {
      const avail   = productMaxMake(p);
      const canMake = avail > 0;
      const recipeNames = p.composition.map(c => {
        const a = S.articles.find(a => a.id === c.id);
        return a ? `${fmtRecipeQty(c.qty, a.unit)} ${a.name}` : null;
      }).filter(Boolean).join(' · ');
      return `
      <div class="card anim" style="animation-delay:${i*0.05}s">
        <div class="article-row">
          <div class="article-avatar">${initials(p.name)}</div>
          <div class="article-info">
            <div class="article-name">${p.name}</div>
            <div class="article-meta" style="font-weight:700;color:var(--text-2)">${fmt(p.price)} ${sym()}${p.purchasePrice > 0 ? ` <span style="font-size:11px;font-weight:600;color:${marginPct(p)>=20?'var(--success)':marginPct(p)>=0?'var(--warning)':'var(--danger)'};margin-left:6px">${marginPct(p)}% ${t('margin')}</span>` : ''}</div>
            ${p.purchasePrice > 0 ? `<div class="article-meta" style="margin-top:1px;font-size:11px;color:var(--text-3)">${t('costLabel')}: ${fmt(p.purchasePrice)} · ${t('profitUnit')}: ${fmt(profitUnit(p))} ${sym()}/u</div>` : ''}
            ${recipeNames ? `<div class="article-meta" style="margin-top:2px;color:var(--text-3)">${recipeNames}</div>` : ''}
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
            <span class="status ${canMake?'st-ok':'st-out'}">${canMake?IC.check:IC.xmark} ${canMake?avail+' '+t('available'):t('unavailable')}</span>
            <div style="display:flex;gap:6px">
              <button onclick="nav('edit-product',{editProductId:${p.id}})" style="background:none;border:1px solid var(--gray-3);border-radius:6px;padding:4px 8px;cursor:pointer;color:var(--text-2)">${IC.settings}</button>
              <button onclick="deleteProduct(${p.id})" style="background:none;border:1px solid var(--gray-3);border-radius:6px;padding:4px 8px;cursor:pointer;color:var(--text-2)">${IC.trash}</button>
            </div>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ── SALES ─────────────────────────────────────
function vSales() {
  const today   = new Date().toDateString();
  const todayCA = S.sales.filter(s=>new Date(s.date).toDateString()===today).reduce((s,v)=>s+v.total,0);
  const avail   = S.products.filter(p=>productMaxMake(p)>0);

  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('home')">${IC.left}</button>
    <div class="sub-hero-title">${t('sales')}</div>
    <div class="sub-hero-big">${fmt(todayCA)} <span style="font-size:16px;color:var(--gray-5)">${sym()}</span></div>
    <div class="sub-hero-sub">${t('today')} · ${S.sales.filter(s=>new Date(s.date).toDateString()===new Date().toDateString()).length} ${t('saleOf')}</div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:14px">
      <div class="card-title">${t('newSale')}</div>
      <div class="form-group">
        <label class="form-label">${t('product')}</label>
        <select class="input" id="sale-product">
          <option value="">${t('select')}</option>
          ${avail.map(p=>{const pr=_getActivePromo(p.id);return `<option value="${p.id}">${p.name} — ${pr?fmt(Math.round(p.price*(100-pr.discount)/100))+' (-'+pr.discount+'%)':fmt(p.price)} ${sym()} (${productMaxMake(p)} fab.)${pr?' PROMO':''}</option>`;}).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">${t('quantity')}</label>
        <input type="number" class="input" id="sale-qty" value="1" min="1">
      </div>
      ${S.clients.length > 0 ? `
      <div class="form-group">
        <label class="form-label">${t('clients')}</label>
        <select class="input" id="sale-client">
          <option value="">${t('selectClient')}</option>
          ${S.clients.map(c=>`<option value="${c.id}">${c.name}${c.phone?' · '+c.phone:''}</option>`).join('')}
        </select>
      </div>` : ''}
      <div class="form-group">
        <label class="form-label">Mode de paiement</label>
        <select class="input" id="sale-payment">
          <option value="cash">Especes</option>
          ${(S.paymentMethods||[]).filter(m=>m.active).map(m=>`<option value="${m.provider}">${m.name}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" style="flex:1" onclick="addToCart();S.cartOpen=true;render()">${t('confirm')}</button>
        <button class="btn btn-ghost" onclick="toggleCart()" style="flex:1">
          ${S.cartOpen ? t('closeCart') : t('cartQuestion')}${S.cart.length>0?` (${S.cart.length})`:''}
        </button>
      </div>
    </div>
    ${S.cartOpen ? `
    <div class="card" style="margin-bottom:14px;border:2px solid var(--black)">
      <div class="card-title">${t('cart')} (${S.cart.length})</div>
      ${S.cart.length===0 ? `<div style="font-size:13px;color:var(--text-3);padding:8px 0">${t('emptyCart')}</div>` :
        S.cart.map((c,i) => `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-name">${c.productName}</div>
            <div class="cart-item-sub">×${c.qty} · ${fmt(c.unitPrice * c.qty)} ${sym()}</div>
          </div>
          <button class="cart-remove" onclick="removeFromCart(${i})">${IC.xmark}</button>
        </div>`).join('')}
      ${S.cart.length>0 ? `
      <div class="cart-total">${t('total')} : <strong>${fmt(S.cart.reduce((s,c)=>s+c.unitPrice*c.qty,0))} ${sym()}</strong></div>
      <button class="btn btn-primary" style="margin-top:10px" onclick="confirmCart()">${t('validateSale')}</button>` : ''}
    </div>` : ''}
    <div class="section-hd">
      <div class="section-lbl">${t('history')}</div>
      <div style="font-size:12px;color:var(--text-3)">${S.sales.length} ${t('saleOf')}</div>
    </div>
    ${S.clients.length > 0 ? `
    <div class="filter-row" style="margin-bottom:10px">
      <button class="filter-chip ${!S.saleClientFilter?'active':''}" onclick="S.saleClientFilter=null;render()">${t('all')}</button>
      ${S.clients.filter(c => S.sales.some(s => s.clientId && String(s.clientId) === String(c.id))).map(c => `
      <button class="filter-chip ${S.saleClientFilter===c.id?'active':''}" onclick="S.saleClientFilter=${c.id};render()">${c.name}</button>`).join('')}
    </div>` : ''}
    ${(() => {
      const filtered = S.saleClientFilter ? S.sales.filter(s => s.clientId && String(s.clientId) === String(S.saleClientFilter)) : S.sales;
      if (filtered.length === 0) return `
    <div class="empty">
      <div class="empty-ico">${IC.dollarLg}</div>
      <div class="empty-title">${t('noSales')}</div>
      <div class="empty-text">${t('noSalesSub')}</div>
    </div>`;
      return filtered.map(s=>{
      const sid = 'sale_' + s.id;
      window[sid] = s;
      return `
    <div class="sale-item">
      <div class="sale-dot" style="${s.paymentMethod&&s.paymentMethod!=='cash'?'background:'+(s.paymentMethod==='wave'?'#1DC3FF':s.paymentMethod==='orange'?'#FF6600':s.paymentMethod==='moov'?'#00A651':s.paymentMethod==='mtn'?'#FFCC00':'var(--accent)'):''}"></div>
      <div class="sale-info">
        <div class="sale-prod">${s.productName}${s.paymentMethod&&s.paymentMethod!=='cash'?` <span style="font-size:10px;padding:1px 6px;border-radius:4px;background:${s.paymentMethod==='wave'?'#1DC3FF':s.paymentMethod==='orange'?'#FF6600':s.paymentMethod==='moov'?'#00A651':s.paymentMethod==='mtn'?'#FFCC00':'#ccc'}20;color:${s.paymentMethod==='wave'?'#1DC3FF':s.paymentMethod==='orange'?'#FF6600':s.paymentMethod==='moov'?'#00A651':s.paymentMethod==='mtn'?'#b39700':'var(--text-2)'};font-weight:600">${s.paymentMethod==='wave'?'Wave':s.paymentMethod==='orange'?'OM':s.paymentMethod==='moov'?'Moov':s.paymentMethod==='mtn'?'MTN':s.paymentMethod}</span>`:''}</div>
        <div class="sale-date">${fmtDate(s.date)}${s.clientName ? ` · <span style="color:var(--accent)">${s.clientName}</span>` : ''}</div>
      </div>
      <div class="sale-right">
        <div class="sale-total">${fmt(s.total)} ${S.session?.currency_symbol||'FCFA'}</div>
        <div class="sale-qty">x${s.qty}${s.profit ? ` · <span style="color:var(--success)">+${fmt(s.profit)}</span>` : ''}</div>
      </div>
      <div class="sale-actions">
        <button class="sale-act-btn" title="Facture PDF" onclick="generateInvoicePDF(window['${sid}'])">${IC.pdf}</button>
        <button class="sale-act-btn sale-act-wa" title="WhatsApp" onclick="shareViaWhatsApp(window['${sid}'])">${IC.whatsapp}</button>
      </div>
    </div>`;}).join('');
    })()}
  </div>`;
}

// ── FINANCIAL ─────────────────────────────────
function vFinancial() {
  const filtered = salesForPeriod();
  const totalCA  = filtered.reduce((s,v)=>s+v.total,0);
  const totalProfit = filtered.reduce((s,v)=>s+(v.profit||0),0);
  const avgMargin = totalCA > 0 ? Math.round((totalProfit / totalCA) * 100) : 0;
  const avg      = filtered.length ? Math.round(totalCA/filtered.length) : 0;
  const stockVal = S.articles.reduce((s,a)=>s+a.stock*(a.price||0),0);

  const stats = {};
  filtered.forEach(s => {
    if (!stats[s.productName]) stats[s.productName]={qty:0,rev:0,profit:0};
    stats[s.productName].qty += s.qty;
    stats[s.productName].rev += s.total;
    stats[s.productName].profit += (s.profit||0);
  });
  const top    = Object.entries(stats).sort((a,b)=>b[1].rev-a[1].rev).slice(0,5);
  const recos  = S.articles
    .filter(a => a.stock < a.min && a.min > 0)
    .map(a => {
      const toOrder  = Math.ceil(a.min - a.stock);
      const daysLeft = a.lead > 0 ? Math.floor(a.stock / Math.max(1, a.min / Math.max(a.lead,1))) : '?';
      return { ...a, toOrder, daysLeft };
    });

  const periods = [
    { key:'today', label: t('today') },
    { key:'7d',    label: _lang==='fr'?"7 j":"7 d" },
    { key:'30d',   label: _lang==='fr'?"30 j":"30 d" },
    { key:'all',   label: t('all') },
  ];

  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('home')">${IC.left}</button>
    <div class="sub-hero-title">${t('financialTitle')}</div>
    <div class="sub-hero-big">${fmt(totalCA)} <span style="font-size:16px;color:var(--accent-muted)">${sym()}</span></div>
    <div class="sub-hero-sub">${filtered.length} ${t('saleOf')} · ${t('period')}</div>
  </div>
  <div class="container">
    <div class="period-tabs">
      ${periods.map(p=>`<button class="period-tab ${S.period===p.key?'active':''}" onclick="S.period='${p.key}';render()">${p.label}</button>`).join('')}
    </div>
    <div class="chart-card">
      <div class="chart-title">${t('revenueChart')}</div>
      <div class="chart-wrap"><canvas id="revenue-chart"></canvas></div>
    </div>
    <div class="chart-card">
      <div class="chart-title">${t('profitChart')}</div>
      <div class="chart-wrap"><canvas id="profit-chart"></canvas></div>
    </div>
    <div class="metric-grid">
      <div class="metric-card"><div class="metric-val">${fmt(totalCA)}</div><div class="metric-lbl">${t('caTotal')}</div></div>
      <div class="metric-card"><div class="metric-val" style="color:var(--success)">${fmt(totalProfit)}</div><div class="metric-lbl">${t('profit')}</div></div>
      <div class="metric-card"><div class="metric-val" style="color:${avgMargin>=20?'var(--success)':avgMargin>=0?'var(--warning)':'var(--danger)'}">${avgMargin}%</div><div class="metric-lbl">${t('avgMargin')}</div></div>
    </div>

    ${(() => {
      // Advanced KPIs
      const dayMs = 86400000;
      const salesDates = filtered.map(s => new Date(s.date).toDateString());
      const uniqueDays = [...new Set(salesDates)];
      const avgDailySales = uniqueDays.length > 0 ? Math.round(totalCA / uniqueDays.length) : 0;
      const dailyTotals = {};
      filtered.forEach(s => {
        const ds = new Date(s.date).toDateString();
        dailyTotals[ds] = (dailyTotals[ds] || 0) + s.total;
      });
      const dailyArr = Object.entries(dailyTotals);
      const bestDay = dailyArr.length ? dailyArr.sort((a,b) => b[1] - a[1])[0] : null;
      const turnover = stockVal > 0 ? (totalCA / stockVal).toFixed(1) : '—';
      // Growth rate: compare last 7 days vs previous 7 days
      const now = Date.now();
      const last7 = S.sales.filter(s => now - new Date(s.date).getTime() < 7 * dayMs).reduce((s,v) => s + v.total, 0);
      const prev7 = S.sales.filter(s => { const d = now - new Date(s.date).getTime(); return d >= 7 * dayMs && d < 14 * dayMs; }).reduce((s,v) => s + v.total, 0);
      const growth = prev7 > 0 ? Math.round(((last7 - prev7) / prev7) * 100) : (last7 > 0 ? 100 : 0);
      return `
    <div class="section-hd" style="margin-top:8px"><div class="section-lbl">${_lang==='fr'?'Indicateurs avancés':'Advanced Metrics'}</div></div>
    <div class="metric-grid">
      <div class="metric-card"><div class="metric-val">${fmt(avgDailySales)}</div><div class="metric-lbl">${t('avgDailySales')}</div></div>
      <div class="metric-card"><div class="metric-val">${turnover}x</div><div class="metric-lbl">${t('stockTurnover')}</div></div>
      <div class="metric-card"><div class="metric-val" style="color:${growth>=0?'var(--success)':'var(--danger)'}">${growth>=0?'+':''}${growth}%</div><div class="metric-lbl">${t('growthRate')}</div></div>
    </div>
    <div class="metric-grid">
      <div class="metric-card"><div class="metric-val">${fmt(avg)}</div><div class="metric-lbl">${t('avgTicket')}</div></div>
      <div class="metric-card"><div class="metric-val">${fmt(stockVal)}</div><div class="metric-lbl">${t('stockVal')}</div></div>
      ${bestDay ? `<div class="metric-card"><div class="metric-val" style="font-size:13px">${new Date(bestDay[0]).toLocaleDateString(_lang==='en'?'en-US':'fr-FR',{day:'numeric',month:'short'})}</div><div class="metric-lbl">${t('bestDay')} (${fmt(bestDay[1])})</div></div>` : `<div class="metric-card"><div class="metric-val">—</div><div class="metric-lbl">${t('bestDay')}</div></div>`}
    </div>`;
    })()}
    <div class="metric-grid">
      <div class="metric-card"><div class="metric-val">${filtered.length}</div><div class="metric-lbl">${t('salesCount')}</div></div>
      <div class="metric-card"><div class="metric-val">${fmt(avg)}</div><div class="metric-lbl">${t('avgTicket')}</div></div>
      <div class="metric-card"><div class="metric-val">${fmt(stockVal)}</div><div class="metric-lbl">${t('stockVal')}</div></div>
    </div>
    <button class="sova-fin-banner" onclick="nav('sova')">
      <div class="sova-fin-left">
        <div style="width:40px;height:40px;border-radius:12px;background:rgba(138,103,41,0.12);display:flex;align-items:center;justify-content:center;color:#8A6729;flex-shrink:0">${IC.sova}</div>
        <div>
          <div style="font-family:Georgia,serif;font-size:16px;font-weight:700;color:#8A6729;letter-spacing:2px">SOVA</div>
          <div style="font-size:12px;color:#a08040;margin-top:1px">Voir les prévisions et alertes stock</div>
        </div>
      </div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A6729" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
    <div class="card">
      <div class="card-title">${t('topProducts')}</div>
      ${top.length===0
        ? `<div style="font-size:13px;color:var(--text-3)">${t('noSalesPeriod')}</div>`
        : top.map(([name,d],i)=>`
          <div class="rank-item">
            <div class="rank-num ${i===0?'r1':''}">${i+1}</div>
            <div class="rank-name">${name}${d.profit>0?`<div style="font-size:11px;color:var(--success);font-weight:400">+${fmt(d.profit)} ${t('profitShort')}</div>`:''}</div>
            <div class="rank-rev">${fmt(d.rev)} ${sym()}</div>
          </div>`).join('')}
    </div>
    ${sovaData().preds.length > 0 ? `
    <div class="section-hd" style="margin-top:8px">
      <div class="section-lbl">${t('aiPredictions')}</div>
      <div style="font-size:11px;color:var(--text-3)">WMA · EOQ · Safety Stock</div>
    </div>
    ${sovaData().preds.filter(p => p.status !== 'no_data').map((p, i) => `
    <div class="pred-card ${p.status}" style="animation-delay:${i * 0.06}s">
      <div class="pred-dot"></div>
      <div class="pred-body">
        <div class="pred-name">${p.article_name}</div>
        <div class="pred-msg">${p.message || (p.action ? p.action.verb : '')}</div>
        ${p.status !== 'no_data' && p.daily_demand > 0 ? `
        <div class="pred-stats">
          <div class="pred-stat">Stock <strong>${p.current_stock} ${p.unit}</strong></div>
          ${p.days_remaining !== null ? `<div class="pred-stat">${_lang==='fr'?'Jours restants':'Days left'} <strong>${p.days_remaining}${_lang==='fr'?'j':'d'}</strong></div>` : ''}
          <div class="pred-stat">Safety Stock <strong>${p.safety_stock} ${p.unit}</strong></div>
        </div>` : ''}
      </div>
    </div>`).join('')}` : ''}
  </div>`;
}

// ── SOVA phrases ─────────────────────────────
const SOVA_INTROS = {
  excellent: [
    name => `Tout se porte à merveille, ${name} !`,
    name => `${name}, ton stock respire. 🌿`,
    name => `Beau travail, ${name} — rien à signaler.`,
    name => `Tout roule. SOVA veille, mais elle n'a rien à dire ce soir.`,
    name => `${name}, tes étagères sont heureuses.`,
  ],
  good: [
    name => `${name}, ça tient bien. Quelques détails à surveiller.`,
    name => `Bonne santé globale, ${name}. SOVA a l'œil sur quelques points.`,
    name => `Presque parfait, ${name} — juste quelques nuages à l'horizon.`,
    name => `${name}, tes stocks sont stables. Une ou deux choses à anticiper.`,
    name => `Tout va bien, ${name}. SOVA reste aux aguets.`,
  ],
  warning_one: [
    name => `${name}, un article mérite ton attention.`,
    name => `Attention, ${name} — SOVA a repéré quelque chose.`,
    name => `${name}, un signal faible à ne pas ignorer.`,
    name => `Presque tout va bien, ${name}. Mais il y a un "mais".`,
    name => `${name}, un article te glisse entre les doigts.`,
  ],
  warning_multi: [
    name => `${name}, quelques articles réclament ta vigilance.`,
    name => `SOVA a des choses à te dire, ${name}.`,
    name => `${name}, le tableau est bon — mais pas tout à fait.`,
    name => `Quelques signaux, ${name}. Rien d'urgent, mais ça approche.`,
    name => `${name}, SOVA a repéré plusieurs points à surveiller.`,
  ],
  critical_one: [
    name => `${name}, agis vite — une rupture approche.`,
    name => `SOVA sonne l'alarme, ${name}. Un article est critique.`,
    name => `${name}, il faut commander. Maintenant.`,
    name => `Un article risque de te faire faux bond, ${name}.`,
    name => `${name}, SOVA a vu ce que tu n'as pas encore vu.`,
  ],
  critical_multi: [
    name => `${name}, plusieurs ruptures sont imminentes.`,
    name => `Alerte rouge, ${name}. SOVA a besoin que tu agisses.`,
    name => `${name}, le stock souffre. SOVA est là — agissons.`,
    name => `Plusieurs articles critiques, ${name}. La situation est sérieuse.`,
    name => `${name}, SOVA a les yeux grands ouverts. Et ce qu'elle voit est urgent.`,
  ],
  neutral: [
    name => `${name}, SOVA analyse tes données.`,
    name => `Bonjour ${name} — SOVA commence à apprendre tes habitudes.`,
    name => `${name}, enregistre quelques ventes pour que SOVA s'affûte.`,
    name => `Pas encore assez de données, ${name}. SOVA observe.`,
    name => `${name}, SOVA prend ses marques dans ton commerce.`,
  ],
};

function sovaIntro(key, name) {
  const arr = SOVA_INTROS[key] || SOVA_INTROS.neutral;
  // Déterministe basé sur la date (change chaque jour)
  const idx = new Date().getDate() % arr.length;
  return arr[idx](name || 'toi');
}

// ── SOVA helpers graphes ──────────────────────
function sovaChartCoverage(preds) {
  const items = preds.filter(p => p.daily_demand > 0.01 && p.days_remaining !== null)
    .sort((a, b) => (a.days_remaining || 99) - (b.days_remaining || 99)).slice(0, 12);
  if (!items.length) return '';
  const maxDays = 30;
  return `
  <div class="sova-chart-card">
    <div class="sova-chart-title">Couverture de stock · jours restants</div>
    <div class="sova-legend">
      <span class="sova-leg-item"><span class="sova-leg-dot" style="background:#fca5a5;border-color:#ef4444"></span><span class="sova-leg-text">Critique &lt; 3j</span></span>
      <span class="sova-leg-item"><span class="sova-leg-dot" style="background:#fde68a;border-color:#f59e0b"></span><span class="sova-leg-text">Attention 3–7j</span></span>
      <span class="sova-leg-item"><span class="sova-leg-dot" style="background:#a7f3d0;border-color:#10b981"></span><span class="sova-leg-text">OK &gt; 7j</span></span>
    </div>
    <div class="sova-coverage-list">
      ${items.map((p, i) => {
        const days = Math.min(p.days_remaining || 0, maxDays);
        const pct  = Math.max(2, (days / maxDays) * 100);
        const fill = days < 3 ? '#fca5a5' : days < 7 ? '#fde68a' : '#a7f3d0';
        const bord = days < 3 ? '#ef4444' : days < 7 ? '#f59e0b' : '#10b981';
        const label= days < maxDays ? (p.days_remaining || 0).toFixed(1) + 'j' : '30j+';
        return `
        <div class="sova-cov-row" style="animation-delay:${i*0.05}s">
          <div class="sova-cov-name">${p.article_name}</div>
          <div class="sova-cov-track">
            <div class="sova-cov-bar" style="width:${pct}%;background:${fill};border-right:2px solid ${bord}"></div>
          </div>
          <div class="sova-cov-days" style="color:${bord}">${label}</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function sovaChartForecast(sel) {
  if (!sel || sel.daily_demand <= 0.01) return '';
  const W = 260, H = 90, DAYS = 14;
  const maxY = Math.max(sel.current_stock * 1.15, sel.reorder_point * 1.5, 0.1);
  const pts = [];
  for (let d = 0; d <= DAYS; d++) {
    const stock = Math.max(0, sel.current_stock - sel.daily_demand * d);
    pts.push(`${(d / DAYS) * W},${H - (stock / maxY) * H}`);
  }
  const polyStr = pts.join(' ');
  const rpY  = H - (sel.reorder_point / maxY) * H;
  const rDay = Math.min(sel.days_remaining || DAYS, DAYS);
  const rX   = (rDay / DAYS) * W;
  const fillPoly = `0,${H} ${polyStr} ${(Math.min(rDay, DAYS) / DAYS * W).toFixed(1)},${H}`;
  return `
  <div class="sova-forecast-wrap">
    <div class="sova-forecast-title">Projection 14 jours</div>
    <svg class="sova-forecast-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" width="100%" height="80">
      <line x1="0" y1="${H*0.5}" x2="${W}" y2="${H*0.5}" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3,3"/>
      ${sel.reorder_point > 0 && rpY > 0 && rpY < H ? `
      <line x1="0" y1="${rpY.toFixed(1)}" x2="${W}" y2="${rpY.toFixed(1)}" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="5,3" opacity="0.9"/>
      <text x="3" y="${Math.max(rpY - 4, 10)}" fill="#f59e0b" font-size="7" font-family="system-ui">seuil</text>` : ''}
      ${rDay < DAYS ? `<line x1="${rX.toFixed(1)}" y1="0" x2="${rX.toFixed(1)}" y2="${H}" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3,2" opacity="0.7"/>` : ''}
      <polygon points="${fillPoly}" fill="rgba(138,103,41,0.09)"/>
      <polyline points="${polyStr}" fill="none" stroke="#8A6729" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="sova-forecast-legend">
      <span class="sova-fl-item" style="color:#8A6729">
        <svg width="14" height="5" style="flex-shrink:0"><line x1="0" y1="2.5" x2="14" y2="2.5" stroke="#8A6729" stroke-width="2"/></svg>Stock projeté
      </span>
      ${sel.reorder_point > 0 ? `<span class="sova-fl-item" style="color:#f59e0b">
        <svg width="14" height="5" style="flex-shrink:0"><line x1="0" y1="2.5" x2="14" y2="2.5" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2"/></svg>Seuil commande
      </span>` : ''}
      ${rDay < DAYS ? `<span class="sova-fl-item" style="color:#ef4444">
        <svg width="14" height="5" style="flex-shrink:0"><line x1="0" y1="2.5" x2="14" y2="2.5" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2"/></svg>Rupture prévue j${rDay.toFixed(0)}
      </span>` : ''}
    </div>
  </div>`;
}

// ── SOVA ─────────────────────────────────────
function vSova() {
  const d = S.predictions;
  // Gestion ancienne structure (array) vs nouvelle (objet)
  const isNew = d && !Array.isArray(d);
  const score       = isNew ? (d.score ?? 50) : 50;
  const introKey    = isNew ? (d.intro_key || 'neutral') : 'neutral';
  const revRisk     = isNew ? (d.revenue_at_risk || 0) : 0;
  const revRiskList = isNew ? (d.revenue_at_risk_articles || []) : [];
  const producible  = isNew ? (d.producible || []) : [];
  const blocked     = isNew ? (d.blocked || []) : [];
  const tomorrow    = isNew ? (d.tomorrow || null) : null;
  const preds       = isNew ? (d.predictions || []) : (Array.isArray(d) ? d : []);

  const name = S.session?.name?.split(' ')[0] || '';
  const introText = sovaIntro(introKey, name);

  // Score color
  const scoreColor = score >= 80 ? '#22c55e' : score >= 60 ? '#f59e0b' : '#ef4444';
  const scoreLabel = score >= 80 ? 'Excellent' : score >= 60 ? 'Attention' : 'Critique';

  // Alertes
  const alertPreds = preds.filter(p => p.status === 'critical' || p.status === 'warning');
  const criticalPreds = preds.filter(p => p.status === 'critical');
  const warningPreds  = preds.filter(p => p.status === 'warning');

  const tabs = [
    { id: 'overview',  label: 'Aperçu'    },
    { id: 'alerts',    label: `Alertes${alertPreds.length > 0 ? ` · ${alertPreds.length}` : ''}`  },
    { id: 'tomorrow',  label: 'Demain'    },
    { id: 'articles',  label: 'Articles'  },
  ];

  // ── Circumference SVG pour score ring
  const R = 40, C = 2 * Math.PI * R;
  const dash = (score / 100) * C;

  function tabOverview() {
    return `
    <!-- SOVA Score -->
    <div class="sova-score-card">
      <div class="sova-score-ring-wrap">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="${R}" fill="none" stroke="#e8e4d9" stroke-width="8"/>
          <circle cx="50" cy="50" r="${R}" fill="none" stroke="${scoreColor}" stroke-width="8"
            stroke-dasharray="${dash.toFixed(1)} ${C.toFixed(1)}"
            stroke-dashoffset="${(C/4).toFixed(1)}"
            stroke-linecap="round"
            style="transition:stroke-dasharray .8s ease"/>
        </svg>
        <div class="sova-score-inner">
          <div class="sova-score-num" style="color:${scoreColor}">${score}</div>
          <div class="sova-score-sub">/100</div>
        </div>
      </div>
      <div class="sova-score-right">
        <div class="sova-score-label" style="color:${scoreColor}">${scoreLabel}</div>
        <div class="sova-intro-text">${introText}</div>
        ${criticalPreds.length > 0 ? `<div class="sova-score-detail sova-critical-dot">${criticalPreds.length} rupture${criticalPreds.length>1?'s':''} imminente${criticalPreds.length>1?'s':''}</div>` : ''}
        ${warningPreds.length > 0 ? `<div class="sova-score-detail sova-warning-dot">${warningPreds.length} article${warningPreds.length>1?'s':''} à surveiller</div>` : ''}
      </div>
    </div>

    <!-- Revenue at Risk -->
    ${revRisk > 0 ? `
    <div class="sova-rar-card">
      <div class="sova-rar-header">
        <span class="sova-rar-icon">⚠️</span>
        <div>
          <div class="sova-rar-amount">${fmt(revRisk)} ${sym()}</div>
          <div class="sova-rar-label">en danger si tu n'agis pas</div>
        </div>
      </div>
      ${revRiskList.map(r => `
      <div class="sova-rar-line">
        <span class="sova-rar-art">${r.article_name}</span>
        <span class="sova-rar-val">−${fmt(r.amount)} ${sym()} sur ${r.shortfall_days?.toFixed(1)}j</span>
      </div>`).join('')}
    </div>` : ''}

    <!-- Producible / Blocked -->
    ${(producible.length > 0 || blocked.length > 0) ? `
    <div class="sova-fab-card">
      <div class="sova-fab-title">Ce que tu peux encore faire</div>
      <div class="sova-fab-grid">
        ${producible.map(p => `
        <div class="sova-fab-item sova-fab-ok">
          <span class="sova-fab-check">✓</span>
          <span class="sova-fab-name">${p.name}</span>
          <span class="sova-fab-qty">× ${p.max_units}</span>
        </div>`).join('')}
        ${blocked.map(p => `
        <div class="sova-fab-item sova-fab-blocked">
          <span class="sova-fab-check">✗</span>
          <span class="sova-fab-name">${p.name}</span>
          <span class="sova-fab-qty">bloqué</span>
        </div>`).join('')}
      </div>
    </div>` : ''}

    ${preds.length > 0 ? sovaChartCoverage(preds) : `
    <div class="sova-empty">
      <div style="margin-bottom:4px;opacity:0.5"><svg width="48" height="48" viewBox="0 0 466 466" fill="#8A6729" xmlns="http://www.w3.org/2000/svg"><path d="M139.8,45c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5c-12.253,0-23.152,5.907-30,15.023C102.953,35.907,92.053,30,79.8,30c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5c12.406,0,22.5,10.094,22.5,22.5c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5C117.3,55.094,127.394,45,139.8,45z"/><path d="M422.411,424.297L200.338,96.142c-5.44-8.039-13.984-14.288-24.005-17.705c0.642-12.645,0.967-26.383,0.967-40.937v-30c0-4.143-3.357-7.5-7.5-7.5h-120c-4.143,0-7.5,3.357-7.5,7.5v30c0,57.634,5.026,100.198,15.819,133.955c11.204,35.041,28.415,59.516,45.405,80.706c3.173,5.901,6.513,11.827,9.749,17.563c18.762,33.257,38.02,67.4,45.635,128.945c0.011,0.503,0.07,0.993,0.176,1.467c1.819,15.173,2.938,31.993,3.171,50.864h-52.454c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h60h60c4.143,0,7.5-3.357,7.5-7.5c0-19.311-2.089-36.706-5.754-52.5h20.321c4.143,0,7.5-3.357,7.5-7.5v-65.549c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5V391h-16.913c-16.582-52.774-51.15-86.389-80.492-114.912c-11.674-11.348-22.7-22.066-31.316-32.786c-0.024-0.03-0.048-0.06-0.072-0.09c-0.005-0.006-0.01-0.013-0.016-0.02C76.087,194.048,57.299,150.686,57.299,37.5V15h105v22.5c0,16.614-0.43,32.124-1.277,46.099c-0.225,3.711,2.303,7.027,5.941,7.793c8.797,1.853,16.63,6.771,20.952,13.157l133.232,196.875c-6.405,0.715-12.873,1.077-19.335,1.077c-94.841,0-172-77.159-172-172c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,103.112,83.888,187,187,187c9.625,0,19.265-0.744,28.726-2.201l79.451,117.404c2.321,3.432,6.984,4.331,10.414,2.008C423.834,432.39,424.733,427.727,422.411,424.297z M177.248,451c-0.203-16.354-1.068-31.286-2.477-45h21.627c4.143,0,7.5-3.357,7.5-7.5v-26.824c4.119,8.688,7.695,17.986,10.572,28.015c0.098,0.612,0.262,1.201,0.498,1.754c4.094,14.811,6.668,31.201,7.22,49.556H177.248z M188.898,345.563V391h-15.945c-5.984-42.622-17.451-72.693-29.973-97.849C158.902,308.727,175.227,325.423,188.898,345.563z"/></svg></div>
      <div class="sova-empty-title">SOVA observe</div>
      <div class="sova-empty-sub">Enregistre des ventes pour que SOVA s'affûte et commence à prédire.</div>
    </div>`}
    `;
  }

  function tabAlerts() {
    if (alertPreds.length === 0) return `
    <div class="sova-empty">
      <div style="font-size:40px">🌿</div>
      <div class="sova-empty-title">Pas encore de recommandations</div>
      <div class="sova-empty-sub">Tout est bien approvisionné. SOVA veille sur ton stock.</div>
    </div>`;

    return alertPreds.map((p, i) => {
      const isCrit = p.status === 'critical';
      const probColor = p.rupture_probability >= 70 ? '#ef4444' : p.rupture_probability >= 40 ? '#f59e0b' : '#22c55e';
      return `
      <div class="sova-alert-card ${isCrit ? 'sova-alert-critical' : 'sova-alert-warning'}" style="animation-delay:${i*0.05}s">
        <div class="sova-alert-top">
          <div>
            <div class="sova-alert-name">${p.article_name}</div>
            <div class="sova-alert-msg">${p.action ? `${p.action.verb} — ${p.action.quantity} ${p.action.unit} avant le ${p.action.before}` : p.message || ''}</div>
          </div>
          <div class="sova-alert-risk" style="color:${probColor}">${p.rupture_probability?.toFixed(0) || '—'}%</div>
        </div>
        <div class="sova-alert-stats">
          <div class="sova-alert-stat">
            <div class="sova-alert-stat-label">Stock</div>
            <div class="sova-alert-stat-val">${p.current_stock} ${p.unit}</div>
          </div>
          ${p.days_remaining !== null && p.days_remaining !== undefined ? `
          <div class="sova-alert-stat">
            <div class="sova-alert-stat-label">Jours restants</div>
            <div class="sova-alert-stat-val">${p.days_remaining}j</div>
          </div>` : ''}
          <div class="sova-alert-stat">
            <div class="sova-alert-stat-label">À commander</div>
            <div class="sova-alert-stat-val">${p.order_quantity} ${p.unit}</div>
          </div>
          <div class="sova-alert-stat">
            <div class="sova-alert-stat-label">Confiance</div>
            <div class="sova-alert-stat-val">${p.confidence}%</div>
          </div>
        </div>
        <div class="sova-conf-bar">
          <div class="sova-conf-fill" style="width:${p.confidence}%"></div>
        </div>
      </div>`;
    }).join('');
  }

  function tabTomorrow() {
    if (!tomorrow || !tomorrow.plan || tomorrow.plan.length === 0) return `
    <div class="sova-empty">
      <div style="font-size:40px">📅</div>
      <div class="sova-empty-title">Pas encore assez de données</div>
      <div class="sova-empty-sub">SOVA a besoin de quelques jours de ventes pour planifier ta production.</div>
    </div>`;

    const seasonBadge = (f) => {
      if (!f || f === 1) return '';
      const pct = Math.round((f - 1) * 100);
      return `<span class="sova-season-badge ${pct >= 0 ? 'sova-season-up' : 'sova-season-down'}">${pct >= 0 ? '+' : ''}${pct}%</span>`;
    };

    return `
    <div class="sova-tomorrow-header">
      <div class="sova-tomorrow-day">${tomorrow.weekday}</div>
      <div class="sova-tomorrow-sub">Plan de production suggéré</div>
    </div>
    ${tomorrow.plan.map((item, i) => `
    <div class="sova-plan-card" style="animation-delay:${i*0.06}s">
      <div class="sova-plan-top">
        <div class="sova-plan-name">${item.product_name} ${seasonBadge(item.seasonality_factor)}</div>
        <div class="sova-plan-qty">${item.expected_qty} unités</div>
      </div>
      <div class="sova-plan-ingredients">
        ${(item.ingredients || []).map(ing => `
        <div class="sova-plan-ing ${ing.sufficient ? '' : 'sova-ing-warn'}">
          <span class="sova-ing-name">${ing.article_name}</span>
          <span class="sova-ing-need">${ing.needed.toFixed(2)} ${ing.unit}</span>
          <span class="sova-ing-avail">${ing.sufficient ? '✓' : '⚠️'} ${ing.available.toFixed(2)} dispo</span>
        </div>`).join('')}
      </div>
    </div>`).join('')}`;
  }

  function tabArticles() {
    const filtered = preds.filter(p => p.status !== 'no_data');
    if (filtered.length === 0) return `
    <div class="sova-empty">
      <div style="font-size:40px">📊</div>
      <div class="sova-empty-title">Pas encore de données</div>
      <div class="sova-empty-sub">Enregistre tes premières ventes pour voir les analyses SOVA.</div>
    </div>`;

    const sel = S.sovaArticle ? filtered.find(p => p.article_id === S.sovaArticle) : filtered[0];

    return `
    <div class="sova-art-selector">
      ${filtered.map(p => `
      <button class="sova-art-chip ${(sel && sel.article_id === p.article_id) ? 'active' : ''}"
        onclick="S.sovaArticle=${p.article_id};render()">
        <span class="sova-art-dot sova-dot-${p.status}"></span>
        ${p.article_name}
      </button>`).join('')}
    </div>
    ${sel ? `
    <div class="sova-detail-card">
      <div class="sova-detail-name">${sel.article_name}</div>
      ${(() => {
        // Phrase de traduction humaine
        const hasDemand = sel.daily_demand > 0.01;
        const daysLeft = sel.days_remaining;
        const trend = sel.trend_pct;
        const conf = sel.confidence;
        let phrase = '';
        if (!hasDemand) {
          phrase = `SOVA n'a pas encore assez de ventes pour cet article. Continue à enregistrer tes ventes et les prévisions s'affineront.`;
        } else if (sel.status === 'critical') {
          phrase = `⚠️ Stock critique — il ne reste que ${daysLeft}j de stock. SOVA recommande de commander ${sel.order_quantity} ${sel.unit} maintenant.`;
        } else if (sel.status === 'warning') {
          phrase = `Tu approches du seuil de réapprovisionnement. Pense à commander bientôt pour ne pas être pris de court.`;
        } else if (daysLeft && daysLeft > 30) {
          phrase = `Ton stock est bien approvisionné pour encore ${daysLeft} jours. ${trend > 5 ? "La demande est en hausse — surveille l'évolution." : trend < -5 ? "La demande ralentit un peu." : "La demande est stable."}`;
        } else {
          phrase = `Consommation moyenne : ${sel.daily_demand?.toFixed(2)} ${sel.unit}/jour. ${conf >= 70 ? 'Les prévisions sont fiables.' : 'Enregistre plus de ventes pour améliorer la fiabilité.'}`;
        }
        return `<div class="sova-translation">${phrase}</div>`;
      })()}
      <div class="sova-detail-grid">
        <div class="sova-detail-kpi">
          <div class="sova-detail-kpi-val">${sel.current_stock} <span style="font-size:14px;font-weight:500">${sel.unit}</span></div>
          <div class="sova-detail-kpi-label">En stock</div>
        </div>
        <div class="sova-detail-kpi">
          <div class="sova-detail-kpi-val">${sel.daily_demand > 0.01 ? sel.daily_demand?.toFixed(2) : '—'} <span style="font-size:14px;font-weight:500">${sel.daily_demand > 0.01 ? sel.unit+'/j' : ''}</span></div>
          <div class="sova-detail-kpi-label">Demande moy.</div>
        </div>
        <div class="sova-detail-kpi">
          <div class="sova-detail-kpi-val" style="color:${sel.trend_pct > 0 ? '#22c55e' : sel.trend_pct < 0 ? '#ef4444' : '#9ca3af'}">${sel.daily_demand > 0.01 && sel.trend_pct !== 0 ? (sel.trend_pct >= 0 ? '+' : '') + sel.trend_pct + '%' : '—'}</div>
          <div class="sova-detail-kpi-label">Tendance / sem.</div>
        </div>
        <div class="sova-detail-kpi">
          <div class="sova-detail-kpi-val">${sel.days_remaining !== null && sel.daily_demand > 0.01 ? sel.days_remaining + 'j' : '∞'}</div>
          <div class="sova-detail-kpi-label">Jours restants</div>
        </div>
      </div>
      <div class="sova-conf-section">
        <div class="sova-conf-label">Fiabilité de la prévision · <strong>${sel.confidence}%</strong></div>
        <div class="sova-conf-bar">
          <div class="sova-conf-fill" style="width:${sel.confidence}%"></div>
        </div>
      </div>
      ${sovaChartForecast(sel)}
      ${sel.daily_demand > 0.01 ? `
      <div class="sova-detail-metrics">
        <div class="sova-metric">
          <span class="sova-metric-label">Stock de sécurité</span>
          <span class="sova-metric-val">${sel.safety_stock} ${sel.unit} <span style="font-size:11px;color:#9ca3af;font-weight:400">— marge en cas de pic</span></span>
        </div>
        <div class="sova-metric">
          <span class="sova-metric-label">Seuil de commande</span>
          <span class="sova-metric-val">${sel.reorder_point} ${sel.unit} <span style="font-size:11px;color:#9ca3af;font-weight:400">— commander si stock ≤ ça</span></span>
        </div>
        <div class="sova-metric">
          <span class="sova-metric-label">Quantité à commander</span>
          <span class="sova-metric-val">${sel.order_quantity} ${sel.unit}</span>
        </div>
        <div class="sova-metric">
          <span class="sova-metric-label">Risque de rupture</span>
          <span class="sova-metric-val" style="color:${sel.rupture_probability >= 70 ? '#ef4444' : sel.rupture_probability >= 40 ? '#f59e0b' : '#22c55e'}">${sel.rupture_probability?.toFixed(1)}% <span style="font-size:11px;color:#9ca3af;font-weight:400">— probabilité de manquer</span></span>
        </div>
      </div>` : ''}
      ${sel.action ? `
      <div class="sova-action-banner sova-action-${sel.action.urgency}">
        <div class="sova-action-verb">${sel.action.verb}</div>
        <div class="sova-action-detail">${sel.action.quantity} ${sel.action.unit} · avant le ${sel.action.before}</div>
      </div>` : ''}
    </div>` : ''}`;
  }

  const tabContent = S.sovaTab === 'overview' ? tabOverview()
    : S.sovaTab === 'alerts' ? tabAlerts()
    : S.sovaTab === 'tomorrow' ? tabTomorrow()
    : tabArticles();

  return `
  <div class="sova-wrap">
    <!-- Header -->
    <div class="sova-header">
      <div class="sova-header-top">
        <div class="sova-header-nav">
          <button class="sova-back-btn" onclick="nav('home')">${IC.left}</button>
          <div class="sova-brand">
            <span class="sova-owl"><svg width="38" height="38" viewBox="0 0 466 466" fill="#8A6729" xmlns="http://www.w3.org/2000/svg"><path d="M139.8,45c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5c-12.253,0-23.152,5.907-30,15.023C102.953,35.907,92.053,30,79.8,30c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5c12.406,0,22.5,10.094,22.5,22.5c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5C117.3,55.094,127.394,45,139.8,45z"/><path d="M422.411,424.297L200.338,96.142c-5.44-8.039-13.984-14.288-24.005-17.705c0.642-12.645,0.967-26.383,0.967-40.937v-30c0-4.143-3.357-7.5-7.5-7.5h-120c-4.143,0-7.5,3.357-7.5,7.5v30c0,57.634,5.026,100.198,15.819,133.955c11.204,35.041,28.415,59.516,45.405,80.706c3.173,5.901,6.513,11.827,9.749,17.563c18.762,33.257,38.02,67.4,45.635,128.945c0.011,0.503,0.07,0.993,0.176,1.467c1.819,15.173,2.938,31.993,3.171,50.864h-52.454c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h60h60c4.143,0,7.5-3.357,7.5-7.5c0-19.311-2.089-36.706-5.754-52.5h20.321c4.143,0,7.5-3.357,7.5-7.5v-65.549c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5V391h-16.913c-16.582-52.774-51.15-86.389-80.492-114.912c-11.674-11.348-22.7-22.066-31.316-32.786c-0.024-0.03-0.048-0.06-0.072-0.09c-0.005-0.006-0.01-0.013-0.016-0.02C76.087,194.048,57.299,150.686,57.299,37.5V15h105v22.5c0,16.614-0.43,32.124-1.277,46.099c-0.225,3.711,2.303,7.027,5.941,7.793c8.797,1.853,16.63,6.771,20.952,13.157l133.232,196.875c-6.405,0.715-12.873,1.077-19.335,1.077c-94.841,0-172-77.159-172-172c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,103.112,83.888,187,187,187c9.625,0,19.265-0.744,28.726-2.201l79.451,117.404c2.321,3.432,6.984,4.331,10.414,2.008C423.834,432.39,424.733,427.727,422.411,424.297z M177.248,451c-0.203-16.354-1.068-31.286-2.477-45h21.627c4.143,0,7.5-3.357,7.5-7.5v-26.824c4.119,8.688,7.695,17.986,10.572,28.015c0.098,0.612,0.262,1.201,0.498,1.754c4.094,14.811,6.668,31.201,7.22,49.556H177.248z M188.898,345.563V391h-15.945c-5.984-42.622-17.451-72.693-29.973-97.849C158.902,308.727,175.227,325.423,188.898,345.563z"/></svg></span>
            <span class="sova-brand-name">SOVA</span>
          </div>
        </div>
        <div class="sova-tagline">Intelligence de stock</div>
      </div>
      <!-- Tabs -->
      <div class="sova-tabs">
        ${tabs.map(tab => `
        <button class="sova-tab ${S.sovaTab === tab.id ? 'active' : ''}"
          onclick="S.sovaTab='${tab.id}';render()">
          ${tab.label}
        </button>`).join('')}
      </div>
    </div>

    <div class="sova-content container">
      ${tabContent}
    </div>
  </div>`;
}

// ── DETAIL ────────────────────────────────────
function vDetail() {
  const art = S.articles.find(a => a.id===S.selectedId);
  if (!art) { nav('pantry'); return ''; }
  const st  = stockStatus(art.stock, art.min);
  const pct = art.min>0 ? Math.min(100,Math.round((art.stock/Math.max(art.min*2,1))*100)) : 100;

  // Produits qui utilisent cet article
  const usedIn = S.products.filter(p => p.composition.some(c=>c.id===art.id));

  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('pantry')">${IC.left}</button>
    <div style="display:flex;align-items:center;gap:14px">
      <div style="width:56px;height:56px;border-radius:14px;background:var(--gray-8);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:var(--white);flex-shrink:0">${initials(art.name)}</div>
      <div>
        <div style="font-size:22px;font-weight:800;color:var(--white)">${art.name}</div>
        <span class="status ${st.cls}" style="margin-top:6px;display:inline-flex">${st.icon} ${st.label}</span>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="gauge">
        <div class="gauge-val">${art.stock}</div>
        <div class="gauge-unit">${art.unit} ${t('inStock')}</div>
        <div class="progress" style="margin:14px 0 6px;height:6px">
          <div class="progress-bar ${st.bar}" style="width:${pct}%"></div>
        </div>
        <div class="gauge-lbl">${art.min>0?`Seuil minimum : ${art.min} ${art.unit}`:'Seuil non défini — sera calculé automatiquement'}</div>
      </div>
    </div>

    <div class="card" style="margin-top:8px">
      <div class="card-title">${t('editStock')}</div>
      <div class="action-toggle">
        <button class="toggle-btn ${S.action==='add'?'t-active':''}" onclick="S.action='add';render()">
          <div class="toggle-ico">${IC.download}</div>
          <div class="toggle-label">${t('reception')}</div>
        </button>
        <button class="toggle-btn ${S.action==='remove'?'t-active':''}" onclick="S.action='remove';render()">
          <div class="toggle-ico">${IC.upload}</div>
          <div class="toggle-label">${t('withdrawal')}</div>
        </button>
      </div>
      <div class="qty-row">
        <button class="qty-ctrl" onclick="S.qty=Math.max(1,S.qty-1);render()">${IC.minus}</button>
        <input class="qty-val" type="number" min="1" step="0.5" value="${S.qty}" oninput="S.qty=parseFloat(this.value)||1" style="width:60px;text-align:center;border:none;background:none;font-size:inherit;font-weight:inherit;color:inherit">
        <button class="qty-ctrl" onclick="S.qty++;render()">${IC.plus}</button>
      </div>
      <div class="chip-row">
        ${[1,5,10,25,50,100].map(n=>`<button class="chip ${S.qty===n?'active':''}" onclick="S.qty=${n};render()">${n}</button>`).join('')}
      </div>
      <div style="height:10px"></div>
      <button class="btn btn-primary" onclick="applyStock()">
        ${S.action==='add'?`Ajouter ${S.qty} ${art.unit}`:`Retirer ${S.qty} ${art.unit}`}
      </button>
    </div>

    <div class="card" style="margin-top:8px">
      <div class="card-title">${t('infoTitle')}</div>
      ${art.ref ? `<div class="info-row">
        <span class="info-lbl">${IC.tag} ${t('reference')}</span>
        <span class="info-val" style="font-family:monospace;font-weight:700;letter-spacing:1px">${art.ref}</span>
      </div>` : ''}
      ${art.price ? `<div class="info-row">
        <span class="info-lbl">${IC.dollar} ${t('articlePrice')}</span>
        <span class="info-val">${fmt(art.price)} ${sym()}</span>
      </div>` : ''}
      <div class="info-row">
        <span class="info-lbl">${IC.truck} ${t('deliveryTime')}</span>
        <span class="info-val">${art.lead} ${_lang==='fr'?'jours':'days'}</span>
      </div>
      <div class="info-row">
        <span class="info-lbl">${IC.home} Emplacement</span>
        <span class="info-val">
          <select class="input" style="font-size:11px;padding:4px 8px;width:auto;min-width:120px;border-radius:6px" onchange="setArticleLocation(${art.id},parseInt(this.value)||null)">
            <option value="">— Non assigné —</option>
            ${S.locations.map(l => `<option value="${l.id}" ${art.locationId===l.id?'selected':''}>${l.name}${l.type?' ('+({'store':'Boutique','warehouse':'Entrepôt','popup':'Pop-up'}[l.type]||l.type)+')':''}</option>`).join('')}
          </select>
        </span>
      </div>
      ${(() => {
        if (!art.expiry) return '';
        const exp = getExpiryStatus(art.expiry);
        return `<div class="info-row">
          <span class="info-lbl"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${t('expiryDate')}</span>
          <span class="info-val"><span class="expiry-badge" style="background:${exp.color};color:#fff">${exp.label}</span> ${new Date(art.expiry).toLocaleDateString(_lang==='en'?'en-US':'fr-FR')}</span>
        </div>`;
      })()}
      ${usedIn.length>0 ? `
      <div class="info-row" style="align-items:flex-start">
        <span class="info-lbl">${IC.tag} ${t('usedIn')}</span>
        <span class="info-val" style="text-align:right">${usedIn.map(p=>{
          const c=p.composition.find(x=>x.id===art.id);
          return `${p.name} (×${c.qty})`;
        }).join('<br>')}</span>
      </div>
      <div class="info-row">
        <span class="info-lbl">${IC.alert} ${t('thresholdAuto')}</span>
        <span class="info-val">${art.min>0?art.min+' '+art.unit:(_lang==='fr'?'non calculé':'not set')}</span>
      </div>` : ''}
    </div>

    ${art.notes ? `
    <div class="card" style="margin-top:8px">
      <div class="card-title">${t('articleNotes')}</div>
      <div style="font-size:13px;color:var(--text-2);white-space:pre-line">${art.notes}</div>
    </div>` : ''}

    <div class="card" style="margin-top:8px">
      <div class="card-title">${t('modify')}</div>
      <div class="form-group">
        <label class="form-label">${t('reference')}</label>
        <input class="input" type="text" placeholder="EAN-13, SKU…" value="${(art.ref||'').replace(/"/g,'&quot;')}" onchange="updateArticleField(${art.id},'ref',this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">${t('articlePrice')} (${sym()})</label>
        <input class="input" type="number" step="10" min="0" value="${art.price||0}" onchange="updateArticleField(${art.id},'price',parseFloat(this.value)||0)">
      </div>
      <div class="form-group">
        <label class="form-label">${t('expiryDate')}</label>
        <input class="input" type="date" value="${art.expiry||''}" onchange="updateArticleField(${art.id},'expiry',this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">${t('articleNotes')}</label>
        <textarea class="input" rows="2" placeholder="${t('articleNotes')}…" onchange="updateArticleField(${art.id},'notes',this.value)">${(art.notes||'').replace(/</g,'&lt;')}</textarea>
      </div>
    </div>

    <div style="margin-top:10px">
      <button class="btn btn-ghost" onclick="confirmDelete(${art.id})" style="color:var(--black);border-color:var(--gray-3)">
        ${IC.trash} ${t('deleteArticle')}
      </button>
    </div>
  </div>`;
}

function updateArticleField(id, field, value) {
  const art = S.articles.find(a => a.id === id);
  if (!art) return;
  art[field] = value;
  localStorage.setItem('stockr_articles', JSON.stringify(S.articles));
  showToast(t('infoUpdated'));
}

function confirmDelete(id) {
  const art = S.articles.find(a=>a.id===id);
  if (!art) return;
  // Confirmation simple
  const usedIn = S.products.filter(p=>p.composition.some(c=>c.id===id));
  const msg = usedIn.length>0
    ? `Supprimer "${art.name}" ? Il est utilisé dans ${usedIn.length} produit(s) — ces compositions seront mises à jour.`
    : `Supprimer "${art.name}" ?`;
  if (confirm(msg)) deleteArticle(id);
}

// ── ADD ARTICLE ───────────────────────────────
function vAdd() {
  const f = S.form;
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('pantry')">${IC.left}</button>
    <div class="sub-hero-title">${t('newArticle')}</div>
    <div class="sub-hero-sub">${t('addStockSub')}</div>
  </div>
  <div class="container">
    <div class="card">
      <div class="form-group">
        <label class="form-label">${t('articleName')} *</label>
        <input class="input" type="text" placeholder="ex: Farine, Tissu, Bouteilles…" value="${f.name.replace(/"/g,'&quot;')}" oninput="S.form.name=this.value">
      </div>
      <div class="form-group">
        <label class="form-label">Unité de mesure</label>
        <div class="unit-combo" id="unit-combo-wrap">
          <input class="input" type="text" id="unit-input"
            placeholder="ex: kg, pcs, m..."
            value="${f.unit}"
            oninput="updateUnitDrop()"
            onfocus="openUnitDrop()"
            onblur="setTimeout(closeUnitDrop,160)">
          <button type="button" class="unit-chevron"
            onmousedown="event.preventDefault()"
            onclick="S.unitDropOpen?closeUnitDrop():openUnitDrop()">${IC.chevron}</button>
        </div>
        ${(() => {
          const cond = UNIT_COND[f.unit];
          if (!cond) return '';
          const isOther = S.unitCondVal === 'Autre';
          return `
          <div class="form-group" style="margin-top:8px">
            <label class="form-label">${cond.label}</label>
            <div class="chip-row" style="margin-top:6px">
              ${cond.opts.map(o => `<button type="button" class="chip ${S.unitCondVal===o?'active':''}" onclick="selectUnitCond('${o}')">${o}</button>`).join('')}
            </div>
            ${isOther ? `<input class="input" type="number" min="1" step="1" placeholder="Entier..." style="margin-top:8px" value="${S.unitCondOther}" oninput="S.unitCondOther=Math.round(this.value)||''">` : ''}
          </div>`;
        })()}
      </div>
      <div class="form-group">
        <label class="form-label">${t('reference')}</label>
        <input class="input" type="text" placeholder="EAN-13, SKU, code interne…" value="${(f.ref||'').replace(/"/g,'&quot;')}" oninput="S.form.ref=this.value">
      </div>
      <div class="input-row form-group">
        <div>
          <label class="form-label">${t('initialStock')}</label>
          <input class="input" type="number" placeholder="0" step="0.5" value="${f.stock}" oninput="S.form.stock=this.value">
        </div>
        <div>
          <label class="form-label">${t('purchasePrice')} (${sym()})</label>
          <input class="input" type="number" placeholder="0" step="10" value="${f.price||0}" oninput="S.form.price=this.value">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('expiryDate')}</label>
        <input class="input" type="date" value="${f.expiry||''}" oninput="S.form.expiry=this.value">
      </div>
      <div style="background:var(--gray-1);border:1px solid var(--border);border-radius:var(--r-md);padding:12px;font-size:12px;color:var(--text-3);margin-bottom:14px">
        ${IC.info} ${t('alertAutoInfo')}
      </div>
      <button class="btn btn-primary" onclick="saveArticle()">${t('addThisArticle')}</button>
    </div>
  </div>`;
}

// ── ADD PRODUCT ───────────────────────────────
function vAddProduct() {
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('products')">${IC.left}</button>
    <div class="sub-hero-title">${t('newProduct')}</div>
    <div class="sub-hero-sub">${t('productSub')}</div>
  </div>
  <div class="container">
    <div class="card">
      <div class="form-group">
        <label class="form-label">${t('productName')} *</label>
        <input class="input" id="prod-name" type="text" placeholder="ex: Boubou, Robe, Jupe…">
      </div>
      <div style="display:flex;gap:10px">
        <div class="form-group" style="flex:1">
          <label class="form-label">${t('purchasePrice')} (${sym()})</label>
          <input class="input" id="prod-cost" type="number" placeholder="auto" step="1" oninput="updateMarginPreview()">
          <div style="font-size:11px;color:var(--text-3);margin-top:4px">Auto-calculé depuis la composition</div>
        </div>
        <div class="form-group" style="flex:1">
          <label class="form-label">${t('sellingPrice')} (${sym()})</label>
          <input class="input" id="prod-price" type="number" placeholder="0" step="100" oninput="updateMarginPreview()">
        </div>
      </div>
      <div id="margin-preview" style="background:var(--gray-1);border:1px solid var(--border);border-radius:var(--r-md);padding:10px 12px;font-size:13px;color:var(--text-3);margin-bottom:14px;display:none">
        ${t('margin')} : <strong id="margin-val">—</strong>
      </div>
      ${S.articles.length>0 ? `
      <div class="form-group">
        <label class="form-label">${t('composition')} <span style="font-weight:400;text-transform:none;letter-spacing:0">(${t('perUnit')})</span></label>
        ${S.articles.map(a=>`
        <div class="comp-input" data-id="${a.id}" style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div style="flex:1;font-size:13px;font-weight:600;color:var(--text-2)">${a.name}
            <span style="color:var(--text-3);font-weight:400;font-size:11px">(${fmtQty(a.stock)} ${a.unit} dispo)</span>
          </div>
          <input type="number" class="input comp-qty" placeholder="0" step="any" min="0" style="width:76px;text-align:center" oninput="calcCompCost()">
          <select class="input" style="width:70px;padding:8px 4px"
            onchange="S.compUnits[${a.id}]=this.value">
            ${compatibleUnits(a.unit).map(u =>
              `<option value="${u}" ${(S.compUnits[a.id]||a.unit)===u?'selected':''}>${u}</option>`
            ).join('')}
          </select>
        </div>`).join('')}
      </div>` : `
      <div style="padding:14px;background:var(--gray-1);border-radius:var(--r-md);border:1px solid var(--border);font-size:13px;color:var(--text-3);text-align:center;margin-bottom:14px">
        ${t('addArticlesFirst')}
      </div>`}
      <button class="btn btn-primary" onclick="saveProduct()">${t('create')}</button>
    </div>
  </div>`;
}

// ── EDIT PRODUCT ──────────────────────────────
function vEditProduct() {
  const p = S.products.find(p => p.id === S.editProductId);
  if (!p) { nav('products'); return ''; }
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('products')">${IC.left}</button>
    <div class="sub-hero-title">${t('editProduct')}</div>
    <div class="sub-hero-sub">${p.name}</div>
  </div>
  <div class="container">
    <div class="card">
      <div class="form-group">
        <label class="form-label">${t('productName')} *</label>
        <input class="input" id="prod-name" type="text" value="${p.name.replace(/"/g,'&quot;')}">
      </div>
      <div style="display:flex;gap:10px">
        <div class="form-group" style="flex:1">
          <label class="form-label">${t('purchasePrice')} (${sym()})</label>
          <input class="input" id="prod-cost" type="number" placeholder="0" step="100" value="${p.purchasePrice || ''}">
        </div>
        <div class="form-group" style="flex:1">
          <label class="form-label">${t('sellingPrice')} (${sym()})</label>
          <input class="input" id="prod-price" type="number" placeholder="0" step="100" value="${p.price}">
        </div>
      </div>
      <div id="margin-preview" style="background:var(--gray-1);border:1px solid var(--border);border-radius:var(--r-md);padding:10px 12px;font-size:13px;color:var(--text-3);margin-bottom:14px;${p.price > 0 ? '' : 'display:none'}">
        ${t('margin')} : <strong id="margin-val">${p.price > 0 ? Math.round(((p.price - (p.purchasePrice||0)) / p.price) * 100) + '%' : '—'}</strong>
      </div>
      ${S.articles.length > 0 ? `
      <div class="form-group">
        <label class="form-label">${t('composition')} <span style="font-weight:400;text-transform:none;letter-spacing:0">(${t('perUnit')})</span></label>
        ${S.articles.map(a => {
          const existing = p.composition.find(c => c.id === a.id);
          return `
          <div class="comp-input" data-id="${a.id}" style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
            <div style="flex:1;font-size:13px;font-weight:600;color:var(--text-2)">${a.name}
              <span style="color:var(--text-3);font-weight:400;font-size:11px">(${fmtQty(a.stock)} ${a.unit} dispo)</span>
            </div>
            <input type="number" class="input comp-qty" placeholder="0" step="any" min="0" style="width:76px;text-align:center" value="${existing ? existing.qty : ''}" oninput="calcCompCost()">
            <select class="input" style="width:70px;padding:8px 4px"
              onchange="S.compUnits[${a.id}]=this.value">
              ${compatibleUnits(a.unit).map(u =>
                `<option value="${u}" ${(S.compUnits[a.id]||a.unit)===u?'selected':''}>${u}</option>`
              ).join('')}
            </select>
          </div>`;
        }).join('')}
      </div>` : ''}
      <button class="btn btn-primary" onclick="saveEditProduct()">${t('update')}</button>
    </div>
  </div>`;
}

// ── NOTIFICATIONS ────────────────────────────
function vNotifications() {
  const outOfStock = S.articles.filter(a => a.stock === 0);
  const lowStock = S.articles.filter(a => a.stock > 0 && a.min > 0 && a.stock < a.min);
  const expiring = getExpiringArticles();
  const allAlerts = [
    ...outOfStock.map(a => ({ type: 'out', article: a, priority: 0 })),
    ...expiring.filter(a => a.expiryInfo.status === 'expired').map(a => ({ type: 'expired', article: a, priority: 0 })),
    ...expiring.filter(a => a.expiryInfo.status === 'today').map(a => ({ type: 'expiry_today', article: a, priority: 1 })),
    ...lowStock.map(a => ({ type: 'low', article: a, priority: 2 })),
    ...expiring.filter(a => a.expiryInfo.status === 'soon').map(a => ({ type: 'expiry_soon', article: a, priority: 3 })),
  ].sort((a, b) => a.priority - b.priority);

  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('home')">${IC.left}</button>
    <div class="sub-hero-title">${t('notifications')}</div>
    <div class="sub-hero-sub">${allAlerts.length} ${t('stockAlert').toLowerCase()}</div>
  </div>
  <div class="container">
    ${allAlerts.length === 0 ? `
    <div class="empty">
      <div class="empty-ico" style="color:var(--success)">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="empty-title">${t('noNotifs')}</div>
      <div class="empty-text">${t('noNotifsSub')}</div>
    </div>` : allAlerts.map((n, i) => {
      const a = n.article;
      const isOut = n.type === 'out';
      const toOrder = Math.max(0, Math.ceil(a.min - a.stock));
      return `
    <div class="card card-tap anim" style="animation-delay:${i*0.04}s;border-left:4px solid ${isOut?'var(--danger)':'var(--warning)'}" onclick="nav('detail',{selectedId:${a.id}})">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:40px;height:40px;border-radius:10px;background:${isOut?'rgba(220,38,38,.1)':'rgba(217,119,6,.1)'};display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <span style="font-size:18px">${isOut?'🔴':'🟡'}</span>
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:700;color:var(--text-1)">${a.name}</div>
          <div style="font-size:12px;color:${isOut?'var(--danger)':'var(--warning)'};font-weight:600;margin-top:2px">
            ${isOut ? t('outOfStockAlert') : `${a.stock} ${a.unit} ${t('unitsRemaining')} — ${t('belowThreshold')} ${a.min}`}
          </div>
          ${!isOut && a.lead > 0 ? `<div style="font-size:11px;color:var(--text-3);margin-top:2px">${t('deliveryTime')} : ${a.lead}j · ${t('orderSuggestion')} ~${toOrder} ${a.unit}</div>` : ''}
        </div>
        <div style="color:var(--gray-4)">${IC.chevron}</div>
      </div>
    </div>`;
    }).join('')}

    ${expiring.length > 0 ? `
    <div class="section-hd" style="margin-top:12px"><div class="section-lbl">${t('expiryAlerts')}</div></div>
    ${expiring.map((a, i) => `
    <div class="card card-tap anim" style="animation-delay:${(allAlerts.length + i)*0.04}s;border-left:4px solid ${a.expiryInfo.color}" onclick="nav('detail',{selectedId:${a.id}})">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:40px;height:40px;border-radius:10px;background:${a.expiryInfo.color}15;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${a.expiryInfo.color}" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:700;color:var(--text-1)">${a.name}</div>
          <div style="font-size:12px;color:${a.expiryInfo.color};font-weight:600;margin-top:2px">
            ${a.expiryInfo.label} — ${new Date(a.expiry).toLocaleDateString(_lang==='en'?'en-US':'fr-FR')}
          </div>
          <div style="font-size:11px;color:var(--text-3);margin-top:2px">${a.stock} ${a.unit} ${t('inStock')}</div>
        </div>
        <div style="color:var(--gray-4)">${IC.chevron}</div>
      </div>
    </div>`).join('')}` : ''}
  </div>`;
}

// ── CLIENTS ──────────────────────────────────
function vClients() {
  const q = S.clientSearch.toLowerCase();
  const list = S.clients.filter(c => c.name.toLowerCase().includes(q) || (c.phone||'').includes(q) || (c.email||'').toLowerCase().includes(q));

  // Compute stats per client
  const clientStats = {};
  S.sales.forEach(s => {
    if (!s.clientId) return;
    const ckey = String(s.clientId);
    if (!clientStats[ckey]) clientStats[ckey] = { total: 0, count: 0, last: null };
    clientStats[ckey].total += s.total;
    clientStats[ckey].count += 1;
    if (!clientStats[ckey].last || s.date > clientStats[ckey].last) clientStats[ckey].last = s.date;
  });

  return `
  <div class="page-header">
    <div class="page-header-row">
      <button class="back-btn" onclick="nav('home')">${IC.left}</button>
      <div class="page-title">${t('clients')}</div>
      <button class="fab" onclick="nav('add-client')">${IC.plus}</button>
    </div>
    <div class="search-wrap">
      <span class="search-ico">${IC.search}</span>
      <input class="input input-search" type="text" placeholder="    ${t('search')}" value="${S.clientSearch.replace(/"/g,'&quot;')}" oninput="S.clientSearch=this.value;render()">
    </div>
  </div>
  <div class="container">
    ${list.length === 0 ? `
    <div class="empty">
      <div class="empty-ico">${IC.usersLg}</div>
      <div class="empty-title">${S.clients.length === 0 ? t('noClients') : t('noResults')}</div>
      <div class="empty-text">${S.clients.length === 0 ? t('noClientsSub') : t('noResultsSub')}</div>
      ${S.clients.length === 0 ? `<button class="btn btn-primary" style="width:auto;padding:11px 24px" onclick="nav('add-client')">${t('addClient')}</button>` : ''}
    </div>` : list.map((c, i) => {
      const st = clientStats[String(c.id)] || { total: 0, count: 0, last: null };
      const tier = S.loyaltyConfig?.enabled ? _getClientTier(c) : null;
      const showTier = tier && (c.loyaltyPoints > 0 || st.total > 0);
      return `
      <div class="card card-tap anim" style="animation-delay:${i*0.04}s" onclick="nav('client-detail',{selectedClientId:${c.id}})">
        <div class="article-row">
          <div class="article-avatar" ${tier ? `style="background:${tier.gradient||tier.color};color:#fff"` : ''}>${initials(c.name)}</div>
          <div class="article-info">
            <div class="article-name" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              <span>${c.name}</span>
              ${showTier ? _renderTierBadge(tier, 'sm') : ''}
            </div>
            <div class="article-meta">${c.phone ? `${IC.phone} ${c.phone}` : ''}${c.phone && c.email ? ' · ' : ''}${c.email || ''}</div>
            ${st.count > 0 ? `<div class="article-meta" style="margin-top:2px">${st.count} ${t('purchases').toLowerCase()} · ${fmt(st.total)} ${sym()}</div>` : ''}
            ${c.loyaltyPoints > 0 ? `<div class="article-meta" style="margin-top:2px;color:var(--warning)">${IC.star} ${c.loyaltyPoints} pts fidelite</div>` : ''}
          </div>
          <div style="color:var(--gray-4)">${IC.chevron}</div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function vAddClient() {
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('clients')">${IC.left}</button>
    <div class="sub-hero-title">${t('newClient')}</div>
    <div class="sub-hero-sub">${t('addClientSub')}</div>
  </div>
  <div class="container">
    <div class="card">
      <div class="form-group">
        <label class="form-label">${t('clientName')} *</label>
        <input class="input" id="client-name" type="text" placeholder="ex: Fatou Diallo">
      </div>
      <div class="form-group">
        <label class="form-label">${t('clientPhone')}</label>
        <input class="input" id="client-phone" type="tel" placeholder="ex: 77 123 45 67">
      </div>
      <div class="form-group">
        <label class="form-label">${t('clientEmail')}</label>
        <input class="input" id="client-email" type="email" placeholder="ex: fatou@email.com">
      </div>
      <div class="form-group">
        <label class="form-label">${t('clientNotes')}</label>
        <textarea class="input" id="client-notes" rows="3" placeholder="Notes, préférences…" style="resize:vertical"></textarea>
      </div>
      <button class="btn btn-primary" onclick="saveClient()">${t('addClient')}</button>
    </div>
  </div>`;
}

async function saveClient() {
  const name = $('client-name')?.value?.trim();
  if (!name) { showToast(t('fillAll'), 'error'); return; }
  try {
    const data = await api('POST', '/api/clients/', {
      name,
      phone: $('client-phone')?.value?.trim() || '',
      email: $('client-email')?.value?.trim() || '',
      notes: $('client-notes')?.value?.trim() || '',
    });
    S.clients.push(data);
    showToast(`${name} — ${t('welcome')} !`);
    nav('clients');
  } catch(e) { showToast(e.message, 'error'); }
}

async function deleteClient(id) {
  if (!confirm(t('delete') + ' ?')) return;
  try {
    await api('DELETE', `/api/clients/${id}`);
    S.clients = S.clients.filter(c => c.id !== id);
    showToast(t('delete'));
    nav('clients');
  } catch(e) { showToast(e.message, 'error'); }
}

function vClientDetail() {
  const client = S.clients.find(c => c.id === S.selectedClientId);
  if (!client) { nav('clients'); return ''; }
  const clientSales = S.sales.filter(s => s.clientId && String(s.clientId) === String(client.id));
  const totalSpent = clientSales.reduce((s,v) => s + v.total, 0);
  const totalProfit = clientSales.reduce((s,v) => s + (v.profit||0), 0);

  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('clients')">${IC.left}</button>
    <div style="display:flex;align-items:center;gap:14px">
      <div style="width:56px;height:56px;border-radius:14px;background:var(--gray-8);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:var(--white);flex-shrink:0">${initials(client.name)}</div>
      <div>
        <div style="font-size:22px;font-weight:800;color:var(--white)">${client.name}</div>
        ${client.phone ? `<div style="font-size:13px;color:var(--gray-5);margin-top:4px">${IC.phone} ${client.phone}</div>` : ''}
      </div>
    </div>
  </div>
  <div class="container">
    <div class="metric-grid">
      <div class="metric-card">
        <div class="metric-val">${fmt(totalSpent)}</div>
        <div class="metric-lbl">${t('totalSpent')}</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">${clientSales.length}</div>
        <div class="metric-lbl">${t('purchases')}</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color:var(--success)">${fmt(totalProfit)}</div>
        <div class="metric-lbl">${t('profit')}</div>
      </div>
    </div>

    ${S.loyaltyConfig?.enabled ? (() => {
      const tier = _getClientTier(client);
      const bg = tier ? (tier.gradient || tier.color) : 'linear-gradient(135deg,#FFD700,#FFA500)';
      const txtColor = tier?.id === 'bronze' || tier?.id === 'silver' ? '#fff' : '#fff';
      return `
    <div class="card" style="margin-bottom:14px;background:${bg};color:${txtColor};border-radius:14px;position:relative;overflow:hidden">
      ${tier ? `<div style="position:absolute;top:10px;right:12px;font-size:40px;opacity:0.25">${tier.icon||'★'}</div>` : ''}
      <div style="display:flex;align-items:center;justify-content:space-between;position:relative">
        <div>
          <div style="font-size:11px;font-weight:600;opacity:0.85;letter-spacing:0.5px">PROGRAMME FIDELITE</div>
          ${tier ? `<div style="margin-top:4px;margin-bottom:6px">${_renderTierBadge(tier, 'lg')}</div>` : ''}
          <div style="font-size:28px;font-weight:800">${client.loyaltyPoints||0} <span style="font-size:14px;font-weight:600">pts</span></div>
          ${tier ? `<div style="font-size:11px;opacity:0.9;margin-top:2px">${tier.perk||''}</div>` : ''}
        </div>
      </div>
      ${tier && tier.nextTier ? `
      <div style="margin-top:10px;padding:10px;background:rgba(255,255,255,0.15);border-radius:10px">
        <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:600;margin-bottom:6px">
          <span>Vers ${tier.nextTier.name} ${tier.nextTier.icon||''}</span>
          <span>${fmt(tier.toNext)}${tier.mode==='points'?' pts':' '+sym()} restants</span>
        </div>
        <div style="height:6px;background:rgba(0,0,0,0.2);border-radius:3px;overflow:hidden">
          <div style="height:100%;width:${tier.progress||0}%;background:#fff;border-radius:3px"></div>
        </div>
      </div>` : tier ? `
      <div style="margin-top:10px;padding:8px;background:rgba(255,255,255,0.15);border-radius:10px;font-size:11px;font-weight:600;text-align:center">
        🎉 Palier maximum atteint !
      </div>` : ''}
      ${(S.loyaltyConfig.rewards||[]).length > 0 ? `
      <div style="margin-top:10px">
        ${S.loyaltyConfig.rewards.map((r,i) => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 8px;background:rgba(255,255,255,0.12);border-radius:8px;margin-top:4px">
          <span style="font-size:12px;font-weight:600">${r.icon||'🎁'} ${r.name} <span style="opacity:0.7">(${r.points} pts)</span></span>
          ${(client.loyaltyPoints||0) >= r.points ? `
          <button style="background:rgba(255,255,255,0.3);color:#fff;border:none;border-radius:6px;padding:4px 10px;font-size:11px;font-weight:700;cursor:pointer" onclick="redeemLoyaltyReward(${client.id},${i})">Echanger</button>` : `
          <span style="font-size:10px;opacity:0.7">${r.points - (client.loyaltyPoints||0)} pts manquants</span>`}
        </div>`).join('')}
      </div>` : ''}
      ${(client.redeemedRewards||[]).length > 0 ? `
      <div style="margin-top:10px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.2)">
        <div style="font-size:10px;opacity:0.85;margin-bottom:4px;font-weight:600">HISTORIQUE ÉCHANGES</div>
        ${(client.redeemedRewards||[]).slice(0,3).map(r => `
        <div style="font-size:10px;opacity:0.9">✓ ${r.name} — ${new Date(r.date).toLocaleDateString('fr')}</div>`).join('')}
      </div>` : ''}
    </div>`;})() : ''}

    ${client.email ? `
    <div class="card" style="margin-top:8px">
      <div class="info-row">
        <span class="info-lbl">${t('clientEmail')}</span>
        <span class="info-val">${client.email}</span>
      </div>
    </div>` : ''}

    ${client.notes ? `
    <div class="card" style="margin-top:8px">
      <div class="card-title">${t('clientNotes')}</div>
      <div style="font-size:13px;color:var(--text-2)">${client.notes}</div>
    </div>` : ''}

    <div class="section-hd" style="margin-top:8px">
      <div class="section-lbl">${t('purchases')}</div>
      <div style="font-size:12px;color:var(--text-3)">${clientSales.length} ${t('saleOf')}</div>
    </div>
    ${clientSales.length === 0 ? `
    <div class="card" style="text-align:center;padding:18px;color:var(--text-3);font-size:13px">${t('noPurchases')}</div>
    ` : clientSales.map((s,i) => `
    <div class="card anim" style="animation-delay:${i*0.04}s">
      <div class="sale-item" style="padding:0">
        <div class="sale-dot"></div>
        <div class="sale-info">
          <div class="sale-prod">${s.productName}</div>
          <div class="sale-date">${fmtDate(s.date)}</div>
        </div>
        <div class="sale-right">
          <div class="sale-total">${fmt(s.total)} ${sym()}</div>
          <div class="sale-qty">×${s.qty}</div>
        </div>
      </div>
    </div>`).join('')}

    <div style="margin-top:16px">
      <button class="btn btn-ghost" onclick="deleteClient(${client.id})" style="color:var(--danger);border-color:var(--danger)">
        ${IC.trash} ${t('delete')}
      </button>
    </div>
  </div>`;
}

// ── SPECTRA ───────────────────────────────────
function vSpectra() {
  const sp = S.spectra;

  // ── Inventory compare / audit mode ──
  if (sp.step === 'compare') {
    const artMap = {};
    S.articles.forEach(a => { artMap[a.name.toLowerCase()] = a; });
    const detected = sp.compareResults || [];
    const matches = [], missing = [], extra = [];
    detected.forEach(d => {
      const art = artMap[(d.matched_name || d.detected_name).toLowerCase()];
      if (art) {
        const stk = art.qty !== undefined ? art.qty : art.stock;
        if (Math.abs(stk - d.quantity) <= 1) matches.push({ name: art.name, stock: stk, scanned: d.quantity, id: art.id });
        else if (d.quantity < stk) missing.push({ name: art.name, stock: stk, scanned: d.quantity, diff: stk - d.quantity, id: art.id });
        else extra.push({ name: art.name, stock: stk, scanned: d.quantity, diff: d.quantity - stk, id: art.id });
      } else {
        extra.push({ name: d.matched_name || d.detected_name, stock: 0, scanned: d.quantity, diff: d.quantity });
      }
    });
    S.articles.forEach(a => {
      const stk = a.qty !== undefined ? a.qty : a.stock;
      if (!detected.some(d => (d.matched_name || d.detected_name).toLowerCase() === a.name.toLowerCase())) {
        if (stk > 0) missing.push({ name: a.name, stock: stk, scanned: 0, diff: stk, id: a.id });
      }
    });
    const totalMissing = missing.reduce((s,m) => s + m.diff, 0);

    return `
  <div class="spectra-wrap">
    <div class="spectra-audit-hero ${totalMissing > 0 ? 'has-gap' : 'all-good'}">
      <button class="back-btn" onclick="spectraReset()" style="position:absolute;top:16px;left:16px;color:#fff;z-index:3">${IC.left}</button>
      <div class="spectra-badge"><div class="spectra-badge-dot"></div> ${t('spectraAudit').toUpperCase()}</div>
      <div class="spectra-title">${totalMissing > 0 ? (IC.alert + ' ' + t('spectraGap')) : '✓ ' + t('spectraMatch')}</div>
      ${totalMissing > 0 ? `<div class="spectra-audit-big-num">${totalMissing}</div>
      <div class="spectra-audit-label">${t('spectraGapMsg')}</div>` : `
      <div class="spectra-audit-big-num" style="color:#34d399">${matches.length}</div>
      <div class="spectra-audit-label">${t('articles')} OK</div>`}
    </div>

    <div style="width:100%;max-width:380px;margin-top:-10px;position:relative;z-index:2">

    ${totalMissing > 0 ? `
    <div style="display:flex;gap:8px;margin-bottom:14px">
      <button class="btn" style="flex:1;background:var(--danger);color:#fff;font-size:13px;padding:12px;border:none;border-radius:12px;font-weight:700" onclick="spectraAdjustStock()">
        ${IC.check} &nbsp; ${t('spectraAdjust')}
      </button>
      <button class="btn" style="flex:1;background:transparent;color:var(--danger);font-size:13px;padding:12px;border:1.5px solid var(--danger);border-radius:12px;font-weight:700" onclick="spectraSignalLoss()">
        ${IC.alert} &nbsp; ${t('spectraSignalLoss')}
      </button>
    </div>` : ''}

    <div class="metric-grid" style="margin-bottom:14px">
      <div class="metric-card" style="border-left:3px solid var(--success)">
        <div class="metric-val" style="color:var(--success)">${matches.length}</div>
        <div class="metric-lbl">${t('spectraMatch')}</div>
      </div>
      <div class="metric-card" style="border-left:3px solid var(--danger)">
        <div class="metric-val" style="color:var(--danger)">${missing.length}</div>
        <div class="metric-lbl">${t('spectraMissing')}</div>
      </div>
      <div class="metric-card" style="border-left:3px solid var(--warning)">
        <div class="metric-val" style="color:var(--warning)">${extra.length}</div>
        <div class="metric-lbl">${t('spectraExtra')}</div>
      </div>
    </div>

    ${missing.length > 0 ? `
    <div class="section-hd"><div class="section-lbl" style="color:var(--danger)">${IC.alert} ${t('spectraMissing')} (${missing.length})</div></div>
    ${missing.map((m, i) => `<div class="spectra-det-card" style="border-left:3px solid var(--danger);animation-delay:${i*0.05}s">
      <div>
        <div class="spectra-det-name">${m.name}</div>
        <div class="spectra-det-meta">${t('stock')}: ${m.stock} → ${t('spectraScan')}: ${m.scanned}</div>
      </div>
      <div class="spectra-det-diff diff-missing">-${m.diff}</div>
    </div>`).join('')}` : ''}

    ${extra.length > 0 ? `
    <div class="section-hd"><div class="section-lbl" style="color:var(--warning)">${t('spectraExtra')} (${extra.length})</div></div>
    ${extra.map((m, i) => `<div class="spectra-det-card" style="border-left:3px solid var(--warning);animation-delay:${i*0.05}s">
      <div>
        <div class="spectra-det-name">${m.name}</div>
        <div class="spectra-det-meta">${t('stock')}: ${m.stock} → ${t('spectraScan')}: ${m.scanned}</div>
      </div>
      <div class="spectra-det-diff diff-extra">+${m.diff}</div>
    </div>`).join('')}` : ''}

    ${matches.length > 0 ? `
    <div class="section-hd"><div class="section-lbl" style="color:var(--success)">${IC.check} ${t('spectraMatch')} (${matches.length})</div></div>
    ${matches.map((m, i) => `<div class="spectra-det-card" style="animation-delay:${i*0.05}s">
      <div class="spectra-det-name">${m.name}</div>
      <div class="spectra-det-diff diff-ok">${m.scanned}</div>
    </div>`).join('')}` : ''}

    <button class="btn btn-primary" style="margin-top:16px;width:100%" onclick="spectraReset();nav('pantry')">${t('spectraViewStock')}</button>
    </div>
  </div>`;
  }

  // ── Réception magique : résultats ──
  if (sp.step === 'reception') {
    const items = sp.receptionItems || [];
    const total = items.reduce((s,i) => s + i.quantity, 0);
    return `
  <div class="spectra-wrap">
    <div class="spectra-reception-hero">
      <button class="back-btn" onclick="spectraReset()" style="position:absolute;top:16px;left:16px;color:#fff;z-index:3">${IC.left}</button>
      <div class="spectra-badge"><div class="spectra-badge-dot"></div> ${t('spectraReception').toUpperCase()}</div>
      <div class="spectra-title">${t('spectraNewDelivery')}</div>
      <div class="spectra-audit-big-num" style="color:#34d399">${total}</div>
      <div class="spectra-audit-label">${t('spectraItemsReceived')}</div>
    </div>

    <div style="width:100%;max-width:380px;margin-top:-10px;position:relative;z-index:2">
    ${items.map((it, i) => `<div class="spectra-det-card" style="border-left:3px solid var(--success);animation-delay:${i*0.05}s">
      <div class="spectra-det-name">${it.matched_name || it.detected_name}</div>
      <div class="spectra-det-diff diff-plus">+${it.quantity}</div>
    </div>`).join('')}

    <button class="btn btn-primary" style="margin-top:16px;width:100%;padding:14px;font-size:15px" onclick="spectraConfirmReception()">
      ${IC.check} &nbsp; ${t('spectraConfirmReception')}
    </button>
    <button class="btn btn-ghost" style="margin-top:8px;width:100%" onclick="spectraReset()">${t('cancel')}</button>
    </div>
  </div>`;
  }

  // ── Étape : caméra ──
  if (sp.step === 'camera') {
    const lowItems = S.articles.filter(a => {
      const stk = a.qty !== undefined ? a.qty : a.stock;
      const mn = a.minQty || a.min || 0;
      return stk > 0 && mn > 0 && stk <= mn;
    });
    return `
  <div class="spectra-wrap">
    <div class="spectra-header">
      <button class="back-btn" onclick="nav('home')" style="position:absolute;top:16px;left:16px;color:#fff;z-index:3">${IC.left}</button>
      <div class="spectra-badge"><div class="spectra-badge-dot"></div> SPECTRA IA</div>
      <div class="spectra-logo-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
      </div>
      <div class="spectra-title">${t('spectraTitle')}</div>
      <div class="spectra-sub">${t('spectraScanSub')}</div>
    </div>

    <div class="spectra-features">
      <label class="spectra-main-btn" for="spectra-file">
        ${IC.camera} &nbsp; ${t('spectraCapture')}
      </label>

      <div class="spectra-feat-grid">
        <button class="spectra-feature-btn feat-audit" onclick="spectraStartCompare()">
          <div class="spectra-feat-ico ico-audit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div class="spectra-feat-title">${t('spectraAudit')}</div>
          <div class="spectra-feat-sub">${t('spectraAuditSub')}</div>
        </button>
        <button class="spectra-feature-btn feat-reception" onclick="spectraStartReception()">
          <div class="spectra-feat-ico ico-reception">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <div class="spectra-feat-title">${t('spectraReception')}</div>
          <div class="spectra-feat-sub">${t('spectraReceptionSub')}</div>
        </button>
      </div>

      <div class="spectra-demo-row">
        <button class="spectra-demo-btn" onclick="spectraRunDemo()">
          ${IC.eye} &nbsp; ${t('spectraAudit')} ${t('spectraDemo')}
        </button>
        <button class="spectra-demo-btn" style="background:rgba(5,150,105,.08);color:#059669;border-color:rgba(5,150,105,.2)" onclick="spectraRunDemoReception()">
          ${IC.truck} &nbsp; ${t('spectraReception')} ${t('spectraDemo')}
        </button>
      </div>
    </div>

    <input id="spectra-file" type="file" accept="image/*" capture="environment"
           style="display:none" onchange="spectraOnFile(this)">

    <div class="spectra-privacy">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      ${_lang === 'fr' ? "L'image ne quitte jamais ton appareil." : "The image never leaves your device."}
    </div>

    ${lowItems.length > 0 ? `
    <div style="width:100%;max-width:380px;margin-top:16px">
      <div class="section-hd"><div class="section-lbl" style="color:var(--danger)">${IC.alert} ${t('alerts')} (${lowItems.length})</div></div>
      ${lowItems.slice(0,3).map((a, i) => `<div class="spectra-det-card" style="border-left:3px solid var(--danger);animation-delay:${i*0.05}s">
        <div>
          <div class="spectra-det-name">${a.name}</div>
          <div class="spectra-det-meta">${a.qty||a.stock} ${a.unit} ${t('unitsRemaining')}</div>
        </div>
        <div class="spectra-det-diff diff-missing">${a.qty||a.stock}</div>
      </div>`).join('')}
    </div>` : ''}
  </div>`;
  }

  // ── Étape : chargement ──
  if (sp.step === 'loading') return `
  <div class="spectra-wrap spectra-center">
    <div class="spectra-scan-box">
      <div class="spectra-scan-grid"></div>
      <div class="spectra-scan-corners"></div>
      <div class="spectra-scan-line"></div>
      <div class="spectra-scan-label">SCANNING</div>
    </div>
    <div class="spectra-loading-title">${t('spectraAnalyzing')}</div>
    <div class="spectra-loading-sub">Spectra IA · ${_lang==='fr'?'Reconnaissance en cours':'Recognition in progress'}…</div>
    <div class="spectra-live-stats">
      <div class="spectra-live-stat" style="animation-delay:.2s">
        <div class="spectra-live-stat-val">—</div>
        <div class="spectra-live-stat-lbl">${t('articles')}</div>
      </div>
      <div class="spectra-live-stat" style="animation-delay:.4s">
        <div class="spectra-live-stat-val">—</div>
        <div class="spectra-live-stat-lbl">${_lang==='fr'?'Confiance':'Confidence'}</div>
      </div>
    </div>
  </div>`;

  // ── Étape : confirmation ──
  if (sp.step === 'confirm') {
    const item = sp.queue[sp.current];
    if (!item) { spectraFinish(); return ''; }
    const progress = `${sp.current + 1} / ${sp.queue.length}`;
    const label = item.matched_name || item.detected_name;

    return `
  <div class="spectra-wrap">
    <div class="spectra-progress-bar">
      <div class="spectra-progress-fill" style="width:${((sp.current)/sp.queue.length)*100}%"></div>
    </div>

    <div class="spectra-confirm-card">
      <div class="spectra-conf-badge">${progress}</div>
      <div class="spectra-conf-icon">${IC.cameraLg}</div>
      <div class="spectra-conf-label">${t('spectraDetected')}</div>
      <div class="spectra-conf-name">${label}</div>
      <div class="spectra-conf-meta">
        <span class="spectra-pill">${item.quantity}</span>
        <span class="spectra-pill">${item.confidence}%</span>
        ${item.matched_name ? `<span class="spectra-pill spectra-pill-match">${t('spectraMatch')}</span>` : `<span class="spectra-pill spectra-pill-new">${t('newArticle')}</span>`}
      </div>

      ${sp.naming ? `
        <div class="spectra-name-input-wrap">
          <input id="spectra-name-input" class="spectra-name-input" type="text"
                 placeholder="${t('articleName')}…" autocomplete="off">
          <button class="btn btn-primary" style="margin-top:10px;width:100%" onclick="spectraSubmitName()">
            ${t('spectraConfirm')}
          </button>
        </div>
      ` : `
        <div class="spectra-conf-actions">
          <button class="btn spectra-btn-yes" onclick="spectraConfirmYes()">
            ${IC.check}&nbsp; ${t('spectraConfirm')}
          </button>
          <button class="btn spectra-btn-no" onclick="spectraConfirmNo()">
            ${IC.xmark}&nbsp; ${t('spectraSkip')}
          </button>
        </div>
      `}
    </div>
  </div>`;
  }

  // ── Étape : terminé ──
  if (sp.step === 'done') {
    const total = sp.results.length;
    return `
  <div class="spectra-wrap spectra-center">
    <div class="spectra-done-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <div class="spectra-loading-title">${t('spectraDone')}</div>
    <div class="spectra-sub">${total} ${t('articles').toLowerCase()}</div>
    <div class="spectra-results">
      ${sp.results.map(r => `
        <div class="spectra-result-row">
          <span class="spectra-result-name">${r.name}</span>
          <span class="spectra-result-qty">+${r.new_qty} ${r.unit}</span>
        </div>
      `).join('')}
    </div>
    <button class="btn btn-primary" style="margin-top:24px" onclick="spectraReset();nav('pantry')">
      ${t('spectraViewStock')}
    </button>
    <button class="btn" style="margin-top:10px" onclick="spectraReset()">
      ${t('spectraCapture')}
    </button>
  </div>`;
  }

  return '';
}

// ── Spectra : logique ──────────────────────────

async function spectraOnFile(input) {
  const file = input.files[0];
  if (!file) return;

  // Convertir en base64
  const reader = new FileReader();
  reader.onload = async (e) => {
    S.spectra.step = 'loading';
    render();

    try {
      const data = await api('POST', '/api/spectra/scan', { image: e.target.result });
      if (!data.detections || data.detections.length === 0) {
        showToast(t('spectraNoDetection'), 'error');
        S.spectra.step = 'camera';
        render();
        return;
      }
      S.spectra.queue   = data.detections;
      S.spectra.current = 0;
      S.spectra.confirmed = [];
      S.spectra.naming  = false;
      S.spectra.step    = 'confirm';
      render();
    } catch (err) {
      showToast(err.message || 'Spectra error', 'error');
      S.spectra.step = 'camera';
      render();
    }
  };
  reader.readAsDataURL(file);
}

function spectraConfirmYes() {
  const item = S.spectra.queue[S.spectra.current];
  S.spectra.confirmed.push({
    article_id: item.matched_id || null,
    name:       item.matched_name || item.detected_name,
    quantity:   item.quantity,
    unit:       item.matched_unit || 'pce',
  });
  spectraNext();
}

function spectraConfirmNo() {
  S.spectra.naming = true;
  render();
  setTimeout(() => document.getElementById('spectra-name-input')?.focus(), 80);
}

function spectraSubmitName() {
  const input = document.getElementById('spectra-name-input');
  const name = input?.value?.trim();
  if (!name) { showToast(t('articleName'), 'error'); return; }

  const item = S.spectra.queue[S.spectra.current];
  S.spectra.confirmed.push({
    article_id: null,
    name:       name,
    quantity:   item.quantity,
    unit:       item.matched_unit || 'pce',
  });
  S.spectra.naming = false;
  spectraNext();
}

function spectraNext() {
  S.spectra.current++;
  S.spectra.naming = false;
  if (S.spectra.current >= S.spectra.queue.length) {
    spectraFinish();
  } else {
    render();
  }
}

async function spectraFinish() {
  S.spectra.step = 'loading';
  render();

  try {
    const data = await api('POST', '/api/spectra/confirm', { items: S.spectra.confirmed });
    S.spectra.results = data.results || [];
    S.spectra.step    = 'done';
    // Mettre à jour les articles locaux
    await loadData();
    render();
  } catch (err) {
    showToast(err.message || t('errLoad'), 'error');
    S.spectra.step = 'confirm';
    render();
  }
}

function spectraReset() {
  S.spectra = {
    step: 'camera', queue: [], current: 0,
    confirmed: [], naming: false, results: [],
    compareResults: [],
  };
  render();
}

function spectraStartCompare() {
  // Create file input for compare mode
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*'; input.capture = 'environment';
  input.onchange = () => {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      S.spectra.step = 'loading'; render();
      try {
        const data = await api('POST', '/api/spectra/scan', { image: e.target.result });
        if (!data.detections || data.detections.length === 0) {
          showToast(t('spectraNoDetection'), 'error');
          S.spectra.step = 'camera'; render(); return;
        }
        S.spectra.compareResults = data.detections;
        S.spectra.step = 'compare';
        render();
      } catch (err) {
        showToast(err.message || 'Error', 'error');
        S.spectra.step = 'camera'; render();
      }
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

// ── Spectra : Réception Magique ──────────────
function spectraStartReception() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*'; input.capture = 'environment';
  input.onchange = () => {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      S.spectra.step = 'loading'; render();
      try {
        const data = await api('POST', '/api/spectra/scan', { image: e.target.result });
        if (!data.detections || data.detections.length === 0) {
          showToast(t('spectraNoDetection'), 'error');
          S.spectra.step = 'camera'; render(); return;
        }
        S.spectra.receptionItems = data.detections;
        S.spectra.step = 'reception';
        render();
      } catch (err) {
        showToast(err.message || 'Error', 'error');
        S.spectra.step = 'camera'; render();
      }
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

async function spectraConfirmReception() {
  const items = S.spectra.receptionItems || [];
  if (items.length === 0) return;
  S.spectra.step = 'loading'; render();
  try {
    const confirmed = items.map(it => ({
      article_id: it.matched_id || null,
      name: it.matched_name || it.detected_name,
      quantity: it.quantity,
      unit: it.matched_unit || 'pce',
    }));
    const data = await api('POST', '/api/spectra/confirm', { items: confirmed });
    S.spectra.results = data.results || [];
    S.spectra.step = 'done';
    showToast(t('spectraReceptionDone'), 'success');
    await loadData();
    render();
  } catch (err) {
    // Offline mode: update local stock directly
    items.forEach(it => {
      const art = S.articles.find(a => a.name.toLowerCase() === (it.matched_name || it.detected_name).toLowerCase());
      if (art) {
        if (art.qty !== undefined) art.qty += it.quantity;
        else art.stock = (art.stock || 0) + it.quantity;
      }
    });
    localStorage.setItem('stockr_articles', JSON.stringify(S.articles));
    S.spectra.results = items.map(it => ({ name: it.matched_name || it.detected_name, new_qty: it.quantity, unit: it.matched_unit || 'pce' }));
    S.spectra.step = 'done';
    showToast(t('spectraReceptionDone'), 'success');
    render();
  }
}

function spectraAdjustStock() {
  // Adjust local stock to match scanned quantities
  const detected = S.spectra.compareResults || [];
  let adjusted = 0;
  detected.forEach(d => {
    const art = S.articles.find(a => a.name.toLowerCase() === (d.matched_name || d.detected_name).toLowerCase());
    if (art) {
      if (art.qty !== undefined) art.qty = d.quantity;
      else art.stock = d.quantity;
      adjusted++;
    }
  });
  localStorage.setItem('stockr_articles', JSON.stringify(S.articles));
  showToast(`${t('spectraAdjust')}: ${adjusted} ${t('articles').toLowerCase()}`, 'success');
  spectraReset();
  nav('pantry');
}

function spectraSignalLoss() {
  const detected = S.spectra.compareResults || [];
  const artMap = {};
  S.articles.forEach(a => { artMap[a.name.toLowerCase()] = a; });
  const losses = [];
  detected.forEach(d => {
    const art = artMap[(d.matched_name || d.detected_name).toLowerCase()];
    if (art) {
      const stk = art.qty !== undefined ? art.qty : art.stock;
      if (d.quantity < stk) losses.push({ name: art.name, diff: stk - d.quantity });
    }
  });
  S.articles.forEach(a => {
    const stk = a.qty !== undefined ? a.qty : a.stock;
    if (!detected.some(d => (d.matched_name || d.detected_name).toLowerCase() === a.name.toLowerCase()) && stk > 0) {
      losses.push({ name: a.name, diff: stk });
    }
  });
  const totalLoss = losses.reduce((s,l) => s + l.diff, 0);
  const msg = losses.map(l => `${l.name}: -${l.diff}`).join('\n');
  const date = new Date().toLocaleString();
  const report = `${t('spectraSignalLoss')} — ${date}\n${t('spectraGap')}: ${totalLoss} ${t('spectraGapMsg')}\n\n${msg}`;
  // Save to localStorage as loss report
  const reports = JSON.parse(localStorage.getItem('stockr_loss_reports') || '[]');
  reports.unshift({ date, items: losses, total: totalLoss });
  localStorage.setItem('stockr_loss_reports', JSON.stringify(reports.slice(0, 50)));
  showToast(`${t('spectraSignalLoss')}: ${totalLoss} ${t('articles').toLowerCase()}`, 'error');
  // Try to share the report
  if (navigator.share) {
    navigator.share({ title: t('spectraSignalLoss'), text: report }).catch(() => {});
  }
  spectraReset();
}

// ── PURCHASE ORDERS ──────────────────────────
function vPurchaseOrders() {
  const orders = S.purchaseOrders;
  const sym = S.session?.currency_symbol || 'FCFA';
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('more')">${IC.left}</button>
    <div class="sub-hero-title">${t('purchaseOrders')}</div>
    <div class="sub-hero-sub">${orders.length} ${t('articles').toLowerCase()}</div>
  </div>
  <div class="container">
    <button class="btn btn-primary" style="margin-bottom:12px" onclick="nav('add-order')">
      ${IC.plus} &nbsp; ${t('newOrder')}
    </button>
    ${orders.length === 0 ? `
    <div class="empty-state">
      ${IC.truck}
      <div class="empty-title">${t('noOrders')}</div>
    </div>` : orders.map((o, i) => {
      const stColor = o.status === 'received' ? 'var(--success)' : o.status === 'cancelled' ? 'var(--danger)' : 'var(--warning)';
      const stLabel = o.status === 'received' ? t('orderReceived') : o.status === 'cancelled' ? t('orderCancelled') : t('orderPending');
      return `
    <div class="card anim" style="margin-bottom:6px;border-left:3px solid ${stColor};animation-delay:${i*0.03}s">
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div>
          <div style="font-weight:700;font-size:14px">${o.articleName}</div>
          <div style="font-size:11px;color:var(--text-3)">${o.supplierName || '—'} · ${fmtDate(o.date)}</div>
          <div style="display:inline-block;margin-top:4px;padding:2px 8px;border-radius:6px;background:${stColor}20;color:${stColor};font-size:10px;font-weight:700">${stLabel}</div>
        </div>
        <div style="text-align:right">
          <div style="font-weight:800;font-size:14px">${o.qty} ${o.unit||'pce'}</div>
          ${o.total ? `<div style="font-size:11px;color:var(--text-3)">${fmt(o.total)} ${sym}</div>` : ''}
        </div>
      </div>
      ${o.status === 'pending' ? `
      <div style="display:flex;gap:6px;margin-top:8px">
        <button class="btn btn-primary" style="flex:1;font-size:11px;padding:8px" onclick="receiveOrder(${o.id})">${IC.check} &nbsp; ${t('markReceived')}</button>
        <button class="btn btn-ghost" style="font-size:11px;padding:8px;color:var(--danger)" onclick="cancelOrder(${o.id})">${IC.xmark}</button>
      </div>` : ''}
    </div>`;
    }).join('')}
  </div>`;
}

function vAddOrder() {
  const sym = S.session?.currency_symbol || 'FCFA';
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('purchase-orders')">${IC.left}</button>
    <div class="sub-hero-title">${t('newOrder')}</div>
  </div>
  <div class="container">
    <div class="card" style="padding:16px">
      <div class="form-group">
        <label class="form-label">${t('orderArticle')} *</label>
        <select class="input" id="ord-article">
          <option value="">${t('select')}</option>
          ${S.articles.map(a => `<option value="${a.id}">${a.name} (${a.qty !== undefined ? a.qty : a.stock} ${a.unit||'pce'})</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">${t('orderSupplier')}</label>
        <select class="input" id="ord-supplier">
          <option value="">—</option>
          ${S.suppliers.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">${t('orderQty')} *</label>
        <input class="input" id="ord-qty" type="number" min="1" value="1">
      </div>
      <div class="form-group">
        <label class="form-label">${t('orderTotal')} (${sym})</label>
        <input class="input" id="ord-total" type="number" min="0" placeholder="0">
      </div>
      <div class="form-group">
        <label class="form-label">${t('deliveryDays')||'Delai de livraison (jours)'}</label>
        <input class="input" id="ord-lead" type="number" min="1" value="7" placeholder="7">
      </div>
      <div class="form-group">
        <label class="form-label">Date de livraison estimee</label>
        <input class="input" id="ord-delivery-date" type="date" value="${new Date(Date.now()+7*86400000).toISOString().slice(0,10)}">
      </div>
      <div class="form-group">
        <label class="form-label">Notes / Remarques</label>
        <textarea class="input" id="ord-notes" rows="2" placeholder="Informations supplementaires..." style="resize:vertical"></textarea>
      </div>
      <button class="btn btn-primary" style="width:100%;margin-top:8px" onclick="saveOrder()">
        ${IC.check} &nbsp; ${t('newOrder')}
      </button>
    </div>
  </div>`;
}

function saveOrder() {
  const artEl = document.getElementById('ord-article');
  const artId = artEl?.value;
  if (!artId) { showToast(t('chooseProduct'), 'error'); return; }
  const art = S.articles.find(a => a.id === parseInt(artId));
  const supEl = document.getElementById('ord-supplier');
  const sup = S.suppliers.find(s => s.id === parseInt(supEl?.value));
  const qty = parseInt(document.getElementById('ord-qty')?.value) || 1;
  const total = parseFloat(document.getElementById('ord-total')?.value) || 0;
  const leadDays = parseInt(document.getElementById('ord-lead')?.value) || 7;
  const deliveryDate = document.getElementById('ord-delivery-date')?.value || new Date(Date.now()+leadDays*86400000).toISOString().slice(0,10);
  const notes = document.getElementById('ord-notes')?.value?.trim() || '';
  const order = {
    id: Date.now(),
    articleId: art?.id, articleName: art?.name || '?', unit: art?.unit || 'pce',
    supplierId: sup?.id || null, supplierName: sup?.name || '',
    qty, total, status: 'pending',
    leadDays, deliveryDate, notes,
    date: new Date().toISOString(),
  };
  S.purchaseOrders.unshift(order);
  localStorage.setItem('stockr_orders', JSON.stringify(S.purchaseOrders));
  showToast(t('newOrder') + ' OK');
  nav('purchase-orders');
}

function receiveOrder(id) {
  const order = S.purchaseOrders.find(o => o.id === id);
  if (!order) return;
  order.status = 'received';
  order.receivedDate = new Date().toISOString();
  // Add stock
  const art = S.articles.find(a => a.id === order.articleId);
  if (art) {
    if (art.qty !== undefined) art.qty += order.qty;
    else art.stock = (art.stock || 0) + order.qty;
    localStorage.setItem('stockr_articles', JSON.stringify(S.articles));
    logMovement(art.name, 'entry', order.qty, t('purchaseOrders') + ': ' + (order.supplierName || ''));
  }
  localStorage.setItem('stockr_orders', JSON.stringify(S.purchaseOrders));
  showToast(t('orderReceived') + ': +' + order.qty + ' ' + order.articleName, 'success');
  render();
}

function cancelOrder(id) {
  const order = S.purchaseOrders.find(o => o.id === id);
  if (order) { order.status = 'cancelled'; }
  localStorage.setItem('stockr_orders', JSON.stringify(S.purchaseOrders));
  render();
}

// ── PRICING PAGE ────────────────────────────
function vPricing() {
  const sym = S.session?.currency_symbol || 'FCFA';
  const plans = [
    { key:'free', name:t('freePlan'), price:0, color:'var(--gray-6)',
      features:['50 '+t('articles'),'100 '+t('sales').toLowerCase(),'1 '+t('locations').toLowerCase(),'Spectra (5/'+(_lang==='fr'?'jour':'day')+')','PDF '+t('invoice')], current:true },
    { key:'pro', name:t('proPlan'), price:4900, color:'var(--accent)',
      features:[t('unlimited')+' '+t('articles'),t('unlimited')+' '+t('sales').toLowerCase(),'5 '+t('locations').toLowerCase(),'Spectra '+t('unlimited'),'WhatsApp '+t('catalog'),t('purchaseOrders'),t('suppliers'),t('exportCSV')] },
    { key:'biz', name:t('businessPlan'), price:14900, color:'var(--success)',
      features:[t('unlimited')+' '+t('articles'),t('unlimited')+' '+t('sales').toLowerCase(),t('unlimited')+' '+t('locations').toLowerCase(),'Spectra '+t('unlimited'),'API '+t('included'),(_lang==='fr'?'Multi-utilisateurs':'Multi-users'),(_lang==='fr'?'Support prioritaire':'Priority support'),(_lang==='fr'?'Tableau de bord avancé':'Advanced dashboard')] },
  ];
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('more')">${IC.left}</button>
    <div class="sub-hero-title">${t('pricing')}</div>
    <div class="sub-hero-sub">${_lang==='fr'?'Choisissez le plan adapté à votre activité':'Choose the plan that fits your business'}</div>
  </div>
  <div class="container">
    ${plans.map((p,i) => `
    <div class="card anim" style="margin-bottom:12px;border:2px solid ${p.current?p.color:'var(--border)'};animation-delay:${i*0.05}s;overflow:hidden">
      ${p.key==='pro'?`<div style="background:var(--accent);color:#fff;text-align:center;padding:4px;font-size:10px;font-weight:800;text-transform:uppercase;margin:-16px -16px 12px -16px">${_lang==='fr'?'Le plus populaire':'Most popular'}</div>`:''}
      <div style="padding:${p.key==='pro'?'0 16px 16px':'16px'}">
        <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:8px">
          <span style="font-size:28px;font-weight:900;color:${p.color}">${p.price===0?(t('freePlan')):fmt(p.price)}</span>
          ${p.price>0?`<span style="font-size:13px;color:var(--text-3)">${sym}${t('perMonth')}</span>`:''}
        </div>
        <div style="font-size:16px;font-weight:800;margin-bottom:12px">${p.name}</div>
        ${p.features.map(f => `
        <div style="display:flex;align-items:center;gap:8px;padding:4px 0;font-size:13px">
          <span style="color:${p.color}">${IC.check}</span>
          <span>${f}</span>
        </div>`).join('')}
        <button class="btn ${p.current?'btn-ghost':'btn-primary'}" style="width:100%;margin-top:14px;${p.current?'opacity:.6;cursor:default':''}" ${p.current?'disabled':''}>
          ${p.current ? t('currentPlan') : t('upgrade')+' '+p.name}
        </button>
      </div>
    </div>`).join('')}

    <div style="text-align:center;margin-top:16px;padding:16px">
      <div style="font-size:12px;color:var(--text-3);line-height:1.5">${_lang==='fr'?'Tous les plans incluent le mode hors-ligne et les mises à jour gratuites.':'All plans include offline mode and free updates.'}</div>
      <div style="font-size:11px;color:var(--text-3);margin-top:4px">support@stockr.app</div>
    </div>
  </div>`;
}

// ── SUBSCRIPTION ─────────────────────────────
function vSubscription() {
  const sub = S.subscription;
  const isActive = sub.plan !== 'free';
  const trialDays = sub.trialEnd ? Math.max(0, Math.ceil((new Date(sub.trialEnd) - Date.now()) / 86400000)) : 0;
  const billing = sub.billing || 'monthly';
  const prices = {
    starter:  { monthly: 2500, yearly: 24000 },
    pro:      { monthly: 4900, yearly: 47000 },
    business: { monthly: 14900, yearly: 143000 },
  };

  return `
  <div class="sub-hero" style="background:linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('more')">${IC.left}</button>
    <div class="sub-hero-title">${t('subscription')}</div>
    <div class="sub-hero-sub">${isActive ? t('activePlan') + ': ' + sub.plan.toUpperCase() : t('planFree')}</div>
  </div>
  <div class="container">

    ${isActive ? `
    <div class="card anim" style="border:2px solid var(--accent);overflow:hidden;margin-bottom:16px">
      <div style="background:linear-gradient(135deg,var(--accent),#7C3AED);padding:16px;margin:-16px -16px 16px -16px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <div style="color:rgba(255,255,255,.7);font-size:11px;font-weight:700;text-transform:uppercase">${t('activePlan')}</div>
            <div style="color:#fff;font-size:24px;font-weight:900;margin-top:4px">${sub.plan.toUpperCase()}</div>
          </div>
          <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:#fff">${IC.logo}</div>
        </div>
      </div>
      ${trialDays > 0 ? `
      <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(79,70,229,.06);border-radius:10px;margin-bottom:12px">
        <div style="width:36px;height:36px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:900">${trialDays}</div>
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--text-1)">${trialDays} ${t('trialDays')}</div>
          <div style="font-size:11px;color:var(--text-3)">${t('renewDate')}: ${new Date(sub.trialEnd).toLocaleDateString(_lang==='en'?'en-US':'fr-FR')}</div>
        </div>
      </div>` : ''}
      <div style="font-size:13px;font-weight:700;margin-bottom:10px;color:var(--text-1)">${t('planFeatures')}</div>
      ${_planFeatures(sub.plan).map(f => `
      <div style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13px">
        <span style="color:var(--success)">${IC.check}</span>
        <span style="color:var(--text-2)">${f}</span>
      </div>`).join('')}
      <div style="display:flex;gap:8px;margin-top:16px">
        <button class="btn btn-ghost" style="flex:1;color:var(--danger);border-color:var(--danger)" onclick="cancelPlan()">${t('cancelPlan')}</button>
      </div>
    </div>` : `
    <div class="card anim" style="text-align:center;padding:24px;margin-bottom:16px">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--gray-2);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;color:var(--text-3)">${IC.logo}</div>
      <div style="font-size:16px;font-weight:800;color:var(--text-1)">${t('planFree')}</div>
      <div style="font-size:13px;color:var(--text-3);margin-top:4px">Passez a un plan superieur pour debloquer toutes les fonctionnalites</div>
    </div>`}

    <div style="display:flex;gap:6px;margin-bottom:16px;background:var(--gray-1);padding:4px;border-radius:10px">
      <button class="btn ${billing==='monthly'?'btn-primary':'btn-ghost'}" style="flex:1;padding:8px;font-size:12px" onclick="setBilling('monthly')">${t('monthly')}</button>
      <button class="btn ${billing==='yearly'?'btn-primary':'btn-ghost'}" style="flex:1;padding:8px;font-size:12px" onclick="setBilling('yearly')">
        ${t('yearly')} <span style="font-size:10px;opacity:.8">(-20%)</span>
      </button>
    </div>

    ${['starter','pro','business'].map((pk, i) => {
      const price = prices[pk][billing];
      const isCurrent = sub.plan === pk;
      const colors = {starter:'#0ea5e9', pro:'var(--accent)', business:'var(--success)'};
      const color = colors[pk];
      const labels = {starter:'Starter', pro:t('proPlan')||'Pro', business:t('businessPlan')||'Business'};
      const label = labels[pk];
      const descs = {starter:'Ideal pour demarrer', pro:'Pour les PME en croissance', business:'Pour les grandes entreprises'};
      return `
    <div class="card anim" style="margin-bottom:12px;border:2px solid ${isCurrent?color:'var(--border)'};overflow:hidden;animation-delay:${i*0.06}s">
      ${pk==='pro'?`<div style="background:var(--accent);color:#fff;text-align:center;padding:4px;font-size:10px;font-weight:800;text-transform:uppercase;margin:-16px -16px 12px -16px">Le plus populaire</div>`:''}
      <div>
        <div style="font-size:15px;font-weight:800;margin-bottom:2px;color:var(--text-1)">${label}</div>
        <div style="font-size:11px;color:var(--text-3);margin-bottom:10px">${descs[pk]}</div>
        <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:12px">
          <span style="font-size:28px;font-weight:900;color:${color}">${fmt(price)}</span>
          <span style="font-size:12px;color:var(--text-3)">${sym()}/${billing==='yearly'?'an':'mois'}</span>
        </div>
        ${_planFeatures(pk).map(f => `
        <div style="display:flex;align-items:center;gap:8px;padding:3px 0;font-size:12px">
          <span style="color:${color}">${IC.check}</span><span>${f}</span>
        </div>`).join('')}
        <button class="btn ${isCurrent?'btn-ghost':'btn-primary'}" style="width:100%;margin-top:14px;${isCurrent?'opacity:.6;cursor:default':''}" ${isCurrent?'disabled':`onclick="activatePlan('${pk}')"`}>
          ${isCurrent ? t('currentPlan') : t('choosePlan')}
        </button>
      </div>
    </div>`;
    }).join('')}

    <div class="card" style="margin-top:8px;text-align:center;padding:16px;background:var(--gray-1)">
      <div style="font-size:11px;color:var(--text-3);line-height:1.6">
        Tous les plans incluent : mode hors-ligne, mises a jour gratuites, support WhatsApp, sauvegarde cloud.
        <br>Paiement possible via Wave, Orange Money, Moov Money.
      </div>
      <div style="font-size:11px;color:var(--accent);margin-top:6px;font-weight:600">support@stockr.app</div>
    </div>
  </div>`;
}

function _planFeatures(plan) {
  if (plan === 'starter') return [
    '200 articles', '500 ventes/mois',
    '2 emplacements', 'Spectra (20/jour)',
    'Factures PDF', 'Export CSV',
    '1 moyen de paiement',
  ];
  if (plan === 'pro') return [
    t('unlimited')+' '+t('articles'), t('unlimited')+' '+t('sales').toLowerCase(),
    '5 '+t('locations').toLowerCase(), 'Spectra '+t('unlimited'),
    'WhatsApp '+t('catalog'), t('purchaseOrders'), t('suppliers'),
    t('exportCSV'), 'Boutique en ligne',
    'Marketing & campagnes', 'Integrations (5)',
    'Rapports avances',
  ];
  if (plan === 'business') return [
    t('unlimited')+' '+t('articles'), t('unlimited')+' '+t('sales').toLowerCase(),
    t('unlimited')+' '+t('locations').toLowerCase(), 'Spectra '+t('unlimited'),
    'API incluse', 'Multi-utilisateurs',
    'Support prioritaire 24/7', 'Tableau de bord avance',
    'Gestion des roles', 'Integrations illimitees',
    'Boutique + domaine personnalise',
    'Programme fidelite avance',
    'Export comptable OHADA',
  ];
  return [
    '50 '+t('articles'), '100 '+t('sales').toLowerCase(),
    '1 emplacement', 'Spectra (5/jour)',
    'PDF facture',
  ];
}

// ── SUPPLIERS ────────────────────────────────
function vSuppliers() {
  const q = S.clientSearch.toLowerCase();
  const filtered = q ? S.suppliers.filter(s => s.name.toLowerCase().includes(q) || (s.phone||'').includes(q)) : S.suppliers;
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('more')">${IC.left}</button>
    <div class="sub-hero-title">${t('suppliers')}</div>
    <div class="sub-hero-sub">${S.suppliers.length} ${t('supplierOf')}</div>
  </div>
  <div class="container">
    <button class="btn btn-primary" style="margin-bottom:12px" onclick="nav('add-supplier')">
      ${IC.plus} &nbsp; ${t('addSupplier')}
    </button>
    ${filtered.length === 0 ? `
    <div class="empty-state">
      ${IC.truck}
      <div class="empty-title">${t('noSuppliers')}</div>
      <div class="empty-sub">${t('noSuppliersSub')}</div>
    </div>` : filtered.map((s, i) => `
    <div class="card card-tap anim" style="margin-bottom:6px;animation-delay:${i*0.03}s" onclick="nav('supplier-detail',{selectedSupplierId:${s.id}})">
      <div class="article-row">
        <div class="article-avatar">${initials(s.name)}</div>
        <div class="article-info">
          <div class="article-name">${s.name}</div>
          <div class="article-meta">${s.phone ? IC.phone+' '+s.phone : ''}${s.phone && s.email ? ' · ' : ''}${s.email || ''}</div>
        </div>
        <div style="color:var(--gray-4)">${IC.chevron}</div>
      </div>
    </div>`).join('')}
  </div>`;
}

function vAddSupplier() {
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('suppliers')">${IC.left}</button>
    <div class="sub-hero-title">${t('addSupplier')}</div>
  </div>
  <div class="container">
    <div class="card" style="padding:16px">
      <div class="form-group">
        <label class="form-label">${t('supplierName')} *</label>
        <input class="input" id="sup-name" type="text" placeholder="Ex: Fournisseur ABC">
      </div>
      <div class="form-group">
        <label class="form-label">${t('supplierPhone')}</label>
        <input class="input" id="sup-phone" type="tel" placeholder="Ex: +225 07 00 00 00">
      </div>
      <div class="form-group">
        <label class="form-label">${t('supplierEmail')}</label>
        <input class="input" id="sup-email" type="email" placeholder="email@fournisseur.com">
      </div>
      <div class="form-group">
        <label class="form-label">${t('supplierNotes')}</label>
        <textarea class="input" id="sup-notes" rows="3" style="resize:vertical" placeholder="${t('supplierNotes')}…"></textarea>
      </div>
      <button class="btn btn-primary" style="width:100%;margin-top:8px" onclick="saveSupplier()">
        ${IC.check} &nbsp; ${t('addSupplier')}
      </button>
    </div>
  </div>`;
}

function vSupplierDetail() {
  const sup = S.suppliers.find(s => s.id === S.selectedSupplierId);
  if (!sup) return `<div class="container"><p>${t('noSuppliers')}</p></div>`;
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('suppliers')">${IC.left}</button>
    <div class="sub-hero-title">${sup.name}</div>
    <div class="sub-hero-sub">${t('supplierDetail')}</div>
  </div>
  <div class="container">
    <div class="card" style="padding:16px">
      ${sup.phone ? `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span style="color:var(--gray-5)">${IC.phone}</span><span style="font-size:14px">${sup.phone}</span></div>` : ''}
      ${sup.email ? `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span style="color:var(--gray-5)">${IC.info}</span><span style="font-size:14px">${sup.email}</span></div>` : ''}
      ${sup.notes ? `<div style="margin-top:8px;padding:10px;background:var(--bg-2);border-radius:8px;font-size:13px;color:var(--text-2);line-height:1.5">${sup.notes}</div>` : ''}
    </div>
    <div style="display:flex;gap:8px;margin-top:12px">
      ${sup.phone ? `<a href="tel:${sup.phone}" class="btn btn-primary" style="flex:1;text-align:center;text-decoration:none">${IC.phone} &nbsp; ${t('supplierPhone')}</a>` : ''}
      ${sup.phone ? `<a href="https://wa.me/${sup.phone.replace(/[^0-9]/g,'')}" class="btn" style="flex:1;text-align:center;text-decoration:none;background:#25D366;color:#fff" target="_blank">${IC.whatsapp} &nbsp; WhatsApp</a>` : ''}
    </div>
    <button class="btn btn-ghost" style="width:100%;margin-top:12px;color:var(--danger);border-color:var(--danger)" onclick="deleteSupplier(${sup.id})">
      ${IC.trash} &nbsp; ${t('delete')}
    </button>
  </div>`;
}

function saveSupplier() {
  const name = document.getElementById('sup-name')?.value?.trim();
  if (!name) { showToast(t('nameRequired'), 'error'); return; }
  const sup = {
    id: Date.now(),
    name,
    phone: document.getElementById('sup-phone')?.value?.trim() || '',
    email: document.getElementById('sup-email')?.value?.trim() || '',
    notes: document.getElementById('sup-notes')?.value?.trim() || '',
    created: new Date().toISOString(),
  };
  S.suppliers.push(sup);
  localStorage.setItem('stockr_suppliers', JSON.stringify(S.suppliers));
  showToast(t('addSupplier') + ' OK');
  nav('suppliers');
}

function deleteSupplier(id) {
  S.suppliers = S.suppliers.filter(s => s.id !== id);
  localStorage.setItem('stockr_suppliers', JSON.stringify(S.suppliers));
  nav('suppliers');
}

// ── STOCK MOVEMENT HISTORY ──────────────────
function logMovement(articleName, type, qty, note) {
  const mv = {
    id: Date.now(),
    article: articleName,
    type, // 'entry' | 'exit' | 'adjustment'
    qty,
    note: note || '',
    date: new Date().toISOString(),
  };
  S.stockMovements.unshift(mv);
  if (S.stockMovements.length > 500) S.stockMovements = S.stockMovements.slice(0, 500);
  localStorage.setItem('stockr_movements', JSON.stringify(S.stockMovements));
}

function vStockHistory() {
  const movements = S.stockMovements.slice(0, 100);
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('more')">${IC.left}</button>
    <div class="sub-hero-title">${t('stockHistory')}</div>
    <div class="sub-hero-sub">${S.stockMovements.length} ${t('articles').toLowerCase()}</div>
  </div>
  <div class="container">
    ${movements.length === 0 ? `
    <div class="empty-state">
      ${IC.inbox}
      <div class="empty-title">${t('noMovements')}</div>
    </div>` : movements.map((m, i) => {
      const typeColor = m.type === 'entry' ? 'var(--success)' : m.type === 'exit' ? 'var(--danger)' : 'var(--warning)';
      const typeLabel = m.type === 'entry' ? t('entry') : m.type === 'exit' ? t('exit') : t('adjustment');
      const sign = m.type === 'entry' ? '+' : m.type === 'exit' ? '-' : '';
      return `
    <div class="card anim" style="margin-bottom:4px;border-left:3px solid ${typeColor};animation-delay:${i*0.02}s">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-weight:700;font-size:13px">${m.article}</div>
          <div style="font-size:11px;color:var(--text-3)">${typeLabel} · ${fmtDate(m.date)}${m.note ? ' · '+m.note : ''}</div>
        </div>
        <div style="font-weight:800;color:${typeColor};font-size:15px">${sign}${m.qty}</div>
      </div>
    </div>`;
    }).join('')}
  </div>`;
}

// ── SPECTRA DEMO MODE ───────────────────────
function spectraRunDemo() {
  S.spectra.step = 'loading';
  S.spectra.demoMode = 'audit';
  render();
  // Simulate realistic detection after 2.5s using existing articles
  setTimeout(() => {
    const fallbackDB = [
      { detected_name: 'Riz 5kg', matched_name: 'Riz 5kg', quantity: 8, confidence: 94, matched_unit: 'sac' },
      { detected_name: 'Huile végétale 1L', matched_name: 'Huile végétale 1L', quantity: 12, confidence: 91, matched_unit: 'l' },
      { detected_name: 'Sucre 1kg', matched_name: 'Sucre 1kg', quantity: 3, confidence: 97, matched_unit: 'kg' },
      { detected_name: 'Savon Marseille', matched_name: 'Savon Marseille', quantity: 20, confidence: 89, matched_unit: 'pce' },
      { detected_name: 'Farine 1kg', matched_name: 'Farine 1kg', quantity: 5, confidence: 93, matched_unit: 'kg' },
    ];
    let demoItems;
    if (S.articles.length >= 3) {
      // Use real articles with realistic gap simulation
      demoItems = S.articles.slice(0, Math.min(6, S.articles.length)).map(a => {
        const stk = a.qty !== undefined ? a.qty : a.stock;
        // Create gaps: some items match, some are missing, some extra
        const variance = Math.random();
        let qty;
        if (variance < 0.3) qty = Math.max(0, stk - Math.ceil(Math.random() * 3)); // missing
        else if (variance < 0.5) qty = stk + Math.ceil(Math.random() * 2); // extra
        else qty = stk; // match
        return {
          detected_name: a.name,
          matched_name: a.name,
          matched_id: a.id,
          matched_unit: a.unit || 'pce',
          quantity: Math.max(0, qty),
          confidence: Math.floor(86 + Math.random() * 13),
        };
      });
    } else {
      demoItems = fallbackDB;
    }
    S.spectra.compareResults = demoItems;
    S.spectra.step = 'compare';
    logActivity('spectra', _lang === 'fr' ? 'Audit Spectra effectué (démo)' : 'Spectra audit completed (demo)');
    render();
  }, 2500);
}

function spectraRunDemoReception() {
  S.spectra.step = 'loading';
  S.spectra.demoMode = 'reception';
  render();
  setTimeout(() => {
    let receptionItems;
    if (S.articles.length >= 2) {
      receptionItems = S.articles.slice(0, Math.min(4, S.articles.length)).map(a => ({
        detected_name: a.name,
        matched_name: a.name,
        matched_id: a.id,
        matched_unit: a.unit || 'pce',
        quantity: Math.ceil(Math.random() * 10 + 2),
        confidence: Math.floor(88 + Math.random() * 11),
      }));
    } else {
      receptionItems = [
        { detected_name: 'Bouteilles eau 1.5L', matched_name: 'Bouteilles eau 1.5L', quantity: 24, confidence: 96, matched_unit: 'pce' },
        { detected_name: 'Gobelets plastique', matched_name: 'Gobelets plastique', quantity: 10, confidence: 91, matched_unit: 'pce' },
        { detected_name: 'Serviettes', matched_name: 'Serviettes', quantity: 6, confidence: 87, matched_unit: 'lot' },
      ];
    }
    S.spectra.receptionItems = receptionItems;
    S.spectra.step = 'reception';
    render();
  }, 2500);
}

// ── QUICK SALE ──────────────────────────────
function quickSaleProduct(productId) {
  const prod = S.products.find(p => p.id === productId);
  if (!prod) return;
  const sym = S.session?.currency_symbol || 'FCFA';

  // Check stock availability using composition (correct property)
  const comps = prod.composition || [];
  const canMake = comps.length > 0 ? Math.min(...comps.map(comp => {
    const art = S.articles.find(a => a.id === comp.id);
    return art ? Math.floor((art.stock !== undefined ? art.stock : 0) / (comp.qty || 1)) : 0;
  })) : 999;

  if (canMake < 1) {
    showToast(t('insufficientStock'), 'error');
    return;
  }

  // Apply active promo (auto-applicable, sans code)
  let finalPrice = prod.price;
  let promoName = null, promoDiscount = 0, promoCode = null, promoId = null;
  const promo = _getActivePromo(prod.id);
  if (promo) {
    promoId = promo.id;
    promoName = promo.name;
    promoCode = promo.code;
    finalPrice = _applyPromoValue(prod.price, promo);
    promoDiscount = prod.price > 0 ? Math.round((1 - finalPrice/prod.price)*100) : 0;
    _recordPromoUsage(promo.id, null);
  }

  // Create sale
  const sale = {
    id: Date.now(),
    productId: prod.id,
    productName: prod.name,
    qty: 1,
    total: finalPrice,
    profit: finalPrice - (prod.purchasePrice || 0),
    date: new Date().toISOString(),
    method: 'cash',
    paymentMethod: 'cash',
    promoName, promoDiscount, promoCode, promoId,
  };

  // Deduct stock using composition
  if (comps.length > 0) {
    comps.forEach(comp => {
      const art = S.articles.find(a => a.id === comp.id);
      if (art) {
        art.stock = Math.round((art.stock - (comp.qty || 1)) * 10) / 10;
        logMovement(art.name, 'exit', comp.qty || 1, t('quickSale') + ': ' + prod.name);
      }
    });
    localStorage.setItem('stockr_articles', JSON.stringify(S.articles));
  }

  // Loyalty points
  if (S.loyaltyConfig?.enabled) {
    sale.loyaltyPoints = Math.floor(finalPrice * (S.loyaltyConfig.pointsPerFcfa || 1));
  }

  S.sales.unshift(sale);
  localStorage.setItem('stockr_sales', JSON.stringify(S.sales));
  logActivity('sale', `${prod.name} x1 — ${fmt(prod.price)} ${sym}`);
  showToast(`${t('saleConfirmed')}: ${prod.name} — ${fmt(prod.price)} ${sym}`, 'success');
  render();
}

// ── IMPROVED CSV EXPORT ─────────────────────
function exportFullCSV(type) {
  let csv = '', filename = 'stockr-export.csv';
  const sep = ',';
  const sym = S.session?.currency_symbol || 'FCFA';

  if (type === 'articles') {
    filename = 'stockr-articles.csv';
    csv = 'Nom,Stock,Unité,Seuil alerte,Prix,' + sym + ',Coût,' + sym + '\n';
    S.articles.forEach(a => {
      const stk = a.qty !== undefined ? a.qty : a.stock;
      csv += `"${a.name}",${stk},"${a.unit||''}",${a.minQty||a.min||0},${a.price||0},${a.cost||0}\n`;
    });
  } else if (type === 'sales') {
    filename = 'stockr-ventes.csv';
    csv = 'Date,Produit,Quantité,Total ' + sym + ',Bénéfice ' + sym + ',Client,Paiement\n';
    S.sales.forEach(s => {
      csv += `"${new Date(s.date).toLocaleString()}","${s.productName}",${s.qty},${s.total},${s.profit||0},"${s.clientName||''}","${s.method||''}"\n`;
    });
  } else if (type === 'clients') {
    filename = 'stockr-clients.csv';
    csv = 'Nom,Téléphone,Email,Notes,Nb achats,Total dépensé ' + sym + '\n';
    S.clients.forEach(c => {
      const sales = S.sales.filter(s => s.clientId && String(s.clientId) === String(c.id));
      const spent = sales.reduce((s,v) => s + v.total, 0);
      csv += `"${c.name}","${c.phone||''}","${c.email||''}","${(c.notes||'').replace(/"/g,'""')}",${sales.length},${spent}\n`;
    });
  } else if (type === 'suppliers') {
    filename = 'stockr-fournisseurs.csv';
    csv = 'Nom,Téléphone,Email,Notes\n';
    S.suppliers.forEach(s => {
      csv += `"${s.name}","${s.phone||''}","${s.email||''}","${(s.notes||'').replace(/"/g,'""')}"\n`;
    });
  } else if (type === 'movements') {
    filename = 'stockr-mouvements.csv';
    csv = 'Date,Article,Type,Quantité,Note\n';
    S.stockMovements.forEach(m => {
      csv += `"${new Date(m.date).toLocaleString()}","${m.article}","${m.type}",${m.qty},"${m.note||''}"\n`;
    });
  } else {
    // Export all
    exportFullCSV('articles');
    exportFullCSV('sales');
    exportFullCSV('clients');
    return;
  }

  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
  showToast(t('exportSuccess') + ': ' + filename);
}

// ── LOCATIONS ────────────────────────────────
function addLocation() {
  const nameEl = document.getElementById('loc-name');
  const addrEl = document.getElementById('loc-address');
  const phoneEl = document.getElementById('loc-phone');
  const typeEl = document.getElementById('loc-type');
  const name = nameEl?.value?.trim();
  if (!name) return;
  const loc = {
    id: Date.now(),
    name,
    address: addrEl?.value?.trim() || '',
    phone: phoneEl?.value?.trim() || '',
    type: typeEl?.value || 'store', // store, warehouse, popup
    createdAt: new Date().toISOString()
  };
  S.locations.push(loc);
  localStorage.setItem('stockr_locations', JSON.stringify(S.locations));
  S.locationAdd = false;
  logActivity('location', `Nouvel emplacement: ${name}`);
  showToast(`Emplacement "${name}" ajouté`);
  render();
}

function removeLocation(id) {
  const loc = S.locations.find(l => l.id === id);
  if (!confirm(`Supprimer l'emplacement "${loc?.name}" ? Les articles de cet emplacement ne seront plus filtrés.`)) return;
  S.locations = S.locations.filter(l => l.id !== id);
  localStorage.setItem('stockr_locations', JSON.stringify(S.locations));
  // Un-assign articles from this location
  S.articles.forEach(a => { if (a.locationId === id) a.locationId = null; });
  localStorage.setItem('stockr_articles', JSON.stringify(S.articles));
  if (S.currentLocation === id) {
    S.currentLocation = null;
    localStorage.removeItem('stockr_current_location');
  }
  render();
}

function setLocation(id) {
  S.currentLocation = id || null;
  if (id) localStorage.setItem('stockr_current_location', String(id));
  else localStorage.removeItem('stockr_current_location');
  render();
}

function setArticleLocation(articleId, locationId) {
  const art = S.articles.find(a => a.id === articleId);
  if (!art) return;
  art.locationId = locationId || null;
  localStorage.setItem('stockr_articles', JSON.stringify(S.articles));
  showToast(`Emplacement mis à jour`);
}

function getFilteredArticles() {
  if (!S.currentLocation) return S.articles;
  return S.articles.filter(a => !a.locationId || a.locationId === S.currentLocation);
}

function getLocationArticleCount(locId) {
  return S.articles.filter(a => a.locationId === locId).length;
}

function getLocationSalesTotal(locId) {
  const locArticleIds = S.articles.filter(a => a.locationId === locId).map(a => a.id);
  return S.sales.filter(s => {
    const prod = S.products.find(p => p.id === s.productId);
    if (!prod) return false;
    return (prod.composition||[]).some(c => locArticleIds.includes(c.id));
  }).reduce((sum, s) => sum + (s.total || 0), 0);
}

// ── BUSINESS LOGO ────────────────────────────
function uploadLogo() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = () => {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      // Resize to 200x200 max
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = Math.min(img.width, img.height, 200);
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        const sx = (img.width - size) / 2, sy = (img.height - size) / 2;
        ctx.drawImage(img, sx, sy, size, size, 0, 0, size, size);
        const data = canvas.toDataURL('image/jpeg', 0.8);
        localStorage.setItem('stockr_logo', data);
        showToast(t('businessLogo') + ' OK');
        render();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function removeLogo() {
  localStorage.removeItem('stockr_logo');
  render();
}

// ── CATALOG (WhatsApp) ───────────────────────
function vCatalog() {
  const prods = S.products.filter(p => p.price > 0);
  const sym = S.session?.currency_symbol || 'FCFA';
  const biz = S.session?.business || S.session?.name || '';
  const low = S.articles.filter(a => a.stock > 0 && a.stock < a.min && a.min > 0);

  if (S.catalogView === 'preview') {
    const selected = prods.filter(p => S.catalogSelected.includes(p.id));
    return `
    <div class="sub-hero">
      <button class="back-btn-dark" style="margin-bottom:14px" onclick="S.catalogView='select';render()">${IC.left}</button>
      <div class="sub-hero-title">${t('catalogTitle')}</div>
    </div>
    <div class="container">
      <div class="card" style="padding:20px;text-align:center">
        <div style="font-size:20px;font-weight:800;margin-bottom:4px">${biz}</div>
        <div style="font-size:12px;color:var(--text-3);margin-bottom:14px">${t('catalog')}</div>
        ${selected.map(p => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
          <div style="font-weight:600;font-size:14px">${p.name}</div>
          <div style="font-weight:800;color:var(--accent)">${fmt(p.price)} ${sym}</div>
        </div>`).join('')}
      </div>
      <button class="btn btn-primary" style="margin-top:12px" onclick="shareCatalogWhatsApp()">
        ${IC.whatsapp} &nbsp; ${t('catalogShare')}
      </button>
    </div>`;
  }

  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('home')">${IC.left}</button>
    <div class="sub-hero-title">${t('catalogTitle')}</div>
    <div class="sub-hero-sub">${t('catalogSub')}</div>
  </div>
  <div class="container">
    ${low.length > 0 ? `
    <div class="section-hd"><div class="section-lbl" style="color:var(--danger)">${t('catalogFomo')} — ${t('catalogLastPieces')}</div></div>
    ${low.slice(0,4).map(a => `
    <div class="card" style="margin-bottom:4px;border-left:3px solid var(--danger)">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-weight:700;font-size:13px">${a.name}</div><div style="font-size:11px;color:var(--text-3)">${a.stock} ${t('unitsRemaining')}</div></div>
        <button class="btn btn-ghost" style="font-size:11px;padding:6px 10px" onclick="shareFOMO('${a.name.replace(/'/g,"\\'")}',${a.stock})">
          ${IC.whatsapp}
        </button>
      </div>
    </div>`).join('')}` : ''}

    <div class="section-hd" style="margin-top:8px"><div class="section-lbl">${t('selectProducts')}</div></div>
    ${prods.length === 0 ? `<div class="card" style="text-align:center;padding:18px;color:var(--text-3);font-size:13px">${t('noProducts')}</div>` : prods.map(p => `
    <div class="card card-tap" style="margin-bottom:4px" onclick="toggleCatalogProduct(${p.id})">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:22px;height:22px;border-radius:6px;border:2px solid ${S.catalogSelected.includes(p.id)?'var(--accent)':'var(--border)'};background:${S.catalogSelected.includes(p.id)?'var(--accent)':'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s">
          ${S.catalogSelected.includes(p.id) ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
        </div>
        <div style="flex:1"><div style="font-weight:600;font-size:13px">${p.name}</div></div>
        <div style="font-weight:700;color:var(--accent);font-size:13px">${fmt(p.price)} ${sym}</div>
      </div>
    </div>`).join('')}

    ${S.catalogSelected.length > 0 ? `
    <button class="btn btn-primary" style="margin-top:14px" onclick="S.catalogView='preview';render()">
      ${t('catalogGenerate')} (${S.catalogSelected.length})
    </button>` : ''}
  </div>`;
}

function toggleCatalogProduct(id) {
  const idx = S.catalogSelected.indexOf(id);
  if (idx === -1) S.catalogSelected.push(id);
  else S.catalogSelected.splice(idx, 1);
  render();
}

function generateCatalogImage() {
  const sym = S.session?.currency_symbol || 'FCFA';
  const biz = S.session?.business || S.session?.name || 'Mon Commerce';
  const selected = S.products.filter(p => S.catalogSelected.includes(p.id));
  const logo = localStorage.getItem('stockr_logo');

  const W = 1080, rowH = 64, headerH = logo ? 200 : 160;
  const H = headerH + selected.length * rowH + 100;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#1a1a2e');
  grad.addColorStop(1, '#16213e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Accent line
  ctx.fillStyle = '#e94560';
  ctx.fillRect(0, 0, W, 4);

  return new Promise(resolve => {
    const draw = () => {
      let y = 40;
      // Logo
      if (logo) {
        const img = new Image();
        img.onload = () => {
          ctx.save();
          ctx.beginPath();
          ctx.arc(W/2, y + 50, 45, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(img, W/2 - 45, y + 5, 90, 90);
          ctx.restore();
          ctx.strokeStyle = '#e94560';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(W/2, y + 50, 46, 0, Math.PI * 2);
          ctx.stroke();
          drawContent(y + 110);
        };
        img.src = logo;
      } else {
        drawContent(y);
      }

      function drawContent(startY) {
        let cy = startY;
        // Business name
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 42px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(biz, W/2, cy + 40);

        // Subtitle
        ctx.fillStyle = '#e94560';
        ctx.font = '600 20px -apple-system, sans-serif';
        ctx.fillText(t('catalog').toUpperCase(), W/2, cy + 70);

        cy += 100;

        // Products
        selected.forEach((p, i) => {
          // Row bg
          ctx.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)';
          ctx.fillRect(60, cy, W - 120, rowH);

          // Product name
          ctx.fillStyle = '#ffffff';
          ctx.font = '600 24px -apple-system, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(p.name, 90, cy + 40);

          // Price
          ctx.fillStyle = '#e94560';
          ctx.font = 'bold 26px -apple-system, sans-serif';
          ctx.textAlign = 'right';
          ctx.fillText(`${fmt(p.price)} ${sym}`, W - 90, cy + 40);

          cy += rowH;
        });

        cy += 30;
        // Footer
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.font = '16px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Powered by STOCKR', W/2, cy + 20);

        resolve(canvas);
      }
    };
    draw();
  });
}

async function shareCatalogWhatsApp() {
  const sym = S.session?.currency_symbol || 'FCFA';
  const biz = S.session?.business || S.session?.name || '';
  const selected = S.products.filter(p => S.catalogSelected.includes(p.id));

  // Try canvas image share first
  try {
    const canvas = await generateCatalogImage();
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'));
    const file = new File([blob], 'catalogue-stockr.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: biz + ' — ' + t('catalog'),
        files: [file],
      });
      return;
    }
  } catch (e) { /* fallback to text */ }

  // Text fallback for WhatsApp
  const lines = [`*${biz}*`, `_${t('catalog')}_`, ''];
  selected.forEach(p => lines.push(`${p.name} — *${fmt(p.price)} ${sym}*`));
  lines.push('', `_${t('invoiceThankYou')}_`);
  window.open('https://wa.me/?text=' + encodeURIComponent(lines.join('\n')), '_blank');
}

function generateFOMOImage(name, stock) {
  const biz = S.session?.business || S.session?.name || 'Mon Commerce';
  const logo = localStorage.getItem('stockr_logo');

  const W = 1080, H = 1080;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Background
  const grad = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W);
  grad.addColorStop(0, '#dc2626');
  grad.addColorStop(1, '#991b1b');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Diagonal stripes
  ctx.save();
  ctx.globalAlpha = 0.06;
  for (let i = -H; i < W + H; i += 60) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(i, 0, 20, H);
    ctx.setTransform(1, 0, -0.5, 1, 0, 0);
  }
  ctx.restore();
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  return new Promise(resolve => {
    const drawContent = () => {
      ctx.textAlign = 'center';

      // Alert icon
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.font = '160px -apple-system, sans-serif';
      ctx.fillText('\u26A0', W/2, 220);

      // LAST PIECES
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 72px -apple-system, sans-serif';
      ctx.fillText(t('catalogLastPieces').toUpperCase(), W/2, 360);

      // Product name
      ctx.font = 'bold 56px -apple-system, sans-serif';
      ctx.fillStyle = '#fef08a';
      ctx.fillText(name, W/2, 480);

      // Stock count
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 180px -apple-system, sans-serif';
      ctx.fillText(String(stock), W/2, 680);

      ctx.font = '600 32px -apple-system, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.fillText(t('unitsRemaining').toUpperCase(), W/2, 730);

      // Hurry
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 40px -apple-system, sans-serif';
      ctx.fillText(t('catalogHurry').toUpperCase(), W/2, 820);

      // Business name
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = '600 28px -apple-system, sans-serif';
      ctx.fillText(biz, W/2, 940);

      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.font = '18px -apple-system, sans-serif';
      ctx.fillText('Powered by STOCKR', W/2, 1040);

      resolve(canvas);
    };

    if (logo) {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(W/2, 900, 30, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, W/2 - 30, 870, 60, 60);
        ctx.restore();
        drawContent();
      };
      img.onerror = drawContent;
      img.src = logo;
    } else {
      drawContent();
    }
  });
}

async function shareFOMO(name, stock) {
  const biz = S.session?.business || S.session?.name || '';

  // Try image share first
  try {
    const canvas = await generateFOMOImage(name, stock);
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'));
    const file = new File([blob], 'fomo-stockr.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: t('catalogLastPieces') + ' — ' + name,
        files: [file],
      });
      return;
    }
  } catch (e) { /* fallback to text */ }

  // Text fallback
  const msg = `*${biz}*\n\n${t('catalogLastPieces')} ${t('catalogHurry')}\n\n${name} — ${stock} ${t('unitsRemaining')}\n\n_STOCKR_`;
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}

// ── SETTINGS ──────────────────────────────────
function vSettings() {
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('home')">${IC.left}</button>
    <div class="sub-hero-title">${t('settings')}</div>
    <div class="sub-hero-sub">${S.session.email}</div>
  </div>
  <div class="container">
    <div class="settings-section">
      <div class="settings-label">${t('myAccount')}</div>
      ${S.settingsEdit ? `
      <div class="card" style="padding:14px">
        <div class="form-group">
          <label class="form-label">${t('name')}</label>
          <input class="input" id="set-name" type="text" value="${S.session.name.replace(/"/g,'&quot;')}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('business')}</label>
          <input class="input" id="set-biz" type="text" value="${(S.session.business||'').replace(/"/g,'&quot;')}">
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="input" id="set-email" type="email" value="${S.session.email.replace(/"/g,'&quot;')}">
        </div>
        <div style="display:flex;gap:8px;margin-top:4px">
          <button class="btn btn-primary" style="flex:1" onclick="saveAccountInfo()">${t('save')}</button>
          <button class="btn btn-ghost" style="flex:1" onclick="S.settingsEdit=false;render()">${t('cancel')}</button>
        </div>
      </div>
      ` : `
      <div class="settings-row-block">
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.user}</span>
            <div>
              <div class="settings-row-lbl">${S.session.name}</div>
              <div class="settings-row-sub">${S.session.business || t('business')}</div>
            </div>
          </div>
        </div>
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.info}</span>
            <div>
              <div class="settings-row-lbl">${S.session.email}</div>
              <div class="settings-row-sub">${t('emailAddr')}</div>
            </div>
          </div>
        </div>
        <div class="settings-row" onclick="S.settingsEdit=true;render()">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.settings}</span>
            <div class="settings-row-lbl">${t('modify')}</div>
          </div>
          ${IC.chevron}
        </div>
      </div>`}
    </div>

    <div class="settings-section">
      <div class="settings-label">${t('subscription')}</div>
      <div class="settings-row-block">
        <div class="settings-row" onclick="nav('subscription')">
          <div class="settings-row-inner">
            <span class="settings-row-ico" style="color:var(--accent)">${IC.logo}</span>
            <div>
              <div class="settings-row-lbl">${t('myPlan')}: <strong style="color:var(--accent)">${S.subscription.plan.toUpperCase()}</strong></div>
              <div class="settings-row-sub">${t('subscriptionManage')}</div>
            </div>
          </div>
          ${IC.chevron}
        </div>
        <div class="settings-row" onclick="nav('pricing')">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.trending}</span>
            <div class="settings-row-lbl">${t('pricing')}</div>
          </div>
          ${IC.chevron}
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">${t('appearance')}</div>
      <div class="settings-row-block">
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${S.darkMode?IC.moon:IC.sun}</span>
            <div>
              <div class="settings-row-lbl">${S.darkMode?t('darkMode'):t('lightMode')}</div>
            </div>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" ${S.darkMode?'checked':''} onchange="toggleDark()">
            <span class="toggle-track"></span>
          </label>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">${t('language')}</div>
      <div class="settings-row-block">
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            <span class="settings-row-ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </span>
            <div style="display:flex;gap:8px">
              <button onclick="setLang('fr')" style="padding:6px 14px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;border:1px solid ${_lang==='fr'?'var(--accent)':'var(--border)'};background:${_lang==='fr'?'var(--accent-light)':'transparent'};color:${_lang==='fr'?'var(--accent)':'var(--text-3)'}">Français</button>
              <button onclick="setLang('en')" style="padding:6px 14px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;border:1px solid ${_lang==='en'?'var(--accent)':'var(--border)'};background:${_lang==='en'?'var(--accent-light)':'transparent'};color:${_lang==='en'?'var(--accent)':'var(--text-3)'}">English</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">${t('currency')} / ${t('taxRate')}</div>
      <div class="settings-row-block">
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.dollar}</span>
            <div style="flex:1">
              <select class="input" style="padding:8px 10px;font-size:13px;font-weight:600" onchange="changeCurrency(this.value)">
                ${CURRENCIES.map(c => `<option value="${c.code}" ${(S.session?.currency||'XOF')===c.code?'selected':''}>${c.label}</option>`).join('')}
              </select>
            </div>
          </div>
        </div>
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.info}</span>
            <div class="settings-row-lbl">${t('taxRate')}</div>
          </div>
          <input type="number" class="input" style="width:70px;text-align:center;padding:6px" min="0" max="100" step="0.5" value="${S.session?.tax_rate||0}" onchange="changeTaxRate(this.value)">
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">${t('businessLogo')}</div>
      <div class="settings-row-block">
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            ${localStorage.getItem('stockr_logo') ? `<img src="${localStorage.getItem('stockr_logo')}" style="width:32px;height:32px;border-radius:8px;object-fit:cover;margin-right:8px">` : `<span class="settings-row-ico">${IC.camera}</span>`}
            <div class="settings-row-lbl">${localStorage.getItem('stockr_logo') ? (S.session?.business || 'Logo') : t('uploadLogo')}</div>
          </div>
          <div style="display:flex;gap:6px">
            <button class="btn btn-ghost" style="padding:6px 12px;font-size:12px" onclick="uploadLogo()">${localStorage.getItem('stockr_logo') ? t('modify') : t('uploadLogo')}</button>
            ${localStorage.getItem('stockr_logo') ? `<button class="btn btn-ghost" style="padding:6px 8px;font-size:12px;color:var(--danger)" onclick="removeLogo()">✕</button>` : ''}
          </div>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">${t('locations')} (${S.locations.length + 1})</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div class="loc-card ${!S.currentLocation?'loc-active':''}" onclick="setLocation(null)" style="cursor:pointer">
          <div class="loc-card-ico" style="background:linear-gradient(135deg,#4F46E5,#6366f1)">${IC.home}</div>
          <div class="loc-card-name">${t('allLocations')}</div>
          <div class="loc-card-count">${S.articles.length} ${t('articles').toLowerCase()}</div>
          ${!S.currentLocation?'<div class="loc-card-check">✓</div>':''}
        </div>
        ${S.locations.map((l, i) => {
          const colors = ['#059669,#10b981','#d97706,#f59e0b','#dc2626,#ef4444','#7c3aed,#8b5cf6','#0891b2,#06b6d4','#be185d,#ec4899'];
          const c = colors[i % colors.length];
          const isActive = String(S.currentLocation)===String(l.id);
          return `
        <div class="loc-card ${isActive?'loc-active':''}" onclick="setLocation(${l.id})" style="cursor:pointer">
          <div class="loc-card-ico" style="background:linear-gradient(135deg,#${c.split(',')[0].slice(1)},${c.split(',')[1]})">${IC.box}</div>
          <div class="loc-card-name">${l.name}</div>
          <div class="loc-card-count">${getLocationArticleCount(l.id)} ${t('articles').toLowerCase()}</div>
          ${l.type ? `<div style="font-size:9px;text-transform:uppercase;color:var(--accent);font-weight:600;margin-top:2px">${l.type==='store'?'Boutique':l.type==='warehouse'?'Entrepôt':'Pop-up'}</div>` : ''}
          ${isActive?'<div class="loc-card-check">✓</div>':''}
          <button onclick="event.stopPropagation();removeLocation(${l.id})" class="loc-card-del">✕</button>
        </div>`;
        }).join('')}
        ${S.locationAdd ? `
        <div class="loc-card" style="cursor:default;padding:12px;grid-column:span 2">
          <input class="input" id="loc-name" type="text" placeholder="Nom de l'emplacement" style="width:100%;margin-bottom:6px;font-size:12px">
          <input class="input" id="loc-address" type="text" placeholder="Adresse (ex: Cocody, Rue des jardins)" style="width:100%;margin-bottom:6px;font-size:12px">
          <div style="display:flex;gap:6px;margin-bottom:6px">
            <input class="input" id="loc-phone" type="tel" placeholder="Telephone" style="flex:1;font-size:12px">
            <select class="input" id="loc-type" style="flex:1;font-size:12px">
              <option value="store">Boutique</option>
              <option value="warehouse">Entrepôt</option>
              <option value="popup">Pop-up / Stand</option>
            </select>
          </div>
          <div style="display:flex;gap:4px">
            <button class="btn btn-primary" style="flex:1;padding:6px;font-size:11px" onclick="addLocation()">Ajouter</button>
            <button class="btn btn-ghost" style="padding:6px 8px;font-size:11px" onclick="S.locationAdd=false;render()">✕</button>
          </div>
        </div>` : `
        <div class="loc-card loc-add" onclick="S.locationAdd=true;render()" style="cursor:pointer">
          <div style="color:var(--accent);opacity:.6">${IC.plus}</div>
          <div class="loc-card-name" style="color:var(--accent)">${t('addLocation')}</div>
        </div>`}
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">${t('data')}</div>
      <div class="settings-row-block">
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.box}</span><div class="settings-row-lbl">${S.articles.length} ${t('articles').toLowerCase()}</div></div>
        </div>
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.tag}</span><div class="settings-row-lbl">${S.products.length} ${t('products').toLowerCase()}</div></div>
        </div>
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.dollar}</span><div class="settings-row-lbl">${S.sales.length} ${t('saleOf')}</div></div>
        </div>
        <div class="settings-row" onclick="nav('suppliers')">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.truck}</span><div><div class="settings-row-lbl">${t('suppliers')}</div><div class="settings-row-sub">${S.suppliers.length} ${t('supplierOf')}</div></div></div>
          ${IC.chevron}
        </div>
        <div class="settings-row" onclick="nav('stock-history')">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.trending}</span><div><div class="settings-row-lbl">${t('stockHistory')}</div><div class="settings-row-sub">${S.stockMovements.length} ${t('articles').toLowerCase()}</div></div></div>
          ${IC.chevron}
        </div>
        <div class="settings-row" onclick="nav('purchase-orders')">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.truck}</span><div><div class="settings-row-lbl">${t('purchaseOrders')}</div><div class="settings-row-sub">${S.purchaseOrders.filter(o=>o.status==='pending').length} ${t('orderPending').toLowerCase()}</div></div></div>
          ${IC.chevron}
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">${t('exportCSV')}</div>
      <div class="settings-row-block">
        <div class="settings-row" onclick="exportFullCSV('articles')">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.download}</span><div class="settings-row-lbl">${t('exportArticles')}</div></div>
          ${IC.chevron}
        </div>
        <div class="settings-row" onclick="exportFullCSV('sales')">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.download}</span><div class="settings-row-lbl">${t('exportSales')}</div></div>
          ${IC.chevron}
        </div>
        <div class="settings-row" onclick="exportFullCSV('clients')">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.download}</span><div class="settings-row-lbl">${t('clients')}</div></div>
          ${IC.chevron}
        </div>
        <div class="settings-row" onclick="exportFullCSV('suppliers')">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.download}</span><div class="settings-row-lbl">${t('suppliers')}</div></div>
          ${IC.chevron}
        </div>
        <div class="settings-row" onclick="exportFullCSV('movements')">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.download}</span><div class="settings-row-lbl">${t('stockHistory')}</div></div>
          ${IC.chevron}
        </div>
        <div class="settings-row" onclick="exportFullCSV('all')">
          <div class="settings-row-inner"><span class="settings-row-ico" style="color:var(--accent)">${IC.download}</span><div class="settings-row-lbl" style="color:var(--accent)">${t('exportAll')}</div></div>
          ${IC.chevron}
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">${t('session')}</div>
      <div class="settings-row-block">
        <div class="settings-row" onclick="doLogout()">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.logout}</span>
            <div class="settings-row-lbl">${t('logout')}</div>
          </div>
          ${IC.chevron}
        </div>
      </div>
    </div>

    ${_deferredInstall ? `
    <div class="settings-section">
      <div class="settings-label">${t('app')}</div>
      <div class="settings-row-block">
        <div class="settings-row" onclick="installPWA()">
          <div class="settings-row-inner">
            <span class="settings-row-ico" style="color:var(--accent)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </span>
            <div>
              <div class="settings-row-lbl" style="color:var(--accent)">${t('installApp')}</div>
              <div class="settings-row-sub">${t('installSub')}</div>
            </div>
          </div>
          ${IC.chevron}
        </div>
      </div>
    </div>` : ''}

    <div style="text-align:center;padding:24px 0 8px;font-size:11px;color:var(--text-3)">STOCKR · v2.0.0 · 2026</div>
  </div>`;
}

// ══════════════════════════════════════════════
// ██ STOCKR v2 — NOUVELLES FONCTIONNALITÉS
// ══════════════════════════════════════════════

// ── MORE MENU ────────────────────────────────
function vMore() {
  const pendingOrders = S.purchaseOrders.filter(o => o.status === 'pending').length;
  const activePromos = (S.promotions || []).filter(p => p.active).length;
  const connectedSocial = (S.socialAccounts || []).filter(a => a.connected).length;
  const activePayments = (S.paymentMethods || []).filter(p => p.active).length;

  const items = [
    { id:'clients',         icon:IC.users,      label:t('clients')||'Clients',          sub:`${S.clients.length} client(s)`, color:'#0ea5e9' },
    { id:'boutique',        icon:IC.shop,       label:t('boutique')||'Boutique',        sub:'Boutique en ligne',       color:'#4F46E5', badge: S.boutiqueConfig?.published ? '●' : null },
    { id:'marketing',       icon:IC.megaphone,  label:t('marketing')||'Marketing',     sub:`${activePromos} promo(s)`, color:'#dc2626', badge: activePromos || null },
    { id:'social-media',    icon:IC.share2,     label:t('socialMedia')||'Reseaux',     sub:`${connectedSocial} connecte(s)`, color:'#e1306c' },
    { id:'payments-setup',  icon:IC.wallet,     label:t('payments')||'Paiements',      sub:`${activePayments} actif(s)`, color:'#ff6600' },
    { id:'purchase-orders', icon:IC.truck,      label:t('purchaseOrders')||'Commandes', sub:`${pendingOrders} en attente`, color:'#059669', badge: pendingOrders || null },
    { id:'integrations',    icon:IC.link,       label:t('integrations')||'Integrations', sub:'Apps & services',         color:'#7c3aed' },
    { id:'suppliers',       icon:IC.package,    label:t('suppliers')||'Fournisseurs',  sub:`${S.suppliers.length} enregistre(s)`, color:'#0891b2' },
    { id:'stock-history',   icon:IC.trending,   label:t('stockHistory')||'Mouvements', sub:`${S.stockMovements.length} entrees`, color:'#334155' },
    { id:'spectra',         icon:IC.camera,     label:'Spectra AI',                    sub:'Scanner & compter',        color:'#6366f1' },
    { id:'catalog',         icon:IC.pdf,        label:t('catalog')||'Catalogue',       sub:'WhatsApp & PDF',           color:'#16a34a' },
    { id:'pricing',         icon:IC.star,       label:t('pricing')||'Tarifs',          sub:t('myPlan')||'Mon plan',    color:'#eab308' },
    { id:'settings',        icon:IC.settings,   label:t('settings')||'Parametres',     sub:t('myAccount')||'Compte',   color:'#64748b' },
  ];

  return `
  <div class="page-header">
    <div class="page-header-row">
      <button class="back-btn" onclick="nav('home')">${IC.left}</button>
      <div class="page-title">${t('more')||'Plus'}</div>
    </div>
  </div>
  <div class="container">
    <div class="more-grid">
      ${items.map((it,i) => `
      <div class="more-item anim" onclick="nav('${it.id}')" style="animation-delay:${i*30}ms">
        ${it.badge ? `<div class="more-badge">${it.badge}</div>` : ''}
        <div class="more-ico" style="background:${it.color}15;color:${it.color}">${it.icon}</div>
        <div class="more-lbl">${it.label}</div>
        <div class="more-sub">${it.sub}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

// ── BOUTIQUE EN LIGNE ────────────────────────
function vBoutique() {
  const bc = S.boutiqueConfig || {};
  const shopProducts = S.products.filter(p => (bc.products || []).includes(p.id));
  const orders = S.boutiqueOrders || [];
  const pendingOrders = orders.filter(o => o.status === 'pending');

  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:14px">
      <button class="back-btn-dark" onclick="nav('more')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">${t('boutiqueTitle')||'Ma Boutique en ligne'}</div>
        <div class="sub-hero-sub">${bc.published ? (t('boutiquePublish')||'Publiée') : (t('boutiqueDraft')||'Brouillon')}</div>
      </div>
      <label class="toggle-switch" style="flex-shrink:0">
        <input type="checkbox" ${bc.published?'checked':''} onchange="toggleBoutiquePublish(this.checked)">
        <span class="toggle-track"></span>
      </label>
    </div>
    <div style="display:flex;gap:8px">
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${shopProducts.length}</div><div class="hero-stat-lbl">${t('products')}</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${pendingOrders.length}</div><div class="hero-stat-lbl">Commandes</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${bc.visits || 0}</div><div class="hero-stat-lbl">Visites</div></div>
    </div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Configuration</div>
      <div class="form-group">
        <label class="form-label">Nom de la boutique</label>
        <input class="input" value="${bc.name || S.session?.business || ''}" oninput="updateBoutiqueConfig('name',this.value)" placeholder="${S.session?.business || 'Ma Boutique'}">
      </div>
      <div class="form-group">
        <label class="form-label">Description</label>
        <input class="input" value="${bc.description || ''}" oninput="updateBoutiqueConfig('description',this.value)" placeholder="Décrivez votre boutique...">
      </div>
      <div class="form-group">
        <label class="form-label">Frais de livraison (${sym()})</label>
        <input class="input" type="number" value="${bc.deliveryFees || 0}" oninput="updateBoutiqueConfig('deliveryFees',parseFloat(this.value)||0)">
      </div>
      <div class="form-group">
        <label class="form-label">Zones de livraison</label>
        <div class="zone-chips">
          ${['Abidjan','Cocody','Plateau','Yopougon','Marcory','Treichville','Adjamé','Abobo','Bouaké','San-Pédro','Yamoussoukro','Daloa','Man','Korhogo'].map(z => `
          <span class="zone-chip ${(bc.deliveryZones||[]).includes(z)?'active':''}" onclick="toggleDeliveryZone('${z}')">${z}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.phone} Contact & Apparence</div>
      <div class="form-group">
        <label class="form-label">Numéro WhatsApp Business</label>
        <input class="input" type="tel" value="${bc.whatsappNumber || ''}" oninput="updateBoutiqueConfig('whatsappNumber',this.value)" placeholder="+225 07 XX XX XX XX">
        <div style="font-size:10px;color:var(--text-3);margin-top:2px">Les clients commanderont via ce numéro</div>
      </div>
      <div class="form-group">
        <label class="form-label">Couleur du thème</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${[
            {id:'indigo',  color:'#4F46E5', name:'Indigo'},
            {id:'emerald', color:'#059669', name:'Émeraude'},
            {id:'rose',    color:'#E11D48', name:'Rose'},
            {id:'amber',   color:'#D97706', name:'Ambre'},
            {id:'sky',     color:'#0284C7', name:'Ciel'},
            {id:'purple',  color:'#7C3AED', name:'Violet'},
            {id:'orange',  color:'#EA580C', name:'Orange'},
            {id:'teal',    color:'#0D9488', name:'Turquoise'},
          ].map(c => `
          <div onclick="updateBoutiqueConfig('themeColor','${c.color}');render()" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px">
            <div style="width:36px;height:36px;border-radius:50%;background:${c.color};border:3px solid ${(bc.themeColor||'#4F46E5')===c.color?'#000':'transparent'};transition:.2s"></div>
            <span style="font-size:9px;color:var(--text-3)">${c.name}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Logo de la boutique</label>
        <div style="display:flex;align-items:center;gap:10px">
          ${localStorage.getItem('stockr_logo') ? `<img src="${localStorage.getItem('stockr_logo')}" style="width:48px;height:48px;border-radius:10px;object-fit:cover">` : `<div style="width:48px;height:48px;border-radius:10px;background:var(--gray-1);display:flex;align-items:center;justify-content:center;color:var(--text-3)">${IC.camera}</div>`}
          <div>
            <div style="font-size:11px;color:var(--text-3)">Utilisé dans le site et les factures</div>
            <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px;margin-top:4px" onclick="uploadLogo()">Changer le logo</button>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Moyens de paiement acceptés</label>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${(S.paymentMethods||[]).filter(m=>m.active).map(m => `
          <span style="background:var(--accent-light);color:var(--accent);padding:4px 10px;border-radius:8px;font-size:11px;font-weight:600">${m.name}</span>`).join('') || '<span style="font-size:12px;color:var(--text-3)">Aucun — configurez dans Paiements</span>'}
        </div>
        <button class="btn btn-ghost" style="font-size:11px;margin-top:6px" onclick="nav('payments')">Gérer les paiements →</button>
      </div>
    </div>

    <div class="section-hd"><span class="section-lbl">Outils avancés du site</span></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <button class="boutique-tool-card" onclick="nav('boutique-appearance')">
        <div class="btc-ico" style="background:#4F46E510;color:#4F46E5">🎨</div>
        <div class="btc-txt">
          <div class="btc-title">Apparence</div>
          <div class="btc-sub">Thème, couleurs, organisation</div>
        </div>
      </button>
      <button class="boutique-tool-card" onclick="nav('boutique-domain')">
        <div class="btc-ico" style="background:#05966910;color:#059669">🌐</div>
        <div class="btc-txt">
          <div class="btc-title">Domaine</div>
          <div class="btc-sub">${bc.customDomain || bc.domain ? (bc.customDomain||bc.domain+'.stockr.shop') : 'Configurer URL'}</div>
        </div>
      </button>
      <button class="boutique-tool-card" onclick="nav('boutique-pixels')">
        <div class="btc-ico" style="background:#DC262610;color:#DC2626">📊</div>
        <div class="btc-txt">
          <div class="btc-title">Pixels & Tracking</div>
          <div class="btc-sub">Facebook, TikTok, Google</div>
        </div>
      </button>
      <button class="boutique-tool-card" onclick="nav('boutique-code')">
        <div class="btc-ico" style="background:#F59E0B10;color:#F59E0B">&lt;/&gt;</div>
        <div class="btc-txt">
          <div class="btc-title">Code personnalisé</div>
          <div class="btc-sub">CSS, HTML, JS avancé</div>
        </div>
      </button>
    </div>

    <div class="card" style="margin-bottom:10px;border:2px dashed var(--accent)">
      <div class="card-title">${IC.globe} Génération du site</div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:10px">Générez votre site en un clic — toutes vos promos, bannières, avis seront inclus</div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-primary" style="flex:1" onclick="generateBoutiqueSite()">${IC.check} Générer HTML</button>
        <button class="btn btn-ghost" style="flex:1" onclick="previewBoutiqueSite()">${IC.globe} Aperçu</button>
      </div>
      ${bc.siteGenerated ? `
      <div style="margin-top:10px;padding:8px 12px;background:var(--success-light,#D1FAE5);border-radius:8px;font-size:12px;color:var(--success);font-weight:600;display:flex;align-items:center;gap:6px">
        ${IC.check} Site généré le ${new Date(bc.siteGeneratedDate).toLocaleDateString('fr')}
      </div>` : ''}
    </div>

    <div class="section-hd">
      <span class="section-lbl">Produits en vitrine (${shopProducts.length})</span>
    </div>
    ${S.products.length === 0 ? `
    <div class="empty" style="padding:24px">
      <div class="empty-ico">${IC.inbox}</div>
      <div class="empty-text">Aucun produit. Crée des produits d'abord.</div>
      <button class="btn btn-primary" style="max-width:200px" onclick="nav('products')">Voir produits</button>
    </div>` : `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${S.products.map(p => {
        const selected = (bc.products || []).includes(p.id);
        return `
      <div class="boutique-product" style="cursor:pointer;border-color:${selected?'var(--accent)':'var(--border)'};background:${selected?'var(--accent-light)':'var(--surface)'}" onclick="toggleBoutiqueProduct(${p.id})">
        <div class="boutique-product-img">${IC.package}</div>
        <div class="boutique-product-name">${p.name}</div>
        <div class="boutique-product-price">${fmt(p.price)} ${sym()}</div>
        ${selected ? '<div style="color:var(--accent);font-size:11px;font-weight:700;margin-top:4px">✓ En vitrine</div>' : ''}
      </div>`;}).join('')}
    </div>`}

    <div class="section-hd"><span class="section-lbl">Partager</span></div>
    <div class="card" style="margin-bottom:14px">
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" style="flex:1" onclick="shareBoutiqueWhatsApp()">${IC.whatsapp} WhatsApp</button>
        <button class="btn btn-ghost" style="flex:1" onclick="copyBoutiqueLink()">Copier le lien</button>
      </div>
    </div>

    <div class="section-hd">
      <span class="section-lbl">Commandes recues (${orders.length})</span>
      <button class="fab" style="width:32px;height:32px" onclick="addBoutiqueOrder()">${IC.plus}</button>
    </div>
    ${orders.length === 0 ? `
    <div class="card" style="text-align:center;padding:20px">
      <div style="color:var(--text-3);font-size:13px;margin-bottom:8px">Aucune commande pour le moment</div>
      <button class="btn btn-ghost" style="font-size:12px" onclick="addBoutiqueOrder()">Ajouter manuellement</button>
    </div>` : orders.slice(0,20).map(o => `
    <div class="card" style="margin-bottom:8px;border-left:4px solid ${o.status==='pending'?'var(--warning)':o.status==='confirmed'?'var(--accent)':o.status==='delivered'?'var(--success)':'var(--gray-4)'}">
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div>
          <div style="font-weight:700;font-size:14px">${o.clientName||'Client'}</div>
          <div style="font-size:12px;color:var(--text-3);margin-top:2px">${o.phone||''} ${o.zone?'· '+o.zone:''}</div>
          <div style="font-size:12px;color:var(--text-2);margin-top:4px">${(o.items||[]).map(i=>i.name+' x'+i.qty).join(', ')}</div>
          <div style="font-size:11px;color:var(--text-3);margin-top:4px">${fmtDate(o.date)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-weight:700;font-size:15px">${fmt(o.total||0)} ${sym()}</div>
          <span style="font-size:10px;padding:2px 8px;border-radius:4px;font-weight:600;background:${o.status==='pending'?'var(--warning)':o.status==='confirmed'?'var(--accent)':o.status==='delivered'?'var(--success)':'var(--gray-4)'}20;color:${o.status==='pending'?'var(--warning)':o.status==='confirmed'?'var(--accent)':o.status==='delivered'?'var(--success)':'var(--text-3)'}">${o.status==='pending'?'En attente':o.status==='confirmed'?'Confirmee':o.status==='delivered'?'Livree':'Annulee'}</span>
        </div>
      </div>
      ${o.status==='pending'?`
      <div style="display:flex;gap:6px;margin-top:10px">
        <button class="btn btn-primary" style="flex:1;font-size:12px;padding:8px" onclick="updateOrderStatus(${o.id},'confirmed')">Confirmer</button>
        <button class="btn btn-ghost" style="font-size:12px;padding:8px" onclick="updateOrderStatus(${o.id},'cancelled')">Annuler</button>
      </div>`:o.status==='confirmed'?`
      <div style="display:flex;gap:6px;margin-top:10px">
        <button class="btn btn-primary" style="flex:1;font-size:12px;padding:8px" onclick="updateOrderStatus(${o.id},'delivered')">Marquer livree</button>
        <button class="btn btn-ghost" style="font-size:12px;padding:8px" onclick="contactOrderClient(${o.id})">Contacter</button>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <button class="btn btn-ghost" style="flex:1;font-size:11px;padding:6px;background:#FF4D0010;color:#FF4D00;border-color:#FF4D0040" onclick="createYangoDelivery(${o.id})">${IC.truck} Yango</button>
        <button class="btn btn-ghost" style="flex:1;font-size:11px;padding:6px;background:#FFC24410;color:#B8860B;border-color:#FFC24440" onclick="createGlovoDelivery(${o.id})">${IC.truck} Glovo</button>
        <button class="btn btn-ghost" style="flex:1;font-size:11px;padding:6px;background:#1DC3FF10;color:#1DC3FF;border-color:#1DC3FF40" onclick="requestPaymentWhatsApp(${o.total||0},'${(o.phone||'').replace(/'/g,'')}','Commande #${o.id}')">${IC.creditCard} Paiement</button>
      </div>`:''}
    </div>`).join('')}
  </div>`;
}

function toggleBoutiquePublish(val) {
  S.boutiqueConfig.published = val;
  localStorage.setItem('stockr_boutique', JSON.stringify(S.boutiqueConfig));
  showToast(val ? 'Boutique publiée !' : 'Boutique en brouillon');
  render();
}
function updateBoutiqueConfig(key, val) {
  S.boutiqueConfig[key] = val;
  localStorage.setItem('stockr_boutique', JSON.stringify(S.boutiqueConfig));
}
function generateBoutiqueSite() {
  const bc = S.boutiqueConfig;
  if (!bc.domain) { showToast('Entrez un nom de domaine', 'error'); return; }
  const shopProds = S.products.filter(p => (bc.products||[]).includes(p.id));
  if (shopProds.length === 0) { showToast('Ajoutez des produits en vitrine', 'error'); return; }
  const tc = bc.themeColor || '#4F46E5';
  const waNum = (bc.whatsappNumber || '').replace(/\s/g, '').replace(/^\+/, '');
  const waLink = waNum ? `https://wa.me/${waNum}` : 'https://wa.me/';
  const payments = (S.paymentMethods||[]).filter(m => m.active);
  const payHTML = payments.length > 0 ? payments.map(m => `<span class="pay-badge">${m.name}</span>`).join('') : '<span class="pay-badge">Espèces</span>';
  const logo = localStorage.getItem('stockr_logo');
  // ── Configuration avancée (apparence / pixels / code / toggles) ──
  const px  = bc.pixels     || {};
  const cc  = bc.customCode || {};
  const borderRadius = (bc.borderStyle === 'square') ? '2px' : '16px';
  const iconRadius   = (bc.borderStyle === 'square') ? '2px' : '14px';
  const btnRadius    = (bc.borderStyle === 'square') ? '2px' : '10px';
  const btnAnim = bc.buttonAnimation || 'rebond';
  const font = bc.fontFamily || 'Inter';
  const fontStack = (font === 'Inter' || font === 'system') ? "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" : `'${font}',system-ui,sans-serif`;
  const fontImport = (font && font !== 'Inter' && font !== 'system') ?
    `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=${encodeURIComponent(font)}:wght@400;600;700;800&display=swap" rel="stylesheet">` : '';
  // Organisation toggles (défaut true si non défini)
  const showFeatured    = bc.showFeatured    !== false;
  const showCartButton  = bc.showCartButton  !== false;
  const showReviews     = bc.showReviews     !== false;
  const showPromoBadges = bc.showPromoBadges !== false;
  const showStockCount  = bc.showStockCount  !== false;
  const showCategories  = bc.showCategories  !== false;
  // URL publique (domaine personnalisé si vérifié)
  const publicUrl = (bc.customDomainVerified && bc.customDomain) ? `https://${bc.customDomain}` : `https://${bc.domain}.stockr.shop`;

  // ── Snippets pixels ──
  const fbPixelHead = (px.facebookPixel_enabled && px.facebookPixel) ? `
<!-- Meta Pixel -->
<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${px.facebookPixel}');fbq('track','PageView');</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${px.facebookPixel}&ev=PageView&noscript=1"/></noscript>` : '';
  const ttPixelHead = (px.tiktokPixel_enabled && px.tiktokPixel) ? `
<!-- TikTok Pixel -->
<script>!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods="page,track,identify,instances,debug,on,off,once,ready,alias,group,enableCookie,disableCookie".split(","),ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=r+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${px.tiktokPixel}');ttq.page();}(window,document,'ttq');</script>` : '';
  const gaHead = (px.googleAnalytics_enabled && px.googleAnalytics) ? `
<!-- GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${px.googleAnalytics}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${px.googleAnalytics}');</script>` : '';
  const gtmHead = (px.googleTagMgr_enabled && px.googleTagMgr) ? `
<!-- GTM -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${px.googleTagMgr}');</script>` : '';
  const gtmBody = (px.googleTagMgr_enabled && px.googleTagMgr) ? `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${px.googleTagMgr}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>` : '';
  const snapHead = (px.snapPixel_enabled && px.snapPixel) ? `
<!-- Snapchat Pixel -->
<script>(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function(){a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};a.queue=[];var s='script';r=t.createElement(s);r.async=!0;r.src=n;var u=t.getElementsByTagName(s)[0];u.parentNode.insertBefore(r,u)})(window,document,'https://sc-static.net/scevent.min.js');snaptr('init','${px.snapPixel}');snaptr('track','PAGE_VIEW');</script>` : '';
  const customJsBody = (px.customJs_enabled && px.customJs) ? `<script>${px.customJs}</script>` : '';

  // ── Animations de bouton (CSS) ──
  const btnAnimCss = {
    none:   '',
    rebond: '@keyframes btnBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.order-btn{animation:btnBounce 1.4s ease-in-out infinite}',
    pulse:  '@keyframes btnPulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(37,211,102,.5)}50%{transform:scale(1.04);box-shadow:0 0 0 8px rgba(37,211,102,0)}}.order-btn{animation:btnPulse 1.8s infinite}',
    shake:  '@keyframes btnShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-2px)}75%{transform:translateX(2px)}}.order-btn{animation:btnShake .6s ease-in-out infinite}',
    glow:   '@keyframes btnGlow{0%,100%{box-shadow:0 0 8px rgba(37,211,102,.4)}50%{box-shadow:0 0 20px rgba(37,211,102,.9)}}.order-btn{animation:btnGlow 1.6s ease-in-out infinite}',
  }[btnAnim] || '';
  // Active banners (filter by date)
  const today = new Date().toISOString().slice(0,10);
  const activeBanners = (S.banners||[]).filter(b => b.active && (b.startDate||'')<=today && (b.endDate||'9999')>=today);
  const topBanner = activeBanners.find(b => b.position !== 'bottom');
  const bottomBanner = activeBanners.find(b => b.position === 'bottom');
  const bannerHTML = (b, pos) => b ? `<div class="banner banner-${pos}" style="background:${b.bgColor};color:${b.textColor}">
    <span style="font-size:18px">${b.emoji||''}</span>
    <span style="flex:1">${b.text}</span>
    ${b.linkText?`<a href="${b.linkUrl||'#'}" style="background:rgba(255,255,255,0.25);padding:6px 14px;border-radius:6px;font-size:11px;font-weight:700;color:inherit;text-decoration:none">${b.linkText}</a>`:''}
    ${b.dismissible!==false?`<button onclick="this.parentElement.style.display='none'" style="background:none;border:none;color:inherit;font-size:18px;cursor:pointer;padding:0 6px;opacity:.7">×</button>`:''}
  </div>` : '';

  // Active popup
  const activePopup = (S.popups||[]).find(p => p.active && (p.startDate||'')<=today && (p.endDate||'9999')>=today);
  const popupHTML = activePopup ? `<div id="popup-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:1000;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px)" onclick="if(event.target===this)closePopup()">
    <div style="background:${activePopup.bgColor};color:${activePopup.textColor};border-radius:16px;padding:32px 24px;max-width:400px;width:100%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.4);animation:popupIn .4s ease-out">
      <button onclick="closePopup()" style="position:absolute;top:12px;right:12px;background:rgba(255,255,255,0.2);border:none;color:${activePopup.textColor};width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:18px;font-weight:700">×</button>
      <div style="font-size:48px;margin-bottom:12px">${activePopup.emoji||'🎉'}</div>
      <div style="font-size:22px;font-weight:800;margin-bottom:10px;line-height:1.2">${activePopup.title}</div>
      <div style="font-size:14px;opacity:.95;margin-bottom:18px;line-height:1.5">${activePopup.message||''}</div>
      ${activePopup.promoCode?`<div style="background:rgba(255,255,255,0.25);padding:10px 18px;border-radius:10px;font-family:monospace;font-weight:800;letter-spacing:3px;display:inline-block;margin-bottom:16px;font-size:16px;cursor:pointer" onclick="navigator.clipboard.writeText('${activePopup.promoCode}');this.innerHTML='✓ Copié !'">${activePopup.promoCode}</div>`:''}
      <div><a href="${activePopup.ctaUrl||waLink}" target="_blank" onclick="closePopup()" style="display:inline-block;background:rgba(255,255,255,0.25);color:${activePopup.textColor};padding:12px 28px;border-radius:10px;font-weight:700;text-decoration:none;backdrop-filter:blur(4px)">${activePopup.ctaText||'En profiter'}</a></div>
    </div>
  </div>
  <script>
  (function(){
    var trig='${activePopup.trigger}', val=${activePopup.triggerValue||5}, once=${activePopup.showOnce!==false};
    var key='stockr_popup_${activePopup.id}';
    if(once && localStorage.getItem(key))return;
    function show(){document.getElementById('popup-overlay').style.display='flex';if(once)localStorage.setItem(key,'1');}
    window.closePopup=function(){document.getElementById('popup-overlay').style.display='none';};
    if(trig==='entry'){setTimeout(show,300);}
    else if(trig==='time'){setTimeout(show,val*1000);}
    else if(trig==='scroll'){window.addEventListener('scroll',function onScroll(){var p=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;if(p>=val){show();window.removeEventListener('scroll',onScroll);}});}
    else if(trig==='exit'){document.addEventListener('mouseleave',function onExit(e){if(e.clientY<=0){show();document.removeEventListener('mouseleave',onExit);}});}
  })();
  </script>
  <style>@keyframes popupIn{from{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}</style>` : '';

  // Reviews (approved only)
  const approvedReviews = (S.reviews||[]).filter(r => r.approved);
  const avgRating = approvedReviews.length > 0 ? (approvedReviews.reduce((s,r)=>s+r.rating,0)/approvedReviews.length).toFixed(1) : 0;
  const reviewsHTML = approvedReviews.length > 0 ? `<div class="reviews-section">
    <div class="reviews-title">
      <div style="font-size:24px;font-weight:800;color:#F59E0B">${avgRating} / 5</div>
      <div style="font-size:22px;color:#F59E0B;letter-spacing:2px">${'★'.repeat(Math.round(avgRating))}${'☆'.repeat(5-Math.round(avgRating))}</div>
      <div style="font-size:12px;color:#666;margin-top:4px">${approvedReviews.length} avis clients vérifiés</div>
    </div>
    ${approvedReviews.slice(0,6).map(r => `
    <div class="review">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
        <div style="width:36px;height:36px;border-radius:50%;background:${tc};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800">${(r.clientName||'?').charAt(0).toUpperCase()}</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:13px">${r.clientName} ${r.verified?'<span style="color:#10B981;font-size:11px">✓ Vérifié</span>':''}</div>
          <div style="color:#F59E0B;font-size:13px;letter-spacing:1px">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        </div>
      </div>
      <div style="font-size:13px;color:#444;line-height:1.5">${r.comment||''}</div>
    </div>`).join('')}
  </div>` : '';

  const prodsHTML = shopProds.map(p => {
    const promo = _getActivePromo(p.id);
    const promoPrice = promo ? _applyPromoValue(p.price, promo) : null;
    return `<div class="product">
      <div class="product-top">
        <div class="product-icon">${p.name.charAt(0).toUpperCase()}</div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          ${showCategories && p.category ? `<div style="font-size:11px;color:#999;margin-top:2px">${p.category}</div>` : ''}
          ${showPromoBadges && promo ? `<div class="product-promo">${promo.type==='fixed'?'-'+fmt(promo.value)+sym():'-'+(promo.value||promo.discount)+'%'} ${promo.name}</div>` : ''}
        </div>
      </div>
      <div class="product-bottom">
        <div>
          <div class="product-price">${promo ? `<span class="old-price">${fmt(p.price)}</span> ${fmt(promoPrice)}` : fmt(p.price)} ${sym()}</div>
          ${showStockCount && p.qty>0 ? `<div style="font-size:11px;color:#10B981;margin-top:2px;font-weight:600">✓ En stock (${p.qty})</div>` : ''}
          ${showStockCount && p.qty===0 ? `<div style="font-size:11px;color:#EF4444;margin-top:2px;font-weight:600">⚠ Rupture</div>` : ''}
        </div>
        ${showCartButton ? `<button class="order-btn" onclick="window.open('${waLink}?text='+encodeURIComponent('Bonjour, je voudrais commander : ${p.name.replace(/'/g, "\\'")} ${promo ? '(PROMO code '+promo.code+') '+fmt(promoPrice) : fmt(p.price)} ${sym()}'))">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
          Commander
        </button>` : ''}
      </div>
    </div>`;
  }).join('\n');
  const html = `<!DOCTYPE html>
<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${bc.name||S.session?.business||'Ma Boutique'}</title>
<meta name="description" content="${bc.description || 'Boutique en ligne'}">
<meta property="og:title" content="${bc.name||S.session?.business||'Ma Boutique'}">
<meta property="og:description" content="${bc.description || 'Boutique en ligne'}">
<meta property="og:url" content="${publicUrl}">
<link rel="canonical" href="${publicUrl}">
<link rel="icon" type="image/png" href="${logo || ''}">
${fontImport}
${fbPixelHead}
${ttPixelHead}
${gaHead}
${gtmHead}
${snapHead}
${cc.head || ''}
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:${fontStack};background:#f5f5f7;color:#1d1d1f;-webkit-font-smoothing:antialiased}
.header{background:linear-gradient(135deg,${tc},${tc}cc);color:#fff;padding:48px 20px 36px;text-align:center;position:relative;overflow:hidden}
.header::before{content:'';position:absolute;top:-60%;left:-20%;width:140%;height:200%;background:radial-gradient(circle,rgba(255,255,255,.1) 0%,transparent 70%);pointer-events:none}
.header-logo{width:64px;height:64px;border-radius:16px;object-fit:cover;margin-bottom:12px;border:3px solid rgba(255,255,255,.3);box-shadow:0 4px 20px rgba(0,0,0,.2)}
.header h1{font-size:26px;font-weight:800;letter-spacing:-.5px}
.header p{opacity:.85;margin-top:8px;font-size:14px;max-width:400px;margin-left:auto;margin-right:auto}
.container{max-width:640px;margin:0 auto;padding:16px}
.info-bar{background:#fff;border-radius:14px;padding:14px 18px;margin:-24px 16px 16px;position:relative;z-index:1;box-shadow:0 4px 20px rgba(0,0,0,.06);display:flex;gap:16px;justify-content:center;flex-wrap:wrap;font-size:12px;color:#666}
.info-item{display:flex;align-items:center;gap:6px}
.product{background:#fff;border-radius:${borderRadius};padding:18px;margin-bottom:14px;box-shadow:0 2px 12px rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.04);transition:transform .2s,box-shadow .2s}
.product:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08)}
.product-top{display:flex;gap:14px;align-items:flex-start}
.product-icon{width:52px;height:52px;border-radius:${iconRadius};background:${tc}15;color:${tc};display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;flex-shrink:0}
.product-info{flex:1}
.product-name{font-weight:700;font-size:16px;line-height:1.3}
.product-promo{display:inline-block;background:#ef444420;color:#ef4444;padding:2px 8px;border-radius:6px;font-size:11px;font-weight:700;margin-top:4px}
.product-bottom{display:flex;justify-content:space-between;align-items:center;margin-top:14px;padding-top:14px;border-top:1px solid #f0f0f0}
.product-price{font-weight:800;font-size:20px;color:${tc}}
.old-price{text-decoration:line-through;color:#aaa;font-size:14px;font-weight:500;margin-right:6px}
.order-btn{background:#25D366;color:#fff;border:none;border-radius:${btnRadius};padding:10px 18px;font-weight:700;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:6px;transition:transform .15s,background .15s}
.order-btn:hover{background:#20bd5a;transform:scale(1.03)}
.pay-section{background:#fff;border-radius:14px;padding:16px;margin-bottom:14px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,.03)}
.pay-section-title{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:10px;font-weight:600}
.pay-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:6px}
.pay-badge{background:${tc}12;color:${tc};padding:6px 14px;border-radius:10px;font-size:12px;font-weight:600}
.delivery-info{text-align:center;font-size:13px;color:#666;margin:8px 0;padding:12px;background:#fff;border-radius:14px;box-shadow:0 2px 8px rgba(0,0,0,.03)}
.footer{text-align:center;padding:32px 20px;font-size:12px;color:#aaa}
.footer a{color:${tc};text-decoration:none;font-weight:600}
.wa-float{position:fixed;bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(37,211,102,.4);cursor:pointer;z-index:99;transition:transform .2s}
.wa-float:hover{transform:scale(1.1)}
.wa-float svg{width:28px;height:28px}
.banner{display:flex;align-items:center;gap:10px;padding:10px 16px;font-size:13px;font-weight:600}
.banner-top{position:sticky;top:0;z-index:50}
.banner-bottom{position:sticky;bottom:0;z-index:50}
.reviews-section{background:linear-gradient(135deg,#FEF3C7,#fff);border-radius:14px;padding:20px 16px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.03)}
.reviews-title{text-align:center;margin-bottom:16px}
.review{background:#fff;border-radius:12px;padding:14px;margin-bottom:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.03)}
.review:last-child{margin-bottom:0}
@media(max-width:480px){.header{padding:36px 16px 28px}.header h1{font-size:22px}.product-price{font-size:17px}.info-bar{margin:-20px 12px 12px;padding:10px 14px}}
${btnAnimCss}
${cc.css || ''}
</style></head><body>
${gtmBody}
${bannerHTML(topBanner, 'top')}
<div class="header">
  ${logo ? `<img src="${logo}" class="header-logo" alt="Logo">` : ''}
  <h1>${bc.name||S.session?.business||'Ma Boutique'}</h1>
  <p>${bc.description||'Bienvenue ! Découvrez nos produits et commandez en un clic'}</p>
</div>
<div class="info-bar">
  ${(bc.deliveryZones||[]).length>0?`<div class="info-item">📍 ${(bc.deliveryZones||[]).slice(0,4).join(', ')}${(bc.deliveryZones||[]).length>4?' +'+((bc.deliveryZones||[]).length-4):''}</div>`:''}
  ${bc.deliveryFees>0?`<div class="info-item">🚚 Livraison : ${fmt(bc.deliveryFees)} ${sym()}</div>`:'<div class="info-item">🚚 Livraison disponible</div>'}
  <div class="info-item">💬 Commande via WhatsApp</div>
</div>
<div class="container">
${cc.body || ''}
${prodsHTML}
${showReviews ? reviewsHTML : ''}
<div class="pay-section">
  <div class="pay-section-title">Moyens de paiement acceptés</div>
  <div class="pay-badges">${payHTML}</div>
</div>
${(bc.deliveryZones||[]).length>0?`<div class="delivery-info">🏙️ Zones de livraison : ${(bc.deliveryZones||[]).join(' • ')}</div>`:''}
</div>
${bannerHTML(bottomBanner, 'bottom')}
${popupHTML}
<div class="footer">
  <div style="margin-bottom:8px">${bc.name||S.session?.business||'Ma Boutique'}</div>
  Propulsé par <a href="#">STOCKR</a>
</div>
${waNum?`<a href="${waLink}" target="_blank" class="wa-float"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg></a>`:''}
${customJsBody}
${cc.js ? `<script>${cc.js}<\/script>` : ''}
</body></html>`;
  // Download as HTML file
  const blob = new Blob([html], {type:'text/html;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `${bc.domain||'boutique'}.html`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  bc.siteGenerated = true;
  bc.siteGeneratedDate = new Date().toISOString();
  localStorage.setItem('stockr_boutique', JSON.stringify(bc));
  logActivity('boutique', `Site genere : ${publicUrl}`);
  showToast('Site telecharge ! Hebergez-le sur votre domaine.');
  render();
}
// ═══════════════════════════════════════════════
// APPARENCE — templates, couleurs, organisation
// ═══════════════════════════════════════════════
function vBoutiqueAppearance() {
  const bc = S.boutiqueConfig;
  const tpl = bc.template || 'feed';
  const border = bc.borderStyle || 'rounded';
  const animation = bc.buttonAnimation || 'rebond';
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="nav('boutique')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">Paramètres d'apparence</div>
        <div class="sub-hero-sub">Personnalisez le look de votre site</div>
      </div>
      <button class="btn btn-primary" style="padding:6px 14px;font-size:12px" onclick="previewBoutiqueSite()">${IC.globe} Aperçu</button>
    </div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.layers||'📐'} Template de fiche produit</div>
      <div style="font-size:11px;color:var(--text-3);margin-bottom:10px">Définissez comment s'affiche la page quand un client clique sur un produit</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        ${[
          {id:'feed',    name:'Feed',  desc:'Vue détaillée classique'},
          {id:'oreo',    name:'Oreo',  desc:'Image + achat rapide'},
          {id:'make',    name:'Make',  desc:'Présentation storytelling'},
        ].map(t => `
        <div class="template-option ${tpl===t.id?'selected':''}" onclick="updateBoutiqueConfig('template','${t.id}');render()">
          <div class="template-preview">
            <div class="tpl-bar"></div>
            ${t.id==='feed'?'<div class="tpl-text"></div><div class="tpl-text"></div><div class="tpl-text short"></div>':
              t.id==='oreo'?'<div class="tpl-img"></div><div class="tpl-cta"></div>':
              '<div class="tpl-img"></div><div class="tpl-text"></div><div class="tpl-cta"></div>'}
          </div>
          <div class="template-label">${t.name}</div>
          <div style="font-size:10px;color:var(--text-3);text-align:center">${t.desc}</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">🎨 Couleur de la marque</div>
      <div style="font-size:11px;color:var(--text-3);margin-bottom:8px">La couleur principale de votre boutique</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${[
          {color:'#FCD34D',name:'Jaune'},
          {color:'#059669',name:'Vert'},
          {color:'#EA580C',name:'Orange'},
          {color:'#2563EB',name:'Bleu'},
          {color:'#F472B6',name:'Rose'},
          {color:'#4F46E5',name:'Indigo'},
          {color:'#000000',name:'Noir'},
          {color:'#DC2626',name:'Rouge'},
        ].map(c => `
        <div onclick="updateBoutiqueConfig('themeColor','${c.color}');render()" style="cursor:pointer;width:48px;height:48px;border-radius:50%;background:${c.color};border:3px solid ${(bc.themeColor||'#4F46E5')===c.color?'#000':'transparent'};display:flex;align-items:center;justify-content:center;color:${c.color==='#FCD34D'||c.color==='#FFFFFF'?'#000':'#fff'};transition:.2s;position:relative">${(bc.themeColor||'#4F46E5')===c.color?'✓':''}</div>`).join('')}
        <label style="cursor:pointer;width:48px;height:48px;border-radius:50%;border:2px dashed var(--border);display:flex;align-items:center;justify-content:center;color:var(--text-3);position:relative">
          ✎
          <input type="color" value="${bc.themeColor||'#4F46E5'}" onchange="updateBoutiqueConfig('themeColor',this.value);render()" style="position:absolute;inset:0;opacity:0;cursor:pointer">
        </label>
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Style de bordure</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        ${[
          {id:'rounded', name:'Arrondi', radius:'16px'},
          {id:'square', name:'Carré', radius:'2px'},
        ].map(b => `
        <div class="template-option ${border===b.id?'selected':''}" onclick="updateBoutiqueConfig('borderStyle','${b.id}');render()">
          <div style="background:var(--gray-1);width:80%;height:40px;margin:0 auto 8px;border-radius:${b.radius};border:2px solid var(--border)"></div>
          <div style="text-align:center;font-weight:700;font-size:13px">${b.name}</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Animation du bouton d'achat</div>
      <div style="display:flex;gap:8px">
        <select class="input" style="flex:1" onchange="updateBoutiqueConfig('buttonAnimation',this.value)">
          ${[
            {id:'none',name:'Aucune'},
            {id:'rebond',name:'Rebond'},
            {id:'pulse',name:'Pulsation'},
            {id:'shake',name:'Secousse'},
            {id:'glow',name:'Lueur'},
          ].map(a => `<option value="${a.id}" ${animation===a.id?'selected':''}>${a.name}</option>`).join('')}
        </select>
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">📦 Organisation de la page</div>
      ${[
        {key:'showFeatured',label:'Afficher les produits en vedette',sub:'Mettez en avant vos meilleures ventes'},
        {key:'showCartButton',label:"Afficher le bouton d'achat sur la carte produit",sub:'Achat direct depuis la liste'},
        {key:'showReviews',label:'Afficher les avis clients',sub:'Renforce la confiance'},
        {key:'showPromoBadges',label:'Afficher les badges promo',sub:'Montrer -10%, -20% sur les produits'},
        {key:'showStockCount',label:'Afficher le stock disponible',sub:"Crée un sentiment d'urgence"},
        {key:'showCategories',label:'Afficher les catégories',sub:'Navigation par type de produit'},
      ].map(opt => `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
        <div style="flex:1">
          <div style="font-weight:600;font-size:13px">${opt.label}</div>
          <div style="font-size:11px;color:var(--text-3)">${opt.sub}</div>
        </div>
        <label class="toggle-switch">
          <input type="checkbox" ${bc[opt.key]!==false?'checked':''} onchange="updateBoutiqueConfig('${opt.key}',this.checked)">
          <span class="toggle-track"></span>
        </label>
      </div>`).join('')}
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">🔤 Typographie</div>
      <div class="form-group">
        <label class="form-label">Police</label>
        <select class="input" onchange="updateBoutiqueConfig('fontFamily',this.value)">
          ${['Inter','Poppins','Roboto','Montserrat','Playfair Display','Lato','Open Sans'].map(f => `<option value="${f}" ${bc.fontFamily===f?'selected':''}>${f}</option>`).join('')}
        </select>
      </div>
    </div>

    <button class="btn btn-primary" style="width:100%" onclick="showToast('Apparence sauvegardée ✓');nav('boutique')">${IC.check} Enregistrer les paramètres</button>
  </div>`;
}

// ═══════════════════════════════════════════════
// NOM DE DOMAINE
// ═══════════════════════════════════════════════
function vBoutiqueDomain() {
  const bc = S.boutiqueConfig;
  const verified = bc.customDomainVerified;
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="nav('boutique')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">Nom de domaine</div>
        <div class="sub-hero-sub">Personnalisez votre URL</div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:10px">
      <div class="card-title">🔗 URL STOCKR (gratuite)</div>
      <div style="font-size:11px;color:var(--text-3);margin-bottom:8px">Votre boutique est accessible gratuitement sur stockr.shop</div>
      <div class="form-group">
        <label class="form-label">Nom de sous-domaine</label>
        <div style="display:flex;gap:6px;align-items:center">
          <input class="input" value="${bc.domain||''}" placeholder="maboutique" oninput="updateBoutiqueConfig('domain',this.value.toLowerCase().replace(/[^a-z0-9-]/g,''))" style="flex:1">
          <span style="font-size:13px;color:var(--text-3);font-weight:600">.stockr.shop</span>
        </div>
      </div>
      ${bc.domain ? `
      <div style="background:var(--gray-1);padding:10px;border-radius:8px;font-family:monospace;font-size:13px;display:flex;align-items:center;justify-content:space-between">
        <span>https://${bc.domain}.stockr.shop</span>
        <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="navigator.clipboard.writeText('https://${bc.domain}.stockr.shop');showToast('Lien copié !')">${IC.check} Copier</button>
      </div>` : ''}
    </div>

    <div class="card" style="margin-bottom:10px;border:2px solid var(--accent);background:var(--accent-light)">
      <div class="card-title">🌐 Domaine personnalisé (pro)</div>
      <div style="font-size:12px;color:var(--text-2);margin-bottom:12px">Instaurez la confiance avec votre propre nom de domaine (ex: <strong>maboutique.com</strong>). Un domaine professionnel permet aux clients de vous trouver plus facilement.</div>
      <div class="form-group">
        <label class="form-label">Votre domaine</label>
        <input class="input" value="${bc.customDomain||''}" placeholder="maboutique.com" oninput="updateBoutiqueConfig('customDomain',this.value.toLowerCase().trim())">
      </div>
      ${bc.customDomain ? `
      <div style="margin-top:10px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <strong style="font-size:14px">${bc.customDomain}</strong>
          ${verified ? '<span style="background:#10B98120;color:#10B981;padding:3px 10px;border-radius:6px;font-size:11px;font-weight:700">✓ Vérifié</span>' : '<span style="background:#F59E0B20;color:#F59E0B;padding:3px 10px;border-radius:6px;font-size:11px;font-weight:700">⚠ Non vérifié</span>'}
        </div>
        <div style="font-size:11px;color:var(--text-3);margin-bottom:8px;font-weight:600">Ajoutez ces enregistrements DNS chez votre registrar :</div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;overflow:hidden">
          <div style="display:grid;grid-template-columns:60px 1fr 1fr 32px;padding:8px 10px;background:var(--gray-1);font-size:10px;font-weight:700;color:var(--text-3);text-transform:uppercase;letter-spacing:1px">
            <div>Type</div><div>Nom</div><div>Valeur</div><div></div>
          </div>
          <div style="display:grid;grid-template-columns:60px 1fr 1fr 32px;padding:10px;align-items:center;border-bottom:1px solid var(--border);font-size:12px;font-family:monospace">
            <div><strong>A</strong></div><div>@</div><div>216.150.1.1</div>
            <button style="border:none;background:none;cursor:pointer" onclick="navigator.clipboard.writeText('216.150.1.1');showToast('Copié')">${IC.check}</button>
          </div>
          <div style="display:grid;grid-template-columns:60px 1fr 1fr 32px;padding:10px;align-items:center;font-size:12px;font-family:monospace">
            <div><strong>CNAME</strong></div><div>www</div><div style="overflow:hidden;text-overflow:ellipsis">${bc.customDomain}</div>
            <button style="border:none;background:none;cursor:pointer" onclick="navigator.clipboard.writeText('${bc.customDomain}');showToast('Copié')">${IC.check}</button>
          </div>
        </div>
        <div style="display:flex;gap:6px;margin-top:10px">
          <button class="btn btn-primary" style="flex:1" onclick="verifyCustomDomain()">${IC.check} Vérifier le domaine</button>
          ${verified?`<button class="btn btn-ghost" onclick="if(confirm('Supprimer ce domaine ?')){updateBoutiqueConfig('customDomain','');updateBoutiqueConfig('customDomainVerified',false);render()}" style="color:var(--danger)">🗑</button>`:''}
        </div>
      </div>` : ''}
    </div>

    <div class="card" style="font-size:11px;color:var(--text-3);line-height:1.6">
      <strong style="color:var(--text-1);display:block;margin-bottom:6px">💡 Comment ça marche ?</strong>
      1. Achetez votre nom de domaine chez un registrar (Namecheap, OVH, GoDaddy...)<br>
      2. Configurez les enregistrements DNS ci-dessus<br>
      3. Cliquez sur "Vérifier" — la propagation peut prendre 24-48h<br>
      4. Votre boutique sera accessible sur votre domaine personnalisé !
    </div>
  </div>`;
}
function verifyCustomDomain() {
  const bc = S.boutiqueConfig;
  if (!bc.customDomain) { showToast('Entrez un domaine', 'error'); return; }
  // Simulated verification (en prod: ping DNS)
  showToast('Vérification en cours...');
  setTimeout(() => {
    updateBoutiqueConfig('customDomainVerified', true);
    showToast('Domaine vérifié ! ✓');
    render();
  }, 1500);
}

// ═══════════════════════════════════════════════
// PIXELS & TRACKING (Facebook, TikTok, Google)
// ═══════════════════════════════════════════════
function vBoutiquePixels() {
  const bc = S.boutiqueConfig;
  const px = bc.pixels = bc.pixels || {};
  const pixelDefs = [
    {key:'facebookPixel',  name:'ID Pixel Facebook',              icon:'🔵', color:'#1877F2', placeholder:'1234567890',   desc:'Ajoutez votre ID Pixel Facebook pour suivre le trafic'},
    {key:'facebookCapi',   name:"Jeton d'API de Conversion Facebook", icon:'🔵', color:'#1877F2', placeholder:'EAA...',      desc:'Améliore le suivi des conversions (iOS 14.5+)'},
    {key:'tiktokPixel',    name:'ID Pixel TikTok',                icon:'⚫', color:'#000',    placeholder:'C1A...',       desc:'Suivez le trafic et les conversions TikTok Ads'},
    {key:'googleAnalytics',name:'Google Analytics 4 ID',          icon:'🔴', color:'#E37400', placeholder:'G-XXXXXXXXXX', desc:'Analyses détaillées du trafic de votre site'},
    {key:'googleTagMgr',   name:'Google Tag Manager',             icon:'🔴', color:'#4285F4', placeholder:'GTM-XXXXXXX',  desc:'Gérez toutes vos balises de tracking'},
    {key:'snapPixel',      name:'ID Pixel Snapchat',              icon:'🟡', color:'#FFFC00', placeholder:'abc123',       desc:'Trackez les campagnes Snap Ads'},
  ];
  const activeCount = pixelDefs.filter(p => px[p.key+'_enabled'] && px[p.key]).length + (px.customJs_enabled && px.customJs ? 1 : 0);
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="nav('boutique')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">Paramètres des pixels</div>
        <div class="sub-hero-sub">${activeCount>0?activeCount+' pixel'+(activeCount>1?'s':'')+' actif'+(activeCount>1?'s':''):'Suivez vos conversions publicitaires'}</div>
      </div>
    </div>
  </div>
  <div class="container">
    ${pixelDefs.map(p => {
      const enabled = !!px[p.key+'_enabled'];
      return `
    <div class="card" style="margin-bottom:8px;${enabled?'border-left:3px solid '+p.color:''}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:${enabled?'10px':'0'}">
        <div style="width:36px;height:36px;border-radius:10px;background:${p.color}15;color:${p.color};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${p.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:13px;color:var(--text-1)">${p.name}</div>
          <div style="font-size:10px;color:var(--text-3);line-height:1.4">${p.desc}</div>
        </div>
        <label class="toggle-switch" style="flex-shrink:0">
          <input type="checkbox" ${enabled?'checked':''} onchange="updatePixelConfig('${p.key}_enabled',this.checked);render()">
          <span class="toggle-track"></span>
        </label>
      </div>
      ${enabled ? `
      <div class="form-group" style="margin-bottom:0">
        <label class="form-label" style="font-size:11px">${p.name}</label>
        <input class="input" value="${(px[p.key]||'').replace(/"/g,'&quot;')}" placeholder="${p.placeholder}" oninput="updatePixelConfig('${p.key}',this.value)" style="font-family:monospace;font-size:12px">
        ${px[p.key] ? `<div style="font-size:10px;color:#10B981;margin-top:4px;font-weight:600">✓ Configuré</div>` : ''}
      </div>` : ''}
    </div>`;}).join('')}

    <!-- ── JavaScript personnalisé ── -->
    <div class="card" style="margin-bottom:10px;${px.customJs_enabled?'border-left:3px solid #FCD34D':''}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:${px.customJs_enabled?'10px':'0'}">
        <div style="width:36px;height:36px;border-radius:10px;background:#FCD34D15;color:#92400E;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0">JS</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:13px;color:var(--text-1)">Code JavaScript personnalisé</div>
          <div style="font-size:10px;color:var(--text-3)">Pour événements custom et tracking avancé</div>
        </div>
        <label class="toggle-switch" style="flex-shrink:0">
          <input type="checkbox" ${px.customJs_enabled?'checked':''} onchange="updatePixelConfig('customJs_enabled',this.checked);render()">
          <span class="toggle-track"></span>
        </label>
      </div>
      ${px.customJs_enabled ? `
      <div class="form-group" style="margin-bottom:0">
        <label class="form-label" style="font-size:11px">Code JavaScript personnalisé</label>
        <textarea class="input" rows="8" style="font-family:'SF Mono',Consolas,monospace;font-size:11px;line-height:1.5" placeholder="/* Votre JS personnalisé — ex: ga('send','event','boutique','view'); */" oninput="updatePixelConfig('customJs',this.value)">${px.customJs||''}</textarea>
        <div style="font-size:10px;color:var(--warning);margin-top:6px">⚠ Injecté avant &lt;/body&gt; — n'insérez que du code de confiance</div>
      </div>` : ''}
    </div>

    <!-- ── Actions bas de page ── -->
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="btn btn-primary" style="flex:1" onclick="savePixelConfig()">${IC.check} Enregistrer</button>
      <button class="btn btn-ghost" onclick="resetPixelConfig()" style="color:var(--danger)">🗑 Tout réinitialiser</button>
    </div>

    <div class="card" style="background:#EFF6FF;border-color:#3B82F640;margin-top:14px;font-size:11px;color:#1E40AF;line-height:1.6">
      💡 <strong>Astuce :</strong> les pixels sont automatiquement injectés dans le site quand vous cliquez sur "Générer HTML" depuis la page Boutique.
    </div>
  </div>`;
}
function updatePixelConfig(key, val) {
  const bc = S.boutiqueConfig;
  bc.pixels = bc.pixels || {};
  bc.pixels[key] = val;
  localStorage.setItem('stockr_boutique', JSON.stringify(bc));
}
function savePixelConfig() {
  const bc = S.boutiqueConfig;
  localStorage.setItem('stockr_boutique', JSON.stringify(bc));
  const px = bc.pixels || {};
  const count = Object.keys(px).filter(k => !k.endsWith('_enabled') && px[k] && px[k+'_enabled']).length;
  logActivity('boutique', `Pixels mis à jour (${count} actif(s))`);
  showToast(`Pixels enregistrés ✓`);
}
function resetPixelConfig() {
  if (!confirm('Réinitialiser tous les pixels ? Cette action est irréversible.')) return;
  S.boutiqueConfig.pixels = {};
  localStorage.setItem('stockr_boutique', JSON.stringify(S.boutiqueConfig));
  showToast('Pixels réinitialisés');
  render();
}

// ═══════════════════════════════════════════════
// CODE PERSONNALISÉ (CSS, HTML, JS)
// ═══════════════════════════════════════════════
function _codeSamples() {
  return {
    css: "/* Arrondir tous les boutons */\n.order-btn, .btn {\n  border-radius: 25px !important;\n}\n\n/* Ajouter ombre aux produits */\n.product {\n  box-shadow: 0 8px 30px rgba(0,0,0,.12);\n}\n\n/* Fond personnalisé */\nbody {\n  background: linear-gradient(135deg, #FEF3C7, #fff);\n}",
    head: '<!-- Meta tags SEO -->\n<meta property="og:image" content="https://...image.jpg">\n<meta name="keywords" content="boutique, vente, CI">\n\n<!-- Preconnect pour perf -->\n<link rel="preconnect" href="https://fonts.googleapis.com">',
    body: '<!-- Bannière annonce -->\n<div style="position:fixed;bottom:80px;left:20px;background:#000;color:#fff;padding:10px 16px;border-radius:10px;font-size:12px;z-index:999">\n  🎁 Livraison gratuite dès 20 000 FCFA\n</div>',
    js: "// Tracker les clics 'Commander'\ndocument.querySelectorAll('.order-btn').forEach(btn => {\n  btn.addEventListener('click', () => {\n    console.log('Commande:', btn.closest('.product')?.querySelector('.product-name')?.textContent);\n    // Envoyer à GA, FB Pixel, etc.\n  });\n});"
  };
}
function vBoutiqueCode() {
  const bc = S.boutiqueConfig;
  const cc = bc.customCode = bc.customCode || {};
  const tab = S.codeTab || 'css';
  const tabLabels = { css:'CSS', head:'HTML <head>', body:'HTML <body>', js:'JavaScript' };
  const tabInjectMsg = {
    css: "🎨 <strong>CSS</strong> est injecté dans <code>&lt;style&gt;</code> du site généré — modifie l'apparence globale.",
    head:'📝 <strong>HTML &lt;head&gt;</strong> : balises meta, liens externes, polices, scripts tiers.',
    body:'📄 <strong>HTML &lt;body&gt;</strong> : éléments affichés avant &lt;/body&gt; — widgets, chat, bannières.',
    js:  '⚡ <strong>JavaScript</strong> exécuté à la fin du chargement — tracking custom, interactions.'
  };
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="nav('boutique')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">Code personnalisé</div>
        <div class="sub-hero-sub">CSS, HTML, JavaScript avancés</div>
      </div>
    </div>
  </div>

  <div class="mkt-tabs">
    ${[
      {id:'css',label:'CSS',ico:'🎨'},
      {id:'head',label:'&lt;head&gt;',ico:'📝'},
      {id:'body',label:'&lt;body&gt;',ico:'📄'},
      {id:'js',label:'JS',ico:'⚡'},
    ].map(t => `
    <button class="mkt-tab ${tab===t.id?'active':''}" onclick="setCodeTab('${t.id}')">
      <span class="mkt-tab-ico">${t.ico}</span>
      <span class="mkt-tab-lbl">${t.label}</span>
      ${cc[t.id]?'<span class="mkt-tab-count">●</span>':''}
    </button>`).join('')}
  </div>

  <div class="container">
    <div class="card" style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div class="card-title" style="margin-bottom:0">Code ${tabLabels[tab]}</div>
        <div style="display:flex;gap:4px">
          <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="loadCodeSample('${tab}')">📋 Exemple</button>
          <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="copyCustomCode('${tab}')">📑 Copier</button>
        </div>
      </div>
      <textarea id="code-editor-${tab}" class="input" rows="14" style="font-family:'SF Mono',Consolas,monospace;font-size:12px;line-height:1.5;background:#1E1E1E;color:#D4D4D4;border:none;white-space:pre;overflow-x:auto;caret-color:#fff" placeholder="/* Votre code ${tabLabels[tab]} */" oninput="updateCustomCode('${tab}',this.value)">${cc[tab]||''}</textarea>
      <div style="font-size:10px;color:var(--text-3);margin-top:4px">${(cc[tab]||'').length} caractères</div>
      <div style="display:flex;gap:6px;margin-top:10px">
        <button class="btn btn-primary" style="flex:1" onclick="saveCustomCode('${tab}')">${IC.check} Enregistrer</button>
        <button class="btn btn-ghost" onclick="clearCustomCode('${tab}')" style="color:var(--danger)">🗑 Effacer</button>
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">📖 Où est injecté ce code ?</div>
      <div style="font-size:12px;color:var(--text-2);line-height:1.6">
        ${tabInjectMsg[tab]||''}
      </div>
    </div>

    <div class="card" style="background:#FEF3C7;border-color:#F59E0B40;font-size:11px;color:#92400E;line-height:1.6">
      <strong>⚠ Attention :</strong> Le code personnalisé est injecté tel quel. N'insérez que du code de confiance.
      Testez toujours avec l'aperçu avant de générer le site.
    </div>
  </div>`;
}
function setCodeTab(tab) { S.codeTab = tab; render(); }
function updateCustomCode(tab, val) {
  const bc = S.boutiqueConfig;
  bc.customCode = bc.customCode || {};
  bc.customCode[tab] = val;
  localStorage.setItem('stockr_boutique', JSON.stringify(bc));
}
function loadCodeSample(tab) {
  const sample = _codeSamples()[tab] || '';
  updateCustomCode(tab, sample);
  showToast(`Exemple ${tab.toUpperCase()} chargé`);
  render();
}
function saveCustomCode(tab) {
  const el = $(`code-editor-${tab}`);
  if (el) updateCustomCode(tab, el.value);
  logActivity('boutique', `Code ${tab.toUpperCase()} enregistré`);
  showToast(`Code ${tab.toUpperCase()} enregistré ✓`);
  render();
}
function clearCustomCode(tab) {
  if (!confirm(`Effacer le code ${tab.toUpperCase()} ?`)) return;
  updateCustomCode(tab, '');
  showToast('Effacé');
  render();
}
function copyCustomCode(tab) {
  const val = (S.boutiqueConfig.customCode||{})[tab] || '';
  if (!val) { showToast('Rien à copier', 'error'); return; }
  navigator.clipboard.writeText(val);
  showToast('Code copié ✓');
}

function previewBoutiqueSite() {
  const bc = S.boutiqueConfig;
  const shopProds = S.products.filter(p => (bc.products||[]).includes(p.id));
  if (shopProds.length === 0) { showToast('Ajoutez des produits en vitrine', 'error'); return; }
  const preview = window.open('', '_blank');
  const tc = bc.themeColor || '#4F46E5';
  const payments = (S.paymentMethods||[]).filter(m => m.active);
  const payText = payments.length > 0 ? payments.map(m => `<span style="background:${tc}15;color:${tc};padding:5px 12px;border-radius:8px;font-size:12px;font-weight:600">${m.name}</span>`).join(' ') : '<span style="color:#888">Espèces</span>';
  const logo = localStorage.getItem('stockr_logo');
  preview.document.write(`<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Aperçu — ${bc.name||'Boutique'}</title>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,-apple-system,sans-serif;background:#f5f5f7;-webkit-font-smoothing:antialiased}
.h{background:linear-gradient(135deg,${tc},${tc}cc);color:#fff;padding:44px 20px 32px;text-align:center;position:relative;overflow:hidden}
.h::before{content:'';position:absolute;top:-60%;left:-20%;width:140%;height:200%;background:radial-gradient(circle,rgba(255,255,255,.1),transparent 70%)}
.h img{width:56px;height:56px;border-radius:14px;object-fit:cover;margin-bottom:10px;border:2px solid rgba(255,255,255,.3)}
.h h1{font-size:24px;font-weight:800;letter-spacing:-.5px}.h p{opacity:.85;margin-top:6px;font-size:13px}
.bar{background:#fff;border-radius:12px;padding:12px 16px;margin:-20px 16px 14px;position:relative;z-index:1;box-shadow:0 4px 16px rgba(0,0,0,.06);text-align:center;font-size:12px;color:#666;display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.c{max-width:600px;margin:0 auto;padding:14px}
.p{background:#fff;border-radius:14px;padding:16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.03)}
.pt{display:flex;gap:12px;align-items:center}
.pi{width:46px;height:46px;border-radius:12px;background:${tc}15;color:${tc};display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;flex-shrink:0}
.n{font-weight:700;font-size:15px}.pr{color:${tc};font-weight:800;font-size:18px;margin-top:10px}
.b{background:#25D366;color:#fff;border:none;border-radius:10px;padding:10px 16px;font-weight:700;font-size:13px;cursor:pointer;margin-top:12px;display:inline-block}
.pay{background:#fff;border-radius:12px;padding:14px;text-align:center;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.03)}
.pay-t{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:8px;font-weight:600}
.f{text-align:center;padding:28px;font-size:12px;color:#aaa}</style></head>
<body><div class="h">${logo?`<img src="${logo}" alt="Logo">`:''}<h1>${bc.name||S.session?.business||'Ma Boutique'}</h1><p>${bc.description||'Bienvenue !'}</p></div>
<div class="bar">📍 ${(bc.deliveryZones||[]).slice(0,3).join(', ')||'Livraison disponible'} ${bc.deliveryFees>0?' • 🚚 '+fmt(bc.deliveryFees)+' '+sym():''}</div>
<div class="c">
${shopProds.map(p=>{const promo=_getActivePromo(p.id);const pp=promo?Math.round(p.price*(1-promo.discount/100)):null;return `<div class="p"><div class="pt"><div class="pi">${p.name.charAt(0)}</div><div><div class="n">${p.name}</div>${promo?'<div style="color:#ef4444;font-size:11px;font-weight:700;margin-top:2px">-'+promo.discount+'% '+promo.name+'</div>':''}</div></div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;padding-top:12px;border-top:1px solid #f0f0f0"><div class="pr">${promo?'<span style="text-decoration:line-through;color:#aaa;font-size:13px;margin-right:6px">'+fmt(p.price)+'</span>'+fmt(pp):fmt(p.price)} ${sym()}</div><button class="b">Commander</button></div></div>`;}).join('')}
<div class="pay"><div class="pay-t">Paiements acceptés</div><div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center">${payText}</div></div>
</div><div class="f">Aperçu STOCKR — ${bc.domain||'boutique'}.stockr.shop</div></body></html>`);
  preview.document.close();
}
function toggleBoutiqueProduct(id) {
  if (!S.boutiqueConfig.products) S.boutiqueConfig.products = [];
  const idx = S.boutiqueConfig.products.indexOf(id);
  if (idx >= 0) S.boutiqueConfig.products.splice(idx, 1);
  else S.boutiqueConfig.products.push(id);
  localStorage.setItem('stockr_boutique', JSON.stringify(S.boutiqueConfig));
  render();
}
function toggleDeliveryZone(zone) {
  if (!S.boutiqueConfig.deliveryZones) S.boutiqueConfig.deliveryZones = [];
  const idx = S.boutiqueConfig.deliveryZones.indexOf(zone);
  if (idx >= 0) S.boutiqueConfig.deliveryZones.splice(idx, 1);
  else S.boutiqueConfig.deliveryZones.push(zone);
  localStorage.setItem('stockr_boutique', JSON.stringify(S.boutiqueConfig));
  render();
}
function shareBoutiqueWhatsApp() {
  const bc = S.boutiqueConfig;
  const prods = S.products.filter(p => (bc.products||[]).includes(p.id));
  const lines = [
    `🛍️ *${bc.name || S.session?.business || 'Ma Boutique'}*`,
    bc.description || '', '',
    '📦 *Nos produits :*',
    ...prods.map(p => `▸ ${p.name} — *${fmt(p.price)} ${sym()}*`),
    '', bc.deliveryFees > 0 ? `🚚 Livraison : ${fmt(bc.deliveryFees)} ${sym()}` : '🚚 Livraison gratuite',
    (bc.deliveryZones||[]).length > 0 ? `📍 Zones : ${bc.deliveryZones.join(', ')}` : '',
    '', '📲 Commandez maintenant !', '_Propulsé par STOCKR_'
  ];
  window.open('https://wa.me/?text=' + encodeURIComponent(lines.join('\n')), '_blank');
}
function copyBoutiqueLink() {
  const text = `${S.boutiqueConfig.name||S.session?.business||'Ma Boutique'} — Commandez sur WhatsApp !`;
  navigator.clipboard?.writeText(text).then(() => showToast(t('copied')||'Copie !'));
}
function addBoutiqueOrder() {
  const clientName = prompt('Nom du client :');
  if (!clientName) return;
  const phone = prompt('Telephone du client :') || '';
  const zone = prompt('Zone de livraison :') || '';
  // Select products
  const shopProds = S.products.filter(p => (S.boutiqueConfig.products||[]).includes(p.id));
  if (shopProds.length === 0) { showToast('Ajoutez des produits en vitrine d\'abord', 'error'); return; }
  const prodIndex = prompt('Produit :\n' + shopProds.map((p,i) => `${i+1}. ${p.name} — ${fmt(p.price)} ${sym()}`).join('\n') + '\n\nNumero du produit :');
  if (!prodIndex) return;
  const prod = shopProds[parseInt(prodIndex)-1];
  if (!prod) { showToast('Produit invalide', 'error'); return; }
  const qty = parseInt(prompt('Quantite :', '1')) || 1;
  const total = prod.price * qty + (S.boutiqueConfig.deliveryFees || 0);
  const order = {
    id: Date.now(), clientName, phone, zone, status: 'pending',
    items: [{ id:prod.id, name:prod.name, price:prod.price, qty }],
    total, date: new Date().toISOString()
  };
  S.boutiqueOrders.unshift(order);
  localStorage.setItem('stockr_boutique_orders', JSON.stringify(S.boutiqueOrders));
  logActivity('order', `Commande de ${clientName} — ${fmt(total)} ${sym()}`);
  showToast('Commande ajoutee !');
  render();
}
function updateOrderStatus(id, status) {
  const order = S.boutiqueOrders.find(o => o.id === id);
  if (!order) return;
  order.status = status;
  order.updatedAt = new Date().toISOString();
  localStorage.setItem('stockr_boutique_orders', JSON.stringify(S.boutiqueOrders));
  // If confirmed, record as sale
  if (status === 'confirmed') {
    for (const item of (order.items||[])) {
      const product = S.products.find(p => p.id === item.id);
      if (product) {
        product.composition.forEach(comp => {
          const art = S.articles.find(a => a.id === comp.id);
          if (art) art.stock = Math.round((art.stock - comp.qty * item.qty) * 10) / 10;
        });
        S.sales.unshift({ id:Date.now(), productId:item.id, productName:item.name, qty:item.qty, total:item.price*item.qty, profit:((item.price||0)-(product.purchasePrice||0))*item.qty, date:new Date().toISOString(), paymentMethod:'pending', clientName:order.clientName });
      }
    }
    logActivity('sale', `Commande confirmee — ${order.clientName}`);
  }
  showToast(status==='confirmed'?'Commande confirmee !':status==='delivered'?'Commande livree !':'Commande annulee');
  render();
}
function contactOrderClient(id) {
  const order = S.boutiqueOrders.find(o => o.id === id);
  if (!order || !order.phone) { showToast('Pas de numero de telephone', 'error'); return; }
  const phone = order.phone.replace(/\s/g, '');
  const msg = `Bonjour ${order.clientName}, votre commande chez ${S.boutiqueConfig.name||S.session?.business||'nous'} est prete ! Total: ${fmt(order.total)} ${sym()}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── MARKETING CENTER (hub à onglets) ─────────
function vMarketing() {
  const tab = S.marketingTab || 'promos';
  const promos = S.promotions || [];
  const banners = S.banners || [];
  const popups = S.popups || [];
  const reviews = S.reviews || [];
  const campaigns = S.campaigns || [];
  const tracking = S.trackingLinks || [];
  const activePromos = promos.filter(p => p.active);
  const activeBanners = banners.filter(b => b.active);
  const activePopups = popups.filter(p => p.active);

  const tabs = [
    { id:'promos',    label:'Réductions', icon:'%',  count: activePromos.length },
    { id:'banners',   label:'Bannières',  icon:'📢', count: activeBanners.length },
    { id:'popups',    label:'Popups',     icon:'💬', count: activePopups.length },
    { id:'reviews',   label:'Avis',       icon:'⭐', count: reviews.filter(r=>r.approved).length },
    { id:'campaigns', label:'Campagnes',  icon:'📧', count: campaigns.length },
    { id:'tracking',  label:'Liens',      icon:'🔗', count: tracking.length },
    { id:'loyalty',   label:'Fidélité',   icon:'🎁', count: (S.loyaltyConfig?.rewards||[]).length },
  ];

  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:14px">
      <button class="back-btn-dark" onclick="nav('more')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">Centre Marketing</div>
        <div class="sub-hero-sub">Tous vos outils de vente au même endroit</div>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${activePromos.length}</div><div class="hero-stat-lbl">Promos actives</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${activeBanners.length+activePopups.length}</div><div class="hero-stat-lbl">Affichages</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${S.clients.length}</div><div class="hero-stat-lbl">${t('clients')}</div></div>
    </div>
  </div>

  <div class="mkt-tabs">
    ${tabs.map(tb => `
    <button class="mkt-tab ${tab===tb.id?'active':''}" onclick="setMarketingTab('${tb.id}')">
      <span class="mkt-tab-ico">${tb.icon}</span>
      <span class="mkt-tab-lbl">${tb.label}</span>
      ${tb.count>0?`<span class="mkt-tab-count">${tb.count}</span>`:''}
    </button>`).join('')}
  </div>

  <div class="container">
    ${tab === 'promos' ? _renderPromosTab(promos) : ''}
    ${tab === 'banners' ? _renderBannersTab(banners) : ''}
    ${tab === 'popups' ? _renderPopupsTab(popups) : ''}
    ${tab === 'reviews' ? _renderReviewsTab(reviews) : ''}
    ${tab === 'campaigns' ? _renderCampaignsTab(campaigns) : ''}
    ${tab === 'tracking' ? _renderTrackingTab(tracking) : ''}
    ${tab === 'loyalty' ? _renderLoyaltyTab() : ''}
  </div>`;
}

function setMarketingTab(id) {
  S.marketingTab = id;
  render();
}

function _renderPromosTab(promos) {
  return `
    <div class="section-hd">
      <span class="section-lbl">Codes promo & réductions</span>
      <button class="fab" style="width:32px;height:32px" onclick="addPromotion()">${IC.plus}</button>
    </div>
    ${promos.length === 0 ? `
    <div class="card" style="text-align:center;padding:24px">
      <div style="color:var(--text-3);margin-bottom:8px;font-size:32px">%</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:4px">Aucune réduction</div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:12px">Offrez des codes promo pour déclencher l'achat et stimuler vos ventes</div>
      <button class="btn btn-primary" style="max-width:220px;margin:0 auto" onclick="addPromotion()">+ Créer une réduction</button>
    </div>` : promos.map(p => {
      const now = new Date().toISOString().slice(0,10);
      const expired = (p.endDate||'9999') < now;
      const notYet = (p.startDate||'') > now;
      const limitReached = p.maxUses > 0 && (p.usageCount||0) >= p.maxUses;
      const statusLabel = !p.active ? 'Désactivée' : expired ? 'Expirée' : notYet ? 'À venir' : limitReached ? 'Épuisée' : 'Active';
      const statusCls = (!p.active||expired||limitReached) ? 'st-out' : notYet ? 'st-low' : 'st-ok';
      const valueDisp = p.type==='fixed' ? `-${fmt(p.value||0)}${sym()}` : `-${p.value||p.discount||0}%`;
      const usageBar = p.maxUses>0 ? Math.min(100, Math.round((p.usageCount||0)/p.maxUses*100)) : 0;
      return `
    <div class="promo-card" onclick="viewPromo(${p.id})" style="cursor:pointer">
      <div class="promo-badge">${valueDisp}</div>
      <div class="promo-info">
        <div class="promo-name">${p.name}</div>
        <div style="font-family:monospace;font-size:11px;font-weight:700;color:var(--accent);letter-spacing:1px;margin-top:2px">${p.code||'—'}</div>
        <div class="promo-dates">${p.startDate||'—'} → ${p.endDate||'—'} · ${p.usageCount||0}${p.maxUses>0?'/'+p.maxUses:''} utilisation(s)</div>
        ${p.maxUses>0?`<div style="height:3px;background:var(--gray-1);border-radius:2px;margin-top:6px;overflow:hidden"><div style="height:100%;width:${usageBar}%;background:var(--accent)"></div></div>`:''}
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">
        <span class="promo-status ${statusCls}" onclick="event.stopPropagation();togglePromoActive(${p.id})">${statusLabel}</span>
        <button style="font-size:10px;color:var(--accent);background:none;border:none;cursor:pointer" onclick="event.stopPropagation();sharePromoWhatsApp(${p.id})">${IC.whatsapp} Partager</button>
      </div>
    </div>`;}).join('')}`;
}

function _renderCampaignsTab(campaigns) {
  return `
    <div class="section-hd">
      <span class="section-lbl">Campagnes marketing</span>
      <button class="fab" style="width:32px;height:32px" onclick="addCampaign()">${IC.plus}</button>
    </div>
    <div style="font-size:11px;color:var(--text-3);margin-bottom:8px">Envoyez des messages WhatsApp/SMS/Email en masse à vos clients</div>
    ${campaigns.length === 0 ? `
    <div class="card" style="text-align:center;padding:24px">
      <div style="color:var(--text-3);margin-bottom:8px;font-size:32px">📧</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:4px">Aucune campagne</div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:12px">Relancez vos clients et boostez vos ventes</div>
      <button class="btn btn-primary" style="max-width:220px;margin:0 auto" onclick="addCampaign()">+ Nouvelle campagne</button>
    </div>` : campaigns.map(c => `
    <div class="campaign-card">
      <div class="campaign-top">
        <span class="campaign-type-badge" style="background:${c.type==='whatsapp'?'#25d366':c.type==='sms'?'#4F46E5':'#ea4335'}20;color:${c.type==='whatsapp'?'#25d366':c.type==='sms'?'#4F46E5':'#ea4335'}">${c.type.toUpperCase()}</span>
        <span class="campaign-name">${c.name}</span>
      </div>
      <div class="campaign-stats">
        <div class="campaign-stat">Destinataires: <span>${c.recipients||0}</span></div>
        <div class="campaign-stat">Status: <span style="color:${c.sent?'var(--success)':'var(--warning)'}">${c.sent?'Envoyée':'Prête'}</span></div>
        ${c.sentCount ? `<div class="campaign-stat">Envoyés: <span>${c.sentCount}</span></div>` : ''}
      </div>
      <div style="font-size:11px;color:var(--text-3);margin-top:6px;padding:6px 8px;background:var(--gray-1);border-radius:6px;line-height:1.4;max-height:48px;overflow:hidden">${(c.message||c.name).substring(0,100)}${(c.message||c.name).length>100?'...':''}</div>
      <div style="display:flex;gap:6px;margin-top:8px">
        ${!c.sent ? `<button class="btn btn-primary" style="flex:1;font-size:12px;padding:8px" onclick="event.stopPropagation();sendCampaign(${c.id})">
          ${c.type==='whatsapp'?IC.whatsapp:c.type==='sms'?IC.phone:IC.mail} Envoyer
        </button>` : `<span style="font-size:11px;color:var(--success);display:flex;align-items:center;gap:4px;flex:1">✓ Envoyée le ${c.sentDate?new Date(c.sentDate).toLocaleDateString('fr'):''}</span>`}
        <button class="btn btn-ghost" style="font-size:12px;padding:8px" onclick="event.stopPropagation();deleteCampaign(${c.id})">Supprimer</button>
      </div>
    </div>`).join('')}`;
}

// ── TIERS : helpers ─────────────────────────
function _clientLifetimeSpent(client) {
  if (!client) return 0;
  return S.sales.filter(s => s.clientId === client.id).reduce((sum, s) => sum + (s.total || 0), 0);
}
function _getClientTier(client) {
  const tiers = S.loyaltyConfig?.tiers || [];
  if (!tiers.length) return null;
  const mode = S.loyaltyConfig?.tierMode || 'spent';
  const value = mode === 'points' ? (client?.loyaltyPoints || 0) : _clientLifetimeSpent(client);
  const sorted = [...tiers].sort((a,b) => a.min - b.min);
  let current = sorted[0];
  for (const tier of sorted) { if (value >= tier.min) current = tier; }
  const nextTier = sorted.find(t => t.min > value) || null;
  const progress = nextTier ? Math.min(100, ((value - current.min) / (nextTier.min - current.min)) * 100) : 100;
  return { ...current, progress, nextTier, currentValue: value, toNext: nextTier ? nextTier.min - value : 0, mode };
}
function _renderTierBadge(tier, size='sm') {
  if (!tier) return '';
  const pad = size === 'lg' ? '6px 12px' : '3px 8px';
  const fz  = size === 'lg' ? '13px'     : '10px';
  return `<span style="background:${tier.gradient||tier.color};color:#fff;padding:${pad};border-radius:10px;font-size:${fz};font-weight:800;display:inline-flex;align-items:center;gap:4px;text-shadow:0 1px 2px rgba(0,0,0,0.3)">${tier.icon||'★'} ${tier.name}</span>`;
}

function _renderLoyaltyTab() {
  const tiers   = S.loyaltyConfig?.tiers || [];
  const mode    = S.loyaltyConfig?.tierMode || 'spent';
  const clients = S.clients || [];
  // Compute tier distribution
  const tierCounts = {};
  tiers.forEach(t => tierCounts[t.id] = 0);
  let totalActive = 0;
  clients.forEach(c => {
    const value = mode === 'points' ? (c.loyaltyPoints || 0) : _clientLifetimeSpent(c);
    if (value <= 0) return;
    totalActive++;
    let match = tiers[0];
    [...tiers].sort((a,b) => a.min - b.min).forEach(t => { if (value >= t.min) match = t; });
    if (match) tierCounts[match.id] = (tierCounts[match.id]||0) + 1;
  });
  const totalPts = clients.reduce((s,c)=>s+(c.loyaltyPoints||0),0);
  return `
    <div class="section-hd"><span class="section-lbl">Programme de fidélité</span></div>
    <div class="loyalty-card" onclick="toggleLoyalty()">
      <div class="loyalty-title">${IC.star} Programme fidélité</div>
      <div class="loyalty-sub">${S.loyaltyConfig?.enabled ? 'Activé — cliquez pour désactiver' : 'Cliquez pour activer et fidéliser vos clients'}</div>
      <div style="margin-top:12px;display:flex;gap:8px;position:relative;flex-wrap:wrap">
        <div style="background:rgba(255,255,255,0.2);padding:8px 14px;border-radius:8px;font-size:12px;font-weight:700">1 ${sym()} = ${S.loyaltyConfig?.pointsPerFcfa||1} pt</div>
        <div style="background:rgba(255,255,255,0.2);padding:8px 14px;border-radius:8px;font-size:12px;font-weight:700">${(S.loyaltyConfig?.rewards||[]).length} récompenses</div>
        <div style="background:rgba(255,255,255,0.2);padding:8px 14px;border-radius:8px;font-size:12px;font-weight:700">${tiers.length} paliers</div>
      </div>
    </div>
    ${S.loyaltyConfig?.enabled ? `
    <div class="card" style="margin-top:10px">
      <div class="card-title">⚙️ Règles du programme</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
        <button class="btn btn-ghost" style="font-size:11px;padding:8px;flex-direction:column;gap:2px" onclick="editLoyaltyRate()">
          <strong style="font-size:14px;color:var(--accent)">${S.loyaltyConfig.pointsPerFcfa||1} pt / ${sym()}</strong>
          <span style="font-size:10px;color:var(--text-3)">Taux de points</span>
        </button>
        <button class="btn btn-ghost" style="font-size:11px;padding:8px;flex-direction:column;gap:2px" onclick="toggleLoyaltyTierMode()">
          <strong style="font-size:14px;color:var(--accent)">${mode === 'points' ? 'Par points' : 'Par dépenses'}</strong>
          <span style="font-size:10px;color:var(--text-3)">Mode paliers</span>
        </button>
      </div>
    </div>

    <div class="card" style="margin-top:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div class="card-title" style="margin:0">🏆 Paliers VIP</div>
        <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="addLoyaltyTier()">+ Palier</button>
      </div>
      <div style="font-size:11px;color:var(--text-3);margin-bottom:8px">${mode==='points'?'Selon les points accumulés':'Selon le montant dépensé cumulé'}</div>
      ${tiers.sort((a,b)=>a.min-b.min).map((t,i) => `
      <div style="background:${t.gradient||t.color};border-radius:12px;padding:12px;margin-bottom:8px;color:#fff;position:relative;overflow:hidden">
        <div style="display:flex;justify-content:space-between;align-items:start;gap:8px">
          <div style="flex:1;min-width:0">
            <div style="font-size:11px;opacity:0.9;font-weight:600">PALIER ${i+1}</div>
            <div style="font-size:20px;font-weight:800;margin-top:2px;display:flex;align-items:center;gap:6px">
              <span style="font-size:24px">${t.icon||'★'}</span> ${t.name}
            </div>
            <div style="font-size:11px;opacity:0.9;margin-top:4px">
              À partir de <strong>${fmt(t.min)}${mode==='points'?' pts':' '+sym()}</strong>
            </div>
            <div style="font-size:11px;opacity:0.95;margin-top:4px;background:rgba(0,0,0,0.15);padding:4px 8px;border-radius:6px;display:inline-block">${t.perk||''}</div>
          </div>
          <div style="text-align:right;display:flex;flex-direction:column;gap:4px;align-items:flex-end">
            <div style="font-size:28px;font-weight:800">${tierCounts[t.id]||0}</div>
            <div style="font-size:10px;opacity:0.8">clients</div>
            <div style="display:flex;gap:4px">
              <button style="background:rgba(0,0,0,0.25);color:#fff;border:none;border-radius:6px;padding:4px 8px;font-size:10px;cursor:pointer;font-weight:700" onclick="editLoyaltyTier(${i})">✎</button>
              ${tiers.length > 1 ? `<button style="background:rgba(0,0,0,0.25);color:#fff;border:none;border-radius:6px;padding:4px 8px;font-size:10px;cursor:pointer;font-weight:700" onclick="deleteLoyaltyTier(${i})">🗑</button>` : ''}
            </div>
          </div>
        </div>
      </div>`).join('')}
    </div>

    <div class="card" style="margin-top:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div class="card-title" style="margin:0">🎁 Récompenses</div>
        <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="addLoyaltyReward()">+ Récompense</button>
      </div>
      ${(S.loyaltyConfig.rewards||[]).length === 0 ? `
      <div style="font-size:12px;color:var(--text-3);padding:8px 0;text-align:center">Aucune récompense · vos clients ne peuvent rien échanger</div>` :
      (S.loyaltyConfig.rewards||[]).map((r,i) => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;border:1px solid var(--border);border-radius:10px;margin-bottom:6px">
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:13px">${r.icon||'🎁'} ${r.name}</div>
          ${r.description?`<div style="font-size:11px;color:var(--text-3);margin-top:2px">${r.description}</div>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <span style="font-size:12px;font-weight:800;color:var(--warning)">${r.points} pts</span>
          <button style="font-size:11px;background:none;border:none;cursor:pointer" onclick="editLoyaltyReward(${i})">✎</button>
          <button style="font-size:11px;background:none;border:none;cursor:pointer;color:var(--danger)" onclick="deleteLoyaltyReward(${i})">🗑</button>
        </div>
      </div>`).join('')}
    </div>

    <div class="card" style="margin-top:10px;background:linear-gradient(135deg,#EEF2FF,#FFF)">
      <div class="card-title">📊 Statistiques</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:6px">
        <div style="text-align:center;background:#fff;padding:10px;border-radius:10px">
          <div style="font-size:20px;font-weight:800;color:var(--accent)">${totalPts}</div>
          <div style="font-size:10px;color:var(--text-3)">pts distribués</div>
        </div>
        <div style="text-align:center;background:#fff;padding:10px;border-radius:10px">
          <div style="font-size:20px;font-weight:800;color:var(--success)">${totalActive}</div>
          <div style="font-size:10px;color:var(--text-3)">clients fidèles</div>
        </div>
        <div style="text-align:center;background:#fff;padding:10px;border-radius:10px">
          <div style="font-size:20px;font-weight:800;color:var(--warning)">${clients.reduce((s,c)=>s+(c.redeemedRewards||[]).length,0)}</div>
          <div style="font-size:10px;color:var(--text-3)">échanges</div>
        </div>
      </div>
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn btn-ghost" style="font-size:11px;padding:6px 10px;flex:1" onclick="sendLoyaltyCampaign()">${IC.whatsapp} Relancer les VIP</button>
        <button class="btn btn-ghost" style="font-size:11px;padding:6px 10px;flex:1" onclick="exportLoyaltyReport()">${IC.download||'⤓'} Rapport CSV</button>
      </div>
    </div>` : ''}`;
}

// ── BANNIÈRES ────────────────────────────────
// Schema : { id, text, subText, bgColor, textColor, emoji, linkUrl, linkText, active, startDate, endDate, position:'top'|'bottom', dismissible }
function _renderBannersTab(banners) {
  return `
    <div class="section-hd">
      <span class="section-lbl">Bannières promotionnelles</span>
      <button class="fab" style="width:32px;height:32px" onclick="addBanner()">${IC.plus}</button>
    </div>
    <div style="font-size:11px;color:var(--text-3);margin-bottom:8px">Diffusez un message en haut ou en bas de votre boutique en ligne</div>
    ${banners.length === 0 ? `
    <div class="card" style="text-align:center;padding:24px">
      <div style="color:var(--text-3);margin-bottom:8px;font-size:32px">📢</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:4px">Aucune bannière</div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:12px">Affichez une annonce importante en haut de votre boutique</div>
      <button class="btn btn-primary" style="max-width:220px;margin:0 auto" onclick="addBanner()">+ Créer une bannière</button>
    </div>` : banners.map(b => `
    <div class="card" style="margin-bottom:8px;padding:0;overflow:hidden;cursor:pointer" onclick="editBanner(${b.id})">
      <div style="background:${b.bgColor||'#4F46E5'};color:${b.textColor||'#fff'};padding:12px 14px;display:flex;align-items:center;gap:10px;font-weight:600;font-size:13px">
        <span style="font-size:18px">${b.emoji||'📢'}</span>
        <div style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.text||'Sans texte'}</div>
        ${b.linkText?`<span style="background:rgba(255,255,255,0.25);padding:4px 10px;border-radius:6px;font-size:11px;font-weight:700">${b.linkText}</span>`:''}
      </div>
      <div style="padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
        <div style="font-size:11px;color:var(--text-3)">
          ${b.position==='bottom'?'↓ Bas':'↑ Haut'} · ${b.startDate||'—'} → ${b.endDate||'—'}
        </div>
        <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
          <span class="promo-status ${b.active?'st-ok':'st-out'}" onclick="toggleBannerActive(${b.id})">${b.active?'Active':'Inactive'}</span>
          <button style="font-size:10px;color:var(--danger);background:none;border:none;cursor:pointer" onclick="deleteBanner(${b.id})">🗑</button>
        </div>
      </div>
    </div>`).join('')}`;
}

// ── POPUPS ───────────────────────────────────
// Schema : { id, title, message, emoji, trigger:'entry'|'scroll'|'time'|'exit', triggerValue, ctaText, ctaUrl, promoCode, active, showOnce, bgColor, textColor, startDate, endDate }
function _renderPopupsTab(popups) {
  return `
    <div class="section-hd">
      <span class="section-lbl">Popups déclenchés</span>
      <button class="fab" style="width:32px;height:32px" onclick="addPopup()">${IC.plus}</button>
    </div>
    <div style="font-size:11px;color:var(--text-3);margin-bottom:8px">Affichez un message clé pour inciter à l'action (entrée, scroll, temps, sortie)</div>
    ${popups.length === 0 ? `
    <div class="card" style="text-align:center;padding:24px">
      <div style="color:var(--text-3);margin-bottom:8px;font-size:32px">💬</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:4px">Aucun popup</div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:12px">Offrez un code promo aux nouveaux visiteurs</div>
      <button class="btn btn-primary" style="max-width:220px;margin:0 auto" onclick="addPopup()">+ Créer un popup</button>
    </div>` : popups.map(p => {
      const trigLabels = { entry:'À l\'entrée', scroll:`Au scroll ${p.triggerValue||50}%`, time:`Après ${p.triggerValue||5}s`, exit:'À la sortie' };
      return `
    <div class="card" style="margin-bottom:8px;cursor:pointer" onclick="editPopup(${p.id})">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:48px;height:48px;border-radius:12px;background:${p.bgColor||'#4F46E5'};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">${p.emoji||'💬'}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:14px">${p.title||'Sans titre'}</div>
          <div style="font-size:11px;color:var(--text-3);margin-top:2px">${trigLabels[p.trigger]||'À l\'entrée'}${p.promoCode?' · Code: '+p.promoCode:''}</div>
          <div style="font-size:11px;color:var(--text-3);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(p.message||'').slice(0,60)}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end" onclick="event.stopPropagation()">
          <span class="promo-status ${p.active?'st-ok':'st-out'}" onclick="togglePopupActive(${p.id})">${p.active?'Active':'Inactive'}</span>
          <button style="font-size:10px;color:var(--danger);background:none;border:none;cursor:pointer" onclick="deletePopup(${p.id})">🗑</button>
        </div>
      </div>
    </div>`;}).join('')}`;
}

// ── AVIS (Proof) ─────────────────────────────
// Schema : { id, clientName, rating 1-5, comment, productId, date, approved, verified }
function _renderReviewsTab(reviews) {
  const avg = reviews.length > 0 ? (reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1) : '—';
  const pending = reviews.filter(r => !r.approved);
  return `
    <div class="section-hd">
      <span class="section-lbl">Avis clients</span>
      <button class="fab" style="width:32px;height:32px" onclick="addReview()">${IC.plus}</button>
    </div>
    <div style="font-size:11px;color:var(--text-3);margin-bottom:8px">Affichez les avis sur votre boutique pour renforcer la confiance</div>
    ${reviews.length === 0 ? `
    <div class="card" style="text-align:center;padding:24px">
      <div style="color:var(--text-3);margin-bottom:8px;font-size:32px">⭐</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:4px">Aucun avis</div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:12px">Ajoutez les avis de vos clients satisfaits</div>
      <button class="btn btn-primary" style="max-width:220px;margin:0 auto" onclick="addReview()">+ Ajouter un avis</button>
    </div>` : `
    <div class="card" style="margin-bottom:10px;text-align:center;background:linear-gradient(135deg,#FEF3C7,#FFF)">
      <div style="font-size:32px;font-weight:800;color:#F59E0B">${avg} <span style="font-size:14px">/ 5</span></div>
      <div style="font-size:18px;color:#F59E0B;letter-spacing:2px">${'★'.repeat(Math.round(avg))}${'☆'.repeat(5-Math.round(avg))}</div>
      <div style="font-size:11px;color:var(--text-3);margin-top:4px">${reviews.length} avis · ${reviews.filter(r=>r.approved).length} approuvés${pending.length>0?' · '+pending.length+' à modérer':''}</div>
      <div style="display:flex;gap:6px;margin-top:10px;justify-content:center">
        <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="copyReviewLink()">${IC.link||'🔗'} Lien pour clients</button>
        <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="shareReviewLink()">${IC.whatsapp} Demander via WhatsApp</button>
      </div>
    </div>
    ${reviews.map(r => {
      const prod = r.productId ? S.products.find(p=>p.id===r.productId) : null;
      return `
    <div class="card" style="margin-bottom:8px;${!r.approved?'border-left:3px solid var(--warning)':''}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
        <div style="width:36px;height:36px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800">${(r.clientName||'?').charAt(0).toUpperCase()}</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:13px">${r.clientName||'Anonyme'} ${r.verified?'<span style="color:var(--success);font-size:11px">✓ Vérifié</span>':''}</div>
          <div style="font-size:11px;color:var(--text-3)">${fmtDate(r.date)}${prod?' · '+prod.name:''}</div>
        </div>
        <div style="color:#F59E0B;font-size:15px;letter-spacing:1px">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
      </div>
      <div style="font-size:13px;color:var(--text-1);line-height:1.5">${r.comment||''}</div>
      <div style="display:flex;gap:6px;margin-top:8px">
        ${!r.approved?`<button class="btn btn-primary" style="flex:1;font-size:11px;padding:6px" onclick="approveReview(${r.id})">${IC.check} Approuver</button>`:`<span style="flex:1;font-size:11px;color:var(--success);padding:6px;display:flex;align-items:center;gap:4px">✓ Publié</span>`}
        <button class="btn btn-ghost" style="font-size:11px;padding:6px" onclick="editReview(${r.id})">${IC.edit||'✎'}</button>
        <button class="btn btn-ghost" style="font-size:11px;padding:6px;color:var(--danger)" onclick="deleteReview(${r.id})">🗑</button>
      </div>
    </div>`;}).join('')}`}`;
}

// ── LIENS TRACKÉS (Campagnes UTM) ────────────
// Schema : { id, name, destUrl, source, medium, campaign, clicks, active, createdAt }
function _renderTrackingTab(tracking) {
  return `
    <div class="section-hd">
      <span class="section-lbl">Liens de suivi</span>
      <button class="fab" style="width:32px;height:32px" onclick="addTrackingLink()">${IC.plus}</button>
    </div>
    <div style="font-size:11px;color:var(--text-3);margin-bottom:8px">Créez des liens tracés pour savoir d'où viennent vos clients (Facebook, Instagram, WhatsApp, etc.)</div>
    ${tracking.length === 0 ? `
    <div class="card" style="text-align:center;padding:24px">
      <div style="color:var(--text-3);margin-bottom:8px;font-size:32px">🔗</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:4px">Aucun lien tracé</div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:12px">Sachez quelles publicités ramènent des clients</div>
      <button class="btn btn-primary" style="max-width:220px;margin:0 auto" onclick="addTrackingLink()">+ Créer un lien tracé</button>
    </div>` : tracking.map(tk => `
    <div class="card" style="margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
        <div style="font-weight:700;font-size:13px;flex:1">${tk.name}</div>
        <div style="font-size:20px;font-weight:800;color:var(--accent)">${tk.clicks||0}</div>
      </div>
      <div style="font-size:10px;color:var(--text-3);font-family:monospace;word-break:break-all;background:var(--gray-1);padding:6px 8px;border-radius:6px">${_buildTrackingUrl(tk)}</div>
      <div style="display:flex;gap:4px;margin-top:6px;flex-wrap:wrap">
        <span style="font-size:10px;padding:2px 8px;border-radius:4px;background:var(--accent-light);color:var(--accent);font-weight:600">${tk.source}</span>
        <span style="font-size:10px;padding:2px 8px;border-radius:4px;background:var(--gray-1);color:var(--text-2);font-weight:600">${tk.medium}</span>
        <span style="font-size:10px;padding:2px 8px;border-radius:4px;background:var(--gray-1);color:var(--text-2);font-weight:600">${tk.campaign}</span>
      </div>
      <div style="display:flex;gap:6px;margin-top:8px">
        <button class="btn btn-ghost" style="flex:1;font-size:11px;padding:6px" onclick="copyTrackingLink(${tk.id})">${IC.check} Copier</button>
        <button class="btn btn-ghost" style="flex:1;font-size:11px;padding:6px" onclick="shareTrackingLink(${tk.id})">${IC.whatsapp} Partager</button>
        <button class="btn btn-ghost" style="font-size:11px;padding:6px;color:var(--danger)" onclick="deleteTrackingLink(${tk.id})">🗑</button>
      </div>
    </div>`).join('')}`;
}

// ── PROMO CODE SYSTEM (complet) ──────────────
// Schema : { id, name, code, type:'percent'|'fixed', value, products:[], maxUses, maxUsesPerClient, startDate, endDate, active, usageCount, usageByClient:{} }

function _genPromoCode(name) {
  const base = (name||'PROMO').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,6);
  const suffix = Math.floor(Math.random()*900+100);
  return base + suffix;
}

function addPromotion() {
  S.editingPromoId = null;
  S.view = 'promo-form';
  render();
}

function editPromotion(id) {
  S.editingPromoId = id;
  S.view = 'promo-form';
  render();
}

function vPromoForm() {
  const isEdit = !!S.editingPromoId;
  const p = isEdit ? (S.promotions||[]).find(x => x.id === S.editingPromoId) : null;
  const today = new Date().toISOString().slice(0,10);
  const plus30 = new Date(Date.now()+30*86400000).toISOString().slice(0,10);
  const draft = p || {
    name:'', code:'', type:'percent', value:10, products:[],
    maxUses:0, maxUsesPerClient:0,
    startDate:today, endDate:plus30, active:true, usageCount:0, usageByClient:{}
  };
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="S.editingPromoId=null;nav('marketing')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">${isEdit?'Modifier la réduction':'Nouvelle réduction'}</div>
        <div class="sub-hero-sub">${isEdit?'Mise à jour du code promo':'Créez un code promo complet'}</div>
      </div>
    </div>
  </div>
  <div class="container">

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.tag||IC.percent} Informations</div>
      <div class="form-group">
        <label class="form-label">Nom <span style="color:var(--danger)">*</span></label>
        <input class="input" id="promo-name" value="${draft.name||''}" placeholder="Ex: Soldes de Noël" oninput="if(!$('promo-code').dataset.manual)$('promo-code').value=_genPromoCode(this.value)">
        <div style="font-size:10px;color:var(--text-3);margin-top:2px">Nom interne visible uniquement par vous</div>
      </div>
      <div class="form-group">
        <label class="form-label">Code promo <span style="color:var(--danger)">*</span></label>
        <div style="display:flex;gap:6px">
          <input class="input" id="promo-code" value="${draft.code||''}" placeholder="Ex: NOEL25" style="flex:1;text-transform:uppercase;font-family:monospace;font-weight:700;letter-spacing:1px" oninput="this.dataset.manual='1';this.value=this.value.toUpperCase()">
          <button class="btn btn-ghost" style="padding:0 12px" onclick="$('promo-code').value=_genPromoCode($('promo-name').value);$('promo-code').dataset.manual=''">${IC.refresh||'🎲'}</button>
        </div>
        <div style="font-size:10px;color:var(--text-3);margin-top:2px">Ce code sera saisi par vos clients pour obtenir la réduction</div>
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.percent} Type de réduction <span style="color:var(--danger)">*</span></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
        <label class="promo-type-opt ${draft.type==='percent'?'selected':''}" onclick="document.querySelectorAll('.promo-type-opt').forEach(e=>e.classList.remove('selected'));this.classList.add('selected');$('promo-type').value='percent';$('promo-value-unit').textContent='%';">
          <div style="font-size:22px;font-weight:800;color:var(--accent)">%</div>
          <div style="font-size:13px;font-weight:700;margin-top:4px">Pourcentage</div>
          <div style="font-size:10px;color:var(--text-3)">Ex: -20%</div>
        </label>
        <label class="promo-type-opt ${draft.type==='fixed'?'selected':''}" onclick="document.querySelectorAll('.promo-type-opt').forEach(e=>e.classList.remove('selected'));this.classList.add('selected');$('promo-type').value='fixed';$('promo-value-unit').textContent='${sym()}';">
          <div style="font-size:22px;font-weight:800;color:var(--accent)">${sym()}</div>
          <div style="font-size:13px;font-weight:700;margin-top:4px">Montant fixe</div>
          <div style="font-size:10px;color:var(--text-3)">Ex: -1000 ${sym()}</div>
        </label>
      </div>
      <input type="hidden" id="promo-type" value="${draft.type}">
      <div class="form-group" style="margin-top:12px">
        <label class="form-label">Valeur de la réduction</label>
        <div style="display:flex;gap:6px;align-items:center">
          <input class="input" id="promo-value" type="number" min="0" value="${draft.value||10}" style="flex:1">
          <span id="promo-value-unit" style="font-weight:800;font-size:18px;color:var(--accent);min-width:40px;text-align:center">${draft.type==='percent'?'%':sym()}</span>
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.package} Produits concernés</div>
      <div style="font-size:11px;color:var(--text-3);margin-bottom:8px">Laissez tout décoché pour appliquer à tous les produits</div>
      ${(S.products||[]).length === 0 ? `<div style="font-size:12px;color:var(--text-3);padding:8px 0">Aucun produit — la réduction s'appliquera à tout</div>` : `
      <div style="max-height:200px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:4px">
        ${S.products.map(pr => `
        <label style="display:flex;align-items:center;gap:10px;padding:8px;cursor:pointer;border-radius:6px" onmouseover="this.style.background='var(--gray-1)'" onmouseout="this.style.background='transparent'">
          <input type="checkbox" class="promo-prod-check" value="${pr.id}" ${(draft.products||[]).includes(pr.id)?'checked':''}>
          <div style="flex:1;font-size:13px">${pr.name}</div>
          <div style="font-size:11px;color:var(--text-3)">${fmt(pr.price)} ${sym()}</div>
        </label>`).join('')}
      </div>
      <div style="display:flex;gap:6px;margin-top:8px">
        <button class="btn btn-ghost" style="flex:1;font-size:11px;padding:6px" onclick="document.querySelectorAll('.promo-prod-check').forEach(c=>c.checked=true)">Tout cocher</button>
        <button class="btn btn-ghost" style="flex:1;font-size:11px;padding:6px" onclick="document.querySelectorAll('.promo-prod-check').forEach(c=>c.checked=false)">Tout décocher</button>
      </div>`}
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.users||IC.user} Limites d'utilisation</div>
      <div class="form-group">
        <label class="form-label">Utilisations maximum (total)</label>
        <input class="input" id="promo-maxuses" type="number" min="0" value="${draft.maxUses||0}" placeholder="0 = illimité">
        <div style="font-size:10px;color:var(--text-3);margin-top:2px">La réduction se désactive une fois cette limite atteinte. 0 = aucune limite</div>
      </div>
      <div class="form-group">
        <label class="form-label">Utilisations max par client</label>
        <input class="input" id="promo-maxperclient" type="number" min="0" value="${draft.maxUsesPerClient||0}" placeholder="0 = illimité">
        <div style="font-size:10px;color:var(--text-3);margin-top:2px">Combien de fois un même client peut utiliser ce code. 0 = illimité</div>
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.calendar} Période de validité</div>
      <div class="form-group">
        <label class="form-label">Date de début</label>
        <input class="input" id="promo-start" type="date" value="${draft.startDate||today}">
      </div>
      <div class="form-group">
        <label class="form-label">Date de fin</label>
        <input class="input" id="promo-end" type="date" value="${draft.endDate||plus30}">
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${[{l:'7 jours',d:7},{l:'14 jours',d:14},{l:'30 jours',d:30},{l:'90 jours',d:90}].map(q=>`
        <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="const d=new Date();$('promo-start').value=d.toISOString().slice(0,10);d.setDate(d.getDate()+${q.d});$('promo-end').value=d.toISOString().slice(0,10)">${q.l}</button>`).join('')}
      </div>
    </div>

    <div class="card" style="margin-bottom:14px">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <div style="font-weight:700;font-size:13px">Activer immédiatement</div>
          <div style="font-size:11px;color:var(--text-3)">Les clients pourront utiliser le code</div>
        </div>
        <label class="toggle-switch">
          <input type="checkbox" id="promo-active" ${draft.active!==false?'checked':''}>
          <span class="toggle-track"></span>
        </label>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      ${isEdit?`<button class="btn btn-ghost" style="color:var(--danger);border-color:var(--danger)" onclick="deletePromotion(${draft.id});nav('marketing')">${IC.trash||'🗑'} Supprimer</button>`:''}
      <button class="btn btn-primary" style="flex:1" onclick="savePromotion()">${IC.check} ${isEdit?'Mettre à jour':'Créer la réduction'}</button>
    </div>
  </div>`;
}

function savePromotion() {
  const name = ($('promo-name')?.value||'').trim();
  const code = ($('promo-code')?.value||'').trim().toUpperCase();
  const type = $('promo-type')?.value || 'percent';
  const value = parseFloat($('promo-value')?.value) || 0;
  if (!name) { showToast('Nom obligatoire', 'error'); return; }
  if (!code) { showToast('Code promo obligatoire', 'error'); return; }
  if (value <= 0) { showToast('Valeur doit être > 0', 'error'); return; }
  if (type === 'percent' && value > 100) { showToast('Pourcentage max 100', 'error'); return; }
  // Unicité du code
  const dup = (S.promotions||[]).find(x => x.code === code && x.id !== S.editingPromoId);
  if (dup) { showToast(`Code "${code}" déjà utilisé`, 'error'); return; }
  const products = Array.from(document.querySelectorAll('.promo-prod-check:checked')).map(c => parseInt(c.value));
  const maxUses = parseInt($('promo-maxuses')?.value) || 0;
  const maxUsesPerClient = parseInt($('promo-maxperclient')?.value) || 0;
  const startDate = $('promo-start')?.value || new Date().toISOString().slice(0,10);
  const endDate = $('promo-end')?.value || new Date(Date.now()+30*86400000).toISOString().slice(0,10);
  const active = $('promo-active')?.checked !== false;

  if (S.editingPromoId) {
    const p = S.promotions.find(x => x.id === S.editingPromoId);
    if (p) {
      Object.assign(p, { name, code, type, value, discount: type==='percent'?value:p.discount, products, maxUses, maxUsesPerClient, startDate, endDate, active });
      showToast('Réduction mise à jour');
    }
  } else {
    const promo = {
      id: Date.now(), name, code, type, value,
      discount: type==='percent' ? value : 0, // legacy compat
      products, maxUses, maxUsesPerClient, startDate, endDate, active,
      usageCount: 0, usageByClient: {}, createdAt: new Date().toISOString()
    };
    S.promotions.push(promo);
    logActivity('promo', `${name} créée — code ${code}`);
    showToast(`Réduction créée : ${code}`);
  }
  localStorage.setItem('stockr_promotions', JSON.stringify(S.promotions));
  S.editingPromoId = null;
  S.view = 'marketing';
  render();
}

function vPromoDetail() {
  const p = (S.promotions||[]).find(x => x.id === S.viewingPromoId);
  if (!p) { S.view='marketing'; return vMarketing(); }
  const now = new Date().toISOString().slice(0,10);
  const expired = p.endDate < now;
  const notYet = p.startDate > now;
  const limitReached = p.maxUses > 0 && (p.usageCount||0) >= p.maxUses;
  const status = !p.active ? 'Désactivée' : expired ? 'Expirée' : notYet ? 'À venir' : limitReached ? 'Limite atteinte' : 'Active';
  const statusColor = (!p.active||expired||limitReached) ? 'var(--danger)' : notYet ? 'var(--warning)' : 'var(--success)';
  const valueDisp = p.type==='fixed' ? `-${fmt(p.value)} ${sym()}` : `-${p.value}%`;
  const usageRate = p.maxUses > 0 ? Math.round((p.usageCount||0)/p.maxUses*100) : 0;
  const nbClients = Object.keys(p.usageByClient||{}).length;
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:14px">
      <button class="back-btn-dark" onclick="S.viewingPromoId=null;nav('marketing')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">${p.name}</div>
        <div class="sub-hero-sub" style="font-family:monospace;letter-spacing:2px">${p.code}</div>
      </div>
      <span style="font-size:11px;padding:4px 10px;border-radius:8px;background:${statusColor}20;color:${statusColor};font-weight:700">${status}</span>
    </div>
    <div style="display:flex;gap:8px">
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${valueDisp}</div><div class="hero-stat-lbl">Réduction</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${p.usageCount||0}</div><div class="hero-stat-lbl">Utilisations</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${nbClients}</div><div class="hero-stat-lbl">Clients</div></div>
    </div>
  </div>
  <div class="container">
    ${p.maxUses>0 ? `
    <div class="card" style="margin-bottom:10px">
      <div style="font-size:12px;color:var(--text-3);margin-bottom:6px">Progression ${p.usageCount||0}/${p.maxUses} (${usageRate}%)</div>
      <div style="height:8px;background:var(--gray-1);border-radius:4px;overflow:hidden">
        <div style="height:100%;width:${usageRate}%;background:linear-gradient(90deg,var(--accent),${statusColor});transition:width .3s"></div>
      </div>
    </div>`:''}

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.settings||IC.package} Détails</div>
      <div class="info-row"><span class="info-lbl">Type</span><span class="info-val">${p.type==='fixed'?'Montant fixe':'Pourcentage'}</span></div>
      <div class="info-row"><span class="info-lbl">Valeur</span><span class="info-val" style="color:var(--accent);font-weight:800">${valueDisp}</span></div>
      <div class="info-row"><span class="info-lbl">Période</span><span class="info-val">${p.startDate} → ${p.endDate}</span></div>
      <div class="info-row"><span class="info-lbl">Produits</span><span class="info-val">${(p.products||[]).length===0?'Tous':p.products.length+' spécifique(s)'}</span></div>
      <div class="info-row"><span class="info-lbl">Max total</span><span class="info-val">${p.maxUses>0?p.maxUses:'Illimité'}</span></div>
      <div class="info-row"><span class="info-lbl">Max / client</span><span class="info-val">${p.maxUsesPerClient>0?p.maxUsesPerClient:'Illimité'}</span></div>
    </div>

    ${(p.products||[]).length>0?`
    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.package} Produits concernés (${p.products.length})</div>
      ${p.products.map(id => {
        const pr = S.products.find(x=>x.id===id);
        if (!pr) return '';
        const discPrice = _applyPromoValue(pr.price, p);
        return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:13px">
          <div>${pr.name}</div>
          <div><span style="text-decoration:line-through;color:var(--text-3);font-size:11px">${fmt(pr.price)}</span> <strong style="color:var(--accent)">${fmt(discPrice)} ${sym()}</strong></div>
        </div>`;
      }).join('')}
    </div>`:''}

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">${IC.share||IC.whatsapp} Partager la réduction</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        <button class="btn btn-ghost" onclick="sharePromoWhatsApp(${p.id})" style="background:#25D36610;color:#25D366;border-color:#25D36640">${IC.whatsapp} WhatsApp</button>
        <button class="btn btn-ghost" onclick="sharePromoSMS(${p.id})">${IC.smartphone||IC.phone} SMS</button>
        <button class="btn btn-ghost" onclick="copyPromoCode('${p.code}')">${IC.check} Copier code</button>
        <button class="btn btn-ghost" onclick="copyPromoLink(${p.id})">${IC.globe||IC.link} Copier lien</button>
      </div>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:8px">
      <button class="btn btn-primary" style="flex:1" onclick="editPromotion(${p.id})">${IC.edit||IC.settings} Modifier</button>
      <button class="btn btn-ghost" style="flex:1" onclick="togglePromoActive(${p.id})">${p.active?'Désactiver':'Activer'}</button>
    </div>
    <button class="btn btn-ghost" style="color:var(--danger);border-color:var(--danger);width:100%" onclick="deletePromotion(${p.id})">${IC.trash||'🗑'} Supprimer</button>
  </div>`;
}

function togglePromoActive(id) {
  const p = S.promotions.find(x => x.id === id);
  if (!p) return;
  p.active = !p.active;
  localStorage.setItem('stockr_promotions', JSON.stringify(S.promotions));
  showToast(p.active ? 'Réduction activée' : 'Réduction désactivée');
  render();
}

function deletePromotion(id) {
  if (!confirm('Supprimer définitivement cette réduction ?')) return;
  S.promotions = S.promotions.filter(x => x.id !== id);
  localStorage.setItem('stockr_promotions', JSON.stringify(S.promotions));
  showToast('Réduction supprimée');
  if (S.view === 'promo-detail') S.view = 'marketing';
  S.viewingPromoId = null;
  render();
}

function viewPromo(id) {
  S.viewingPromoId = id;
  S.view = 'promo-detail';
  render();
}

// Calcule le prix après application de la promo sur un article unitaire
function _applyPromoValue(price, promo) {
  if (!promo) return price;
  if (promo.type === 'fixed') return Math.max(0, price - promo.value);
  const disc = promo.value || promo.discount || 0;
  return Math.round(price * (1 - disc/100));
}

// Valide un code promo pour un client/produit et renvoie la promo applicable
function validatePromoCode(code, clientId, productId) {
  if (!code) return { ok:false, error:'Code manquant' };
  const p = (S.promotions||[]).find(x => x.code?.toUpperCase() === code.toUpperCase());
  if (!p) return { ok:false, error:'Code invalide' };
  if (!p.active) return { ok:false, error:'Réduction désactivée' };
  const now = new Date().toISOString().slice(0,10);
  if (p.startDate && p.startDate > now) return { ok:false, error:'Réduction pas encore active' };
  if (p.endDate && p.endDate < now) return { ok:false, error:'Réduction expirée' };
  if (p.maxUses > 0 && (p.usageCount||0) >= p.maxUses) return { ok:false, error:'Limite d\'utilisation atteinte' };
  if (clientId && p.maxUsesPerClient > 0) {
    const used = (p.usageByClient||{})[clientId] || 0;
    if (used >= p.maxUsesPerClient) return { ok:false, error:'Vous avez atteint votre limite' };
  }
  if (productId && (p.products||[]).length > 0 && !p.products.includes(productId)) {
    return { ok:false, error:'Ce code ne s\'applique pas à ce produit' };
  }
  return { ok:true, promo:p };
}

// Enregistre une utilisation (appelé lors d'une vente avec code)
function _recordPromoUsage(promoId, clientId) {
  const p = S.promotions.find(x => x.id === promoId);
  if (!p) return;
  p.usageCount = (p.usageCount||0) + 1;
  if (clientId) {
    p.usageByClient = p.usageByClient || {};
    p.usageByClient[clientId] = (p.usageByClient[clientId]||0) + 1;
  }
  localStorage.setItem('stockr_promotions', JSON.stringify(S.promotions));
}

// Promo auto-applicable sur un produit (sans code, pour affichage vitrine)
function _getActivePromo(productId) {
  const now = new Date().toISOString().slice(0,10);
  return (S.promotions||[]).find(p =>
    p.active &&
    (p.startDate||'') <= now && (p.endDate||'9999') >= now &&
    (!p.maxUses || (p.usageCount||0) < p.maxUses) &&
    ((p.products||[]).length === 0 || (p.products||[]).includes(productId))
  );
}

// ── Partage / Copy ───────────────────────────
function _promoShareText(p) {
  const biz = S.session?.business || 'notre boutique';
  const val = p.type==='fixed' ? `${fmt(p.value)} ${sym()} de réduction` : `${p.value}% de réduction`;
  return `🎉 Offre ${biz} !\n\n${p.name} — ${val}\n\nCode promo : *${p.code}*\n\nValable jusqu'au ${p.endDate}\n${(p.products||[]).length>0?'Sur produits sélectionnés':'Sur tous les produits'}`;
}

function sharePromoWhatsApp(id) {
  const p = S.promotions.find(x => x.id === id);
  if (!p) return;
  const msg = encodeURIComponent(_promoShareText(p));
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function sharePromoSMS(id) {
  const p = S.promotions.find(x => x.id === id);
  if (!p) return;
  const msg = encodeURIComponent(_promoShareText(p));
  window.open(`sms:?body=${msg}`, '_blank');
}

function copyPromoCode(code) {
  navigator.clipboard?.writeText(code).then(() => showToast(`Code ${code} copié !`));
}

function copyPromoLink(id) {
  const p = S.promotions.find(x => x.id === id);
  if (!p) return;
  const domain = S.boutiqueConfig?.domain || 'maboutique';
  const link = `https://${domain}.stockr.shop/?promo=${p.code}`;
  navigator.clipboard?.writeText(link).then(() => showToast('Lien copié !'));
}

// ═══════════════════════════════════════════════
// BANNIÈRES (CRUD + partage)
// ═══════════════════════════════════════════════
function addBanner() {
  S.editingBannerId = null;
  S.view = 'banner-form';
  render();
}
function editBanner(id) {
  S.editingBannerId = id;
  S.view = 'banner-form';
  render();
}
function vBannerForm() {
  const isEdit = !!S.editingBannerId;
  const b = isEdit ? S.banners.find(x => x.id === S.editingBannerId) : null;
  const today = new Date().toISOString().slice(0,10);
  const plus30 = new Date(Date.now()+30*86400000).toISOString().slice(0,10);
  const draft = b || { text:'Livraison gratuite dès 20 000 FCFA !', subText:'', emoji:'🚚', bgColor:'#4F46E5', textColor:'#FFFFFF', linkUrl:'', linkText:'', active:true, startDate:today, endDate:plus30, position:'top', dismissible:true };
  const colors = [
    {bg:'#4F46E5', fg:'#fff', name:'Indigo'},
    {bg:'#059669', fg:'#fff', name:'Vert'},
    {bg:'#DC2626', fg:'#fff', name:'Rouge'},
    {bg:'#F59E0B', fg:'#fff', name:'Orange'},
    {bg:'#000000', fg:'#fff', name:'Noir'},
    {bg:'#FFFFFF', fg:'#000', name:'Blanc'},
    {bg:'#7C3AED', fg:'#fff', name:'Violet'},
    {bg:'#0284C7', fg:'#fff', name:'Bleu'},
  ];
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="S.editingBannerId=null;nav('marketing')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">${isEdit?'Modifier bannière':'Nouvelle bannière'}</div>
        <div class="sub-hero-sub">Message affiché sur votre boutique</div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:10px;padding:0;overflow:hidden">
      <div id="banner-preview" style="background:${draft.bgColor};color:${draft.textColor};padding:14px;display:flex;align-items:center;gap:10px;font-weight:600;font-size:13px">
        <span id="bn-prev-emoji" style="font-size:18px">${draft.emoji}</span>
        <div id="bn-prev-text" style="flex:1">${draft.text}</div>
        ${draft.linkText?`<span id="bn-prev-link" style="background:rgba(255,255,255,0.25);padding:4px 10px;border-radius:6px;font-size:11px;font-weight:700">${draft.linkText}</span>`:''}
      </div>
      <div style="padding:8px 14px;font-size:10px;color:var(--text-3);background:var(--gray-1)">Aperçu en temps réel</div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Contenu</div>
      <div class="form-group">
        <label class="form-label">Texte <span style="color:var(--danger)">*</span></label>
        <input class="input" id="bn-text" value="${draft.text||''}" placeholder="Livraison gratuite dès 20 000 FCFA !" oninput="$('bn-prev-text').textContent=this.value">
      </div>
      <div class="form-group">
        <label class="form-label">Emoji (optionnel)</label>
        <input class="input" id="bn-emoji" value="${draft.emoji||''}" placeholder="🚚" maxlength="4" oninput="$('bn-prev-emoji').textContent=this.value" style="font-size:18px;text-align:center">
        <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
          ${['🎉','🔥','🚚','💥','⭐','🎁','💰','✨','⚡','🆕','👑'].map(e => `<button class="btn btn-ghost" style="font-size:16px;padding:4px 8px;min-width:32px" onclick="$('bn-emoji').value='${e}';$('bn-prev-emoji').textContent='${e}'">${e}</button>`).join('')}
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Couleurs</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${colors.map(c => `
        <div onclick="document.querySelectorAll('.bn-color').forEach(e=>e.style.borderColor='transparent');this.style.borderColor='#000';$('bn-bg').value='${c.bg}';$('bn-fg').value='${c.fg}';$('banner-preview').style.background='${c.bg}';$('banner-preview').style.color='${c.fg}'" class="bn-color" style="cursor:pointer;width:40px;height:40px;border-radius:50%;background:${c.bg};border:3px solid ${draft.bgColor===c.bg?'#000':'transparent'};display:flex;align-items:center;justify-content:center;color:${c.fg};font-size:10px;font-weight:800" title="${c.name}">Aa</div>`).join('')}
      </div>
      <input type="hidden" id="bn-bg" value="${draft.bgColor}">
      <input type="hidden" id="bn-fg" value="${draft.textColor}">
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Action (optionnel)</div>
      <div class="form-group">
        <label class="form-label">Texte du bouton</label>
        <input class="input" id="bn-linktext" value="${draft.linkText||''}" placeholder="Voir les offres">
      </div>
      <div class="form-group">
        <label class="form-label">Lien cible</label>
        <input class="input" id="bn-linkurl" value="${draft.linkUrl||''}" placeholder="https://... ou #promos">
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Affichage</div>
      <div class="form-group">
        <label class="form-label">Position</label>
        <div style="display:flex;gap:8px">
          <label class="form-radio" style="flex:1">
            <input type="radio" name="bn-pos" value="top" ${draft.position!=='bottom'?'checked':''}>
            <span>↑ En haut</span>
          </label>
          <label class="form-radio" style="flex:1">
            <input type="radio" name="bn-pos" value="bottom" ${draft.position==='bottom'?'checked':''}>
            <span>↓ En bas</span>
          </label>
        </div>
      </div>
      <div style="display:flex;gap:8px">
        <div class="form-group" style="flex:1"><label class="form-label">Début</label><input class="input" type="date" id="bn-start" value="${draft.startDate||today}"></div>
        <div class="form-group" style="flex:1"><label class="form-label">Fin</label><input class="input" type="date" id="bn-end" value="${draft.endDate||plus30}"></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
        <div><div style="font-weight:700;font-size:13px">Bouton fermer</div><div style="font-size:11px;color:var(--text-3)">Le visiteur peut masquer</div></div>
        <label class="toggle-switch"><input type="checkbox" id="bn-dismiss" ${draft.dismissible!==false?'checked':''}><span class="toggle-track"></span></label>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
        <div><div style="font-weight:700;font-size:13px">Activer</div><div style="font-size:11px;color:var(--text-3)">Visible immédiatement sur votre boutique</div></div>
        <label class="toggle-switch"><input type="checkbox" id="bn-active" ${draft.active!==false?'checked':''}><span class="toggle-track"></span></label>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      ${isEdit?`<button class="btn btn-ghost" style="color:var(--danger);border-color:var(--danger)" onclick="deleteBanner(${draft.id})">🗑 Supprimer</button>`:''}
      <button class="btn btn-primary" style="flex:1" onclick="saveBanner()">${IC.check} ${isEdit?'Mettre à jour':'Créer la bannière'}</button>
    </div>
  </div>`;
}
function saveBanner() {
  const text = ($('bn-text')?.value||'').trim();
  if (!text) { showToast('Texte obligatoire', 'error'); return; }
  const draft = {
    text,
    emoji: $('bn-emoji')?.value || '',
    bgColor: $('bn-bg')?.value || '#4F46E5',
    textColor: $('bn-fg')?.value || '#FFFFFF',
    linkUrl: $('bn-linkurl')?.value || '',
    linkText: $('bn-linktext')?.value || '',
    position: document.querySelector('input[name="bn-pos"]:checked')?.value || 'top',
    startDate: $('bn-start')?.value,
    endDate: $('bn-end')?.value,
    dismissible: $('bn-dismiss')?.checked !== false,
    active: $('bn-active')?.checked !== false,
  };
  if (S.editingBannerId) {
    const b = S.banners.find(x => x.id === S.editingBannerId);
    if (b) { Object.assign(b, draft); showToast('Bannière mise à jour'); }
  } else {
    S.banners.push({ id: Date.now(), ...draft, createdAt: new Date().toISOString() });
    logActivity('banner', `Bannière créée : ${text.slice(0,40)}`);
    showToast('Bannière créée');
  }
  localStorage.setItem('stockr_banners', JSON.stringify(S.banners));
  S.editingBannerId = null;
  S.view = 'marketing';
  S.marketingTab = 'banners';
  render();
}
function toggleBannerActive(id) {
  const b = S.banners.find(x => x.id === id);
  if (!b) return;
  b.active = !b.active;
  localStorage.setItem('stockr_banners', JSON.stringify(S.banners));
  showToast(b.active ? 'Bannière activée' : 'Bannière désactivée');
  render();
}
function deleteBanner(id) {
  if (!confirm('Supprimer cette bannière ?')) return;
  S.banners = S.banners.filter(x => x.id !== id);
  localStorage.setItem('stockr_banners', JSON.stringify(S.banners));
  showToast('Bannière supprimée');
  if (S.view === 'banner-form') { S.view='marketing'; S.marketingTab='banners'; S.editingBannerId=null; }
  render();
}

// ═══════════════════════════════════════════════
// POPUPS (CRUD + partage)
// ═══════════════════════════════════════════════
function addPopup() {
  S.editingPopupId = null;
  S.view = 'popup-form';
  render();
}
function editPopup(id) {
  S.editingPopupId = id;
  S.view = 'popup-form';
  render();
}
function vPopupForm() {
  const isEdit = !!S.editingPopupId;
  const p = isEdit ? S.popups.find(x => x.id === S.editingPopupId) : null;
  const today = new Date().toISOString().slice(0,10);
  const plus30 = new Date(Date.now()+30*86400000).toISOString().slice(0,10);
  const draft = p || { title:'-10% sur votre première commande !', message:'Utilisez le code BIENVENUE10 pour profiter de 10% de remise.', emoji:'🎉', trigger:'time', triggerValue:5, ctaText:'En profiter', ctaUrl:'', promoCode:'', bgColor:'#4F46E5', textColor:'#FFFFFF', active:true, showOnce:true, startDate:today, endDate:plus30 };
  const promos = (S.promotions||[]).filter(x => x.active);
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="S.editingPopupId=null;nav('marketing')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">${isEdit?'Modifier popup':'Nouveau popup'}</div>
        <div class="sub-hero-sub">Offre mise en avant pour vos visiteurs</div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:10px;padding:0;overflow:hidden">
      <div id="pp-preview" style="background:${draft.bgColor};color:${draft.textColor};padding:24px 18px;text-align:center;border-radius:8px">
        <div style="font-size:40px;margin-bottom:8px" id="pp-prev-emoji">${draft.emoji}</div>
        <div style="font-size:18px;font-weight:800;margin-bottom:6px" id="pp-prev-title">${draft.title}</div>
        <div style="font-size:13px;opacity:0.9;margin-bottom:12px" id="pp-prev-message">${draft.message}</div>
        ${draft.promoCode?`<div id="pp-prev-code" style="background:rgba(255,255,255,0.25);padding:8px 14px;border-radius:8px;font-family:monospace;font-weight:800;letter-spacing:2px;display:inline-block;margin-bottom:10px">${draft.promoCode}</div>`:''}
        <div><button style="background:rgba(255,255,255,0.25);color:${draft.textColor};padding:10px 24px;border:none;border-radius:8px;font-weight:700;cursor:pointer;backdrop-filter:blur(4px)" id="pp-prev-cta">${draft.ctaText}</button></div>
      </div>
      <div style="padding:8px 14px;font-size:10px;color:var(--text-3);background:var(--gray-1)">Aperçu en temps réel</div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Contenu</div>
      <div class="form-group">
        <label class="form-label">Emoji / Icône</label>
        <input class="input" id="pp-emoji" value="${draft.emoji||''}" oninput="$('pp-prev-emoji').textContent=this.value" style="font-size:20px;text-align:center">
        <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
          ${['🎉','🎁','🔥','💥','⭐','💰','🎊','✨','⚡','🛍️','🏷️','💎'].map(e => `<button class="btn btn-ghost" style="font-size:18px;padding:4px 8px" onclick="$('pp-emoji').value='${e}';$('pp-prev-emoji').textContent='${e}'">${e}</button>`).join('')}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Titre <span style="color:var(--danger)">*</span></label>
        <input class="input" id="pp-title" value="${draft.title||''}" oninput="$('pp-prev-title').textContent=this.value" placeholder="-10% sur votre première commande !">
      </div>
      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="input" id="pp-message" rows="3" oninput="$('pp-prev-message').textContent=this.value" placeholder="Utilisez le code BIENVENUE10...">${draft.message||''}</textarea>
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Déclencheur</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
        ${[
          {id:'entry',label:"À l'entrée",ico:'👋',desc:"Dès l'ouverture"},
          {id:'time',label:'Après temps',ico:'⏱️',desc:'Après X secondes'},
          {id:'scroll',label:'Au scroll',ico:'📜',desc:'Après X% de scroll'},
          {id:'exit',label:'À la sortie',ico:'👋',desc:'Intention de partir'},
        ].map(tg => `
        <label class="promo-type-opt ${draft.trigger===tg.id?'selected':''}" onclick="document.querySelectorAll('[data-pp-trig]').forEach(e=>e.classList.remove('selected'));this.classList.add('selected');$('pp-trigger').value='${tg.id}';document.getElementById('pp-trig-val-wrap').style.display=['time','scroll'].includes('${tg.id}')?'block':'none';$('pp-trig-val-lbl').textContent='${tg.id==='time'?'Secondes':tg.id==='scroll'?'% de scroll':''}'" data-pp-trig="${tg.id}">
          <div style="font-size:22px">${tg.ico}</div>
          <div style="font-size:12px;font-weight:700;margin-top:4px">${tg.label}</div>
          <div style="font-size:9px;color:var(--text-3)">${tg.desc}</div>
        </label>`).join('')}
      </div>
      <input type="hidden" id="pp-trigger" value="${draft.trigger}">
      <div id="pp-trig-val-wrap" class="form-group" style="display:${['time','scroll'].includes(draft.trigger)?'block':'none'}">
        <label class="form-label"><span id="pp-trig-val-lbl">${draft.trigger==='time'?'Secondes':'% de scroll'}</span></label>
        <input class="input" type="number" id="pp-trig-val" value="${draft.triggerValue||5}" min="1">
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Action</div>
      <div class="form-group">
        <label class="form-label">Texte du bouton</label>
        <input class="input" id="pp-cta-text" value="${draft.ctaText||''}" oninput="$('pp-prev-cta').textContent=this.value" placeholder="En profiter">
      </div>
      <div class="form-group">
        <label class="form-label">Code promo associé (optionnel)</label>
        <select class="input" id="pp-promo">
          <option value="">Aucun</option>
          ${promos.map(pr => `<option value="${pr.code}" ${draft.promoCode===pr.code?'selected':''}>${pr.code} — ${pr.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Lien cible (optionnel)</label>
        <input class="input" id="pp-cta-url" value="${draft.ctaUrl||''}" placeholder="https://...">
      </div>
    </div>

    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Couleurs</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${[{bg:'#4F46E5',fg:'#fff'},{bg:'#059669',fg:'#fff'},{bg:'#DC2626',fg:'#fff'},{bg:'#F59E0B',fg:'#fff'},{bg:'#000',fg:'#fff'},{bg:'#fff',fg:'#000'},{bg:'#7C3AED',fg:'#fff'},{bg:'#0F172A',fg:'#fff'}].map(c => `
        <div onclick="$('pp-bg').value='${c.bg}';$('pp-fg').value='${c.fg}';$('pp-preview').style.background='${c.bg}';$('pp-preview').style.color='${c.fg}'" style="cursor:pointer;width:40px;height:40px;border-radius:50%;background:${c.bg};border:3px solid ${draft.bgColor===c.bg?'#000':'transparent'}"></div>`).join('')}
      </div>
      <input type="hidden" id="pp-bg" value="${draft.bgColor}">
      <input type="hidden" id="pp-fg" value="${draft.textColor}">
    </div>

    <div class="card" style="margin-bottom:10px">
      <div style="display:flex;gap:8px">
        <div class="form-group" style="flex:1"><label class="form-label">Début</label><input class="input" type="date" id="pp-start" value="${draft.startDate||today}"></div>
        <div class="form-group" style="flex:1"><label class="form-label">Fin</label><input class="input" type="date" id="pp-end" value="${draft.endDate||plus30}"></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
        <div><div style="font-weight:700;font-size:13px">Afficher une seule fois</div><div style="font-size:11px;color:var(--text-3)">Par visiteur (via cookie)</div></div>
        <label class="toggle-switch"><input type="checkbox" id="pp-once" ${draft.showOnce!==false?'checked':''}><span class="toggle-track"></span></label>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
        <div><div style="font-weight:700;font-size:13px">Activer</div><div style="font-size:11px;color:var(--text-3)">Visible sur votre boutique</div></div>
        <label class="toggle-switch"><input type="checkbox" id="pp-active" ${draft.active!==false?'checked':''}><span class="toggle-track"></span></label>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      ${isEdit?`<button class="btn btn-ghost" style="color:var(--danger);border-color:var(--danger)" onclick="deletePopup(${draft.id})">🗑 Supprimer</button>`:''}
      <button class="btn btn-primary" style="flex:1" onclick="savePopup()">${IC.check} ${isEdit?'Mettre à jour':'Créer le popup'}</button>
    </div>
  </div>`;
}
function savePopup() {
  const title = ($('pp-title')?.value||'').trim();
  if (!title) { showToast('Titre obligatoire', 'error'); return; }
  const draft = {
    title,
    message: $('pp-message')?.value || '',
    emoji: $('pp-emoji')?.value || '🎉',
    trigger: $('pp-trigger')?.value || 'time',
    triggerValue: parseInt($('pp-trig-val')?.value) || 5,
    ctaText: $('pp-cta-text')?.value || 'En profiter',
    ctaUrl: $('pp-cta-url')?.value || '',
    promoCode: $('pp-promo')?.value || '',
    bgColor: $('pp-bg')?.value || '#4F46E5',
    textColor: $('pp-fg')?.value || '#FFFFFF',
    startDate: $('pp-start')?.value,
    endDate: $('pp-end')?.value,
    showOnce: $('pp-once')?.checked !== false,
    active: $('pp-active')?.checked !== false,
  };
  if (S.editingPopupId) {
    const p = S.popups.find(x => x.id === S.editingPopupId);
    if (p) { Object.assign(p, draft); showToast('Popup mis à jour'); }
  } else {
    S.popups.push({ id: Date.now(), ...draft, createdAt: new Date().toISOString() });
    logActivity('popup', `Popup créé : ${title.slice(0,40)}`);
    showToast('Popup créé');
  }
  localStorage.setItem('stockr_popups', JSON.stringify(S.popups));
  S.editingPopupId = null;
  S.view = 'marketing';
  S.marketingTab = 'popups';
  render();
}
function togglePopupActive(id) {
  const p = S.popups.find(x => x.id === id);
  if (!p) return;
  p.active = !p.active;
  localStorage.setItem('stockr_popups', JSON.stringify(S.popups));
  showToast(p.active ? 'Popup activé' : 'Popup désactivé');
  render();
}
function deletePopup(id) {
  if (!confirm('Supprimer ce popup ?')) return;
  S.popups = S.popups.filter(x => x.id !== id);
  localStorage.setItem('stockr_popups', JSON.stringify(S.popups));
  showToast('Popup supprimé');
  if (S.view === 'popup-form') { S.view='marketing'; S.marketingTab='popups'; S.editingPopupId=null; }
  render();
}

// ═══════════════════════════════════════════════
// AVIS / PROOF (CRUD + demande + approbation)
// ═══════════════════════════════════════════════
function addReview() {
  S.editingReviewId = null;
  S.view = 'review-form';
  render();
}
function editReview(id) {
  S.editingReviewId = id;
  S.view = 'review-form';
  render();
}
function vReviewForm() {
  const isEdit = !!S.editingReviewId;
  const r = isEdit ? S.reviews.find(x => x.id === S.editingReviewId) : null;
  const draft = r || { clientName:'', rating:5, comment:'', productId:null, date:new Date().toISOString(), approved:true, verified:false };
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="S.editingReviewId=null;nav('marketing')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">${isEdit?'Modifier avis':'Nouvel avis client'}</div>
        <div class="sub-hero-sub">Témoignage affiché sur votre boutique</div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:10px">
      <div class="form-group">
        <label class="form-label">Nom du client <span style="color:var(--danger)">*</span></label>
        <input class="input" id="rv-name" value="${draft.clientName||''}" placeholder="Ex: Aminata K.">
      </div>
      <div class="form-group">
        <label class="form-label">Note <span style="color:var(--danger)">*</span></label>
        <div style="display:flex;gap:6px;font-size:32px;cursor:pointer;justify-content:center" id="rv-stars">
          ${[1,2,3,4,5].map(n => `<span data-star="${n}" onclick="document.querySelectorAll('#rv-stars span').forEach(s=>{s.style.color=parseInt(s.dataset.star)<=${n}?'#F59E0B':'#D1D5DB'});$('rv-rating').value='${n}'" style="color:${n<=draft.rating?'#F59E0B':'#D1D5DB'};transition:.2s">★</span>`).join('')}
        </div>
        <input type="hidden" id="rv-rating" value="${draft.rating}">
      </div>
      <div class="form-group">
        <label class="form-label">Commentaire</label>
        <textarea class="input" id="rv-comment" rows="4" placeholder="Excellent service, livraison rapide...">${draft.comment||''}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Produit concerné (optionnel)</label>
        <select class="input" id="rv-product">
          <option value="">— Général (tout produit) —</option>
          ${(S.products||[]).map(p => `<option value="${p.id}" ${draft.productId==p.id?'selected':''}>${p.name}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
        <div><div style="font-weight:700;font-size:13px">Client vérifié</div><div style="font-size:11px;color:var(--text-3)">Badge "✓ Vérifié" visible</div></div>
        <label class="toggle-switch"><input type="checkbox" id="rv-verified" ${draft.verified?'checked':''}><span class="toggle-track"></span></label>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
        <div><div style="font-weight:700;font-size:13px">Publié</div><div style="font-size:11px;color:var(--text-3)">Visible sur la boutique</div></div>
        <label class="toggle-switch"><input type="checkbox" id="rv-approved" ${draft.approved!==false?'checked':''}><span class="toggle-track"></span></label>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      ${isEdit?`<button class="btn btn-ghost" style="color:var(--danger);border-color:var(--danger)" onclick="deleteReview(${draft.id})">🗑 Supprimer</button>`:''}
      <button class="btn btn-primary" style="flex:1" onclick="saveReview()">${IC.check} ${isEdit?'Mettre à jour':"Créer l'avis"}</button>
    </div>
  </div>`;
}
function saveReview() {
  const clientName = ($('rv-name')?.value||'').trim();
  if (!clientName) { showToast('Nom du client obligatoire', 'error'); return; }
  const draft = {
    clientName,
    rating: parseInt($('rv-rating')?.value) || 5,
    comment: $('rv-comment')?.value || '',
    productId: $('rv-product')?.value ? parseInt($('rv-product').value) : null,
    verified: $('rv-verified')?.checked === true,
    approved: $('rv-approved')?.checked !== false,
  };
  if (S.editingReviewId) {
    const r = S.reviews.find(x => x.id === S.editingReviewId);
    if (r) { Object.assign(r, draft); showToast('Avis mis à jour'); }
  } else {
    S.reviews.unshift({ id: Date.now(), ...draft, date: new Date().toISOString() });
    logActivity('review', `Avis ${draft.rating}★ par ${clientName}`);
    showToast('Avis ajouté');
  }
  localStorage.setItem('stockr_reviews', JSON.stringify(S.reviews));
  S.editingReviewId = null;
  S.view = 'marketing';
  S.marketingTab = 'reviews';
  render();
}
function approveReview(id) {
  const r = S.reviews.find(x => x.id === id);
  if (!r) return;
  r.approved = true;
  localStorage.setItem('stockr_reviews', JSON.stringify(S.reviews));
  showToast('Avis publié');
  render();
}
function deleteReview(id) {
  if (!confirm('Supprimer cet avis ?')) return;
  S.reviews = S.reviews.filter(x => x.id !== id);
  localStorage.setItem('stockr_reviews', JSON.stringify(S.reviews));
  showToast('Avis supprimé');
  if (S.view === 'review-form') { S.view='marketing'; S.marketingTab='reviews'; S.editingReviewId=null; }
  render();
}
function copyReviewLink() {
  const domain = S.boutiqueConfig?.domain || 'maboutique';
  const link = `https://${domain}.stockr.shop/avis`;
  navigator.clipboard?.writeText(link).then(() => showToast('Lien copié — partagez à vos clients'));
}
function shareReviewLink() {
  const biz = S.session?.business || 'notre boutique';
  const domain = S.boutiqueConfig?.domain || 'maboutique';
  const msg = encodeURIComponent(`Bonjour ! Merci d'avoir choisi ${biz} 🙏\n\nVotre avis compte énormément pour nous. Pouvez-vous nous laisser un petit témoignage ici :\n\nhttps://${domain}.stockr.shop/avis\n\nMerci infiniment !`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

// ═══════════════════════════════════════════════
// LIENS TRACKÉS (UTM)
// ═══════════════════════════════════════════════
function addTrackingLink() {
  S.editingTrackingId = null;
  S.view = 'tracking-form';
  render();
}
function editTrackingLink(id) {
  S.editingTrackingId = id;
  S.view = 'tracking-form';
  render();
}
function vTrackingForm() {
  const isEdit = !!S.editingTrackingId;
  const t = isEdit ? S.trackingLinks.find(x => x.id === S.editingTrackingId) : null;
  const domain = S.boutiqueConfig?.domain || 'maboutique';
  const draft = t || { name:'', destUrl:`https://${domain}.stockr.shop/`, source:'facebook', medium:'social', campaign:'', clicks:0, active:true };
  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="S.editingTrackingId=null;nav('marketing')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">${isEdit?'Modifier lien':'Nouveau lien tracé'}</div>
        <div class="sub-hero-sub">Pour identifier l'origine de vos clients</div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Informations</div>
      <div class="form-group">
        <label class="form-label">Nom de la campagne <span style="color:var(--danger)">*</span></label>
        <input class="input" id="tk-name" value="${draft.name||''}" placeholder="Ex: Pub Facebook Soldes Janvier">
      </div>
      <div class="form-group">
        <label class="form-label">URL de destination <span style="color:var(--danger)">*</span></label>
        <input class="input" id="tk-dest" value="${draft.destUrl||''}" placeholder="https://maboutique.stockr.shop/">
      </div>
    </div>
    <div class="card" style="margin-bottom:10px">
      <div class="card-title">Source du trafic</div>
      <div class="form-group">
        <label class="form-label">Source (d'où vient le clic)</label>
        <select class="input" id="tk-source">
          ${['facebook','instagram','tiktok','whatsapp','twitter','google','youtube','email','sms','affiche','autre'].map(s => `<option value="${s}" ${draft.source===s?'selected':''}>${s}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Canal (type de contenu)</label>
        <select class="input" id="tk-medium">
          ${['social','paid','organic','email','sms','cpc','affiliate','referral'].map(m => `<option value="${m}" ${draft.medium===m?'selected':''}>${m}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Nom court campagne (optionnel)</label>
        <input class="input" id="tk-campaign" value="${draft.campaign||''}" placeholder="soldes_janvier">
      </div>
    </div>
    <div style="display:flex;gap:8px">
      ${isEdit?`<button class="btn btn-ghost" style="color:var(--danger);border-color:var(--danger)" onclick="deleteTrackingLink(${draft.id})">🗑 Supprimer</button>`:''}
      <button class="btn btn-primary" style="flex:1" onclick="saveTrackingLink()">${IC.check} ${isEdit?'Mettre à jour':'Créer le lien'}</button>
    </div>
  </div>`;
}
function saveTrackingLink() {
  const name = ($('tk-name')?.value||'').trim();
  const destUrl = ($('tk-dest')?.value||'').trim();
  if (!name || !destUrl) { showToast('Nom et URL obligatoires', 'error'); return; }
  const draft = {
    name, destUrl,
    source: $('tk-source')?.value || 'autre',
    medium: $('tk-medium')?.value || 'social',
    campaign: ($('tk-campaign')?.value || name.toLowerCase().replace(/[^a-z0-9]+/g,'_')).slice(0,30),
  };
  if (S.editingTrackingId) {
    const tk = S.trackingLinks.find(x => x.id === S.editingTrackingId);
    if (tk) { Object.assign(tk, draft); showToast('Lien mis à jour'); }
  } else {
    S.trackingLinks.push({ id: Date.now(), ...draft, clicks: 0, active: true, createdAt: new Date().toISOString() });
    showToast('Lien tracé créé');
  }
  localStorage.setItem('stockr_tracking', JSON.stringify(S.trackingLinks));
  S.editingTrackingId = null;
  S.view = 'marketing';
  S.marketingTab = 'tracking';
  render();
}
function deleteTrackingLink(id) {
  if (!confirm('Supprimer ce lien ?')) return;
  S.trackingLinks = S.trackingLinks.filter(x => x.id !== id);
  localStorage.setItem('stockr_tracking', JSON.stringify(S.trackingLinks));
  showToast('Lien supprimé');
  if (S.view === 'tracking-form') { S.view='marketing'; S.marketingTab='tracking'; S.editingTrackingId=null; }
  render();
}
function _buildTrackingUrl(tk) {
  const base = tk.destUrl || '';
  const sep = base.includes('?') ? '&' : '?';
  const params = new URLSearchParams({
    utm_source: tk.source,
    utm_medium: tk.medium,
    utm_campaign: tk.campaign
  });
  return base + sep + params.toString();
}
function copyTrackingLink(id) {
  const tk = S.trackingLinks.find(x => x.id === id);
  if (!tk) return;
  const url = _buildTrackingUrl(tk);
  navigator.clipboard?.writeText(url).then(() => showToast('Lien copié !'));
  tk.clicks = (tk.clicks||0) + 0; // on ne compte que les vrais clics
  localStorage.setItem('stockr_tracking', JSON.stringify(S.trackingLinks));
}
function shareTrackingLink(id) {
  const tk = S.trackingLinks.find(x => x.id === id);
  if (!tk) return;
  const url = _buildTrackingUrl(tk);
  const msg = encodeURIComponent(`Découvrez ${S.session?.business||'notre boutique'} :\n${url}`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}
function addCampaign() {
  const name = prompt('Nom de la campagne :');
  if (!name) return;
  const typeChoice = prompt('Canal d\'envoi :\n1. WhatsApp\n2. SMS\n3. Email\nNumero :', '1');
  const typeMap = {'1':'whatsapp','2':'sms','3':'email'};
  const type = typeMap[typeChoice] || typeChoice?.toLowerCase() || 'whatsapp';
  // Pre-build message with active promos
  const activePromos = (S.promotions||[]).filter(p => p.active);
  const promoText = activePromos.length > 0 ? '\n\nOffres en cours:\n' + activePromos.map(p => `- ${p.name} (-${p.discount}%)`).join('\n') : '';
  const defaultMsg = `Bonjour ! ${S.session?.business||'Notre boutique'} vous informe : ${name}${promoText}\n\nMerci de votre confiance !`;
  const message = prompt('Message de la campagne :', defaultMsg) || defaultMsg;
  const clientsWithPhone = S.clients.filter(cl => cl.phone);
  const clientsWithEmail = S.clients.filter(cl => cl.email);
  const recipients = type === 'email' ? clientsWithEmail.length : type === 'sms' || type === 'whatsapp' ? clientsWithPhone.length : S.clients.length;
  const campaign = { id:Date.now(), name, type, message, recipients, sent:false, date:new Date().toISOString(), sentCount:0 };
  S.campaigns.push(campaign);
  localStorage.setItem('stockr_campaigns', JSON.stringify(S.campaigns));
  logActivity('campaign', `Campagne "${name}" (${type}) - ${recipients} destinataires`);
  showToast(`Campagne "${name}" créée — ${recipients} destinataires`);
  render();
}
function sendCampaign(id) {
  const c = S.campaigns.find(x => x.id === id);
  if (!c) return;
  const msg = c.message || c.name;
  if (c.type === 'whatsapp') {
    const clientsWithPhone = S.clients.filter(cl => cl.phone);
    if (clientsWithPhone.length > 0) {
      // Open WhatsApp for each client sequentially
      const phone = clientsWithPhone[0].phone.replace(/\s/g, '').replace(/^\+?225/, '225');
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
      // Show list of remaining clients to send to
      if (clientsWithPhone.length > 1) {
        const remaining = clientsWithPhone.slice(1).map(cl => `${cl.name}: ${cl.phone}`).join('\n');
        setTimeout(() => {
          alert(`Message envoyé au premier client.\n\nClients restants (${clientsWithPhone.length - 1}):\n${remaining}\n\nCopiez le message et envoyez manuellement ou utilisez WhatsApp Business pour l'envoi groupé.`);
        }, 1500);
      }
      showToast(`WhatsApp ouvert — ${clientsWithPhone.length} clients ciblés`);
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
      showToast('Aucun client avec numéro — WhatsApp ouvert sans destinataire');
    }
    c.sent = true;
    c.sentDate = new Date().toISOString();
    c.sentCount = clientsWithPhone.length;
    localStorage.setItem('stockr_campaigns', JSON.stringify(S.campaigns));
    render();
  } else if (c.type === 'sms') {
    const clientsWithPhone = S.clients.filter(cl => cl.phone);
    const phones = clientsWithPhone.map(cl => cl.phone.replace(/\s/g, '')).join(',');
    window.open(`sms:${phones}?body=${encodeURIComponent(msg)}`, '_blank');
    c.sent = true;
    c.sentDate = new Date().toISOString();
    c.sentCount = clientsWithPhone.length;
    localStorage.setItem('stockr_campaigns', JSON.stringify(S.campaigns));
    showToast(`SMS prêt — ${clientsWithPhone.length} destinataires`);
    render();
  } else if (c.type === 'email') {
    const clientsWithEmail = S.clients.filter(cl => cl.email);
    const emails = clientsWithEmail.map(cl => cl.email).join(',');
    const subject = encodeURIComponent(c.name);
    const body = encodeURIComponent(msg);
    window.open(`mailto:${emails}?subject=${subject}&body=${body}`, '_blank');
    c.sent = true;
    c.sentDate = new Date().toISOString();
    c.sentCount = clientsWithEmail.length;
    localStorage.setItem('stockr_campaigns', JSON.stringify(S.campaigns));
    showToast(`Email prêt — ${clientsWithEmail.length} destinataires`);
    render();
  }
}
function deleteCampaign(id) {
  S.campaigns = S.campaigns.filter(c => c.id !== id);
  localStorage.setItem('stockr_campaigns', JSON.stringify(S.campaigns));
  showToast('Campagne supprimee');
  render();
}
function toggleLoyalty() {
  if (!S.loyaltyConfig.enabled) {
    // Activate — let user configure
    const rate = parseInt(prompt('Points par FCFA depense :', String(S.loyaltyConfig.pointsPerFcfa || 1))) || 1;
    const rewardName = prompt('Nom de la premiere recompense :', 'Remise 10%') || 'Remise 10%';
    const rewardPts = parseInt(prompt('Points necessaires :', '500')) || 500;
    S.loyaltyConfig.enabled = true;
    S.loyaltyConfig.pointsPerFcfa = rate;
    if (!S.loyaltyConfig.rewards) S.loyaltyConfig.rewards = [];
    if (S.loyaltyConfig.rewards.length === 0) {
      S.loyaltyConfig.rewards.push({ name: rewardName, points: rewardPts });
    }
  } else {
    S.loyaltyConfig.enabled = false;
  }
  localStorage.setItem('stockr_loyalty', JSON.stringify(S.loyaltyConfig));
  showToast(S.loyaltyConfig.enabled ? 'Fidelite activee !' : 'Fidelite desactivee');
  render();
}
function addLoyaltyReward() {
  const name = prompt('Nom de la recompense :');
  if (!name) return;
  const pts = parseInt(prompt('Points necessaires :', '1000')) || 1000;
  const description = prompt('Description (optionnel) :', '') || '';
  const icon = prompt('Emoji (optionnel) :', '🎁') || '🎁';
  if (!S.loyaltyConfig.rewards) S.loyaltyConfig.rewards = [];
  S.loyaltyConfig.rewards.push({ name, points: pts, description, icon });
  S.loyaltyConfig.rewards.sort((a,b) => a.points - b.points);
  localStorage.setItem('stockr_loyalty', JSON.stringify(S.loyaltyConfig));
  showToast('Recompense ajoutee');
  render();
}
function editLoyaltyReward(idx) {
  const r = (S.loyaltyConfig.rewards||[])[idx];
  if (!r) return;
  const name = prompt('Nom :', r.name);
  if (name === null) return;
  const pts = parseInt(prompt('Points :', String(r.points))) || r.points;
  const description = prompt('Description :', r.description || '') || '';
  const icon = prompt('Emoji :', r.icon || '🎁') || '🎁';
  S.loyaltyConfig.rewards[idx] = { ...r, name: name || r.name, points: pts, description, icon };
  S.loyaltyConfig.rewards.sort((a,b) => a.points - b.points);
  localStorage.setItem('stockr_loyalty', JSON.stringify(S.loyaltyConfig));
  showToast('Recompense mise a jour');
  render();
}
function deleteLoyaltyReward(idx) {
  const r = (S.loyaltyConfig.rewards||[])[idx];
  if (!r) return;
  if (!confirm(`Supprimer la recompense "${r.name}" ?`)) return;
  S.loyaltyConfig.rewards.splice(idx, 1);
  localStorage.setItem('stockr_loyalty', JSON.stringify(S.loyaltyConfig));
  showToast('Recompense supprimee');
  render();
}
// ── TIER MANAGEMENT ─────────────────────────
function editLoyaltyRate() {
  const rate = parseFloat(prompt('Combien de points par 1 ' + sym() + ' depense ?\n(ex: 1 = 1 pt par FCFA, 0.01 = 1 pt par 100 FCFA)', String(S.loyaltyConfig.pointsPerFcfa || 1)));
  if (!rate || rate <= 0) return;
  S.loyaltyConfig.pointsPerFcfa = rate;
  localStorage.setItem('stockr_loyalty', JSON.stringify(S.loyaltyConfig));
  showToast('Taux mis a jour');
  render();
}
function toggleLoyaltyTierMode() {
  const current = S.loyaltyConfig.tierMode || 'spent';
  const next = current === 'spent' ? 'points' : 'spent';
  if (!confirm(`Basculer en mode "${next === 'points' ? 'Par points accumules' : 'Par montant depense cumule'}" ?`)) return;
  S.loyaltyConfig.tierMode = next;
  localStorage.setItem('stockr_loyalty', JSON.stringify(S.loyaltyConfig));
  showToast('Mode paliers : ' + (next === 'points' ? 'Par points' : 'Par depenses'));
  render();
}
function addLoyaltyTier() {
  const name = prompt('Nom du palier (ex: Diamant) :');
  if (!name) return;
  const mode = S.loyaltyConfig.tierMode || 'spent';
  const min = parseInt(prompt(`Seuil minimum (${mode==='points'?'points':sym()}) :`, '10000')) || 0;
  const perk = prompt('Avantage du palier :', 'Points x2.5 · acces VIP') || '';
  const icon = prompt('Emoji :', '💠') || '💠';
  const color = prompt('Couleur HEX :', '#06B6D4') || '#06B6D4';
  if (!S.loyaltyConfig.tiers) S.loyaltyConfig.tiers = [];
  const id = 'tier_' + Date.now();
  S.loyaltyConfig.tiers.push({ id, name, min, perk, icon, color, gradient:`linear-gradient(135deg,${color},${color}99)`, multiplier: 1 });
  S.loyaltyConfig.tiers.sort((a,b) => a.min - b.min);
  localStorage.setItem('stockr_loyalty', JSON.stringify(S.loyaltyConfig));
  showToast('Palier ajoute');
  render();
}
function editLoyaltyTier(idx) {
  const tiers = (S.loyaltyConfig.tiers || []).slice().sort((a,b) => a.min - b.min);
  const t = tiers[idx];
  if (!t) return;
  const name = prompt('Nom du palier :', t.name);
  if (name === null) return;
  const mode = S.loyaltyConfig.tierMode || 'spent';
  const min = parseInt(prompt(`Seuil minimum (${mode==='points'?'points':sym()}) :`, String(t.min))) || 0;
  const perk = prompt('Avantage :', t.perk || '') || '';
  const icon = prompt('Emoji :', t.icon || '★') || '★';
  const color = prompt('Couleur HEX :', t.color || '#4F46E5') || '#4F46E5';
  const multiplier = parseFloat(prompt('Multiplicateur de points (1 = normal, 2 = double) :', String(t.multiplier || 1))) || 1;
  const realIdx = S.loyaltyConfig.tiers.findIndex(x => x.id === t.id);
  if (realIdx >= 0) {
    S.loyaltyConfig.tiers[realIdx] = { ...t, name: name || t.name, min, perk, icon, color, gradient:`linear-gradient(135deg,${color},${color}99)`, multiplier };
    S.loyaltyConfig.tiers.sort((a,b) => a.min - b.min);
    localStorage.setItem('stockr_loyalty', JSON.stringify(S.loyaltyConfig));
    showToast('Palier mis a jour');
    render();
  }
}
function deleteLoyaltyTier(idx) {
  const tiers = (S.loyaltyConfig.tiers || []).slice().sort((a,b) => a.min - b.min);
  const t = tiers[idx];
  if (!t) return;
  if ((S.loyaltyConfig.tiers || []).length <= 1) { showToast('Conservez au moins 1 palier', 'error'); return; }
  if (!confirm(`Supprimer le palier "${t.name}" ?`)) return;
  S.loyaltyConfig.tiers = S.loyaltyConfig.tiers.filter(x => x.id !== t.id);
  localStorage.setItem('stockr_loyalty', JSON.stringify(S.loyaltyConfig));
  showToast('Palier supprime');
  render();
}
function sendLoyaltyCampaign() {
  const vipClients = S.clients.filter(c => {
    const tier = _getClientTier(c);
    return tier && (tier.min >= 500 || (c.loyaltyPoints||0) > 0);
  });
  if (vipClients.length === 0) { showToast('Aucun client fidele', 'error'); return; }
  const msg = prompt(`Message a envoyer aux ${vipClients.length} clients fideles :`, `Bonjour, vous avez ${'{'+'points}'} points fidelite ! Echangez-les contre une recompense.`);
  if (!msg) return;
  const first = vipClients[0];
  const personalizedMsg = msg.replace('{points}', first.loyaltyPoints || 0).replace('{name}', first.name || '');
  const phone = (first.phone || '').replace(/[^0-9+]/g, '');
  if (phone) {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(personalizedMsg)}`, '_blank');
  }
  showToast(`Relance envoyee a ${first.name} (ouvrez WhatsApp pour les autres)`);
}
function exportLoyaltyReport() {
  const rows = [['Client','Telephone','Points','Depense_cumulee','Palier','Echanges']];
  S.clients.forEach(c => {
    const spent = _clientLifetimeSpent(c);
    const tier = _getClientTier(c);
    const redeemed = (c.redeemedRewards||[]).length;
    if ((c.loyaltyPoints||0) === 0 && spent === 0) return;
    rows.push([c.name||'', c.phone||'', c.loyaltyPoints||0, spent, tier?.name||'—', redeemed]);
  });
  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `stockr_fidelite_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Rapport fidelite exporte');
}
function redeemLoyaltyReward(clientId, rewardIndex) {
  const client = S.clients.find(c => c.id === clientId);
  if (!client) return;
  const reward = (S.loyaltyConfig.rewards||[])[rewardIndex];
  if (!reward) return;
  if ((client.loyaltyPoints||0) < reward.points) {
    showToast(`Points insuffisants (${client.loyaltyPoints||0}/${reward.points})`, 'error');
    return;
  }
  client.loyaltyPoints -= reward.points;
  if (!client.redeemedRewards) client.redeemedRewards = [];
  client.redeemedRewards.push({ name:reward.name, date:new Date().toISOString(), points:reward.points });
  localStorage.setItem('stockr_clients', JSON.stringify(S.clients));
  logActivity('loyalty', `${client.name} a utilise ${reward.points} pts pour "${reward.name}"`);
  showToast(`${client.name} a echange ${reward.points} pts pour "${reward.name}" !`);
  render();
}
function schedulePost() {
  if (S.products.length === 0) { showToast('Ajoutez des produits', 'error'); return; }
  const prodIdx = prompt('Produit :\n' + S.products.map((p,i) => `${i+1}. ${p.name}`).join('\n') + '\nNumero :', '1');
  if (!prodIdx) return;
  const prod = S.products[parseInt(prodIdx)-1];
  if (!prod) { showToast('Produit invalide', 'error'); return; }
  const channelChoice = prompt('Canal :\n1. WhatsApp\n2. Facebook\n3. Twitter/X\n4. SMS\n5. Copier\nNuméro :', '1');
  const channelMap = {'1':'whatsapp','2':'facebook','3':'twitter','4':'sms','5':'copy'};
  const channel = channelMap[channelChoice] || channelChoice?.toLowerCase() || 'whatsapp';
  const dateStr = prompt('Date de publication (YYYY-MM-DD) :', new Date(Date.now()+86400000).toISOString().slice(0,10));
  if (!dateStr) return;
  const time = prompt('Heure (HH:MM) :', '10:00') || '10:00';
  const caption = prompt('Legende / message :', `${prod.name} — ${fmt(prod.price)} ${S.session?.currency_symbol||'FCFA'}. Commandez maintenant !`) || '';
  const post = {
    id: Date.now(), productId: prod.id, productName: prod.name,
    channel, scheduledDate: dateStr, scheduledTime: time, caption,
    status: 'scheduled', date: new Date().toISOString()
  };
  S.scheduledPosts.push(post);
  localStorage.setItem('stockr_posts', JSON.stringify(S.scheduledPosts));
  showToast(`Publication programmee pour le ${dateStr} a ${time}`);
  render();
}
function publishScheduledPost(id) {
  const post = S.scheduledPosts.find(p => p.id === id);
  if (!post) return;
  const prod = S.products.find(p => p.id === post.productId);
  const text = post.caption || `${post.productName} — Commandez maintenant !`;
  if (post.channel === 'whatsapp') window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
  else if (post.channel === 'facebook') window.open('https://www.facebook.com/sharer/sharer.php?quote='+encodeURIComponent(text),'_blank');
  else if (post.channel === 'twitter') window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(text),'_blank');
  else if (post.channel === 'sms') window.open('sms:?body='+encodeURIComponent(text),'_blank');
  else navigator.clipboard?.writeText(text).then(()=>showToast('Copie !'));
  post.status = 'published';
  post.publishedDate = new Date().toISOString();
  localStorage.setItem('stockr_posts', JSON.stringify(S.scheduledPosts));
  showToast('Publication envoyee !');
  render();
}
function deleteScheduledPost(id) {
  S.scheduledPosts = S.scheduledPosts.filter(p => p.id !== id);
  localStorage.setItem('stockr_posts', JSON.stringify(S.scheduledPosts));
  showToast('Publication supprimee');
  render();
}

// ── SOCIAL MEDIA ─────────────────────────────
function vSocialMedia() {
  const accounts = S.socialAccounts || [];
  const platforms = [
    { id:'instagram', name:'Instagram', icon:IC.instagram, color:'#E1306C', bg:'linear-gradient(135deg,#833AB4,#E1306C,#F77737)' },
    { id:'facebook',  name:'Facebook',  icon:IC.facebook,  color:'#1877F2', bg:'#1877F2' },
    { id:'tiktok',    name:'TikTok',    icon:IC.tiktok,    color:'#000000', bg:'linear-gradient(135deg,#000,#25F4EE)' },
    { id:'youtube',   name:'YouTube',   icon:IC.youtube,   color:'#FF0000', bg:'#FF0000' },
    { id:'twitter',   name:'X (Twitter)', icon:IC.share,    color:'#000000', bg:'linear-gradient(135deg,#1DA1F2,#000)' },
  ];

  return `
  <div class="page-header">
    <div class="page-header-row">
      <button class="back-btn" onclick="nav('more')">${IC.left}</button>
      <div class="page-title">Réseaux sociaux</div>
    </div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:14px">
      <div class="card-title">Publier un produit</div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:12px">Publie un produit sur tes réseaux en un clic</div>
      <select class="input" id="social-product-select" style="margin-bottom:10px">
        <option value="">— Choisir un produit —</option>
        ${S.products.map(p => `<option value="${p.id}">${p.name} — ${fmt(p.price)} ${sym()}</option>`).join('')}
      </select>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn btn-primary" style="flex:1" onclick="postProductSocial('whatsapp')">${IC.whatsapp} WhatsApp</button>
        <button class="btn" style="flex:1;background:#1877F2;color:#fff" onclick="postProductSocial('facebook')">${IC.facebook} Facebook</button>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <button class="btn" style="flex:1;background:#000;color:#fff;font-size:12px" onclick="postProductSocial('twitter')">𝕏 Twitter</button>
        <button class="btn btn-ghost" style="flex:1" onclick="postProductSocial('copy')">📋 Copier</button>
        <button class="btn btn-ghost" style="flex:1" onclick="postProductSocial('sms')">SMS</button>
      </div>
    </div>

    <div class="section-hd"><span class="section-lbl">Plateformes</span></div>
    <div class="social-grid">
      ${platforms.map(p => {
        const acc = accounts.find(a => a.platform === p.id);
        return `
      <div class="social-card">
        <div class="social-ico" style="background:${p.bg}">${p.icon}</div>
        <div class="social-name">${p.name}</div>
        <div class="social-stat">${acc?.connected ? acc.username||'Connecte' : 'Non connecte'}</div>
        <button class="social-btn ${acc?.connected?'connected':''}" onclick="toggleSocialAccount('${p.id}','${p.name}')">
          ${acc?.connected ? 'Deconnecter' : 'Connecter'}
        </button>
      </div>`;}).join('')}
    </div>

    <div class="section-hd">
      <span class="section-lbl">Programme de publication</span>
      <button class="fab" style="width:32px;height:32px" onclick="schedulePost()">${IC.plus}</button>
    </div>
    ${(() => {
      const scheduled = (S.scheduledPosts||[]).filter(p => p.status === 'scheduled');
      const published = (S.scheduledPosts||[]).filter(p => p.status === 'published');
      // Mini calendar
      const today = new Date();
      const calMonth = today.getMonth();
      const calYear = today.getFullYear();
      const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
      const firstDay = new Date(calYear, calMonth, 1).getDay();
      const monthNames = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
      const scheduledDates = scheduled.map(p => p.scheduledDate);
      const publishedDates = published.map(p => (p.publishedDate||p.date||'').slice(0,10));
      let calHTML = `<div class="card" style="margin-bottom:12px;padding:14px">
        <div style="text-align:center;font-weight:700;font-size:14px;margin-bottom:10px">${monthNames[calMonth]} ${calYear}</div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center">
          ${['Lu','Ma','Me','Je','Ve','Sa','Di'].map(d => `<div style="font-size:9px;color:var(--text-3);font-weight:600;padding:4px 0">${d}</div>`).join('')}
          ${'<div></div>'.repeat((firstDay + 6) % 7)}
          ${Array.from({length:daysInMonth}, (_,i) => {
            const d = i + 1;
            const dateStr = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            const isToday = d === today.getDate();
            const hasScheduled = scheduledDates.includes(dateStr);
            const hasPublished = publishedDates.includes(dateStr);
            const dotColor = hasScheduled ? 'var(--warning)' : hasPublished ? 'var(--success)' : 'transparent';
            return `<div style="position:relative;padding:6px 2px;font-size:12px;font-weight:${isToday?'700':'400'};color:${isToday?'#fff':'var(--text-1)'};background:${isToday?'var(--accent)':'transparent'};border-radius:8px;cursor:default">
              ${d}
              ${(hasScheduled||hasPublished)?`<div style="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);width:5px;height:5px;border-radius:50%;background:${dotColor}"></div>`:''}
            </div>`;
          }).join('')}
        </div>
        <div style="display:flex;gap:12px;justify-content:center;margin-top:8px">
          <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--text-3)"><div style="width:6px;height:6px;border-radius:50%;background:var(--warning)"></div>Programmée</div>
          <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--text-3)"><div style="width:6px;height:6px;border-radius:50%;background:var(--success)"></div>Publiée</div>
        </div>
      </div>`;
      return `
    <div class="stats-row" style="margin-bottom:10px">
      <div class="stat-box"><div class="stat-val">${accounts.filter(a=>a.connected).length}/4</div><div class="stat-lbl">Connectés</div></div>
      <div class="stat-box"><div class="stat-val">${scheduled.length}</div><div class="stat-lbl">Programmées</div></div>
      <div class="stat-box"><div class="stat-val">${published.length}</div><div class="stat-lbl">Publiées</div></div>
    </div>
    ${calHTML}
    ${scheduled.length > 0 ? `
    <div class="section-hd"><span class="section-lbl">A venir</span></div>
    ${scheduled.map(p => `
    <div class="card" style="margin-bottom:6px;border-left:3px solid var(--warning)">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-weight:700;font-size:13px">${p.productName}</div>
          <div style="font-size:11px;color:var(--text-3)">${p.channel} | ${p.scheduledDate} a ${p.scheduledTime}</div>
          <div style="font-size:11px;color:var(--text-2);margin-top:2px">${(p.caption||'').substring(0,60)}${(p.caption||'').length>60?'...':''}</div>
        </div>
        <div style="display:flex;gap:4px">
          <button class="btn btn-primary" style="font-size:11px;padding:6px 10px" onclick="publishScheduledPost(${p.id})">Publier</button>
          <button class="btn btn-ghost" style="font-size:11px;padding:6px 8px" onclick="deleteScheduledPost(${p.id})">X</button>
        </div>
      </div>
    </div>`).join('')}` : `
    <div class="card" style="text-align:center;padding:16px;margin-bottom:10px">
      <div style="font-size:12px;color:var(--text-3);margin-bottom:8px">Aucune publication programmee</div>
      <button class="btn btn-primary" style="font-size:12px" onclick="schedulePost()">Programmer une publication</button>
    </div>`}
    ${published.length > 0 ? `
    <div class="section-hd"><span class="section-lbl">Historique (${published.length})</span></div>
    ${published.slice(0,8).map(p => `
    <div class="sale-item" style="margin-bottom:4px">
      <div class="sale-dot" style="background:${p.channel==='whatsapp'?'#25D366':p.channel==='facebook'?'#1877F2':'var(--accent)'}"></div>
      <div class="sale-info"><div class="sale-prod">${p.productName}</div><div class="sale-date">${p.channel} | ${fmtDate(p.publishedDate||p.date)}</div></div>
    </div>`).join('')}` : ''}`;
    })()}
  </div>`;
}

function toggleSocialAccount(platformId, platformName) {
  const existing = S.socialAccounts.find(a => a.platform === platformId);
  if (existing?.connected) {
    // Disconnect
    if (!confirm(`Deconnecter ${platformName} ?`)) return;
    existing.connected = false;
    existing.username = null;
    localStorage.setItem('stockr_social', JSON.stringify(S.socialAccounts));
    showToast(`${platformName} deconnecte`);
    render();
    return;
  }
  // Connect — open real platform + ask for username
  const urls = {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    tiktok: 'https://www.tiktok.com/',
    youtube: 'https://www.youtube.com/',
    twitter: 'https://x.com/',
  };
  if (confirm(`Ouvrir ${platformName} pour vous connecter ?`)) {
    window.open(urls[platformId] || '#', '_blank');
  }
  const username = prompt(`Entrez votre nom d'utilisateur ${platformName} :`, '@');
  if (!username || username === '@') return;
  if (existing) {
    existing.connected = true;
    existing.username = username;
  } else {
    S.socialAccounts.push({ platform:platformId, name:platformName, connected:true, username });
  }
  localStorage.setItem('stockr_social', JSON.stringify(S.socialAccounts));
  logActivity('social', `${platformName} connecte (${username})`);
  showToast(`${platformName} connecte : ${username}`);
  render();
}
function postProductSocial(channel) {
  const sel = document.getElementById('social-product-select');
  if (!sel || !sel.value) { showToast(t('chooseProduct'), 'error'); return; }
  const product = S.products.find(p => p.id === parseInt(sel.value));
  if (!product) return;
  const biz = S.session?.business || 'STOCKR';
  const lines = [`*${product.name}*`,`${fmt(product.price)} ${sym()}`,'','Disponible maintenant !','Commandez en DM','',`#${biz.replace(/\s+/g,'')} #CoteDIvoire`];
  const text = lines.join('\n');
  if (channel === 'whatsapp') {
    window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
  } else if (channel === 'facebook') {
    window.open('https://www.facebook.com/sharer/sharer.php?quote='+encodeURIComponent(text),'_blank');
  } else if (channel === 'twitter') {
    window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(text),'_blank');
  } else if (channel === 'sms') {
    window.open('sms:?body='+encodeURIComponent(text),'_blank');
  } else {
    navigator.clipboard?.writeText(text).then(()=>showToast(t('copied')||'Copie !'));
  }
  // Track post
  S.scheduledPosts.push({ id:Date.now(), productId:product.id, productName:product.name, channel, date:new Date().toISOString() });
  localStorage.setItem('stockr_posts', JSON.stringify(S.scheduledPosts));
}

// ── PAIEMENTS ────────────────────────────────
function vPayments() {
  const methods = S.paymentMethods || [];
  const providers = [
    { id:'wave',   name:'Wave',          color:'#1DC3FF', logo:'W',  desc:'Paiement mobile Wave' },
    { id:'orange', name:'Orange Money',   color:'#FF6600', logo:'OM', desc:'Orange Money CI' },
    { id:'moov',   name:'Moov Money',     color:'#00A651', logo:'MM', desc:'Moov Money CI' },
    { id:'mtn',    name:'MTN MoMo',       color:'#FFCC00', logo:'M',  desc:'MTN Mobile Money', textColor:'#000' },
    { id:'paypal', name:'PayPal',          color:'#003087', logo:'PP', desc:'Paiement international' },
    { id:'visa',   name:'Visa/Mastercard', color:'#1A1F71', logo:'V',  desc:'Carte bancaire' },
  ];

  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:14px">
      <button class="back-btn-dark" onclick="nav('more')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">Moyens de paiement</div>
        <div class="sub-hero-sub">Wave, Orange Money, Moov, PayPal…</div>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${methods.filter(m=>m.active).length}</div><div class="hero-stat-lbl">Actifs</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${S.paymentHistory.length}</div><div class="hero-stat-lbl">Paiements</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${fmt(S.paymentHistory.reduce((s,p)=>s+(p.amount||0),0))}</div><div class="hero-stat-lbl">Total</div></div>
    </div>
  </div>
  <div class="container">
    <div class="section-hd"><span class="section-lbl">Méthodes de paiement</span></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
    ${providers.map(prov => {
      const method = methods.find(m => m.provider === prov.id);
      const isActive = method?.active;
      return `
    <div class="card" style="margin-bottom:0;padding:14px;border:2px solid ${isActive?prov.color:'var(--border)'};position:relative;overflow:hidden;cursor:pointer" onclick="${isActive ? `disconnectPayment('${prov.id}')` : `setupPayment('${prov.id}','${prov.name}')`}">
      ${isActive ? `<div style="position:absolute;top:0;left:0;right:0;height:3px;background:${prov.color}"></div>` : ''}
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <div style="width:38px;height:38px;border-radius:10px;background:${prov.color};color:${prov.textColor||'#fff'};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;flex-shrink:0">${prov.logo}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:13px;color:var(--text)">${prov.name}</div>
        </div>
      </div>
      <div style="font-size:10px;color:${isActive?prov.color:'var(--text-3)'};font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
        ${isActive ? '✓ '+(method.phone||method.email||'Configuré') : prov.desc}
      </div>
      <div style="margin-top:8px;text-align:center">
        <span style="font-size:10px;padding:3px 10px;border-radius:6px;font-weight:700;${isActive?`background:${prov.color}15;color:${prov.color}`:'background:var(--gray-1);color:var(--text-3)'}">${isActive?'Actif — Retirer':'Configurer'}</span>
      </div>
    </div>`;}).join('')}
    </div>

    <div class="section-hd"><span class="section-lbl">Historique</span></div>
    ${S.paymentHistory.length === 0 ? `
    <div class="card" style="text-align:center;padding:20px"><div style="color:var(--text-3);font-size:13px">Aucun paiement reçu</div></div>
    ` : S.paymentHistory.slice(0,10).map(ph => `
    <div class="sale-item" style="margin-bottom:6px">
      <div class="sale-dot" style="background:${ph.provider==='wave'?'#1DC3FF':ph.provider==='orange'?'#FF6600':'var(--success)'}"></div>
      <div class="sale-info"><div class="sale-prod">${ph.clientName||'Client'}</div><div class="sale-date">${ph.provider.toUpperCase()} · ${fmtDate(ph.date)}</div></div>
      <div class="sale-right"><div class="sale-total">${fmt(ph.amount)} ${sym()}</div></div>
    </div>`).join('')}
  </div>`;
}

function setupPayment(providerId, providerName) {
  // Provider-specific setup
  const urls = {
    wave: 'https://www.wave.com/fr/business/',
    orange: 'https://money.orange.ci/',
    moov: 'https://www.moov-africa.ci/',
    mtn: 'https://momo.mtn.ci/',
    paypal: 'https://www.paypal.com/ci/business',
    visa: null,
  };
  const labels = {
    wave: 'Numero Wave Business',
    orange: 'Numero Orange Money marchand',
    moov: 'Numero Moov Money marchand',
    mtn: 'Numero MTN MoMo marchand',
    paypal: 'Email PayPal Business',
    visa: 'ID Terminal / Compte marchand',
  };
  // Open provider site to setup
  if (urls[providerId]) {
    if (confirm(`Ouvrir le site ${providerName} pour creer/verifier votre compte marchand ?`)) {
      window.open(urls[providerId], '_blank');
    }
  }
  const label = labels[providerId] || 'Identifiant';
  const value = prompt(`${providerName}\n\n${label} :`, '');
  if (!value) return;
  // For PayPal, also ask for Client ID
  let apiKey = null;
  if (providerId === 'paypal') {
    apiKey = prompt('Client ID PayPal (optionnel) :', '');
  }
  if (providerId === 'visa') {
    apiKey = prompt('Cle API marchand (optionnel) :', '');
  }
  const existing = S.paymentMethods.findIndex(m => m.provider === providerId);
  const method = { provider:providerId, name:providerName, phone:value, email:providerId==='paypal'?value:null, apiKey:apiKey||null, active:true, createdAt:new Date().toISOString() };
  if (existing >= 0) S.paymentMethods[existing] = method;
  else S.paymentMethods.push(method);
  localStorage.setItem('stockr_payments', JSON.stringify(S.paymentMethods));
  logActivity('payment', `${providerName} configure`);
  showToast(`${providerName} active !`);
  render();
}
function disconnectPayment(providerId) {
  S.paymentMethods = S.paymentMethods.filter(m => m.provider !== providerId);
  localStorage.setItem('stockr_payments', JSON.stringify(S.paymentMethods));
  showToast('Moyen de paiement retire');
  render();
}

// ═══════════════════════════════════════════════
// API SETTINGS — Token personnel + Webhooks + Doc
// ═══════════════════════════════════════════════
function vApiSettings() {
  if (!S.apiConfig) S.apiConfig = { token:null, createdAt:null, webhooks:[] };
  const api = S.apiConfig;
  const webhooks = api.webhooks || [];
  const tokenMasked = api.token ? (api.token.slice(0,10) + '•••••••••••••••••••••••••••••' + api.token.slice(-4)) : '';
  const availEvents = [
    {id:'order.created',    label:'Nouvelle commande',     ico:'🛒'},
    {id:'order.updated',    label:'Commande modifiée',     ico:'✏️'},
    {id:'order.delivered',  label:'Commande livrée',       ico:'📦'},
    {id:'sale.completed',   label:'Vente finalisée',       ico:'💰'},
    {id:'stock.low',        label:'Stock faible',          ico:'⚠️'},
    {id:'stock.out',        label:'Rupture de stock',      ico:'🚫'},
    {id:'client.created',   label:'Nouveau client',        ico:'👤'},
    {id:'payment.received', label:'Paiement reçu',         ico:'💵'},
  ];
  const evtLabel = id => (availEvents.find(e=>e.id===id)||{}).label || id;

  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:10px">
      <button class="back-btn-dark" onclick="nav('integrations')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">API & Webhooks</div>
        <div class="sub-hero-sub">Connectez STOCKR à vos systèmes externes</div>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${api.token?'1':'0'}</div><div class="hero-stat-lbl">Token</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${webhooks.length}</div><div class="hero-stat-lbl">Webhooks</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${webhooks.filter(w=>w.active).length}</div><div class="hero-stat-lbl">Actifs</div></div>
    </div>
  </div>
  <div class="container">

    <!-- ─── Token API personnel ─── -->
    <div class="card" style="margin-bottom:10px">
      <div class="card-title">🔑 Token API personnel</div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:12px">
        Utilisé pour authentifier les appels vers l'API STOCKR (header <code>Authorization: Bearer ...</code>).
        ${api.createdAt?`<br>Créé le ${new Date(api.createdAt).toLocaleDateString('fr')}.`:''}
      </div>
      ${api.token ? `
      <div style="background:var(--gray-1);padding:12px;border-radius:10px;font-family:monospace;font-size:12px;word-break:break-all;display:flex;align-items:center;gap:8px">
        <span style="flex:1">${tokenMasked}</span>
        <button class="btn btn-ghost" style="font-size:11px;padding:6px 10px;flex-shrink:0" onclick="copyApiToken()">📋 Copier</button>
      </div>
      <div style="display:flex;gap:6px;margin-top:10px">
        <button class="btn btn-ghost" style="flex:1" onclick="generateApiToken()">🔄 Régénérer</button>
        <button class="btn btn-ghost" style="color:var(--danger);border-color:var(--danger)40" onclick="revokeApiToken()">🗑 Révoquer</button>
      </div>
      ` : `
      <button class="btn btn-primary" style="width:100%" onclick="generateApiToken()">${IC.plus} Générer un token API</button>
      `}
    </div>

    <!-- ─── Webhooks sortants ─── -->
    <div class="card" style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div class="card-title" style="margin-bottom:0">🔗 Webhooks sortants (${webhooks.length})</div>
        <button class="btn btn-primary" style="font-size:11px;padding:6px 12px" onclick="addWebhook()">${IC.plus} Nouveau</button>
      </div>
      <div style="font-size:12px;color:var(--text-3);margin-bottom:12px">
        STOCKR enverra un POST JSON à votre URL dès qu'un événement se produit.
      </div>
      ${webhooks.length === 0 ? `
      <div class="empty" style="padding:26px 10px">
        <div class="empty-ico" style="font-size:36px">🪝</div>
        <div class="empty-text" style="margin-top:6px">Aucun webhook configuré</div>
        <div style="font-size:11px;color:var(--text-3);margin-top:4px">Créez votre premier webhook pour recevoir des événements en temps réel.</div>
      </div>
      ` : webhooks.map(w => `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px">
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px;color:var(--text-1)">${w.name||'Webhook'}</div>
            <div style="font-size:11px;color:var(--text-3);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${w.url}</div>
          </div>
          <label class="toggle-switch" style="flex-shrink:0">
            <input type="checkbox" ${w.active?'checked':''} onchange="toggleWebhookActive('${w.id}')">
            <span class="toggle-track"></span>
          </label>
        </div>
        ${(w.events||[]).length>0 ? `
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">
          ${(w.events||[]).map(e => `<span style="background:var(--accent-light);color:var(--accent);padding:2px 8px;border-radius:6px;font-size:10px;font-weight:600">${evtLabel(e)}</span>`).join('')}
        </div>` : '<div style="font-size:11px;color:var(--text-3);font-style:italic">Aucun événement sélectionné</div>'}
        <div style="display:flex;gap:6px;margin-top:10px">
          <button class="btn btn-ghost" style="flex:1;font-size:11px;padding:6px" onclick="testWebhook('${w.id}')">🧪 Tester</button>
          <button class="btn btn-ghost" style="font-size:11px;padding:6px" onclick="editWebhook('${w.id}')">✏️</button>
          <button class="btn btn-ghost" style="font-size:11px;padding:6px" onclick="copyWebhookEndpoint('${w.id}')">📋</button>
          <button class="btn btn-ghost" style="font-size:11px;padding:6px;color:var(--danger)" onclick="deleteWebhook('${w.id}')">🗑</button>
        </div>
      </div>
      `).join('')}
    </div>

    <!-- ─── Webhook entrant ─── -->
    <div class="card" style="margin-bottom:10px">
      <div class="card-title">📨 Webhook entrant (Zapier / Make / n8n)</div>
      <div style="font-size:12px;color:var(--text-2);margin-bottom:10px">
        Déclenchez des actions STOCKR depuis vos outils d'automatisation externes.
      </div>
      <div style="background:var(--gray-1);padding:10px;border-radius:8px;font-family:monospace;font-size:11px;word-break:break-all;line-height:1.5">
        <div style="color:var(--accent);font-weight:700;margin-bottom:4px">POST</div>
        https://api.stockr.app/v1/webhooks/in/${api.token ? api.token.slice(0,12)+'...' : '&lt;VOTRE_TOKEN&gt;'}
      </div>
      <button class="btn btn-ghost" style="margin-top:8px;width:100%;font-size:11px" onclick="copyIncomingEndpoint()">📋 Copier l'endpoint</button>
    </div>

    <!-- ─── Documentation API ─── -->
    <div class="card" style="margin-bottom:10px">
      <div class="card-title">📖 Documentation API</div>
      <div style="font-size:12px;color:var(--text-2);line-height:1.7">
        <strong>Endpoints principaux :</strong><br>
        <code style="background:var(--gray-1);padding:2px 6px;border-radius:4px;font-size:11px">GET /v1/products</code> — Liste des produits<br>
        <code style="background:var(--gray-1);padding:2px 6px;border-radius:4px;font-size:11px">POST /v1/sales</code> — Enregistrer une vente<br>
        <code style="background:var(--gray-1);padding:2px 6px;border-radius:4px;font-size:11px">GET /v1/stock</code> — État du stock<br>
        <code style="background:var(--gray-1);padding:2px 6px;border-radius:4px;font-size:11px">POST /v1/orders</code> — Créer une commande<br>
        <code style="background:var(--gray-1);padding:2px 6px;border-radius:4px;font-size:11px">GET /v1/clients</code> — Liste des clients<br><br>
        <strong>Authentification :</strong> header <code style="background:var(--gray-1);padding:2px 6px;border-radius:4px;font-size:11px">Authorization: Bearer &lt;token&gt;</code>
      </div>
    </div>

    <div class="card" style="background:#EFF6FF;border-color:#3B82F640;font-size:11px;color:#1E40AF;line-height:1.6">
      💡 <strong>Sécurité :</strong> Ne partagez jamais votre token. Chaque webhook possède un secret HMAC distinct pour signer les requêtes.
    </div>
  </div>`;
}

function generateApiToken() {
  if (!S.apiConfig) S.apiConfig = { token:null, createdAt:null, webhooks:[] };
  if (S.apiConfig.token && !confirm('Un token existe déjà. Le remplacer ? Les intégrations actives cesseront de fonctionner.')) return;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let t = 'stk_live_';
  for (let i = 0; i < 40; i++) t += chars[Math.floor(Math.random() * chars.length)];
  S.apiConfig.token = t;
  S.apiConfig.createdAt = new Date().toISOString();
  localStorage.setItem('stockr_api', JSON.stringify(S.apiConfig));
  logActivity('api', 'Token API généré');
  showToast('Token généré ✓');
  render();
}

function revokeApiToken() {
  if (!confirm('Révoquer le token ? Toutes les intégrations actives cesseront de fonctionner.')) return;
  S.apiConfig.token = null;
  S.apiConfig.createdAt = null;
  localStorage.setItem('stockr_api', JSON.stringify(S.apiConfig));
  logActivity('api', 'Token API révoqué');
  showToast('Token révoqué');
  render();
}

function copyApiToken() {
  if (!S.apiConfig || !S.apiConfig.token) return;
  navigator.clipboard.writeText(S.apiConfig.token);
  showToast('Token copié ✓');
}

function copyIncomingEndpoint() {
  const tok = (S.apiConfig && S.apiConfig.token) || 'VOTRE_TOKEN';
  navigator.clipboard.writeText(`https://api.stockr.app/v1/webhooks/in/${tok}`);
  showToast('Endpoint copié ✓');
}

function addWebhook() {
  const name = prompt('Nom du webhook (ex: Slack Alertes) :');
  if (!name) return;
  const url = prompt('URL cible (https://...) :');
  if (!url || !url.match(/^https?:\/\//)) { showToast('URL invalide', 'error'); return; }
  const events = prompt('Événements séparés par une virgule\n(ex: order.created, stock.low, sale.completed)', 'order.created');
  const w = {
    id: 'wh_' + Date.now().toString(36),
    name, url,
    events: (events || '').split(',').map(s => s.trim()).filter(Boolean),
    active: true,
    secret: 'whsec_' + Math.random().toString(36).slice(2, 14) + Math.random().toString(36).slice(2, 14),
    createdAt: new Date().toISOString(),
    lastCall: null,
  };
  if (!S.apiConfig) S.apiConfig = { token:null, createdAt:null, webhooks:[] };
  S.apiConfig.webhooks = S.apiConfig.webhooks || [];
  S.apiConfig.webhooks.push(w);
  localStorage.setItem('stockr_api', JSON.stringify(S.apiConfig));
  logActivity('api', `Webhook créé : ${name}`);
  showToast('Webhook créé ✓');
  render();
}

function editWebhook(id) {
  const w = (S.apiConfig.webhooks || []).find(w => w.id === id);
  if (!w) return;
  const name = prompt('Nom du webhook :', w.name);
  if (name === null) return;
  const url = prompt('URL cible :', w.url);
  if (!url || !url.match(/^https?:\/\//)) { showToast('URL invalide', 'error'); return; }
  const events = prompt('Événements (séparés par virgule) :', (w.events || []).join(', '));
  w.name = name;
  w.url = url;
  w.events = (events || '').split(',').map(s => s.trim()).filter(Boolean);
  localStorage.setItem('stockr_api', JSON.stringify(S.apiConfig));
  showToast('Webhook modifié ✓');
  render();
}

function deleteWebhook(id) {
  const w = (S.apiConfig.webhooks || []).find(w => w.id === id);
  if (!w) return;
  if (!confirm(`Supprimer le webhook "${w.name}" ?`)) return;
  S.apiConfig.webhooks = (S.apiConfig.webhooks || []).filter(w => w.id !== id);
  localStorage.setItem('stockr_api', JSON.stringify(S.apiConfig));
  showToast('Webhook supprimé');
  render();
}

function testWebhook(id) {
  const w = (S.apiConfig.webhooks || []).find(w => w.id === id);
  if (!w) return;
  showToast(`Envoi d'un test à ${w.name}...`);
  fetch(w.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-STOCKR-Event': 'test.ping', 'X-STOCKR-Signature': w.secret },
    body: JSON.stringify({ event:'test.ping', timestamp: Date.now(), webhook: w.id, data: { hello:'from STOCKR' } }),
    mode: 'no-cors',
  }).then(() => {
    w.lastCall = new Date().toISOString();
    localStorage.setItem('stockr_api', JSON.stringify(S.apiConfig));
    showToast('Test envoyé ✓');
  }).catch(() => showToast('Échec — vérifiez l\'URL / CORS', 'error'));
}

function copyWebhookEndpoint(id) {
  const w = (S.apiConfig.webhooks || []).find(w => w.id === id);
  if (!w) return;
  navigator.clipboard.writeText(w.url);
  showToast('URL copiée ✓');
}

function toggleWebhookActive(id) {
  const w = (S.apiConfig.webhooks || []).find(w => w.id === id);
  if (!w) return;
  w.active = !w.active;
  localStorage.setItem('stockr_api', JSON.stringify(S.apiConfig));
  showToast(w.active?'Webhook activé':'Webhook désactivé');
  render();
}

function toggleWebhookEvent(id, evt) {
  const w = (S.apiConfig.webhooks || []).find(w => w.id === id);
  if (!w) return;
  w.events = w.events || [];
  const i = w.events.indexOf(evt);
  if (i >= 0) w.events.splice(i, 1); else w.events.push(evt);
  localStorage.setItem('stockr_api', JSON.stringify(S.apiConfig));
  render();
}

// ── INTEGRATIONS (fonctionnelles) ────────────
function vIntegrations() {
  const integrationsList = [
    { id:'whatsapp-business', name:'WhatsApp Business', desc:'Notifications clients automatiques', color:'#25D366', icon:IC.whatsapp, category:'communication',
      setupType:'phone', setupLabel:'Numero WhatsApp Business', setupPlaceholder:'+225 07 XX XX XX XX', url:'https://business.whatsapp.com/' },
    { id:'sms-api',           name:'SMS API',            desc:'Envoi SMS en masse via API',  color:'#4F46E5', icon:IC.smartphone, category:'communication',
      setupType:'apikey', setupLabel:'Cle API SMS (ex: Twilio, Vonage)', setupPlaceholder:'sk_live_xxxxx', url:null },
    { id:'woocommerce',       name:'WooCommerce',        desc:'Synchroniser avec WordPress', color:'#96588A', icon:IC.shop,       category:'ecommerce',
      setupType:'url+key', setupLabel:'URL boutique WooCommerce', setupPlaceholder:'https://maboutique.com', keyLabel:'Cle API WooCommerce', url:null },
    { id:'shopify',           name:'Shopify',             desc:'Synchroniser avec Shopify',   color:'#96BF48', icon:IC.shop,       category:'ecommerce',
      setupType:'url+key', setupLabel:'URL boutique Shopify', setupPlaceholder:'https://maboutique.myshopify.com', keyLabel:'Access Token', url:'https://www.shopify.com/admin' },
    { id:'jumia',             name:'Jumia Seller',        desc:'Vendre sur Jumia Afrique',    color:'#F68B1E', icon:IC.globe,      category:'ecommerce',
      setupType:'url', setupLabel:'Lien vendeur Jumia', setupPlaceholder:'https://vendeur.jumia.ci/...', url:'https://vendeur.jumia.ci/' },
    { id:'glovo',             name:'Glovo Partners',      desc:'Livraison via Glovo',         color:'#FFC244', icon:IC.truck,      category:'delivery',
      setupType:'account', setupLabel:'ID Partenaire Glovo', setupPlaceholder:'GLV-XXXXX', url:'https://partners.glovoapp.com/' },
    { id:'yango',             name:'Yango Delivery',      desc:'Livraison Yango Afrique',     color:'#FF4D00', icon:IC.truck,      category:'delivery',
      setupType:'account', setupLabel:'ID Partenaire Yango', setupPlaceholder:'YNG-XXXXX', url:'https://yango.com/fr_ci/' },
    { id:'google-sheets',     name:'Google Sheets',       desc:'Exporter donnees vers Sheets',color:'#0F9D58', icon:IC.layers,     category:'productivity',
      setupType:'url', setupLabel:'URL Google Sheet', setupPlaceholder:'https://docs.google.com/spreadsheets/d/...', url:null },
    { id:'excel',             name:'Import/Export Excel',  desc:'Importer et exporter Excel',  color:'#217346', icon:IC.layers,     category:'productivity',
      setupType:'action', url:null },
    { id:'comptabilite',      name:'Export Comptable',     desc:'Plan comptable OHADA',        color:'#334155', icon:IC.receipt,     category:'finance',
      setupType:'action', url:null },
    { id:'pos',               name:'Caisse (POS)',         desc:'Connecter un terminal de paiement', color:'#059669', icon:IC.creditCard, category:'finance',
      setupType:'serial', setupLabel:'ID Terminal POS', setupPlaceholder:'POS-XXXXXX', url:null },
  ];

  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:14px">
      <button class="back-btn-dark" onclick="nav('more')">${IC.left}</button>
      <div style="flex:1">
        <div class="sub-hero-title">Intégrations & API</div>
        <div class="sub-hero-sub">Connectez vos outils favoris</div>
      </div>
      <button class="btn btn-primary" style="padding:6px 14px;font-size:12px;white-space:nowrap" onclick="nav('api-settings')">🔑 API</button>
    </div>
    <div style="display:flex;gap:8px">
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${(S.integrationsConfig||[]).filter(i=>i.connected).length}</div><div class="hero-stat-lbl">Connectées</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${integrationsList.length}</div><div class="hero-stat-lbl">Disponibles</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${((S.apiConfig||{}).webhooks||[]).length}</div><div class="hero-stat-lbl">Webhooks</div></div>
    </div>
  </div>
  <div class="container">
    ${['communication','ecommerce','delivery','productivity','finance'].map(cat => {
      const items = integrationsList.filter(i => i.category === cat);
      const labels = {communication:'💬 Communication',ecommerce:'🛒 E-commerce',productivity:'📊 Productivité',delivery:'🚚 Livraison',finance:'💰 Finance & POS'};
      const catIcons = {communication:IC.whatsapp,ecommerce:IC.shop,productivity:IC.layers,delivery:IC.truck,finance:IC.creditCard};
      return `
    <div class="section-hd"><span class="section-lbl">${labels[cat]}</span></div>
    ${items.map(it => {
      const cfg = (S.integrationsConfig||[]).find(c=>c.id===it.id);
      const connected = cfg?.connected;
      return `
    <div class="card" style="margin-bottom:8px;border-left:3px solid ${connected?it.color:'transparent'};padding:12px 14px;${connected?'background:'+it.color+'05':''}">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:42px;height:42px;border-radius:12px;background:${it.color}15;color:${it.color};display:flex;align-items:center;justify-content:center;flex-shrink:0">${it.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:14px;color:var(--text)">${it.name}</div>
          <div style="font-size:11px;color:${connected?it.color:'var(--text-3)'};margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${connected ? '✓ '+(cfg.value||cfg.url||'Connecté') : it.desc}</div>
        </div>
        ${connected ? `
          <button style="font-size:11px;padding:6px 12px;border-radius:8px;border:1px solid var(--danger);background:transparent;color:var(--danger);font-weight:600;cursor:pointer;white-space:nowrap" onclick="disconnectIntegration('${it.id}','${it.name}')">Retirer</button>
        ` : `
          <button style="font-size:11px;padding:6px 12px;border-radius:8px;border:1px solid ${it.color};background:${it.color}10;color:${it.color};font-weight:600;cursor:pointer;white-space:nowrap" onclick="connectIntegration('${it.id}')">Connecter</button>
        `}
      </div>
    </div>`;}).join('')}`;}).join('')}
  </div>`;
}

function _getIntegrationDef(id) {
  const defs = {
    'whatsapp-business': { setupType:'phone', setupLabel:'Numero WhatsApp Business', setupPlaceholder:'+225 07 XX XX XX XX', url:'https://business.whatsapp.com/' },
    'sms-api':           { setupType:'apikey', setupLabel:'Cle API SMS (Twilio, Vonage...)', setupPlaceholder:'sk_live_xxxxx' },
    'woocommerce':       { setupType:'url+key', setupLabel:'URL boutique WooCommerce', setupPlaceholder:'https://maboutique.com', keyLabel:'Cle API WooCommerce' },
    'shopify':           { setupType:'url+key', setupLabel:'URL boutique Shopify', setupPlaceholder:'https://maboutique.myshopify.com', keyLabel:'Access Token', url:'https://www.shopify.com/admin' },
    'jumia':             { setupType:'url', setupLabel:'Lien vendeur Jumia', setupPlaceholder:'https://vendeur.jumia.ci/', url:'https://vendeur.jumia.ci/' },
    'glovo':             { setupType:'account', setupLabel:'ID Partenaire Glovo', setupPlaceholder:'GLV-XXXXX', url:'https://partners.glovoapp.com/' },
    'yango':             { setupType:'account', setupLabel:'ID Partenaire Yango', setupPlaceholder:'YNG-XXXXX', url:'https://yango.com/fr_ci/' },
    'google-sheets':     { setupType:'url', setupLabel:'URL Google Sheet partagee', setupPlaceholder:'https://docs.google.com/spreadsheets/d/...' },
    'excel':             { setupType:'action' },
    'comptabilite':      { setupType:'action' },
    'pos':               { setupType:'serial', setupLabel:'ID Terminal POS', setupPlaceholder:'POS-XXXXXX' },
  };
  return defs[id] || {};
}

function connectIntegration(integrationId) {
  const def = _getIntegrationDef(integrationId);
  const names = {'whatsapp-business':'WhatsApp Business','sms-api':'SMS API','woocommerce':'WooCommerce','shopify':'Shopify','jumia':'Jumia','glovo':'Glovo','yango':'Yango Delivery','google-sheets':'Google Sheets','excel':'Excel','comptabilite':'Comptabilite','pos':'Caisse POS'};
  const name = names[integrationId] || integrationId;

  // Action-type integrations (Excel export, Comptabilite)
  if (def.setupType === 'action') {
    if (integrationId === 'excel') {
      exportAllCSV();
      _saveIntegration(integrationId, name, 'Export CSV active');
      return;
    }
    if (integrationId === 'comptabilite') {
      _exportComptable();
      _saveIntegration(integrationId, name, 'Export OHADA active');
      return;
    }
  }

  // Marketplace / delivery / sheets — shortcut action flow (no API required)
  if (['jumia','shopify','woocommerce','google-sheets','yango','glovo'].includes(integrationId)) {
    const actions = {
      jumia:         { fn: exportToJumia,        msg: 'Export Jumia prêt',       openUrl: def.url },
      shopify:       { fn: exportToShopify,      msg: 'Export Shopify prêt',     openUrl: def.url },
      woocommerce:   { fn: exportToWooCommerce,  msg: 'Export WooCommerce prêt', openUrl: null },
      'google-sheets': { fn: exportToGoogleSheets, msg: 'Export Sheets prêt',     openUrl: 'https://sheets.google.com' },
      yango:         { fn: null, msg: 'Yango activé — utilisez le bouton "Yango" sur vos commandes', openUrl: null },
      glovo:         { fn: null, msg: 'Glovo activé — utilisez le bouton "Glovo" sur vos commandes', openUrl: null },
    };
    const act = actions[integrationId];
    if (act.fn) act.fn();
    _saveIntegration(integrationId, name, act.msg);
    if (act.openUrl && confirm(`Ouvrir ${name} ?`)) window.open(act.openUrl, '_blank');
    return;
  }

  // Open partner URL if available
  if (def.url) {
    if (confirm(`Ouvrir ${name} dans un nouvel onglet pour recuperer vos identifiants ?`)) {
      window.open(def.url, '_blank');
    }
  }

  // Collect credentials
  if (def.setupType === 'phone') {
    const phone = prompt(def.setupLabel + ' :', def.setupPlaceholder);
    if (!phone || phone === def.setupPlaceholder) return;
    _saveIntegration(integrationId, name, phone);
  } else if (def.setupType === 'apikey') {
    const key = prompt(def.setupLabel + ' :', '');
    if (!key) return;
    _saveIntegration(integrationId, name, '****' + key.slice(-4), key);
  } else if (def.setupType === 'url+key') {
    const url = prompt(def.setupLabel + ' :', def.setupPlaceholder);
    if (!url || url === def.setupPlaceholder) return;
    const apiKey = prompt((def.keyLabel||'Cle API') + ' :', '');
    if (!apiKey) return;
    _saveIntegration(integrationId, name, url, apiKey);
  } else if (def.setupType === 'url') {
    const url = prompt(def.setupLabel + ' :', def.setupPlaceholder);
    if (!url || url === def.setupPlaceholder) return;
    _saveIntegration(integrationId, name, url);
  } else if (def.setupType === 'account' || def.setupType === 'serial') {
    const val = prompt(def.setupLabel + ' :', def.setupPlaceholder);
    if (!val || val === def.setupPlaceholder) return;
    _saveIntegration(integrationId, name, val);
  }
}

function _saveIntegration(id, name, displayValue, secretKey) {
  const existing = S.integrationsConfig.findIndex(i => i.id === id);
  const entry = { id, name, connected:true, value:displayValue, key:secretKey||null, date:new Date().toISOString() };
  if (existing >= 0) S.integrationsConfig[existing] = entry;
  else S.integrationsConfig.push(entry);
  localStorage.setItem('stockr_integrations', JSON.stringify(S.integrationsConfig));
  logActivity('integration', `${name} connecte`);
  showToast(`${name} connecte avec succes !`);
  render();
}

function disconnectIntegration(id, name) {
  if (!confirm(`Deconnecter ${name} ?`)) return;
  S.integrationsConfig = S.integrationsConfig.filter(i => i.id !== id);
  localStorage.setItem('stockr_integrations', JSON.stringify(S.integrationsConfig));
  showToast(`${name} deconnecte`);
  render();
}

function _exportComptable() {
  // Export comptable OHADA simplifie
  const lines = ['Date;Libelle;Debit;Credit;Compte'];
  S.sales.forEach(s => {
    lines.push(`${s.date};Vente ${s.productName} x${s.qty};${s.total};0;701000`);
    lines.push(`${s.date};Encaissement;0;${s.total};521000`);
  });
  const blob = new Blob([lines.join('\n')], {type:'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `stockr_comptabilite_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  showToast('Export comptable OHADA telecharge');
}

// ── REAL INTEGRATION ACTIONS ─────────────────
function _downloadFile(content, filename, mime) {
  const blob = new Blob([content], {type: mime || 'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
}

function _csvEscape(s) {
  if (s === null || s === undefined) return '';
  s = String(s);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

// Export products to Jumia Seller format
function exportToJumia() {
  if (S.products.length === 0) { showToast('Aucun produit à exporter', 'error'); return; }
  const headers = ['SKU','Product Name','Category','Price','Sale Price','Quantity','Brand','Description','Weight','Package Length','Package Width','Package Height'];
  const rows = [headers.join(',')];
  S.products.forEach(p => {
    const promo = _getActivePromo(p.id);
    const salePrice = promo ? Math.round(p.price * (1 - promo.discount / 100)) : '';
    rows.push([
      _csvEscape('SKU-'+p.id),
      _csvEscape(p.name),
      _csvEscape(p.category || 'Général'),
      p.price,
      salePrice,
      999,
      _csvEscape(S.session?.business || 'STOCKR'),
      _csvEscape(p.description || p.name),
      '', '', '', ''
    ].join(','));
  });
  _downloadFile(rows.join('\n'), `jumia_products_${new Date().toISOString().slice(0,10)}.csv`);
  showToast(`${S.products.length} produits exportés pour Jumia. Uploadez dans Jumia Seller Center.`);
}

// Export products to Shopify format
function exportToShopify() {
  if (S.products.length === 0) { showToast('Aucun produit à exporter', 'error'); return; }
  const headers = ['Handle','Title','Body (HTML)','Vendor','Type','Tags','Published','Variant Price','Variant Inventory Qty','Variant SKU','Variant Weight Unit','Status'];
  const rows = [headers.join(',')];
  S.products.forEach(p => {
    const handle = p.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    rows.push([
      _csvEscape(handle),
      _csvEscape(p.name),
      _csvEscape(`<p>${p.description || p.name}</p>`),
      _csvEscape(S.session?.business || 'STOCKR'),
      _csvEscape(p.category || 'Default'),
      _csvEscape((p.tags || []).join(', ')),
      'TRUE',
      p.price,
      999,
      _csvEscape('SKU-'+p.id),
      'kg',
      'active'
    ].join(','));
  });
  _downloadFile(rows.join('\n'), `shopify_products_${new Date().toISOString().slice(0,10)}.csv`);
  showToast(`${S.products.length} produits exportés pour Shopify. Importez dans Admin › Products › Import.`);
}

// Export products to WooCommerce format
function exportToWooCommerce() {
  if (S.products.length === 0) { showToast('Aucun produit à exporter', 'error'); return; }
  const headers = ['ID','Type','SKU','Name','Published','Featured','Visibility in catalog','Short description','Description','Regular price','Sale price','Tax status','Stock','Categories','Tags','Images'];
  const rows = [headers.join(',')];
  S.products.forEach(p => {
    const promo = _getActivePromo(p.id);
    const salePrice = promo ? Math.round(p.price * (1 - promo.discount / 100)) : '';
    rows.push([
      p.id,
      'simple',
      _csvEscape('SKU-'+p.id),
      _csvEscape(p.name),
      1,
      0,
      'visible',
      _csvEscape(p.description || ''),
      _csvEscape(p.description || p.name),
      p.price,
      salePrice,
      'taxable',
      999,
      _csvEscape(p.category || 'Uncategorized'),
      _csvEscape((p.tags || []).join(', ')),
      ''
    ].join(','));
  });
  _downloadFile(rows.join('\n'), `woocommerce_products_${new Date().toISOString().slice(0,10)}.csv`);
  showToast(`${S.products.length} produits exportés pour WooCommerce. Importez via Tools › Import › WooCommerce.`);
}

// Export to Google Sheets (CSV + instructions)
function exportToGoogleSheets() {
  // Complete export with multiple sheets concatenated (separated by ==== markers)
  const parts = [];
  parts.push('=== ARTICLES ===');
  parts.push(['Nom','Stock','Unité','Seuil','Prix','Délai','Référence','Emplacement'].join(','));
  S.articles.forEach(a => {
    const loc = S.locations.find(l => l.id === a.locationId);
    parts.push([_csvEscape(a.name), a.stock, _csvEscape(a.unit), a.min, a.price||0, a.lead||0, _csvEscape(a.ref||''), _csvEscape(loc?.name||'')].join(','));
  });
  parts.push('');
  parts.push('=== PRODUITS ===');
  parts.push(['Nom','Prix Vente','Prix Achat','Marge','Composition'].join(','));
  S.products.forEach(p => {
    const comp = (p.composition||[]).map(c => {
      const a = S.articles.find(x => x.id === c.id);
      return (a?.name||'?') + ' x' + c.qty;
    }).join(' + ');
    parts.push([_csvEscape(p.name), p.price, p.purchasePrice||0, (p.price-(p.purchasePrice||0)), _csvEscape(comp)].join(','));
  });
  parts.push('');
  parts.push('=== VENTES ===');
  parts.push(['Date','Produit','Quantité','Total','Profit','Client','Paiement'].join(','));
  S.sales.forEach(s => {
    parts.push([s.date.slice(0,10), _csvEscape(s.productName), s.qty, s.total, s.profit||0, _csvEscape(s.clientName||''), _csvEscape(s.paymentMethod||'')].join(','));
  });
  _downloadFile(parts.join('\n'), `stockr_google_sheets_${new Date().toISOString().slice(0,10)}.csv`);
  if (confirm('Export terminé ! Ouvrir Google Sheets maintenant pour importer le fichier ?')) {
    window.open('https://sheets.google.com/', '_blank');
  }
}

// Generate Yango delivery request link for a boutique order
function createYangoDelivery(orderId) {
  const order = S.boutiqueOrders.find(o => o.id === orderId);
  if (!order) { showToast('Commande introuvable', 'error'); return; }
  const biz = S.session?.business || 'STOCKR';
  const addr = S.boutiqueConfig?.address || S.locations[0]?.address || 'Adresse de départ';
  const items = (order.items||[]).map(i => `${i.name} x${i.qty}`).join(', ');
  // Yango delivery deep-link format (simplified - user fills details in Yango app)
  const msg = `Livraison Yango\n\nDepuis: ${biz}\n${addr}\n\nVers: ${order.clientName}\nTéléphone: ${order.phone||'N/A'}\nZone: ${order.zone||'À préciser'}\n\nColis: ${items}\nValeur: ${fmt(order.total)} ${sym()}\n\nInstructions: Livraison standard`;
  // Try Yango app deep link, fallback to web
  const yangoUrl = 'https://yango.com/fr_ci/order/?from=' + encodeURIComponent(addr) + '&to=' + encodeURIComponent(order.clientName + ' - ' + (order.zone||'')) + '&comment=' + encodeURIComponent(items);
  if (confirm('Ouvrir Yango avec les détails pré-remplis ?')) {
    window.open(yangoUrl, '_blank');
  }
  // Copy details to clipboard for easy paste
  navigator.clipboard?.writeText(msg).then(() => showToast('Détails copiés ! Collez dans Yango.'));
  logActivity('delivery', `Yango livraison: ${order.clientName}`);
}

// Generate Glovo delivery request
function createGlovoDelivery(orderId) {
  const order = S.boutiqueOrders.find(o => o.id === orderId);
  if (!order) { showToast('Commande introuvable', 'error'); return; }
  const biz = S.session?.business || 'STOCKR';
  const items = (order.items||[]).map(i => `${i.name} x${i.qty}`).join(', ');
  const msg = `Commande Glovo\n\nBoutique: ${biz}\nClient: ${order.clientName}\nTél: ${order.phone||'N/A'}\nZone: ${order.zone||''}\n\nProduits: ${items}\nTotal: ${fmt(order.total)} ${sym()}`;
  if (confirm('Ouvrir Glovo Partners ?')) {
    window.open('https://partners.glovoapp.com/', '_blank');
  }
  navigator.clipboard?.writeText(msg).then(() => showToast('Détails copiés pour Glovo !'));
  logActivity('delivery', `Glovo livraison: ${order.clientName}`);
}

// Generate Wave payment request link
function generateWavePayment(amount, reference) {
  const cfg = (S.paymentMethods||[]).find(m => m.provider === 'wave');
  if (!cfg || !cfg.phone) { showToast('Configurez Wave dans Paiements', 'error'); return null; }
  const phone = cfg.phone.replace(/\s/g,'').replace(/^\+/,'');
  // Wave uses wave.com/pay link format
  return `https://pay.wave.com/m/${phone}/c/${encodeURIComponent(reference||'PAY')}?amount=${amount}`;
}

// Generate Orange Money payment USSD
function generateOrangePayment(amount) {
  const cfg = (S.paymentMethods||[]).find(m => m.provider === 'orange');
  if (!cfg || !cfg.phone) { showToast('Configurez Orange Money dans Paiements', 'error'); return null; }
  const phone = cfg.phone.replace(/\s/g,'').replace(/^\+225/,'').replace(/^\+/,'');
  // Orange Money USSD format for CI
  return `*144*1*1*${phone}*${amount}#`;
}

// Send payment request via WhatsApp
function requestPaymentWhatsApp(amount, clientPhone, reference) {
  const waveLink = generateWavePayment(amount, reference);
  const orangeCode = generateOrangePayment(amount);
  const moovCfg = (S.paymentMethods||[]).find(m => m.provider === 'moov');
  const biz = S.session?.business || 'STOCKR';
  let msg = `Bonjour ! Voici votre demande de paiement de ${fmt(amount)} ${sym()} à ${biz}.\n\n`;
  if (reference) msg += `Référence: ${reference}\n\n`;
  msg += `Choisissez votre mode de paiement:\n`;
  if (waveLink) msg += `\n📱 Wave: ${waveLink}`;
  if (orangeCode) msg += `\n🟠 Orange Money: Composez ${orangeCode}`;
  if (moovCfg?.phone) msg += `\n🟢 Moov: Envoyez au ${moovCfg.phone}`;
  msg += `\n\nMerci !`;
  const phone = (clientPhone || '').replace(/\s/g,'').replace(/^\+/,'');
  const url = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  return url;
}

// Import products from CSV
function importProductsFromCSV() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv,text/csv';
  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split(/\r?\n/).filter(l => l.trim());
      if (lines.length < 2) { showToast('CSV vide ou invalide', 'error'); return; }
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
      const nameIdx = headers.findIndex(h => h.includes('nom') || h.includes('name') || h.includes('title'));
      const priceIdx = headers.findIndex(h => h.includes('prix') || h.includes('price'));
      if (nameIdx === -1) { showToast('Colonne "Nom/Name" introuvable', 'error'); return; }
      let count = 0;
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');
        const name = cols[nameIdx]?.replace(/^"|"$/g,'').trim();
        const price = parseFloat(cols[priceIdx]) || 0;
        if (!name) continue;
        if (S.products.find(p => p.name === name)) continue;
        S.products.push({ id:Date.now()+i, name, price, purchasePrice:Math.round(price*0.7), composition:[] });
        count++;
      }
      localStorage.setItem('stockr_products', JSON.stringify(S.products));
      showToast(`${count} produits importés !`);
      render();
    };
    reader.readAsText(file);
  };
  input.click();
}

// ── SPECTRA ENHANCED ─────────────────────────
function vSpectraEnhanced() {
  const modes = [
    { id:'photo',      icon:IC.camera,  label:'Photo scan',          desc:'Scanner une photo' },
    { id:'barcode',    icon:IC.barcode, label:'Code-barres',         desc:'Scanner un code-barres' },
    { id:'continuous', icon:IC.target,  label:'Scan continu',        desc:'Détection temps réel' },
    { id:'yolo',       icon:IC.zap,     label:'YOLO IA',             desc:'Détection multi-objets' },
  ];
  const scanHistory = S.spectraScanHistory || [];

  if (S.spectra.step === 'loading') {
    return `
    <div class="sub-hero"><div class="page-header-row"><button class="back-btn-dark" onclick="spectraReset();nav('home')">${IC.left}</button><div style="flex:1"><div class="sub-hero-title">Spectra AI</div><div class="sub-hero-sub">${t('spectraAnalyzing')}</div></div></div></div>
    <div class="container" style="text-align:center;padding:60px 24px">
      <div style="width:80px;height:80px;border-radius:50%;background:var(--accent-light);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;animation:pulse 1.5s infinite">${IC.camera}</div>
      <div style="font-size:16px;font-weight:700">${t('spectraAnalyzing')}</div>
      <div style="font-size:13px;color:var(--text-3);margin-top:6px">${S.spectraMode==='yolo'?'Détection YOLO — comptage automatique…':S.spectraMode==='barcode'?'Recherche codes-barres…':'Analyse en cours…'}</div>
    </div>`;
  }

  if (S.spectra.step === 'confirm' && S.spectra.queue.length > 0) {
    const item = S.spectra.queue[S.spectra.current];
    return `
    <div class="sub-hero"><div class="page-header-row"><button class="back-btn-dark" onclick="spectraReset();nav('home')">${IC.left}</button><div style="flex:1"><div class="sub-hero-title">${t('spectraDetected')}</div><div class="sub-hero-sub">${S.spectra.current+1}/${S.spectra.queue.length} articles détectés</div></div></div></div>
    <div class="container">
      <div class="spectra-count-result" style="margin-bottom:14px;border-color:var(--accent)">
        <div class="spectra-count-num">${item.quantity}</div>
        <div class="spectra-count-info">
          <div class="spectra-count-name">${item.detected_name||item.matched_name}</div>
          <div class="spectra-count-detail">Quantité détectée: ${item.quantity} · Précision: ${item.confidence}%</div>
        </div>
      </div>
      ${S.spectra.naming ? `
      <div class="form-group"><label class="form-label">Nom de l'article</label><input class="input" id="spectra-name" type="text" placeholder="${item.detected_name}" value="${item.detected_name}"></div>
      <div class="form-group"><label class="form-label">${t('quantity')}</label><input class="input" id="spectra-qty" type="number" value="${item.quantity}" min="1"></div>
      <button class="btn btn-primary" onclick="spectraSubmitName()">${t('spectraConfirm')}</button>
      ` : `
      <div class="card" style="margin-bottom:10px">
        <div class="info-row"><span class="info-lbl">Nom détecté</span><span class="info-val">${item.detected_name||item.matched_name}</span></div>
        <div class="info-row"><span class="info-lbl">Nombre détecté</span><span class="info-val" style="font-size:18px;color:var(--accent)">${item.quantity} ${item.matched_unit||'pce'}</span></div>
        <div class="info-row"><span class="info-lbl">Précision IA</span><span class="info-val" style="color:${item.confidence>=90?'var(--success)':item.confidence>=70?'var(--warning)':'var(--danger)'}">${item.confidence}%</span></div>
        ${item.matched_id ? `<div class="info-row"><span class="info-lbl">Correspondance</span><span class="info-val" style="color:var(--success)">✓ Trouvé en stock</span></div>` : `<div class="info-row"><span class="info-lbl">Correspondance</span><span class="info-val" style="color:var(--warning)">Nouvel article</span></div>`}
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" style="flex:1" onclick="spectraConfirmYes()">${IC.check} Confirmer</button>
        <button class="btn btn-ghost" style="flex:1" onclick="spectraConfirmNo()">Ignorer</button>
      </div>`}
    </div>`;
  }

  if (S.spectra.step === 'done') {
    // Save scan to history
    if (S.spectra.results.length > 0 && !S.spectra._saved) {
      S.spectra._saved = true;
      S.spectraScanHistory.unshift({ id:Date.now(), mode:S.spectraMode, count:S.spectra.results.length, date:new Date().toISOString() });
      if (S.spectraScanHistory.length > 50) S.spectraScanHistory = S.spectraScanHistory.slice(0,50);
      localStorage.setItem('stockr_spectra_history', JSON.stringify(S.spectraScanHistory));
    }
    return `
    <div class="sub-hero" style="background:linear-gradient(135deg,#064e3b,#059669)">
      <div class="page-header-row"><button class="back-btn-dark" onclick="spectraReset();nav('home')">${IC.left}</button><div style="flex:1"><div class="sub-hero-title">${t('spectraDone')}</div><div class="sub-hero-sub">${S.spectra.results.length} articles mis à jour</div></div></div>
    </div>
    <div class="container">
      ${S.spectra.results.map(r => `
      <div class="spectra-count-result">
        <div class="spectra-count-num">${r.new_qty}</div>
        <div class="spectra-count-info"><div class="spectra-count-name">${r.name}</div><div class="spectra-count-detail">+${r.new_qty} ${r.unit}</div></div>
      </div>`).join('')}
      <button class="btn btn-primary" onclick="spectraReset();nav('pantry')" style="margin-top:12px">${t('spectraViewStock')}</button>
    </div>`;
  }

  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:14px">
      <button class="back-btn-dark" onclick="nav('home')">${IC.left}</button>
      <div style="flex:1"><div class="sub-hero-title">Spectra AI</div><div class="sub-hero-sub">Scanner, détecter, compter automatiquement</div></div>
    </div>
  </div>
  <div class="container">
    <div class="section-hd"><span class="section-lbl">Mode de scan</span></div>
    <div class="spectra-mode-grid">
      ${modes.map(m => `
      <div class="spectra-mode-btn ${S.spectraMode===m.id?'active':''}" onclick="S.spectraMode='${m.id}';render()">
        <div class="spectra-mode-ico">${m.icon}</div>
        <div class="spectra-mode-lbl">${m.label}</div>
        <div style="font-size:10px;color:var(--text-3);margin-top:2px">${m.desc}</div>
      </div>`).join('')}
    </div>

    <div class="section-hd"><span class="section-lbl">${t('quickActions')}</span></div>
    <div class="quick-grid">
      <div class="quick-btn" onclick="spectraStartCompare()">
        <div class="quick-ico">${IC.eye}</div>
        <div class="quick-label">${t('spectraAudit')}</div>
        <div class="quick-sub">${t('spectraAuditSub')}</div>
      </div>
      <div class="quick-btn" onclick="spectraStartReception()">
        <div class="quick-ico">${IC.download}</div>
        <div class="quick-label">${t('spectraReception')}</div>
        <div class="quick-sub">${t('spectraReceptionSub')}</div>
      </div>
    </div>

    <div style="text-align:center;padding:24px 0">
      <input type="file" id="spectra-file" accept="image/*" capture="environment" style="display:none" onchange="spectraOnFile(this)">
      <button class="btn btn-primary" style="max-width:260px;margin:0 auto;padding:16px;font-size:16px" onclick="document.getElementById('spectra-file').click()">
        ${IC.camera} ${S.spectraMode==='barcode'?'Scanner code-barres':'Scanner le stock'}
      </button>
      <div style="font-size:11px;color:var(--text-3);margin-top:8px">${S.spectraMode==='yolo'?'YOLO détecte et compte automatiquement chaque produit':'Prends une photo de ton stock'}</div>
    </div>

    <div style="display:flex;gap:8px">
      <button class="btn btn-ghost" style="flex:1" onclick="spectraRunDemo()">Démo Audit</button>
      <button class="btn btn-ghost" style="flex:1" onclick="spectraRunDemoReception()">Démo Réception</button>
    </div>

    ${scanHistory.length > 0 ? `
    <div class="section-hd"><span class="section-lbl">Historique scans</span></div>
    ${scanHistory.slice(0,5).map(sh => `
    <div class="card" style="margin-bottom:6px;padding:10px 14px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-size:12px;font-weight:700">${sh.mode||'photo'} · ${sh.count||0} articles</div><div style="font-size:11px;color:var(--text-3)">${fmtDate(sh.date)}</div></div>
        <span class="status st-ok" style="font-size:10px">OK</span>
      </div>
    </div>`).join('')}` : ''}
  </div>`;
}

// ── COMMANDES D'ACHAT AMÉLIORÉES ─────────────
function vPurchaseOrdersEnhanced() {
  const orders = S.purchaseOrders || [];
  const pending = orders.filter(o => o.status==='pending');
  const shipped = orders.filter(o => o.status==='shipped');
  const received = orders.filter(o => o.status==='received');

  return `
  <div class="sub-hero">
    <div class="page-header-row" style="margin-bottom:14px">
      <button class="back-btn-dark" onclick="nav('more')">${IC.left}</button>
      <div style="flex:1"><div class="sub-hero-title">${t('purchaseOrders')}</div><div class="sub-hero-sub">Commandes & Suivi livraison</div></div>
      <button class="fab" onclick="nav('add-order')">${IC.plus}</button>
    </div>
    <div style="display:flex;gap:8px">
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${pending.length}</div><div class="hero-stat-lbl">En attente</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${shipped.length}</div><div class="hero-stat-lbl">Expédiées</div></div>
      <div class="hero-stat" style="flex:1"><div class="hero-stat-val">${received.length}</div><div class="hero-stat-lbl">Reçues</div></div>
    </div>
  </div>
  <div class="container">
    ${S.articles.filter(a=>a.stock<a.min&&a.min>0).length>0?`
    <div class="alert-banner" style="margin-bottom:12px" onclick="nav('add-order')">
      <div class="alert-ico">${IC.alert}</div>
      <div><div class="alert-title">Réapprovisionnement suggéré</div><div class="alert-sub">${S.articles.filter(a=>a.stock<a.min&&a.min>0).length} articles à commander</div></div>
      <div class="alert-arrow">${IC.chevron}</div>
    </div>`:''}

    ${orders.length===0?`
    <div class="empty"><div class="empty-ico">${IC.truck}</div><div class="empty-title">${t('noOrders')}</div><button class="btn btn-primary" style="max-width:200px" onclick="nav('add-order')">${t('newOrder')}</button></div>
    `:`
    ${['pending','shipped','received','cancelled'].map(status => {
      const filtered = orders.filter(o=>o.status===status);
      if (filtered.length===0) return '';
      const labels = {pending:'En attente',shipped:'Expédiées',received:'Reçues',cancelled:'Annulées'};
      const colors = {pending:'var(--warning)',shipped:'var(--accent)',received:'var(--success)',cancelled:'var(--danger)'};
      return `
    <div class="section-hd"><span class="section-lbl">${labels[status]} (${filtered.length})</span></div>
    ${filtered.map(o => {
      const supplier = S.suppliers.find(s=>s.id===o.supplierId);
      const expectedDate = o.expectedDate ? new Date(o.expectedDate).toLocaleDateString() : '—';
      return `
    <div class="card card-tap" style="margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:8px;height:8px;border-radius:50%;background:${colors[status]}"></div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:700">${o.articleName||'Article'}</div>
          <div style="font-size:11px;color:var(--text-3)">${supplier?.name||'Fournisseur'} · ${o.qty} ${o.unit||'pce'}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:12px;font-weight:700">${o.total?fmt(o.total)+' '+sym():''}</div>
          <div style="font-size:10px;color:var(--text-3)">Livraison: ${expectedDate}</div>
        </div>
      </div>
      ${status==='pending'||status==='shipped'?`
      <div style="display:flex;gap:4px;margin-top:10px;align-items:center">
        <div style="width:10px;height:10px;border-radius:50%;background:var(--success)"></div>
        <div style="flex:1;height:2px;background:${status==='shipped'?'var(--success)':'var(--border)'}"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:${status==='shipped'?'var(--accent)':'var(--border)'}"></div>
        <div style="flex:1;height:2px;background:var(--border)"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:var(--border)"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:9px;color:var(--text-3)"><span>Commandée</span><span>Expédiée</span><span>Livrée</span></div>`:''}
      ${status==='pending'?`
      <div style="display:flex;gap:6px;margin-top:10px">
        <button class="btn btn-ghost" style="flex:1;padding:8px;font-size:12px" onclick="markOrderShipped(${o.id})">${IC.truck} Expédiée</button>
        <button class="btn btn-primary" style="flex:1;padding:8px;font-size:12px" onclick="receiveOrder(${o.id})">${IC.check} Reçue</button>
      </div>`:''}
      ${status==='shipped'?`
      <div style="margin-top:10px"><button class="btn btn-primary" style="padding:8px;font-size:12px" onclick="receiveOrder(${o.id})">${IC.check} Marquer reçue</button></div>`:''}
    </div>`;}).join('')}`;}).join('')}`}
  </div>`;
}

function markOrderShipped(orderId) {
  const order = S.purchaseOrders.find(o=>o.id===orderId);
  if (!order) return;
  order.status = 'shipped';
  order.shippedDate = new Date().toISOString();
  localStorage.setItem('stockr_orders', JSON.stringify(S.purchaseOrders));
  logActivity('order', `Commande expédiée: ${order.articleName}`);
  showToast('Commande expédiée');
  render();
}

// ══════════════════════════════════════════════
// FIN NOUVELLES FONCTIONNALITÉS
// ══════════════════════════════════════════════

// ── PWA — Service Worker & Install ───────────
let _deferredInstall = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _deferredInstall = e;
  // Afficher le bouton install dans les settings
  render();
});

window.addEventListener('appinstalled', () => {
  _deferredInstall = null;
  showToast(t('installed'));
  render();
});

async function installPWA() {
  if (!_deferredInstall) return;
  _deferredInstall.prompt();
  const { outcome } = await _deferredInstall.userChoice;
  if (outcome === 'accepted') showToast('Installation en cours…');
  _deferredInstall = null;
  render();
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing;
          newSW.addEventListener('statechange', () => {
            if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
              showToast(t('updateAvailable'));
            }
          });
        });
      })
      .catch(() => {}); // silencieux si localhost sans HTTPS
  });
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Exposer au global pour les onclick inline
  window.S             = S;
  window.nav           = nav;
  window.render        = render;
  window.applyStock    = applyStock;
  window.deleteArticle = deleteArticle;
  window.confirmDelete = confirmDelete;
  window.recordSale    = recordSale;
  window.saveArticle   = saveArticle;
  window.saveProduct   = saveProduct;
  window.toggleCart      = toggleCart;
  window.deleteProduct   = deleteProduct;
  window.saveEditProduct = saveEditProduct;
  window.toggleAuthPwd   = toggleAuthPwd;
  window.addToCart       = addToCart;
  window.removeFromCart  = removeFromCart;
  window.confirmCart     = confirmCart;
  window.openUnitDrop    = openUnitDrop;
  window.closeUnitDrop   = closeUnitDrop;
  window.updateUnitDrop  = updateUnitDrop;
  window.selectUnit      = selectUnit;
  window.selectUnitCond  = selectUnitCond;
  window.saveAccountInfo = saveAccountInfo;
  window.toggleDark      = toggleDark;
  window.doLogin         = doLogin;
  window.doRegister      = doRegister;
  window.authNextStep    = authNextStep;
  window.spectraOnFile   = spectraOnFile;
  window.spectraConfirmYes = spectraConfirmYes;
  window.spectraConfirmNo  = spectraConfirmNo;
  window.spectraSubmitName = spectraSubmitName;
  window.spectraReset    = spectraReset;
  window.doLogout      = doLogout;
  window.showToast     = showToast;
  window.loadData           = loadData;
  window.renderRevenueChart  = renderRevenueChart;
  window.installPWA          = installPWA;
  window.generateInvoicePDF  = generateInvoicePDF;
  window.shareViaWhatsApp    = shareViaWhatsApp;
  window.showReceiptBanner   = showReceiptBanner;
  window.updateMarginPreview = updateMarginPreview;
  window.calcCompCost        = calcCompCost;
  window.exportArticlesCSV    = exportArticlesCSV;
  window.exportProductsCSV    = exportProductsCSV;
  window.exportSalesCSV       = exportSalesCSV;
  window.exportAllCSV         = exportAllCSV;
  window.setLang              = setLang;
  window.saveClient           = saveClient;
  window.deleteClient         = deleteClient;
  window.addLocation          = addLocation;
  window.removeLocation       = removeLocation;
  window.setLocation          = setLocation;
  window.uploadLogo           = uploadLogo;
  window.removeLogo           = removeLogo;
  window.toggleCatalogProduct = toggleCatalogProduct;
  window.shareCatalogWhatsApp = shareCatalogWhatsApp;
  window.shareFOMO            = shareFOMO;
  window.spectraStartCompare    = spectraStartCompare;
  window.spectraStartReception   = spectraStartReception;
  window.spectraConfirmReception = spectraConfirmReception;
  window.spectraAdjustStock      = spectraAdjustStock;
  window.spectraSignalLoss       = spectraSignalLoss;
  window.spectraRunDemo          = spectraRunDemo;
  window.spectraRunDemoReception  = spectraRunDemoReception;
  window.saveSupplier            = saveSupplier;
  window.deleteSupplier          = deleteSupplier;
  window.quickSaleProduct        = quickSaleProduct;
  window.exportFullCSV           = exportFullCSV;
  window.logMovement             = logMovement;
  window.saveOrder               = saveOrder;
  window.receiveOrder            = receiveOrder;
  window.cancelOrder             = cancelOrder;
  window.updateArticleField      = updateArticleField;
  window.changeCurrency          = changeCurrency;
  window.changeTaxRate           = changeTaxRate;
  window.activatePlan            = activatePlan;
  window.cancelPlan              = cancelPlan;
  window.setBilling              = setBilling;
  // ── v2 — Nouvelles fonctions ──
  window.toggleBoutiquePublish   = toggleBoutiquePublish;
  window.updateBoutiqueConfig    = updateBoutiqueConfig;
  window.toggleBoutiqueProduct   = toggleBoutiqueProduct;
  window.generateBoutiqueSite    = generateBoutiqueSite;
  window.previewBoutiqueSite     = previewBoutiqueSite;
  // ── Boutique avancée (apparence / domaine / pixels / code) ──
  window.verifyCustomDomain      = verifyCustomDomain;
  window.updatePixelConfig       = updatePixelConfig;
  window.savePixelConfig         = savePixelConfig;
  window.resetPixelConfig        = resetPixelConfig;
  window.updateCustomCode        = updateCustomCode;
  window.setCodeTab              = setCodeTab;
  window.loadCodeSample          = loadCodeSample;
  window.saveCustomCode          = saveCustomCode;
  window.clearCustomCode         = clearCustomCode;
  window.copyCustomCode          = copyCustomCode;
  // ── API Settings ──
  window.vApiSettings            = vApiSettings;
  window.generateApiToken        = generateApiToken;
  window.revokeApiToken          = revokeApiToken;
  window.addWebhook              = addWebhook;
  window.editWebhook             = editWebhook;
  window.deleteWebhook           = deleteWebhook;
  window.testWebhook             = testWebhook;
  window.copyWebhookEndpoint     = copyWebhookEndpoint;
  window.toggleWebhookActive     = toggleWebhookActive;
  window.toggleWebhookEvent      = toggleWebhookEvent;
  window.copyApiToken            = copyApiToken;
  window.copyIncomingEndpoint    = copyIncomingEndpoint;
  window.toggleDeliveryZone      = toggleDeliveryZone;
  window.shareBoutiqueWhatsApp   = shareBoutiqueWhatsApp;
  window.copyBoutiqueLink        = copyBoutiqueLink;
  window.addBoutiqueOrder        = addBoutiqueOrder;
  window.updateOrderStatus       = updateOrderStatus;
  window.contactOrderClient      = contactOrderClient;
  window.addPromotion            = addPromotion;
  window.editPromotion           = editPromotion;
  window.togglePromoActive       = togglePromoActive;
  window.deletePromotion         = deletePromotion;
  window.savePromotion           = savePromotion;
  window.viewPromo               = viewPromo;
  window._genPromoCode           = _genPromoCode;
  window.validatePromoCode       = validatePromoCode;
  window._recordPromoUsage       = _recordPromoUsage;
  window._applyPromoValue        = _applyPromoValue;
  window.sharePromoWhatsApp      = sharePromoWhatsApp;
  window.sharePromoSMS           = sharePromoSMS;
  window.copyPromoCode           = copyPromoCode;
  window.copyPromoLink           = copyPromoLink;
  // Marketing hub
  window.setMarketingTab         = setMarketingTab;
  // Banners
  window.addBanner               = addBanner;
  window.editBanner              = editBanner;
  window.saveBanner              = saveBanner;
  window.toggleBannerActive      = toggleBannerActive;
  window.deleteBanner            = deleteBanner;
  // Popups
  window.addPopup                = addPopup;
  window.editPopup               = editPopup;
  window.savePopup               = savePopup;
  window.togglePopupActive       = togglePopupActive;
  window.deletePopup             = deletePopup;
  // Reviews
  window.addReview               = addReview;
  window.editReview              = editReview;
  window.saveReview              = saveReview;
  window.approveReview           = approveReview;
  window.deleteReview            = deleteReview;
  window.copyReviewLink          = copyReviewLink;
  window.shareReviewLink         = shareReviewLink;
  // Tracking links
  window.addTrackingLink         = addTrackingLink;
  window.editTrackingLink        = editTrackingLink;
  window.saveTrackingLink        = saveTrackingLink;
  window.deleteTrackingLink      = deleteTrackingLink;
  window.copyTrackingLink        = copyTrackingLink;
  window.shareTrackingLink       = shareTrackingLink;
  window._buildTrackingUrl       = _buildTrackingUrl;
  window.redeemLoyaltyReward     = redeemLoyaltyReward;
  window.schedulePost            = schedulePost;
  window.publishScheduledPost    = publishScheduledPost;
  window.deleteScheduledPost     = deleteScheduledPost;
  window.addCampaign             = addCampaign;
  window.sendCampaign            = sendCampaign;
  window.deleteCampaign          = deleteCampaign;
  window.toggleLoyalty           = toggleLoyalty;
  window.addLoyaltyReward        = addLoyaltyReward;
  window.editLoyaltyReward       = editLoyaltyReward;
  window.deleteLoyaltyReward     = deleteLoyaltyReward;
  window.editLoyaltyRate         = editLoyaltyRate;
  window.toggleLoyaltyTierMode   = toggleLoyaltyTierMode;
  window.addLoyaltyTier          = addLoyaltyTier;
  window.editLoyaltyTier         = editLoyaltyTier;
  window.deleteLoyaltyTier       = deleteLoyaltyTier;
  window.sendLoyaltyCampaign     = sendLoyaltyCampaign;
  window.exportLoyaltyReport     = exportLoyaltyReport;
  window._getClientTier          = _getClientTier;
  window._renderTierBadge        = _renderTierBadge;
  window.toggleSocialAccount     = toggleSocialAccount;
  window.postProductSocial       = postProductSocial;
  window.setupPayment            = setupPayment;
  window.disconnectPayment       = disconnectPayment;
  window.connectIntegration      = connectIntegration;
  window.disconnectIntegration   = disconnectIntegration;
  window.markOrderShipped        = markOrderShipped;
  window.setArticleLocation      = setArticleLocation;
  window.getFilteredArticles     = getFilteredArticles;
  window.exportToJumia           = exportToJumia;
  window.exportToShopify         = exportToShopify;
  window.exportToWooCommerce     = exportToWooCommerce;
  window.exportToGoogleSheets    = exportToGoogleSheets;
  window.createYangoDelivery     = createYangoDelivery;
  window.createGlovoDelivery     = createGlovoDelivery;
  window.generateWavePayment     = generateWavePayment;
  window.generateOrangePayment   = generateOrangePayment;
  window.requestPaymentWhatsApp  = requestPaymentWhatsApp;
  window.importProductsFromCSV   = importProductsFromCSV;

  // Restaurer la session + token si existants
  const saved = getSession();
  if (saved && saved.token) {
    S.token   = saved.token;
    S.session = { id: saved.id, name: saved.name, email: saved.email, business: saved.business, currency: saved.currency, currency_symbol: saved.currency_symbol, tax_rate: saved.tax_rate };
    render(); // Affiche l'app immédiatement
    loadData(); // Charge les données en arrière-plan
  } else {
    render(); // Affiche l'écran auth
  }
});
