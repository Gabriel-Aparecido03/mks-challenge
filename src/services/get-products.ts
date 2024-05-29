import { api } from "@/lib";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

interface Response {
  products: Product[];
  count: number;
}

export interface Params {
  page?: number;
  rows?: number;
  sortBy?: 'id' | 'name' | 'price';
  orderBy?: 'ASC' | 'DESC';
}

export async function getProducts({ orderBy = "DESC", page = 1, rows = 8, sortBy = "id" }: Params) : Promise<Response | null > {
  const res = await api.get('/products', { params: { orderBy, page, rows, sortBy } })
  if( res.status === 200 || res.status === 304) return res.data as Response
  return null
}