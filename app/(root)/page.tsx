import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home  = () => {
  
  const LoggedIn = { FirstName : "Farouk"}
  
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn.FirstName || 'Guest'}
            subtext = "Access and Manage Your Account and Transaction Efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1235.50}
          />
        </header>
      </div>
    </section>
  )
}

export default Home 