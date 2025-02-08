
import './App.css'
import Community from './components/Community'
import Features from './components/Features'
import Footer from './components/Footer'
import GameLoop from './components/GameLoop'
import Hero from './components/Hero'
import MiniGames from './components/MiniGames'
import Nav from './components/Nav'
import NftMarket from './components/NftMarket'
import SofiaAi from './components/SofiaAi'
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { AddressProvider } from "./components/AddressContext"

function App() {


  return (
    <>
    <DynamicContextProvider
            settings={{
                environmentId: '09c22ca0-8d2b-4bfc-956e-3aa619ddcbbc',
                walletConnectors: [EthereumWalletConnectors],
            }}
        >
         <AddressProvider>
     <Nav/>
     <Hero/>
     <Features/>
     <GameLoop/>
     <MiniGames/>
     <NftMarket/>
     <SofiaAi/>
     <Community/>
     <Footer/>
     </AddressProvider>
     </DynamicContextProvider>
    </>
  )
}

export default App
