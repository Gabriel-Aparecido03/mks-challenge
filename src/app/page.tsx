"use client"
import { Product } from "@/components/product";
import { ShimmerProduct } from "@/components/shimmers/product";
import { getProducts } from "@/services/get-products";
import { Main, ProductsContainer } from "@/styles/home.style";
import { Suspense } from "react";
import { useQuery } from "react-query";

export default function Home() {

  const { data, isLoading } = useQuery({ queryFn: () => { return getProducts({}) }, queryKey: 'products' })
  return (
    <Main>
      {!isLoading && <ProductsContainer>
        {data?.products.map(i =>
          <Product
            key={i.id}
            description={i.description}
            id={i.id}
            name={i.name}
            photo={i.photo}
            price={i.price}
          />
        )}
      </ProductsContainer>}
      {isLoading && <ProductsContainer>
        {Array.from({ length: 8 }).map((_, i) => <ShimmerProduct key={i} />)}
      </ProductsContainer>}
    </Main>
  );
}
