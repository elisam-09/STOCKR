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

// ── API base ──────────────────────────────────
const API_BASE = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:5001'
  : (window.__STOCKR_API_URL__ || 'https://stockr-api.onrender.com');

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
    // Misc extra
    copied:'Copié !', shared:'Partagé !', noData:'Pas de données',
    profitChart:'Évolution bénéfice', clientsChart:'Répartition clients',
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
    // Misc extra
    copied:'Copied!', shared:'Shared!', noData:'No data',
    profitChart:'Profit evolution', clientsChart:'Client breakdown',
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
  const date  = new Date(sales[0].date).toLocaleDateString(locale, { day:'numeric', month:'long', year:'numeric' });
  const clientName = sales[0]?.clientName || null;
  const logoData = localStorage.getItem('stockr_logo') || null;
  const loc = S.currentLocation ? S.locations.find(l => l.id === S.currentLocation) : null;

  // ── Header indigo ──
  doc.setFillColor(79, 70, 229);
  doc.rect(0, 0, 210, 46, 'F');

  // Logo if available
  let logoX = 16;
  if (logoData) {
    try { doc.addImage(logoData, 'JPEG', 16, 6, 18, 18); logoX = 38; } catch(e) {}
  }

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22); doc.setFont('helvetica', 'bold');
  doc.text(biz, logoX, 16);
  doc.setFontSize(9); doc.setFont('helvetica', 'normal');
  doc.text(S.session?.email || '', logoX, 23);
  if (loc) doc.text(loc.name, logoX, 29);

  doc.setFontSize(16); doc.setFont('helvetica', 'bold');
  doc.text(t('invoice').toUpperCase(), 195, 16, { align: 'right' });
  doc.setFontSize(10); doc.setFont('helvetica', 'normal');
  doc.text(t('invoiceNumber') + ' ' + invId, 195, 24, { align: 'right' });
  doc.text(t('invoiceDate') + ' : ' + date, 195, 31, { align: 'right' });
  if (clientName) {
    doc.text(t('invoiceClient') + ' : ' + clientName, 195, 38, { align: 'right' });
  }

  // ── Client info block ──
  let y = 56;
  if (clientName) {
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(16, y - 4, 178, 12, 2, 2, 'F');
    doc.setTextColor(60, 60, 60); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
    doc.text(t('invoiceClient') + ':', 20, y + 3);
    doc.setFont('helvetica', 'normal');
    doc.text(clientName, 50, y + 3);
    y += 16;
  }

  // ── En-tête tableau ──
  doc.setFillColor(238, 242, 255);
  doc.roundedRect(16, y, 178, 8, 1, 1, 'F');
  doc.setTextColor(79, 70, 229); doc.setFontSize(8); doc.setFont('helvetica', 'bold');
  doc.text(t('invoiceItems').toUpperCase(), 20, y + 5.5);
  doc.text(t('invoiceQty').toUpperCase(), 120, y + 5.5, { align: 'center' });
  doc.text(t('invoiceUnitPrice').toUpperCase(), 155, y + 5.5, { align: 'right' });
  doc.text(t('invoiceTotal').toUpperCase(), 192, y + 5.5, { align: 'right' });

  // ── Lignes produits ──
  y += 14; let grandTotal = 0; let totalProfit = 0;
  doc.setTextColor(30, 30, 30); doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
  sales.forEach((s, i) => {
    const unitPrice = s.qty > 0 ? Math.round(s.total / s.qty) : 0;
    grandTotal += s.total;
    totalProfit += (s.profit || 0);
    if (i % 2 === 1) { doc.setFillColor(249, 250, 251); doc.rect(16, y - 5, 178, 9, 'F'); }
    doc.text(s.productName, 20, y);
    doc.text(String(s.qty), 120, y, { align: 'center' });
    doc.text(fmt(unitPrice) + ' ' + sym, 155, y, { align: 'right' });
    doc.setFont('helvetica', 'bold');
    doc.text(fmt(s.total) + ' ' + sym, 192, y, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    y += 10;
  });

  // ── Totals block ──
  doc.setDrawColor(229, 231, 235); doc.line(16, y, 194, y); y += 8;
  const taxRate = parseFloat(S.session?.tax_rate) || 0;
  doc.setFontSize(9); doc.setTextColor(100, 100, 100);
  doc.text(t('invoiceSubtotal'), 155, y, { align: 'right' });
  doc.text(fmt(grandTotal) + ' ' + sym, 192, y, { align: 'right' }); y += 7;
  if (taxRate > 0) {
    const tva = Math.round(grandTotal * taxRate / 100);
    doc.text(`${t('invoiceTax')} (${taxRate}%)`, 155, y, { align: 'right' });
    doc.text(fmt(tva) + ' ' + sym, 192, y, { align: 'right' }); y += 7;
    grandTotal += tva;
  }
  doc.text(t('articles') + ': ' + sales.length, 20, y);
  doc.text(t('invoiceQty') + ': ' + sales.reduce((s,v) => s + v.qty, 0), 60, y);

  doc.setFillColor(79, 70, 229);
  doc.roundedRect(120, y - 1, 74, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255); doc.setFontSize(11); doc.setFont('helvetica', 'bold');
  doc.text(t('invoiceTotal').toUpperCase(), 140, y + 6, { align: 'right' });
  doc.text(fmt(grandTotal) + ' ' + sym, 192, y + 6, { align: 'right' });

  // ── Payment method ──
  y += 18;
  doc.setTextColor(80, 80, 80); doc.setFontSize(8); doc.setFont('helvetica', 'normal');
  doc.text(t('invoicePayment') + ' : ' + t('invoiceCash') + ' / ' + t('invoiceMobile'), 16, y);

  // ── Pied de page ──
  doc.setTextColor(160, 160, 160); doc.setFontSize(7); doc.setFont('helvetica', 'normal');
  doc.text(t('invoiceThankYou'), 105, 275, { align: 'center' });
  doc.text('STOCKR — ' + biz, 105, 280, { align: 'center' });
  doc.text(S.session?.email || '', 105, 285, { align: 'center' });

  doc.save(`${t('invoice')}-${invId}.pdf`);
  showToast(t('invoice') + ' PDF');
}

