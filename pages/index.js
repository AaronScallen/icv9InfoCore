import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import { Container } from '@mui/material';

import Loader from '../components/Loader';
import DeviceList from '../components/Devices';

export default function Page({ }) {
  return (
    <Container>
      <DeviceList />
      <Loader show />
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: {username: 'ascallen'},
      }}><a>Scallen's Profile</a></Link>
    </Container>
  );
}