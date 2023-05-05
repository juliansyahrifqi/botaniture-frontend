export interface ProductType {
  product_id: number;
  product_name: string;
  product_description?: string;
  product_slug: string;
  product_price: number;
  product_discount: number;
  product_image: string;
}

export interface ProductProps {
  productName: string;
  productDiscount: number;
  productImage: string;
  productPrice: number;
  productSlug: string;
}