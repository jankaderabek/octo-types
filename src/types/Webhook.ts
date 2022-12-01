import { Availability } from "./Availability";
import { Booking } from "./Booking";
import { Supplier } from "./Supplier";

export enum WebhookEvent {
  BookingUpdate = "booking_update",
  AvailabilityUpdate = "availability_update",
}
export interface Webhook {
  id: string;
  event: WebhookEvent;
  url: string;
}

export interface BookingUpdate {
  webhook: Webhook;
  booking: Booking;
}

export interface AvailabilityUpdate {
  webhook: Webhook;
  availability: Availability;
  productId: string;
  optionId: string;
  supplier: Supplier;
}