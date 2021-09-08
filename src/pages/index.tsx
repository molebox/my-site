import Head from 'next/head'
import Layout from 'components/layout/layout';
import MenuItemSection from 'components/layout/menu-items-section';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <MenuItemSection />
    </Layout>
  )
}


// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <NestedLayout>{page}</NestedLayout>
//     </Layout>
//   )
// }