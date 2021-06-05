import Head from 'next/head'

export const getStaticProps = async () => {
  const url = `https://webcontent-pickrr.herokuapp.com/courier-info`;
  const response = await fetch(url);
  const allCarriers = await response.json();

  return {
    props: {
      data: allCarriers.data,
      revalidate: 2,
      updateAt: Date.now(),
    },
  };
};


export default function Home({ reactions, updatedAt }) {
  const timeString = new Date(updatedAt).toLocaleTimeString();
  return (
    <div style={{ backgroundColor: 'teal' }}>
      {updateAt}
      {data.map((carrier) => (
        <div key={carrier.courier_name}>
          <div> {carrier.courier_name}</div>

          <button
            onClick={() => router.push(`/carrier-integrations/${carrier.slug}`)}
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  )
}
