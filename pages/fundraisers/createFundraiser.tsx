import { SyntheticEvent, useState } from "react";

const CreateFundraiser = () => {
  const [productIds, setProductIds] = useState<string[] | undefined>();
  const [name, setName] = useState<string | undefined>();

  const submitFundraiser = async (e: SyntheticEvent) => {
    const body = {
      productIds: productIds,
      name: name,
    };
    try {
      await fetch("/api/fundraisers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error("this is the error: ", error);
    }
  };

  const addOrRemoveProduct = (event: React.FormEvent<HTMLInputElement>) => {
    const id = event.currentTarget.value;
    if (!productIds) {
      setProductIds([id]);
      return;
    } else if (productIds.includes(id)) {
      return;
    }
    const newIds = [...productIds, id];
    setProductIds(newIds);
  };

  const updateName = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <form onSubmit={submitFundraiser}>
      <h1>New Fundraiser</h1>
      <p>Choose a name: </p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={updateName}></input>
      <p>Choose products:</p>
      <ul>
        <li>
          <input
            type="checkbox"
            id="1"
            name="1"
            value="cliq1x60q00026f2e7gzrwort"
            onChange={addOrRemoveProduct}
          />
          <label htmlFor="1">cliq1x60q00026f2e7gzrwort</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="2"
            name="2"
            onChange={addOrRemoveProduct}
            value="cliq1xdzl00046f2egbuxnqmk"
          />
          <label htmlFor="2">cliq1xdzl00046f2egbuxnqmk</label>
        </li>
        <button type="submit">Create My Fundraiser</button>
      </ul>
    </form>
  );
};

export default CreateFundraiser;
