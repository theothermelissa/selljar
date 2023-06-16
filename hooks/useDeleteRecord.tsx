import { useRouter } from "next/router";
import useSWR from "swr";

type DeleteProps = {
  table: string;
  id: string;
};

export const useDeleteRecord = (props: DeleteProps) => {
  const { table, id } = props;
  const router = useRouter();
  const path = `/api/${table}/${id}`;
  const { mutate } = useSWR(path);

  const removeRecord = async () => {
    const result = await fetch(path, { method: "DELETE" });
    if (result.status !== 200) {
      throw new Error("Unable to delete record.");
    }
    mutate();
    router.reload();
  };
  return removeRecord;
};
