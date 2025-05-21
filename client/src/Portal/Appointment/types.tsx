export interface RequestResponse {
  code: number;
  status?: string;
  payload?: any;
}

export interface BookingField {
  id: number,
  title: string;
  firstname: string;
  date: string;
  timeframe: string;
  timestart: Date;
  timeend: Date
}

export interface AppointmentField {
  id: number,
  dentist: string,
  service_name: string,
  date: string,
  schedule: string,
}
