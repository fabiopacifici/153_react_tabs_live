export default function TabButton({activeTab, i, content, onTabClick}){


  return (
    <button className={activeTab === i ? 'active' : ''} onClick={onTabClick}>{content}</button>
  )
}