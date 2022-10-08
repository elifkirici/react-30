import React from 'react'
import About from './about/index'
import TabButtons from './tabButtons'
import TabContent from './tabContent'
import {useState} from 'react'


function Tabs() {
    const [selectedTab, setSelectedTab]= useState("History")

  return (
    <div>
    <About/>
    <TabButtons setSelectedTab={setSelectedTab} />
   <TabContent selectedTab={selectedTab}/>
    </div>
  )
}

export default Tabs