import Link from "next/link"
import Head from "./head"
import { User } from "@/components/user"
import { Repos } from "@/components/repo"
import { Suspense } from "react"
import { BIncrement } from "@/components/clientside"

export default function Home() {
  /*
  const [] = await Promise.all([fetch(""), fetch("")])
  */

  /* const response = await fetch("http://api.github.com/users/samuelwsz", {
    next: {
      revalidate: 30, //atualiza a chamada a cada 30 segundos
    },
  })
  const user = await response.json()*/

  return (
    <>
      <Head>Home</Head>
      <div>
        <p>pagina home</p>
        <div>
          <Link href="/appSignin">ir para pagina sobre</Link>
        </div>

        <div>
          <Link href="/auth/signin">ir para pagina logar</Link>
        </div>
        <div>
          <BIncrement />
        </div>
        <Suspense fallback={<p>Carregando usuarios...</p>}>
          <User />
        </Suspense>

        <Repos />
        {/* <pre>{JSON.stringify(user, null, 2)}</pre>*/}
      </div>
    </>
  )
}
