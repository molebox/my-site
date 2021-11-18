import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'
import { weatherAPI } from 'utlis/weather-api'

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const { nextUrl: url, geo } = req
  console.log({geo})

  const res = NextResponse.next()
  const weather = await weatherAPI(geo.city.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), process.env.WEATHER_API_KEY)
  console.log(weather)
  res.headers.append('x-visitors-weather',  weather.current.condition.text)
  return res
}