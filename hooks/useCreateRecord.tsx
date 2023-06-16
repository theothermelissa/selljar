import useSWR from "swr";

export const useCreateRecord = (path: string) => {
  const { mutate } = useSWR(path);

  const addRecord = async (data: any) => {
    const result = await fetch(path, { body: data });

    if (result.status !== 200) {
      throw new Error("Unable to create record.");
    }

    mutate();
  };
  return addRecord;
};
