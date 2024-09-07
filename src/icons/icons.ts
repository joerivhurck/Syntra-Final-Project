export const icons = {
  arrowRight: import('./ArrowRightIcon.vue'),
  calendar: import('./CalendarIcon.vue'),
  checkmark: import('./CheckmarkIcon.vue'),
  close: import('./CloseIcon.vue'),
  certificate: import('./CertificateIcon.vue'),
  mail: import('./MailIcon.vue'),
  euro: import('./EuroIcon.vue'),
  location: import('./LocationIcon.vue')
}

export type Icon = keyof typeof icons
