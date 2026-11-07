import React from 'react';
import { Check, CheckCircle, Eye, Navigation, Send, ShieldAlert, Target, X } from 'lucide-react';
const icons = { check: Check, 'check-circle': CheckCircle, eye: Eye, navigation: Navigation, send: Send, 'shield-alert': ShieldAlert, target: Target, x: X };
// Keep dynamic icons in React's tree instead of mutating the DOM externally.
export default function Icon({ name, ...props }) {
  const Component = icons[name];
  return Component ? <Component aria-hidden="true" {...props} /> : null;
}
