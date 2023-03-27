import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo_orange.svg';
import Hero from '../components/hero';

export default function Layout({ children }) {
    return <main>

        <nav className="container">
            <ul>
                <li>
                    <Link href="/">
                        <Image
                            src={logo}
                            class="white"
                            alt="Kongsgård Bygg"
                            height={50}
                        />

                    </Link>

                </li>
            </ul>

            <ul>
                <li>
                    <Link href="#projects">Våre prosjekter</Link>
                </li>
                <li>
                    <Link href="#contact">Kontakt oss</Link>
                </li>
            </ul>
        </nav>
        <Hero>
            <hgroup>
                <h1>Totalleverandør innen bygg og anlegg</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi, pariatur reprehenderit fugiat officia.</h2>

            </hgroup>
        </Hero>
        <div className='container'>
            {children}

        </div>
    </main>;
}