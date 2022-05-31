import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'
import { weatherAPI } from 'utlis/weather-api'

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const { geo } = req

  const res = NextResponse.next()
  // const weather = await weatherAPI(geo.city.normalize('NFD').replace(/[\u0300-\u036f]/g, ""), process.env.WEATHER_API_KEY)
  // const visitorsWeather = weather.current.condition.text || 'No weather data'
  // res.headers.append('x-visitors-weather',  visitorsWeather)
  // console.log('req.nextUrl.pathname: ', req.nextUrl.pathname)
  // if (req.nextUrl.pathname === '/writing') {
  //   const testUrl = new URL('/who-am-i', req.url);

  //   testUrl.searchParams.set('from', req.nextUrl.pathname)
  //   return NextResponse.redirect(testUrl)
  //   // req.nextUrl.pathname = '/writing'
  //   // const url = req.nextUrl.origin.concat(req.nextUrl.pathname)
  //   // return NextResponse.redirect(url)
  // }


  // req.nextUrl.pathname = '/writing'
  // console.log('req.nextUrl.pathname: ', req.nextUrl.pathname)
  // console.log('req.url: ', req.url)
  // console.log('req.nextUrl: ', req.nextUrl)
  // const loginUrl = new URL('/who-am-i', req.url);
  // loginUrl.searchParams.set('from', req.nextUrl.pathname)

}