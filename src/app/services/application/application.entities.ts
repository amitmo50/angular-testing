import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/v1';

export interface Application {
    bundleRef?: any;
    storeUrl?: string;
    id?: number | string;
    track_id?: number;
    bundle_id?: string;
    bundle_ref?: number;
    ignore_scid_allocation_limit?: number;
    allow_edit_ignore_scid_allocation_limit?: number;
    name?: string;
    iconUrl?: string;
    platform?: number;
    developer?: string;
    appSize?: number;
    minOs?: string;
    minAge?: string;
    contentRating?: string;
    categories?: Array<string>;
    price?: number;
    description?: string;
    userRating?: string;
    userRatingCount?: number;
    installs?: string;
    videos?: string[];
    video_url?: string;
    screenshots?: string[];
    cast_category?: string;
    developerEmail?: string;
    lastVersionUpdate?: string;
    offeredBy?: string;
    advertiserId?: number;
    archived?: boolean;
    category_genre_id?: number;
    isPrimary?: boolean;
    primaryTitle?: number | string;
    mmpBehaviour?: number;
    trackingServiceId?: number;
}

/* eslint-disable max-len */
export const TITLES_MOCK = {
    applications: [
        {
            id: 973149,
            bundle_ref: 1552355,
            advertiser_id: 157625,
            mmp_behaviour: 2,
            tracking_service_id: 6,
            category_genre_id: 12,
            bundle_id: 'com.gigantic.craftroyale',
            icon: 'ios',
            description:
                'Prepare to embark on a thrilling journey in the ultimate mobile battle royale experience - "Crafty Royale"! Dive into the action-packed world of hyper gaming, where intuitive gameplay meets deep strategy to create an adrenaline-pumping adventure!\n\nKey Features:\n\nEvolve Your Arsenal: Crafty Royale is your battlefield canvas! Collect an array of resources scattered throughout the map to evolve your weapons, enhance your pickaxe for faster resource collection, and fortify your Max HP. Tailor your loadout to your playstyle; it\'s a game of survival, and every choice matters!\n\nMaster Different Weapon Classes: Choose your weapon wisely! Select from a variety of weapon classes, each with its own unique advantages on the battlefield. Unleash the precision of a bow to shoot over obstacles, wield a sledgehammer to deal devastating area damage, brandish a sword for relentless close combat, or opt for firearms for a balanced approach. The nimble kunai grants unparalleled agility for a fast-paced battle. The choice is yours!\n\nMap of Lava and Danger: Brace yourself for the ever-shrinking battlefield covered by encroaching lava, just like in the best battle royale traditions. Only the craftiest can survive until the end and claim victory as the last one standing!\n\nRewards Await: Vanquish your foes and reap the rewards! Collect valuable loot dropped by defeated enemies to discover new equipment, each with unique perks. Forge these treasures into higher rarity gear, and upgrade your arsenal to become an unstoppable force on the battlefield.\n\nLevel Up and Dominate: The more you battle, the stronger you become. Gain XP from each encounter and watch your character\'s stats soar as you rise to the top. Become the craftiest warrior in "Crafty Royale"!\n\nBattle Alongside Pets: Don\'t face the chaos alone! Bring a trusty pet companion with you into the fray, each with its unique ability tailored to suit different playstyles. Your loyal pet can provide that crucial upper hand when you need it most.\n\nAre you ready to craft your legend and emerge as the ultimate champion in the world of "Crafty Royale"? Join the battle now!',
            name: 'Crafty Royale',
            min_os_version: '12.0',
            categories: 'GAMES,ACTION,ROLE_PLAYING',
            app_size: 245.193728,
            url: 'https://apps.apple.com/us/app/crafty-royale/id6449932036?uo=4',
            content_rating: 5,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_95fad6d078eba08c7a6eec4ee0451d6a_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_ace1d79d805c8fb6d681943d511640b8_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_98a80a8027063547fabcd241c80d4278_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_97577d7f8eee92eea7834f6f2295505a_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_dc1f7c04637f9b9602de0031c9e15675_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_47f310ff8a8c4971cf928e97046afffc_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_c9b6687eb9c99f670fa1106fee7403e4_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_175b94ccb3a637568b364903650cca41_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_dc781c2e321a77613bab88c85b893b12_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_19d2baf5c3c98a49c6580069c9bb1bbc_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_b5f8301eadba8a3456234eaa2e8af718_1699177002540.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_be8093af43cf239eb65170e379ddd9a9_1699177002540.jpg'
            ],
            platform: 1,
            price: 0,
            developer: '',
            title: 'Crafty Royale',
            displayText: 'Crafty Royale',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_8f7f78f8c1eebe30aba049d437a25255_53095.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_8f7f78f8c1eebe30aba049d437a25255_53095.jpeg'
        },
        {
            id: 973061,
            bundle_ref: 1302965,
            advertiser_id: 157625,
            mmp_behaviour: 2,
            tracking_service_id: 6,
            category_genre_id: 38,
            bundle_id: 'com.SaltCastleStudio.AlpacaFarm',
            icon: 'ios',
            description:
                'Get ready to build the most exciting alpaca empire! Take care of amazing alpacas. Build and expand your farm. Beat the competition in exciting trade shows.\n\nYou will build an alpaca paradise, with stables, shearing rooms, spa, fitness room, … All your amazing animals generate lots of wool, that you craft into fashionable wares for the market. Hire sales managers to sell your wares on the market and earn money to expand in your farm.\n\nFeatures:\nBUILD - your alpaca shelter. Install new stables, workshops and facilities for animal care.\nGROW - your herd to see new unique alpacas emerge from the hay day by day.\nDESIGN - your booth for the trade shows to maximise sales and earn the best rewards.\nUPGRADE - every part of your alpaca farm to take control of new and bigger markets.\nCARE - for your alpacas in the spa to get the best out of every animal on your farm.\nSELL - your products at trade shows and earn enough to boost your farm to the next level. \nDEVELOP - your product portfolio to make more sales than your competitors.\nDECORATE - your farm and surroundings in different styles.\nCRAFT - new decorations for your booth by recycling old ones.\n\nOnly the best alpacas and products will sell on the market as there is stiff competition! Add more and more attractive alpacas to your herd, offer high quality woollen crafts and use your most charismatic sellers to win on the market.\n\nThere is always something to do! Your employees will take care of the animals, design new garments, develop marketing gadgets to beat the competition, craft new decorations for your market stalls and sell the products on-line.\n\nBecome a farm owner - build and grow your alpaca empire \n\nWhat are you waiting for? Pre-order your new alpaca farm adventure now!\n\nPlease note Alpaca Farm is a free-to-play experience, but some game items are available for purchase using real money. A network connection is also required. See our terms of service for full details: https://www.saltcastlestudio.com/termsofservice/\n\nQuestions about the game? Ask our support team: support@saltcastlestudio.com',
            name: 'Alpaca Farm! Animal Adventure',
            min_os_version: '12.0',
            categories: 'GAMES,SIMULATION,ROLE_PLAYING,ENTERTAINMENT',
            app_size: 287.949824,
            url: 'https://apps.apple.com/us/app/alpaca-farm-animal-adventure/id1586953038?uo=4',
            content_rating: 3,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_ad604417c24b189042cf9f415a6944c2_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_759ee74d8fb59467f0bc6e12eaf57234_1694773205481.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_5a23c0dc101e76b05813e6fc18f69122_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_3f603dc2a77d2719fe89955635a08767_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_4eb1f48cfd9011cce3b16f2b553d65bb_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_a5a927d9339c322da9b178e4d0d3ac95_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_1b3198db2346ac5dc3ad85310120d4e4_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_6edacee74b040b452492837d3fe512a5_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_5ad64b9e247376282d7c2aa8fc4f3e58_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_063674ef6d1ee7dc68953440bfd29137_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_f1bea6f0176b727693da882fadc038a5_1694514011196.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_5b7e1e40bdf95416b4bb2c625f1bd00b_1694514011196.jpg'
            ],
            platform: 1,
            price: 0,
            developer: '',
            title: 'Alpaca Farm! Animal Adventure',
            displayText: 'Alpaca Farm! Animal Adventure',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_c55a9bafe0b2712454b81a56159ce4a7_56374.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_c55a9bafe0b2712454b81a56159ce4a7_56374.jpeg'
        },
        {
            id: 973045,
            bundle_ref: 1301461,
            advertiser_id: 157625,
            mmp_behaviour: 1,
            tracking_service_id: null,
            category_genre_id: 38,
            bundle_id: 'com.SaltCastleStudio.AlpacaFarm',
            icon: 'android',
            description:
                'Get ready to build the most exciting alpaca empire! Take care of amazing alpacas. Build and expand your farm. Beat the competition in exciting trade shows.\n\nYou will build an alpaca paradise, with stables, shearing rooms, spa, fitness room, … All your amazing animals generate lots of wool, that you craft into fashionable wares for the market. Hire sales managers to sell your wares on the market and earn money to expand in your farm.\n\nFeatures:\n\nBUILD - your alpaca shelter. Install new stables, workshops and facilities for animal care.\nGROW - your herd to see new unique alpacas emerge from the hay day by day.\nDESIGN - your booth for the trade shows to maximise sales and earn the best rewards.\nUPGRADE - every part of your alpaca farm to take control of new and bigger markets.\nCARE - for your alpacas in the spa to get the best out of every animal on your farm.\nSELL - your products at trade shows and earn enough to boost your farm to the next level. \nDEVELOP - your product portfolio to make more sales than your competitors.\nDECORATE - your farm and surroundings in different styles.\nCRAFT - new decorations for your booth by recycling old ones.\n\nOnly the best alpacas and products will sell on the market as there is stiff competition! Add more and more attractive alpacas to your herd, offer high quality wollen crafts and use your most charismatic sellers to win on the market.\n\nThere is always something to do! Your employees will take care of the animals, design new garments, develop marketing gadgets to beat the competition, craft new decorations for your market stalls and sell the products on-line.\n\nBecome a farm owner - build and grow your alpaca empire \nWhat are you waiting for? Play your new alpaca farm adventure now!\n\nQuestions about the game? Ask our support team: support@saltcastlestudio.com',
            name: 'Alpaca Farm! Animal Adventure',
            min_os_version: '7.0',
            categories: 'GAME_SIMULATION',
            app_size: 0,
            url: 'https://play.google.com/store/apps/details?id=com.SaltCastleStudio.AlpacaFarm',
            content_rating: 6,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_bf98e9da1da3bc7af58b5fe127ce89e4_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_809f98f2fc1ce108274bc047f081f2e7_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_a119a9a39ff8306e73e857075fc64cee_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_e72da86f65060c140795cd1fe4f8efde_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_0a195c33228b0bbb589eb91be5471698_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_e63055ae6e8a2bf69ac604024fdabb93_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_ef46efee20d7d1c1b8ce131d37c3daf7_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_be139648e1167f97240c39d87f339ce1_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_dcce2c104b7c17d587c08cf97fec571e_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_34d8d3fa23ebac0f57b3fa9d9d1abd8e_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_9d2c66e1b3c771a79583023a92295d1f_1689821775201.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_ff185eae7b497643ec9119fd8c67ef57_1689821775201.jpg'
            ],
            platform: 2,
            price: 0,
            developer: '',
            title: 'Alpaca Farm! Animal Adventure',
            displayText: 'Alpaca Farm! Animal Adventure',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_d48c9f19af6c3e51197c1fb74cfca582_transformed_285997.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_d48c9f19af6c3e51197c1fb74cfca582_transformed_285997.jpeg'
        },
        {
            id: 972495,
            bundle_ref: 1553547,
            advertiser_id: 157625,
            mmp_behaviour: 1,
            tracking_service_id: null,
            category_genre_id: 12,
            bundle_id: 'com.spacetimer.millioncoins',
            icon: 'ios',
            description:
                '- Press the "Drop Coin" button to drop a single coin from the pipe.\n- Place the pegs in positions to make the coin bounce as much as possible.\n- The twist is that with each bounce you get 1 more coin.\n- MERGE two "+1" pegs together to make one "+2" peg...merge two "+2" pegs together to make one "+4" pegs...and so on...\n- Build the best system to make 1 Million $ out of a single coin!',
            name: 'Million Coins',
            min_os_version: '11.0',
            categories: 'GAMES',
            app_size: 88.450048,
            url: 'https://apps.apple.com/us/app/million-coins/id6469339696?uo=4',
            content_rating: 1,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_ad1b303700b8aad99fbf5791eb41d092_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_ec19ab7265ff2a572bf43226cb6a37e5_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_818b8d690b51832e321e5fed545ffc29_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_23504ca4e6893c7519ce9643563af6be_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_58d23ef767184e7ace7f01bf9a414b6e_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_d014f64402b1d32d931ce467f03d107b_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_b447ed59da2201d4e389b330d6936a75_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_1926c1c2166a8439109af0eb5f140ec4_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_eb26af462f2a00d5f1b303f25dd77d58_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_fa2fa6105e72fbe69a5ddc956230df61_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_5c4371493688b99392917980778d9777_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_639893156e55f818ca1e71801bbe1596_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_5fbf59885f4b98418be6f0174bf448de_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_dfa205169924ac6426464d3a3387ef3b_1699515249092.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_3ed8293513fff9dc1d526e843a029cb1_1699515249092.jpg'
            ],
            platform: 1,
            price: 0,
            developer: '',
            title: 'Million Coins',
            displayText: 'Million Coins',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_2eb4ce2e88a66bb2b12c26b6cb495800_57754.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_2eb4ce2e88a66bb2b12c26b6cb495800_57754.jpeg'
        },
        {
            id: 972209,
            bundle_ref: 1550763,
            advertiser_id: 157625,
            mmp_behaviour: 1,
            tracking_service_id: null,
            category_genre_id: 12,
            bundle_id: 'games.nepix.familybakery',
            icon: 'ios',
            description:
                "Welcome to 'Family Bakery,' where you'll step into the heartwarming world of a French family-run bakery. Join our protagonist, a dedicated mother, on her quest to nurture and expand the family's bakery business.\n\nIn this captivating game, you'll embark on a delightful journey through the art of baking, specializing in crafting mouthwatering baguettes, croissants, and delectable pastries. Immerse yourself in the charming ambiance of a quaint French village, where the aroma of freshly baked bread wafts through the air.\n\nAs the main character, you'll face exciting challenges, from perfecting recipes to managing the bustling bakery, all while preserving the traditions of French baking. Hire skilled bakers, experiment with new ingredients, and create unique, irresistible treats to satisfy your customers' cravings.",
            name: 'Family Bakery',
            min_os_version: '12.0',
            categories: 'GAMES,CASUAL,FAMILY',
            app_size: 119.20896,
            url: 'https://apps.apple.com/us/app/family-bakery/id6468967020?uo=4',
            content_rating: 1,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_6756566956640c2706030c9040b1c5e8_1698772459793.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_ae6d245919c130749ee05700ae5fdb5a_1698772459793.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_fcc75b42871df184883bf6822f4c75bf_1698772459793.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_a8298189a1b3dc1decaab476eabea00e_1698772459793.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_97e47e2e2f3b3523286bdac35915deaf_1698772459793.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_fbfd5790fa09fc90b0063bc773e56b2b_1698772459793.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_5c7b897dcedab5f3bf7dd1248f79bbba_1698772459793.jpg'
            ],
            platform: 1,
            price: 0,
            developer: '',
            title: 'Family Bakery',
            displayText: 'Family Bakery',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_4f63651429f6614ed1ae7f252985a173_47712.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_4f63651429f6614ed1ae7f252985a173_47712.jpeg'
        },
        {
            id: 971907,
            bundle_ref: 1547825,
            advertiser_id: 157625,
            mmp_behaviour: 1,
            tracking_service_id: null,
            category_genre_id: 12,
            bundle_id: 'com.spacetimer.millioncoins',
            icon: 'android',
            description:
                '- Press the "Drop Coin" button to drop a single coin from the pipe.\n- Place the pegs in positions to make the coin bounce as much as possible.\n- The twist is that with each bounce you get 1 more coin.\n- MERGE two "+1" pegs together to make one "+2" peg...merge two "+2" pegs together to make one "+4" pegs...and so on...\n- Build the best system to make 1 Million $',
            name: 'Million Coins',
            min_os_version: '5.1',
            categories: 'GAME_PUZZLE',
            app_size: 0,
            url: 'https://play.google.com/store/apps/details?id=com.spacetimer.millioncoins',
            content_rating: 2,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_255b58b765dffedee6c6bcfb5c82b4b6_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_a5c5549bbc334fcb420d0211f07c6f27_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_d9197de2ac568a8d580e640fd51f8370_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_770cf29e1f23106f42dcff7b85a74d04_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_e2b009ebf83525f007f93198c24051dc_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_26747d4b5374ede39efb16e2cfa43127_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_fd79f1c09ad0d50200b2bce8ae836135_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_b81418df3370f4182e0672240389d790_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_5a33d069117be1da71d348ed960e2692_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_c3d5cea3af033ce0522307464c0b5ab4_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_8e83bf180f784e1f0a896df8dde0a71d_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_bc49b9ca6d6edb2b60b5c244317a3e54_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_e4cd35f2f88528a4f746d8768fa1b8cb_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_3b21fe542bd429fe681755e1af156a50_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_e6a6ee0c4b4bdf61dbb68ed322881d68_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_429d92095baf0b6742235a096de2af9e_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_87d295e5cafd12616e02fba4a13f9b6f_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_d5d51fd46393aded077e2b6eb9b0ad56_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_20229d350dc57a814b1f0f51a883bd9b_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_269b7aa48572cc69660274d3df5c311e_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_6c1fb448900191f0fe5021e15f70cc3e_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_6c556464961559c876387ac0d62510e5_1698039790252.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_0b2bca6c5f0960e906724f6f9cc4b479_1698039790252.jpg'
            ],
            platform: 2,
            price: 0,
            developer: '',
            title: 'Million Coins',
            displayText: 'Million Coins',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_2cdcbc8811970d6e0f2d7d19fe2f2f9a_transformed_342774.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_2cdcbc8811970d6e0f2d7d19fe2f2f9a_transformed_342774.jpeg'
        },
        {
            id: 971567,
            bundle_ref: 1543657,
            advertiser_id: 157625,
            mmp_behaviour: 1,
            tracking_service_id: null,
            category_genre_id: 12,
            bundle_id: 'com.utkarshvaidya.destroyplanets',
            icon: 'android',
            description:
                'Do you love space exploration and destruction? Do you want to create your own fleet of powerful space ships and use them to obliterate planets and asteroids? If yes, then Space Merge: Idle Planet Destroyer is the game for you!\n\nSpace Merge: Idle Planet Destroyer is an addictive idle game where you can build, launch, and merge space ships to create the ultimate space force. You can also use your space ships to destroy planets and huge objects in the galaxy and earn coins and gems.\n\nIn Space Merge: Idle Planet Destroyer, you can:\n\nBuild and launch different types of space ships, from rockets to UFOs, and watch them fly in the sky.\nMerge two space ships of the same level to create a more powerful one. The higher the level, the more damage your space ship can do.\nUse your space ships to destroy planets and huge objects in the galaxy. The bigger the target, the more rewards you get.\nUpgrade your space ships with various boosters and weapons to increase their speed, power, and durability.\nUnlock new planets and objects to destroy as you progress in the game.\nCollect coins and gems from your space ships and from destroying planets and objects. Use them to buy more space ships and upgrades.\nEnjoy stunning graphics and sound effects that will make you feel like you are in outer space.\nSpace Merge: Idle Planet Destroyer is a fun and relaxing game that will keep you entertained for hours. You can play it anytime, anywhere, even when you are offline. You can also watch your space ships fly and destroy planets while you are away.\n\nIf you are a fan of idle games, space games, or merge games, then Space Merge: Idle Planet Destroyer is the perfect game for you. Download it now for free and start your space adventure!',
            name: 'Destroy Planets Idle Game',
            min_os_version: '5.1',
            categories: 'GAME_SIMULATION',
            app_size: 0,
            url: 'https://play.google.com/store/apps/details?id=com.utkarshvaidya.destroyplanets',
            content_rating: 2,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_eceaecd5b2252b37f91d3ce6f22ff372_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_86b4c2862567365e7e9a2da861b6af33_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_0193789382e50981714095e72b10d6f8_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_629fc0fa36138ff3cbe8e61cb540425c_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_3d15fe6c0aafe6003794564d2758feff_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_54e67e81c8e870f4f1fe4fc14ad74eb5_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_f75e9f89f31597430507cec90e912a6b_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_29808ca5a4f08a2dd1324a47a8e2b412_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_d6396e3660af81daad10b8d52531ce24_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_50a04a6522a86719384646ef6d5901f5_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_38de169a9328239023727d48c7160fa3_1696831592872.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_2d25787a825e2227e0a0851524a46064_1696831592872.jpg'
            ],
            platform: 2,
            price: 0,
            developer: '',
            title: 'Destroy Planets Idle Game',
            displayText: 'Destroy Planets Idle Game',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_8e6d76b54b9719b55ebd6ee81ba563e2_transformed_504308.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_8e6d76b54b9719b55ebd6ee81ba563e2_transformed_504308.jpeg'
        },
        {
            id: 551905,
            bundle_ref: 684573,
            advertiser_id: 157625,
            mmp_behaviour: 1,
            tracking_service_id: null,
            category_genre_id: 4,
            bundle_id: 'com.freeplay.runandfight',
            icon: 'android',
            description:
                'Epic survival run! Racing adventure that will keep you on your toes till the very end! Race, Clash, and Win!\n\nGet your gang together, run with the crowd, and clash against the rival team!\n\nGATHER THE BIGGEST CROWD\nStart running alone and gather people on your way to collect a massive crowd. Lead your team through all sorts of moving, rotating, and expanding obstacles. Calculate your moves on the run and save as many members of the crowd as possible.\n\nRACE THROUGH THE OBSTACLES\nLet’s see how far you can get in this crazy survival race! Dodge swinging axes and colossal crushing spheres! Avoid monstrous circular saws, deadly red buttons, and a thorny abyss to make it to the finish line.\n\nWIN FINAL CLASH\nRun the crowd until you reach the castle at the end of the level. Crush your rivals in the final battle and capture the fortress!\n\n~~~~~~~~~~~~~~~~~~\nHOW TO PLAY\n~~~~~~~~~~~~~~~~~~\n- GATHER as huge a crowd as you can\n- DODGE obstacles\n- COLLECT keys\n- CLASH wall-on-wall\n- FIGHT against bosses\n- CAPTURE castles \n\n~~~~~~~~~~~~~~~~~~\nGAME FEATURES\n~~~~~~~~~~~~~~~~~~\n- Survival city game\n- Lots of unique levels\n- Deadly traps and impossible obstacles\n- Crisp bright graphics\n- Super smooth swipe control\n- Satisfying color explosions\n- Rewards and gifts\n\nAnd this is just the beginning… More levels and artful traps and obstacles are coming soon! \n\nDo you think you have the guts to take your crowd through this insane obstacle course? Download the game and try your luck today! \n\nWe are looking forward to getting feedback from all of you! Please leave your reviews, so we can keep making the game even better.',
            name: 'Join Clash 3D',
            min_os_version: '5.0',
            categories: 'GAME_ARCADE',
            app_size: 86,
            url: 'https://play.google.com/store/apps/details?id=com.freeplay.runandfight',
            content_rating: 2,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_54131cebbfc6a0cdc035db435db043ed_1675882458669.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_909243339ed62c6b25aad36d5435c05e_1675882458669.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_30620d0f0e2662109815d23c26a973f9_1675882458669.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_f2836205677f10b102914174ce92cf75_1675882458669.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_10eea69941699eb5abae850b11fb91c9_1675882458669.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_4453e74a3632ca58ab196ca5ec50028d_1675882458669.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_2259a7bb54d47e69c087c981cc43fc61_1675882458669.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_10eeb66dcd556b310a639d5d23d2d243_1675882458669.jpg'
            ],
            platform: 2,
            price: 0,
            developer: '',
            title: 'Join Clash 3D',
            displayText: 'Join Clash 3D',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_b8439905dcdcd682ba42b33068421c42_transformed_74431.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_b8439905dcdcd682ba42b33068421c42_transformed_74431.jpeg'
        },
        {
            id: 549553,
            bundle_ref: 730403,
            advertiser_id: 157625,
            mmp_behaviour: 1,
            tracking_service_id: null,
            category_genre_id: 12,
            bundle_id: 'com.malvo.frisbee',
            icon: 'android',
            description: 'Great game for sports fans! \nEasy and intuitive control.',
            name: 'Ultimate Disc 3D',
            min_os_version: '5.0',
            categories: 'GAME_SPORTS',
            app_size: 0,
            url: 'https://play.google.com/store/apps/details?id=com.malvo.frisbee',
            content_rating: 2,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_6e076d3d149d965bfc26bf7df792ecb6_1662375963121.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_b2e49d4f631c54333e1a246c99e16d0d_1662375963121.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_4f9ea3ff7baf08ec5991e6bef7a8b2f4_1662375963121.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_a6a5070b9c885ec1f39df3ef17aea0d2_1662116403696.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_d11264430a21396b0beb8974fcb24782_1662375963121.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_a69ba0da0513b635ac41c4565d62b7d9_1662375963121.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_90b77facffe4de55ace4e6528a490cc2_1662116403696.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_3b46701423646aa3ae527d561075f2c4_1662375963121.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_f78fcf199a16977063ba230568f04b9d_1662375963121.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_50e955b935a3bc3099f65e72b18cc8b2_1662116403696.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_0ecde4e5c70288a186a2a7d7b6cdd7ca_1662375963121.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_bca0f4c4060e89cd8e4fe2f85eff4cc6_1662375963121.jpg'
            ],
            platform: 2,
            price: 0,
            developer: '',
            title: 'Ultimate Disc 3D',
            displayText: 'Ultimate Disc 3D',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_5a6520b58a4c2838f1d13ffe7450dffc_transformed_800459.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_5a6520b58a4c2838f1d13ffe7450dffc_transformed_800459.jpeg'
        },
        {
            id: 548771,
            bundle_ref: 724683,
            advertiser_id: 157625,
            mmp_behaviour: 2,
            tracking_service_id: 6,
            category_genre_id: 12,
            bundle_id: 'com.malvo.frisbee',
            icon: 'ios',
            description: 'Great game for sports fans! \nEasy and intuitive control.',
            name: 'Ultimate Disc 3D',
            min_os_version: '11.0',
            categories: 'GAMES,ACTION,SPORTS',
            app_size: 165.494784,
            url: 'https://apps.apple.com/us/app/ultimate-disc/id1497873581?uo=4',
            content_rating: 1,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_03c3a50fe232142830a8472b06002f83_1694553003786.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_f69f08cd1ad8f178e30f814423e4a56f_1691175363491.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_22ffcab8ebf24ef92d83b301518a9584_1694033283805.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_5cadd125b801a4d3249fcc37f731a7a4_1694033283805.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_4997e714e0d7b6fb60170641c9683779_1694033283805.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_7cbf9c6d4d57b9a102b660f352c70690_1694033283805.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_c009be64ca22edb9b196cd0029e0cde6_1697150883890.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_a47e84f02a9ee2c9669b9444d2ed9617_1695332053379.jpg'
            ],
            platform: 1,
            price: 0,
            developer: '',
            title: 'Ultimate Disc 3D',
            displayText: 'Ultimate Disc 3D',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_9868eb4a4c7017b193d5498b526da565_45296.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_9868eb4a4c7017b193d5498b526da565_45296.jpeg'
        },
        {
            id: 540687,
            bundle_ref: 703785,
            advertiser_id: 157625,
            mmp_behaviour: 1,
            tracking_service_id: null,
            category_genre_id: 8,
            bundle_id: 'com.game.sortit3d',
            icon: 'android',
            description: 'Gotta sort them all!!\n\nSort all color balls in the tubes,\nHow far can you go?',
            name: 'Sort It 3D',
            min_os_version: '6.0',
            categories: 'GAME_PUZZLE',
            app_size: 0,
            url: 'https://play.google.com/store/apps/details?id=com.game.sortit3d',
            content_rating: 2,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_d18719f88cc46a38de4e30103980329d_1654078570891.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_7a4b7177bdad2e2a03e1ade75eaa8900_1654078570891.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_e498f0d05e2440cbf298220d0cec6cf2_1654078570891.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_c8cc2c938136680cb1d67da3f0cabede_1654078570891.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_a3d32f6a91262788929879bab0065703_1654078570891.jpg'
            ],
            platform: 2,
            price: 0,
            developer: '',
            title: 'Sort It 3D',
            displayText: 'Sort It 3D',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg'
        },
        {
            id: 540651,
            bundle_ref: 688391,
            advertiser_id: 157625,
            mmp_behaviour: 2,
            tracking_service_id: 6,
            category_genre_id: 8,
            bundle_id: 'com.game.sorting.3d',
            icon: 'ios',
            description:
                'Gota sort them all!!\n\nSort all color balls in the tubes,\nHow far can you go?\n\n\n*sort and reveal all the colors - red, blue, yellow, pink, green, purple, orange, grey, cyan, brown, white, black, teal, dark green, light pink, violet and more',
            name: 'Sort It 3D',
            min_os_version: '11.0',
            categories: 'GAMES,BOARD,PUZZLE,ENTERTAINMENT',
            app_size: 173.085696,
            url: 'https://apps.apple.com/us/app/sort-it-3d/id1493125671?uo=4',
            content_rating: 5,
            screenshots: [
                'https://platform.ssacdn.com/demand-creatives/images/image_6606101c7202c6470867800d20729c14_1693001764630.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_ec2627b63e2f62147b004c0b69481911_1694820244998.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_4403c2257f0ade122fec137d1a588d06_1694040964437.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_0c9934a8b6456548a1ba65d271bc2b83_1694820244998.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_d24c4a66190dc079f4827965a47cc96e_1694040964437.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_d6049ffb72eeb76fbbd0777c8245cacf_1694040964437.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_f3e2810d4ac74a202efa73ef8fcb8ada_1695339606020.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_585ba8c85005e8db750dbc1cc72e3339_1694040964437.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_4846996c92f62a97d65daa9cf489c93e_1694040964437.jpg',
                'https://platform.ssacdn.com/demand-creatives/images/image_b64f077311ac2494822a31422f953def_1694040964437.jpg'
            ],
            platform: 1,
            price: 0,
            developer: '',
            title: 'Sort It 3D',
            displayText: 'Sort It 3D',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg',
            iconUrl: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg'
        }
    ]
};
