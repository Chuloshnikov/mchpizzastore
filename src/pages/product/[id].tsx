import ProductPage from '@/components/ProductPage';
import { useRouter } from "next/router";


const ProductDetails = () => {
  const router = useRouter();
    const {id} = router.query;
    return (
      <div>
        <ProductPage id={id}/>
      </div>
    )
  
}



export default ProductDetails;

