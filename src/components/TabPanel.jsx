export default function TabPanel({tabs, activeTab}) {


  return (
    <>
      {activeTab === null && <p>Select a button</p>}
      <div>
        <h2>{tabs[activeTab]?.text}</h2>
        <p>
          {tabs[activeTab]?.content}
        </p>
      </div>
    </>
  )
}