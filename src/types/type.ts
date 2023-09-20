export interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: null;
  address_3: null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  state: string;
  street: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface SearchFilterProps {
  data: Brewery[];
}

export interface Column {
  id: 'name' | 'type' | 'city' | 'state' | 'country' | 'details';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
