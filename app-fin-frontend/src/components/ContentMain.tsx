import ContentArea from './ContentArea'
import InitialMainContent from './ContentInitial'
import React from 'react'
import { HandlerList } from '@/api/dados'

interface MainContentProps {}

async function getData() {
  const response = await HandlerList()
  return response
}

export default async function MainContent(props: MainContentProps) {
  const results = await getData()

  const qtreg = results.reg.length === undefined ? 0 : results.reg.length
  return (
    <ContentArea
      col
      center
      className="bg-black w-full h-screen p-5 sm:mt-[75px] sm:justify-start"
    >
      <InitialMainContent qtreg={qtreg} results={results} />
    </ContentArea>
  )
}
