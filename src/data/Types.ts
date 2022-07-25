export interface IClient {
  id: number,
  name: string,
  phone: string
}

export interface IPoint {
  id: number
  type: "delivery" | "pickup"
  "price": number,
  "coords": {
    "lat": number,
    "long": number
  },
  "client_id": number
}