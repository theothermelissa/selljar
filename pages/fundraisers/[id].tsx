import { useRouter } from "next/router";
import useSwr from "swr";
import { useDeleteRecord } from "../../hooks/useDeleteRecord";

const FundraiserComponent = (data: any) => {
  const {
    data: { id, name },
  } = data;

  const deleteFundraiser = useDeleteRecord({
    id: id,
    table: "fundraisers",
  });

  if (!id) {
    return;
  }

  return (
    <>
      <h1>name: {name}</h1>
      <p>id: {id}</p>
      <button onClick={deleteFundraiser}>Delete</button>
    </>
  );
};

export default function Fundraiser() {
  const router = useRouter();
  const id = router.query.id;

  const url = id && `/api/fundraisers/${id}`;

  const fetcher = async (url: string) => await fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSwr(url, fetcher);

  return (
    <div>
      {isLoading ? (
        <div>... loading</div>
      ) : (
        <div>
          {error && (
            <div>Sorry, we encountered an error retrieving the record.</div>
          )}
          {data != null && <FundraiserComponent data={data} />}
        </div>
      )}
    </div>
  );
}
