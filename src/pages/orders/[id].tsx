import OrderPage from '@/components/OrderPage';
import { useRouter } from 'next/router';




export default function Order() {
    const router = useRouter();
    const {id} = router.query;
    
    return (
        <div>
            <OrderPage id={id}/>
        </div>
    )
}

