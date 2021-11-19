import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'
import { weatherAPI } from 'utlis/weather-api'

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const { geo } = req
  console.log({geo})

  const next = NextResponse
  const weather = await weatherAPI(geo.city, process.env.WEATHER_API_KEY)
  const res = new next();
  // const weather = await weatherAPI(geo.city.normalize('NFD').replace(/[\u0300-\u036f]/g, ""), process.env.WEATHER_API_KEY)
  const visitorsWeather = weather.current.condition.text || 'No weather data'
  res.headers.append('x-visitors-weather',  visitorsWeather)
  return res
}