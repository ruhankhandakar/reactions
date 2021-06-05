import Head from 'next/head'

export const getStaticProps = async () => {
  const url = `https://webcontent-pickrr.herokuapp.com//courier-info/`;
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
    <div className='container'>
      <Head>
        <title>Static Reactions Demo</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:title' content='Static Reactions Demo' />
        <meta
          property='og:description'
          content='Using Next.js Incremental Static Regeneration'
        />
        <meta
          property='og:image'
          content='https://og-image.now.sh/Incremental%20Static%20Regeneration%20Demo%20using%20**GitHub%20Reactions**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'
        />
      </Head>

      <main>
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

      </main>
    </div>
  )
}
