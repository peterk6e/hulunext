import Head from "next/head"
import Header from "../components/Header"
import Movies from "../components/Movies"
import Nav from "../components/Nav"
import requests from "../utils/requests"

export default function Home({ movies }) {
  console.log(movies)
  return (
    <div>
      <Head>
        <title>HuluNext</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Nav />

      <Movies />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then(res => res.json())

  return { props: { movies: request.results } }
}
