import * as React from "react";
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import { StyledLink as Link } from "baseui/link";
export default () => (
    <HeaderNavigation>
        <NavigationList $align={ALIGN.left}>
            <h1>
                <NavigationItem>
                    <Link href="/" style={{ "text-decoration": "none" }}>
                        Andreas Fredh-Ojala
                    </Link>
                </NavigationItem>
            </h1>
        </NavigationList>
        <NavigationList $align={ALIGN.center}>
            <NavigationItem>
                <Link href="Stories">Stories</Link>
            </NavigationItem>
        </NavigationList>
        <NavigationList $align={ALIGN.center}>
            <NavigationItem>
                <Link href="Projects">Projects</Link>
            </NavigationItem>
        </NavigationList>
        <NavigationList $align={ALIGN.right}>
            <NavigationItem>
                <Link href="Work">Current Work</Link>
            </NavigationItem>
        </NavigationList>
        <NavigationList $align={ALIGN.right}>
            <NavigationItem>
                <Link href="Me">About Me</Link>
            </NavigationItem>
        </NavigationList>
        <NavigationList $align={ALIGN.right}>
            <NavigationItem>

            </NavigationItem>
        </NavigationList>
    </HeaderNavigation >
)
