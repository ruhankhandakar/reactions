import Head from 'next/head'

export const getStaticProps = async () => {
  return {
    props: {
      updateAt: Date.now(),
      revalidate: 1
    },
  };
};


export default function Home({ data, updateAt }) {
  const timeString = new Date(updateAt).toLocaleTimeString();
  return (
    <div style={{ backgroundColor: 'teal' }}>
      {timeString}
    </div>
  )
}
