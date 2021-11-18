

export async function weatherAPI(location: string, key: string) {
  const API = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`
  console.log(location)
  try {
    const res = await fetch(API)
    const data = await res.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
    return {
      error: err.message
    }
  }
}