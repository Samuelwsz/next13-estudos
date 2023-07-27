import { cookies, headers } from "next/dist/client/components/headers"

export async function User() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const userCookies = cookies()
  const userHeaders = headers()

  const response = await fetch("http://jsonplaceholder.typicode.com/todos/1")
  const user = await response.json()

  return (
    <>
      <div>
        <p>pagina User</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {JSON.stringify(userCookies.get("1_cookie"), null, 2)}
        {JSON.stringify(userHeaders.entries(), null, 2)}
      </div>
    </>
  )
}