function shareViaWhatsApp(sales) {
  if (!Array.isArray(sales)) sales = [sales];
  const sym  = S.session?.currency_symbol || 'FCFA';
  const biz  = S.session?.business || S.session?.name || 'Mon Commerce';
  const date = new Date(sales[0].date).toLocaleDateString('fr-FR');
  const invId = _invNum(sales[0].id);
  const total = sales.reduce((s, v) => s + v.total, 0);

  const lines = ['🧾 *REÇU DE VENTE*', `📍 *${biz}*`, `📅 ${date}  •  N° ${invId}`, ''];
  sales.forEach(s => {
    const u = s.qty > 0 ? Math.round(s.total / s.qty) : 0;
    lines.push(`▸ ${s.productName}  ×${s.qty}  =  *${fmt(s.total)} ${sym}*`);
  });
  lines.push('', `✅ *TOTAL : ${fmt(total)} ${sym}*`, '', '_Géré avec STOCKR_');

  window.open('https://wa.me/?text=' + encodeURIComponent(lines.join('\n')), '_blank');
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
  form: { name: '', stock: 0, min: 0, unit: '', lead: 7, ref: '', price: 0 },
  spectra: {
    step:      'camera',   // 'camera' | 'loading' | 'confirm' | 'done'
    queue:     [],         // détections en attente de confirmation
    current:   0,          // index dans queue
    confirmed: [],         // items validés par l'utilisateur
    naming:    false,      // l'utilisateur est en train de nommer un article inconnu
    results:   [],         // résultats finaux après /confirm
  },
};

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
  try {
    const [arts, prods, sales, preds, clients] = await Promise.all([
      api('GET', '/api/articles/'),
      api('GET', '/api/products/'),
      api('GET', '/api/sales/'),
      api('GET', '/api/predictions/'),
      api('GET', '/api/clients/').catch(() => []),
    ]);
    S.products    = prods.map(productFromAPI);
    S.articles    = arts.map(articleFromAPI);
    S.sales       = sales.map(saleFromAPI);
    S.predictions = preds;
    S.clients     = clients || [];
    recalcAllMins();
    render();
  } catch(e) {
    showToast(t('errLoad'), 'error');
  }
}

// ── Helpers ───────────────────────────────────
const $ = id => document.getElementById(id);

