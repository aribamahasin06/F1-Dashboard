import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import {Link} from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/Teams', label: 'Teams' },
  // { link: '/learn', label: 'Predictions' },
  // { link: '/community', label: 'Standings' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link to={link.link}>{link.label} </Link>

    // <a
    //   key={link.label}
    //   href={link.link}
    //   className={classes.link}
    //   data-active={active === link.link || undefined}
    //   onClick={(event) => {
    //     event.preventDefault();
    //     setActive(link.link);
    //   }}
    // >
    //   {link.label}
    // </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}