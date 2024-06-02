const fetchData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

export async function getStaticProps() {
  const res = await fetch("/data.json");
  const repo = await res.json();
  return { props: { repo } };
}

export default fetchData;
