import NavLinks from '@/app/ui/navlinks';
import AcmeLogo from '@/app/ui/logo';

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 border-dashed border-2">
            <AcmeLogo />
            <NavLinks />
        </div>
    );
}
