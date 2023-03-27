import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/images/logo_sort.svg';

export default function Layout({ children }) {
    return <main class="container">
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Kongsgård Bygg"
                            height={50}
                        />

                    </Link>

                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/">Vår prosjekter</Link>
                </li>
                <li>
                    <Link href="/">Kontakt oss</Link>
                </li>
            </ul>
        </nav>
        {children}
    </main>;
}