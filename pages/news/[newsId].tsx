import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { newsId } = router.query;
  console.log(router)
  return (
    <div>News Detail</div>
  )
}

export default Detail