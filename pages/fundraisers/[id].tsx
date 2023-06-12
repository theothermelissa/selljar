import { useRouter } from "next/router";
import useSwr from "swr";

export default function Fundraiser() {
  const router = useRouter();

  const url = router.query.id && `/api/fundraisers/${router.query.id}`;

  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSwr(url, fetcher);

  return (
    <div>
      {isLoading ? <div>... loading</div> : <div>{JSON.stringify(data)}</div>}
    </div>
  );
}
