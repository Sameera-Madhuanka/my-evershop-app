
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import ea70c934fe8e3dd352527103930df8cdb from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e88d49de202eeb5f16508f5622459c274 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e5f0b999cad601218c8df4cd51109db10 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ef4b05a586ddc750593418fde962e1ada from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e0edd1337d3a137a165b7038b657c74f4 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import ec1ff9f5146eafd376b7958044208f430 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import ebe2a65cf592874606ba9f5fdf93bf906 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import ec5a145359613806f3fcdf0a004646ce7 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e97adbcf0cfe38e71eccbf16733f7ebc3 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import e54f9e76fb8cd52a436cd38efb7b962d7 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e94bbba293d94af618162c978b69b4874 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e4cf67faa815783239e0ce93514a7983e from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e8acc02ee662a27fb8e93e2962d36ddfd from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ecc047ccfe642bc4ca9763161b95370d7 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e9377458fe5cef506e0958b68f6d00d9f from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import ee52961d6e6de43a6081f1b2861a596c4 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerGrid/Grid.js';
import e9c3be6428eb639e506ef9dde75ef8a35 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerGrid/Heading.js';
import e0d7e7c78d837c23e7ea278eba9411c2b from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e2c3f9724b44eec327b4d0681b2529c55 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e953024562faaa832a700617b3b69a8af from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import ee03b72c6412d903e83ad203c40416060 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e44d0567567aad931d501b9186c56476a from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import eeba716ca3353e522a00cb60d95dac448 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e53e881c7ab68ae4d6c3d91ce5d4ced48 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import e076ec01acafd3a8bc39e21cd25090515 from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/extensions/sample/dist/pages/admin/all/Hello.js';
import collection_products from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///F:/NEW_BSNES/bamunu_store/my-evershop-app/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
Area.defaultProps.components = {
  header: {
    ea70c934fe8e3dd352527103930df8cdb: {
      id: 'ea70c934fe8e3dd352527103930df8cdb',
      sortOrder: 50,
      component: { default: ea70c934fe8e3dd352527103930df8cdb }
    },
    ec5a145359613806f3fcdf0a004646ce7: {
      id: 'ec5a145359613806f3fcdf0a004646ce7',
      sortOrder: 10,
      component: { default: ec5a145359613806f3fcdf0a004646ce7 }
    },
    e8acc02ee662a27fb8e93e2962d36ddfd: {
      id: 'e8acc02ee662a27fb8e93e2962d36ddfd',
      sortOrder: 20,
      component: { default: e8acc02ee662a27fb8e93e2962d36ddfd }
    }
  },
  adminMenu: {
    e88d49de202eeb5f16508f5622459c274: {
      id: 'e88d49de202eeb5f16508f5622459c274',
      sortOrder: 20,
      component: { default: e88d49de202eeb5f16508f5622459c274 }
    },
    e0edd1337d3a137a165b7038b657c74f4: {
      id: 'e0edd1337d3a137a165b7038b657c74f4',
      sortOrder: 60,
      component: { default: e0edd1337d3a137a165b7038b657c74f4 }
    },
    e4cf67faa815783239e0ce93514a7983e: {
      id: 'e4cf67faa815783239e0ce93514a7983e',
      sortOrder: 10,
      component: { default: e4cf67faa815783239e0ce93514a7983e }
    },
    e9377458fe5cef506e0958b68f6d00d9f: {
      id: 'e9377458fe5cef506e0958b68f6d00d9f',
      sortOrder: 40,
      component: { default: e9377458fe5cef506e0958b68f6d00d9f }
    },
    e0d7e7c78d837c23e7ea278eba9411c2b: {
      id: 'e0d7e7c78d837c23e7ea278eba9411c2b',
      sortOrder: 30,
      component: { default: e0d7e7c78d837c23e7ea278eba9411c2b }
    },
    e2c3f9724b44eec327b4d0681b2529c55: {
      id: 'e2c3f9724b44eec327b4d0681b2529c55',
      sortOrder: 50,
      component: { default: e2c3f9724b44eec327b4d0681b2529c55 }
    },
    e44d0567567aad931d501b9186c56476a: {
      id: 'e44d0567567aad931d501b9186c56476a',
      sortOrder: 500,
      component: { default: e44d0567567aad931d501b9186c56476a }
    }
  },
  quickLinks: {
    e5f0b999cad601218c8df4cd51109db10: {
      id: 'e5f0b999cad601218c8df4cd51109db10',
      sortOrder: 20,
      component: { default: e5f0b999cad601218c8df4cd51109db10 }
    },
    e953024562faaa832a700617b3b69a8af: {
      id: 'e953024562faaa832a700617b3b69a8af',
      sortOrder: 30,
      component: { default: e953024562faaa832a700617b3b69a8af }
    }
  },
  settingPageMenu: {
    ef4b05a586ddc750593418fde962e1ada: {
      id: 'ef4b05a586ddc750593418fde962e1ada',
      sortOrder: 15,
      component: { default: ef4b05a586ddc750593418fde962e1ada }
    },
    ee03b72c6412d903e83ad203c40416060: {
      id: 'ee03b72c6412d903e83ad203c40416060',
      sortOrder: 10,
      component: { default: ee03b72c6412d903e83ad203c40416060 }
    },
    eeba716ca3353e522a00cb60d95dac448: {
      id: 'eeba716ca3353e522a00cb60d95dac448',
      sortOrder: 5,
      component: { default: eeba716ca3353e522a00cb60d95dac448 }
    },
    e53e881c7ab68ae4d6c3d91ce5d4ced48: {
      id: 'e53e881c7ab68ae4d6c3d91ce5d4ced48',
      sortOrder: 20,
      component: { default: e53e881c7ab68ae4d6c3d91ce5d4ced48 }
    }
  },
  footerLeft: {
    ec1ff9f5146eafd376b7958044208f430: {
      id: 'ec1ff9f5146eafd376b7958044208f430',
      sortOrder: 10,
      component: { default: ec1ff9f5146eafd376b7958044208f430 }
    },
    ecc047ccfe642bc4ca9763161b95370d7: {
      id: 'ecc047ccfe642bc4ca9763161b95370d7',
      sortOrder: 20,
      component: { default: ecc047ccfe642bc4ca9763161b95370d7 }
    }
  },
  body: {
    ebe2a65cf592874606ba9f5fdf93bf906: {
      id: 'ebe2a65cf592874606ba9f5fdf93bf906',
      sortOrder: 10,
      component: { default: ebe2a65cf592874606ba9f5fdf93bf906 }
    },
    e94bbba293d94af618162c978b69b4874: {
      id: 'e94bbba293d94af618162c978b69b4874',
      sortOrder: 10,
      component: { default: e94bbba293d94af618162c978b69b4874 }
    }
  },
  head: {
    e97adbcf0cfe38e71eccbf16733f7ebc3: {
      id: 'e97adbcf0cfe38e71eccbf16733f7ebc3',
      sortOrder: 5,
      component: { default: e97adbcf0cfe38e71eccbf16733f7ebc3 }
    }
  },
  adminNavigation: {
    e54f9e76fb8cd52a436cd38efb7b962d7: {
      id: 'e54f9e76fb8cd52a436cd38efb7b962d7',
      sortOrder: 10,
      component: { default: e54f9e76fb8cd52a436cd38efb7b962d7 }
    }
  },
  content: {
    ee52961d6e6de43a6081f1b2861a596c4: {
      id: 'ee52961d6e6de43a6081f1b2861a596c4',
      sortOrder: 20,
      component: { default: ee52961d6e6de43a6081f1b2861a596c4 }
    },
    e9c3be6428eb639e506ef9dde75ef8a35: {
      id: 'e9c3be6428eb639e506ef9dde75ef8a35',
      sortOrder: 10,
      component: { default: e9c3be6428eb639e506ef9dde75ef8a35 }
    },
    e076ec01acafd3a8bc39e21cd25090515: {
      id: 'e076ec01acafd3a8bc39e21cd25090515',
      sortOrder: 0,
      component: { default: e076ec01acafd3a8bc39e21cd25090515 }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );