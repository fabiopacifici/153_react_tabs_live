import { act, useState } from "react"
import TabButton from "./components/TabButton"
import TabPanel from "./components/TabPanel"
import {tabs} from "./data/tabs"


function App() {

  const [activeTab, setActiveTab] = useState(null)
  const [collapsed, setCollapsed] = useState(true)

  return (
    <>

      <header>
        <div className="logo">
          <i className="bi bi-cassette-fill"></i> Tabs
        </div>

        <button onClick={()=> setCollapsed(!collapsed)}><i className="bi bi-three-dots-vertical"></i></button>
        {collapsed === false &&
          <div className="collapsed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, similique temporibus. Blanditiis ea nulla illum distinctio inventore sed, maiores illo modi ullam vel veniam necessitatibus explicabo? Perspiciatis praesentium dolorum reprehenderit.
          </div>
        }
      </header>

      <main>

        <div className="tabs">

          <nav>
            {
              tabs.map((tab, i) => (

                <TabButton activeTab={activeTab} i={i} onTabClick={() => setActiveTab(i)} key={i} content={tab.text} />
              ))
            }
          </nav>

          <div>
            <TabPanel tabs={tabs} activeTab={activeTab} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
