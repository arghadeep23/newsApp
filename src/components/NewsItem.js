import React, { Component } from 'react'

export class NewsItem extends Component {
    articles = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Apple WWDC 2023: What to expect, from iOS 17 to new MacBooks",
            "description": "Apple’s Worldwide Developers Conference regularly sets the tone for the company’s future, and that may be truer than ever for 2023. Many expect the company to introduce its first mixed reality headset at the event, with a new platform to match. However, the w…",
            "url": "https://www.engadget.com/apple-wwdc-2023-what-to-expect-from-ios-17-to-new-macbooks-160033810.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/w5eokYEru719pqXSfleocA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/989f60f0-ce54-11ed-ae79-580cd063061e.cf.jpg",
            "publishedAt": "2023-05-31T16:00:33Z",
            "content": "Apples Worldwide Developers Conference regularly sets the tone for the companys future, and that may be truer than ever for 2023. Many expect the company to introduce its first mixed reality headset … [+7109 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mat Smith",
            "title": "The Morning After: Industry leaders say AI presents 'risk of extinction' on par with nuclear war",
            "description": "With the rise of AI language models and tools like ChatGPT and Bard, we've heard warnings from people involved, like Elon Musk, about the risks posed by AI. Now, a group of high-profile industry leaders has issued a one-sentence statement: “Mitigating the ris…",
            "url": "https://www.engadget.com/the-morning-after-industry-leaders-say-ai-presents-risk-of-extinction-on-par-with-nuclear-war-111545269.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/QEXUJO6VnMtfc92eqjj4QA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-02/aee5ff80-a867-11ed-bb3f-bb42181ba6dd.cf.jpg",
            "publishedAt": "2023-05-31T11:15:45Z",
            "content": "With the rise of AI language models and tools like ChatGPT and Bard, we've heard warnings from people involved, like Elon Musk, about the risks posed by AI. Now, a group of high-profile industry lead… [+4164 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Kate O'Flaherty",
            "title": "Apple's iOS 16.5 Fixes 3 Security Bugs Already Used in Attacks",
            "description": "Plus: Microsoft patches two zero-day flaws, Google’s Android and Chrome get some much-needed updates, and more.",
            "url": "https://www.wired.com/story/apple-ios-16-5-security-flaws-critical-update-may-2023/",
            "urlToImage": "https://media.wired.com/photos/647777cd90167265276c87a0/191:100/w_1280,c_limit/053123-security-critical-updates-may.png",
            "publishedAt": "2023-05-31T16:45:16Z",
            "content": "Apple, Google, and Microsoft have released major patches this month to fix multiple security flaws already being used in attacks. May was also a critical month for enterprise software, with GitLab, S… [+3142 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Andrew Liszewski",
            "title": "Apple Could Announce Several New Macs at WWDC After Months of Sluggish Sales",
            "description": "As we approach Apple’s Worldwide Developers Conference next week, and the company’s keynote presentation on Monday, June 5, more details about what will potentially be revealed are starting to surface, with the latest rumors indicating that on top of major so…",
            "url": "https://gizmodo.com/apple-wwdc-macbook-air-pro-m2-m3-chip-laptop-new-15-inc-1850490787",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/760e916680bfd39fb26912d4811ea68f.jpg",
            "publishedAt": "2023-05-31T15:00:00Z",
            "content": "As we approachApples Worldwide Developers Conference next week, and the companys keynote presentation on Monday, June 5, more details about what will potentially be revealed are starting to surface, … [+2715 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
            "title": "How to watch the Meta Quest Games Showcase 2023",
            "description": "E3 might be dead, but June is still when all the new games get revealed. We're anticipating massive announcements for the Oculus Quest at this year's Showcase!",
            "url": "https://www.androidcentral.com/gaming/virtual-reality/how-to-watch-the-meta-quest-games-showcase-2023",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/ortFquKk6n3MJWTKLkU3ua-1200-80.jpg",
            "publishedAt": "2023-05-31T14:46:23Z",
            "content": "<ul><li>The Meta Quest Gaming Showcase begins at 9:45am PT on June 1, 2023 with a preshow and game announcements, followed by the 40-minute main show at 10am PT.</li><li>We're expecting lots of new g… [+2074 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "tips@androidcentral.com (Nickolas Diaz)",
            "title": "Nothing will deliver 3 years of Android OS updates for the Phone (2)",
            "description": "The official Nothing Twitter account detailed the Phone (2) update mentality alongside some new environmental efforts.",
            "url": "https://www.androidcentral.com/phones/nothing-three-years-os-updates",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/9rTDk3JJuMR9X9vi5BbtfS-1200-80.jpg",
            "publishedAt": "2023-05-31T18:41:57Z",
            "content": "<ul><li>Nothing will continue to deliver three years of Android OS updates and four years of security updates for the Phone (2).</li><li>Nothing detailed several environmental efforts it has taken wi… [+2956 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "namerah.saud-fatmi@futurenet.com (Namerah Saud Fatmi)",
            "title": "Chipolo One Bluetooth tracker review: Bringing the fight to Tile",
            "description": "The Chipolo One is an adept little Bluetooth tracker that rings louder than Tile. It's also more lightweight, but not as durable. Is it worth the buy? Here's what we think.",
            "url": "https://www.androidcentral.com/accessories/chipolo-one-bluetooth-tracker-review",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/rRfABe9qWD8TYZtrfnYphe-1200-80.jpg",
            "publishedAt": "2023-05-31T15:00:00Z",
            "content": "Tile might offer the best and most versatile lineup of Bluetooth trackers, but it certainly doesn't stand alone. Chipolo counters the Tile Mate and Tile Slim with its circular Chipolo One and the cre… [+8947 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "michael.hicks@futurenet.com (Michael L Hicks)",
            "title": "Google Play: Everything you need to know",
            "description": "You know what the Google Play Store is, but do you know what Play Services and Protect do? What about Play Pass vs. Play Games? And remember Play Music and Play Edition phones?",
            "url": "https://www.androidcentral.com/apps-software/google-play",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/HUTbhiSP77EUxCePY56ECD-1200-80.jpg",
            "publishedAt": "2023-05-31T19:01:53Z",
            "content": "Google Play has been the catch-all umbrella term for most of Google's app and mobile gaming endeavors for the past decade and more. The Google Play Store, its app marketplace, continues to be the mai… [+11621 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Amy Hawkins Senior China correspondent",
            "title": "UN experts express ‘grave concern’ over detention of Jimmy Lai in Hong Kong",
            "description": "Communication sent to Beijing government says media mogul’s prosecutions relate to his criticism of ChinaA group of UN experts have expressed “grave concern” over the arrest and detention of Jimmy Lai, a former media mogul in Hong Kong who has been charged wi…",
            "url": "https://www.theguardian.com/world/2023/may/31/un-experts-express-grave-concern-over-detention-of-jimmy-lai-in-hong-kong-china",
            "urlToImage": "https://i.guim.co.uk/img/media/79d962bdbaa0361e56666092a9defb6935ce67b8/0_17_3448_2069/master/3448.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cbd8592907b1fbcfdb14de59de1bd648",
            "publishedAt": "2023-05-31T09:35:59Z",
            "content": "A group of UN experts have expressed grave concern over the arrest and detention of Jimmy Lai, a former media mogul in Hong Kong who has been charged with violating the territorys national security l… [+2925 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Sian Cain",
            "title": "Good riddance, Ted Lasso: how the ‘nice’ comedy became utterly dreadful television",
            "description": "Rubbish jokes, inept plotting, a weak script … should we go on? This messy, boring, endurance test of a show got way bigger than it ever deserved – thank goodness its final episode is hereThey say bad things come in threes and this week television delivered, …",
            "url": "https://www.theguardian.com/tv-and-radio/2023/may/31/good-riddance-ted-lasso-how-the-nice-comedy-became-utterly-dreadful-television",
            "urlToImage": "https://i.guim.co.uk/img/media/d383a93361e53b95e060755667b782840000b869/0_200_5590_3354/master/5590.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=279ac5d89d8c5ec78e948a7d82c22f3f",
            "publishedAt": "2023-05-31T05:00:17Z",
            "content": "They say bad things come in threes and this week television delivered, with the end of two excellent shows Succession, Barry and a 76-minute episode of Ted Lasso. Today, its the finale of the Apple T… [+10357 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Nadia Khomami Arts and culture correspondent",
            "title": "Kylie Minogue ‘bursting with joy’ as new single Padam Padam soars up charts",
            "description": "Track shunned by BBC Radio 1 and Capital when released finds singer a new audience via social mediaIt’s been hailed as Kylie Minogue’s “comeback” single and has generated countless memes and dance videos on social media.Yet when it was first released earlier …",
            "url": "https://www.theguardian.com/music/2023/may/31/kylie-minogue-new-single-padam-padam-soars-up-charts-new-audience-via-social-media",
            "urlToImage": "https://i.guim.co.uk/img/media/1bf2b5978c8730277ccd2018c4b15ec53145f564/0_201_3994_2397/master/3994.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f1f4451b255d128c2fdcbaec0f3f1b63",
            "publishedAt": "2023-05-31T13:23:52Z",
            "content": "Its been hailed as Kylie Minogues comeback single and has generated countless memes and dance videos on social media.\r\nYet when it was first released earlier this month, Padam Padam was not played on… [+10506 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Mitchel Broussard",
            "title": "Deals: Apple Studio Display With Standard Glass Drops to $1,349.99 on Amazon ($249 Off)",
            "description": "Following a few deals on the nano-texture glass version of the Apple Studio Display last month, today Amazon has the standard glass option of the display for $1,349.99, down from $1,599.00. Amazon provides an estimated June 6 date for deliveries to most Unite…",
            "url": "https://www.macrumors.com/2023/05/31/deals-apple-studio-display-standard-glass/",
            "urlToImage": "https://images.macrumors.com/t/iXPd1H5IC6TMnWWuRHItlsBuG4g=/2250x/article-new/2022/03/apple-studio-display-blue.jpg",
            "publishedAt": "2023-05-31T14:14:09Z",
            "content": "Following a few deals on the nano-texture glass version of the Apple Studio Display last month, today Amazon has the standard glass option of the display for $1,349.99, down from $1,599.00. Amazon pr… [+1027 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Seeds Second Betas of iOS 16.6 and iPadOS 16.6 to Developers",
            "description": "Apple today seeded the second betas of upcoming iOS 16.6 and iPadOS 16.6 updates to developers for testing purposes, with the software coming a week after the release of the first betas.\n\n\n\n\n\nRegistered developers can opt in to the betas by opening up the Set…",
            "url": "https://www.macrumors.com/2023/05/31/apple-seeds-ios-16-6-beta-2-to-developers/",
            "urlToImage": "https://images.macrumors.com/t/AF-YgkU3cvp9FiAzku9bUJdOOsg=/2500x/article-new/2023/04/iOS-16.6-Feature.jpg",
            "publishedAt": "2023-05-31T17:07:03Z",
            "content": "Apple today seeded the second betas of upcoming iOS 16.6 and iPadOS 16.6 updates to developers for testing purposes, with the software coming a week after the release of the first betas.\r\nRegistered … [+1201 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Kourtnee Jackson",
            "title": "Apple Rumored to Reveal 'Several' New Macs at WWDC - CNET",
            "description": "The iPhone maker could be growing its family of flagship computers.",
            "url": "https://www.cnet.com/tech/computing/apple-rumored-to-reveal-several-new-macs-at-wwdc/",
            "urlToImage": "https://www.cnet.com/a/img/resize/c106a7395afbd9441a404308c69ef871582380ac/hub/2023/04/11/796fbb01-0c89-430f-b027-abaebbc1718b/05-bg-1.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2023-05-31T14:41:41Z",
            "content": "Predictions for Apple's WWDC keynote continue to roll in, with Bloomberg's Mark Gurman anticipating that company will announce \"several new\" Mac models during the event. In a tweet on Wednesday, Gurm… [+1564 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Scott Stein",
            "title": "Qualcomm's Phone-Connected AR Headset Plans Hint at Google and Apple's Future - CNET",
            "description": "Future headsets will need to work better with phone apps: Qualcomm's moves point to where Google and Apple need to go.",
            "url": "https://www.cnet.com/tech/computing/qualcomm-phone-connected-ar-headsets-hint-at-google-apple-future/",
            "urlToImage": "https://www.cnet.com/a/img/resize/db78fa838bc024b72a319139f2828dc703706e13/hub/2023/05/31/6a9fc3fa-153b-4090-94f3-4cafc13b63b3/snapdragon-spaces-dual-render-fusion-low-res.png?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2023-05-31T16:30:06Z",
            "content": "Apple's expected unveiling of its mixed reality headset is in just a matter of days, but Qualcomm has announced more of its own AR/VR moves ahead of Apple's WWDC event. At AWE, an AR-focused develope… [+1828 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Eli Blumenthal",
            "title": "How Apple's Mixed Reality Headset Could Immerse You in Sports - CNET",
            "description": "Commentary: Multiscreen view and \"umpire view\" would be pretty sweet in virtual reality.",
            "url": "https://www.cnet.com/tech/services-and-software/how-apples-mixed-reality-headset-could-immerse-you-in-sports/",
            "urlToImage": "https://www.cnet.com/a/img/resize/511d0f5c59616059a68682ff19e39fbbb914697c/hub/2022/12/07/38f03160-42cb-4e2a-bd5f-044d686c60e7/apple-ar-vr-headset-virtual-reality-1481.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2023-05-31T16:08:00Z",
            "content": "Earlier this month, Apple TV 4K owners who watch sports on Apple's TV service may have noticed a small new feature called multiview as part of TVOS 16.5. As its name suggests, this feature allows use… [+4364 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "Apple Teases Dawn of a 'New Era' and Coding 'New Worlds' at WWDC",
            "description": "Apple is overtly teasing the start of \"a new era\" and the ability to \"code new worlds\" at WWDC this year, building anticipation around the widely expected announcement of its mixed-reality headset. \n\n\n\n\n\nA tweet shared by Apple earlier today made the \"new era…",
            "url": "https://www.macrumors.com/2023/05/31/apple-teases-new-era-at-wwdc/",
            "urlToImage": "https://images.macrumors.com/t/JgSYXYRUim-ZPlivh1ksfaYcprE=/1600x/article-new/2023/05/wwdc-2023-code-new-worlds.jpg",
            "publishedAt": "2023-05-31T12:09:31Z",
            "content": "Apple is overtly teasing the start of \"a new era\" and the ability to \"code new worlds\" at WWDC this year, building anticipation around the widely expected announcement of its mixed-reality headset. \r… [+1122 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "Apple Says Thunderbolt Display and Original iPad Air Now Obsolete",
            "description": "Apple today added the Thunderbolt Display and the first-generation iPad Air to its obsolete products list, meaning the devices are no longer eligible for repairs or other hardware service at Apple Stores or Apple Authorized Service Providers.\n\n\n\n\n\nApple class…",
            "url": "https://www.macrumors.com/2023/05/31/thunderbolt-display-now-obsolete/",
            "urlToImage": "https://images.macrumors.com/t/v5OfHcJXqBy2vfouUpUHd_R2OLM=/1600x/article-new/2023/05/Thunderbolt-Display-Feature.jpeg",
            "publishedAt": "2023-05-31T13:20:13Z",
            "content": "Apple today added the Thunderbolt Display and the first-generation iPad Air to its obsolete products list, meaning the devices are no longer eligible for repairs or other hardware service at Apple St… [+1263 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Seeds Second Beta of watchOS 9.6 to Developers",
            "description": "Apple today seeded the second beta of an upcoming watchOS 9.6 update to developers for testing purposes, with the software update coming two weeks after the release of the first beta.\n\n\n\n\n\nTo install the watchOS 9.6 update, developers will need to download th…",
            "url": "https://www.macrumors.com/2023/05/31/apple-releases-watchos-9-6-beta-2-to-developers/",
            "urlToImage": "https://images.macrumors.com/t/eXhNHYXbNppBslGlpQBfxwVlS6g=/2250x/article-new/2022/06/Apple-watchOS-9-Feature.jpg",
            "publishedAt": "2023-05-31T17:06:00Z",
            "content": "Apple today seeded the second beta of an upcoming watchOS 9.6 update to developers for testing purposes, with the software update coming two weeks after the release of the first beta.\r\nTo install the… [+729 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Seeds Second Beta of tvOS 16.6 to Developers",
            "description": "Apple today seeded the second beta of an upcoming tvOS 16.6 update to developers for testing purposes, with the beta coming two weeks after the release of the first beta.\n\n\n\n\n\nRegistered developers are able to download the tvOS 16.6 update by downloading a pr…",
            "url": "https://www.macrumors.com/2023/05/31/apple-releases-tvos-16-6-beta-2-to-developers/",
            "urlToImage": "https://images.macrumors.com/t/6gz7t5tbqOJ-rFRIaNhdHKUzrUI=/2500x/article-new/2022/10/Apple-TV-2022-Feature-Orange.jpg",
            "publishedAt": "2023-05-31T17:05:00Z",
            "content": "Apple today seeded the second beta of an upcoming tvOS 16.6 update to developers for testing purposes, with the beta coming two weeks after the release of the first beta.\r\nRegistered developers are a… [+655 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Seeds Second Beta of macOS Ventura 13.5 to Developers",
            "description": "Apple today seeded the second beta of macOS Ventura 13.5 to developers for testing purposes, with the beta introduced two weeks after the release of the first beta.\n\n\n\n\n\nRegistered developers can download the beta through the Apple Developer Center and after …",
            "url": "https://www.macrumors.com/2023/05/31/apple-seeds-macos-ventura-13-5-beta-2/",
            "urlToImage": "https://images.macrumors.com/t/eBS_h-Lk56iVeWn15XorBq81kx0=/2500x/article-new/2022/06/Ventura-Macs-Feature-Yellow.jpg",
            "publishedAt": "2023-05-31T17:13:50Z",
            "content": "Apple today seeded the second beta of macOS Ventura 13.5 to developers for testing purposes, with the beta introduced two weeks after the release of the first beta.\r\nRegistered developers can downloa… [+710 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple-Funded Study Suggests App Store Ecosystem Facilitated $1.1 Trillion in Sales in 2022",
            "description": "The App Store was responsible for an estimated $1.1 trillion in developer billings and sales in 2022, according to an Apple-sponsored study conducted by economists from Analysis Group. Apple shared the results of the study today as part of an ongoing effort t…",
            "url": "https://www.macrumors.com/2023/05/31/app-store-ecosystem-sales-2022/",
            "urlToImage": "https://images.macrumors.com/t/fvnq7lgIjn-BQ5WsIW1FtaA-BEg=/2250x/article-new/2022/01/iOS-App-Store-General-Feature-Black.jpg",
            "publishedAt": "2023-05-31T17:00:00Z",
            "content": "The App Store was responsible for an estimated $1.1 trillion in developer billings and sales in 2022, according to an Apple-sponsored study conducted by economists from Analysis Group. Apple shared t… [+4218 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Student Loan Payment Pause 'Gone' Under Debt Ceiling Deal",
            "description": "Longtime Slashdot reader theodp writes: House Speaker Kevin McCarthy (R-CA) said on Sunday that the student loan payment pause is \"gone\" in the debt ceiling deal announced by the California Republican and President Biden late Saturday night. \"The pause is gon…",
            "url": "https://news.slashdot.org/story/23/05/30/2132241/student-loan-payment-pause-gone-under-debt-ceiling-deal",
            "urlToImage": "https://a.fsdn.com/sd/topics/education_64.png",
            "publishedAt": "2023-05-31T00:45:00Z",
            "content": "House Speaker Kevin McCarthy (R-CA) said on Sunday that the student loan payment pause is \"gone\" in the debt ceiling deal announced by the California Republican and President Biden late Saturday nigh… [+2754 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Huileng Tan",
            "title": "5 trillion-dollar companies — including Nvidia, Apple, and Amazon — have been behind most of the S&P 500's 10% gains this year",
            "description": "The five companies — Alphabet, Amazon, Apple, Microsoft, and Nvidia — have gained nearly $3 trillion in market value this year.",
            "url": "https://www.businessinsider.com/nvidia-amazon-alphabet-apple-microsoft-trillion-dollar-companies-sp500-gains-2023-5",
            "urlToImage": "https://i.insider.com/6476b9ce085acb0018fef3b2?width=1200&format=jpeg",
            "publishedAt": "2023-05-31T06:55:09Z",
            "content": "New York Stock Exchange traders.Spencer Platt/Getty Images\r\n<ul>\n<li>The S&P 500 index is on a tear, rising nearly 10% this year.</li>\n<li>But most of the gains are from a quintet of stocks that have… [+5950 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "George Glover",
            "title": "Nvidia has AI to thank for entering the $1 trillion club",
            "description": "Nvidia joined the likes of Apple, Microsoft, and Amazon to become one of a handful of US companies with a trillion-dollar valuation.",
            "url": "https://markets.businessinsider.com/news/stocks/nvidia-trillion-dollar-valuation-ai-jensen-huang-apple-amazon-microsoft-2023-5",
            "urlToImage": "https://i.insider.com/647712c9085acb0018fef61d?width=1200&format=jpeg",
            "publishedAt": "2023-05-31T13:14:53Z",
            "content": "Nvidia founder and CEO Jensen Huang.Ethan Miller/Getty Images\r\n<ul>\n<li>Nvidia's market capitalization hit $1 trillion Tuesday as its stock surged.</li>\n<li>It's one of a handful of US companies, inc… [+2427 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Carla Mozée",
            "title": "The 5 largest mega-cap stocks are responsible for most of the rally in the S&P 500 this year - but the market can still gain if Big Tech fades",
            "description": "Narrow market breadth generally \"does not represent a bad omen for S&P 500 performance,\" said BMO Capital Markets.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-outlook-megacaps-apple-nvidia-microsoft-google-amazon-sp500-2023-5",
            "urlToImage": "https://i.insider.com/62b253204245600018ddd916?width=1200&format=jpeg",
            "publishedAt": "2023-05-31T15:47:22Z",
            "content": "Nvidia CEO Jensen Huang,Walid Berrazeg/SOPA Images/LightRocket via Getty Images\r\n<ul>\n<li>Apple, Nvidia, Alphabet, Microsoft and Amazon have fronted the S&P 500's advance so far in 2023. </li>\n<li>Bu… [+2815 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Lindsay Dodgson",
            "title": "A couple owing $120,000 spanning 6 credit cards and 2 car loans asked Caleb Hammer for help: 'You guys are killing yourselves'",
            "description": "Jessilyn, 21, and Brandon, 32, appeared on podcast \"Financial Audit\" to help with the massive debts they had racked up.",
            "url": "https://www.businessinsider.com/couple-owe-120k-on-6-credit-cards-2-cars-ask-caleb-hammer-for-help-2023-5",
            "urlToImage": "https://i.insider.com/64770d13df2567001837cd7a?width=1200&format=jpeg",
            "publishedAt": "2023-05-31T11:53:29Z",
            "content": "A couple appeared on the budgeting podcast \"Financial Audit\" to ask for help with their debts, because they were drowning in monthly repayments from the $120,000 they owed.\r\nJessilyn, 21, and Brandon… [+6500 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Harvard Business Review"
            },
            "author": null,
            "title": "What Is Blue Ocean Strategy — and Where Does It Go Wrong?",
            "description": "Hint: remember to include your non-customers in your market research.",
            "url": "https://hbr.org/podcast/2023/05/what-is-blue-ocean-strategy-and-where-does-it-go-wrong",
            "urlToImage": "https://hbr.org/resources/images/article_assets/2023/05/wide-hbr-on-strategy.png",
            "publishedAt": "2023-05-31T14:36:22Z",
            "content": "HANNAH BATES: Welcome to HBR On Strategy, case studies and conversations with the world’s top business and management experts, hand-selected to help you unlock new ways of doing business. What do Ral… [+22558 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Harvard Business Review"
            },
            "author": null,
            "title": "F1 Legend Toto Wolff on Leading Through Big Wins — and Crushing Losses",
            "description": "Wolff had to adjust his leadership style to get his team back on track.",
            "url": "https://hbr.org/podcast/2023/05/f1-legend-toto-wolff-on-leading-through-big-wins-and-crushing-losses",
            "urlToImage": "https://hbr.org/resources/images/article_assets/2023/05/wide-hbr-on-leadership.png",
            "publishedAt": "2023-05-31T14:43:28Z",
            "content": "HANNAH BATES: Welcome to HBR on Leadership, case studies and conversations with the world’s top business and management experts, hand-selected to help you unlock the best in those around you. Managin… [+12333 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Nolan Rada Galindo",
            "title": "¿Cuándo se estrena la cuarta temporada de ‘Ted Lasso’?",
            "description": "Desde este 31 de mayo de 2023 se puede disfrutar del último episodio de la tercera temporada de Ted Lasso. Se trata, a su manera, de uno de los fenómenos televisivos de los últimos años. La serie de Apple TV+ conmovió a propios y extraños, quienes llegaron a …",
            "url": "http://hipertextual.com/2023/05/ted-lasso-cuarta-temporada",
            "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/03/Ted-Lasso_Hipertextual-third-season.jpg?fit=1920%2C1080&quality=50&strip=all&ssl=1",
            "publishedAt": "2023-05-31T18:30:00Z",
            "content": "Desde este 31 de mayo de 2023 se puede disfrutar del último episodio de la tercera temporada de Ted Lasso. Se trata, a su manera, de uno de los fenómenos televisivos de los últimos años. La serie de … [+3062 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "Las Apple Glass tendrán una pantalla jamás vista en un dispositivo de Apple",
            "description": "Quedan días para que inicie la WWDC de 2023, la conferencia de desarrolladores de Apple que este año destacará, según los rumores, por el anuncio de las gafas de realidad virtual y aumentada de la compañía, también conocidas como Apple Glass. Estas llevan fil…",
            "url": "http://hipertextual.com/2023/05/las-apple-glass-tendran-una-pantalla-jamas-vista-en-un-dispositivo-de-apple",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/10/apple-headset-ar-vr-2.webp",
            "publishedAt": "2023-05-31T09:52:25Z",
            "content": "Quedan días para que inicie la WWDC de 2023, la conferencia de desarrolladores de Apple que este año destacará, según los rumores, por el anuncio de las gafas de realidad virtual y aumentada de la co… [+2577 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Miguel Castillo",
            "title": "Se filtran los actores de ‘Los 4 Fantásticos’ en el Universo Cinematográfico de Marvel",
            "description": "Uno de los más conocidos filtradores de novedades relacionadas con el Universo Cimematográfico de Marvel y otras franquicias de superhéroes, ha revelado cuáles serán los cuatro actores que interpreten a Los 4 Fantásticos. Se trata de MyTimeToShineH, quien ha …",
            "url": "http://hipertextual.com/2023/05/los-4-fantasticos-fltracion-actores",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/05/fantastic-four-scaled.jpg",
            "publishedAt": "2023-05-31T17:23:01Z",
            "content": "Uno de los más conocidos filtradores de novedades relacionadas con el Universo Cimematográfico de Marvel y otras franquicias de superhéroes, ha revelado cuáles serán los cuatro actores que interprete… [+3870 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Judy Berman",
            "title": "The 5 Best New TV Shows Our Critic Watched in May 2023",
            "description": "From 'Queen Charlotte' to 'Bupkis.'",
            "url": "https://time.com/6282488/best-tv-shows-may-2023/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2023/05/Queen-Charlotte-Charlotte-and-George.jpg?quality=85&w=1200&h=628&crop=1",
            "publishedAt": "2023-05-31T13:00:00Z",
            "content": "Succession is over and—with apologies to anyone who was actually craving more real-estate reality shows or curious to hear Zooey Deschanel answer the question What Am I Eating?—HBO Max’s transformati… [+6260 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Enrique Pérez",
            "title": "Apple empieza a aplicar el impuesto a los servicios digitales. Un 3% que llega años tarde",
            "description": "Apple ha tardado años, pero hoy ha anunciado que empezará a aplicar el impuesto a los servicios digitales. Fue en enero de 2021 cuando entró en vigor esta conocida tasa, pero no ha sido hasta ahora, unos meses antes de la fecha máxima establecida por ley, cua…",
            "url": "https://www.xataka.com/empresas-y-economia/apple-empieza-a-aplicar-impuesto-a-servicios-digitales-3-que-llega-anos-tarde",
            "urlToImage": "https://i.blogs.es/96305b/app-store/840_560.jpeg",
            "publishedAt": "2023-05-31T12:35:43Z",
            "content": "Apple ha tardado años, pero hoy ha anunciado que empezará a aplicar el impuesto a los servicios digitales. Fue en enero de 2021 cuando entró en vigor esta conocida tasa, pero no ha sido hasta ahora, … [+1992 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Enrique Pérez",
            "title": "El mejor simulador de wargames lo han creado unos españoles: \"Warhall es un gancho, un complemento al muñeco\"",
            "description": "Jugar a Warhammer requiere tiempo y espacio. Reunir las miniaturas, colocarlas sobre la mesa y quedar con el rival. Tener tu ejército pintado y tirar dados es muy divertido, pero no siempre es fácil encontrar el momento. La solución pasa por trasladar esa exp…",
            "url": "https://www.xataka.com/literatura-comics-y-juegos/mejor-simulador-wargames-han-creado-unos-espanoles-warhall-gancho-complemento-al-muneco",
            "urlToImage": "https://i.blogs.es/6d45a9/warhall-simulador/840_560.jpeg",
            "publishedAt": "2023-05-31T12:00:37Z",
            "content": "Jugar a Warhammer requiere tiempo y espacio. Reunir las miniaturas, colocarlas sobre la mesa y quedar con el rival. Tener tu ejército pintado y tirar dados es muy divertido, pero no siempre es fácil … [+12243 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "Hemos probado el nuevo buscador de Google con IA. La duda es si realmente supone una revolución",
            "description": "Google necesitaba ponerse las pilas. La firma le vio las orejas al lobo tras la aparición de ChatGPT, y activó su particular código rojo en diciembre de 2022. La reacción, no obstante, ha sido mucho más templada de lo que cabría esperar.\n<!-- BREAK 1 -->\nLa f…",
            "url": "https://www.xataka.com/robotica-e-ia/hemos-probado-nuevo-buscador-google-ia-duda-realmente-supone-revolucion",
            "urlToImage": "https://i.blogs.es/d7bebe/imac/840_560.jpeg",
            "publishedAt": "2023-05-31T17:30:38Z",
            "content": "Google necesitaba ponerse las pilas. La firma le vio las orejas al lobo tras la aparición de ChatGPT, y activó su particular código rojo en diciembre de 2022. La reacción, no obstante, ha sido mucho … [+13216 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Birchtree.me"
            },
            "author": "John Gruber",
            "title": "Matt Birchler on Apple and Gaming",
            "description": "Did you know that the top 2 games on Steam are available for the Mac? That's right, Counter Strike: Global Offensive and DOTA 2, which at any moment in time have about 2 million concurrent players on Steam alone, are sitting right there for Mac users to downl…",
            "url": "https://birchtree.me/blog/macs-already-run-the-most-popular-pc-games-no-one-cares/",
            "urlToImage": "https://birchtree.me/content/images/2022/10/Frame-3.jpg",
            "publishedAt": "2023-05-31T18:00:52Z",
            "content": "Did you know that the top 2 games on Steam are available for the Mac? That's right, Counter Strike: Global Offensive and DOTA 2, which at any moment in time have about 2 million concurrent players on… [+2191 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Alex Blake",
            "title": "All the reasons I’m excited (and worried) for Apple’s Reality Pro headset",
            "description": "Apple’s Reality Pro headset is nearly here, and I’m excited to see what Apple has in store. But I’m also concerned that it could be a huge flop. Here’s why.",
            "url": "https://www.digitaltrends.com/computing/why-im-excited-and-worried-for-apple-reality-pro/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/05/Virtual-reality-Pexels-Sound-On.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2023-05-31T11:00:16Z",
            "content": "Apple is set to launch its Reality Pro headset — its most anticipated new product in years — at the company’s Worldwide Developers Conference (WWDC) on June 5. I’m excited to see what the Cupertino f… [+7685 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Alex Blake",
            "title": "This critical exploit could let hackers bypass your Mac’s defenses",
            "description": "Security researchers at Microsoft have found an exploit that could let hackers bypass one of your Mac’s most important defenses -- it’s time to update now.",
            "url": "https://www.digitaltrends.com/computing/macos-migraine-exploit-update-now/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/05/Hacker-MacBook-laptop-phone-Sora-Shimazaki-Pexels.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2023-05-31T10:46:48Z",
            "content": "Microsoft has discovered a critical exploit in macOS that could grant hackers easy access to your Mac’s most important data. Dubbed ‘Migraine,’ it shows why it’s vital to update your Mac as soon as p… [+2523 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gamingdeputy.com"
            },
            "author": "Kryzt Bates",
            "title": "Paragon Graphite is a Pegasus spyware clone used in the US",
            "description": "The US government banned Pegasus NSO spyware 18 months ago, but today",
            "url": "https://www.gamingdeputy.com/paragon-graphite-is-a-pegasus-spyware-clone-used-in-the-us/",
            "urlToImage": "https://applepro.news/wp-content/uploads/2023/05/paragon-graphite-—-klon-shpionskogo-po-pegasus-ispolzuemyj-v-ssha.jpg",
            "publishedAt": "2023-05-31T06:43:48Z",
            "content": "The US government banned Pegasus NSO spyware 18 months ago, but today a new report says at least one government agency is using very similar malware from a rival company: Paragon Graphite.\r\nGraphite … [+4208 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Locus Online"
            },
            "author": null,
            "title": "Cory Doctorow: The Swivel-Eyed Loons Have a Point",
            "description": "One of the more baffling events of the first quarter of 2023 was the mass protest in Oxford (England, not Mississippi) against the “15-minute city pledge,” a movement to get city councils to strive…",
            "url": "https://locusmag.com/2023/05/commentary-cory-doctorow-the-swivel-eyed-loons-have-a-point/",
            "urlToImage": "https://locusmag.com/wp-content/uploads/2017/11/Doctorow3_800x400.jpg",
            "publishedAt": "2023-05-31T13:53:56Z",
            "content": "Photo by Paula Mariel Salischiker\r\nOne of the more baffling events of the first quarter of 2023 was the mass protest in Oxford (England, not Mississippi) against the 15-minute city pledge, a movement… [+16841 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Sebastian Trepesch, Leo Becker",
            "title": "Pro & Contra: Verliert Apple den Anschluss?",
            "description": "Google und Microsoft preschen mit KI-Tools vor, das klappbare Pixel Fold stiehlt dem iPhone die Show. Steht Apple nur auf der Bremse?",
            "url": "https://www.heise.de/meinung/Pro-Contra-Verliert-Apple-den-Anschluss-9074947.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/9/8/7/0/8/Pro_Contra_tre-lbe_2000x1125-5ca3c95b415eb460.jpg",
            "publishedAt": "2023-05-31T11:07:00Z",
            "content": "Apples Konkurrenz wittert in Künstlicher Intelligenz den nächsten großen \"Platform Shift\" und integriert die Technik in Hochgeschwindigkeit in Betriebssystem und Dienste. Google prescht zudem mit int… [+4326 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Ben Schwan",
            "title": "Vor der WWDC: Apple kauft bald neue Macs an",
            "description": "Drei Mac-Modelle, die man Apple bislang zum Eintausch nicht antragen konnte, werden bald zum Trade-In angenommen. Sind neue Modelle der Grund?",
            "url": "https://www.heise.de/news/Vor-der-WWDC-Apple-kauft-bald-neue-Macs-an-9068819.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/9/5/5/8/5/macstudio_ports-ec9b19d06f336352.png",
            "publishedAt": "2023-05-31T10:34:00Z",
            "content": "Seit Jahren ist es möglich, günstiger an Hardware von Apple zu gelangen, wenn man ein altes Smartphone, ein Tablet oder einen Mac mitbringt und dieses Gerät dem Konzern dann zum Eintausch anbietet. Z… [+2534 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Leo Becker",
            "title": "App Store: Umsätze in Billionenhöhe laufen über iPhone-Apps",
            "description": "Immer mehr Waren und Dienstleistungen werden laut einer Studie per App gekauft. Provision an Apple müsse nur ein kleiner Prozentsatz der Anbieter zahlen.",
            "url": "https://www.heise.de/news/App-Store-Umsaetze-in-Billionenhoehe-laufen-ueber-iPhone-Apps-9101541.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/1/2/0/2/3/AppStore-91e13f6cd59855fd.jpg",
            "publishedAt": "2023-05-31T17:00:00Z",
            "content": "Kurz vor der Entwicklerkonferenz WWDC verweist Apple auf den wirtschaftlichen Stellenwert des App-Store-Ökosystems: Mit iOS-Apps wurden im vergangenen Jahr über 1,1 Billionen US-Dollar an Umsätzen ge… [+2180 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Ben Schwan",
            "title": "Chrome und Firefox: 1Password löscht Erweiterungen für alte App im Web Store",
            "description": "Wer noch 1Password 7 einsetzt, um den Cloud-Zwang des Passwortmanagers zu umgehen, kann die notwendigen Browser-Erweiterungen nicht mehr nachinstallieren.",
            "url": "https://www.heise.de/news/Chrome-und-Firefox-1Password-loescht-Erweiterungen-fuer-alte-App-9069654.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/9/6/0/4/1/Screen_Shot_2023-05-30_at_23.17.51-292561fb9819ca45.png",
            "publishedAt": "2023-05-31T07:54:00Z",
            "content": "1Password zieht die Daumenschrauben für Nutzer der alten Version des populären Passwortmanagers weiter an, die dem Cloud-Zwang der Entwickler nicht folgen wollen: Seit Kurzem ist es nicht mehr möglic… [+2726 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Eva-Maria Weiß",
            "title": "Microsoft Teams: Avatare sind nach zwei Jahren da – und nur so geht so",
            "description": "Bei Teams kann man sich einen Avatar bauen und in Meetings schicken. Allerdings ist der Look schwierig und die Steuerung schwieriger. Doch er macht auch Spaß.",
            "url": "https://www.heise.de/news/Microsoft-Teams-Avatare-sind-nach-zwei-Jahren-da-und-nur-so-geht-so-9069866.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/9/6/1/5/4/Bildschirmfoto_2023-05-31_um_09.21.59-1aa07b1d48161f66.png",
            "publishedAt": "2023-05-31T08:57:00Z",
            "content": "Freunde der Homerschen Brille mit Augen können endlich, endlich eine viel glaubwürdigere Version für sich ins Meeting schicken: Microsoft hatte die Avatare bereits vor zwei Jahren angekündigt. Nun si… [+3488 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Benjamin Mayo",
            "title": "Apple TV+ shows and movies: Everything to watch on Apple TV Plus",
            "description": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $6.99 per month. Here’s every Apple original television show and movie avai…",
            "url": "https://9to5mac.com/2023/05/31/apple-tv-plus-tv-shows-movies-guide/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/12/apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T08:33:17Z",
            "content": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $6.99 per month… [+65294 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "Apple holding live-streamed shopping event in China to promote iPhone 14 discounts",
            "description": "For the first time ever, Apple is set to partake in a live-streamed shopping event through Alibaba’s Tmall marketplace in China this week. As reported by the South China Morning Post, this event draws more than 500 million users, and Apple has teased that its…",
            "url": "https://9to5mac.com/2023/05/31/apple-shopping-event-china-live-stream/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/iPhone-14-Pro-camera.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T14:22:31Z",
            "content": "For the first time ever, Apple is set to partake in a live-streamed shopping event through Alibaba’s Tmall marketplace in China this week. As reported by the South China Morning Post, this event draw… [+1848 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Apple announces upcoming tax changes for App Store developers",
            "description": "Apple on Tuesday announced some tax changes coming to apps, in-app purchases, and subscriptions available in the App Store. These changes may affect proceeds from the sale of apps and in-app content in places like Ghana and Spain. Read on as we detail what wi…",
            "url": "https://9to5mac.com/2023/05/30/apple-tax-changes-app-store-developers/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/08/app-store-connect.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T00:50:34Z",
            "content": "Apple on Tuesday announced some tax changes coming to apps, in-app purchases, and subscriptions available in the App Store. These changes may affect proceeds from the sale of apps and in-app content … [+1642 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "Apple Watch Ultra gets new competition from Garmin Pro smartwatches",
            "description": "The Apple Watch Ultra was launched to appeal to those wanting a more rugged and powerful version of its existing wearable, and a new range of Garmin Pro smartwatches is now following suit.\nWhile a different proposition to the $800 Ultra, the new Fenix Pro and…",
            "url": "https://9to5mac.com/2023/05/31/garmin-pro-smartwatches/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/Garmin-Pro-smartwatches.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T13:19:11Z",
            "content": "The Apple Watch Ultra was launched to appeal to those wanting a more rugged and powerful version of its existing wearable, and a new range of Garmin Pro smartwatches is now following suit.\r\nWhile a d… [+2788 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Zac Hall",
            "title": "Best Apple CarPlay retrofit options for your car",
            "description": "Apple CarPlay is the safest way to interact with your iPhone in the car. You never need to touch your iPhone while driving – something you should never ever do anyway. Instead, you control navigation, communication, and entertainment with voice control and a …",
            "url": "https://9to5mac.com/2023/05/31/best-carplay-display/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/01/Pioneer-AVIC-W8400NEX-Wireless-CarPlay-Aftermarket-Head-Unit-Review.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T18:00:00Z",
            "content": "Apple CarPlay is the safest way to interact with your iPhone in the car. You never need to touch your iPhone while driving something you should never ever do anyway. Instead, you control navigation, … [+3752 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Zac Hall",
            "title": "Apple acknowledges ongoing FaceTime slow down and iMessage outage",
            "description": "Apple says that both FaceTime and iMessage are experiencing slow downs and down time today. The issue started a few hours ago and is ongoing.\n more…\nThe post Apple acknowledges ongoing FaceTime slow down and iMessage outage appeared first on 9to5Mac.",
            "url": "https://9to5mac.com/2023/05/31/facetime-imessage-down/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/iMessage-edit-victim.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T15:10:16Z",
            "content": "Apple says that both FaceTime and iMessage are experiencing slow downs and down time today. The issue started a few hours ago and is ongoing.\r\nApple lists the two issues on its system status page. Th… [+592 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Zac Hall",
            "title": "Apple mixed reality headset may be its most complex hardware product yet due to curved glass and bent circuitboards",
            "description": "Just because something is hard doesn’t mean it will be great. Apple’s mixed reality headset is, by all accounts, especially difficult to produce, yet Apple believes it has something special. That’s the message from the latest report by The Information, which …",
            "url": "https://9to5mac.com/2023/05/31/apple-headset-curved-complexity/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/apple-headset-tim-cook.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T14:23:31Z",
            "content": "Just because something is hard doesn’t mean it will be great. Apple’s mixed reality headset is, by all accounts, especially difficult to produce, yet Apple believes it has something special. That’s t… [+3474 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "Revamped entry-level iPad dramatically boosted US sales",
            "description": "Late last year, Apple finally updated the entry-level iPad to bring it into line with the all-screen design of its more expensive models – and that decision appears to have paid off.\nMarket intelligence data suggests that Apple achieved dramatic growth in iPa…",
            "url": "https://9to5mac.com/2023/05/31/entry-level-ipad-shipments/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/Revamped-entry-level-iPad.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T11:33:58Z",
            "content": "Late last year, Apple finally updated the entry-level iPad to bring it into line with the all-screen design of its more expensive models and that decision appears to have paid off.\r\nMarket intelligen… [+3112 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Zac Hall",
            "title": "Beat Saber is the latest VR game that could be coming to the Apple headset next week",
            "description": "We’re in the final days of Apple headset hype (at least we hope), and that means there’s still time to make predictions. Yesterday it was a potential tease for No Man’s Sky on what could be called Reality Pro. Now it’s time for Beat Saber speculation.\n more…\n…",
            "url": "https://9to5mac.com/2023/05/31/beat-saber-apple-headset/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/beat-saber.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T16:30:50Z",
            "content": "We’re in the final days of Apple headset hype (at least we hope), and that means there’s still time to make predictions. Yesterday it was a potential tease for No Man’s Sky on what could be called Re… [+1743 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Apple rolling out iOS 16.6 beta 2 to developers ahead of first iOS 17 beta next week",
            "description": "Apple last week introduced the first beta of iOS 16.6 to developers. Now the company is rolling out iOS 16.6 beta 2, along with updates to macOS 13.5 beta, watchOS 9.6 beta, and tvOS 16.6 beta. Read on as we detail what to expect for these updates.\n more…\nThe…",
            "url": "https://9to5mac.com/2023/05/31/ios-16-6-beta-2/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/ios-16-hero-16.6.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T17:13:34Z",
            "content": "Apple last week introduced the first beta of iOS 16.6 to developers. Now the company is rolling out iOS 16.6 beta 2, along with updates to macOS 13.5 beta, watchOS 9.6 beta, and tvOS 16.6 beta. Read … [+959 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "Apple says App Store ‘ecosystem’ crossed $1 trillion in 2022, here’s what that means",
            "description": "Apple is out with a new report today in which it again touts the economic impact of the App Store. According to a study done by economists at the Analysis Group, the App Store ecosystem generated $1.1 trillion in total billings and sales during 2022, an incre…",
            "url": "https://9to5mac.com/2023/05/31/apple-says-app-store-ecosystem-crossed-1-trillion-in-2022-heres-what-that-means/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/app-store-money-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T17:00:39Z",
            "content": "Apple is out with a new report today in which it again touts the economic impact of the App Store. According to a study done by economists at the Analysis Group, the App Store ecosystem generated $1.… [+4974 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Apple reportedly to announce ‘several new Macs’ at WWDC 2023 keynote on Monday",
            "description": "Apple’s WWDC 2023 kicks off on Monday with a special opening keynote. In addition to new software like iOS 17 and watchOS 10, the company is expected to unveil its much-rumored mixed reality headset. But beyond that, we might see new Macs at the event. Accord…",
            "url": "https://9to5mac.com/2023/05/30/apple-rumor-new-macs-wwdc-2023/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/Mac-lineup-2023.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T05:46:40Z",
            "content": "Apple’s WWDC 2023 kicks off on Monday with a special opening keynote. In addition to new software like iOS 17 and watchOS 10, the company is expected to unveil its much-rumored mixed reality headset.… [+3241 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "Taiwan invasion in 2025 gaining credibility; no time for Apple and others to prepare",
            "description": "Back in January, a top US Air Force general predicted that a Taiwan invasion would occur in 2025, while the US is distracted by the likely fallout from the 2024 presidential election. That scenario is gaining in credibility among companies in Apple’s supply c…",
            "url": "https://9to5mac.com/2023/05/31/taiwan-invasion-in-2025/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/Prediction-of-Taiwan-invasion-in-2025.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T14:55:42Z",
            "content": "Back in January, a top US Air Force general predicted that a Taiwan invasion would occur in 2025, while the US is distracted by the likely fallout from the 2024 presidential election. That scenario i… [+4528 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Rikka Altland",
            "title": "Wednesday’s best deals: Apple Studio Display $249 off, iPhone 14/Pro official MagSafe cases $36, more",
            "description": "All of today’s best deals are now up for grabs courtesy of 9to5Toys. On this fine Wednesday, you can now save $249 on Apple’s Studio Display at the best price of the year. It’s joined by a pair of price cuts on official Apple iPhone 14/Pro silicone cases from…",
            "url": "https://9to5mac.com/2023/05/31/wednesdays-best-deals-apple-studio-display/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/04/apple-studio-display-mug.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T15:50:38Z",
            "content": "All of today’s best deals are now up for grabs courtesy of 9to5Toys. On this fine Wednesday, you can now save $249 on Apple’s Studio Display at the best price of the year. It’s joined by a pair of pr… [+3985 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "macOS exploit found by Microsoft could bypass System Integrity Protection",
            "description": "Apple introduced System Integrity Protection (SIP) with OS X El Capitan in 2015, and it essentially adds multiple layers of security that blocks apps from accessing and modifying system files at a root level. While users can manually disable this feature, it’…",
            "url": "https://9to5mac.com/2023/05/30/macos-exploit-microsoft/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/macOS-exploit.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T02:37:58Z",
            "content": "Apple introduced System Integrity Protection (SIP) with OS X El Capitan in 2015, and it essentially adds multiple layers of security that blocks apps from accessing and modifying system files at a ro… [+2812 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Zac Hall",
            "title": "You can now track workout progress from the Dynamic Island on iPhone 14 Pro with Withings",
            "description": "Withings has joined the growing club of iPhone apps that support iOS 16’s Live Activities feature. The feature puts a persistent status update on the Lock Screen of all iPhones running iOS 16. iPhone 14 Pro support goes further with the always-on display and …",
            "url": "https://9to5mac.com/2023/05/31/withings-health-mate-live-activity/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iPhone-14-update-iOS-16.0.1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-05-31T13:49:30Z",
            "content": "Withings has joined the growing club of iPhone apps that support iOS 16’s Live Activities feature. The feature puts a persistent status update on the Lock Screen of all iPhones running iOS 16. iPhone… [+1361 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Autoblog"
            },
            "author": "Jeremy Korzeniewski",
            "title": "I bought a Tesla. Here's why",
            "description": "Filed under:\n Green,Tesla,Car Buying,Ownership,Electric,Sedan\n Continue reading I bought a Tesla. Here's why\nI bought a Tesla. Here's why originally appeared on Autoblog on Wed, 31 May 2023 10:00:00 EDT. Please see our terms for use of feeds.\nPermalink | \nEma…",
            "url": "https://www.autoblog.com/2023/05/31/why-i-bought-tesla-model-3/",
            "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/05/31092953/tesla-model-3-white-white.jpg",
            "publishedAt": "2023-05-31T14:00:00Z",
            "content": "I bought a Tesla. A base rear-drive Model 3 to be specific, in white. The only option I selected was the white interior, which matches quite well with the slightly pearlescent exterior hue in my humb… [+8451 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Inside Apple Ginza: Tokyo's boutique Apple Store",
            "description": "The very first Apple Store in Japan moved to a new, eco-friendly location in late 2022. In May, AppleInsider went to see how it turned out.Apple Ginza at nightApple Ginza was originally opened in 2003, and was not only the first Apple Store in Japan, but the …",
            "url": "https://appleinsider.com/articles/23/05/31/inside-apple-ginza-tokyos-boutique-apple-store",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54591-110496-000-lead-Apple-Ginza-xl.jpg",
            "publishedAt": "2023-05-31T11:47:54Z",
            "content": "Apple Ginza at night\r\nThe very first Apple Store in Japan moved to a new, eco-friendly location in late 2022. In May, AppleInsider went to see how it turned out.\r\nApple Ginza was originally opened in… [+4202 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "Apple releases second developer beta for macOS 16.5 Ventura",
            "description": "Apple has updated the beta program for macOS Ventura 13.5, and the second beta is now accessible for developer testing.Mac developer users have a new betaDevelopers who are part of the program can acquire the most recent builds by visiting the Apple Developer…",
            "url": "https://appleinsider.com/articles/23/05/31/apple-releases-second-developer-beta-for-macos-165-ventura",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54658-110517-studio-display-01-xl.jpg",
            "publishedAt": "2023-05-31T17:18:15Z",
            "content": "Mac developer users have a new beta\r\nApple has updated the beta program for macOS Ventura 13.5, and the second beta is now accessible for developer testing. \r\nDevelopers who are part of the program c… [+1158 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "Apple issues first developer betas for watchOS 9.6 & tvOS 16.6",
            "description": "Apple has recently launched the second developer betas for watchOS 9.6 and tvOS 16.6, following the release of the first beta phase.Apple releases new betasDevelopers who are part of the beta program can acquire the latest versions by either accessing them th…",
            "url": "https://appleinsider.com/articles/23/05/31/apple-issues-first-developer-betas-for-watchos-96-tvos-166",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54656-110515-Apple-Watch-8-01-xl.jpg",
            "publishedAt": "2023-05-31T17:26:49Z",
            "content": "Apple releases new betas\r\nApple has recently launched the second developer betas for watchOS 9.6 and tvOS 16.6, following the release of the first beta phase. \r\nDevelopers who are part of the beta pr… [+1464 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Apple TV+ announces streaming release for 'Lessons in Chemistry'",
            "description": "Starring Brie Larson, \"Lessons in Chemistry\" will begin streaming on Apple TV+ with on Friday, October 13, 2023.\"Lessons in Chemistry\" (source: Apple)Originally commissioned in 2021, and based on the novel by Bonnie Garmus, \"Lessons in Chemistry\" is an eight-…",
            "url": "https://appleinsider.com/articles/23/05/31/apple-tv-announces-streaming-release-for-lessons-in-chemistry",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54687-110618-000-lead-Lessons-in-Chemistry-xl.jpg",
            "publishedAt": "2023-05-31T14:39:13Z",
            "content": "\"Lessons in Chemistry\" (source: Apple)\r\nStarring Brie Larson, \"Lessons in Chemistry\" will begin streaming on Apple TV+ with on Friday, October 13, 2023.\r\nOriginally commissioned in 2021, and based on… [+1216 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "Garmin challenges the Apple Watch Ultra with new smartwatches",
            "description": "Garmin has announced a new lineup of watches, and their rugged designs and extensive features could make them a serious rival to the Apple Watch Ultra.The Apple Watch Ultra is Apple's latest premium wearable, engineered for intensive activities in rugged surr…",
            "url": "https://appleinsider.com/articles/23/05/31/garmin-challenges-the-apple-watch-ultra-with-new-smartwatches",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54686-110616-fenix-7-Pro-Series-hero-image-for-newsroom-xl.jpg",
            "publishedAt": "2023-05-31T14:29:11Z",
            "content": "Garmin has announced a new lineup of watches, and their rugged designs and extensive features could make them a serious rival to the Apple Watch Ultra.\r\nThe Apple Watch Ultra is Apple's latest premiu… [+3229 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "Apple seeds second developer beta for iOS 16.6 and iPadOS 16.6",
            "description": "After the completion of the first beta release, Apple has now issued the second developer betas for iOS 16.6 and iPadOS 16.6.Developers can access new betasDevelopers who are part of the beta program can acquire the latest builds either by accessing the Apple…",
            "url": "https://appleinsider.com/articles/23/05/31/apple-seeds-second-developer-beta-for-ios-166-and-ipados-166",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54657-110516-iPhone-14-02-xl.jpg",
            "publishedAt": "2023-05-31T17:11:22Z",
            "content": "Developers can access new betas\r\nAfter the completion of the first beta release, Apple has now issued the second developer betas for iOS 16.6 and iPadOS 16.6. \r\nDevelopers who are part of the beta pr… [+1382 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Apple goes all in on live video shopping & iPhone sales for China's big '618' festival",
            "description": "Apple is aiming to capitalize on China's \"618\" shopping festival with its first live-streamed sales channel on Alibaba's Tmall, offering very short-term iPhone discounts.Apple's iPhone 14 Pro gets a rare discount in ChinaIn the US and most of the world, Apple…",
            "url": "https://appleinsider.com/articles/23/05/31/apple-goes-all-in-on-live-video-shopping-iphone-sales-for-chinas-big-618-festival",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54683-110608-000-lead-iPhone-14-Pro-xl.jpg",
            "publishedAt": "2023-05-31T11:44:48Z",
            "content": "Apple's iPhone 14 Pro gets a rare discount in China\r\nApple is aiming to capitalize on China's \"618\" shopping festival with its first live-streamed sales channel on Alibaba's Tmall, offering very shor… [+1245 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Evan Selleck)",
            "title": "Popular music game 'Beat Saber' may be heading to Apple's VR headset",
            "description": "Word on the street is Apple is going to launch a VR headset at WWDC 2023, and a new hint may point to at least one popular rhythm game being available at launch.Beat SaberThere are a variety of different virtual reality games out there, thanks to the fact VR …",
            "url": "https://appleinsider.com/articles/23/05/31/popular-music-game-beat-saber-may-be-heading-to-apples-vr-headset",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54691-110637-BeatSaber-banner-xl.jpg",
            "publishedAt": "2023-05-31T17:19:18Z",
            "content": "Beat Saber\r\nWord on the street is Apple is going to launch a VR headset at WWDC 2023, and a new hint may point to at least one popular rhythm game being available at launch.\r\nThere are a variety of d… [+1638 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Wesley Hilliard)",
            "title": "Apple details App Store tax changes in Ghana, Lithuania, Moldova, Spain, and Brazil",
            "description": "Developers that sell apps in Apple's App Store will be impacted by a handful of tax changes in select countries starting May 31.The App Store is available across 175 storefrontsThe App Store is available across 175 storefronts around the world, and Apple has …",
            "url": "https://appleinsider.com/articles/23/05/31/apple-details-app-store-tax-changes-in-ghana-lithuania-moldova-spain-and-brazil",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54679-110572-App-Store-icon-xl.jpg",
            "publishedAt": "2023-05-31T01:23:30Z",
            "content": "The App Store is available across 175 storefronts\r\nDevelopers that sell apps in Apple's App Store will be impacted by a handful of tax changes in select countries starting May 31.\r\nThe App Store is a… [+924 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "Apple's unique headset design is causing problems with component suppliers",
            "description": "Despite suppliers hitting significant production roadblocks with curved components, Apple's headset is still rumored for a WWDC reveal with mass production later in 2023.Apple's headset is a challenge for manufacturersApple's upcoming WWDC 2023 conference is …",
            "url": "https://appleinsider.com/articles/23/05/31/apples-unique-headset-design-is-causing-problems-with-component-suppliers",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54688-110621-VR-front-xl.jpg",
            "publishedAt": "2023-05-31T15:33:33Z",
            "content": "Apple's headset is a challenge for manufacturers\r\nDespite suppliers hitting significant production roadblocks with curved components, Apple's headset is still rumored for a WWDC reveal with mass prod… [+4683 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Apple's iPad is propping up a collapsing tablet market",
            "description": "Apple's iPad now commands half of the US tablet market, as it saw more than 20% growth in Q1 2023 year-over-year, while all other vendors declined.Apple's range of iPadsRecently, Canalys claimed that Apple more than doubled its iPad sales in China in Q1 2023 …",
            "url": "https://appleinsider.com/articles/23/05/31/apples-ipad-is-propping-up-a-collapsing-tablet-market",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54684-110609-000-leads-iPad-xl.jpg",
            "publishedAt": "2023-05-31T12:18:01Z",
            "content": "Apple's range of iPads\r\nApple's iPad now commands half of the US tablet market, as it saw more than 20% growth in Q1 2023 year-over-year, while all other vendors declined.\r\nRecently, Canalys claimed … [+1362 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Jess Pingrey)",
            "title": "Daily deals May 31: $800 off MacBook Pro M1 Max, $100 off iPad mini, 12% off Apple Pencil 2, more",
            "description": "Today's hottest deals include 72% off a JBL Wind2 Bluetooth speaker & FM radio, Philips Hue lights from $15.99, $510 off an Acer Gaming Desktop, and $160 off a Lenovo IdeaPad Flex 5 computer.Save $800 on an M1 Max MacBook ProThe AppleInsider team combs the we…",
            "url": "https://appleinsider.com/articles/23/05/31/daily-deals-may-31-800-off-macbook-m1-pro-100-off-ipad-mini-12-off-apple-pencil-2-more",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54678-110611-Daily-deals-May-31-xl.jpg",
            "publishedAt": "2023-05-31T13:25:16Z",
            "content": "Save $800 on an M1 Max MacBook Pro\r\nToday's hottest deals include 72% off a JBL Wind2 Bluetooth speaker &amp; FM radio, Philips Hue lights from $15.99, $510 off an Acer Gaming Desktop, and $160 off a… [+3688 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Several new Macs will launch at WWDC, says Gurman",
            "description": "Backing up recent rumors, Bloomberg's Mark Gurman says that WWDC will include multiple Macs alongside the expected Apple AR headset.The rumored 15-inch MacBook Air could arrive at WWDCFollowing the discovery of three unknown desktop Mac models in Apple's Find…",
            "url": "https://appleinsider.com/articles/23/05/31/several-new-macs-will-launch-at-wwdc-says-gurman",
            "urlToImage": "https://photos5.appleinsider.com/gallery/49243-96187-15MBA-compare-2-xl.jpg",
            "publishedAt": "2023-05-31T11:12:35Z",
            "content": "The rumored 15-inch MacBook Air could arrive at WWDC\r\nBacking up recent rumors, Bloomberg's Mark Gurman says that WWDC will include multiple Macs alongside the expected Apple AR headset.\r\nFollowing t… [+1308 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "App Store developers surpass $1 trillion milestone from sales in 2022",
            "description": "Apple developers have achieved unprecedented financial success through the App Store in its fifteen-year existence, surpassing a remarkable milestone of earning over one trillion in 2022.App Store developers generated $1.1 trillion in 2022The most recent rese…",
            "url": "https://appleinsider.com/articles/23/05/31/app-store-developers-surpass-1-trillion-milestone-from-sales-in-2022",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54675-110551-App-Store-xl.jpg",
            "publishedAt": "2023-05-31T17:00:19Z",
            "content": "App Store developers generated $1.1 trillion in 2022\r\nApple developers have achieved unprecedented financial success through the App Store in its fifteen-year existence, surpassing a remarkable miles… [+3635 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Evan Selleck)",
            "title": "The best Reddit client app is in danger due to price demands",
            "description": "Early in 2023, Reddit announced that it would begin charging for access to its API, and that price may kill off Apollo, the best client app out there.Apollo for RedditChristian Selig, a former Apple employee, built Apollo years ago and it has become one of th…",
            "url": "https://appleinsider.com/articles/23/05/31/the-best-reddit-client-app-is-in-danger-due-to-price-demands",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54694-110640-Apollo-banner-xl.jpg",
            "publishedAt": "2023-05-31T18:04:58Z",
            "content": "Apollo for Reddit\r\nEarly in 2023, Reddit announced that it would begin charging for access to its API, and that price may kill off Apollo, the best client app out there.\r\nChristian Selig, a former Ap… [+2510 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew O'Hara)",
            "title": "Logitech K380 keyboard for Mac review: Fun colors, great feel, and inexpensive",
            "description": "The Logitech K380 has been around since 2015, but only in the last few years has the company bestowed us with a lovely Mac-specific version. We put it to the test.Using the Logitech k380 with iPad miniThe Logitech K380 Bluetooth keyboard for Mac is available …",
            "url": "https://appleinsider.com/articles/23/05/31/logitech-k380-keyboard-for-mac-review-fun-colors-great-feel-cheap-price",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54645-110470-Logitech-K380-and-iPad-mini-xl.jpg",
            "publishedAt": "2023-05-31T11:17:45Z",
            "content": "Using the Logitech k380 with iPad mini\r\nThe Logitech K380 has been around since 2015, but only in the last few years has the company bestowed us with a lovely Mac-specific version. We put it to the t… [+3614 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "Why Android users have been switching to iPhone in greater numbers",
            "description": "Over the last ten years, there has been a growing trend of Android users moving to iPhones, and it's not just because of iMessage.Here's why Android users switch to iPhoneA previous report from Consumer Intelligence Research Partners (CIRP) in May found that …",
            "url": "https://appleinsider.com/articles/23/05/31/why-android-users-have-been-switching-to-iphone-in-greater-numbers",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54685-110613-android-vs-iPhone-xl.jpg",
            "publishedAt": "2023-05-31T13:44:23Z",
            "content": "Here's why Android users switch to iPhone\r\nOver the last ten years, there has been a growing trend of Android users moving to iPhones, and it's not just because of iMessage.\r\nA previous report from C… [+2783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elespanol.com"
            },
            "author": "Manuel Ramírez",
            "title": "Google quiere rivalizar con el Apple Watch Ultra: el cambio radical que está preparando para el Pixel Watch 2",
            "description": "El primer Pixel Watch se quedó lejos de la autonomía esperada, aunque ha sido un smartwatch que ha destacado por su gran diseño.",
            "url": "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230531/google-rivalizar-apple-watch-ultra-preparando-pixel/767923208_0.html",
            "urlToImage": "https://s1.eestatic.com/2023/05/09/elandroidelibre/762433972_233007840_1200x630.jpg",
            "publishedAt": "2023-05-31T07:14:27Z",
            "content": "Con unas ventas que han aupado las intenciones de Google para el lanzamiento del Pixel Watch 2 para otoño, ahora ha llegado una filtración que muestra el cambio en el chip que permitirá avanzar en la… [+3661 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elespanol.com"
            },
            "author": "Adrián Raya",
            "title": "Qué es Snapdragon Cockpit, la tecnología del móvil que llega a los coches, desde el Opel Corsa a los Volvo",
            "description": "Varios fabricantes ya han presentado sus primeros coches con Snapdragon Cockpit, una tecnología basada en la plataforma de Qualcomm.",
            "url": "https://www.elespanol.com/elandroidelibre/20230531/snapdragon-cockpit-tecnologia-coches-opel-corsa-volvo/767923495_0.html",
            "urlToImage": "https://s1.eestatic.com/2023/05/31/elandroidelibre/767933803_233590485_1200x630.jpg",
            "publishedAt": "2023-05-31T16:12:46Z",
            "content": "El nombre Snapdragon es reconocible por cualquier aficionado o entusiasta de la tecnología móvil. No en vano, algunos de los móviles más recomendables del mercado español usan procesadores con esa ma… [+4982 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "武者良太",
            "title": "VRヘッドセット「Quest 3」は低価格でお手軽に仮想空間を楽しめるモデルになりそう",
            "description": "Image:Metaヘッドセットブームが来るか。AppleのAR/VRヘッドセットの話題で市場がわきわきしている真っ最中ですが、MetaのVRヘッドセットQuestシリーズも忘れてはいけません。特に今年の10月に発表されると噂されている「Quest3」は低価格路線（のはず）のヘッドセットで、ボリュームゾーンを支えるモデルとして期待されています。周囲をカラーで見渡せるようにその期待のQuest3のプ",
            "url": "https://www.gizmodo.jp/2023/05/quest-3-colored-path-through.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/05/30/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%882023-05-30105920.png?w=1280&h=630&f=jpg",
            "publishedAt": "2023-05-31T02:30:00Z",
            "content": "AppleAR/VRMetaVRQuest\r\n10Quest 3\r\nQuest 3BloombergMark GurmanQuest 2\r\n3/23DMRMixed Reality\r\nQuest Pro\r\n1Meta QuestQuest 3\r\nMark GurmanQuest 2Quest 2SoCQualcomm Snapdragon XR2 Gen 2\r\nQuest Pro/VR/MR\r\n… [+16 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yanko Design"
            },
            "author": "Gaurav Sood",
            "title": "Nothing headset (1) concept headphones with detachable amplifier bumps up audio listening experience",
            "description": "Nothing headset (1) concept headphones with detachable amplifier bumps up audio listening experienceNothing Phone 2 is just around the corner and Carl Pie is pinning down targets with maximum conviction. So, what’s going to be the next...",
            "url": "https://www.yankodesign.com/2023/05/31/nothing-headset-1-concept-headphones-with-detachable-amplifier-bumps-up-audio-listening-experience/",
            "urlToImage": "https://www.yankodesign.com/images/design_news/2023/05/nothing-headset-1-concept-headphones-with-detachable-amplifier-bumps-up-audio-listening-experience/Nothing-Amplifier-Headphones_0025_Layer-3.jpg",
            "publishedAt": "2023-05-31T10:07:01Z",
            "content": "Nothing Phone 2 is just around the corner and Carl Pie is pinning down targets with maximum conviction. So, whats going to be the next prime target in his crosshair? Over-the-ear headphones sound lik… [+1688 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yanko Design"
            },
            "author": "Sarang Sheth",
            "title": "This Stylish, Sustainable, Reusable Roll-on Deodorant is Challenging the $202 Billion Dollar Men’s Grooming Industry",
            "description": "This Stylish, Sustainable, Reusable Roll-on Deodorant is Challenging the $202 Billion Dollar Men’s Grooming IndustryWith its reusable, stylish metal body that doesn’t use even an ounce of plastic, the Lifelong Deodorant is openly defying a $202.8 billion doll…",
            "url": "https://www.yankodesign.com/2023/05/30/this-stylish-sustainable-reusable-roll-on-deodorant-is-challenging-the-202-billion-dollar-mens-grooming-industry/",
            "urlToImage": "https://www.yankodesign.com/images/design_news/2023/05/reusable_roll-on_deodorant_is_designed_to_last_a_lifetime_hero.jpg",
            "publishedAt": "2023-05-31T01:45:23Z",
            "content": "With its reusable, stylish metal body that doesn’t use even an ounce of plastic, the Lifelong Deodorant is openly defying a $202.8 billion dollar men’s personal care industry that generates tonnes of… [+3788 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Windows Central"
            },
            "author": "zac.bowden@futurenet.com (Zac Bowden)",
            "title": "Lenovo ThinkPad X13s review: Windows 11 on ARM has nothing to worry about",
            "description": "The Lenovo ThinkPad X13s is the company's best attempt yet at a Windows on ARM laptop, this time designed primarily for enterprise customers. In short, it's one of the best Windows on ARM laptops on the market.",
            "url": "https://www.windowscentral.com/hardware/laptops/lenovo-thinkpad-x13s-review",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/TTQXfZn77YHp82vtLZehTj-1200-80.jpg",
            "publishedAt": "2023-05-31T10:00:00Z",
            "content": "The ThinkPad X13s is Lenovo's latest offering running Windows on ARM, powered by Qualcomm's flagship Snapdragon 8cx Gen3 processor. By all means, a top-end enterprise laptop with a great display, exc… [+12289 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Tristan",
            "title": "Comment suivre la WWDC 2023 d’Apple lundi prochain ?",
            "description": "Apple est sur le point de tenir la conférence la plus importante de son année 2023, un évènement immanquable. \nComment suivre la WWDC 2023 d’Apple lundi prochain ?",
            "url": "https://www.journaldugeek.com/2023/05/31/comment-suivre-la-wwdc-2023-dapple-lundi-prochain/",
            "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/08/apple-park.jpg",
            "publishedAt": "2023-05-31T16:30:07Z",
            "content": "Apple est sur le point de tenir la conférence la plus importante de son année 2023, un évènement immanquable.Apple a donné rendez-vous au monde entier. Pour l’ouverture de sa semaine de discussion av… [+2823 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Tristan",
            "title": "Le casque VR d’Apple est déjà en avance sur la concurrence ?",
            "description": "Les spécifications du casque semblent avoir été rendues publiques sur la toile. Elles permettent de se faire une première idée de la technologie embarquée. \nLe casque VR d’Apple est déjà en avance sur la concurrence ?",
            "url": "https://www.journaldugeek.com/2023/05/31/le-casque-vr-dapple-est-deja-en-avance-sur-la-concurrence/",
            "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/11/unsplash-stella-jacob.jpg",
            "publishedAt": "2023-05-31T11:00:19Z",
            "content": "Les spécifications du casque semblent avoir été rendues publiques sur la toile. Elles permettent de se faire une première idée de la technologie embarquée.Apple devrait présenter lundi prochain (5 ju… [+2552 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Thomas Estimbre",
            "title": "Xiaomi 13 Ultra : un smartphone d’exception au prix astronomique ?",
            "description": "Le Xiaomi 13 Ultra devrait prochainement arriver en France, à un prix exorbitant. Le smartphone d'exception de Xiaomi coûterait plus cher qu'un Galaxy S23 Ultra ou iPhone 14 Pro Max à sa sortie.\nXiaomi 13 Ultra : un smartphone d’exception au prix astronomique…",
            "url": "https://www.journaldugeek.com/2023/05/31/xiaomi-13-ultra-un-smartphone-dexception-au-prix-astronomique/",
            "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/04/xiaomi-13-ultra-officiel.jpg",
            "publishedAt": "2023-05-31T13:30:08Z",
            "content": "Le Xiaomi 13 Ultra devrait prochainement arriver en France, à un prix exorbitant. Le smartphone d'exception de Xiaomi coûterait plus cher qu'un Galaxy S23 Ultra ou iPhone 14 Pro Max à sa sortie.Avec … [+3574 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Thomas Estimbre",
            "title": "Avec l’intelligence artificielle, Nvidia change de dimension",
            "description": "Célèbre fabricant de puces, NVIDIA est en train de prendre un nouveau virage. Porté par l'engouement pour ses puces IA, le groupe vient de franchir la barre des mille milliards de dollars de capitalisation boursière. Au Computex 2023, il multiplie les annonce…",
            "url": "https://www.journaldugeek.com/2023/05/31/avec-lintelligence-artificielle-nvidia-change-de-dimension/",
            "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/05/nvidia-computex-2023-jensen-huang.jpg",
            "publishedAt": "2023-05-31T15:30:37Z",
            "content": "Célèbre fabricant de puces, NVIDIA est en train de prendre un nouveau virage. Porté par l'engouement pour ses puces IA, le groupe vient de franchir la barre des mille milliards de dollars de capitali… [+3003 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Anh Phan",
            "title": "Amazon Echo Pop, les 3 raisons de s’en procurer une",
            "description": "La nouvelle enceinte connectée d'Amazon est désormais disponible. Peu cher, colorée, l'Amazon Echo Pop a tout d'une grande pour trouver une place chez vous.\nAmazon Echo Pop, les 3 raisons de s’en procurer une",
            "url": "https://www.journaldugeek.com/test/test-amazon-echo-pop-les-3-raisons-de-sen-procurer-un/",
            "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/05/amazon-echo-pop-live-02.jpg",
            "publishedAt": "2023-05-31T15:00:01Z",
            "content": "La nouvelle enceinte connectée d'Amazon est désormais disponible. Peu cher, colorée, l'Amazon Echo Pop a tout d'une grande pour trouver une place chez vous.Cette année, Amazon sest fait plutôt discre… [+3407 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Alberto García",
            "title": "El localizador Bluetooth Apple AirTag vuelve a estar rebajado con una de las mejores ofertas hasta la fecha",
            "description": "Los viajes, la presión por no dejarte nada en el tren y el clásico de: ¿dónde está mi cartera? Hoy en día podemos curarnos en salud para saber dónde tenemos nuestras cosas, y Apple, que siempre intenta innovar, tiene en su catálogo uno de los mejores localiza…",
            "url": "https://www.applesfera.com/seleccion/localizador-bluetooth-apple-airtag-vuelve-a-estar-rebajado-mejores-ofertas-fecha",
            "urlToImage": "https://i.blogs.es/154424/airtag/840_560.jpeg",
            "publishedAt": "2023-05-31T09:30:38Z",
            "content": "Los viajes, la presión por no dejarte nada en el tren y el clásico de: ¿dónde está mi cartera? Hoy en día podemos curarnos en salud para saber dónde tenemos nuestras cosas, y Apple, que siempre inten… [+2503 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Miguel López",
            "title": "Steve Jobs quiso acabar con el Lisa. Este nuevo documental explica cómo un vendedor los resucitó antes de que acabaran en un vertedero",
            "description": "Todos sabemos la historia de los primeros ordenadores que Steve Jobs potenció de la mano de Apple, el Lisa y los Macintosh. Pero poco se sabe sobre los detalles de esa transición de un tipo de ordenador a otro, y un nuevo documental elaborado por el equipo de…",
            "url": "https://www.applesfera.com/curiosidades/steve-jobs-quiso-acabar-lisa-este-nuevo-documental-explica-como-vendedor-resucito-antes-que-acabaran-vertedero",
            "urlToImage": "https://i.blogs.es/03b2ea/lisa-apple/840_560.jpeg",
            "publishedAt": "2023-05-31T15:14:41Z",
            "content": "Todos sabemos la historia de los primeros ordenadores que Steve Jobs potenció de la mano de Apple, el Lisa y los Macintosh. Pero poco se sabe sobre los detalles de esa transición de un tipo de ordena… [+3587 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Fran Bouzas",
            "title": "\"Una de las keynotes más largas de la historia\": Gurman caldea el ambiente antes de la WWDC más importante de los últimos años",
            "description": "El próximo lunes a las 19:00 hora española comenzará de forma oficial la WWDC 2023. Lo hará con una keynote en la que Apple presentará sus avances en software como lo son  iOS 17\r\n, iPadOS 17\r\n, macOS 14\r\n, watchOS 10\r\n, y un largo etcétera. Además, se espera…",
            "url": "https://www.applesfera.com/rumores/keynotes-largas-historia-gurman-caldea-ambiente-antes-wwdc-importante-ultimos-anos",
            "urlToImage": "https://i.blogs.es/aa6955/1366_2000/840_560.png",
            "publishedAt": "2023-05-31T14:04:06Z",
            "content": "El próximo lunes a las 19:00 hora española comenzará de forma oficial la WWDC 2023. Lo hará con una keynote en la que Apple presentará sus avances en software como lo son  iOS 17\r\n, iPadOS 17\r\n, macO… [+1963 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Miguel López",
            "title": "\"Comienza una nueva era\": Apple despeja las dudas y promete una WWDC 2023 histórica",
            "description": "Normalmente Apple suele ser la que más esconde sus novedades y deja el trabajo de la rumorología a los filtradores para generar sus propias campañas de marketing. Pero se nota que en Cupertino tienen muchas ganas de que llegue el lunes que viene, porque son e…",
            "url": "https://www.applesfera.com/eventos/comienza-nueva-era-apple-despeja-dudas-promete-wwdc-2023-historica",
            "urlToImage": "https://i.blogs.es/415cc5/apple-wwdc-2023-event-keynote/840_560.jpeg",
            "publishedAt": "2023-05-31T12:00:37Z",
            "content": "Normalmente Apple suele ser la que más esconde sus novedades y deja el trabajo de la rumorología a los filtradores para generar sus propias campañas de marketing. Pero se nota que en Cupertino tienen… [+1515 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Fran Bouzas",
            "title": "La WWDC 2023 ya está aquí: Apple lanza su hashtag personalizado y es impresionante",
            "description": "Ya queda menos de una semana para que dé comienzo la WWDC 2023. Esperamos un montón de novedades a nivel de software con iOS 17\r\n, iPadOS 17\r\n, macOS 14\r\n, watchOS 10\r\n, etc. Sin embargo, también se habla de un nuevo MacBook Air de 15 pulgadas, y como no podr…",
            "url": "https://www.applesfera.com/apple-1/wwdc-2023-esta-aqui-apple-lanza-su-hashtag-personalizado-impresionante",
            "urlToImage": "https://i.blogs.es/be3ff9/-wwdc2023-3/840_560.jpeg",
            "publishedAt": "2023-05-31T11:04:05Z",
            "content": "Ya queda menos de una semana para que dé comienzo la WWDC 2023. Esperamos un montón de novedades a nivel de software con iOS 17\r\n, iPadOS 17\r\n, macOS 14\r\n, watchOS 10\r\n, etc. Sin embargo, también se … [+1587 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Miguel López",
            "title": "\"Lo más complicado hecho jamás por Apple\": The Information revela algunos detalles y retos de la producción de las Reality Pro",
            "description": "Los renders en tres dimensiones que hemos ido viendo a lo largo de los últimos meses sobre las Reality Pro nos han hecho una imagen mental de lo que deberíamos ver el lunes que viene: un visor semejante a unas gafas de buceo, con una correa que permite sujeta…",
            "url": "https://www.applesfera.com/rumores/complicado-hecho-jamas-apple-the-information-revela-algunos-detalles-retos-produccion-reality-pro",
            "urlToImage": "https://i.blogs.es/89ee70/1366_2000/840_560.jpeg",
            "publishedAt": "2023-05-31T17:06:38Z",
            "content": "Los renders en tres dimensiones que hemos ido viendo a lo largo de los últimos meses sobre las Reality Pro nos han hecho una imagen mental de lo que deberíamos ver el lunes que viene: un visor semeja… [+2388 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Fran Bouzas",
            "title": "Ver para creer: se filtran las características de la pantalla de las Reality Pro días antes de la WWDC y son impresionantes",
            "description": "La semana que viene dará comienzo la que será una de las keynotes más esperadas de los últimos años: la WWDC 2023. Apple presentará sus nuevos sistemas operativos entre los que se encuentran iOS 17\r\n, iPadOS 17\r\n, macOS 14\r\n, watchOS 10\r\n, etc. También se pre…",
            "url": "https://www.applesfera.com/rumores/ver-para-creer-se-filtran-caracteristicas-pantalla-reality-pro-dias-antes-wwdc-impresionantes",
            "urlToImage": "https://i.blogs.es/200c57/1366_2000/840_560.jpeg",
            "publishedAt": "2023-05-31T16:06:44Z",
            "content": "La semana que viene dará comienzo la que será una de las keynotes más esperadas de los últimos años: la WWDC 2023. Apple presentará sus nuevos sistemas operativos entre los que se encuentran iOS 17\r\n… [+1980 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Jesús Quesada",
            "title": "Amplía 512 GB el almacenamiento de tu MacBook Pro con esta tarjeta de oferta a su precio más bajo",
            "description": "Si el almacenamiento de tu MacBook Pro de 14 o 16 pulgadas se ha quedado corto para guardar documentos u otros archivos importantes, la tarjeta de expansión Transcend JetDrive Lite 330 de 512 GB se instala en segundos en el ordenador y está rebajada en Amazon…",
            "url": "https://www.applesfera.com/seleccion/amplia-512-gb-almacenamiento-tu-macbook-pro-esta-tarjeta-oferta-a-su-precio",
            "urlToImage": "https://i.blogs.es/1d562b/tarjeta-transcend/840_560.jpeg",
            "publishedAt": "2023-05-31T11:31:55Z",
            "content": "Si el almacenamiento de tu MacBook Pro de 14 o 16 pulgadas se ha quedado corto para guardar documentos u otros archivos importantes, la tarjeta de expansión Transcend JetDrive Lite 330 de 512 GB se i… [+2059 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Fran Bouzas",
            "title": "Microsoft descubre cómo instalar malware en un Mac sin que el usuario se dé cuenta: así puedes evitar que ocurra",
            "description": "Los dispositivos de Apple son de los más seguros del mundo, nadie duda de ello. Sin embargo, es inevitable que de cuando en vez haya fallos y vulnerabilidades de seguridad que tengan que ser solventados. Los de Cupertino tienen un equipo cuya única labor cons…",
            "url": "https://www.applesfera.com/os-x/microsoft-descubre-como-instalar-malware-mac-que-usuario-se-cuenta-asi-puedes-evitar-que-ocurra",
            "urlToImage": "https://i.blogs.es/78a274/diseno-sin-titulo/840_560.jpeg",
            "publishedAt": "2023-05-31T10:13:11Z",
            "content": "Los dispositivos de Apple son de los más seguros del mundo, nadie duda de ello. Sin embargo, es inevitable que de cuando en vez haya fallos y vulnerabilidades de seguridad que tengan que ser solventa… [+2161 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading:false
        }
    }
    render() {
        let { title, description, newsUrl, imageUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsDetail" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem