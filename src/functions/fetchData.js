export const getData = (link, setData) => {
  fetch(link)
    .then((res) => res.json())
    .then((data) => setData(data));
};
