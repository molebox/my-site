

export async function weatherAPI(location: string, key: string) {
  const API = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`

  try {
    const res = await fetch(API)
    const data = await res.json()
    return data
  } catch (err) {
    return {
      error: err.message
    }
  }
}