import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Page, Profic, ProfWrapper, PageTitle, SectionTitle, PortoWrapper, Blurbs, ProfileBlurbs, PortoBlurbs } from '../components/StyledComponents'
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
        <ProfWrapper>
          <Profic />
          <PageTitle>Herjuno Jati Darpito</PageTitle>
          <Blurbs>Back-End Developer based in Jakarta</Blurbs>
          <ProfileBlurbs>Hello there! My name is Juno, an aspiring coder from Jakarta. While I have no background in tech education, I find the field of programming to be an interesting place to venture on. I'm currently looking for opportunity to be employed and utilize the skills I've learned in programming.</ProfileBlurbs>
        </ProfWrapper>
      </Page>
      <Page id='skills'>
        <PageTitle>Proficiencies</PageTitle>
        <div className={styles.ProficiencyContainer}>
          {/* Implemen rubah flex ke bawah kalo layarnya sempit */}
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
            <PortoWrapper>
              <PortoBox
                title='Game Platform'
                bg='/images/Game.png'
                href='https://mygamerps-cjed5j7h8-daffakbar.vercel.app/'
                project='Team Project'
                tools='Next JS, Express JS, Sequelize, PostgreSQL'
                role='Role - Backend Lead'
              />
              <PortoBlurbs>This is an online game platform project created in the middle of bootcamp, where user could register their account and receive points by playing available games in there. My role in that project is working on the Backend side.</PortoBlurbs>
            </PortoWrapper>
            <PortoWrapper>
              <PortoBox
                title='Simple Dashboard'
                bg='/images/dashboard.png'
                href='https://github.com/HerjunoJD/D-001-DashboardPrototype'
                project='Personal Project'
                tools='Express JS, EJS, Sequelize, PostgreSQL'
                role='Role - Backend'
              />
              <PortoBlurbs>This is a personal project to create something simple that implements CRUD and time-based data.</PortoBlurbs>
            </PortoWrapper>
            <PortoWrapper>
              <PortoBox
                title='Simple Chat App'
                bg='/images/chat.png'
                href='https://github.com/HerjunoJD/A-001-SimpleChatApp'
                project='Personal Project'
                tools='React, Express JS, Socket.io'
                role='Role - Frontend and Backend'
              />
              <PortoBlurbs>Similar to previous one, this is also a personal project although for this one it's more on trying off tutorials on youtube.</PortoBlurbs>
            </PortoWrapper>
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
