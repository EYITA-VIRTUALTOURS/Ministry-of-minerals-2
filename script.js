(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.46,
  "class": "PanoramaCameraPosition",
  "pitch": -7.91
 },
 "id": "panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Untitled design (19)",
 "id": "photo_38F8A8BC_2278_24BB_41A1_D95964268337",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_38F8A8BC_2278_24BB_41A1_D95964268337.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_38F8A8BC_2278_24BB_41A1_D95964268337_t.png",
 "height": 500
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Untitled design (24)",
 "id": "photo_31B449A2_2333_A5AD_41C0_FBDAB8EACC86",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_31B449A2_2333_A5AD_41C0_FBDAB8EACC86.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_31B449A2_2333_A5AD_41C0_FBDAB8EACC86_t.png",
 "height": 500
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_0D7EF258_1946_0DFC_4185_10BA3DB9BBC7",
  "this.overlay_0DA6E7B7_1946_32B4_41A8_0BD65A0BAF4C",
  "this.overlay_0F55C271_1942_0DCD_41B2_B9DBFC879F9C",
  "this.overlay_0A818229_194E_0D5C_41B0_CCD9EF6AC93A",
  "this.overlay_34459ED2_2188_7CCF_41BB_5623BB758706",
  "this.overlay_32B5922A_2188_E75F_41A7_5FABA631EB65",
  "this.panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_122933_00_443",
 "id": "panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.73,
   "yaw": 125.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1352712C_193E_0F54_419F_7553D13BC24C"
  },
  {
   "backwardYaw": 129.25,
   "yaw": -43.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_16911C37_1942_15B4_419F_734839E9F2E1",
  "this.overlay_1691B648_1942_75DC_41B4_6BB200F20BD7",
  "this.panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_122445_00_441",
 "id": "panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.57,
   "yaw": 3.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_t.jpg"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_051E21C6_2288_396F_41A9_AFF969AAF9DE",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "BENTONITE",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_051C51C6_2288_396F_41A5_946075A3E830",
  "this.image_uid3B3A7015_23FD_A296_419D_0B3D1B82DBAC_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window64267"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_398811B3_23FD_A592_4182_28BD37EEE773",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13575006_193E_0D54_41AE_0AA09D974DBD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13623A00_193E_1D4C_41A6_216555EDCA88_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_03FAAF41_2298_2964_41A1_9892F7A46070",
  "this.overlay_3FA65738_2288_7923_419A_94A546C71A7C",
  "this.overlay_03826389_2288_F9E7_4181_1B08CEFBB259",
  "this.overlay_005EF54B_2288_5965_41A6_6969A853A4A8",
  "this.panorama_1350302A_193E_0D5D_41A0_84FB09986059_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_125700_00_453",
 "id": "panorama_1350302A_193E_0D5D_41A0_84FB09986059",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 157.01,
   "yaw": 90.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_13625F11_193E_334C_41A8_E0821E6DDBD4"
  },
  {
   "backwardYaw": 12.31,
   "yaw": -92.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_136231E1_193E_0ECC_41AB_D3B79019843A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A5D7146_23FD_A2F5_41BC_6683D01270A7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 110.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_39980197_23FD_A592_41B9_2CA69A0F22E4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 28.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A3F412F_23FD_A2B3_4195_C4430E76D60E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -54.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_39A561FD_23FD_A596_41A9_5B1AD32248AE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_382ACD22_2278_1D4F_41BF_CB44141484B4",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 8,
 "bodyPaddingBottom": 5,
 "title": "RUBY",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_38292D22_2278_1D4F_41B1_4D3DBDCC2360",
  "this.image_uid3B3C201A_23FD_A29D_41C0_EB12A8F89069_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window23230"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 29.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A7BC162_23FD_A2AD_417B_09BF0397F7F3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_3D7D4806_2298_56EF_41A9_4AB206630E57",
  "this.overlay_3F174982_2298_29E7_41B7_10D8490D9B38",
  "this.overlay_3D243865_229B_D72D_41A3_06B0B873F7E9",
  "this.overlay_0210017A_2298_3927_4186_CD6A1EA3DCF3",
  "this.panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_tcap0",
  "this.overlay_317662AA_2355_A7BD_41B4_D0617F32688C"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_124952_00_451",
 "id": "panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -34.79,
   "yaw": 137.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1363DB2A_193E_135C_41B0_C314112FDF4E"
  },
  {
   "backwardYaw": -146.96,
   "yaw": -117.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_136231E1_193E_0ECC_41AB_D3B79019843A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1350302A_193E_0D5D_41A0_84FB09986059_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1352712C_193E_0F54_419F_7553D13BC24C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 136.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A8F90B6_23FD_A392_41A3_8E045DD7B830",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_02F2738D_2288_D9FC_41BE_737A8BB04B5B",
  "this.overlay_01CB8299_2288_5BE4_41BF_AC2D8F3B00CB",
  "this.overlay_0492C5DD_2288_791D_41BF_FA82AA109C68",
  "this.overlay_05A2DAE5_2289_EB2D_4161_67DB38DE884A",
  "this.overlay_059D6A6B_2288_2B25_41BF_9CBDF85B1744",
  "this.overlay_0410719D_2288_D91C_41BB_AC5F7D0327D5",
  "this.overlay_0499194A_2288_2967_41B5_5A07198DF61A",
  "this.overlay_036FE464_2298_3F23_41B8_0A46B297A6AE",
  "this.panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_130115_00_455",
 "id": "panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.3,
   "yaw": 138.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_13625F11_193E_334C_41A8_E0821E6DDBD4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11"
  },
  {
   "backwardYaw": -57.66,
   "yaw": -2.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_13624820_193E_7D4C_4188_B33125DD452E"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "photo_2022-06-01_23-14-17",
 "id": "photo_0946406D_2298_773D_41B4_B361EFA7DA7E",
 "width": 1280,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_0946406D_2298_773D_41B4_B361EFA7DA7E.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0946406D_2298_773D_41B4_B361EFA7DA7E_t.jpg",
 "height": 960
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Untitled design (17)",
 "id": "photo_3783254E_2188_2DD7_41AE_4E41BE914DB6",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_3783254E_2188_2DD7_41AE_4E41BE914DB6.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_3783254E_2188_2DD7_41AE_4E41BE914DB6_t.png",
 "height": 500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -50.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B6CF083_23FD_A273_4190_083CB52C9957",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_01008EE4_22B8_EB23_41AE_41B5C75DB48B",
  "this.overlay_04A0FF74_22B9_E923_419D_5ED64C9B3BB8",
  "this.overlay_02E8110B_22B8_76E5_41B4_B112876C2405",
  "this.overlay_09546407_22B8_5EED_41BD_D39EF0A27249",
  "this.panorama_13624820_193E_7D4C_4188_B33125DD452E_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_130222_00_456",
 "id": "panorama_13624820_193E_7D4C_4188_B33125DD452E",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.89,
   "yaw": -57.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6"
  },
  {
   "backwardYaw": 154,
   "yaw": 115.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Untitled design (26)",
 "id": "photo_0823CBA5_2288_692D_414C_7827EED6137A",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_0823CBA5_2288_692D_414C_7827EED6137A.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_0823CBA5_2288_692D_414C_7827EED6137A_t.png",
 "height": 500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 33.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3AC420F8_23FD_A39D_41C0_04CBA24698ED",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 122.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A9210A9_23FD_A3BF_41B5_006D10301D23",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_3D2A546F_2299_FF3D_41BA_3D5D65EDB498",
  "this.overlay_3F9CDBFD_2298_291C_41AF_5C6967F0F15B",
  "this.overlay_02EEE27D_2298_3B1D_41A4_302000C19BFA",
  "this.overlay_028F3386_2298_59EF_41A5_C1B424EEF310",
  "this.panorama_13575006_193E_0D54_41AE_0AA09D974DBD_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_124507_00_449",
 "id": "panorama_13575006_193E_0D54_41AE_0AA09D974DBD",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -151.61,
   "yaw": -146.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1363DB2A_193E_135C_41B0_C314112FDF4E"
  },
  {
   "backwardYaw": 81.27,
   "yaw": -18.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_t.jpg"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_362C2329_2278_E55A_41A8_D259A52601A5",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "RUBY",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_362EE329_2278_E55A_41BF_F4B8796A9871",
  "this.image_uid3B392015_23FD_A296_41A2_D22704B0C205_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window20932"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A98E097_23FD_A392_41A9_5FA74FCF92B6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_03081051_2288_5764_41B3_83C3F2CC7139",
  "this.overlay_04A20334_2288_5923_41AE_7642D3735383",
  "this.overlay_02E88555_2288_596D_4196_489B919F7C1C",
  "this.overlay_0269DF61_2288_E925_41B6_449907DFFBD5",
  "this.overlay_00290CD9_2289_EF65_41B4_3569867F535A",
  "this.panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_125829_00_454",
 "id": "panorama_13625F11_193E_334C_41A8_E0821E6DDBD4",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 138.67,
   "yaw": -88.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6"
  },
  {
   "backwardYaw": 90.94,
   "yaw": 157.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1350302A_193E_0D5D_41A0_84FB09986059"
  },
  {
   "backwardYaw": 90.94,
   "yaw": -167.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1350302A_193E_0D5D_41A0_84FB09986059"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -95.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_39D5A215_23FD_A697_41AA_3CFF47BC141A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Untitled design (18)",
 "id": "photo_34DE369B_2188_2F7D_41B4_0112A31B9C4F",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_34DE369B_2188_2F7D_41B4_0112A31B9C4F.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_34DE369B_2188_2F7D_41B4_0112A31B9C4F_t.png",
 "height": 500
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "GGG",
 "id": "photo_300BDE13_2355_FE92_41BA_72763EFD989D",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_300BDE13_2355_FE92_41BA_72763EFD989D.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_300BDE13_2355_FE92_41BA_72763EFD989D_t.png",
 "height": 500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -41.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_39C5D22C_23FD_A6B5_41AD_16F561E503E8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "camera": "this.panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_camera",
   "media": "this.panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_camera",
   "media": "this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_camera",
   "media": "this.panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1352712C_193E_0F54_419F_7553D13BC24C_camera",
   "media": "this.panorama_1352712C_193E_0F54_419F_7553D13BC24C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_camera",
   "media": "this.panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1351283A_193E_7DBC_41B1_A46280A34016_camera",
   "media": "this.panorama_1351283A_193E_7DBC_41B1_A46280A34016",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_13623A00_193E_1D4C_41A6_216555EDCA88_camera",
   "media": "this.panorama_13623A00_193E_1D4C_41A6_216555EDCA88",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_camera",
   "media": "this.panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_13575006_193E_0D54_41AE_0AA09D974DBD_camera",
   "media": "this.panorama_13575006_193E_0D54_41AE_0AA09D974DBD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_camera",
   "media": "this.panorama_1363DB2A_193E_135C_41B0_C314112FDF4E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_camera",
   "media": "this.panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_136231E1_193E_0ECC_41AB_D3B79019843A_camera",
   "media": "this.panorama_136231E1_193E_0ECC_41AB_D3B79019843A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1350302A_193E_0D5D_41A0_84FB09986059_camera",
   "media": "this.panorama_1350302A_193E_0D5D_41A0_84FB09986059",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_camera",
   "media": "this.panorama_13625F11_193E_334C_41A8_E0821E6DDBD4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_camera",
   "media": "this.panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_13624820_193E_7D4C_4188_B33125DD452E_camera",
   "media": "this.panorama_13624820_193E_7D4C_4188_B33125DD452E",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 62.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3AF23103_23FD_A273_41B2_0081D725C8D4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 141.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A112119_23FD_A29F_41A4_59C27ACF53A1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_01DED120_2298_3924_4164_17959759E168",
  "this.overlay_01B0D624_2299_DB23_41AB_84C573E3A6C3",
  "this.overlay_3F11BED8_2298_2B63_41A7_DDE4AD4F24A5",
  "this.overlay_0211410C_2298_56E3_41A0_65E02FE92540",
  "this.panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_tcap0",
  "this.overlay_328680D9_2355_A39F_41B9_E246939B7CDE",
  "this.overlay_31C6C1A7_2353_E5B2_4192_4DBEF977FD9B",
  "this.overlay_30257F66_235C_7EB5_4174_8F665E579F0E",
  "this.overlay_31A5D8B1_235C_A3AF_41BF_7630E7E14378"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_124558_00_450",
 "id": "panorama_1363DB2A_193E_135C_41B0_C314112FDF4E",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 137.04,
   "yaw": -34.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8"
  },
  {
   "backwardYaw": -146.84,
   "yaw": -151.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_13575006_193E_0D54_41AE_0AA09D974DBD"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_02F8696E_2298_293F_41B0_1F5CEA47E531",
  "this.overlay_00D0FD6F_2298_293D_41B5_7151504250E7",
  "this.overlay_024AE2FF_2298_5B1D_4197_9933829A72E7",
  "this.overlay_0380786B_2298_D725_41B2_4D13D8DE669E",
  "this.panorama_136231E1_193E_0ECC_41AB_D3B79019843A_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_125348_00_452",
 "id": "panorama_136231E1_193E_0ECC_41AB_D3B79019843A",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -117.19,
   "yaw": -146.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8"
  },
  {
   "backwardYaw": -92.07,
   "yaw": 12.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1350302A_193E_0D5D_41A0_84FB09986059"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_39E3625D_23FD_A697_41BE_A4F182EEBD75",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_39B7D1E1_23FD_A5AE_41B3_BD3BD27A9575",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_32459333_2334_6693_41BC_E4EF453F9543",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "GRANITE",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_32426333_2334_6693_41B0_5378E56202AA",
  "this.image_uid3B30301E_23FD_A295_418E_56E3C32B4776_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window5119"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3AA7A0DE_23FD_A392_41A3_3BD573EB1FAE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_313DDFDF_235C_9D93_41A7_36B64CCFE3A3",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "COPPER",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_313F1FE0_235C_9DAD_41A2_A3AC47353866",
  "this.image_uid3B362023_23FD_A2B2_41B1_C4FB252CCF1F_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window9947"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -98.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A2EF13B_23FD_A293_4198_E28C841BF563",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "CU",
 "id": "photo_31B30D30_235C_62AD_41C1_720264A41A84",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_31B30D30_235C_62AD_41C1_720264A41A84.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_31B30D30_235C_62AD_41C1_720264A41A84_t.png",
 "height": 500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3911227A_23FD_A69D_4195_45628AF9CD09",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Untitled design (23)",
 "id": "photo_05A360CD_2288_377D_41A9_9E6B3ABE2E1B",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_05A360CD_2288_377D_41A9_9E6B3ABE2E1B.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_05A360CD_2288_377D_41A9_9E6B3ABE2E1B_t.png",
 "height": 500
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3514386D_2278_23D5_41B7_2F241A7CCE44",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "EMERALD",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_3515E86D_2278_23D5_41A8_E9B51DADD28A",
  "this.image_uid3B3DC01A_23FD_A29D_41A0_72562CDC16B8_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window25296"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Untitled design (25)",
 "id": "photo_31689229_2337_A6BE_41AB_1C257D97BFA0",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_31689229_2337_A6BE_41AB_1C257D97BFA0.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_31689229_2337_A6BE_41AB_1C257D97BFA0_t.png",
 "height": 500
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Untitled design (18)",
 "id": "photo_38557D36_2288_1DB7_41A1_10F411CDD9A8",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_38557D36_2288_1DB7_41A1_10F411CDD9A8.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_38557D36_2288_1DB7_41A1_10F411CDD9A8_t.png",
 "height": 500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_39014290_23FD_A66E_41A4_950D187EC2B4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_058AE00F_2298_56FD_41A7_6F663931C56C",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "LIMESTONE",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_058B3015_2298_56ED_41B0_24CEA16DDF66",
  "this.image_uid3B3BC017_23FD_A293_41B4_B4CD474EA6B9_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window68296"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3AE2710E_23FD_A272_41B0_23C7F079316C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3122F53F_2354_6293_41AC_E18ED18439C8",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "GOLD",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_312CA53F_2354_6293_41B1_2142F5D21271",
  "this.image_uid3B36D022_23FD_A2AD_41A5_06BF6BBFC5EF_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window7359"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3530F3FC_2288_24BB_41A0_617DAD32C139",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "AQUAMARINE",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_353EB3FD_2288_24B5_41B8_34C6856A9B35",
  "this.image_uid3B3ED01C_23FD_A295_41A9_FBACFF3BFBC2_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window28957"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_0061CBA0_2288_6923_41AA_99678D5FE708",
  "this.overlay_3F55322A_2288_5B24_41BE_91E3350A3961",
  "this.overlay_00CAE0D0_2288_3764_41A2_0B2CAAA1409F",
  "this.overlay_3F0C712D_2288_593D_41BB_E5E5DCC7AEDD",
  "this.overlay_009255F0_2289_F924_41AC_6E7F79DC7AC7",
  "this.overlay_3F527419_2288_3EE5_41B0_467270273376",
  "this.panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_124244_00_448",
 "id": "panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -38.69,
   "yaw": -139.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_13623A00_193E_1D4C_41A6_216555EDCA88"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_13624820_193E_7D4C_4188_B33125DD452E"
  },
  {
   "backwardYaw": -18.72,
   "yaw": 81.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_13575006_193E_0D54_41AE_0AA09D974DBD"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 33.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B466061_23FD_A2AE_4182_72C94CBF3815",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_087F8B39_2288_2925_41C0_4F33E9D23FE2",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 500,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "NATURAL GAS CONDENSATE",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_087DAB39_2288_2925_41BE_86A0661173FF",
  "this.image_uid3B2D7028_23FD_A2BD_41A9_98DD7BB8553C_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window65426"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_39F31247_23FD_A6F3_41B9_2A437150CF8C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_332757B4_2188_2D4B_4189_99929724C702",
  "this.overlay_33915DA9_2188_7D5D_41BE_CBAEF42C6D85",
  "this.overlay_33678007_2188_2355_41AB_4F973C6AE635",
  "this.overlay_33194F9D_2188_1D75_41BE_749C18533653",
  "this.overlay_347639B0_2189_E54B_413F_4E03CD6D40A0",
  "this.overlay_3452F01B_2188_237D_41B9_DF5F5AD13BB4",
  "this.overlay_353E275A_2278_6DFF_4198_D25F40BF7715",
  "this.overlay_34C0A4DA_2278_2CFF_41B3_EB3D0DD65A3C",
  "this.overlay_03453CEC_2288_6F3C_41A2_21B181966DB8",
  "this.overlay_04DB7F96_2298_29EF_41B5_6708694EC778",
  "this.overlay_012E8799_2298_39E4_41A7_2B23F09D6206",
  "this.overlay_041C8D2F_2288_293D_41AA_F5DDBBBE169E",
  "this.overlay_08F851BD_2288_791C_4195_09E6282EC3B4",
  "this.panorama_1352712C_193E_0F54_419F_7553D13BC24C_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_123227_00_444",
 "id": "panorama_1352712C_193E_0F54_419F_7553D13BC24C",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 125.61,
   "yaw": -0.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17"
  },
  {
   "backwardYaw": 84.79,
   "yaw": -69.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_t.jpg"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_34BD020B_23CC_A673_41B7_8A4D3CC7A388",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "CEMENT",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_34A3420B_23CC_A673_419A_836DBE3E0B6D",
  "this.image_uid3B030008_23FD_A27E_41A7_8E6787F024DD_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window16397"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_39D98701_2288_7AE5_4192_E3D079C9A900",
  "this.overlay_37395E00_2288_2AE3_419D_785DC3EBB160",
  "this.overlay_3893E5F3_2287_D925_41AF_DCB5D098BDFC",
  "this.overlay_3AD1ED47_22F8_E96D_4192_70DE404B2FC3",
  "this.overlay_3820DB30_22F8_2924_41A8_4637041E265F",
  "this.panorama_13623A00_193E_1D4C_41A6_216555EDCA88_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_123945_00_447",
 "id": "panorama_13623A00_193E_1D4C_41A6_216555EDCA88",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 111.17,
   "yaw": -150.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1351283A_193E_7DBC_41B1_A46280A34016"
  },
  {
   "backwardYaw": 111.17,
   "yaw": 143.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1351283A_193E_7DBC_41B1_A46280A34016"
  },
  {
   "backwardYaw": -139.05,
   "yaw": -38.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -167.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A4B3154_23FD_A295_41A1_40A3643D55C7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13624820_193E_7D4C_4188_B33125DD452E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_37BAE8D6_2298_24F7_41B1_EB739BCF3D3E",
  "this.overlay_36695831_2288_634C_41BB_146A8F996078",
  "this.overlay_3AD38653_2289_EFCE_4195_989FB24A6F73",
  "this.overlay_39F1725C_2288_27FB_41B6_6E1CF2709474",
  "this.panorama_1351283A_193E_7DBC_41B1_A46280A34016_tcap0",
  "this.overlay_2C0152B9_233C_A79F_41BC_1FCC817D2145",
  "this.overlay_32173F92_2334_9E6D_41B0_5F7914DDCD67",
  "this.overlay_313F5FBA_2334_FD9D_41B7_0EE0B0D8D9EF",
  "this.overlay_31472802_234C_E26D_41B5_D57377F0CCD1"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_123805_00_446",
 "id": "panorama_1351283A_193E_7DBC_41B1_A46280A34016",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -150.73,
   "yaw": 111.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_13623A00_193E_1D4C_41A6_216555EDCA88"
  },
  {
   "backwardYaw": -103.75,
   "yaw": -63.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_3476ABE8_2278_24DB_41A8_BF8E177D2DBB",
  "this.overlay_34E2769D_2278_2F75_41AF_BA1E01251BBB",
  "this.overlay_3696E1CB_2278_24DD_41AC_48531DACD5D0",
  "this.overlay_34F1DA83_2278_274D_41BF_AA734E1565CD",
  "this.overlay_357C17FB_2278_ECBD_41B8_C8A2EACD23B5",
  "this.overlay_38D071A7_2278_6555_41B0_D77CA26F5A3B",
  "this.overlay_389565AC_228B_ED5B_41BE_AF1A03641BD0",
  "this.overlay_398AD969_2299_E5DD_41B4_9CDF2371083A",
  "this.panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_tcap0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_123410_00_445",
 "id": "panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -69.43,
   "yaw": 84.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1352712C_193E_0F54_419F_7553D13BC24C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 40.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_393F12A5_23FD_A7B7_4192_11557BB0A227",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -64.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3AB730CF_23FD_A3F3_41BC_56CD8FDC01DE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 161.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A00D124_23FD_A2B5_41B7_F1462CA4E5E2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_136231E1_193E_0ECC_41AB_D3B79019843A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B71B074_23FD_A296_41A4_800BF51DC5A5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 107.92,
  "class": "PanoramaCameraPosition",
  "pitch": -7.45
 },
 "id": "panorama_1351283A_193E_7DBC_41B1_A46280A34016_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 145.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3AD5B0EC_23FD_A3B5_416B_064AAC3AA20B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "EM",
 "id": "photo_366ABE82_2288_1F4F_41B7_CB51E51F48DB",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_366ABE82_2288_1F4F_41B7_CB51E51F48DB.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_366ABE82_2288_1F4F_41B7_CB51E51F48DB_t.png",
 "height": 500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3987A1CA_23FD_A5F2_41AD_B0113A0AEE4A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_34CD421F_2188_2775_4191_A51B4C753446",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "OPAL",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_34CB6220_2188_274B_4194_FA02B62F48B2",
  "this.image_uid3B39D014_23FD_A296_418F_8B05B19532E7_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window15110"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 116.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3ABAA0C3_23FD_A3F2_41BC_B639B117CCCB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -42.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B4B104E_23FD_A2F5_4192_F624979D54E6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_0F9C620C_1942_0D54_41B0_82020221751A",
 "closeButtonBorderSize": 0,
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 1,
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "closeButtonPaddingTop": 0,
 "title": "SILICA SAND",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_0F9E520D_1942_0D54_41B3_6FDAF3552E02",
  "this.image_uid3B07F012_23FD_A26D_41A9_8D700868D535_1"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "footerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window10419"
 },
 "contentOpaque": false,
 "closeButtonPaddingLeft": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_335A1660_2334_EEAD_41B3_9BD67001DFA4",
 "shadowVerticalLength": 0,
 "width": 600,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "titleFontSize": "3vmin",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 500,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "bodyPaddingBottom": 5,
 "title": "MARBLE",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "class": "Window",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#CC6600",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_335A3661_2334_EEAF_4199_4D865024B4DF",
  "this.image_uid3B30F01E_23FD_A295_41AD_408D3CD6BA26_1"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "bodyBackgroundOpacity": 1,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "layout": "horizontal",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window3413"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "cc",
 "id": "photo_34A721DE_23F3_A595_41C0_C50EC2D0C7FD",
 "width": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_34A721DE_23F3_A595_41C0_C50EC2D0C7FD.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_34A721DE_23F3_A595_41C0_C50EC2D0C7FD_t.png",
 "height": 500
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_0B353BA0_1942_134C_419F_827A3947C4F7",
  "this.overlay_095D50C0_1942_0ECC_41B0_4DDAB2051387",
  "this.overlay_0834C0FB_1942_0EBC_41A5_0B35E0DF18BF",
  "this.overlay_10946E3D_1EB8_1FBA_4159_AD732CF653A0",
  "this.overlay_102AF465_1EB9_E3D5_41BB_152C811BD03A",
  "this.overlay_3851C998_2298_257B_41BD_FAB4775AC30F",
  "this.overlay_36214F1A_2298_1D7F_41B3_631E200BF930",
  "this.overlay_006574C3_2288_FF65_4189_CC720AD6866C",
  "this.overlay_3FC60CE8_2288_6F24_418D_60040D25A001",
  "this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_tcap0",
  "this.overlay_38040FC7_23CC_9DF2_41A6_5958E9EEF5E5",
  "this.overlay_3B8F6260_23FC_66AD_4144_B77A0C8992E0"
 ],
 "hfovMin": "135%",
 "label": "IMG_20220525_122700_00_442",
 "id": "panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6",
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -43.96,
   "yaw": 129.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17"
  },
  {
   "backwardYaw": -63.31,
   "yaw": -103.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1351283A_193E_7DBC_41B1_A46280A34016"
  },
  {
   "backwardYaw": 115.06,
   "yaw": 154,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_13624820_193E_7D4C_4188_B33125DD452E"
  },
  {
   "backwardYaw": 3.01,
   "yaw": 1.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 76.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3A6A1180_23FD_A26E_41BC_082E221FCD3A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 641,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6, this.camera_3B6CF083_23FD_A273_4190_083CB52C9957); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 81,
   "yaw": -43.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0_HS_0_1_0_map.gif",
      "width": 165,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 15.44
  }
 ],
 "id": "overlay_0D7EF258_1946_0DFC_4185_10BA3DB9BBC7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.94,
   "yaw": -24.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.95
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_09B7554F_1E98_2DD5_4195_D35D96E059E9",
   "yaw": -24.91,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.95,
   "distance": 100,
   "hfov": 11.94
  }
 ],
 "id": "overlay_0DA6E7B7_1946_32B4_41A8_0BD65A0BAF4C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_0F9C620C_1942_0D54_41B0_82020221751A, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.36,
   "yaw": 31.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0_HS_2_1_0_map.gif",
      "width": 147,
      "class": "ImageResourceLevel",
      "height": 44
     }
    ]
   },
   "pitch": -5.97
  }
 ],
 "id": "overlay_0F55C271_1942_0DCD_41B2_B9DBFC879F9C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.11,
   "yaw": 30.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.62
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0A1D8FE0_1946_32CC_41A7_35D731ED4B3E",
   "yaw": 30.78,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.62,
   "distance": 100,
   "hfov": 4.11
  }
 ],
 "id": "overlay_0A818229_194E_0D5C_41B0_CCD9EF6AC93A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1352712C_193E_0F54_419F_7553D13BC24C, this.camera_3B71B074_23FD_A296_41A4_800BF51DC5A5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 105.29,
   "yaw": 125.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0_HS_4_1_0_map.gif",
      "width": 165,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.59
  }
 ],
 "id": "overlay_34459ED2_2188_7CCF_41BB_5623BB758706",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.33,
   "yaw": 123.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0_HS_5_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.74
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_345BCF8A_2188_7D5F_41B4_BB71CB88A7B1",
   "yaw": 123.4,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.74,
   "distance": 50,
   "hfov": 12.33
  }
 ],
 "id": "overlay_32B5922A_2188_E75F_41A7_5FABA631EB65",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.67,
   "yaw": -6.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.24
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_017562B4_1942_12B4_4184_3694CBCF9104",
   "yaw": -6.22,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.24,
   "distance": 100,
   "hfov": 7.67
  }
 ],
 "id": "overlay_16911C37_1942_15B4_419F_734839E9F2E1",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6, this.camera_39B7D1E1_23FD_A5AE_41B3_BD3BD27A9575); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 114.34,
   "yaw": 3.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ]
   },
   "pitch": 2.17
  }
 ],
 "id": "overlay_1691B648_1942_75DC_41B4_6BB200F20BD7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "htmlText_051C51C6_2288_396F_41A5_946075A3E830",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A swelling clay that absorbs a lot of water and is mostly made of montmorillonite. It is typically formed by the weathering of volcanic ash in seawater.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText64268"
 },
 "shadow": false
},
{
 "id": "image_uid3B3A7015_23FD_A296_419D_0B3D1B82DBAC_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_0823CBA5_2288_692D_414C_7827EED6137A.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19434"
 },
 "shadow": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_136231E1_193E_0ECC_41AB_D3B79019843A, this.camera_3A4B3154_23FD_A295_41A1_40A3643D55C7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 95.5,
   "yaw": -92.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_1_HS_0_1_0_map.gif",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.44
  }
 ],
 "id": "overlay_03FAAF41_2298_2964_41A1_9892F7A46070",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.22,
   "yaw": -109.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.43
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_048F7DAB_22BF_E924_41B0_6CB100940899",
   "yaw": -109.23,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.43,
   "distance": 100,
   "hfov": 12.22
  }
 ],
 "id": "overlay_3FA65738_2288_7923_419A_94A546C71A7C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_13625F11_193E_334C_41A8_E0821E6DDBD4, this.camera_3A5D7146_23FD_A2F5_41BC_6683D01270A7); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 127.13,
   "yaw": 90.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ]
   },
   "pitch": 6.85
  }
 ],
 "id": "overlay_03826389_2288_F9E7_4181_1B08CEFBB259",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.84,
   "yaw": 93.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.71
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_04880DAB_22BF_E924_41A0_D11326279A80",
   "yaw": 93.26,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.71,
   "distance": 100,
   "hfov": 13.84
  }
 ],
 "id": "overlay_005EF54B_2288_5965_41A6_6969A853A4A8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_1350302A_193E_0D5D_41A0_84FB09986059_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "htmlText_38292D22_2278_1D4F_41B1_4D3DBDCC2360",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A pinkish-red gemstone and a variant of the mineral corundum.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText23231"
 },
 "shadow": false
},
{
 "id": "image_uid3B3C201A_23FD_A29D_41C0_EB12A8F89069_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_38F8A8BC_2278_24BB_41A1_D95964268337.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19436"
 },
 "shadow": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1363DB2A_193E_135C_41B0_C314112FDF4E, this.camera_3AD5B0EC_23FD_A3B5_416B_064AAC3AA20B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_3D7D4806_2298_56EF_41A9_4AB206630E57",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.88,
   "yaw": 151.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.1
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_048D3DA9_22BF_E924_41C0_2619948A2F5E",
   "yaw": 151.67,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.1,
   "distance": 100,
   "hfov": 11.88
  }
 ],
 "id": "overlay_3F174982_2298_29E7_41B7_10D8490D9B38",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_136231E1_193E_0ECC_41AB_D3B79019843A, this.camera_3AC420F8_23FD_A39D_41C0_04CBA24698ED); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_3D243865_229B_D72D_41A3_06B0B873F7E9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.11,
   "yaw": -110.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_3_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.7
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_048DCDA9_22BF_E924_41BD_913D0BA6C98B",
   "yaw": -110.11,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.7,
   "distance": 100,
   "hfov": 12.11
  }
 ],
 "id": "overlay_0210017A_2298_3927_4186_CD6A1EA3DCF3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 21.57,
   "yaw": 129.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_0_HS_4_1_0_map.gif",
      "width": 184,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ]
   },
   "pitch": -8.73
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_317662AA_2355_A7BD_41B4_D0617F32688C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_13625F11_193E_334C_41A8_E0821E6DDBD4, this.camera_3A98E097_23FD_A392_41A9_5FA74FCF92B6); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 85.5,
   "yaw": 138.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0_HS_0_1_0_map.gif",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 5.34
  }
 ],
 "id": "overlay_02F2738D_2288_D9FC_41BE_737A8BB04B5B",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 15.37,
   "yaw": 161.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.34
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0489DDAC_22BF_E93C_41B3_22EE052DE1C8",
   "yaw": 161.21,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.34,
   "distance": 100,
   "hfov": 15.37
  }
 ],
 "id": "overlay_01CB8299_2288_5BE4_41BF_AC2D8F3B00CB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 98.82,
   "yaw": -121.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_1_HS_2_1_0_map.gif",
      "width": 169,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.27
  }
 ],
 "id": "overlay_0492C5DD_2288_791D_41BF_FA82AA109C68",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 15.3,
   "yaw": -112.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.44
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_048A5DAD_22BF_E93C_41B6_C008612778C3",
   "yaw": -112.74,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.44,
   "distance": 100,
   "hfov": 15.3
  }
 ],
 "id": "overlay_05A2DAE5_2289_EB2D_4161_67DB38DE884A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_13624820_193E_7D4C_4188_B33125DD452E, this.camera_3A9210A9_23FD_A3BF_41B5_006D10301D23); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 123.7,
   "yaw": -2.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_1_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 195
     }
    ]
   },
   "pitch": 2.72
  }
 ],
 "id": "overlay_059D6A6B_2288_2B25_41BF_9CBDF85B1744",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.82,
   "yaw": -23.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_1_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.54
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_048AEDAE_22BF_E93F_41A1_AE78EDD495C0",
   "yaw": -23.81,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.54,
   "distance": 100,
   "hfov": 14.82
  }
 ],
 "id": "overlay_0410719D_2288_D91C_41BB_AC5F7D0327D5",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_087F8B39_2288_2925_41C0_4F33E9D23FE2, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.47,
   "yaw": 82.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0_HS_6_1_0_map.gif",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -9.73
  }
 ],
 "id": "overlay_0499194A_2288_2967_41B5_5A07198DF61A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.78,
   "yaw": 83.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.82
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_065B0596_2298_59EF_418A_8073D7DED5A8",
   "yaw": 83.91,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.82,
   "distance": 100,
   "hfov": 5.78
  }
 ],
 "id": "overlay_036FE464_2298_3F23_41B8_0A46B297A6AE",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6, this.camera_3987A1CA_23FD_A5F2_41AD_B0113A0AEE4A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 125.35,
   "yaw": 115.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ]
   },
   "pitch": 10.91
  }
 ],
 "id": "overlay_01008EE4_22B8_EB23_41AE_41B5C75DB48B",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.97,
   "yaw": 135.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.16
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_03C6E48E_2288_3FFC_41B4_A8AFCAB02671",
   "yaw": 135.34,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.16,
   "distance": 100,
   "hfov": 11.97
  }
 ],
 "id": "overlay_04A0FF74_22B9_E923_419D_5ED64C9B3BB8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6, this.camera_398811B3_23FD_A592_4182_28BD37EEE773); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_02E8110B_22B8_76E5_41B4_B112876C2405",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.73,
   "yaw": -36.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0_HS_3_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.81
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_03C7348F_2288_3FFC_419A_E8E03F499CDE",
   "yaw": -36.88,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.81,
   "distance": 100,
   "hfov": 11.73
  }
 ],
 "id": "overlay_09546407_22B8_5EED_41BD_D39EF0A27249",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_13624820_193E_7D4C_4188_B33125DD452E_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1363DB2A_193E_135C_41B0_C314112FDF4E, this.camera_3A3F412F_23FD_A2B3_4195_C4430E76D60E); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 65.97,
   "yaw": -146.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_1_HS_0_1_0_map.gif",
      "width": 128,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 12.51
  }
 ],
 "id": "overlay_3D2A546F_2299_FF3D_41BA_3D5D65EDB498",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.99,
   "yaw": -139,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.17
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_04932DA6_22BF_E92F_41AD_5D436CFFD222",
   "yaw": -139,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.17,
   "distance": 100,
   "hfov": 14.99
  }
 ],
 "id": "overlay_3F9CDBFD_2298_291C_41AF_5C6967F0F15B",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11, this.camera_3A2EF13B_23FD_A293_4198_E28C841BF563); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 128.47,
   "yaw": -18.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ]
   },
   "pitch": 14.72
  }
 ],
 "id": "overlay_02EEE27D_2298_3B1D_41A4_302000C19BFA",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.85,
   "yaw": -21.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.09
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0493ADA7_22BF_E92C_41BF_05F7EFC3AEB7",
   "yaw": -21.68,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.09,
   "distance": 100,
   "hfov": 10.85
  }
 ],
 "id": "overlay_028F3386_2298_59EF_41A5_C1B424EEF310",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_13575006_193E_0D54_41AE_0AA09D974DBD_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "htmlText_362EE329_2278_E55A_41BF_F4B8796A9871",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;font-family:'Montserrat Medium';\">A pinkish-red gemstone and a variant of the mineral corundum.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText20933"
 },
 "shadow": false
},
{
 "id": "image_uid3B392015_23FD_A296_41A2_D22704B0C205_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_38F8A8BC_2278_24BB_41A1_D95964268337.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19433"
 },
 "shadow": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1350302A_193E_0D5D_41A0_84FB09986059, this.camera_39F31247_23FD_A6F3_41B9_2A437150CF8C); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 49.76,
   "yaw": 157.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_1_HS_0_1_0_map.gif",
      "width": 110,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 10.22
  }
 ],
 "id": "overlay_03081051_2288_5764_41B3_83C3F2CC7139",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1350302A_193E_0D5D_41A0_84FB09986059, this.camera_39E3625D_23FD_A697_41BE_A4F182EEBD75); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.55,
   "yaw": -167.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_1_HS_1_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 10.24
  }
 ],
 "id": "overlay_04A20334_2288_5923_41AE_7642D3735383",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6, this.camera_39C5D22C_23FD_A6B5_41AD_16F561E503E8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 103.36,
   "yaw": -88.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_1_HS_2_1_0_map.gif",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 7.06
  }
 ],
 "id": "overlay_02E88555_2288_596D_4196_489B919F7C1C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.79,
   "yaw": -97.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.93
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_04890DAC_22BF_E93C_41BC_8D8E3459BA3D",
   "yaw": -97.8,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.93,
   "distance": 100,
   "hfov": 14.79
  }
 ],
 "id": "overlay_0269DF61_2288_E925_41B6_449907DFFBD5",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.72,
   "yaw": 173.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_1_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.24
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_04893DAC_22BF_E93C_41A2_06380F6ECF43",
   "yaw": 173.85,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.24,
   "distance": 100,
   "hfov": 13.72
  }
 ],
 "id": "overlay_00290CD9_2289_EF65_41B4_3569867F535A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_13575006_193E_0D54_41AE_0AA09D974DBD, this.camera_3B466061_23FD_A2AE_4182_72C94CBF3815); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 63.92,
   "yaw": -151.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_0_1_0_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -9.04
  }
 ],
 "id": "overlay_01DED120_2298_3924_4164_17959759E168",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.09,
   "yaw": -158.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.97
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_048C2DA7_22BF_E92C_41B8_C9FDAD8219A2",
   "yaw": -158.47,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.97,
   "distance": 100,
   "hfov": 13.09
  }
 ],
 "id": "overlay_01B0D624_2299_DB23_41AB_84C573E3A6C3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8, this.camera_3B4B104E_23FD_A2F5_4192_F624979D54E6); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 69.64,
   "yaw": -34.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_2_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.62
  }
 ],
 "id": "overlay_3F11BED8_2298_2B63_41A7_DDE4AD4F24A5",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.79,
   "yaw": -42.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.58
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_048CBDA8_22BF_E924_4175_F09D48A962D4",
   "yaw": -42.42,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.58,
   "distance": 100,
   "hfov": 11.79
  }
 ],
 "id": "overlay_0211410C_2298_56E3_41A0_65E02FE92540",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3122F53F_2354_6293_41AC_E18ED18439C8, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.31,
   "yaw": -15.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -13.63
  }
 ],
 "id": "overlay_328680D9_2355_A39F_41B9_E246939B7CDE",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.87,
   "yaw": -11.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.25
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3499D866_2354_62B5_41BD_EE837396A714",
   "yaw": -11.18,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.25,
   "distance": 100,
   "hfov": 5.87
  }
 ],
 "id": "overlay_31C6C1A7_2353_E5B2_4192_4DBEF977FD9B",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_313DDFDF_235C_9D93_41A7_36B64CCFE3A3, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 45.5,
   "yaw": 18.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_6_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -20.16
  }
 ],
 "id": "overlay_30257F66_235C_7EB5_4174_8F665E579F0E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.67,
   "yaw": 18.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.91
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3BEA6BBA_2354_A59D_4187_1C5A1111238B",
   "yaw": 18.21,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.91,
   "distance": 100,
   "hfov": 5.67
  }
 ],
 "id": "overlay_31A5D8B1_235C_A3AF_41BF_7630E7E14378",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8, this.camera_3AF23103_23FD_A273_41B2_0081D725C8D4); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 71.67,
   "yaw": -146.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_1_HS_0_1_0_map.gif",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.31
  }
 ],
 "id": "overlay_02F8696E_2298_293F_41B0_1F5CEA47E531",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.89,
   "yaw": -172.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.24
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_048E5DAA_22BF_E924_41B9_2C70B077378D",
   "yaw": -172.54,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.24,
   "distance": 100,
   "hfov": 11.89
  }
 ],
 "id": "overlay_00D0FD6F_2298_293D_41B5_7151504250E7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1350302A_193E_0D5D_41A0_84FB09986059, this.camera_3AE2710E_23FD_A272_41B0_23C7F079316C); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 74.15,
   "yaw": 12.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_1_HS_2_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.98
  }
 ],
 "id": "overlay_024AE2FF_2298_5B1D_4197_9933829A72E7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.93,
   "yaw": 2.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.06
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_048EDDAA_22BF_E924_41B5_914EAB121C60",
   "yaw": 2.44,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.06,
   "distance": 100,
   "hfov": 11.93
  }
 ],
 "id": "overlay_0380786B_2298_D725_41B2_4D13D8DE669E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_136231E1_193E_0ECC_41AB_D3B79019843A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "htmlText_32426333_2334_6693_41B0_5378E56202AA",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;font-family:'Montserrat Medium';\">Granite is a color-changing intrusive rock used as dimension stone (building walls, floors, stairs, and pavements) and as an input for construction works.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText5120"
 },
 "shadow": false
},
{
 "id": "image_uid3B30301E_23FD_A295_418E_56E3C32B4776_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_31B449A2_2333_A5AD_41C0_FBDAB8EACC86.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19440"
 },
 "shadow": false
},
{
 "id": "htmlText_313F1FE0_235C_9DAD_41A2_A3AC47353866",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;font-family:'Montserrat Medium';\">Copper is a chemical element with the symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a pinkish-orange color.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText9948"
 },
 "shadow": false
},
{
 "id": "image_uid3B362023_23FD_A2B2_41B1_C4FB252CCF1F_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_31B30D30_235C_62AD_41C1_720264A41A84.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19442"
 },
 "shadow": false
},
{
 "id": "htmlText_3515E86D_2278_23D5_41A8_E9B51DADD28A",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A gem-quality example of the beryl mineral family with a deep, distinctively green hue that is one of the most sought and precious-colored stones.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText25297"
 },
 "shadow": false
},
{
 "id": "image_uid3B3DC01A_23FD_A29D_41A0_72562CDC16B8_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_366ABE82_2288_1F4F_41B7_CB51E51F48DB.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19437"
 },
 "shadow": false
},
{
 "id": "htmlText_058B3015_2298_56ED_41B0_24CEA16DDF66",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Sedimentary rocks composed of the mineral calcite (calcium carbonate, CaC03), which forms from the beds of evaporating oceans and lakes as well as marine animal shells.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText68297"
 },
 "shadow": false
},
{
 "id": "image_uid3B3BC017_23FD_A293_41B4_B4CD474EA6B9_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_05A360CD_2288_377D_41A9_9E6B3ABE2E1B.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19435"
 },
 "shadow": false
},
{
 "id": "htmlText_312CA53F_2354_6293_41B1_2142F5D21271",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Gold is a chemical element with the symbol Au (from Latin: aurum) and atomic number 79, making it one of the higher atomic number elements that occur naturally. It is a bright, slightly orange-yellow, dense, soft, malleable, and ductile metal in a pure form. Chemically, gold is a transition metal and a group 11 element. It is one of the least reactive chemical elements and is solid under standard conditions. </SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText7360"
 },
 "shadow": false
},
{
 "id": "image_uid3B36D022_23FD_A2AD_41A5_06BF6BBFC5EF_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_300BDE13_2355_FE92_41BA_72763EFD989D.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19441"
 },
 "shadow": false
},
{
 "id": "htmlText_353EB3FD_2288_24B5_41B8_34C6856A9B35",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A semi-precious beryl that ranges from pale blue to light green. When set in exquisite jewelry, it is usually coupled with silver or white gold.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText28958"
 },
 "shadow": false
},
{
 "id": "image_uid3B3ED01C_23FD_A295_41A9_FBACFF3BFBC2_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_38557D36_2288_1DB7_41A1_10F411CDD9A8.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19438"
 },
 "shadow": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "horizontalAlign": "center",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_13623A00_193E_1D4C_41A6_216555EDCA88, this.camera_3A112119_23FD_A29F_41A4_59C27ACF53A1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90.66,
   "yaw": -139.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_1_HS_0_1_0_map.gif",
      "width": 182,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 15.54
  }
 ],
 "id": "overlay_0061CBA0_2288_6923_41AA_99678D5FE708",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_13575006_193E_0D54_41AE_0AA09D974DBD, this.camera_3A00D124_23FD_A2B5_41B7_F1462CA4E5E2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 60.36,
   "yaw": 81.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_1_HS_1_1_0_map.gif",
      "width": 160,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 13.83
  }
 ],
 "id": "overlay_3F55322A_2288_5B24_41BE_91E3350A3961",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.63,
   "yaw": 91.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.27
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0491DDA5_22BF_E92D_41BC_DF0A6D2E3BE0",
   "yaw": 91.93,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.27,
   "distance": 100,
   "hfov": 7.63
  }
 ],
 "id": "overlay_00CAE0D0_2288_3764_41A2_0B2CAAA1409F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 57.93,
   "yaw": -14.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_1_HS_3_1_0_map.gif",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 15.81
  }
 ],
 "id": "overlay_3F0C712D_2288_593D_41BB_E5E5DCC7AEDD",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.58,
   "yaw": -12.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_1_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.65
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_04926DA5_22BF_E92D_41A3_8D8617D8BFF2",
   "yaw": -12.88,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.65,
   "distance": 100,
   "hfov": 10.58
  }
 ],
 "id": "overlay_009255F0_2289_F924_41AC_6E7F79DC7AC7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.62,
   "yaw": -164.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_1_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.67
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_04929DA5_22BF_E92D_41B3_5BB53393655A",
   "yaw": -164.12,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.67,
   "distance": 100,
   "hfov": 12.62
  }
 ],
 "id": "overlay_3F527419_2288_3EE5_41B0_467270273376",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "htmlText_087DAB39_2288_2925_41BE_86A0661173FF",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;font-family:'Montserrat Medium';\">Calub Field, Ogaden Basin</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;font-family:'Montserrat Medium';\">Ethiopia</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText65427"
 },
 "shadow": false
},
{
 "id": "image_uid3B2D7028_23FD_A2BD_41A9_98DD7BB8553C_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_0946406D_2298_773D_41B4_B361EFA7DA7E.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19443"
 },
 "shadow": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17, this.camera_39A561FD_23FD_A596_41A9_5B1AD32248AE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_332757B4_2188_2D4B_4189_99929724C702",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.14,
   "yaw": 9.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.76
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_345BBF8A_2188_7D5F_4191_5BE2CDC88CAB",
   "yaw": 9.23,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.76,
   "distance": 100,
   "hfov": 11.14
  }
 ],
 "id": "overlay_33915DA9_2188_7D5D_41BE_CBAEF42C6D85",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C, this.camera_39D5A215_23FD_A697_41AA_3CFF47BC141A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 82.97,
   "yaw": -69.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_2_1_6_map.gif",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 20.58
  }
 ],
 "id": "overlay_33678007_2188_2355_41AB_4F973C6AE635",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 33.07,
   "yaw": 163.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_3_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ]
   },
   "pitch": -18.65
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_33194F9D_2188_1D75_41BE_749C18533653",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_34CD421F_2188_2775_4191_A51B4C753446, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.66,
   "yaw": -163.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 126
     }
    ]
   },
   "pitch": -17.65
  }
 ],
 "id": "overlay_347639B0_2189_E54B_413F_4E03CD6D40A0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -169.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.08
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_35B01FE6_2288_FCD7_41C0_378A4E25AD8F",
   "yaw": -169.3,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.08,
   "distance": 100,
   "hfov": 6.98
  }
 ],
 "id": "overlay_3452F01B_2188_237D_41B9_DF5F5AD13BB4",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_362C2329_2278_E55A_41A8_D259A52601A5, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.39,
   "yaw": -131.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_6_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 109
     }
    ]
   },
   "pitch": -14.01
  }
 ],
 "id": "overlay_353E275A_2278_6DFF_4198_D25F40BF7715",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.1,
   "yaw": -129.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.81
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_35B06FE7_2288_FCD5_41A9_1D65E249B9F3",
   "yaw": -129.61,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.81,
   "distance": 100,
   "hfov": 7.1
  }
 ],
 "id": "overlay_34C0A4DA_2278_2CFF_41B3_EB3D0DD65A3C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_051E21C6_2288_396F_41A9_AFF969AAF9DE, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 36.52,
   "yaw": 75.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_8_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -16.89
  }
 ],
 "id": "overlay_03453CEC_2288_6F3C_41A2_21B181966DB8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.52,
   "yaw": 80.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.02
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_02FB0409_2288_5EE5_41AF_5EE95B2D8E9B",
   "yaw": 80.64,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.02,
   "distance": 100,
   "hfov": 6.52
  }
 ],
 "id": "overlay_04DB7F96_2298_29EF_41B5_6708694EC778",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_058AE00F_2298_56FD_41A7_6F663931C56C, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.87,
   "yaw": 47.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_10_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ]
   },
   "pitch": -12.37
  }
 ],
 "id": "overlay_012E8799_2298_39E4_41A7_2B23F09D6206",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.74,
   "yaw": 46.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_11_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.04
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B0CB470_2288_DF24_41B6_74F6B83A06CD",
   "yaw": 46.68,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.04,
   "distance": 100,
   "hfov": 4.74
  }
 ],
 "id": "overlay_041C8D2F_2288_293D_41AA_F5DDBBBE169E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.75,
   "yaw": -85.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_12_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.64
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_091024E9_2278_DF24_41BB_0FAE1C36AA8C",
   "yaw": -85.4,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.64,
   "distance": 100,
   "hfov": 14.75
  }
 ],
 "id": "overlay_08F851BD_2288_791C_4195_09E6282EC3B4",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_1352712C_193E_0F54_419F_7553D13BC24C_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "htmlText_34A3420B_23CC_A673_419A_836DBE3E0B6D",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A cement is a binder, a substance used for construction that sets, hardens, and adheres to other materials to bind them together.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText16398"
 },
 "shadow": false
},
{
 "id": "image_uid3B030008_23FD_A27E_41A7_8E6787F024DD_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_34A721DE_23F3_A595_41C0_C50EC2D0C7FD.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19430"
 },
 "shadow": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11, this.camera_393F12A5_23FD_A7B7_4192_11557BB0A227); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_39D98701_2288_7AE5_4192_E3D079C9A900",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 15,
   "yaw": -46.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.7
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3B4428A9_22F8_5725_416A_0E116AA8B9D8",
   "yaw": -46.42,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.7,
   "distance": 100,
   "hfov": 15
  }
 ],
 "id": "overlay_37395E00_2288_2AE3_419D_785DC3EBB160",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1351283A_193E_7DBC_41B1_A46280A34016, this.camera_3911227A_23FD_A69D_4195_45628AF9CD09); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 57.33,
   "yaw": -150.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_2_1_6_map.gif",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.96
  }
 ],
 "id": "overlay_3893E5F3_2287_D925_41AF_DCB5D098BDFC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.33,
   "yaw": -172.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_3_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.58
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3B4488AF_22F8_573D_41B5_BA2E8368B3C5",
   "yaw": -172.91,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.58,
   "distance": 100,
   "hfov": 13.33
  }
 ],
 "id": "overlay_3AD1ED47_22F8_E96D_4192_70DE404B2FC3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1351283A_193E_7DBC_41B1_A46280A34016, this.camera_39014290_23FD_A66E_41A4_950D187EC2B4); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 80.09,
   "yaw": 143.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_4_1_6_map.gif",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 9.46
  }
 ],
 "id": "overlay_3820DB30_22F8_2924_41A8_4637041E265F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_13623A00_193E_1D4C_41A6_216555EDCA88_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_13623A00_193E_1D4C_41A6_216555EDCA88, this.camera_3A7BC162_23FD_A2AD_417B_09BF0397F7F3); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_37BAE8D6_2298_24F7_41B1_EB739BCF3D3E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.12,
   "yaw": 129.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.57
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3B4508A8_22F8_5723_4190_D63F85F326D3",
   "yaw": 129.06,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.57,
   "distance": 100,
   "hfov": 12.12
  }
 ],
 "id": "overlay_36695831_2288_634C_41BB_146A8F996078",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6, this.camera_3A6A1180_23FD_A26E_41BC_082E221FCD3A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 109.34,
   "yaw": -63.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_2_1_0_map.gif",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.76
  }
 ],
 "id": "overlay_3AD38653_2289_EFCE_4195_989FB24A6F73",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.12,
   "yaw": -57.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_3_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.99
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3815373E_22F8_D91C_41B3_68CF37E2E04E",
   "yaw": -57.11,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.99,
   "distance": 100,
   "hfov": 10.12
  }
 ],
 "id": "overlay_39F1725C_2288_27FB_41B6_6E1CF2709474",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_1351283A_193E_7DBC_41B1_A46280A34016_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_335A1660_2334_EEAD_41B3_9BD67001DFA4, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.73,
   "yaw": -46.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_4_1_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 15.02
  }
 ],
 "id": "overlay_2C0152B9_233C_A79F_41BC_1FCC817D2145",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.78,
   "yaw": -46.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.06
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3483B85A_2354_629D_416B_563C49C0C32A",
   "yaw": -46.02,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 15.06,
   "distance": 100,
   "hfov": 4.78
  }
 ],
 "id": "overlay_32173F92_2334_9E6D_41B0_5F7914DDCD67",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_32459333_2334_6693_41BC_E4EF453F9543, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.42,
   "yaw": 21.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_6_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 8.85
  }
 ],
 "id": "overlay_313F5FBA_2334_FD9D_41B7_0EE0B0D8D9EF",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.57,
   "yaw": 20.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.17
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_349C885B_2354_6293_41C1_4C7440125077",
   "yaw": 20.63,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 13.17,
   "distance": 100,
   "hfov": 3.57
  }
 ],
 "id": "overlay_31472802_234C_E26D_41B5_D57377F0CCD1",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1352712C_193E_0F54_419F_7553D13BC24C, this.camera_39980197_23FD_A592_41B9_2CA69A0F22E4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 87.54,
   "yaw": 84.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_0_1_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 6.98
  }
 ],
 "id": "overlay_3476ABE8_2278_24DB_41A8_BF8E177D2DBB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.91,
   "yaw": 86.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.61
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_35B19FE8_2288_FCDB_41BE_1E48C2A73FA6",
   "yaw": 86.73,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.61,
   "distance": 100,
   "hfov": 10.91
  }
 ],
 "id": "overlay_34E2769D_2278_2F75_41AF_BA1E01251BBB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_382ACD22_2278_1D4F_41BF_CB44141484B4, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.28,
   "yaw": 136.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ]
   },
   "pitch": -13.63
  }
 ],
 "id": "overlay_3696E1CB_2278_24DD_41AC_48531DACD5D0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3514386D_2278_23D5_41B7_2F241A7CCE44, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.14,
   "yaw": -164.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "pitch": -18.4
  }
 ],
 "id": "overlay_34F1DA83_2278_274D_41BF_AA734E1565CD",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.8,
   "yaw": 136.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.95
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_35B12FE9_2288_FCDD_41B6_2D149DD707ED",
   "yaw": 136.6,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.95,
   "distance": 100,
   "hfov": 5.8
  }
 ],
 "id": "overlay_357C17FB_2278_ECBD_41B8_C8A2EACD23B5",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.69,
   "yaw": -164.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.12
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_35B15FEA_2288_FCDF_41B1_67C8E94E64B0",
   "yaw": -164.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.12,
   "distance": 100,
   "hfov": 5.69
  }
 ],
 "id": "overlay_38D071A7_2278_6555_41B0_D77CA26F5A3B",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3530F3FC_2288_24BB_41A0_617DAD32C139, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.68,
   "yaw": -131.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_6_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ]
   },
   "pitch": -13
  }
 ],
 "id": "overlay_389565AC_228B_ED5B_41BE_AF1A03641BD0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.08,
   "yaw": -126.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.18
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3B46D8A7_22F8_572D_41B2_3C8201588AEF",
   "yaw": -126.47,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.18,
   "distance": 100,
   "hfov": 6.08
  }
 ],
 "id": "overlay_398AD969_2299_E5DD_41B4_9CDF2371083A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "htmlText_34CB6220_2188_274B_4194_FA02B62F48B2",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;font-family:'Montserrat Medium';\">A multi-colored gemstone and consist of small spheres of silica arranged in a regular pattern, with water between the spheres.</SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText15111"
 },
 "shadow": false
},
{
 "id": "image_uid3B39D014_23FD_A296_418F_8B05B19532E7_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_34DE369B_2188_2F7D_41B4_0112A31B9C4F.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19432"
 },
 "shadow": false
},
{
 "id": "htmlText_0F9E520D_1942_0D54_41B3_6FDAF3552E02",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vmin;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.39vmin;font-family:'Montserrat Medium';\">A collection of minerals made entirely of silicon and oxygen. Despite its basic chemical formula, Si02, silica may be found in a variety of forms and crystalline formations.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.39vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.02vmin;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.39vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.02vmin;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.39vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.02vmin;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.39vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.02vmin;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.76vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.02vmin;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.67vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.02vmin;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText10420"
 },
 "shadow": false
},
{
 "id": "image_uid3B07F012_23FD_A26D_41A9_8D700868D535_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_3783254E_2188_2DD7_41AE_4E41BE914DB6.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19431"
 },
 "shadow": false
},
{
 "id": "htmlText_335A3661_2334_EEAF_4199_4D865024B4DF",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Marble is a metamorphosed form of limestone used as dimension stone (building walls, floors, stairs, and pavements) and as a building material.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText3414"
 },
 "shadow": false
},
{
 "id": "image_uid3B30F01E_23FD_A295_41AD_408D3CD6BA26_1",
 "backgroundOpacity": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_31689229_2337_A6BE_41AB_1C257D97BFA0.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "minWidth": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19439"
 },
 "shadow": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 100.41,
   "yaw": -121.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_0_1_0_map.gif",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 12.47
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_0B353BA0_1942_134C_419F_827A3947C4F7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17, this.camera_3A8F90B6_23FD_A392_41A3_8E045DD7B830); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 113.64,
   "yaw": 129.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_1_1_0_map.gif",
      "width": 160,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 13.31
  }
 ],
 "id": "overlay_095D50C0_1942_0ECC_41B0_4DDAB2051387",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.38,
   "yaw": 99.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.85
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_09B6454E_1E98_2DD7_419E_D309A3417D29",
   "yaw": 99.87,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.85,
   "distance": 100,
   "hfov": 8.38
  }
 ],
 "id": "overlay_0834C0FB_1942_0EBC_41A5_0B35E0DF18BF",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF, this.camera_3AA7A0DE_23FD_A392_41A3_3BD573EB1FAE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_3_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_3_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_3_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_3_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_10946E3D_1EB8_1FBA_4159_AD732CF653A0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.39,
   "yaw": 3.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_4_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.4
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_09B7D54F_1E98_2DD5_41BE_7F0826303DC5",
   "yaw": 3.23,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.4,
   "distance": 100,
   "hfov": 9.39
  }
 ],
 "id": "overlay_102AF465_1EB9_E3D5_41BB_152C811BD03A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1351283A_193E_7DBC_41B1_A46280A34016, this.camera_3ABAA0C3_23FD_A3F2_41BC_B639B117CCCB); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 64.61,
   "yaw": -103.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_5_1_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 13.15
  }
 ],
 "id": "overlay_3851C998_2298_257B_41BD_FAB4775AC30F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.95,
   "yaw": -113.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.1
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_381DF731_22F8_D924_41BC_834994F49ED7",
   "yaw": -113.03,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.1,
   "distance": 100,
   "hfov": 9.95
  }
 ],
 "id": "overlay_36214F1A_2298_1D7F_41B3_631E200BF930",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_13624820_193E_7D4C_4188_B33125DD452E, this.camera_3AB730CF_23FD_A3F3_41BC_56CD8FDC01DE); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 43.71,
   "yaw": 154,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_7_1_0_map.gif",
      "width": 169,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 8.89
  }
 ],
 "id": "overlay_006574C3_2288_FF65_4189_CC720AD6866C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.86,
   "yaw": 153.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_8_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.56
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_049EDD94_22BF_E9EC_419E_39000A9F33BA",
   "yaw": 153.47,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.56,
   "distance": 100,
   "hfov": 8.86
  }
 ],
 "id": "overlay_3FC60CE8_2288_6F24_418D_60040D25A001",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "hfov": 45,
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_34BD020B_23CC_A673_41B7_8A4D3CC7A388, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.79,
   "yaw": -148.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_9_1_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 19.28
  }
 ],
 "id": "overlay_38040FC7_23CC_9DF2_41A6_5958E9EEF5E5",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -152.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 22.17
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3B06C012_23FD_A26D_41B0_510855289DE0",
   "yaw": -152.62,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 22.17,
   "distance": 100,
   "hfov": 6.98
  }
 ],
 "id": "overlay_3B8F6260_23FC_66AD_4144_B77A0C8992E0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 110,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "center",
 "class": "Container",
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "layout": "vertical",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_09B7554F_1E98_2DD5_4195_D35D96E059E9",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_0A1D8FE0_1946_32CC_41A7_35D731ED4B3E",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_345BCF8A_2188_7D5F_41B4_BB71CB88A7B1",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1362E5EE_193E_36D7_41B7_94BB6E0E7E17_0_HS_5_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_017562B4_1942_12B4_4184_3694CBCF9104",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1246CDF1_193E_16CC_41A8_34FF6899EFFF_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_048F7DAB_22BF_E924_41B0_6CB100940899",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_04880DAB_22BF_E924_41A0_D11326279A80",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1350302A_193E_0D5D_41A0_84FB09986059_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_048D3DA9_22BF_E924_41C0_2619948A2F5E",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_048DCDA9_22BF_E924_41BD_913D0BA6C98B",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1353E4DE_193F_F6F4_41A5_D64DD28DA8E8_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_0489DDAC_22BF_E93C_41B3_22EE052DE1C8",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_048A5DAD_22BF_E93C_41B6_C008612778C3",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_048AEDAE_22BF_E93F_41A1_AE78EDD495C0",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_065B0596_2298_59EF_418A_8073D7DED5A8",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_134F5E38_193E_15BC_41B7_B01E5521A4A6_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_03C6E48E_2288_3FFC_41B4_A8AFCAB02671",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_03C7348F_2288_3FFC_419A_E8E03F499CDE",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_13624820_193E_7D4C_4188_B33125DD452E_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_04932DA6_22BF_E92F_41AD_5D436CFFD222",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_0493ADA7_22BF_E92C_41BF_05F7EFC3AEB7",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_13575006_193E_0D54_41AE_0AA09D974DBD_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_04890DAC_22BF_E93C_41BC_8D8E3459BA3D",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_04893DAC_22BF_E93C_41A2_06380F6ECF43",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_13625F11_193E_334C_41A8_E0821E6DDBD4_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_048C2DA7_22BF_E92C_41B8_C9FDAD8219A2",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_048CBDA8_22BF_E924_4175_F09D48A962D4",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3499D866_2354_62B5_41BD_EE837396A714",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3BEA6BBA_2354_A59D_4187_1C5A1111238B",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1363DB2A_193E_135C_41B0_C314112FDF4E_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_048E5DAA_22BF_E924_41B9_2C70B077378D",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_048EDDAA_22BF_E924_41B5_914EAB121C60",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_136231E1_193E_0ECC_41AB_D3B79019843A_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_0491DDA5_22BF_E92D_41BC_DF0A6D2E3BE0",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_04926DA5_22BF_E92D_41A3_8D8617D8BFF2",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_04929DA5_22BF_E92D_41B3_5BB53393655A",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1354C5EB_193E_36DC_4191_E8B48F4CBC11_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_345BBF8A_2188_7D5F_4191_5BE2CDC88CAB",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_35B01FE6_2288_FCD7_41C0_378A4E25AD8F",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_35B06FE7_2288_FCD5_41A9_1D65E249B9F3",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_02FB0409_2288_5EE5_41AF_5EE95B2D8E9B",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_9_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_0B0CB470_2288_DF24_41B6_74F6B83A06CD",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_11_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_091024E9_2278_DF24_41BB_0FAE1C36AA8C",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1352712C_193E_0F54_419F_7553D13BC24C_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3B4428A9_22F8_5725_416A_0E116AA8B9D8",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3B4488AF_22F8_573D_41B5_BA2E8368B3C5",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_13623A00_193E_1D4C_41A6_216555EDCA88_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3B4508A8_22F8_5723_4190_D63F85F326D3",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3815373E_22F8_D91C_41B3_68CF37E2E04E",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3483B85A_2354_629D_416B_563C49C0C32A",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_349C885B_2354_6293_41C1_4C7440125077",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1351283A_193E_7DBC_41B1_A46280A34016_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_35B19FE8_2288_FCDB_41BE_1E48C2A73FA6",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_35B12FE9_2288_FCDD_41B6_2D149DD707ED",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_35B15FEA_2288_FCDF_41B1_67C8E94E64B0",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3B46D8A7_22F8_572D_41B2_3C8201588AEF",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_13621C4E_193E_15D4_4164_C5E5EFD3858C_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_09B6454E_1E98_2DD7_419E_D309A3417D29",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_09B7D54F_1E98_2DD5_41BE_7F0826303DC5",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_381DF731_22F8_D924_41BC_834994F49ED7",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_049EDD94_22BF_E9EC_419E_39000A9F33BA",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_3B06C012_23FD_A26D_41B0_510855289DE0",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_135E78FA_193E_1EBC_41AB_B0ADE307C4C6_0_HS_10_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
}],
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "class": "Player",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; }
 },
 "contentOpaque": false,
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