function fmt(n) {
  return Math.round(n).toLocaleString('fr-FR');
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
  S.sales.unshift({ id: Date.now(), productId: product.id, productName: product.name, qty, total: product.price * qty, date: new Date().toISOString() });
  showToast(`${t('saleConfirmed')} — ${fmt(product.price * qty)} ${sym()}`);
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
    S.articles.push(newArt);
    showToast(`"${f.name}" ${t('added') || 'ajouté'}`);
    S.form = { name:'', stock:0, min:0, unit:'', lead:7, ref:'', price:0 };
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
      return a ? `${c.qty} ${a.unit} ${a.name}` : '';
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
  try {
    let total = 0, count = 0, newSales = [];
    for (const item of S.cart) {
      const data = await api('POST', '/api/sales/', { product_id: item.productId, quantity: item.qty, client_id: clientId, client_name: client?.name || null });
      const product = S.products.find(p => p.id === item.productId);
      const lineTotal = (product?.price || 0) * item.qty;
      const lineProfit = ((product?.price || 0) - (product?.purchasePrice || 0)) * item.qty;
      total += lineTotal;
      count += item.qty;
      const newSale = { id: data.sale.id, productId: data.sale.product_id, productName: data.sale.product_name, qty: data.sale.quantity, total: lineTotal, profit: lineProfit, date: data.sale.timestamp, clientId, clientName: client?.name || null };
      S.sales.unshift(newSale);
      newSales.push(newSale);
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
    spectra: vSpectra, clients: vClients, 'add-client': vAddClient,
    'client-detail': vClientDetail, notifications: vNotifications,
    catalog: vCatalog, suppliers: vSuppliers,
    'add-supplier': vAddSupplier, 'supplier-detail': vSupplierDetail,
    'stock-history': vStockHistory, 'purchase-orders': vPurchaseOrders,
    'add-order': vAddOrder, pricing: vPricing,
  };
  viewEl.innerHTML = (map[S.view] || vHome)();
  if (!S.globalSearch) viewEl.scrollTop = 0;

  if (S.view === 'financial') requestAnimationFrame(() => { renderRevenueChart(); renderProfitChart(); });

  // Restore focus on global search after re-render
  if (S.view === 'home' && S.globalSearch) {
    const gs = $('global-search');
    if (gs) { gs.focus(); gs.setSelectionRange(gs.value.length, gs.value.length); }
  }

  const hideNav = ['detail','add','add-product','edit-product','add-client','client-detail','notifications','catalog','add-supplier','supplier-detail','stock-history','purchase-orders','add-order','pricing'].includes(S.view);
  navEl.style.display = hideNav ? 'none' : '';
  if (!hideNav) navEl.innerHTML = renderNav();
}

function renderNav() {
  const tabs = [
    { id:'home',      icon:IC.home,   label:t('home')     },
    { id:'pantry',    icon:IC.box,    label:t('stock')    },
    { id:'products',  icon:IC.tag,    label:t('products') },
    { id:'sales',     icon:IC.dollar, label:t('sales')    },
    { id:'clients',   icon:IC.users,  label:t('clients')  },
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
          <select class="location-select" onchange="setLocation(this.value?Number(this.value):null)">
            <option value="">${t('allLocations')}</option>
            ${S.locations.map(l => `<option value="${l.id}" ${S.currentLocation===l.id?'selected':''}>${l.name}</option>`).join('')}
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
      const critical = S.predictions.filter(p => p.status === 'critical');
      if (!critical.length) return '';
      return `
      <div class="section-hd"><div class="section-lbl">${t('aiPredictions')}</div></div>
      ${critical.slice(0, 3).map((p, i) => `
      <div class="pred-card critical" style="animation-delay:${i * 0.06}s">
        <div class="pred-dot"></div>
        <div class="pred-body">
          <div class="pred-name">${p.article_name}</div>
          <div class="pred-msg">${p.message}</div>
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

    ${_showSearch ? '' : `<div class="section-hd"><div class="section-lbl">${t('overview')}</div></div>
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
      <button class="quick-btn" onclick="nav('pantry')">
        <span class="quick-ico">${IC.box}</span>
        <div class="quick-label">${t('stock')}</div>
        <div class="quick-sub">${S.articles.length} ${t('articles').toLowerCase()}</div>
      </button>
      <button class="quick-btn" onclick="nav('products')">
        <span class="quick-ico">${IC.tag}</span>
        <div class="quick-label">${t('products')}</div>
        <div class="quick-sub">${S.products.length} ${t('products').toLowerCase()}</div>
      </button>
      <button class="quick-btn" onclick="nav('sales')">
        <span class="quick-ico">${IC.dollar}</span>
        <div class="quick-label">${t('sales')}</div>
        <div class="quick-sub">${fmt(totalCA)} ${sym()}</div>
      </button>
      <button class="quick-btn" onclick="nav('financial')">
        <span class="quick-ico">${IC.trending}</span>
        <div class="quick-label">${t('bilan')}</div>
        <div class="quick-sub">${S.sales.length} ${t('saleOf')}</div>
      </button>
      <button class="quick-btn" onclick="nav('clients')">
        <span class="quick-ico">${IC.users}</span>
        <div class="quick-label">${t('clients')}</div>
        <div class="quick-sub">${S.clients.length} ${t('clientOf')}</div>
      </button>
      <button class="quick-btn" onclick="nav('spectra')">
        <span class="quick-ico">${IC.camera}</span>
        <div class="quick-label">Spectra</div>
        <div class="quick-sub">${t('spectraScan')}</div>
      </button>
      <button class="quick-btn" onclick="nav('catalog')">
        <span class="quick-ico">${IC.whatsapp}</span>
        <div class="quick-label">${t('catalog')}</div>
        <div class="quick-sub">${t('catalogSub')}</div>
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
  let list = S.articles.filter(a => a.name.toLowerCase().includes(q));
  if (S.filter==='out') list = list.filter(a => a.stock===0);
  else if (S.filter==='low') list = list.filter(a => a.stock>0 && a.stock<a.min && a.min>0);
  else if (S.filter==='ok')  list = list.filter(a => a.stock>=a.min || a.min===0);

  return `
  <div class="page-header">
    <div class="page-header-row">
      <button class="back-btn" onclick="nav('home')">${IC.left}</button>
      <div class="page-title">${t('stock')}</div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="fab fab-outline" onclick="nav('spectra')" title="Spectra">${IC.camera}</button>
        <button class="fab" onclick="nav('add')">${IC.plus}</button>
      </div>
    </div>
    <div class="search-wrap">
      <span class="search-ico">${IC.search}</span>
      <input class="input input-search" type="text" placeholder="    ${t('search')}" value="${S.search.replace(/"/g,'&quot;')}" oninput="S.search=this.value;render()">
    </div>
    <div class="filter-row">
      <button class="filter-chip ${S.filter==='all'?'active':''}" onclick="S.filter='all';render()">${t('all')} (${S.articles.length})</button>
      <button class="filter-chip ${S.filter==='out'?'active':''}" onclick="S.filter='out';render()">${t('outOfStock')}</button>
      <button class="filter-chip ${S.filter==='low'?'active':''}" onclick="S.filter='low';render()">${t('low')}</button>
      <button class="filter-chip ${S.filter==='ok'?'active':''}"  onclick="S.filter='ok';render()">${t('ok')}</button>
    </div>
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
        return a ? `${fmtQty(c.qty)} ${a.unit} ${a.name}` : null;
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
          ${avail.map(p=>`<option value="${p.id}">${p.name} — ${fmt(p.price)} ${sym()} (${productMaxMake(p)} fab.)</option>`).join('')}
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
      <div class="sale-dot"></div>
      <div class="sale-info">
        <div class="sale-prod">${s.productName}</div>
        <div class="sale-date">${fmtDate(s.date)}${s.clientName ? ` · <span style="color:var(--accent)">${s.clientName}</span>` : ''}</div>
      </div>
      <div class="sale-right">
        <div class="sale-total">${fmt(s.total)} ${S.session?.currency_symbol||'FCFA'}</div>
        <div class="sale-qty">×${s.qty}${s.profit ? ` · <span style="color:var(--success)">+${fmt(s.profit)}</span>` : ''}</div>
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
    <div class="metric-grid">
      <div class="metric-card"><div class="metric-val">${filtered.length}</div><div class="metric-lbl">${t('salesCount')}</div></div>
      <div class="metric-card"><div class="metric-val">${fmt(avg)}</div><div class="metric-lbl">${t('avgTicket')}</div></div>
      <div class="metric-card"><div class="metric-val">${fmt(stockVal)}</div><div class="metric-lbl">${t('stockVal')}</div></div>
    </div>
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
    ${S.predictions.length > 0 ? `
    <div class="section-hd" style="margin-top:8px">
      <div class="section-lbl">${t('aiPredictions')}</div>
      <div style="font-size:11px;color:var(--text-3)">WMA · EOQ · Safety Stock</div>
    </div>
    ${S.predictions.filter(p => p.status !== 'no_data').map((p, i) => `
    <div class="pred-card ${p.status}" style="animation-delay:${i * 0.06}s">
      <div class="pred-dot"></div>
      <div class="pred-body">
        <div class="pred-name">${p.article_name}</div>
        <div class="pred-msg">${p.message}</div>
        ${p.status !== 'no_data' && p.daily_demand > 0 ? `
        <div class="pred-stats">
          <div class="pred-stat">Stock <strong>${p.current_stock} ${p.unit}</strong></div>
          ${p.days_remaining !== null ? `<div class="pred-stat">${_lang==='fr'?'Jours restants':'Days left'} <strong>${p.days_remaining}${_lang==='fr'?'j':'d'}</strong></div>` : ''}
          <div class="pred-stat">EOQ <strong>${p.eoq} ${p.unit}</strong></div>
          <div class="pred-stat">Safety Stock <strong>${p.safety_stock} ${p.unit}</strong></div>
        </div>` : ''}
      </div>
    </div>`).join('')}` : ''}
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
          <label class="form-label">${t('articlePrice')} (${sym()})</label>
          <input class="input" type="number" placeholder="0" step="10" value="${f.price||0}" oninput="S.form.price=this.value">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('deliveryDays')}</label>
        <input class="input" type="number" placeholder="7" value="${f.lead}" oninput="S.form.lead=this.value" style="width:50%">
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
          <input class="input" id="prod-cost" type="number" placeholder="0" step="100" oninput="updateMarginPreview()">
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
          <input type="number" class="input comp-qty" placeholder="0" step="0.5" min="0" style="width:76px;text-align:center">
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
            <input type="number" class="input comp-qty" placeholder="0" step="0.5" min="0" style="width:76px;text-align:center" value="${existing ? existing.qty : ''}">
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
  const allAlerts = [
    ...outOfStock.map(a => ({ type: 'out', article: a, priority: 0 })),
    ...lowStock.map(a => ({ type: 'low', article: a, priority: 1 })),
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
      return `
      <div class="card card-tap anim" style="animation-delay:${i*0.04}s" onclick="nav('client-detail',{selectedClientId:${c.id}})">
        <div class="article-row">
          <div class="article-avatar">${initials(c.name)}</div>
          <div class="article-info">
            <div class="article-name">${c.name}</div>
            <div class="article-meta">${c.phone ? `${IC.phone} ${c.phone}` : ''}${c.phone && c.email ? ' · ' : ''}${c.email || ''}</div>
            ${st.count > 0 ? `<div class="article-meta" style="margin-top:2px">${st.count} ${t('purchases').toLowerCase()} · ${fmt(st.total)} ${sym()}</div>` : ''}
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
    <button class="back-btn" onclick="spectraReset()" style="align-self:flex-start;margin-bottom:8px">${IC.left}</button>
    <div class="spectra-hero" style="margin-bottom:12px">
      <div class="spectra-title">${t('spectraAudit')}</div>
      <div class="spectra-sub">${detected.length} ${t('spectraDetected').toLowerCase()}</div>
    </div>

    ${totalMissing > 0 ? `
    <div class="card" style="background:rgba(239,68,68,.08);border:1px solid var(--danger);padding:14px;margin-bottom:12px;text-align:center">
      <div style="font-size:28px;font-weight:900;color:var(--danger)">${totalMissing}</div>
      <div style="font-size:12px;color:var(--danger);font-weight:600">${t('spectraGapMsg')}</div>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="btn" style="flex:1;background:var(--danger);color:#fff;font-size:12px;padding:10px" onclick="spectraAdjustStock()">
          ${t('spectraAdjust')}
        </button>
        <button class="btn btn-ghost" style="flex:1;font-size:12px;padding:10px;border:1px solid var(--danger);color:var(--danger)" onclick="spectraSignalLoss()">
          ${t('spectraSignalLoss')}
        </button>
      </div>
    </div>` : ''}

    <div class="metric-grid" style="margin-bottom:12px">
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
    <div class="section-hd"><div class="section-lbl" style="color:var(--danger)">${t('spectraMissing')} (${missing.length})</div></div>
    ${missing.map(m => `<div class="card" style="margin-bottom:4px;border-left:3px solid var(--danger)">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-weight:700;font-size:13px">${m.name}</div><div style="font-size:11px;color:var(--text-3)">${t('stock')}: ${m.stock} | ${t('spectraScan')}: ${m.scanned}</div></div>
        <div style="font-weight:800;color:var(--danger)">-${m.diff}</div>
      </div>
    </div>`).join('')}` : ''}

    ${extra.length > 0 ? `
    <div class="section-hd"><div class="section-lbl" style="color:var(--warning)">${t('spectraExtra')} (${extra.length})</div></div>
    ${extra.map(m => `<div class="card" style="margin-bottom:4px;border-left:3px solid var(--warning)">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-weight:700;font-size:13px">${m.name}</div><div style="font-size:11px;color:var(--text-3)">${t('stock')}: ${m.stock} | ${t('spectraScan')}: ${m.scanned}</div></div>
        <div style="font-weight:800;color:var(--warning)">+${m.diff}</div>
      </div>
    </div>`).join('')}` : ''}

    ${matches.length > 0 ? `
    <div class="section-hd"><div class="section-lbl" style="color:var(--success)">${t('spectraMatch')} (${matches.length})</div></div>
    ${matches.map(m => `<div class="card" style="margin-bottom:4px;border-left:3px solid var(--success)">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:600;font-size:13px">${m.name}</div>
        <div style="font-weight:700;color:var(--success)">${m.scanned}</div>
      </div>
    </div>`).join('')}` : ''}

    <button class="btn btn-primary" style="margin-top:16px" onclick="spectraReset();nav('pantry')">${t('spectraViewStock')}</button>
  </div>`;
  }

  // ── Réception magique : résultats ──
  if (sp.step === 'reception') {
    const items = sp.receptionItems || [];
    const total = items.reduce((s,i) => s + i.quantity, 0);
    return `
  <div class="spectra-wrap">
    <button class="back-btn" onclick="spectraReset()" style="align-self:flex-start;margin-bottom:8px">${IC.left}</button>
    <div class="spectra-hero" style="margin-bottom:12px">
      <div class="spectra-title">${t('spectraReception')}</div>
      <div class="spectra-sub">${t('spectraNewDelivery')}</div>
    </div>

    <div class="card" style="background:rgba(16,185,129,.08);border:1px solid var(--success);padding:14px;margin-bottom:12px;text-align:center">
      <div style="font-size:32px;font-weight:900;color:var(--success)">${total}</div>
      <div style="font-size:12px;color:var(--success);font-weight:600">${t('spectraItemsReceived')}</div>
    </div>

    ${items.map(it => `<div class="card" style="margin-bottom:4px;border-left:3px solid var(--success)">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:13px">${it.matched_name || it.detected_name}</div>
        <div style="font-weight:800;color:var(--success)">+${it.quantity}</div>
      </div>
    </div>`).join('')}

    <button class="btn btn-primary" style="margin-top:16px;padding:14px" onclick="spectraConfirmReception()">
      ${IC.check} &nbsp; ${t('spectraConfirmReception')}
    </button>
    <button class="btn btn-ghost" style="margin-top:8px" onclick="spectraReset()">${t('cancel')}</button>
  </div>`;
  }

  // ── Étape : caméra ──
  if (sp.step === 'camera') {
    const lowItems = S.articles.filter(a => a.qty !== undefined ? (a.qty > 0 && a.qty <= (a.minQty||0)) : (a.stock > 0 && a.stock <= (a.min||0)));
    return `
  <div class="spectra-wrap">
    <button class="back-btn" onclick="nav('home')" style="align-self:flex-start;margin-bottom:8px">${IC.left}</button>
    <div class="spectra-hero">
      <div class="spectra-logo">${IC.cameraLg}</div>
      <div class="spectra-title">${t('spectraTitle')}</div>
      <div class="spectra-sub">${t('spectraScanSub')}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:340px">
      <label class="btn btn-primary spectra-capture-btn" for="spectra-file" style="margin:0;padding:14px 18px;font-size:15px">
        ${IC.camera} &nbsp; ${t('spectraCapture')}
      </label>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <button class="spectra-feature-btn" onclick="spectraStartCompare()">
          <div class="spectra-feat-ico" style="color:var(--danger)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div class="spectra-feat-title">${t('spectraAudit')}</div>
          <div class="spectra-feat-sub">${t('spectraAuditSub')}</div>
        </button>
        <button class="spectra-feature-btn" onclick="spectraStartReception()">
          <div class="spectra-feat-ico" style="color:var(--success)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <div class="spectra-feat-title">${t('spectraReception')}</div>
          <div class="spectra-feat-sub">${t('spectraReceptionSub')}</div>
        </button>
      </div>
    </div>

    <input id="spectra-file" type="file" accept="image/*" capture="environment"
           style="display:none" onchange="spectraOnFile(this)">
    <button class="spectra-demo-btn" onclick="spectraRunDemo()">
      ${IC.eye} &nbsp; ${t('spectraDemo')} — ${t('spectraDemoSub')}
    </button>
    <div class="spectra-hint">${_lang === 'fr' ? "L'image ne quitte jamais ton appareil." : "The image never leaves your device."}</div>

    ${lowItems.length > 0 ? `
    <div style="width:100%;max-width:340px;margin-top:12px">
      <div class="section-hd"><div class="section-lbl" style="color:var(--danger)">${t('alerts')} (${lowItems.length})</div></div>
      ${lowItems.slice(0,3).map(a => `<div class="card" style="margin-bottom:4px;border-left:3px solid var(--danger);padding:10px 12px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div style="font-weight:600;font-size:12px">${a.name}</div>
          <div style="font-size:11px;color:var(--danger);font-weight:700">${a.qty||a.stock} ${t('unitsRemaining')}</div>
        </div>
      </div>`).join('')}
    </div>` : ''}
  </div>`;
  }

  // ── Étape : chargement ──
  if (sp.step === 'loading') return `
  <div class="spectra-wrap spectra-center">
    <div class="spectra-spinner"></div>
    <div class="spectra-loading-title">${t('spectraAnalyzing')}</div>
    <div class="spectra-sub">Spectra AI</div>
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
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('settings')">${IC.left}</button>
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
  const order = {
    id: Date.now(),
    articleId: art?.id, articleName: art?.name || '?', unit: art?.unit || 'pce',
    supplierId: sup?.id || null, supplierName: sup?.name || '',
    qty, total, status: 'pending',
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
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('settings')">${IC.left}</button>
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

// ── SUPPLIERS ────────────────────────────────
function vSuppliers() {
  const q = S.clientSearch.toLowerCase();
  const filtered = q ? S.suppliers.filter(s => s.name.toLowerCase().includes(q) || (s.phone||'').includes(q)) : S.suppliers;
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('settings')">${IC.left}</button>
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
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('settings')">${IC.left}</button>
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
  render();
  // Simulate detection after 2s using existing articles
  setTimeout(() => {
    const demoItems = S.articles.slice(0, 5).map(a => ({
      detected_name: a.name,
      matched_name: a.name,
      matched_id: a.id,
      matched_unit: a.unit || 'pce',
      quantity: Math.max(1, Math.floor(Math.random() * ((a.qty || a.stock || 5) + 3))),
      confidence: Math.floor(85 + Math.random() * 14),
    }));
    if (demoItems.length === 0) {
      demoItems.push(
        { detected_name: 'Riz 5kg', matched_name: 'Riz 5kg', quantity: 8, confidence: 92, matched_unit: 'sac' },
        { detected_name: 'Huile 1L', matched_name: 'Huile 1L', quantity: 15, confidence: 88, matched_unit: 'l' },
        { detected_name: 'Sucre 1kg', matched_name: 'Sucre 1kg', quantity: 3, confidence: 95, matched_unit: 'kg' }
      );
    }
    S.spectra.compareResults = demoItems;
    S.spectra.step = 'compare';
    render();
  }, 2000);
}

// ── QUICK SALE ──────────────────────────────
function quickSaleProduct(productId) {
  const prod = S.products.find(p => p.id === productId);
  if (!prod) return;
  const sym = S.session?.currency_symbol || 'FCFA';

  // Check stock availability
  const canMake = prod.items ? Math.min(...prod.items.map(it => {
    const art = S.articles.find(a => a.id === it.articleId);
    return art ? Math.floor((art.qty !== undefined ? art.qty : art.stock) / (it.qty || 1)) : 0;
  })) : 999;

  if (canMake < 1) {
    showToast(t('insufficientStock'), 'error');
    return;
  }

  // Create sale
  const sale = {
    id: Date.now(),
    productId: prod.id,
    productName: prod.name,
    qty: 1,
    total: prod.price,
    profit: prod.price - (prod.cost || 0),
    date: new Date().toISOString(),
    method: 'cash',
  };

  // Deduct stock
  if (prod.items) {
    prod.items.forEach(it => {
      const art = S.articles.find(a => a.id === it.articleId);
      if (art) {
        if (art.qty !== undefined) art.qty -= (it.qty || 1);
        else art.stock -= (it.qty || 1);
        logMovement(art.name, 'exit', it.qty || 1, t('quickSale') + ': ' + prod.name);
      }
    });
    localStorage.setItem('stockr_articles', JSON.stringify(S.articles));
  }

  S.sales.unshift(sale);
  localStorage.setItem('stockr_sales', JSON.stringify(S.sales));
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
  const input = document.getElementById('loc-name');
  const name = input?.value?.trim();
  if (!name) return;
  const loc = { id: Date.now(), name };
  S.locations.push(loc);
  localStorage.setItem('stockr_locations', JSON.stringify(S.locations));
  S.locationAdd = false;
  render();
}

function removeLocation(id) {
  S.locations = S.locations.filter(l => l.id !== id);
  localStorage.setItem('stockr_locations', JSON.stringify(S.locations));
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
      <div class="settings-label">${t('locations')}</div>
      <div class="settings-row-block">
        <div class="settings-row ${!S.currentLocation?'':'card-tap'}" onclick="setLocation(null)" style="${!S.currentLocation?'background:var(--accent-light)':''}">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.home}</span>
            <div class="settings-row-lbl" style="${!S.currentLocation?'color:var(--accent);font-weight:700':''}">${t('allLocations')}</div>
          </div>
          ${!S.currentLocation ? '<div style="color:var(--accent);font-size:12px;font-weight:700">✓</div>' : ''}
        </div>
        ${S.locations.map(l => `
        <div class="settings-row ${String(S.currentLocation)===String(l.id)?'':'card-tap'}" onclick="setLocation(${l.id})" style="${String(S.currentLocation)===String(l.id)?'background:var(--accent-light)':''}">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.box}</span>
            <div class="settings-row-lbl" style="${String(S.currentLocation)===String(l.id)?'color:var(--accent);font-weight:700':''}">${l.name}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            ${String(S.currentLocation)===String(l.id) ? '<div style="color:var(--accent);font-size:12px;font-weight:700">✓</div>' : ''}
            <button onclick="event.stopPropagation();removeLocation(${l.id})" style="background:none;border:none;cursor:pointer;color:var(--danger);font-size:14px;padding:4px">✕</button>
          </div>
        </div>`).join('')}
        ${S.locationAdd ? `
        <div class="settings-row" style="cursor:default;padding:8px 12px">
          <input class="input" id="loc-name" type="text" placeholder="${t('locationPlaceholder')}" style="flex:1;margin-right:8px">
          <button class="btn btn-primary" style="padding:8px 14px;font-size:12px" onclick="addLocation()">${t('addLocation')}</button>
          <button class="btn btn-ghost" style="padding:8px 10px;font-size:12px;margin-left:4px" onclick="S.locationAdd=false;render()">${t('cancel')}</button>
        </div>` : `
        <div class="settings-row" onclick="S.locationAdd=true;render()">
          <div class="settings-row-inner">
            <span class="settings-row-ico" style="color:var(--accent)">${IC.plus}</span>
            <div class="settings-row-lbl" style="color:var(--accent)">${t('addLocation')}</div>
          </div>
          ${IC.chevron}
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

    <div style="text-align:center;padding:24px 0 8px;font-size:11px;color:var(--text-3)">STOCKR · v0.5.0 · 2026</div>
  </div>`;
}

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
