
export type Count = {
  rate: number;
  count: number;
};
export type Data = {
  id: number;
  category: string;
  image: string;
  title: string;
  price: number;
  description: string;
  rating: Count;
};

export type InitialData = {
  data: Data[]
  loading: boolean
  hasError: boolean
}