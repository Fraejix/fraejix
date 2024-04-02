export default function ReviewsList({
    params,
}: {
    params: {
        productId: string;
    }
}) {

    return (
    <>
        <h1>Reviews for Product {params.productId}</h1>
    </>

    )
}