import Logo from '@/components/common/logo'
import Links from './links'
import ConnectWalletButton from './connect-wallet-button'
const Header = () => {
    return (
        <header className='flex items-center justify-between w-full py-2 mb-4 '>
            <div className='flex items-center justify-center gap-4'>
                <Logo />
                <Links />
            </div>
            <ConnectWalletButton />
        </header>
    )
}

export default Header