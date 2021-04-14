import Link from 'next/link'
// import { Drawer }
export default function Layout() {
    return (
        <div>
            {mobileView ? getMobileLayout(): getDesktopLayout()}
        </div>
    )
}