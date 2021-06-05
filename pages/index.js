import Head from 'next/head'

export const getStaticProps = async () => {
  const url = `https://webcontent-pickrr.herokuapp.com/courier-info`;
  const response = await fetch(url);
  const allCarriers = await response.json();

  return {
    props: {
      data: allCarriers.data,
      revalidate: 1,
      updateAt: Date.now(),
    },
  };
};


export default function Home({ data, updateAt }) {
  const timeString = new Date(updateAt).toLocaleTimeString();
  return (
    <div style={{ backgroundColor: 'teal' }}>
      {timeString}
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
