import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Page, Profic, PageTitle, SectionTitle, Blurbs } from '../components/StyledComponents'
import WebHeader from '../components/WebHeader'
import MainBox from '../components/MainBox'
import SubBox from '../components/SubBox'
import PortoBox from '../components/PortoBox'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Herjuno Jati Darpito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page textcenter={true}>
      <WebHeader text='Herjuno Jati Darpito'></WebHeader>
        <Profic />
        <PageTitle>Herjuno Jati Darpito</PageTitle>
        <Blurbs>Back-End Developer based in Jakarta</Blurbs>
      </Page>
      <Page id='skills'>
        <PageTitle>Proficiencies</PageTitle>
        <div className={styles.ProficiencyContainer}>
            <MainBox>
                <SectionTitle>Front End</SectionTitle>
                <SubBox image='/images/react.png'  text='React JS' />
                <SubBox image='/images/nextjs.png'  text='Next JS' />
            </MainBox>

            <MainBox>
                <SectionTitle>Back End</SectionTitle>
                <SubBox image='/images/nodejs.png'  text='Node JS' />
                <SubBox image='/images/express.png'  text='Express JS' />
                <SubBox image='/images/postgresql.png'  text='PostgreSQL' />
                <SubBox image='/images/sequelize.png'  text='Sequelize' />
            </MainBox>

            <MainBox>
                <SectionTitle>Others</SectionTitle>
                <SubBox image='/images/html.png'  text='HTML' />
                <SubBox image='/images/css.png'  text='CSS' />
                <SubBox image='/images/javascript.png'  text='Javascript' />
                <SubBox image='/images/git.png'  text='Git' />
            </MainBox>
        </div>
      </Page>
      <Page id='portofolio' justify={true}>
          <PageTitle>Portofolio</PageTitle>
          <MainBox portofolio={true}>
              <PortoBox
                title='Game Platform'
                bg='/images/Game.png'
                href='https://mygamerps-cjed5j7h8-daffakbar.vercel.app/'
                project='Team Project'
                tools='Next JS, Express JS, Sequelize, PostgreSQL'
                role='Role - Backend Lead'
              />
              <PortoBox
                title='Simple Dashboard'
                bg='/images/dashboard.png'
                href='https://github.com/HerjunoJD/D-001-DashboardPrototype'
                project='Personal Project'
                tools='Express JS, EJS, Sequelize, PostgreSQL'
                role='Role - Backend'
              />
              <PortoBox
                title='Simple Chat App'
                bg='/images/chat.png'
                href='https://github.com/HerjunoJD/A-001-SimpleChatApp'
                project='Personal Project'
                tools='React, Express JS, Socket.io'
                role='Role - Frontend and Backend'
              />
          </MainBox>
      </Page>
      <Page id='contact' contact={true}>
          <PageTitle>How to find me</PageTitle>
          <MainBox>
            <a href='https://github.com/HerjunoJD'>
                <SubBox image='/images/github.png'  text='@HerjunoJD' />
            </a>
            <a href='https://www.linkedin.com/in/herjuno-jati-darpito-744941205/'>
            <SubBox image='/images/linkedin.png'  text='Herjuno Jati Darpito' />
            </a>
            <SubBox image='/images/mail.png'  text='herjuno.jd@gmail.com' />
          </MainBox>
      </Page>
    </div>
  )
}
