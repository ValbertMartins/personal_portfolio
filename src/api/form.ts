const BASE_URL = "https://formsubmit.co/ajax/"

export async function submitForm(email: string, subject: string, message: string) {
  const response = await fetch(`${BASE_URL}${import.meta.env.VITE_MY_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      subject,
      message,
    }),
  })
  console.log(response)
}
