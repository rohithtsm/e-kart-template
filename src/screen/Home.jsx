import { Helmet } from 'react-helmet'
import Banner from '../component/common/banner/banner'
import CollectionBanner from '../component/common/banner/collection-banner'
import HeaderOne from '../component/Header/Header'
import Collections from '../component/common/collections'
import TopCollection from '../component/collections/top-collection'
import { Product5 } from '../service/service'
import MasterParallaxBanner from '../component/common/banner/master-parrallax-banner'
import MasterFooter from '../component/footer/footer'
import Blog from '../component/blogs/blog-list'
import SpecialProducts from '../component/collections/sepecial-collection'


function Home() {

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/1.png"} />
            </Helmet>
            <HeaderOne logoName={"logo.png"} topClass="top-header" />
            <Banner />
            <Collections />
            <CollectionBanner />
            {/* <Paragraph title="title1 section-t-space" inner="title-inner1" hrClass={false} /> */}
            <TopCollection
                titleClass="title4"
                inner="title-inner4"
                line={true}
                type="vegetables"
                productSlider={Product5}
                title="Trending Products"
                designClass="section-b-space addtocart_count ratio_square"
                noSlider="true"
                cartClass="cart-info cart-wrap"
            />
            {/* parallax */}
            <MasterParallaxBanner
                bg="parallax-banner15"
                parallaxClass="text-start p-left"
                title="2024"
                subTitle1="food market"
                subTitle2="special offer"
            />
            {/* Special Product */}
            <div className="section-b-space">
                <SpecialProducts
                    type="vegetables"
                    cartClass="cart-info cart-wrap"
                    designClass="addtocart_count ratio_square"
                />
            </div>
            {/* Blog */}
            <Blog
                type="vegetables"
                sectionClass="blog blog-bg section-b-space ratio2_3"
                inner="title-inner4"
                title="title4"
            />
            {/* Footer */}
            <MasterFooter
                footerClass={`footer-light`}
                footerLayOut={"light-layout upper-footer"}
                footerSection={"small-section border-section border-top-0"}
                belowSection={"section-b-space light-layout"}
                newLatter={true}
                logoName={"logo.png"}
            />
        </>
    )
}

export default Home
