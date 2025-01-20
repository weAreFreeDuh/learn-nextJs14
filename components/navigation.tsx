"use client"

// import { log } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();
    console.log(path);
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link>{path === "/" ? "♥": ""}</li> 
                <li><Link href="/about-us">About-us</Link>{path === "/about-us" ? "♥": ""}</li> 
            </ul>
        </nav>
    );
}

// styles.nav는 css 적용되는 classname이 곂치지 않게 사용할 수 있다.