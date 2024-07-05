export const getConferenceById = async (id) => {
    const res = await fetch(`http://localhost:8000/id/${id}`);
    return await res.json();
  };
