/* eslint-disable */
const Cesium = require('cesium/Cesium')
const Utils = function() {
  var _0x10ec70 = {
    'mOBQF': 'zhangti',
    'cFJLL': function(_0x1d9d40, _0x3ee28e) {
      return _0x1d9d40(_0x3ee28e)
    },
    'xeKNC': '未获取到viewer对象!',
    'lePZc': '请检查\x20Cesium\x20是否初始化\x20!!',
    'oRaDA': function(_0x1a8533, _0x1c3fc7) {
      return _0x1a8533 !== _0x1c3fc7
    },
    'CrYaZ': 'undefined',
    'imYNK': 'examples/images/SkyBox/00h+00.jpg',
    'XjCgo': 'examples/images/SkyBox/12h+00.jpg',
    'TMtMZ': 'examples/images/SkyBox/06h+00.jpg',
    'uXasm': 'examples/images/SkyBox/18h+00.jpg',
    'jjquy': 'examples/images/SkyBox/06h+90.jpg',
    'aZPds': 'examples/images/SkyBox/06h-90.jpg',
    'xjkyB': 'examples/images/SkyBox/Version2_dark_px.jpg',
    'dIhVL': 'examples/images/SkyBox/Version2_dark_mx.jpg',
    'lxuEW': 'examples/images/SkyBox/Version2_dark_py.jpg',
    'rTnKM': 'examples/images/SkyBox/Version2_dark_my.jpg',
    'VaZJR': 'examples/images/SkyBox/Version2_dark_pz.jpg',
    'kCjTq': 'examples/images/SkyBox/Version2_dark_mz.jpg',
    'sCHGe': 'examples/images/SkyBox/tycho2t3_80_pxs.jpg',
    'EASuF': 'examples/images/SkyBox/tycho2t3_80_mxs.jpg',
    'iAlal': 'examples/images/SkyBox/tycho2t3_80_pys.jpg',
    'MYneU': 'examples/images/SkyBox/tycho2t3_80_mys.jpg',
    'sEjiT': 'examples/images/SkyBox/tycho2t3_80_pzs.jpg',
    'QNUKp': 'examples/images/SkyBox/tycho2t3_80_mzs.jpg',
    'ekjhn': 'examples/images/SkyBox/rightav9.jpg',
    'KcEEI': 'examples/images/SkyBox/leftav9.jpg',
    'HTevu': 'examples/images/SkyBox/frontav9.jpg',
    'uXbsE': 'examples/images/SkyBox/backav9.jpg',
    'ArCuG': 'examples/images/SkyBox/topav9.jpg',
    'lGAHS': 'examples/images/SkyBox/bottomav9.jpg',
    'EJfCy': 'examples/images/SkyBox/SunSetRight.png',
    'hRPHz': 'examples/images/SkyBox/SunSetLeft.png',
    'sPqEx': 'examples/images/SkyBox/SunSetFront.png',
    'AZnlX': 'examples/images/SkyBox/SunSetBack.png',
    'DAtty': 'examples/images/SkyBox/SunSetUp.png',
    'bsnQO': 'examples/images/SkyBox/SunSetDown.png',
    'CJdDL': 'examples/images/SkyBox/Right.jpg',
    'FpCvY': 'examples/images/SkyBox/Left.jpg',
    'VtDQr': 'examples/images/SkyBox/Front.jpg',
    'oGBkq': 'examples/images/SkyBox/Back.jpg',
    'Icyka': 'examples/images/SkyBox/Up.jpg',
    'qAmYp': 'examples/images/SkyBox/Down.jpg',
    'ucGhh': function(_0xd657a7, _0x568191) {
      return _0xd657a7 || _0x568191
    },
    'Tclzb': function(_0x3394fb, _0x1c37ca) {
      return _0x3394fb + _0x1c37ca
    },
    'volgm': function(_0x3e0d6d, _0x2e4416) {
      return _0x3e0d6d + _0x2e4416
    },
    'VeEaZ': function(_0x5585cd, _0x1d1f60) {
      return _0x5585cd + _0x1d1f60
    },
    'uAKwD': 'uniform\x20sampler2D\x20colorTexture;\x0a',
    'qAUWA': 'varying\x20vec2\x20v_textureCoordinates;\x0a',
    'quQCP': 'uniform\x20float\x20scale;\x0a',
    'GvZnD': 'uniform\x20vec3\x20offset;\x0a',
    'itjmr': 'void\x20main()\x20{\x0a',
    'khlLS': '\x20//\x20vec4\x20color\x20=\x20texture2D(colorTexture,\x20v_textureCoordinates);\x0a',
    'hwsPE': '\x20vec4\x20color\x20=\x20texture2D(colorTexture,\x20v_textureCoordinates);\x0a',
    'qtiUZ': '\x20//\x20float\x20gray\x20=\x200.2989*color.r+0.5870*color.g+0.1140*color.b;\x0a',
    'WPbga': '\x20//\x20gl_FragColor\x20=\x20vec4(gray,gray,2.0*(gray+1.0),\x201.0);\x0a',
    'JSDoC': '\x20gl_FragColor\x20=\x20vec4(color.r*0.2,color.g\x20*\x200.4,color.b*0.6,\x201.0);\x0a',
    'Wzjak': 'darkEffect',
    'AdulD': 'uniform\x20sampler2D\x20colorTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20v_textureCoordinates;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20hash(float\x20x){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20fract(sin(x*23.3)*13.13);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main(){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20time\x20=\x20czm_frameNumber\x20/\x2060.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20resolution\x20=\x20czm_viewport.zw;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20c=vec3(.6,.7,.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20a=-.4;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20si=sin(a),co=cos(a);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uv*=mat2(co,-si,si,co);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uv*=length(uv+vec2(0,4.9))*.3+1.;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20v=1.-sin(hash(floor(uv.x*100.))*2.);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c*=v*b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20mix(texture2D(colorTexture,\x20v_textureCoordinates),\x20vec4(c,1),\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'VZJOR': 'rainEffect',
    'rCoQC': 'uniform\x20sampler2D\x20colorTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20v_textureCoordinates;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20snow(vec2\x20uv,float\x20scale){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20time\x20=\x20czm_frameNumber\x20/\x2060.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20w=smoothstep(1.,0.,-uv.y*(scale/10.));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(w<.1)return\x200.;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uv+=time/scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uv.y+=time*2./scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uv.x+=sin(uv.y+time*.5)/scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uv*=scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s=floor(uv),f=fract(uv),p;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20k=3.,d;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=length(p);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20k=min(d,k);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20k=smoothstep(0.,k,sin(f.x+f.y)*0.01);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20k*w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main(){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20resolution\x20=\x20czm_viewport.zw;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20finalColor=vec3(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20c\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c+=snow(uv,30.)*.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c+=snow(uv,20.)*.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c+=snow(uv,15.)*.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c+=snow(uv,10.);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c+=snow(uv,8.);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c+=snow(uv,6.);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c+=snow(uv,5.);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finalColor=(vec3(c));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20mix(texture2D(colorTexture,\x20v_textureCoordinates),\x20vec4(finalColor,1),\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'qBIft': 'snowEffect',
    'qDkuR': function(_0x298454, _0x37fda0) {
      return _0x298454 < _0x37fda0
    },
    'gyhkj': '0|5|3|2|1|4',
    'pFeeX': function(_0x1f2dcd, _0x1fec8d) {
      return _0x1f2dcd < _0x1fec8d
    },
    'BUgUV': function(_0x3e558e, _0x59f459) {
      return _0x3e558e instanceof _0x59f459
    },
    'wUyiv': function(_0x2b46bb, _0x3607e0) {
      return _0x2b46bb / _0x3607e0
    },
    'AjQOd': function(_0x9abc8e, _0xe1cdc3) {
      return _0x9abc8e / _0xe1cdc3
    },
    'DTTee': function(_0x1bd73b, _0x7a90e8) {
      return _0x1bd73b * _0x7a90e8
    },
    'rYpSw': function(_0x5c6872, _0x103cae) {
      return _0x5c6872 * _0x103cae
    },
    'waYOL': function(_0x3f39e6, _0x2a604f) {
      return _0x3f39e6 * _0x2a604f
    },
    'vGcYG': function(_0x55a095, _0x55a203) {
      return _0x55a095 / _0x55a203
    },
    'nRQHh': function(_0xa623ea, _0xbccb60) {
      return _0xa623ea * _0xbccb60
    },
    'AOUFB': function(_0x270870, _0x1a69b9) {
      return _0x270870 / _0x1a69b9
    },
    'CdJPO': function(_0xacace1, _0x2ac3c8) {
      return _0xacace1 + _0x2ac3c8
    },
    'Rbgth': function(_0x53f86e, _0x584219) {
      return _0x53f86e / _0x584219
    },
    'dixrO': function(_0x32e2ca, _0x578d1d) {
      return _0x32e2ca === _0x578d1d
    },
    'RsiAF': 'function',
    'AXmUJ': function(_0x1fc11a, _0x2e9a7e, _0x5ef2b1) {
      return _0x1fc11a(_0x2e9a7e, _0x5ef2b1)
    },
    'qRJzn': '1|3|2|0|4',
    'Nxrkd': 'examples/images/Textures/lly2.png',
    'SlNhw': '3|4|1|0|2',
    'IUnEJ': function(_0x253359, _0x5c621d) {
      return _0x253359 || _0x5c621d
    },
    'HKTDv': '4|3|0|2|1',
    'YQqwz': function(_0x44a39e, _0x38ffca) {
      return _0x44a39e || _0x38ffca
    },
    'tKKwb': function(_0x4e1453, _0x32a433, _0x145b50) {
      return _0x4e1453(_0x32a433, _0x145b50)
    },
    'XHgEF': function(_0x3c647e) {
      return _0x3c647e()
    },
    'KGQzQ': 'examples/images/ParticleSystem/fire4.png',
    'qbjjX': '2|0|4|3|1',
    'BatQp': function(_0x52d2cb, _0x4d99b1) {
      return _0x52d2cb > _0x4d99b1
    },
    'IPisx': function(_0x36bddb, _0x390f12) {
      return _0x36bddb / _0x390f12
    },
    'tcnKQ': function(_0x3b9d3e, _0x18b1b8) {
      return _0x3b9d3e + _0x18b1b8
    },
    'ToSkp': '0|4|5|3|1|2',
    'fKUux': 'examples/images/ParticleSystem/rain.png',
    'SIAIz': function(_0x1cbaac, _0x2be89b) {
      return _0x1cbaac / _0x2be89b
    },
    'AikUO': '1|6|0|3|4|5|2',
    'ZRrjP': 'examples/images/环状扫描纹理3.jpg',
    'QUhKO': '6|4|0|3|1|5|7|2',
    'cFZRp': function(_0x2a767b, _0x71b9a8) {
      return _0x2a767b - _0x71b9a8
    },
    'qptzJ': function(_0x5d402f, _0x5a17a9) {
      return _0x5d402f - _0x5a17a9
    },
    'GiuoT': function(_0xb0f0da, _0x35e86c) {
      return _0xb0f0da == _0x35e86c
    },
    'uoRWT': 'CircleScan',
    'VOpmU': function(_0x22000f, _0x11a0e3) {
      return _0x22000f % _0x11a0e3
    },
    'wOXbb': '7|4|9|8|6|0|2|1|3|5',
    'ndEDb': 'circleScan',
    'euGxA': '4|6|3|1|0|5|2',
    'fzCqr': function(_0x3bc88b, _0x16ee0f) {
      return _0x3bc88b - _0x16ee0f
    },
    'ygEMx': '12|11|6|2|4|7|5|13|9|3|15|10|1|14|8|0',
    'nwmfs': function(_0x4ed37b, _0x16bac1) {
      return _0x4ed37b - _0x16bac1
    },
    'ylQXE': function(_0x4e6ae7, _0x43467e) {
      return _0x4e6ae7 - _0x43467e
    },
    'isNmK': '8|14|15|9|6|11|18|16|4|10|7|17|3|2|0|13|5|12|1',
    'PhiCh': function(_0x32d783, _0x1c00ee) {
      return _0x32d783 + _0x1c00ee
    },
    'vvLCg': 'radarScan',
    'bjYQj': '7|6|1|2|0|4|5|3|8',
    'GPNvn': 'examples/images/线状扫描纹理1.jpg',
    'ikEGx': function(_0x5315ee, _0x463518) {
      return _0x5315ee / _0x463518
    },
    'PKwqh': function(_0x24b435, _0x43cc77) {
      return _0x24b435 / _0x43cc77
    },
    'DHwSo': function(_0x33b05c, _0x4668dc) {
      return _0x33b05c + _0x4668dc
    },
    'pgKQD': function(_0x55794a, _0x47b276) {
      return _0x55794a * _0x47b276
    },
    'bztZf': function(_0x34bde2, _0x42cd3b) {
      return _0x34bde2 * _0x42cd3b
    },
    'wnqUm': function(_0x578b6c, _0x2c4c7a) {
      return _0x578b6c === _0x2c4c7a
    },
    'AFOrx': '三角形',
    'bISUB': '0|3|2|4|1',
    'Myglx': function(_0x38eeb5, _0xe14b3d) {
      return _0x38eeb5 + _0xe14b3d
    },
    'iIBiR': '0|2|1|3|4',
    'QncvT': function(_0x17f9b7, _0x109c8f) {
      return _0x17f9b7 >= _0x109c8f
    },
    'QikHx': function(_0x4659d6, _0x37487d) {
      return _0x4659d6 >= _0x37487d
    },
    'lLwqq': '3|0|5|4|1|6|2',
    'uyKhc': function(_0x446805, _0x280ecb) {
      return _0x446805 === _0x280ecb
    },
    'gDuJK': function(_0x47c714, _0x31455e) {
      return _0x47c714 - _0x31455e
    },
    'lRTpD': function(_0x499222, _0x3f32d3) {
      return _0x499222(_0x3f32d3)
    },
    'bvzBN': function(_0x2dc4a5, _0xca2472) {
      return _0x2dc4a5 + _0xca2472
    },
    'JRQIV': function(_0x47d3d1, _0x27837c) {
      return _0x47d3d1 + _0x27837c
    },
    'xXHlJ': function(_0x56a914, _0x82bdc1) {
      return _0x56a914 + _0x82bdc1
    },
    'FOHyu': function(_0x17368a, _0x25289f) {
      return _0x17368a(_0x25289f)
    },
    'RASre': function(_0x54d46d, _0x4d0560, _0x350ad8, _0x4d1b9f, _0x3e2d93) {
      return _0x54d46d(_0x4d0560, _0x350ad8, _0x4d1b9f, _0x3e2d93)
    },
    'TmFuf': function(_0x1337a0, _0xcb899b) {
      return _0x1337a0 !== _0xcb899b
    },
    'uCrtA': function(_0xc79b41, _0x41e359, _0x4b281e, _0x23a2dd) {
      return _0xc79b41(_0x41e359, _0x4b281e, _0x23a2dd)
    },
    'qQNoa': function(_0x217176, _0x206103) {
      return _0x217176 + _0x206103
    },
    'aAorn': '0|2|4|3|1',
    'WhNiO': function(_0x27884e, _0x46250a) {
      return _0x27884e / _0x46250a
    },
    'EMnqV': function(_0x485ce8, _0x10e70c) {
      return _0x485ce8 / _0x10e70c
    },
    'FFAhf': function(_0x35db3a, _0x3a9fc3) {
      return _0x35db3a / _0x3a9fc3
    },
    'XtsvL': '5|4|7|1|6|3|0|2',
    'ZPJUJ': function(_0x8b0b09, _0x4c7c04, _0x478938) {
      return _0x8b0b09(_0x4c7c04, _0x478938)
    },
    'BjYSo': '9|1|14|15|3|18|13|4|16|6|10|11|12|5|7|17|2|8|0',
    'JSYrR': '路径漫游',
    'sHMmN': function(_0x44e767, _0x236f4a) {
      return _0x44e767 * _0x236f4a
    },
    'IaNGq': function(_0x2297a1, _0x133c31) {
      return _0x2297a1 - _0x133c31
    },
    'gxbRl': function(_0x56f18a, _0x58fa4d) {
      return _0x56f18a < _0x58fa4d
    },
    'ikEDy': function(_0x221896, _0x462e0e) {
      return _0x221896 === _0x462e0e
    },
    'Bxykc': function(_0x1b6115, _0x52a272, _0x4b2ecc) {
      return _0x1b6115(_0x52a272, _0x4b2ecc)
    },
    'CNltW': '2|3|4|1|0',
    'khOsG': function(_0x2e7225, _0x26751e) {
      return _0x2e7225 >= _0x26751e
    },
    'HhJQz': function(_0x532e9b, _0x14639e, _0x323bfb) {
      return _0x532e9b(_0x14639e, _0x323bfb)
    },
    'Rmmpj': '4|1|2|3|5|0',
    'jekjs': '4|0|1|2|3',
    'YlqBn': function(_0x226e50, _0x3cb40d) {
      return _0x226e50 == _0x3cb40d
    },
    'qOXeR': '11|19|6|12|8|17|20|2|3|1|7|15|0|4|14|5|13|16|10|9|18',
    'FdaNH': function(_0x5af803, _0x1ccfae) {
      return _0x5af803 + _0x1ccfae
    },
    'afMtc': function(_0x1e5c6b, _0x45803a) {
      return _0x1e5c6b * _0x45803a
    },
    'pMNbD': function(_0x93824f, _0x11aac5) {
      return _0x93824f - _0x11aac5
    },
    'CMyVk': function(_0x379c54, _0x1ba9d0) {
      return _0x379c54 - _0x1ba9d0
    },
    'itVqA': function(_0xa4064f, _0x5493d4) {
      return _0xa4064f * _0x5493d4
    },
    'pNSFk': function(_0x353312, _0xeb4733) {
      return _0x353312 - _0xeb4733
    },
    'KSJDH': function(_0x6ffff6, _0x4e479e) {
      return _0x6ffff6 == _0x4e479e
    },
    'ylpYf': function(_0x1f96f7, _0x1e2f20) {
      return _0x1f96f7 / _0x1e2f20
    },
    'GsQgS': '6|5|10|1|0|8|7|4|2|9|3',
    'HReqz': function(_0x69f2dd, _0x4bde8a) {
      return _0x69f2dd * _0x4bde8a
    },
    'qVgGO': function(_0x4f816f, _0xfe3f64) {
      return _0x4f816f + _0xfe3f64
    },
    'PRGwF': function(_0x2b607a, _0x51cdba) {
      return _0x2b607a * _0x51cdba
    },
    'QuVwc': function(_0x507d63, _0x42b264) {
      return _0x507d63 * _0x42b264
    },
    'rZWHb': function(_0x5ca2ec, _0x4b06ec) {
      return _0x5ca2ec - _0x4b06ec
    },
    'VceXD': function(_0x3e3d0f, _0x1f2bcf) {
      return _0x3e3d0f / _0x1f2bcf
    },
    'famIa': function(_0x4fbb0e, _0x369865) {
      return _0x4fbb0e * _0x369865
    },
    'OrGEc': function(_0x3733f2, _0x1fdb44) {
      return _0x3733f2 / _0x1fdb44
    },
    'hisFx': function(_0x4ac819, _0x51a8d1) {
      return _0x4ac819 / _0x51a8d1
    },
    'eOBMw': function(_0x2ca2e3, _0xab7289) {
      return _0x2ca2e3 * _0xab7289
    },
    'KdhNQ': function(_0x41dbf3, _0x169004) {
      return _0x41dbf3 * _0x169004
    },
    'EfGAY': function(_0x8db84f, _0x39ccf1) {
      return _0x8db84f - _0x39ccf1
    },
    'JbnXe': function(_0x57b5dc, _0xf1b278) {
      return _0x57b5dc * _0xf1b278
    },
    'vkBSF': function(_0x664484, _0x8003fd) {
      return _0x664484 * _0x8003fd
    },
    'zHVeH': function(_0x39c5a1, _0x2aef79, _0x343915) {
      return _0x39c5a1(_0x2aef79, _0x343915)
    },
    'VxTJK': '0|4|3|2|1',
    'yVVkV': function(_0x3b5752, _0x136b2b) {
      return _0x3b5752 < _0x136b2b
    },
    'eNTmk': function(_0x260c7c, _0x4f42fc) {
      return _0x260c7c % _0x4f42fc
    },
    'kHhKY': function(_0x4de5b9, _0x2b6f07) {
      return _0x4de5b9 + _0x2b6f07
    },
    'qrcpa': '2|5|4|3|0|1',
    'BCNzV': function(_0x426958, _0x25bb51) {
      return _0x426958 - _0x25bb51
    },
    'jybOp': '1|0|4|2|3',
    'NtEfO': '9|3|12|4|10|5|7|15|8|6|18|16|17|0|13|14|1|11|2|19',
    'RbrbI': function(_0x586312, _0x3860a9) {
      return _0x586312 * _0x3860a9
    },
    'irEGS': function(_0x8b74c1, _0x55c223) {
      return _0x8b74c1 + _0x55c223
    },
    'xGLXy': function(_0x99fa24, _0x414446) {
      return _0x99fa24 / _0x414446
    },
    'CihDD': function(_0x2309a8, _0x338792) {
      return _0x2309a8 * _0x338792
    },
    'hPdfB': '5|6|7|11|12|1|4|3|2|10|0|9|8',
    'QCMVJ': function(_0x4361bf, _0x162b3e) {
      return _0x4361bf / _0x162b3e
    },
    'TKuaj': '6|4|2|7|1|8|9|3|11|0|5|10',
    'ckDFF': function(_0x35e18a, _0x4c6fa9) {
      return _0x35e18a + _0x4c6fa9
    },
    'xptnS': '1|4|3|2|0',
    'hgata': function(_0x23a9ee, _0x33a702) {
      return _0x23a9ee + _0x33a702
    },
    'xQjCW': '26|8|19|18|13|2|25|11|17|21|29|28|7|6|10|1|23|15|5|24|27|12|22|0|20|9|30|16|3|14|4',
    'uwlwH': function(_0x5d9a2b, _0x3dba5c) {
      return _0x5d9a2b * _0x3dba5c
    },
    'CHXyx': function(_0x301202, _0x4d375d) {
      return _0x301202 * _0x4d375d
    },
    'gWJvX': 'number',
    'lnKcq': function(_0x83a8a7, _0x36bc31) {
      return _0x83a8a7 > _0x36bc31
    },
    'IedKB': function(_0x40cda9, _0x13367e) {
      return _0x40cda9 * _0x13367e
    },
    'CjcnR': function(_0x2dd2dd, _0x1b54e8) {
      return _0x2dd2dd / _0x1b54e8
    },
    'TQEeT': '2|4|3|1|0',
    'lpkkM': '12|1|13|19|7|5|27|22|29|15|0|8|26|10|17|3|23|18|21|9|14|2|25|6|24|16|20|4|11|28|30|31',
    'ViqZt': function(_0x2db44f, _0x184ce4) {
      return _0x2db44f > _0x184ce4
    },
    'bPzni': function(_0x2c3282, _0x4c16dd) {
      return _0x2c3282 / _0x4c16dd
    },
    'JkUtY': function(_0x1ccffd, _0x213adc) {
      return _0x1ccffd < _0x213adc
    },
    'IxMiv': '4|2|0|3|1',
    'ZCcpg': function(_0x5adf62, _0xd06156) {
      return _0x5adf62 * _0xd06156
    },
    'GLxGE': function(_0x5427df, _0x438a47) {
      return _0x5427df / _0x438a47
    },
    'LQHNM': function(_0x2ecee6, _0x5a139a) {
      return _0x2ecee6 === _0x5a139a
    },
    'bwEgz': function(_0x546f14, _0xf1c535) {
      return _0x546f14 / _0xf1c535
    },
    'BBrgb': function(_0x27a111, _0x37fc3e) {
      return _0x27a111 * _0x37fc3e
    },
    'NMwRJ': function(_0xb5e725, _0xf59fe2) {
      return _0xb5e725 * _0xf59fe2
    },
    'BEJrt': function(_0x3b0b08, _0x472205) {
      return _0x3b0b08 * _0x472205
    },
    'dqFqb': function(_0x2ae938, _0x3f5088) {
      return _0x2ae938(_0x3f5088)
    },
    'dxEFx': '0|1|2|3|4',
    'fESxc': function(_0x2cf7ce, _0x426510) {
      return _0x2cf7ce > _0x426510
    },
    'JzheC': function(_0x33e9ca, _0x46ea8d) {
      return _0x33e9ca < _0x46ea8d
    },
    'EhPBP': function(_0x11e9fc, _0x3db986) {
      return _0x11e9fc || _0x3db986
    },
    'NntKv': function(_0xab092d, _0x1d6904) {
      return _0xab092d || _0x1d6904
    },
    'HXEXP': '14px\x20sans-serif',
    'hcxfk': function(_0x11107b, _0x4efc6b) {
      return _0x11107b || _0x4efc6b
    },
    'HLGvz': function(_0x1fa015, _0x121a0a) {
      return _0x1fa015 || _0x121a0a
    },
    'sxTYn': function(_0x3ad557, _0x2e1f6a) {
      return _0x3ad557 || _0x2e1f6a
    },
    'iYTxi': '4|5|3|0|1|2|6',
    'wYllJ': function(_0x3552b4, _0x1721df) {
      return _0x3552b4 || _0x1721df
    },
    'PAxKW': 'line',
    'qsHAQ': function(_0xb07012, _0x1da05c) {
      return _0xb07012 || _0x1da05c
    },
    'ZukkN': function(_0x2c4307, _0x748a42) {
      return _0x2c4307 || _0x748a42
    },
    'kUzph': 'cross',
    'kJkmO': '1|0|2|4|3',
    'gGNpm': function(_0x3b12bf, _0x306d76) {
      return _0x3b12bf - _0x306d76
    },
    'snHCr': function(_0x163955, _0x42c8b6) {
      return _0x163955 <= _0x42c8b6
    },
    'tbLVU': function(_0x5dd75d, _0xacc506) {
      return _0x5dd75d + _0xacc506
    },
    'zfNrx': function(_0x200ce4, _0x51c59e) {
      return _0x200ce4 > _0x51c59e
    },
    'AxUoA': '2|0|1|3|4',
    'jTcUx': 'examples/images/Textures/circle_bg.png',
    'CsDUD': function(_0x5aaa49, _0x37bab7) {
      return _0x5aaa49 === _0x37bab7
    },
    'WQBOZ': function(_0xbe9c98, _0x2ca8b9) {
      return _0xbe9c98 % _0x2ca8b9
    },
    'iRbPs': function(_0x12b12f, _0x4f2675) {
      return _0x12b12f >= _0x4f2675
    },
    'dtvxZ': 'examples/images/Textures/fence.png',
    'cXgsZ': function(_0x5e7432, _0x551e20) {
      return _0x5e7432 * _0x551e20
    },
    'LTaPv': function(_0xa48ad7, _0x2b7a14) {
      return _0xa48ad7(_0x2b7a14)
    },
    'nnfzR': '4|5|3|1|6|0|2|7',
    'bBIxL': 'rel:animated_src',
    'zRsnx': function(_0x23d3ac, _0x3e7d40) {
      return _0x23d3ac(_0x3e7d40)
    },
    'BZjyi': '请引入\x20SuperGif\x20库',
    'DTOYU': 'img',
    'eXeoR': 'rel:auto_play',
    'ZfzSL': function(_0x3e13bd, _0x504b8b) {
      return _0x3e13bd > _0x504b8b
    },
    'FmHqT': '3|2|1|5|4|0|6',
    'oFRGx': '1|3|6|4|5|2|0',
    'ylezw': function(_0x249a16, _0x26b12f, _0x522be0) {
      return _0x249a16(_0x26b12f, _0x522be0)
    },
    'jcamx': '0|3|4|1|5|2',
    'ZqSmq': function(_0x1f2013, _0x26d075) {
      return _0x1f2013(_0x26d075)
    },
    'ldbFf': function(_0x352d52, _0xc42553) {
      return _0x352d52 * _0xc42553
    },
    'QWepq': function(_0x2be6eb, _0x26b329) {
      return _0x2be6eb - _0x26b329
    },
    'bqGtk': function(_0x456e6a, _0x2644e8, _0x21e488) {
      return _0x456e6a(_0x2644e8, _0x21e488)
    },
    'IPkkw': 'color',
    'dvhNO': '5|0|1|4|3|6|2',
    'MgjnY': function(_0x5767cd, _0x5e9986, _0x533f32) {
      return _0x5767cd(_0x5e9986, _0x533f32)
    },
    'SYQFk': function(_0x327ef8, _0x2b1466) {
      return _0x327ef8(_0x2b1466)
    },
    'FbXCZ': function(_0x11f88c, _0x29bcb5) {
      return _0x11f88c(_0x29bcb5)
    },
    'vcgVJ': '1|3|5|7|0|6|2|4',
    'CaBmM': function(_0xe95387, _0x4d56e3) {
      return _0xe95387 instanceof _0x4d56e3
    },
    'gzFSC': function(_0x4eeda9, _0x4e43a1, _0x5dbd85) {
      return _0x4eeda9(_0x4e43a1, _0x5dbd85)
    },
    'HySRk': function(_0x5f366e, _0x2212f9) {
      return _0x5f366e(_0x2212f9)
    },
    'KPGMI': 'duration',
    'opMre': '2|1|0|3|4',
    'RGXKN': function(_0x15aa1e, _0x4ad5e9) {
      return _0x15aa1e / _0x4ad5e9
    },
    'ZmBDW': function(_0x178f76, _0x4cf075) {
      return _0x178f76 % _0x4cf075
    },
    'stTqn': function(_0x4d29e0, _0xb1558e) {
      return _0x4d29e0 instanceof _0xb1558e
    },
    'EemJt': '0|1|6|4|2|5|3',
    'iGWGO': function(_0xf7606b, _0x3409cd, _0x2c3567) {
      return _0xf7606b(_0x3409cd, _0x2c3567)
    },
    'xchso': function(_0x595317, _0x50e680) {
      return _0x595317(_0x50e680)
    },
    'ZJOMR': '5|3|7|0|4|10|6|2|8|1|9',
    'UosEj': function(_0x4366e5, _0x2aa730) {
      return _0x4366e5 || _0x2aa730
    },
    'EoXwW': function(_0x401471, _0x19263d, _0x41f42d) {
      return _0x401471(_0x19263d, _0x41f42d)
    },
    'nhajA': function(_0x375a8d, _0x2719d9, _0x43019a) {
      return _0x375a8d(_0x2719d9, _0x43019a)
    },
    'SwBRo': function(_0x4ab69f, _0x2e8f28) {
      return _0x4ab69f < _0x2e8f28
    },
    'HbGwk': function(_0x108835, _0x3768c3) {
      return _0x108835 > _0x3768c3
    },
    'xORPx': '5|3|2|4|0|1',
    'drWJQ': function(_0xe8537f, _0x1bd5b1) {
      return _0xe8537f === _0x1bd5b1
    },
    'UwcPt': '2|5|4|10|3|9|13|12|1|11|6|8|0|7',
    'SkDkx': 'CircleWave',
    'YaSzZ': './examples/images/Textures/meteor_01.png',
    'jeuBt': 'PolylineTrailLeftLink',
    'jmwfk': 'examples/images/Textures/color3.png',
    'mmKDi': 'PolylineTrailLink',
    'vbVPx': 'PolylineFlow',
    'Nesww': './examples/images/Textures/jsx2.png',
    'dQxIM': 'vertical',
    'OjovG': 'PolylineCityLink',
    'zKVan': '3|0|1|2|4',
    'indRc': function(_0x2fc427, _0x52302a) {
      return _0x2fc427 == _0x52302a
    },
    'eJMNX': function(_0x10a6d5, _0x5565bf) {
      return _0x10a6d5 + _0x5565bf
    },
    'FqmiV': function(_0x35dab1, _0x332b78) {
      return _0x35dab1 + _0x332b78
    },
    'YKWYf': 'vec4\x20colorImage\x20=\x20texture2D(image,\x20vec2(fract(float(',
    'IRfNv': ')*st.t\x20',
    'CSbXE': '\x20time),\x20fract(st.s)));\x0a\x20',
    'trkeo': function(_0x3e322c, _0x27b8d7) {
      return _0x3e322c + _0x27b8d7
    },
    'kTyxi': function(_0x45466c, _0x18fb2d) {
      return _0x45466c + _0x18fb2d
    },
    'spNAi': ')*st.s\x20',
    'cMHWC': '\x20time),\x20fract(st.t)));\x0a\x20',
    'duNpq': 'vec4\x20fragColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fragColor.rgb\x20=\x20(colorImage.rgb+color.rgb)\x20/\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fragColor\x20=\x20czm_gammaCorrect(fragColor);\x0a\x20',
    'hxFYq': '\x20material.diffuse\x20=\x20colorImage.rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.alpha\x20=\x20colorImage.a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.emission\x20=\x20fragColor.rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20material;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'LIcbW': 'czm_material\x20czm_getMaterial(czm_materialInput\x20materialInput)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20st\x20=\x20materialInput.st;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20',
    'tDtkM': 'czm_material\x20czm_getMaterial(czm_materialInput\x20materialInput)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20st\x20=\x20materialInput.st;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(texture2D(image,\x20vec2(0.0,\x200.0)).a\x20==\x201.0){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}else{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.alpha\x20=\x20texture2D(image,\x20vec2(1.0\x20-\x20fract(time\x20-\x20st.s),\x20st.t)).a\x20*\x20color.a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.diffuse\x20=\x20max(color.rgb\x20*\x20material.alpha\x20*\x203.0,\x20color.rgb);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20material;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    'nyzHH': 'uniform\x20vec4\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20duration;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20czm_getMaterial(czm_materialInput\x20materialInput){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20st\x20=\x20materialInput.st;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20t\x20=fract(czm_frameNumber\x20/\x20duration);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20t\x20*=\x201.03;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20alpha\x20=\x20smoothstep(t-\x200.03,\x20t,\x20st.s)\x20*\x20step(-t,\x20-st.s);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alpha\x20+=\x200.1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.diffuse\x20=\x20color.rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.alpha\x20=\x20alpha;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20material;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    'OCrVD': function(_0x5b48a7, _0x3c0053) {
      return _0x5b48a7 + _0x3c0053
    },
    'OjOkF': function(_0x3af40e, _0x371aa3) {
      return _0x3af40e + _0x371aa3
    },
    'ZeiLF': 'uniform\x20sampler2D\x20colorTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20depthTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20v_textureCoordinates;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec4\x20u_scanCenterEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20u_scanPlaneNormalEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20u_radius;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec4\x20u_scanColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20toEye(in\x20vec2\x20uv,\x20in\x20float\x20depth){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20xy\x20=\x20vec2((uv.x\x20*\x202.0\x20-\x201.0),(uv.y\x20*\x202.0\x20-\x201.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20posInCamera\x20=\x20czm_inverseProjection\x20*\x20vec4(xy,\x20depth,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20posInCamera\x20=posInCamera\x20/\x20posInCamera.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20posInCamera;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20pointProjectOnPlane(in\x20vec3\x20planeNormal,\x20in\x20vec3\x20planeOrigin,\x20in\x20vec3\x20point){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20v01\x20=\x20point\x20-\x20planeOrigin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dot(planeNormal,\x20v01)\x20;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20(point\x20-\x20planeNormal\x20*\x20d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20getDepth(in\x20vec4\x20depth){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20z_window\x20=\x20czm_unpackDepth(depth);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z_window\x20=\x20czm_reverseLogDepth(z_window);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20n_range\x20=\x20czm_depthRange.near;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20f_range\x20=\x20czm_depthRange.far;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20(2.0\x20*\x20z_window\x20-\x20n_range\x20-\x20f_range)\x20/\x20(f_range\x20-\x20n_range);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main(){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20texture2D(colorTexture,\x20v_textureCoordinates);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20depth\x20=\x20getDepth(texture2D(depthTexture,\x20v_textureCoordinates));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20viewPos\x20=\x20toEye(v_textureCoordinates,\x20depth);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20prjOnPlane\x20=\x20pointProjectOnPlane(u_scanPlaneNormalEC.xyz,\x20u_scanCenterEC.xyz,\x20viewPos.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20dis\x20=\x20length(prjOnPlane.xyz\x20-\x20u_scanCenterEC.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(dis\x20<\x20u_radius){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20f\x20=\x201.0\x20-\x20abs(u_radius\x20-\x20dis)\x20/\x20u_radius;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f\x20=\x20pow(f,\x20float(',
    'pVxQt': '));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20mix(gl_FragColor,\x20u_scanColor,\x20f);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'ihFtb': 'uniform\x20sampler2D\x20colorTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20depthTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20v_textureCoordinates;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec4\x20u_scanCenterEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20u_scanPlaneNormalEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20u_scanLineNormalEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20u_radius;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec4\x20u_scanColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20toEye(in\x20vec2\x20uv,\x20in\x20float\x20depth){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20xy\x20=\x20vec2((uv.x\x20*\x202.0\x20-\x201.0),(uv.y\x20*\x202.0\x20-\x201.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20posInCamera\x20=czm_inverseProjection\x20*\x20vec4(xy,\x20depth,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20posInCamera\x20=posInCamera\x20/\x20posInCamera.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20posInCamera;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20bool\x20isPointOnLineRight(in\x20vec3\x20ptOnLine,\x20in\x20vec3\x20lineNormal,\x20in\x20vec3\x20testPt){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20v01\x20=\x20testPt\x20-\x20ptOnLine;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20normalize(v01);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20temp\x20=\x20cross(v01,\x20lineNormal);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dot(temp,\x20u_scanPlaneNormalEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20d\x20>\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20pointProjectOnPlane(in\x20vec3\x20planeNormal,\x20in\x20vec3\x20planeOrigin,\x20in\x20vec3\x20point){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20v01\x20=\x20point\x20-planeOrigin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dot(planeNormal,\x20v01)\x20;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20(point\x20-\x20planeNormal\x20*\x20d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distancePointToLine(in\x20vec3\x20ptOnLine,\x20in\x20vec3\x20lineNormal,\x20in\x20vec3\x20testPt){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20tempPt\x20=\x20pointProjectOnPlane(lineNormal,\x20ptOnLine,\x20testPt);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20length(tempPt\x20-\x20ptOnLine);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20getDepth(in\x20vec4\x20depth){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20z_window\x20=\x20czm_unpackDepth(depth);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z_window\x20=\x20czm_reverseLogDepth(z_window);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20n_range\x20=\x20czm_depthRange.near;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20f_range\x20=\x20czm_depthRange.far;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20(2.0\x20*\x20z_window\x20-\x20n_range\x20-\x20f_range)\x20/\x20(f_range\x20-\x20n_range);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main(){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20texture2D(colorTexture,\x20v_textureCoordinates);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20depth\x20=\x20getDepth(\x20texture2D(depthTexture,\x20v_textureCoordinates));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20viewPos\x20=\x20toEye(v_textureCoordinates,\x20depth);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20prjOnPlane\x20=\x20pointProjectOnPlane(u_scanPlaneNormalEC.xyz,\x20u_scanCenterEC.xyz,\x20viewPos.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20dis\x20=\x20length(prjOnPlane.xyz\x20-\x20u_scanCenterEC.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20twou_radius\x20=\x20u_radius\x20*\x202.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(dis\x20<\x20u_radius){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20f0\x20=\x201.0\x20-abs(u_radius\x20-\x20dis)\x20/\x20u_radius;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f0\x20=\x20pow(f0,\x2064.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20lineEndPt\x20=\x20vec3(u_scanCenterEC.xyz)\x20+\x20u_scanLineNormalEC\x20*\x20u_radius;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20f\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(isPointOnLineRight(u_scanCenterEC.xyz,\x20u_scanLineNormalEC.xyz,\x20prjOnPlane.xyz)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20dis1=\x20length(prjOnPlane.xyz\x20-\x20lineEndPt);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f\x20=\x20abs(twou_radius\x20-dis1)\x20/\x20twou_radius;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f\x20=\x20pow(f,\x203.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20mix(gl_FragColor,\x20u_scanColor,\x20f\x20+\x20f0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    'ftOqC': 'uniform\x20vec4\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20duration;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20count;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20gradient;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20czm_getMaterial(czm_materialInput\x20materialInput)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.diffuse\x20=\x201.5\x20*\x20color.rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20st\x20=\x20materialInput.st;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20str\x20=\x20materialInput.str;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20dis\x20=\x20distance(st,\x20vec2(0.5,\x200.5));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20per\x20=\x20fract(czm_frameNumber\x20/\x20duration);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(abs(str.z)\x20>\x200.001){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(dis\x20>\x200.5){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20perDis\x20=\x200.5\x20/\x20count;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20disNum;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20bl\x20=\x20.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20for\x20(int\x20i\x20=\x200;\x20i\x20<=\x2010;\x20i++)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(float(i)\x20<=\x20count)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20disNum\x20=\x20perDis\x20*\x20float(i)\x20-\x20dis\x20+\x20per\x20/\x20count;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(disNum\x20>\x200.0)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(disNum\x20<\x20perDis)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bl\x20=\x201.0\x20-\x20disNum\x20/\x20perDis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(disNum\x20-\x20perDis\x20<\x20perDis)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bl\x20=\x201.0\x20-\x20abs(1.0\x20-\x20disNum\x20/\x20perDis);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.alpha\x20=\x20pow(bl,\x20gradient);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20material;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    'lJrgR': '.heatmap',
    'DnjWi': '4|5|1|3|0|2',
    'bVoML': function(_0x2e9171, _0x3e5dac) {
      return _0x2e9171 * _0x3e5dac
    },
    'iBPjh': function(_0x2bdb52, _0x26c1b5) {
      return _0x2bdb52 * _0x26c1b5
    },
    'XkFrq': '0|3|2|1|6|5|7|4',
    'ujqbo': 'beforeend',
    'aOerJ': 'div',
    'wVXgV': '1|5|2|6|0|3|4',
    'saoyK': function(_0x57ef95, _0x2617aa) {
      return _0x57ef95 + _0x2617aa
    },
    'ROAHe': function(_0x38541f, _0x184b5) {
      return _0x38541f(_0x184b5)
    },
    'iJqWJ': function(_0x3ad7ee, _0xff1211) {
      return _0x3ad7ee + _0xff1211
    },
    'OjLol': function(_0x1c0810, _0x3fa7ff) {
      return _0x1c0810 * _0x3fa7ff
    },
    'gbucN': function(_0x7b0a0c, _0x42e4be) {
      return _0x7b0a0c > _0x42e4be
    },
    'MvdnS': 'block',
    'bIvub': 'none',
    'lXOlK': function(_0x13d9a4, _0xcb72a4) {
      return _0x13d9a4 !== _0xcb72a4
    },
    'LMjea': function(_0x244a12, _0x1c9f50) {
      return _0x244a12 + _0x1c9f50
    },
    'iRwVn': '1|4|7|0|6|3|5|8|2',
    'FyMsf': function(_0xb3d327, _0x441d2c) {
      return _0xb3d327 >= _0x441d2c
    },
    'TnGXP': function(_0x219c8b, _0x37a038) {
      return _0x219c8b + _0x37a038
    },
    'flYnx': function(_0x465bc9, _0x15cf9c) {
      return _0x465bc9 + _0x15cf9c
    },
    'rQThk': 'examples/images/Textures/circle2.png',
    'gsySW': 'examples/images/Textures/circle1.png',
    'dsVWq': function(_0x1289c4, _0x53cd60, _0x5dbad9) {
      return _0x1289c4(_0x53cd60, _0x5dbad9)
    },
    'JKTCY': '立方体盒子',
    'xsPMs': '2|4|5|1|6|0|3',
    'Owozn': '11|6|9|0|7|10|5|1|3|2|8|4',
    'opBpC': 'HDR',
    'EGlrQ': '3|2|1|4|0',
    'HSRRf': function(_0xb97c4e, _0x2c207f) {
      return _0xb97c4e(_0x2c207f)
    },
    'UsXdz': function(_0x269488, _0x117dd6) {
      return _0x269488 !== _0x117dd6
    },
    'yIoIu': '1|0|3|2|4',
    'WniOg': 'this.sources\x20properties\x20must\x20all\x20be\x20the\x20same\x20type.',
    'KgMID': function(_0x314f5b, _0x589ade) {
      return _0x314f5b(_0x589ade)
    },
    'cEebA': function(_0xe8d310, _0x3fafa7) {
      return _0xe8d310(_0x3fafa7)
    },
    'TKjyT': function(_0x27a341, _0x274963) {
      return _0x27a341(_0x274963)
    },
    'OBolE': 'this.sources\x20is\x20required\x20and\x20must\x20have\x20positiveX,\x20negativeX,\x20positiveY,\x20negativeY,\x20positiveZ,\x20and\x20negativeZ\x20properties.',
    'mGmBh': function(_0x30c84b, _0x1ab35e) {
      return _0x30c84b === _0x1ab35e
    },
    'plDIw': 'string',
    'inNgf': '2|4|1|3|0',
    'EdPkc': 'uniform\x20samplerCube\x20u_cubeMap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20v_texCoord;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color\x20=\x20textureCube(u_cubeMap,\x20normalize(v_texCoord));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(czm_gammaCorrect(color).rgb,\x20czm_morphTime);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'abxpC': 'attribute\x20vec3\x20position;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20v_texCoord;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20mat3\x20u_rotateMatrix;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20p\x20=\x20czm_viewRotation\x20*\x20u_rotateMatrix\x20*\x20(czm_temeToPseudoFixed\x20*\x20(czm_entireFrustum.y\x20*\x20position));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20czm_projection\x20*\x20vec4(p,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v_texCoord\x20=\x20position.xyz;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'QxkGV': 'Water',
    'pOlpM': 'varying\x20vec3\x20v_positionMC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20v_positionEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20v_st;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_materialInput\x20materialInput;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20normalEC\x20=\x20normalize(czm_normal3D\x20*\x20czm_geodeticSurfaceNormal(v_positionMC,\x20vec3(0.0),\x20vec3(1.0)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#ifdef\x20FACE_FORWARD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20normalEC\x20=\x20faceforward(normalEC,\x20vec3(0.0,\x200.0,\x201.0),\x20-normalEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20materialInput.s\x20=\x20v_st.s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20materialInput.st\x20=\x20v_st;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20materialInput.str\x20=\x20vec3(v_st,\x200.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20materialInput.normalEC\x20=\x20normalEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20materialInput.tangentToEyeMatrix\x20=\x20czm_eastNorthUpToEyeCoordinates(v_positionMC,\x20materialInput.normalEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20positionToEyeEC\x20=\x20-v_positionEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20materialInput.positionToEyeEC\x20=\x20positionToEyeEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20material\x20=\x20czm_getMaterial(materialInput);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#ifdef\x20FLAT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(material.diffuse\x20+\x20material.emission,\x20material.alpha);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20czm_phong(normalize(positionToEyeEC),\x20material);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor.a\x20=\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'hVehw': '1|5|6|0|2|4|3',
    'LdUsx': 'examples/images/Textures/waterNormals.jpg',
    'lZHHO': function(_0x57c17b, _0x387300) {
      return _0x57c17b != _0x387300
    },
    'uAgnZ': 'varying\x20vec2\x20v_st;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_materialInput\x20materialInput;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20material=czm_getMaterial(materialInput,v_st);\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color=vec4(material.diffuse\x20+\x20material.emission,material.alpha);\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(color.x==1.0&&color.y==1.0&&color.z==1.0&&color.w==1.0)\x20color=vec4(vec3(0.0,0.0,0.0),0.0);\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=color;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'hptLY': '2|3|5|0|4|1',
    'qaOKi': '7|5|3|1|0|2|4|6',
    'iWzDU': 'attribute\x20vec3\x20position3DHigh;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec3\x20position3DLow;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec2\x20st;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20batchId;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20v_st;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20p\x20=\x20czm_computePosition();\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v_st=st;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20p\x20=\x20czm_modelViewProjectionRelativeToEye\x20*\x20p;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20p;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'qcjIQ': 'czm_material\x20czm_getMaterial(czm_materialInput\x20materialInput,vec2\x20v_st)\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color\x20=\x20texture2D(image,\x20v_st);\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.diffuse=\x20color.rgb;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.alpha=color.a;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20material;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'Mypwz': '0|4|2|5|9|3|10|7|8|6|1',
    'uEfZD': function(_0x4838e9, _0x156b2c) {
      return _0x4838e9 > _0x156b2c
    },
    'hoQWN': 'radarPrimitive',
    'aOTKh': '0|2|7|3|4|5|6|1',
    'hlUGi': 'normal',
    'EACUt': 'tileHeight\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.',
    'oqWpf': 'minimumLevel\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.',
    'qdHvH': 'tilingScheme\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.',
    'nsidQ': 'rectangle\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.',
    'OWDVx': 'tileWidth\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.',
    'eziSJ': '4|2|3|1|0',
    'BhGCc': '{x}',
    'mMRmw': function(_0x574da2, _0xe3dbdf) {
      return _0x574da2 / _0xe3dbdf
    },
    'YHrWj': '{y}',
    'AZwHH': function(_0x39cc09, _0x1fc801) {
      return _0x39cc09 - _0x1fc801
    },
    'cBBlV': '{z}',
    'jcISh': '{s}',
    'fprtt': '{style}',
    'GYklU': 'requestImage\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.',
    'xoMrL': 'http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid={style}',
    'smfio': function(_0x3eaed7, _0x450c39) {
      return _0x3eaed7(_0x450c39)
    },
    'KArLA': function(_0x1bfa2c, _0x183277) {
      return _0x1bfa2c || _0x183277
    },
    'JjnSl': function(_0x125cbf, _0x3e5ac6) {
      return _0x125cbf !== _0x3e5ac6
    },
    'IvcHw': function(_0x3353ed, _0x148640) {
      return _0x3353ed + _0x148640
    },
    'HFspD': function(_0x23cf33, _0x452329) {
      return _0x23cf33 + _0x452329
    },
    'Qryxo': function(_0x555a65, _0x52f56c) {
      return _0x555a65 + _0x52f56c
    },
    'ZVKKU': function(_0x41dd01, _0x455819) {
      return _0x41dd01 + _0x455819
    },
    'ZUMUM': function(_0xa5e6, _0x2df75c) {
      return _0xa5e6 + _0x2df75c
    },
    'MLMJJ': function(_0x47b263, _0x1c76d3) {
      return _0x47b263 === _0x1c76d3
    },
    'yYxJc': '5|1|4|2|0|9|3|7|6|8',
    'jqQNK': 'viewBox',
    'UPCPb': function(_0x77f0d, _0x17e0cb) {
      return _0x77f0d + _0x17e0cb
    },
    'FZJpv': function(_0x4f699e, _0x1e3b42) {
      return _0x4f699e + _0x1e3b42
    },
    'eTnbN': '0\x200\x20',
    'UsxnP': 'class',
    'EoVeJ': 'svg-path',
    'zfBUq': 'height',
    'FSUPC': 'width',
    'zYvGS': 'http://www.w3.org/2000/svg',
    'vvZwA': 'svg:svg',
    'Cezxm': 'path',
    'nyPxI': function(_0x3984b0, _0x3a6ebb) {
      return _0x3984b0 || _0x3a6ebb
    },
    'uaOYl': function(_0x5d755a, _0x5715d9) {
      return _0x5d755a < _0x5715d9
    },
    'mVYoB': function(_0x187c53, _0x58391b) {
      return _0x187c53 | _0x58391b
    },
    'ZcGTU': function(_0x7b2541, _0x245253) {
      return _0x7b2541 == _0x245253
    },
    'zWxAa': function(_0x487246, _0xfa220a) {
      return _0x487246 & _0xfa220a
    },
    'rDdmO': function(_0xb93fd7, _0x83e9d9) {
      return _0xb93fd7 + _0x83e9d9
    },
    'FYfIQ': '0|2|5|3|4|6|1',
    'gKMNa': 'body',
    'zsfKW': '1|11|5|7|0|10|9|12|2|4|8|3|6',
    'NrvMt': 'hidden',
    'BiIWm': 'absolute',
    'erlqJ': 'sans-serif',
    'iOVek': '100%',
    'wsvnR': 'threeContainer',
    'tOLzJ': 'cesiumContainer',
    'AOIwH': function(_0x3a8d4a, _0x2229d2) {
      return _0x3a8d4a(_0x2229d2)
    },
    'DQBsb': '未获取到\x20cesiumContainer\x20容器!',
    'siRua': function(_0xe06b38, _0x309876) {
      return _0xe06b38 !== _0x309876
    },
    'pYOBE': '0|3|6|2|7|8|4|1|5',
    'qZcDR': '4|3|2|1|0|5',
    'bQHuk': function(_0x3af631, _0x529ecd) {
      return _0x3af631 / _0x529ecd
    },
    'TxcUX': function(_0x4febd6, _0x2b574c) {
      return _0x4febd6(_0x2b574c)
    },
    'NlOXW': function(_0x4dcc11) {
      return _0x4dcc11()
    },
    'LIbuD': '7|8|11|0|6|4|5|10|12|1|2|9|3',
    'wGtgq': '6|1|5|3|2|0|4',
    'RgegA': function(_0x1aeec8, _0x1b3745) {
      return _0x1aeec8(_0x1b3745)
    },
    'hJKkD': function(_0x17b7d8, _0x5be2c6) {
      return _0x17b7d8 / _0x5be2c6
    },
    'FUcFA': function(_0x57bbbc, _0x522d86) {
      return _0x57bbbc / _0x522d86
    },
    'iOJiz': function(_0x167213, _0x262492) {
      return _0x167213 + _0x262492
    },
    'ZTFJc': '0|8|4|3|9|2|6|5|7|1',
    'QqdPb': '15|8|12|20|10|14|0|2|3|16|7|21|22|19|6|9|17|11|13|5|18|4|1',
    'ZRqbp': 'colorCorrectionHue',
    'CqCch': '环境光',
    'phhFe': 'colorCorrectionBrightness',
    'NMkcL': 'bloomThreshold',
    'UJVkX': '泛光阈值',
    'ZFYxW': 'bloomIntensity',
    'kbEXv': '泛光强度',
    'cLFWX': 'colorCorrectionShow',
    'iqKoF': '颜色校正',
    'WzpoW': 'colorCorrectionSaturation',
    'NlvWH': '饱和度',
    'NYiod': 'hdrEnabled',
    'njsqC': 'HDR开关',
    'QrlvX': 'colorCorrectionContrast',
    'TUbob': '对比度',
    'jPkFG': 'bloomEffectShow',
    'wIxBh': '泛光开关',
    'CxDac': '场景效果',
    'dDriA': '0|2|1|5|3|4',
    'aFdMP': '实体姿态描述',
    'zeXod': 'pitch',
    'WyYig': 'roll',
    'wzfGc': 'heading'
  }

  function _0x596756(_0x38d5fb) {
    if (_0x38d5fb) {
      this['_viewer'] = _0x38d5fb
      this['_layer'] = new Cesium['CustomDataSource'](_0x10ec70['mOBQF'])
      this['_viewer'] && this['_viewer']['dataSources']['add'](this['_layer'])
      this['_install']()
    } else {
      _0x10ec70['cFJLL'](alert, _0x10ec70['xeKNC'])
    }
  }

  _0x596756['prototype']['isMap'] = function() {
    if (this['_viewer'] && Cesium) {
      return !![]
    }
    _0x10ec70['cFJLL'](alert, _0x10ec70['lePZc'])
  }
  _0x596756['prototype']['_install'] = function() {
    if (this['isMap']()) {
      this['_installMaterial']()
      this['_installPlugin']()
      this['_installImageryProvider']()
      if (_0x10ec70['oRaDA'](typeof THREE, _0x10ec70['CrYaZ'])) {
        debugger
        this['_installThreeJs']()
      }
    }
  }
  _0x596756['prototype']['setOneSkyBox'] = function() {
    return new Cesium['SkyBox']({
      'sources': {
        'positiveX': _0x10ec70['imYNK'],
        'negativeX': _0x10ec70['XjCgo'],
        'positiveY': _0x10ec70['TMtMZ'],
        'negativeY': _0x10ec70['uXasm'],
        'positiveZ': _0x10ec70['jjquy'],
        'negativeZ': _0x10ec70['aZPds']
      }
    })
  }
  _0x596756['prototype']['setTwoSkyBox'] = function() {
    return new Cesium['SkyBox']({
      'sources': {
        'positiveX': _0x10ec70['xjkyB'],
        'negativeX': _0x10ec70['dIhVL'],
        'positiveY': _0x10ec70['lxuEW'],
        'negativeY': _0x10ec70['rTnKM'],
        'positiveZ': _0x10ec70['VaZJR'],
        'negativeZ': _0x10ec70['kCjTq']
      }
    })
  }
  _0x596756['prototype']['setThreeSkyBox'] = function() {
    return new Cesium['SkyBox']({
      'sources': {
        'positiveX': _0x10ec70['sCHGe'],
        'negativeX': _0x10ec70['EASuF'],
        'positiveY': _0x10ec70['iAlal'],
        'negativeY': _0x10ec70['MYneU'],
        'positiveZ': _0x10ec70['sEjiT'],
        'negativeZ': _0x10ec70['QNUKp']
      }
    })
  }
  _0x596756['prototype']['setOneGroundSkyBox'] = function() {
    return new Cesium['GroundSkyBox']({
      'sources': {
        'positiveX': _0x10ec70['ekjhn'],
        'negativeX': _0x10ec70['KcEEI'],
        'positiveY': _0x10ec70['HTevu'],
        'negativeY': _0x10ec70['uXbsE'],
        'positiveZ': _0x10ec70['ArCuG'],
        'negativeZ': _0x10ec70['lGAHS']
      }
    })
  }
  _0x596756['prototype']['setTwoGroundSkyBox'] = function() {
    return new Cesium['GroundSkyBox']({
      'sources': {
        'positiveX': _0x10ec70['EJfCy'],
        'negativeX': _0x10ec70['hRPHz'],
        'positiveY': _0x10ec70['sPqEx'],
        'negativeY': _0x10ec70['AZnlX'],
        'positiveZ': _0x10ec70['DAtty'],
        'negativeZ': _0x10ec70['bsnQO']
      }
    })
  }
  _0x596756['prototype']['setThreeGroundSkyBox'] = function() {
    return new Cesium['GroundSkyBox']({
      'sources': {
        'positiveX': _0x10ec70['CJdDL'],
        'negativeX': _0x10ec70['FpCvY'],
        'positiveY': _0x10ec70['VtDQr'],
        'negativeY': _0x10ec70['oGBkq'],
        'positiveZ': _0x10ec70['Icyka'],
        'negativeZ': _0x10ec70['qAmYp']
      }
    })
  }
  _0x596756['prototype']['setDarkEffect'] = function(_0x1a53f4) {
    _0x1a53f4 = _0x10ec70['ucGhh'](_0x1a53f4, {})
    if (this['isMap']()) {
      var _0x3d7878 = _0x10ec70['Tclzb'](_0x10ec70['volgm'](_0x10ec70['volgm'](_0x10ec70['volgm'](_0x10ec70['volgm'](_0x10ec70['volgm'](_0x10ec70['VeEaZ'](_0x10ec70['VeEaZ'](_0x10ec70['VeEaZ'](_0x10ec70['VeEaZ'](_0x10ec70['uAKwD'], _0x10ec70['qAUWA']), _0x10ec70['quQCP']), _0x10ec70['GvZnD']), _0x10ec70['itjmr']), _0x10ec70['khlLS']), _0x10ec70['hwsPE']), _0x10ec70['qtiUZ']), _0x10ec70['WPbga']), _0x10ec70['JSDoC']), '}\x0a')
      return this['_viewer']['scene']['postProcessStages']['add'](new Cesium['PostProcessStage']({
        'name': _0x10ec70['Wzjak'],
        'fragmentShader': _0x3d7878,
        'uniforms': {
          'scale': 0x1, 'offset': function() {
            return _0x1a53f4['offset'] || new Cesium['Cartesian3'](0.1, 0.2, 0.3)
          }
        }
      }))
    }
  }
  _0x596756['prototype']['setRainEffect'] = function() {
    if (this['isMap']()) {
      var _0x4300d9 = _0x10ec70['AdulD']
      return this['_viewer']['scene']['postProcessStages']['add'](new Cesium['PostProcessStage']({
        'name': _0x10ec70['VZJOR'],
        'fragmentShader': _0x4300d9
      }))
    }
  }
  _0x596756['prototype']['setSnowEffect'] = function() {
    if (this['isMap']()) {
      var _0x453a0f = _0x10ec70['rCoQC']
      return this['_viewer']['scene']['postProcessStages']['add'](new Cesium['PostProcessStage']({
        'name': _0x10ec70['qBIft'],
        'fragmentShader': _0x453a0f
      }))
    }
  }
  _0x596756['prototype']['transformCartesianToWGS84'] = function(_0x4bd83b) {
    if (this['isMap']()) {
      if (_0x4bd83b) {
        var _0x2a108f = Cesium['Ellipsoid']['WGS84']
        var _0x5415e0 = _0x2a108f['cartesianToCartographic'](_0x4bd83b)
        return {
          'lng': Cesium['Math']['toDegrees'](_0x5415e0['longitude']),
          'lat': Cesium['Math']['toDegrees'](_0x5415e0['latitude']),
          'alt': _0x5415e0['height']
        }
      }
    }
  }
  _0x596756['prototype']['transformWGS84ArrayToCartesianArray'] = function(_0x3723f1) {
    if (this['isMap']()) {
      var _0x5df315 = this
      return _0x3723f1 ? _0x3723f1['map'](function(_0x32167f) {
        return _0x5df315['transformWGS84ToCartesian'](_0x32167f)
      }) : []
    }
  }
  _0x596756['prototype']['transformWGS84ToCartesian'] = function(_0x1286d3) {
    if (this['isMap']()) {
      return _0x1286d3 ? Cesium['Cartesian3']['fromDegrees'](_0x1286d3['lng'] || _0x1286d3['lon'], _0x1286d3['lat'], _0x1286d3['alt'], Cesium['Ellipsoid']['WGS84']) : Cesium['Cartesian3']['ZERO']
    }
  }
  _0x596756['prototype']['transformCartesianArrayToWGS84Array'] = function(_0x3f3f11) {
    if (this['isMap']()) {
      var _0x4394b6 = this
      return _0x3f3f11 ? _0x3f3f11['map'](function(_0x366621) {
        return _0x4394b6['transformCartesianToWGS84'](_0x366621)
      }) : []
    }
  }
  _0x596756['prototype']['splitcartesianArr'] = function(_0x44d63d) {
    var _0x3f2226 = []
    for (var _0x142154 = 0x0; _0x10ec70['qDkuR'](_0x142154, _0x44d63d['length']); _0x142154 += 0x3) {
      var _0x10a994 = new Cesium['Cartesian3'](_0x44d63d[_0x142154], _0x44d63d[_0x10ec70['VeEaZ'](_0x142154, 0x1)], _0x44d63d[_0x10ec70['VeEaZ'](_0x142154, 0x2)])
      _0x3f2226['push'](_0x10a994)
    }
    _0x3f2226['push'](_0x3f2226[0x0])
    return _0x3f2226
  }
  _0x596756['prototype']['getCatesian3FromPX'] = function(_0x15604d) {
    if (this['isMap']() && _0x15604d) {
      var _0x5a1ce3 = _0x10ec70['gyhkj']['split']('|'), _0x3c92c0 = 0x0
      while (!![]) {
        switch (_0x5a1ce3[_0x3c92c0++]) {
          case'0':
            var _0x195606 = this['_viewer']['scene']['drillPick'](_0x15604d)
            continue
          case'1':
            if (_0xd80874) {
              _0x455b9a = this['_viewer']['scene']['pickPosition'](_0x15604d)
            } else {
              var _0x26b683 = this['_viewer']['camera']['getPickRay'](_0x15604d)
              if (!_0x26b683) return null
              _0x455b9a = this['_viewer']['scene']['globe']['pick'](_0x26b683, this['_viewer']['scene'])
            }
            continue
          case'2':
            for (var _0x307080 = 0x0; _0x10ec70['pFeeX'](_0x307080, _0x195606['length']); _0x307080++) {
              if (_0x10ec70['BUgUV'](_0x195606[_0x307080], Cesium['Cesium3DTileFeature'])) {
                _0xd80874 = !![]
              }
            }
            continue
          case'3':
            var _0xd80874 = ![]
            continue
          case'4':
            return _0x455b9a
          case'5':
            var _0x455b9a
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['getCameraPosition'] = function() {
    var _0x22c5d3 = this['_viewer']['camera']['pickEllipsoid'](new Cesium['Cartesian2'](_0x10ec70['wUyiv'](this['_viewer']['canvas']['clientWidth'], 0x2), _0x10ec70['wUyiv'](this['_viewer']['canvas']['clientHeight'], 0x2)))
    if (_0x22c5d3) {
      var _0x1bcc47 = Cesium['Ellipsoid']['WGS84']['cartesianToCartographic'](_0x22c5d3),
        _0x46e8e3 = _0x10ec70['AjQOd'](_0x10ec70['DTTee'](_0x1bcc47['longitude'], 0xb4), Math['PI']),
        _0x4d4f33 = _0x10ec70['AjQOd'](_0x10ec70['rYpSw'](_0x1bcc47['latitude'], 0xb4), Math['PI'])
      var _0x28bfc5 = this['_viewer']['camera']['_direction'], _0xce97c8 = Cesium['Math']['toDegrees'](_0x28bfc5['x']),
        _0x22f65c = Cesium['Math']['toDegrees'](_0x28bfc5['y']),
        _0x1486a0 = Cesium['Math']['toDegrees'](_0x28bfc5['z']),
        _0xda5ab6 = this['_viewer']['camera']['positionCartographic']['height'],
        _0xc93b42 = Cesium['Math']['toDegrees'](this['_viewer']['camera']['heading']),
        _0x5cd319 = Cesium['Math']['toDegrees'](this['_viewer']['camera']['pitch']),
        _0xc9dc01 = Cesium['Math']['toDegrees'](this['_viewer']['camera']['roll'])
      var _0x71ab98 = this['_viewer']['camera']['computeViewRectangle'](),
        _0x92f618 = _0x10ec70['waYOL'](_0x10ec70['AjQOd'](_0x71ab98['west'], Math['PI']), 0xb4),
        _0x5b9a2a = _0x10ec70['waYOL'](_0x10ec70['AjQOd'](_0x71ab98['north'], Math['PI']), 0xb4),
        _0x42cf99 = _0x10ec70['waYOL'](_0x10ec70['vGcYG'](_0x71ab98['east'], Math['PI']), 0xb4),
        _0x2ccc0e = _0x10ec70['nRQHh'](_0x10ec70['AOUFB'](_0x71ab98['south'], Math['PI']), 0xb4),
        _0x344bda = _0x10ec70['AOUFB'](_0x10ec70['CdJPO'](_0x92f618, _0x42cf99), 0x2),
        _0x56b655 = _0x10ec70['Rbgth'](_0x10ec70['CdJPO'](_0x5b9a2a, _0x2ccc0e), 0x2)
      return {
        'lon': _0x46e8e3,
        'lat': _0x4d4f33,
        'height': _0xda5ab6,
        'heading': _0xc93b42,
        'pitch': _0x5cd319,
        'roll': _0xc9dc01,
        'position': this['_viewer']['camera']['position'],
        'center': { 'x': _0x344bda, 'y': _0x56b655 },
        'direction': new Cesium['Cartesian3'](_0xce97c8, _0x22f65c, _0x1486a0)
      }
    }
  }
  _0x596756['prototype']['getHandelPosition'] = function(_0x235119) {
    if (this['isMap']()) {
      var _0x3cf718 = new Cesium['ScreenSpaceEventHandler'](this['_viewer']['scene']['canvas']), _0x53b238 = this
      _0x3cf718['setInputAction'](function(_0x34220e) {
        var _0x55bf6f = _0x53b238['_viewer']['scene']['camera']['pickEllipsoid'](_0x34220e['endPosition'], _0x53b238['_viewer']['scene']['globe']['ellipsoid'])
        if (_0x10ec70['dixrO'](typeof _0x235119, _0x10ec70['RsiAF'])) {
          _0x10ec70['AXmUJ'](_0x235119, _0x53b238['transformCartesianToWGS84'](_0x55bf6f), _0x3cf718)
        }
      }, Cesium['ScreenSpaceEventType']['MOUSE_MOVE'])
    }
  }
  _0x596756['prototype']['setView'] = function(_0x1eb153) {
    if (this['isMap']() && _0x1eb153) {
      if (_0x1eb153['distance']) {
        var _0x3cbaa4 = new Cesium['Cartesian3'](0x0, _0x1eb153['distance'], _0x1eb153['distance'])
        _0x1eb153['position'] = Cesium['Cartesian3']['add'](_0x1eb153['position'], _0x3cbaa4, new Cesium['Cartesian3']())
      }
      this['_viewer']['scene']['camera']['setView']({
        'destination': _0x1eb153['position'],
        'orientation': _0x1eb153['orientation'] || {
          'heading': Cesium['Math']['toRadians'](0x5a),
          'pitch': Cesium['Math']['toRadians'](0x5a),
          'roll': Cesium['Math']['toRadians'](0x0)
        }
      })
    }
  }
  _0x596756['prototype']['flyTo'] = function(_0x34c8a8) {
    if (this['isMap']() && _0x34c8a8) {
      if (_0x34c8a8['distance']) {
        var _0xc8630c = new Cesium['Cartesian3'](0x0, _0x34c8a8['distance'], _0x34c8a8['distance'])
        _0x34c8a8['position'] = Cesium['Cartesian3']['add'](_0x34c8a8['position'], _0xc8630c, new Cesium['Cartesian3']())
      }
      this['_viewer']['scene']['camera']['flyTo']({
        'destination': _0x34c8a8['position'],
        'orientation': _0x34c8a8['orientation'] || {
          'heading': Cesium['Math']['toRadians'](0x5a),
          'pitch': Cesium['Math']['toRadians'](0x5a),
          'roll': Cesium['Math']['toRadians'](0x0)
        },
        'easingFunction': _0x34c8a8['easingFunction'] || Cesium['EasingFunction']['LINEAR_NONE'],
        'duration': _0x34c8a8['duration'] || 0x3,
        'complete': _0x34c8a8['callback']
      })
    }
  }
  _0x596756['prototype']['setHypsometric'] = function(_0x441a6b, _0x4b0e6d) {
    _0x4b0e6d = _0x10ec70['ucGhh'](_0x4b0e6d, {})
    if (this['isMap']() && _0x441a6b) {
      var _0x42249e = _0x10ec70['qRJzn']['split']('|'), _0x4a9e90 = 0x0
      while (!![]) {
        switch (_0x42249e[_0x4a9e90++]) {
          case'0':
            _0xa744a['emissionTexCoordUSpeed'] = _0x4b0e6d['emissionTexCoordUSpeed'] || 0.5
            continue
          case'1':
            var _0xa744a = new Cesium['HypsometricSetting']()
            continue
          case'2':
            _0xa744a['Opacity'] = 0x1
            continue
          case'3':
            _0xa744a['emissionTextureUrl'] = _0x4b0e6d['emissionTextureUrl'] || _0x10ec70['Nxrkd']
            continue
          case'4':
            _0x441a6b['hypsometricSetting'] = { 'hypsometricSetting': _0xa744a }
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['setPointLight'] = function(_0x2ee79c, _0x58da88) {
    if (this['isMap']() && _0x2ee79c) {
      var _0x1ce347 = _0x10ec70['SlNhw']['split']('|'), _0x44ab12 = 0x0
      while (!![]) {
        switch (_0x1ce347[_0x44ab12++]) {
          case'0':
            this['_viewer']['scene']['addLightSource'](_0x268d22)
            continue
          case'1':
            var _0x268d22 = new Cesium['PointLight'](_0x2ee79c, _0x58da88)
            continue
          case'2':
            return _0x268d22
          case'3':
            var _0x220f27 = {
              'color': _0x58da88['color'] || new Cesium['Color'](0x1, 0x1, 0x2, 0.8),
              'cutoffDistance': _0x58da88['cutoffDistance'] || 0x3e8,
              'decay': _0x58da88['decay'] || 0.5,
              'intensity': _0x58da88['intensity'] || 0x1
            }
            continue
          case'4':
            _0x58da88 = _0x10ec70['IUnEJ'](_0x58da88, _0x220f27)
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['setDirectionalLight'] = function(_0x24bb76, _0x258e14) {
    if (this['isMap']() && _0x24bb76) {
      var _0x12e30d = _0x10ec70['HKTDv']['split']('|'), _0x5de9f1 = 0x0
      while (!![]) {
        switch (_0x12e30d[_0x5de9f1++]) {
          case'0':
            var _0x394d20 = new Cesium['DirectionalLight'](_0x24bb76, _0x258e14)
            continue
          case'1':
            return _0x394d20
          case'2':
            this['_viewer']['scene']['addLightSource'](_0x394d20)
            continue
          case'3':
            _0x258e14 = _0x10ec70['YQqwz'](_0x258e14, _0x478d7f)
            continue
          case'4':
            var _0x478d7f = {
              'targetPosition': _0x258e14['targetPosition'],
              'color': _0x258e14['color'] || new Cesium['Color'](0x1, 0x1, 0x2, 0.8),
              'intensity': _0x258e14['intensity'] || 0x1
            }
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['setFlameParticle'] = function(_0x3d8469) {
    if (this['isMap']() && _0x3d8469 && _0x3d8469['position']) {
      var _0x224b93 = this['_viewer']['entities']['add']({ 'position': _0x3d8469['position'] }),
        _0x4514d7 = new Cesium['Matrix4'](), _0xd10dae = new Cesium['Cartesian3'](),
        _0x2ebe4d = new Cesium['Quaternion'](), _0x25dcae = new Cesium['HeadingPitchRoll'](),
        _0x2c9b28 = new Cesium['TranslationRotationScale'](),
        _0x406131 = this['_viewer']['scene']['primitives']['add'](new Cesium['ParticleSystem']({
          'image': _0x3d8469['image'] || _0x10ec70['KGQzQ'],
          'startColor': _0x3d8469['startColor'] || new Cesium['Color'](0x1, 0x1, 0x1, 0x1),
          'endColor': _0x3d8469['endColor'] || new Cesium['Color'](0.5, 0x0, 0x0, 0x0),
          'startScale': _0x3d8469['startScale'] || 0x5,
          'endScale': _0x3d8469['endScale'] || 3.5,
          'minimumParticleLife': _0x3d8469['minimumParticleLife'] || 1.5,
          'maximumParticleLife': _0x3d8469['maximumParticleLife'] || 1.8,
          'minimumSpeed': _0x3d8469['minimumSpeed'] || 0x7,
          'maximumSpeed': _0x3d8469['maximumSpeed'] || 0x9,
          'imageSize': _0x3d8469['imageSize'] || new Cesium['Cartesian2'](0x2, 0x2),
          'emissionRate': _0x3d8469['emissionRate'] || 0xc8,
          'lifetime': _0x3d8469['lifetime'] || 0x6,
          'loop': !![],
          'emitter': _0x3d8469['emitter'] || new Cesium['BoxEmitter'](new Cesium['Cartesian3'](0xa, 0xa, 0xa)),
          'sizeInMeters': !![]
        }))
      this['_viewer']['scene']['preUpdate']['addEventListener'](function(_0x29cd1c, _0x403b36) {
        _0x406131['modelMatrix'] = _0x10ec70['tKKwb'](_0x4031c7, _0x224b93, _0x403b36)
        _0x406131['emitterModelMatrix'] = _0x10ec70['XHgEF'](_0x9850a8)
      })

      function _0x4031c7(_0xbbc4dd, _0x200bc6) {
        return _0xbbc4dd['computeModelMatrix'](_0x200bc6, new Cesium['Matrix4']())
      }

      function _0x9850a8() {
        _0x25dcae = Cesium['HeadingPitchRoll']['fromDegrees'](0x0, 0x0, 0x0, _0x25dcae)
        _0x2c9b28['translation'] = Cesium['Cartesian3']['fromElements'](_0x3d8469['tx'], _0x3d8469['ty'], _0x3d8469['tz'], _0xd10dae)
        _0x2c9b28['rotation'] = Cesium['Quaternion']['fromHeadingPitchRoll'](_0x25dcae, _0x2ebe4d)
        return Cesium['Matrix4']['fromTranslationRotationScale'](_0x2c9b28, _0x4514d7)
      }

      return _0x406131
    }
  }
  _0x596756['prototype']['setRainParticle'] = function() {
    if (this['isMap']()) {
      var _0x393bef = _0x10ec70['ToSkp']['split']('|'), _0x17a5ef = 0x0
      while (!![]) {
        switch (_0x393bef[_0x17a5ef++]) {
          case'0':
            this['_viewer']['scene']['logarithmicDepthBuffer'] = !![]
            continue
          case'1':
            _0x3a06e5['lodRangeScale'] = 0x2710
            continue
          case'2':
            return this['_viewer']['scene']['primitives']['add'](_0x3a06e5)
          case'3':
            var _0x3a06e5 = new Cesium['ParticleSystem']({
              'modelMatrix': new Cesium['Matrix4']['fromTranslation'](this['_viewer']['scene']['camera']['position']),
              'speed': -0x1,
              'lifetime': 0xa,
              'emitter': new Cesium['SphereEmitter'](_0x231273),
              'startScale': 0x1,
              'endScale': 0x1,
              'image': _0x10ec70['fKUux'],
              'emissionRate': 0xbb8,
              'startColor': new Cesium['Color'](0x1, 0x1, 0x1, 0.8),
              'endColor': new Cesium['Color'](0x1, 0x1, 0x1, 0.8),
              'imageSize': _0x3320c9,
              'updateCallback': _0x50c140,
              'performance': ![]
            })
            continue
          case'4':
            var _0x4fee39 = _0x10ec70['SIAIz'](this['_viewer']['scene']['drawingBufferWidth'], 0x50), _0x231273 = 0xfa0,
              _0x3320c9 = new Cesium['Cartesian2'](_0x4fee39, _0x10ec70['nRQHh'](_0x4fee39, 0x3)),
              _0x19e055 = new Cesium['Cartesian3'](), _0x265cbe = this
            continue
          case'5':
            var _0x50c140 = function(_0x40ab1f, _0x589eb0) {
              var _0x8a1f7b = _0x10ec70['qbjjX']['split']('|'), _0x26f6fb = 0x0
              while (!![]) {
                switch (_0x8a1f7b[_0x26f6fb++]) {
                  case'0':
                    _0x19e055 = Cesium['Cartesian3']['multiplyByScalar'](_0x19e055, -0x28, _0x19e055)
                    continue
                  case'1':
                    if (_0x10ec70['BatQp'](_0x59a6ef, _0x231273)) {
                      _0x40ab1f['endColor']['alpha'] = 0x0
                    } else {
                      _0x40ab1f['endColor']['alpha'] = _0x10ec70['IPisx'](_0x3a06e5['endColor']['alpha'], _0x10ec70['tcnKQ'](_0x10ec70['IPisx'](_0x59a6ef, _0x231273), 0.1))
                    }
                    continue
                  case'2':
                    _0x19e055 = Cesium['Cartesian3']['normalize'](_0x40ab1f['position'], _0x19e055)
                    continue
                  case'3':
                    var _0x59a6ef = Cesium['Cartesian3']['distance'](_0x265cbe['_viewer']['scene']['camera']['position'], _0x40ab1f['position'])
                    continue
                  case'4':
                    _0x40ab1f['position'] = Cesium['Cartesian3']['add'](_0x40ab1f['position'], _0x19e055, _0x40ab1f['position'])
                    continue
                }
                break
              }
            }
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['setScanCircleEffect'] = function(_0x2bf222) {
    if (this['isMap']() && _0x2bf222 && _0x2bf222['position']) {
      var _0xd96ed0 = _0x10ec70['AikUO']['split']('|'), _0x53c34a = 0x0
      while (!![]) {
        switch (_0xd96ed0[_0x53c34a++]) {
          case'0':
            this['_viewer']['scene']['scanEffect']['centerPostion'] = _0x2bf222['position']
            continue
          case'1':
            this['_viewer']['scene']['scanEffect']['color'] = _0x2bf222['color'] || new Cesium['Color'](0x2, 0x1, 0x1, 0x1)
            continue
          case'2':
            this['_viewer']['scene']['scanEffect']['show'] = !![]
            continue
          case'3':
            this['_viewer']['scene']['scanEffect']['speed'] = 0x320
            continue
          case'4':
            this['_viewer']['scene']['scanEffect']['textureUrl'] = _0x2bf222['textureUrl'] || _0x10ec70['ZRrjP']
            continue
          case'5':
            this['_viewer']['scene']['scanEffect']['mode'] = Cesium['ScanEffectMode']['CIRCLE']
            continue
          case'6':
            this['_viewer']['scene']['scanEffect']['period'] = _0x2bf222['period'] || 0x3
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['setCircleScanEffect'] = function(_0x298bbd) {
    var _0x5bf9e8 = {
      'nuRdW': _0x10ec70['QUhKO'], 'Bviog': function(_0x140aee, _0x1d3cbb) {
        return _0x10ec70['cFZRp'](_0x140aee, _0x1d3cbb)
      }, 'hafFm': function(_0xbc0d36, _0x546f38) {
        return _0x10ec70['qptzJ'](_0xbc0d36, _0x546f38)
      }, 'JEdCV': function(_0x2a10ae, _0x255728) {
        return _0x10ec70['GiuoT'](_0x2a10ae, _0x255728)
      }, 'BzgyW': _0x10ec70['uoRWT'], 'jCGVB': function(_0x239fb5, _0x2f3e04) {
        return _0x10ec70['SIAIz'](_0x239fb5, _0x2f3e04)
      }, 'GDWQB': function(_0x233c04, _0x2402aa) {
        return _0x10ec70['nRQHh'](_0x233c04, _0x2402aa)
      }, 'hcnvq': function(_0x579e85, _0x3e095e) {
        return _0x10ec70['VOpmU'](_0x579e85, _0x3e095e)
      }
    }
    if (this['isMap']() && _0x298bbd && _0x298bbd['position']) {
      var _0x2e5dc3 = _0x10ec70['wOXbb']['split']('|'), _0x137fa4 = 0x0
      while (!![]) {
        switch (_0x2e5dc3[_0x137fa4++]) {
          case'0':
            var _0x58f5a4 = new Cesium['Cartesian4'](_0x195742['x'], _0x195742['y'], _0x195742['z'], 0x1)
            continue
          case'1':
            var _0x1fa25e = new Cesium['PostProcessStage']({
              'name': _0x8dc134, 'fragmentShader': this['_getCircleScanMaterail'](_0x210172), 'uniforms': {
                'u_scanCenterEC': function() {
                  return Cesium['Matrix4']['multiplyByVector'](_0x48611c['_viewer']['camera']['_viewMatrix'], _0x4a0dfd, new Cesium['Cartesian4']())
                }, 'u_scanPlaneNormalEC': function() {
                  var _0x7f2d56 = _0x5bf9e8['nuRdW']['split']('|'), _0x2a2849 = 0x0
                  while (!![]) {
                    switch (_0x7f2d56[_0x2a2849++]) {
                      case'0':
                        var _0x4a4159 = new Cesium['Cartesian3']()
                        continue
                      case'1':
                        _0x4a4159['y'] = _0x5bf9e8['Bviog'](_0x828b88['y'], _0x53a2e8['y'])
                        continue
                      case'2':
                        return _0x4a4159
                      case'3':
                        _0x4a4159['x'] = _0x5bf9e8['Bviog'](_0x828b88['x'], _0x53a2e8['x'])
                        continue
                      case'4':
                        var _0x828b88 = Cesium['Matrix4']['multiplyByVector'](_0x48611c['_viewer']['camera']['_viewMatrix'], _0x58f5a4, new Cesium['Cartesian4']())
                        continue
                      case'5':
                        _0x4a4159['z'] = _0x5bf9e8['hafFm'](_0x828b88['z'], _0x53a2e8['z'])
                        continue
                      case'6':
                        var _0x53a2e8 = Cesium['Matrix4']['multiplyByVector'](_0x48611c['_viewer']['camera']['_viewMatrix'], _0x4a0dfd, new Cesium['Cartesian4']())
                        continue
                      case'7':
                        Cesium['Cartesian3']['normalize'](_0x4a4159, _0x4a4159)
                        continue
                    }
                    break
                  }
                }, 'u_radius': function() {
                  if (_0x5bf9e8['JEdCV'](_0x167a53, _0x5bf9e8['BzgyW'])) {
                    return _0x5bf9e8['jCGVB'](_0x5bf9e8['GDWQB'](_0xa75466, _0x5bf9e8['hcnvq'](_0x5bf9e8['hafFm'](new Date()['getTime'](), _0x161fac), _0x37795c)), _0x37795c)
                  } else {
                    return _0xa75466
                  }
                }, 'u_scanColor': _0x19f1cf
              }
            })
            continue
          case'2':
            var _0x161fac = new Date()['getTime']()
            continue
          case'3':
            this['_viewer']['scene']['postProcessStages']['add'](_0x1fa25e)
            continue
          case'4':
            var _0x260784 = _0x50002d
            continue
          case'5':
            return _0x1fa25e
          case'6':
            var _0x195742 = this['transformWGS84ToCartesian']({
              'lng': _0x55ef3d['lng'],
              'lat': _0x55ef3d['lat'],
              'alt': _0x10ec70['tcnKQ'](_0x55ef3d['alt'], 0x1f4)
            })
            continue
          case'7':
            var _0x8dc134 = _0x298bbd['id'] || _0x10ec70['ndEDb'], _0x50002d = _0x298bbd['position'],
              _0xa75466 = _0x298bbd['radius'], _0x19f1cf = _0x298bbd['color'] || Cesium['Color']['RED'],
              _0x37795c = _0x298bbd['duration'] || 0x5dc, _0x48611c = this,
              _0x167a53 = _0x298bbd['circleMode'] || _0x10ec70['uoRWT'], _0x210172 = _0x298bbd['border'] || 0x4
            continue
          case'8':
            var _0x55ef3d = this['transformCartesianToWGS84'](_0x50002d)
            continue
          case'9':
            var _0x4a0dfd = new Cesium['Cartesian4'](_0x260784['x'], _0x260784['y'], _0x260784['z'], 0x1)
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['setRadarScanEffect'] = function(_0x2cedd5) {
    var _0x45aeb3 = {
      'lnByX': _0x10ec70['ygEMx'], 'heveE': function(_0x33efc3, _0x445e5d) {
        return _0x10ec70['fzCqr'](_0x33efc3, _0x445e5d)
      }, 'KQnQy': function(_0x4915f9, _0x1c9cbb) {
        return _0x10ec70['fzCqr'](_0x4915f9, _0x1c9cbb)
      }, 'qLmPJ': function(_0x44741c, _0x1a0421) {
        return _0x10ec70['nwmfs'](_0x44741c, _0x1a0421)
      }, 'lKwJX': function(_0x284237, _0x578fb7) {
        return _0x10ec70['ylQXE'](_0x284237, _0x578fb7)
      }, 'lAxgy': function(_0x538876, _0x311ad9) {
        return _0x10ec70['nRQHh'](_0x538876, _0x311ad9)
      }, 'vQVbY': function(_0x356ec6, _0x272dee) {
        return _0x10ec70['SIAIz'](_0x356ec6, _0x272dee)
      }, 'eVWuT': function(_0x54ad7d, _0x461d8c) {
        return _0x10ec70['VOpmU'](_0x54ad7d, _0x461d8c)
      }
    }
    if (this['isMap']() && _0x2cedd5 && _0x2cedd5['position']) {
      var _0x51ea85 = _0x10ec70['isNmK']['split']('|'), _0x4579cf = 0x0
      while (!![]) {
        switch (_0x51ea85[_0x4579cf++]) {
          case'0':
            var _0x3a8098 = new Cesium['Cartesian3']()
            continue
          case'1':
            return _0x40ae06
          case'2':
            var _0x12e0c1 = new Cesium['Cartesian4']()
            continue
          case'3':
            var _0x1c8237 = new Cesium['Cartesian4']()
            continue
          case'4':
            var _0x4fec41 = new Date()['getTime']()
            continue
          case'5':
            var _0x40ae06 = new Cesium['PostProcessStage']({
              'name': _0x5da4d5, 'fragmentShader': this['_getRadarScanMaterail'](), 'uniforms': {
                'u_scanCenterEC': function() {
                  return Cesium['Matrix4']['multiplyByVector'](_0x44f98e['_viewer']['camera']['_viewMatrix'], _0x5c0dc8, _0x26d1ae)
                }, 'u_scanPlaneNormalEC': function() {
                  var _0x823f5d = _0x10ec70['euGxA']['split']('|'), _0x35a613 = 0x0
                  while (!![]) {
                    switch (_0x823f5d[_0x35a613++]) {
                      case'0':
                        _0x3a8098['z'] = _0x10ec70['qptzJ'](_0x47d89e['z'], _0x36139c['z'])
                        continue
                      case'1':
                        _0x3a8098['y'] = _0x10ec70['fzCqr'](_0x47d89e['y'], _0x36139c['y'])
                        continue
                      case'2':
                        return _0x3a8098
                      case'3':
                        _0x3a8098['x'] = _0x10ec70['fzCqr'](_0x47d89e['x'], _0x36139c['x'])
                        continue
                      case'4':
                        var _0x36139c = Cesium['Matrix4']['multiplyByVector'](_0x44f98e['_viewer']['camera']['_viewMatrix'], _0x5c0dc8, _0x26d1ae)
                        continue
                      case'5':
                        Cesium['Cartesian3']['normalize'](_0x3a8098, _0x3a8098)
                        continue
                      case'6':
                        var _0x47d89e = Cesium['Matrix4']['multiplyByVector'](_0x44f98e['_viewer']['camera']['_viewMatrix'], _0x150366, _0x1c8237)
                        continue
                    }
                    break
                  }
                }, 'u_scanLineNormalEC': function() {
                  var _0x488a13 = _0x45aeb3['lnByX']['split']('|'), _0x257575 = 0x0
                  while (!![]) {
                    switch (_0x488a13[_0x257575++]) {
                      case'0':
                        return _0x388c5f
                      case'1':
                        Cesium['Matrix3']['fromQuaternion'](_0x58be07, _0x1a887b)
                        continue
                      case'2':
                        _0x3a8098['x'] = _0x45aeb3['heveE'](_0x54dae6['x'], _0x5d2814['x'])
                        continue
                      case'3':
                        _0x388c5f['z'] = _0x45aeb3['KQnQy'](_0x25b01a['z'], _0x5d2814['z'])
                        continue
                      case'4':
                        _0x3a8098['y'] = _0x45aeb3['KQnQy'](_0x54dae6['y'], _0x5d2814['y'])
                        continue
                      case'5':
                        Cesium['Cartesian3']['normalize'](_0x3a8098, _0x3a8098)
                        continue
                      case'6':
                        var _0x25b01a = Cesium['Matrix4']['multiplyByVector'](_0x44f98e['_viewer']['camera']['_viewMatrix'], _0x17a14c, _0x12e0c1)
                        continue
                      case'7':
                        _0x3a8098['z'] = _0x45aeb3['qLmPJ'](_0x54dae6['z'], _0x5d2814['z'])
                        continue
                      case'8':
                        Cesium['Cartesian3']['normalize'](_0x388c5f, _0x388c5f)
                        continue
                      case'9':
                        _0x388c5f['y'] = _0x45aeb3['lKwJX'](_0x25b01a['y'], _0x5d2814['y'])
                        continue
                      case'10':
                        Cesium['Quaternion']['fromAxisAngle'](_0x3a8098, _0x45aeb3['lAxgy'](_0x45aeb3['lAxgy'](_0x5d38cc, Cesium['Math']['PI']), 0x2), _0x58be07)
                        continue
                      case'11':
                        var _0x54dae6 = Cesium['Matrix4']['multiplyByVector'](_0x44f98e['_viewer']['camera']['_viewMatrix'], _0x150366, _0x1c8237)
                        continue
                      case'12':
                        var _0x5d2814 = Cesium['Matrix4']['multiplyByVector'](_0x44f98e['_viewer']['camera']['_viewMatrix'], _0x5c0dc8, _0x26d1ae)
                        continue
                      case'13':
                        _0x388c5f['x'] = _0x45aeb3['lKwJX'](_0x25b01a['x'], _0x5d2814['x'])
                        continue
                      case'14':
                        Cesium['Matrix3']['multiplyByVector'](_0x1a887b, _0x388c5f, _0x388c5f)
                        continue
                      case'15':
                        var _0x5d38cc = _0x45aeb3['vQVbY'](_0x45aeb3['eVWuT'](_0x45aeb3['lKwJX'](new Date()['getTime'](), _0x4fec41), _0x36ddc1), _0x36ddc1)
                        continue
                    }
                    break
                  }
                }, 'u_radius': _0x4b00b0, 'u_scanColor': _0x393805
              }
            })
            continue
          case'6':
            var _0x20f185 = this['transformWGS84ToCartesian']({
              'lng': _0x59ad1d['lng'],
              'lat': _0x59ad1d['lat'],
              'alt': _0x10ec70['PhiCh'](_0x59ad1d['alt'], 0x1f4)
            })
            continue
          case'7':
            var _0x1a887b = new Cesium['Matrix3']()
            continue
          case'8':
            var _0x5da4d5 = _0x2cedd5['id'] || _0x10ec70['vvLCg'], _0x567b0c = _0x2cedd5['position'],
              _0x4b00b0 = _0x2cedd5['radius'], _0x393805 = _0x2cedd5['color'] || Cesium['Color']['RED'],
              _0x36ddc1 = _0x2cedd5['duration'] || 0x5dc, _0x44f98e = this
            continue
          case'9':
            var _0x59ad1d = this['transformCartesianToWGS84'](_0x567b0c)
            continue
          case'10':
            var _0x58be07 = new Cesium['Quaternion']()
            continue
          case'11':
            var _0x150366 = new Cesium['Cartesian4'](_0x20f185['x'], _0x20f185['y'], _0x20f185['z'], 0x1)
            continue
          case'12':
            this['_viewer']['scene']['postProcessStages']['add'](_0x40ae06)
            continue
          case'13':
            var _0x388c5f = new Cesium['Cartesian3']()
            continue
          case'14':
            var _0x5de43d = _0x567b0c
            continue
          case'15':
            var _0x5c0dc8 = new Cesium['Cartesian4'](_0x5de43d['x'], _0x5de43d['y'], _0x5de43d['z'], 0x1)
            continue
          case'16':
            var _0x17a14c = new Cesium['Cartesian4'](_0x1a13d7['x'], _0x1a13d7['y'], _0x1a13d7['z'], 0x1)
            continue
          case'17':
            var _0x26d1ae = new Cesium['Cartesian4']()
            continue
          case'18':
            var _0x1a13d7 = this['transformWGS84ToCartesian']({
              'lng': _0x10ec70['PhiCh'](_0x59ad1d['lng'], 0.001),
              'lat': _0x59ad1d['lat'],
              'alt': _0x59ad1d['alt']
            })
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['setScanLineEffect'] = function(_0xc91898) {
    if (this['isMap']() && _0xc91898 && _0xc91898['positions']) {
      var _0x123e24 = _0x10ec70['bjYQj']['split']('|'), _0x17efdb = 0x0
      while (!![]) {
        switch (_0x123e24[_0x17efdb++]) {
          case'0':
            this['_viewer']['scene']['scanEffect']['centerPostion'] = _0xc91898['positions'][0x0]
            continue
          case'1':
            this['_viewer']['scene']['scanEffect']['color'] = _0xc91898['color'] || new Cesium['Color'](0x1, 0x1, 0x1, 0x1)
            continue
          case'2':
            this['_viewer']['scene']['scanEffect']['period'] = _0xc91898['period'] || 0x3
            continue
          case'3':
            this['_viewer']['scene']['scanEffect']['mode'] = Cesium['ScanEffectMode']['LINE']
            continue
          case'4':
            this['_viewer']['scene']['scanEffect']['textureUrl'] = _0xc91898['textureUrl'] || _0x10ec70['GPNvn']
            continue
          case'5':
            this['_viewer']['scene']['scanEffect']['lineMoveDirection'] = _0x13f167
            continue
          case'6':
            Cesium['Cartesian3']['subtract'](_0xc91898['positions'][0x0], _0xc91898['positions'][0x1], _0x13f167)
            continue
          case'7':
            var _0x13f167 = new Cesium['Cartesian3']()
            continue
          case'8':
            this['_viewer']['scene']['scanEffect']['show'] = !![]
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['addLightScanEntity'] = function(_0xe5de94) {
    var _0x15dd92 = {
      'ApYFA': function(_0x2a2b5b, _0x984e1b) {
        return _0x10ec70['pFeeX'](_0x2a2b5b, _0x984e1b)
      }, 'RZKnW': function(_0x630d61, _0x2f42fe) {
        return _0x10ec70['wnqUm'](_0x630d61, _0x2f42fe)
      }, 'NSSzv': function(_0x4d427a, _0x547318) {
        return _0x10ec70['ylQXE'](_0x4d427a, _0x547318)
      }, 'iQWGP': function(_0x177b29, _0x5b9369) {
        return _0x10ec70['DHwSo'](_0x177b29, _0x5b9369)
      }, 'zRiHm': _0x10ec70['AFOrx'], 'GNHnU': _0x10ec70['bISUB'], 'UPBVe': function(_0x351181, _0x2b6aa9) {
        return _0x10ec70['ylQXE'](_0x351181, _0x2b6aa9)
      }, 'QkuVa': function(_0x4cedc2, _0x44797b) {
        return _0x10ec70['PKwqh'](_0x4cedc2, _0x44797b)
      }, 'aLzvK': function(_0x9e23ac, _0x49ae0d) {
        return _0x10ec70['Myglx'](_0x9e23ac, _0x49ae0d)
      }, 'aJHAN': function(_0x497809, _0x50d175) {
        return _0x10ec70['PKwqh'](_0x497809, _0x50d175)
      }, 'utrZR': _0x10ec70['iIBiR'], 'KqpXj': function(_0x36f11f, _0x34db01) {
        return _0x10ec70['QncvT'](_0x36f11f, _0x34db01)
      }, 'qHtSe': function(_0x4af803, _0x5b0597) {
        return _0x10ec70['QikHx'](_0x4af803, _0x5b0597)
      }, 'PLCjA': _0x10ec70['lLwqq'], 'MKmla': function(_0xc5f158, _0x3a0666) {
        return _0x10ec70['uyKhc'](_0xc5f158, _0x3a0666)
      }, 'lQiOm': function(_0x474e4c, _0x4aa3f8) {
        return _0x10ec70['gDuJK'](_0x474e4c, _0x4aa3f8)
      }, 'DxNrc': function(_0x2f48c9, _0x3beba2) {
        return _0x10ec70['lRTpD'](_0x2f48c9, _0x3beba2)
      }, 'qwJAb': function(_0x1bd03c, _0x488fa9) {
        return _0x10ec70['bvzBN'](_0x1bd03c, _0x488fa9)
      }, 'xEYdU': function(_0x150904, _0x2625f2) {
        return _0x10ec70['JRQIV'](_0x150904, _0x2625f2)
      }, 'SPRzu': function(_0x68f86c, _0x427259) {
        return _0x10ec70['bztZf'](_0x68f86c, _0x427259)
      }, 'NFGVa': function(_0x4a5106, _0x2c7365) {
        return _0x10ec70['xXHlJ'](_0x4a5106, _0x2c7365)
      }, 'DeETJ': function(_0x321c4c, _0x246060) {
        return _0x10ec70['FOHyu'](_0x321c4c, _0x246060)
      }
    }
    if (this['isMap']()) {
      var _0x1a0b80 = this
      var _0x368007 = function(_0x136576, _0x38b20d, _0x98f214, _0x520a02) {
        var _0x1b90c3 = []
        var _0x506c8a = _0x10ec70['nRQHh'](_0x10ec70['ikEGx'](Math['PI'], 0xb4), Math['round'](_0x10ec70['PKwqh'](0x168, _0x520a02))),
          _0x50c40e = 0x0
        for (; _0x10ec70['pFeeX'](_0x50c40e, _0x520a02); _0x50c40e++) {
          var _0x42911e = _0x10ec70['DHwSo'](_0x38b20d, _0x10ec70['pgKQD'](_0x136576, Math['sin'](_0x10ec70['bztZf'](_0x506c8a, _0x50c40e)))),
            _0x26d4e7 = _0x10ec70['DHwSo'](_0x98f214, _0x10ec70['bztZf'](_0x136576, Math['cos'](_0x10ec70['bztZf'](_0x506c8a, _0x50c40e))))
          _0x1b90c3['unshift']({ 'x': _0x42911e, 'y': _0x26d4e7 })
        }
        return _0x1b90c3
      }
      var _0x14e355 = function(_0x189408, _0x6383fd) {
        var _0xb3b239 = _0x6383fd['observer'][0x0], _0x1f78fb = _0x6383fd['observer'][0x1],
          _0x132103 = _0x6383fd['observer'][0x2]
        var _0x3eb887 = []
        for (var _0x357da3 = 0x0; _0x15dd92['ApYFA'](_0x357da3, _0x189408['length']); _0x357da3++) {
          var _0x1a8263
          if (_0x15dd92['RZKnW'](_0x357da3, _0x15dd92['NSSzv'](_0x189408['length'], 0x1))) {
            _0x1a8263 = new Cesium['PolygonHierarchy'](Cesium['Cartesian3']['fromDegreesArrayHeights']([_0xb3b239, _0x1f78fb, _0x132103, _0x189408[_0x357da3]['x'], _0x189408[_0x357da3]['y'], 0x0, _0x189408[0x0]['x'], _0x189408[0x0]['y'], 0x0]))
          } else {
            _0x1a8263 = new Cesium['PolygonHierarchy'](Cesium['Cartesian3']['fromDegreesArrayHeights']([_0xb3b239, _0x1f78fb, _0x132103, _0x189408[_0x357da3]['x'], _0x189408[_0x357da3]['y'], 0x0, _0x189408[_0x15dd92['iQWGP'](_0x357da3, 0x1)]['x'], _0x189408[_0x15dd92['iQWGP'](_0x357da3, 0x1)]['y'], 0x0]))
          }
          var _0x53e792 = _0x1a0b80['_viewer']['entities']['add']({
            'name': _0x15dd92['zRiHm'],
            'polygon': {
              'hierarchy': _0x1a8263,
              'outline': ![],
              'perPositionHeight': !![],
              'material': _0x6383fd['material']
            }
          })
          _0x3eb887['push'](_0x53e792)
        }
        return _0x3eb887
      }
      var _0x46a489 = function(_0x2ab9a1, _0x35a533, _0x32445f) {
        var _0x317c14 = {
          'Zfjlb': _0x15dd92['GNHnU'], 'jhoZZ': function(_0xe6436, _0x4f0105) {
            return _0x15dd92['UPBVe'](_0xe6436, _0x4f0105)
          }, 'RDXCJ': function(_0x5e96fd, _0x50a4fe) {
            return _0x15dd92['iQWGP'](_0x5e96fd, _0x50a4fe)
          }, 'rwtvi': function(_0x31b3db, _0x540050) {
            return _0x15dd92['QkuVa'](_0x31b3db, _0x540050)
          }, 'PYzSy': function(_0x45d2a2, _0x570af3) {
            return _0x15dd92['UPBVe'](_0x45d2a2, _0x570af3)
          }, 'nSugA': function(_0x612d49, _0x3043d4) {
            return _0x15dd92['aLzvK'](_0x612d49, _0x3043d4)
          }, 'TVGIh': function(_0x50e1bb, _0x3a32b1) {
            return _0x15dd92['aJHAN'](_0x50e1bb, _0x3a32b1)
          }, 'cGSDA': _0x15dd92['utrZR'], 'FcjnQ': function(_0x3246a7, _0x1c8e94) {
            return _0x15dd92['KqpXj'](_0x3246a7, _0x1c8e94)
          }, 'lmPYu': function(_0x207934, _0x112aa5) {
            return _0x15dd92['qHtSe'](_0x207934, _0x112aa5)
          }, 'eEhEQ': _0x15dd92['PLCjA'], 'nBQZy': function(_0x9d9e6d, _0x336ee5) {
            return _0x15dd92['MKmla'](_0x9d9e6d, _0x336ee5)
          }, 'Xaehr': function(_0x16a972, _0x3dce73) {
            return _0x15dd92['lQiOm'](_0x16a972, _0x3dce73)
          }, 'pqMdw': function(_0x3b4c4a, _0x24aa07) {
            return _0x15dd92['DxNrc'](_0x3b4c4a, _0x24aa07)
          }, 'HoTkq': function(_0x37ecd4, _0x3128a0) {
            return _0x15dd92['qwJAb'](_0x37ecd4, _0x3128a0)
          }, 'dboOc': function(_0x432a42, _0x3b5881) {
            return _0x15dd92['xEYdU'](_0x432a42, _0x3b5881)
          }, 'ogSiP': function(_0x4e8021, _0x521b70) {
            return _0x15dd92['xEYdU'](_0x4e8021, _0x521b70)
          }, 'kSqSg': function(_0x21309e, _0x3f6bb7) {
            return _0x15dd92['SPRzu'](_0x21309e, _0x3f6bb7)
          }, 'CqxXL': function(_0x33998a, _0x17d45d) {
            return _0x15dd92['SPRzu'](_0x33998a, _0x17d45d)
          }, 'tzKJD': function(_0x13e439, _0x442381) {
            return _0x15dd92['NFGVa'](_0x13e439, _0x442381)
          }, 'TAVXN': function(_0x1ef899, _0xc539f8) {
            return _0x15dd92['NFGVa'](_0x1ef899, _0xc539f8)
          }
        }
        var _0x2d224b = _0x2ab9a1['positionList']
        var _0x358ace, _0x15d02e, _0xa88edf, _0x103143, _0x2df8c6, _0xbfdca2, _0x47b447 = 0x0, _0x516abb = 0x0

        function _0xe1f16a(_0x2dc0d0) {
          var _0x505317 = _0x317c14['Zfjlb']['split']('|'), _0x30e612 = 0x0
          while (!![]) {
            switch (_0x505317[_0x30e612++]) {
              case'0':
                _0x358ace = _0x317c14['jhoZZ'](_0x2d224b[_0x317c14['RDXCJ'](_0x2dc0d0, 0x1)][0x0], _0x2d224b[_0x2dc0d0][0x0])
                continue
              case'1':
                _0x516abb = 0x0
                continue
              case'2':
                _0xa88edf = _0x317c14['rwtvi'](_0x358ace, _0x2ab9a1['number'])
                continue
              case'3':
                _0x15d02e = _0x317c14['PYzSy'](_0x2d224b[_0x317c14['nSugA'](_0x2dc0d0, 0x1)][0x1], _0x2d224b[_0x2dc0d0][0x1])
                continue
              case'4':
                _0x103143 = _0x317c14['TVGIh'](_0x15d02e, _0x2ab9a1['number'])
                continue
            }
            break
          }
        }

        _0x15dd92['DeETJ'](_0xe1f16a, _0x47b447)
        _0x35a533['polygon']['hierarchy'] = new Cesium['CallbackProperty'](function() {
          var _0x26e534 = _0x317c14['cGSDA']['split']('|'), _0x5b8953 = 0x0
          while (!![]) {
            switch (_0x26e534[_0x5b8953++]) {
              case'0':
                if (_0x317c14['FcjnQ'](Math['abs'](_0x2df8c6), Math['abs'](_0x358ace)) && _0x317c14['lmPYu'](Math['abs'](_0xbfdca2), Math['abs'](_0x15d02e))) {
                  var _0x250b11 = _0x317c14['eEhEQ']['split']('|'), _0x73b3d2 = 0x0
                  while (!![]) {
                    switch (_0x250b11[_0x73b3d2++]) {
                      case'0':
                        if (_0x317c14['nBQZy'](_0x47b447, _0x317c14['Xaehr'](_0x2d224b['length'], 0x1))) {
                          _0x47b447 = 0x0
                        }
                        continue
                      case'1':
                        _0x32445f[0x2] = _0x317c14['nSugA'](_0x32445f[0x2], _0x2df8c6)
                        continue
                      case'2':
                        _0x317c14['pqMdw'](_0xe1f16a, _0x47b447)
                        continue
                      case'3':
                        _0x47b447 = _0x317c14['HoTkq'](_0x47b447, 0x1)
                        continue
                      case'4':
                        _0x32445f[0x1] = _0x317c14['dboOc'](_0x32445f[0x1], _0xbfdca2)
                        continue
                      case'5':
                        _0x32445f[0x0] = _0x317c14['ogSiP'](_0x32445f[0x0], _0x2df8c6)
                        continue
                      case'6':
                        _0x32445f[0x3] = _0x317c14['ogSiP'](_0x32445f[0x3], _0xbfdca2)
                        continue
                    }
                    break
                  }
                }
                continue
              case'1':
                _0xbfdca2 = _0x317c14['kSqSg'](_0x516abb, _0x103143)
                continue
              case'2':
                _0x2df8c6 = _0x317c14['CqxXL'](_0x516abb, _0xa88edf)
                continue
              case'3':
                _0x516abb++
                continue
              case'4':
                return new Cesium['PolygonHierarchy'](Cesium['Cartesian3']['fromDegreesArrayHeights']([_0x2ab9a1['observer'][0x0], _0x2ab9a1['observer'][0x1], _0x2ab9a1['observer'][0x2], _0x317c14['tzKJD'](_0x32445f[0x0], _0x2df8c6), _0x317c14['tzKJD'](_0x32445f[0x1], _0xbfdca2), 0x0, _0x317c14['TAVXN'](_0x32445f[0x2], _0x2df8c6), _0x317c14['TAVXN'](_0x32445f[0x3], _0xbfdca2), 0x0]))
            }
            break
          }
        }, ![])
      }
      var _0x43c35a = _0x10ec70['RASre'](_0x368007, _0xe5de94['circle'][0x0], _0xe5de94['circle'][0x1], _0xe5de94['circle'][0x2], _0xe5de94['circle'][0x3])
      var _0x343dca = _0x10ec70['tKKwb'](_0x14e355, _0x43c35a, _0xe5de94)
      for (var _0x564b93 = 0x0; _0x10ec70['pFeeX'](_0x564b93, _0x343dca['length']); _0x564b93++) {
        if (_0x10ec70['TmFuf'](_0x564b93, _0x10ec70['gDuJK'](_0x343dca['length'], 0x1))) {
          _0x10ec70['uCrtA'](_0x46a489, _0xe5de94, _0x343dca[_0x564b93], [_0x43c35a[_0x564b93]['x'], _0x43c35a[_0x564b93]['y'], _0x43c35a[_0x10ec70['qQNoa'](_0x564b93, 0x1)]['x'], _0x43c35a[_0x10ec70['qQNoa'](_0x564b93, 0x1)]['y']])
        } else {
          _0x10ec70['uCrtA'](_0x46a489, _0xe5de94, _0x343dca[_0x564b93], [_0x43c35a[_0x564b93]['x'], _0x43c35a[_0x564b93]['y'], _0x43c35a[0x0]['x'], _0x43c35a[0x0]['y']])
        }
      }
      return _0x343dca
    }
  }
  _0x596756['prototype']['addLineLayer'] = function(_0x5c9786, _0x55f7e9) {
    if (this['isMap']() && _0x5c9786 && _0x5c9786['url'] && _0x5c9786['polyline']) {
      var _0x4ba659 = Cesium['GeoJsonDataSource']['load'](_0x5c9786['url']), _0x5d85c3 = this
      _0x4ba659['then'](function(_0x36c1c5) {
        var _0x5c2a62 = _0x10ec70['aAorn']['split']('|'), _0x17e879 = 0x0
        while (!![]) {
          switch (_0x5c2a62[_0x17e879++]) {
            case'0':
              _0x5d85c3['_viewer']['dataSources']['add'](_0x36c1c5)
              continue
            case'1':
              if (_0x10ec70['uyKhc'](typeof _0x55f7e9, _0x10ec70['RsiAF'])) {
                _0x10ec70['FOHyu'](_0x55f7e9, _0x36c1c5)
              }
              continue
            case'2':
              var _0x419829 = [new Cesium['Color'](_0x10ec70['WhNiO'](0x4d, 0xff), _0x10ec70['WhNiO'](0xc9, 0xff), _0x10ec70['EMnqV'](0xff, 0xff), 0.8), new Cesium['Color'](_0x10ec70['EMnqV'](0xff, 0xff), _0x10ec70['EMnqV'](0xc9, 0xff), _0x10ec70['EMnqV'](0x26, 0xff), 0.8), new Cesium['Color'](_0x10ec70['FFAhf'](0xdd, 0xff), _0x10ec70['FFAhf'](0xdd, 0xff), _0x10ec70['FFAhf'](0xdd, 0xff), 0.8)]
              continue
            case'3':
              for (var _0x13ac26 = 0x0; _0x10ec70['pFeeX'](_0x13ac26, _0x10eed8['length']); _0x13ac26++) {
                var _0x32d6ee = _0x10eed8[_0x13ac26]
                _0x32d6ee['polyline']['material'] = _0x5c9786['polyline']['material'] || _0x419829[_0x10ec70['VOpmU'](_0x13ac26, 0x3)]
                _0x32d6ee['polyline']['width'] = _0x5c9786['polyline']['width']
              }
              continue
            case'4':
              var _0x10eed8 = _0x36c1c5['entities']['values']
              continue
          }
          break
        }
      })['otherwise'](function(_0xafe735) {
        window['alert'](_0xafe735)
      })
    }
  }
  _0x596756['prototype']['addMaterialLine'] = function(_0x12593f) {
    if (this['isMap']() && _0x12593f) {
      var _0x8fe073 = this['createEntity']()
      _0x8fe073['polyline'] = {
        'positions': _0x12593f['positions'],
        'material': _0x12593f['material'],
        'width': _0x12593f['width'],
        'clampToGround': _0x12593f['clampToGround'] || ![]
      }
      _0x8fe073['clampToS3M'] = _0x12593f['clampToS3M'] || ![]
      return this['_viewer']['entities']['add'](_0x8fe073)
    }
  }
  _0x596756['prototype']['bindFlyCircle'] = function(_0x57d681) {
    if (this['isMap']()) {
      var _0x37b805 = _0x10ec70['XtsvL']['split']('|'), _0x43bd74 = 0x0
      while (!![]) {
        switch (_0x37b805[_0x43bd74++]) {
          case'0':
            _handler['setInputAction'](function(_0x3a429b) {
              var _0x36afa5 = _0x49e273['_viewer']['scene']['camera']['pickEllipsoid'](_0x3a429b['position'], _0x49e273['_viewer']['scene']['globe']['ellipsoid'])
              if (_0x36afa5 && _0x36afa5['x']) {
                _0xb8d74f['flyCircle'](_0x36afa5)
              }
            }, Cesium['ScreenSpaceEventType']['RIGHT_CLICK'])
            continue
          case'1':
            if (_0x57d681) {
              _0x10ec70['ZPJUJ'](setTimeout, () => {
                var _0x11a460 = Cesium['Cartesian3']['fromDegrees'](106.56185470893745, 29.538553141480676, 0x32)
                _0xb8d74f['flyCircle'](_0x11a460)
              }, 0x7d0)
            }
            continue
          case'2':
            return _handler
          case'3':
            _handler['setInputAction'](function(_0x5da9cd) {
              if (_0xb8d74f) {
                _0xb8d74f['stopFlyCircle']()
              }
            }, Cesium['ScreenSpaceEventType']['LEFT_DOUBLE_CLICK'])
            continue
          case'4':
            _0xb8d74f['flyCircleLoop'] = !![]
            continue
          case'5':
            var _0xb8d74f = this['_viewer']['scene']['camera'], _0x314314 = ![], _0x49e273 = this
            continue
          case'6':
            _handler = new Cesium['ScreenSpaceEventHandler'](this['_viewer']['scene']['canvas'])
            continue
          case'7':
            _0xb8d74f['speedRatio'] = 0.2
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['setPathRoaming'] = function(_0x16ded4) {
    if (this['isMap']() && _0x16ded4 && _0x16ded4['paths']) {
      var _0x5e24b0 = _0x10ec70['BjYSo']['split']('|'), _0x39da9a = 0x0
      while (!![]) {
        switch (_0x5e24b0[_0x39da9a++]) {
          case'0':
            return this['_viewer']['entities']['add'](_0x14c0c5)
          case'1':
            var _0x2d2247 = _0x16ded4['startTime'] || _0x2d4ade
            continue
          case'2':
            if (_0x16ded4['label']) {
              _0x14c0c5['label'] = this['getLabel'](_0x16ded4)
            }
            continue
          case'3':
            this['_viewer']['clock']['currentTime'] = _0x2d2247['clone']()
            continue
          case'4':
            this['_viewer']['clock']['clockRange'] = _0x16ded4['clockRange'] || Cesium['ClockRange']['LOOP_STOP']
            continue
          case'5':
            var _0xc59fc1 = []
            continue
          case'6':
            _0x14c0c5['name'] = _0x16ded4['name'] || _0x10ec70['JSYrR']
            continue
          case'7':
            if (_0x16ded4['polyline']) {
              _0x14c0c5['polyline'] = {
                'positions': new Cesium['CallbackProperty'](function() {
                  return _0xc59fc1
                }, ![]),
                'width': 0xa,
                'material': new Cesium['PolylineGlowMaterialProperty']({
                  'glowPower': 0x1,
                  'color': Cesium['Color']['RED']
                }),
                'clampToGround': !![]
              }
            }
            continue
          case'8':
            if (_0x16ded4['billboard']) {
              _0x14c0c5['billboard'] = this['getBillboard'](_0x16ded4)
            }
            continue
          case'9':
            var _0x5d7718 = _0x16ded4['paths'], _0xa972b6 = new Cesium['SampledPositionProperty'](),
              _0x14c0c5 = this['createEntity'](), _0x2d4ade = new Cesium['JulianDate'](),
              _0x29535b = Cesium['JulianDate']['addSeconds'](_0x2d4ade, _0x10ec70['sHMmN'](_0x10ec70['IaNGq'](_0x5d7718['length'], 0x1), 0x78), new Cesium['JulianDate']())
            continue
          case'10':
            _0x14c0c5['availability'] = new Cesium['TimeIntervalCollection']([new Cesium['TimeInterval']({
              'start': _0x2d2247,
              'stop': _0x5f552d
            })])
            continue
          case'11':
            _0x14c0c5['position'] = _0xa972b6
            continue
          case'12':
            _0x14c0c5['orientation'] = new Cesium['VelocityOrientationProperty'](_0xa972b6)
            continue
          case'13':
            this['_viewer']['clock']['multiplier'] = _0x16ded4['multiplier'] || 0xa
            continue
          case'14':
            var _0x5f552d = _0x16ded4['stopTime'] || _0x29535b
            continue
          case'15':
            this['_viewer']['clock']['startTime'] = _0x2d2247['clone']()
            continue
          case'16':
            for (var _0x15fedc = 0x0; _0x10ec70['gxbRl'](_0x15fedc, _0x5d7718['length']); _0x15fedc++) {
              var _0x45845f = Cesium['Cartesian3']['fromDegrees'](_0x5d7718[_0x15fedc]['lon'], _0x5d7718[_0x15fedc]['lat'], _0x5d7718[_0x15fedc]['alt'])
              var _0x3f4a19 = Cesium['JulianDate']['addSeconds'](_0x2d2247, _0x5d7718[_0x15fedc]['time'], new Cesium['JulianDate']())
              _0xa972b6['addSample'](_0x3f4a19, _0x45845f)
            }
            continue
          case'17':
            if (_0x16ded4['model']) {
              _0x14c0c5['model'] = this['getModel'](_0x16ded4)
            }
            continue
          case'18':
            this['_viewer']['clock']['stopTime'] = _0x5f552d['clone']()
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['drawLine'] = function(_0x5a821d) {
    if (this['isMap']()) {
      var _0x1a9387 = _0x10ec70['CNltW']['split']('|'), _0x27082c = 0x0
      while (!![]) {
        switch (_0x1a9387[_0x27082c++]) {
          case'0':
            _handlers['setInputAction'](function(_0x4bcf18) {
              _handlers['destroy']()
              _handlers = null
              if (_0x10ec70['ikEDy'](typeof _0x5a821d, _0x10ec70['RsiAF'])) {
                _0x10ec70['Bxykc'](_0x5a821d, _0x397d5c['transformCartesianArrayToWGS84Array'](_0x3544de), _0x3ed885)
              }
            }, Cesium['ScreenSpaceEventType']['RIGHT_CLICK'])
            continue
          case'1':
            _handlers['setInputAction'](function(_0x5d0a5b) {
              var _0x5b22e8 = _0x397d5c['_viewer']['scene']['camera']['pickEllipsoid'](_0x5d0a5b['endPosition'], _0x397d5c['_viewer']['scene']['globe']['ellipsoid'])
              if (_0x10ec70['QikHx'](_0x3544de['length'], 0x2)) {
                if (_0x5b22e8 && _0x5b22e8['x']) {
                  _0x3544de['pop']()
                  _0x3544de['push'](_0x5b22e8)
                }
              }
            }, Cesium['ScreenSpaceEventType']['MOUSE_MOVE'])
            continue
          case'2':
            var _0x3544de = [], _0x1c251a = this['createEntity'](), _0x397d5c = this
            continue
          case'3':
            _handlers = new Cesium['ScreenSpaceEventHandler'](this['_viewer']['scene']['canvas'])
            continue
          case'4':
            _handlers['setInputAction'](function(_0x16bcef) {
              var _0x35aaf8 = _0x397d5c['_viewer']['scene']['camera']['pickEllipsoid'](_0x16bcef['position'], _0x397d5c['_viewer']['scene']['globe']['ellipsoid'])
              if (_0x35aaf8 && _0x35aaf8['x']) {
                if (_0x10ec70['GiuoT'](_0x3544de['length'], 0x0)) {
                  _0x3544de['push'](_0x35aaf8['clone']())
                }
                _0x3544de['push'](_0x35aaf8)
              }
            }, Cesium['ScreenSpaceEventType']['LEFT_CLICK'])
            continue
        }
        break
      }
    }
    _0x1c251a['polyline'] = {
      'positions': new Cesium['CallbackProperty'](function() {
        return _0x3544de
      }, ![]), 'width': 0x5, 'material': Cesium['Color']['BLUE'], 'clampToGround': !![]
    }
    _0x1c251a['clampToS3M'] = !![]
    var _0x3ed885 = this['_viewer']['entities']['add'](_0x1c251a)
  }
  _0x596756['prototype']['drawPolygon'] = function(_0x5e2b7d) {
    var _0x5e8b4d = _0x10ec70['Rmmpj']['split']('|'), _0x4dffe0 = 0x0
    while (!![]) {
      switch (_0x5e8b4d[_0x4dffe0++]) {
        case'0':
          var _0x5c46cc = this['_viewer']['entities']['add'](_0x4ddbaf)
          continue
        case'1':
          if (this['isMap']()) {
            var _0x20889b = _0x10ec70['jekjs']['split']('|'), _0x22c523 = 0x0
            while (!![]) {
              switch (_0x20889b[_0x22c523++]) {
                case'0':
                  _handler = new Cesium['ScreenSpaceEventHandler'](this['_viewer']['scene']['canvas'])
                  continue
                case'1':
                  _handler['setInputAction'](function(_0x531765) {
                    var _0x4f6716 = _0x235626['_viewer']['scene']['camera']['pickEllipsoid'](_0x531765['position'], _0x235626['_viewer']['scene']['globe']['ellipsoid'])
                    if (_0x4f6716 && _0x4f6716['x']) {
                      if (_0x4c18ab['OtZPN'](_0x2abddd['length'], 0x0)) {
                        _0x2abddd['push'](_0x4f6716['clone']())
                      }
                      _0x2abddd['push'](_0x4f6716)
                      _0x5096f4['push'](_0x4f6716['clone']())
                    }
                  }, Cesium['ScreenSpaceEventType']['LEFT_CLICK'])
                  continue
                case'2':
                  _handler['setInputAction'](function(_0x14f649) {
                    var _0x3e773d = _0x235626['_viewer']['scene']['camera']['pickEllipsoid'](_0x14f649['endPosition'], _0x235626['_viewer']['scene']['globe']['ellipsoid'])
                    if (_0x10ec70['khOsG'](_0x2abddd['length'], 0x2)) {
                      if (_0x3e773d && _0x3e773d['x']) {
                        _0x2abddd['pop']()
                        _0x2abddd['push'](_0x3e773d)
                      }
                    }
                  }, Cesium['ScreenSpaceEventType']['MOUSE_MOVE'])
                  continue
                case'3':
                  _handler['setInputAction'](function(_0x160674) {
                    _handler['destroy']()
                    if (_0x10ec70['ikEDy'](typeof _0x5e2b7d, _0x10ec70['RsiAF'])) {
                      _0x10ec70['HhJQz'](_0x5e2b7d, _0x235626['transformCartesianArrayToWGS84Array'](_0x5096f4), _0x5c46cc)
                    }
                  }, Cesium['ScreenSpaceEventType']['RIGHT_CLICK'])
                  continue
                case'4':
                  var _0x2abddd = [], _0x5096f4 = [], _0x4ddbaf = this['createEntity'](), _0x235626 = this
                  continue
              }
              break
            }
          }
          continue
        case'2':
          _0x4ddbaf['polyline'] = {
            'positions': new Cesium['CallbackProperty'](function() {
              return _0x2abddd
            }, ![]), 'width': 0x5, 'material': Cesium['Color']['BLUE'], 'clampToGround': !![]
          }
          continue
        case'3':
          _0x4ddbaf['polygon'] = {
            'hierarchy': new Cesium['CallbackProperty'](function() {
              return _0x5096f4
            }, ![]), 'material': Cesium['Color']['BLUE']
          }
          continue
        case'4':
          var _0x4c18ab = {
            'OtZPN': function(_0xb027bb, _0x5d5f5b) {
              return _0x10ec70['YlqBn'](_0xb027bb, _0x5d5f5b)
            }
          }
          continue
        case'5':
          _0x4ddbaf['clampToS3M'] = !![]
          continue
      }
      break
    }
  }
  _0x596756['prototype']['getLinkedPointList'] = function(_0x1afc76, _0x5a6971, _0x2e409a, _0x4ed71a) {
    if (this['isMap']()) {
      var _0x30cc01 = _0x10ec70['qOXeR']['split']('|'), _0x4a95c6 = 0x0
      while (!![]) {
        switch (_0x30cc01[_0x4a95c6++]) {
          case'0':
            var _0x511a0e = Cesium['Cartesian3']['distance'](_0x367008, Cesium['Cartesian3']['ZERO'])
            continue
          case'1':
            var _0x302073 = Cesium['Cartesian3']['clone'](_0x1afc76)
            continue
          case'2':
            var _0x48b82e = Math['sqrt'](_0x10ec70['FdaNH'](_0x10ec70['afMtc'](_0x10ec70['pMNbD'](_0x4e7275, _0x2e4e2d), _0x10ec70['CMyVk'](_0x4e7275, _0x2e4e2d)), _0x10ec70['itVqA'](_0x10ec70['CMyVk'](_0x2cc0fb, _0xc0bdd1), _0x10ec70['pNSFk'](_0x2cc0fb, _0xc0bdd1))))
            continue
          case'3':
            var _0x705ed0 = _0x10ec70['itVqA'](_0x48b82e, _0x2e409a)
            continue
          case'4':
            Cesium['Cartesian3']['normalize'](_0x302073, _0x302073)
            continue
          case'5':
            if (_0x10ec70['KSJDH'](Cesium['Cartesian3']['distance'](_0x302073, _0x367008), 0x0)) {
              return _0xdf3a42
            }
            continue
          case'6':
            var _0x385913 = Cesium['Cartographic']['fromCartesian'](_0x5a6971)
            continue
          case'7':
            var _0x367008 = Cesium['Cartesian3']['clone'](_0x5a6971)
            continue
          case'8':
            var _0x2cc0fb = _0x10ec70['ylpYf'](_0x10ec70['itVqA'](_0x5e3829['latitude'], 0xb4), Math['PI'])
            continue
          case'9':
            _0xdf3a42['push'](_0x5a6971)
            continue
          case'10':
            for (var _0x19692f = 0x1; _0x10ec70['gxbRl'](_0x19692f, _0x10ec70['pNSFk'](_0x4ed71a, 0x1)); _0x19692f++) {
              var _0x4ef0bc = _0x10ec70['GsQgS']['split']('|'), _0x1d9d67 = 0x0
              while (!![]) {
                switch (_0x4ef0bc[_0x1d9d67++]) {
                  case'0':
                    var _0x2a3d18 = Cesium['Cartesian3']['multiplyByScalar'](_0x302073, _0x25f6f4, new Cesium['Cartesian3']())
                    continue
                  case'1':
                    var _0x2a110f = _0x10ec70['ylpYf'](Math['sin'](_0x10ec70['HReqz'](_0x1cf7ad, _0x2d8bb0)), Math['sin'](_0x2d8bb0))
                    continue
                  case'2':
                    var _0x4d7758 = _0x10ec70['FdaNH'](_0x10ec70['qVgGO'](_0x10ec70['HReqz'](_0x47b8bb, _0x54f334), _0x10ec70['HReqz'](_0x511a0e, _0x1cf7ad)), _0x10ec70['PRGwF'](Math['sin'](_0x256dd0), _0x705ed0))
                    continue
                  case'3':
                    _0xdf3a42['push'](_0x3b7005)
                    continue
                  case'4':
                    var _0x256dd0 = _0x10ec70['QuVwc'](_0x1cf7ad, Math['PI'])
                    continue
                  case'5':
                    var _0x54f334 = _0x10ec70['rZWHb'](0x1, _0x1cf7ad)
                    continue
                  case'6':
                    var _0x1cf7ad = _0x10ec70['ylpYf'](_0x10ec70['QuVwc'](_0x19692f, 0x1), _0x10ec70['rZWHb'](_0x4ed71a, 0x1))
                    continue
                  case'7':
                    var _0x3b7005 = Cesium['Cartesian3']['add'](_0x2a3d18, _0x41de9e, new Cesium['Cartesian3']())
                    continue
                  case'8':
                    var _0x41de9e = Cesium['Cartesian3']['multiplyByScalar'](_0x367008, _0x2a110f, new Cesium['Cartesian3']())
                    continue
                  case'9':
                    _0x3b7005 = Cesium['Cartesian3']['multiplyByScalar'](_0x3b7005, _0x4d7758, _0x3b7005)
                    continue
                  case'10':
                    var _0x25f6f4 = _0x10ec70['VceXD'](Math['sin'](_0x10ec70['famIa'](_0x54f334, _0x2d8bb0)), Math['sin'](_0x2d8bb0))
                    continue
                }
                break
              }
            }
            continue
          case'11':
            var _0xdf3a42 = []
            continue
          case'12':
            var _0x4e7275 = _0x10ec70['OrGEc'](_0x10ec70['famIa'](_0x5e3829['longitude'], 0xb4), Math['PI'])
            continue
          case'13':
            var _0x2d8bb0 = Cesium['Cartesian3']['angleBetween'](_0x302073, _0x367008)
            continue
          case'14':
            Cesium['Cartesian3']['normalize'](_0x367008, _0x367008)
            continue
          case'15':
            var _0x47b8bb = Cesium['Cartesian3']['distance'](_0x302073, Cesium['Cartesian3']['ZERO'])
            continue
          case'16':
            _0xdf3a42['push'](_0x1afc76)
            continue
          case'17':
            var _0x2e4e2d = _0x10ec70['OrGEc'](_0x10ec70['famIa'](_0x385913['longitude'], 0xb4), Math['PI'])
            continue
          case'18':
            return _0xdf3a42
          case'19':
            var _0x5e3829 = Cesium['Cartographic']['fromCartesian'](_0x1afc76)
            continue
          case'20':
            var _0xc0bdd1 = _0x10ec70['hisFx'](_0x10ec70['eOBMw'](_0x385913['latitude'], 0xb4), Math['PI'])
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['getPolygonArea'] = function(_0x57e7b4) {
    var _0x4ab5a1 = {
      'MiuAk': function(_0x22a5a5, _0x14a479) {
        return _0x10ec70['eOBMw'](_0x22a5a5, _0x14a479)
      }, 'RcHGm': function(_0x3e319c, _0x4a521d) {
        return _0x10ec70['KdhNQ'](_0x3e319c, _0x4a521d)
      }, 'yHHOc': function(_0x19e5a8, _0x3db959) {
        return _0x10ec70['rZWHb'](_0x19e5a8, _0x3db959)
      }, 'HGcQM': function(_0xc6fd72, _0x67fb1c) {
        return _0x10ec70['EfGAY'](_0xc6fd72, _0x67fb1c)
      }, 'MilRF': function(_0x2738d3, _0x5c3651) {
        return _0x10ec70['JbnXe'](_0x2738d3, _0x5c3651)
      }, 'cYHyu': function(_0x4a2397, _0x34c4a6) {
        return _0x10ec70['EfGAY'](_0x4a2397, _0x34c4a6)
      }, 'WOIrv': function(_0x86c936, _0x18a8c3) {
        return _0x10ec70['gxbRl'](_0x86c936, _0x18a8c3)
      }, 'xiEht': function(_0x184828, _0x143357) {
        return _0x10ec70['vkBSF'](_0x184828, _0x143357)
      }, 'NzhBI': function(_0xf25ba9, _0x1628b3, _0x397a17) {
        return _0x10ec70['HhJQz'](_0xf25ba9, _0x1628b3, _0x397a17)
      }, 'gtFgO': function(_0x1c4028, _0x38ed8b, _0x31ebf6) {
        return _0x10ec70['zHVeH'](_0x1c4028, _0x38ed8b, _0x31ebf6)
      }, 'YKVJS': function(_0x44fcd2, _0x5724b1) {
        return _0x10ec70['EfGAY'](_0x44fcd2, _0x5724b1)
      }, 'CXtmi': function(_0x29ecc5, _0x21215e) {
        return _0x10ec70['gxbRl'](_0x29ecc5, _0x21215e)
      }
    }
    if (this['isMap']()) {
      var _0x2aa9c0 = _0x10ec70['VxTJK']['split']('|'), _0x58cfad = 0x0
      while (!![]) {
        switch (_0x2aa9c0[_0x58cfad++]) {
          case'0':
            var _0xfdd672 = function(_0x2f2972, _0x4d0c27) {
              var _0x4c76fe = _0x4ab5a1['MiuAk'](_0x2f2972['lat'], radiansPerDegree),
                _0x5396b9 = _0x4ab5a1['RcHGm'](_0x2f2972['lon'], radiansPerDegree),
                _0x44eccd = _0x4ab5a1['RcHGm'](_0x4d0c27['lat'], radiansPerDegree),
                _0x46a750 = _0x4ab5a1['RcHGm'](_0x4d0c27['lon'], radiansPerDegree),
                _0x36319c = -Math['atan2'](_0x4ab5a1['RcHGm'](Math['sin'](_0x4ab5a1['yHHOc'](_0x5396b9, _0x46a750)), Math['cos'](_0x44eccd)), _0x4ab5a1['HGcQM'](_0x4ab5a1['MilRF'](Math['cos'](_0x4c76fe), Math['sin'](_0x44eccd)), _0x4ab5a1['MilRF'](_0x4ab5a1['MilRF'](Math['sin'](_0x4c76fe), Math['cos'](_0x44eccd)), Math['cos'](_0x4ab5a1['cYHyu'](_0x5396b9, _0x46a750)))))
              if (_0x4ab5a1['WOIrv'](_0x36319c, 0x0)) {
                _0x36319c += _0x4ab5a1['MilRF'](Math['PI'], 0x2)
              }
              _0x36319c = _0x4ab5a1['xiEht'](_0x36319c, degreesPerRadian)
              return _0x36319c
            }
            continue
          case'1':
            return _0x10ec70['hisFx'](_0x315bf2, 0xf4240)['toFixed'](0x4)
          case'2':
            for (var _0x21a9f5 = 0x0; _0x10ec70['yVVkV'](_0x21a9f5, _0x10ec70['EfGAY'](_0x57e7b4['length'], 0x2)); _0x21a9f5++) {
              var _0x587097 = _0x10ec70['eNTmk'](_0x10ec70['kHhKY'](_0x21a9f5, 0x1), _0x57e7b4['length']),
                _0x2f1f43 = _0x10ec70['eNTmk'](_0x10ec70['kHhKY'](_0x21a9f5, 0x2), _0x57e7b4['length']),
                _0x519cd9 = _0x10ec70['uCrtA'](_0x15b248, _0x57e7b4[_0x21a9f5], _0x57e7b4[_0x587097], _0x57e7b4[_0x2f1f43]),
                _0x2753b1 = this['getDistance'](positions[_0x21a9f5], positions[_0x587097]),
                _0x41f9a9 = this['getDistance'](positions[_0x587097], positions[_0x2f1f43])
              _0x315bf2 += _0x10ec70['vkBSF'](_0x10ec70['vkBSF'](_0x2753b1, _0x41f9a9), Math['abs'](Math['sin'](_0x519cd9)))
            }
            continue
          case'3':
            var _0x315bf2 = 0x0
            continue
          case'4':
            var _0x15b248 = function(_0x542ae6, _0xe59bf2, _0xd5697c) {
              var _0x1ce978 = _0x4ab5a1['NzhBI'](_0xfdd672, _0xe59bf2, _0x542ae6),
                _0xfa5a3 = _0x4ab5a1['gtFgO'](_0xfdd672, _0xe59bf2, _0xd5697c),
                _0x36159f = _0x4ab5a1['YKVJS'](_0x1ce978, _0xfa5a3)
              if (_0x4ab5a1['CXtmi'](_0x36159f, 0x0)) {
                _0x36159f += 0x168
              }
              return _0x36159f
            }
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['getDistance'] = function(_0x37b4c4, _0x513690) {
    if (this['isMap']()) {
      var _0x3adb42 = _0x10ec70['qrcpa']['split']('|'), _0x3ec78e = 0x0
      while (!![]) {
        switch (_0x3adb42[_0x3ec78e++]) {
          case'0':
            _0x421fe9 = Math['sqrt'](_0x10ec70['kHhKY'](Math['pow'](_0x421fe9, 0x2), Math['pow'](_0x10ec70['BCNzV'](_0x574523['height'], _0x363007['height']), 0x2)))
            continue
          case'1':
            return _0x421fe9
          case'2':
            var _0x363007 = Cesium['Cartographic']['fromCartesian'](_0x37b4c4),
              _0x574523 = Cesium['Cartographic']['fromCartesian'](_0x513690)
            continue
          case'3':
            var _0x421fe9 = _0x146037['surfaceDistance']
            continue
          case'4':
            _0x146037['setEndPoints'](_0x363007, _0x574523)
            continue
          case'5':
            var _0x146037 = new Cesium['EllipsoidGeodesic']()
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['getIntersectObj'] = function(_0x230188, _0x589a9a, _0x428fe6 = [], _0x3a524c = ![]) {
    if (this['isMap']()) {
      var _0x227290 = _0x10ec70['jybOp']['split']('|'), _0x4d311b = 0x0
      while (!![]) {
        switch (_0x227290[_0x4d311b++]) {
          case'0':
            var _0x51fe96 = new Cesium['Ray'](_0x230188, _0x4c2957)
            continue
          case'1':
            var _0x4c2957 = Cesium['Cartesian3']['normalize'](Cesium['Cartesian3']['subtract'](_0x589a9a, _0x230188, new Cesium['Cartesian3']()), new Cesium['Cartesian3']())
            continue
          case'2':
            if (_0x3a524c) {
              _0x5a0a78 = this['_viewer']['scene']['drillPickFromRay'](_0x51fe96, 0xa, _0x428fe6)
            } else {
              var _0x2a14b1 = this['_viewer']['scene']['pickFromRay'](_0x51fe96, _0x428fe6)
              if (Cesium['defined'](_0x2a14b1)) {
                _0x5a0a78 = [_0x2a14b1]
              }
            }
            continue
          case'3':
            return _0x5a0a78
          case'4':
            var _0x5a0a78 = []
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['_getPointOnEllipsoid'] = function(_0x197545, _0x3696ef, _0x244652, _0x43fe58, _0x4dc261, _0x10bd8c, _0x597f1c, _0x14e7f0, _0x363692, _0x39b77a) {
    var _0x1a822d = _0x10ec70['NtEfO']['split']('|'), _0x250135 = 0x0
    while (!![]) {
      switch (_0x1a822d[_0x250135++]) {
        case'0':
          var _0x568e90 = _0x10ec70['hisFx'](_0x57adfa, _0x14e7f0)
          continue
        case'1':
          Cesium['Matrix3']['multiplyByVector'](_0x304705, _0x363692, _0x39b77a)
          continue
        case'2':
          Cesium['Cartesian3']['multiplyByScalar'](_0x39b77a, _0x14e7f0, _0x39b77a)
          continue
        case'3':
          var _0x52a767 = new Cesium['Cartesian3']()
          continue
        case'4':
          var _0x304705 = new Cesium['Matrix3']()
          continue
        case'5':
          Cesium['Cartesian3']['multiplyByScalar'](_0x43fe58, Math['cos'](_0x35d6ea), _0x2d2492)
          continue
        case'6':
          _0xa91f64 = _0x10ec70['RbrbI'](_0xa91f64, _0xa91f64)
          continue
        case'7':
          Cesium['Cartesian3']['multiplyByScalar'](_0x244652, Math['sin'](_0x35d6ea), _0x52a767)
          continue
        case'8':
          var _0xa91f64 = Math['cos'](_0x197545)
          continue
        case'9':
          var _0x2d2492 = new Cesium['Cartesian3']()
          continue
        case'10':
          var _0x35d6ea = _0x10ec70['irEGS'](_0x197545, _0x3696ef)
          continue
        case'11':
          Cesium['Cartesian3']['normalize'](_0x39b77a, _0x39b77a)
          continue
        case'12':
          var _0x33c873 = new Cesium['Quaternion']()
          continue
        case'13':
          Cesium['Quaternion']['fromAxisAngle'](_0x2d2492, _0x568e90, _0x33c873)
          continue
        case'14':
          Cesium['Matrix3']['fromQuaternion'](_0x33c873, _0x304705)
          continue
        case'15':
          Cesium['Cartesian3']['add'](_0x2d2492, _0x52a767, _0x2d2492)
          continue
        case'16':
          _0x591dd6 = _0x10ec70['RbrbI'](_0x591dd6, _0x591dd6)
          continue
        case'17':
          var _0x57adfa = _0x10ec70['xGLXy'](_0x10bd8c, Math['sqrt'](_0x10ec70['irEGS'](_0x10ec70['CihDD'](_0x597f1c, _0xa91f64), _0x10ec70['CihDD'](_0x4dc261, _0x591dd6))))
          continue
        case'18':
          var _0x591dd6 = Math['sin'](_0x197545)
          continue
        case'19':
          return _0x39b77a
      }
      break
    }
  }
  _0x596756['prototype']['raisePositionsToHeight'] = function(_0x1510af, _0x2c9608, _0x4973ef) {
    var _0x416d2a = _0x10ec70['hPdfB']['split']('|'), _0x49c3f1 = 0x0
    while (!![]) {
      switch (_0x416d2a[_0x49c3f1++]) {
        case'0':
          var _0x7a6dfa = _0x4973ef ? _0x3758cd : 0x0
          continue
        case'1':
          var _0x1b4c20 = _0x2c9608['height']
          continue
        case'2':
          var _0x328ce5 = new Float64Array(_0x10ec70['CihDD'](_0x53be1f, 0x3))
          continue
        case'3':
          var _0x53be1f = _0x4973ef ? _0x10ec70['CihDD'](_0x10ec70['QCMVJ'](_0x1510af['length'], 0x3), 0x2) : _0x10ec70['QCMVJ'](_0x1510af['length'], 0x3)
          continue
        case'4':
          var _0x58a95b = _0x2c9608['extrudedHeight']
          continue
        case'5':
          var _0x3e146b = new Cesium['Cartesian3']()
          continue
        case'6':
          var _0x28d114 = new Cesium['Cartesian3']()
          continue
        case'7':
          var _0x20a58e = new Cesium['Cartesian3']()
          continue
        case'8':
          return _0x328ce5
        case'9':
          for (var _0x5af1b9 = 0x0; _0x10ec70['yVVkV'](_0x5af1b9, _0x3758cd); _0x5af1b9 += 0x3) {
            var _0x171f86 = _0x10ec70['TKuaj']['split']('|'), _0x2d9fd3 = 0x0
            while (!![]) {
              switch (_0x171f86[_0x2d9fd3++]) {
                case'0':
                  _0x328ce5[_0x5af1b9] = _0x111265['x']
                  continue
                case'1':
                  var _0x2e77fb = Cesium['Cartesian3']['clone'](_0x111265, _0x28d114)
                  continue
                case'2':
                  var _0x111265 = Cesium['Cartesian3']['fromArray'](_0x1510af, _0x5af1b9, _0x3e146b)
                  continue
                case'3':
                  Cesium['Cartesian3']['add'](_0x111265, _0xa1f35e, _0x111265)
                  continue
                case'4':
                  var _0x31eb17 = _0x10ec70['irEGS'](_0x5af1b9, 0x2)
                  continue
                case'5':
                  _0x328ce5[_0x1116bb] = _0x111265['y']
                  continue
                case'6':
                  var _0x1116bb = _0x10ec70['ckDFF'](_0x5af1b9, 0x1)
                  continue
                case'7':
                  _0x509e7d['scaleToGeodeticSurface'](_0x111265, _0x111265)
                  continue
                case'8':
                  var _0x269867 = _0x509e7d['geodeticSurfaceNormal'](_0x111265, _0x3822e4)
                  continue
                case'9':
                  var _0xa1f35e = Cesium['Cartesian3']['multiplyByScalar'](_0x269867, _0x1b4c20, _0x20a58e)
                  continue
                case'10':
                  _0x328ce5[_0x31eb17] = _0x111265['z']
                  continue
                case'11':
                  if (_0x4973ef) {
                    var _0x34124e = _0x10ec70['xptnS']['split']('|'), _0x37d7df = 0x0
                    while (!![]) {
                      switch (_0x34124e[_0x37d7df++]) {
                        case'0':
                          _0x328ce5[_0x10ec70['ckDFF'](_0x31eb17, _0x7a6dfa)] = _0x2e77fb['z']
                          continue
                        case'1':
                          Cesium['Cartesian3']['multiplyByScalar'](_0x269867, _0x58a95b, _0xa1f35e)
                          continue
                        case'2':
                          _0x328ce5[_0x10ec70['hgata'](_0x1116bb, _0x7a6dfa)] = _0x2e77fb['y']
                          continue
                        case'3':
                          _0x328ce5[_0x10ec70['hgata'](_0x5af1b9, _0x7a6dfa)] = _0x2e77fb['x']
                          continue
                        case'4':
                          Cesium['Cartesian3']['add'](_0x2e77fb, _0xa1f35e, _0x2e77fb)
                          continue
                      }
                      break
                    }
                  }
                  continue
              }
              break
            }
          }
          continue
        case'10':
          var _0x3758cd = _0x1510af['length']
          continue
        case'11':
          var _0x3822e4 = new Cesium['Cartesian3']()
          continue
        case'12':
          var _0x509e7d = _0x2c9608['ellipsoid']
          continue
      }
      break
    }
  }
  _0x596756['prototype']['computeEllipseEdgePositions'] = function(_0x2be957) {
    var _0xf9f6cb = _0x10ec70['xQjCW']['split']('|'), _0x36ccbb = 0x0
    while (!![]) {
      switch (_0xf9f6cb[_0x36ccbb++]) {
        case'0':
          var _0x3fc881
          continue
        case'1':
          var _0x179d85 = Cesium['Cartesian3']['normalize'](_0x3920d9, _0x11f7a0)
          continue
        case'2':
          var _0x4fca1a = _0x2be957['semiMajorAxis']
          continue
        case'3':
          _0x4929b3['numPts'] = _0x2499ee
          continue
        case'4':
          return _0x4929b3
        case'5':
          var _0x3567c7 = Cesium['Cartesian3']['cross'](_0x179d85, _0x334929, _0x4f8f54)
          continue
        case'6':
          var _0x3a3bc1 = _0x10ec70['uwlwH'](_0x4fca1a, _0x4fac6c)
          continue
        case'7':
          var _0x2f83a2 = _0x10ec70['CHXyx'](_0x4fca1a, _0x4fca1a)
          continue
        case'8':
          var _0x5c33ab = new Cesium['Cartesian3']()
          continue
        case'9':
          var _0xd4db24 = []
          continue
        case'10':
          var _0x500faf = Cesium['Cartesian3']['magnitude'](_0x3920d9)
          continue
        case'11':
          var _0x3920d9 = _0x2be957['center']
          continue
        case'12':
          var _0x490270 = 0x0
          continue
        case'13':
          var _0x4fac6c = _0x2be957['semiMinorAxis']
          continue
        case'14':
          _0x4929b3['outerPositions'] = _0xd4db24
          continue
        case'15':
          _0x334929 = Cesium['Cartesian3']['normalize'](_0x334929, _0x334929)
          continue
        case'16':
          var _0x4929b3 = {}
          continue
        case'17':
          var _0x34cc61 = _0x2be957['granularity'] && _0x10ec70['ikEDy'](typeof _0x2be957['granularity'], _0x10ec70['gWJvX']) ? _0x2be957['granularity'] : _0x10ec70['QCMVJ'](Math['PI'], 0xb4)
          continue
        case'18':
          var _0x79685f = new Cesium['Cartesian3']()
          continue
        case'19':
          var _0x4f8f54 = new Cesium['Cartesian3']()
          continue
        case'20':
          var _0x9ae05c = 0x0
          continue
        case'21':
          if (_0x10ec70['lnKcq'](_0x34cc61, _0x10ec70['QCMVJ'](Math['PI'], 0xc))) {
            _0x34cc61 = _0x10ec70['QCMVJ'](Math['PI'], 0xc)
          }
          continue
        case'22':
          var _0x34c167 = _0x79685f
          continue
        case'23':
          var _0x334929 = Cesium['Cartesian3']['cross'](Cesium['Cartesian3']['UNIT_Z'], _0x3920d9, _0x5c33ab)
          continue
        case'24':
          var _0x2499ee = Math['ceil'](_0x10ec70['QCMVJ'](_0x10ec70['CHXyx'](Cesium['Math']['PI'], 0x2), _0x34cc61))
          continue
        case'25':
          var _0x1e2553 = _0x2be957['rotation']
          continue
        case'26':
          var _0x11f7a0 = new Cesium['Cartesian3']()
          continue
        case'27':
          var _0x580ffe = _0x34cc61
          continue
        case'28':
          var _0x598252 = _0x10ec70['IedKB'](_0x4fac6c, _0x4fac6c)
          continue
        case'29':
          if (_0x10ec70['yVVkV'](_0x34cc61, _0x10ec70['QCMVJ'](Math['PI'], 0xb4))) {
            _0x34cc61 = _0x10ec70['CjcnR'](Math['PI'], 0xb4)
          }
          continue
        case'30':
          for (_0x3fc881 = 0x0; _0x10ec70['yVVkV'](_0x3fc881, _0x2499ee); _0x3fc881++) {
            var _0x54d990 = _0x10ec70['TQEeT']['split']('|'), _0x2d843b = 0x0
            while (!![]) {
              switch (_0x54d990[_0x2d843b++]) {
                case'0':
                  _0xd4db24[_0x9ae05c++] = _0x34c167['z']
                  continue
                case'1':
                  _0xd4db24[_0x9ae05c++] = _0x34c167['y']
                  continue
                case'2':
                  _0x490270 = _0x10ec70['IedKB'](_0x3fc881, _0x580ffe)
                  continue
                case'3':
                  _0xd4db24[_0x9ae05c++] = _0x34c167['x']
                  continue
                case'4':
                  _0x34c167 = this['_getPointOnEllipsoid'](_0x490270, _0x1e2553, _0x3567c7, _0x334929, _0x598252, _0x3a3bc1, _0x2f83a2, _0x500faf, _0x179d85, _0x34c167)
                  continue
              }
              break
            }
          }
          continue
      }
      break
    }
  }
  _0x596756['prototype']['computeSectorEdgePositions'] = function(_0x4c1128) {
    var _0x1351c8 = _0x10ec70['lpkkM']['split']('|'), _0x27f0a1 = 0x0
    while (!![]) {
      switch (_0x1351c8[_0x27f0a1++]) {
        case'0':
          if (_0x10ec70['ViqZt'](_0x5336a4, _0x10ec70['CjcnR'](Math['PI'], 0xc))) {
            _0x5336a4 = _0x10ec70['bPzni'](Math['PI'], 0xc)
          }
          continue
        case'1':
          var _0x749d90 = new Cesium['Cartesian3']()
          continue
        case'2':
          var _0x4bc31a = _0x5336a4
          continue
        case'3':
          var _0x506147 = Cesium['Cartesian3']['magnitude'](_0x553e23)
          continue
        case'4':
          for (_0x3aadfe = 0x0; _0x10ec70['JkUtY'](_0x3aadfe, _0x5f6596); _0x3aadfe++) {
            var _0x6a5a56 = _0x10ec70['IxMiv']['split']('|'), _0x2c975f = 0x0
            while (!![]) {
              switch (_0x6a5a56[_0x2c975f++]) {
                case'0':
                  _0x525f02[_0x1069a4++] = _0x42eedb['x']
                  continue
                case'1':
                  _0x525f02[_0x1069a4++] = _0x42eedb['z']
                  continue
                case'2':
                  _0x42eedb = this['_getPointOnEllipsoid'](_0x4b46fa, _0x929593, _0x34e085, _0x56838a, _0x323af5, _0x38ec64, _0x2fef6b, _0x506147, _0x348fb8, _0x42eedb)
                  continue
                case'3':
                  _0x525f02[_0x1069a4++] = _0x42eedb['y']
                  continue
                case'4':
                  _0x4b46fa = _0x10ec70['ZCcpg'](_0x3aadfe, _0x4bc31a)
                  continue
              }
              break
            }
          }
          continue
        case'5':
          var _0x28bfff = _0x4c1128['semiMajorAxis']
          continue
        case'6':
          var _0x42eedb = _0x3b0f7c
          continue
        case'7':
          var _0x4e1a6c = _0x4c1128['semiMinorAxis']
          continue
        case'8':
          if (_0x10ec70['JkUtY'](_0x5336a4, _0x10ec70['bPzni'](Math['PI'], 0xb4))) {
            _0x5336a4 = _0x10ec70['bPzni'](Math['PI'], 0xb4)
          }
          continue
        case'9':
          var _0x34e085 = Cesium['Cartesian3']['cross'](_0x348fb8, _0x56838a, _0x4c9528)
          continue
        case'10':
          var _0x2fef6b = _0x10ec70['ZCcpg'](_0x28bfff, _0x28bfff)
          continue
        case'11':
          var _0x198e53 = {}
          continue
        case'12':
          var _0xdcd357 = new Cesium['Cartesian3']()
          continue
        case'13':
          var _0x4c9528 = new Cesium['Cartesian3']()
          continue
        case'14':
          var _0x5f6596 = Math['ceil'](_0x10ec70['GLxGE'](_0xf810da, _0x5336a4))
          continue
        case'15':
          var _0x5336a4 = _0x4c1128['granularity'] && _0x10ec70['LQHNM'](typeof _0x4c1128['granularity'], _0x10ec70['gWJvX']) ? _0x4c1128['granularity'] : _0x10ec70['bwEgz'](Math['PI'], 0xb4)
          continue
        case'16':
          var _0x1069a4 = 0x0
          continue
        case'17':
          var _0x38ec64 = _0x10ec70['BBrgb'](_0x28bfff, _0x4e1a6c)
          continue
        case'18':
          var _0x56838a = Cesium['Cartesian3']['cross'](Cesium['Cartesian3']['UNIT_Z'], _0x553e23, _0x749d90)
          continue
        case'19':
          var _0x3b0f7c = new Cesium['Cartesian3']()
          continue
        case'20':
          var _0x525f02 = []
          continue
        case'21':
          _0x56838a = Cesium['Cartesian3']['normalize'](_0x56838a, _0x56838a)
          continue
        case'22':
          var _0xf810da = _0x4c1128['angle'] ? _0x4c1128['angle'] : _0x10ec70['NMwRJ'](Math['PI'], 0x2)
          continue
        case'23':
          var _0x348fb8 = Cesium['Cartesian3']['normalize'](_0x553e23, _0xdcd357)
          continue
        case'24':
          var _0x3aadfe
          continue
        case'25':
          var _0x4b46fa = 0x0
          continue
        case'26':
          var _0x323af5 = _0x10ec70['BEJrt'](_0x4e1a6c, _0x4e1a6c)
          continue
        case'27':
          var _0x929593 = _0x4c1128['rotation']
          continue
        case'28':
          _0x198e53['numPts'] = _0x5f6596
          continue
        case'29':
          var _0x553e23 = _0x4c1128['center']
          continue
        case'30':
          _0x198e53['outerPositions'] = _0x525f02
          continue
        case'31':
          return _0x198e53
      }
      break
    }
  }
  _0x596756['prototype']['computeLonlatPointsTerrainData'] = function(_0x5e80bc, _0x2ea5b6) {
    var _0x4638e0 = _0x10ec70['IxMiv']['split']('|'), _0x48db91 = 0x0
    while (!![]) {
      switch (_0x4638e0[_0x48db91++]) {
        case'0':
          for (var _0x3406c2 = 0x0; _0x10ec70['JkUtY'](_0x3406c2, _0x5e80bc['length']); _0x3406c2++) {
            _0x32a766['push'](Cesium['Cartographic']['fromDegrees'](_0x5e80bc[_0x3406c2]['lon'], _0x5e80bc[_0x3406c2]['lat']))
          }
          continue
        case'1':
          _0xc09fed['then'](function(_0x37784f) {
            _0x4e1d43['DzbqJ'](_0x2ea5b6, _0x37784f)
          })
          continue
        case'2':
          var _0x32a766 = []
          continue
        case'3':
          var _0xc09fed = this['_viewer']['scene']['clampToHeightMostDetailed'](_0x32a766)
          continue
        case'4':
          var _0x4e1d43 = {
            'DzbqJ': function(_0x1e8fb5, _0x298353) {
              return _0x10ec70['FOHyu'](_0x1e8fb5, _0x298353)
            }
          }
          continue
      }
      break
    }
  }
  _0x596756['prototype']['computeCartographicPointsTerrainData'] = function(_0x5c3086, _0x3ddd68) {
    var _0x38b401 = _0x10ec70['dxEFx']['split']('|'), _0x2b861c = 0x0
    while (!![]) {
      switch (_0x38b401[_0x2b861c++]) {
        case'0':
          if (_0x5c3086['length'] && _0x10ec70['fESxc'](_0x5c3086['length'], 0x0)) {
          } else {
            return
          }
          continue
        case'1':
          var _0x13e5a0 = []
          continue
        case'2':
          for (var _0x1a760d = 0x0; _0x10ec70['JzheC'](_0x1a760d, _0x5c3086['length']); _0x1a760d++) {
            _0x13e5a0['push'](Cesium['Cartesian3']['fromRadians'](_0x5c3086[_0x1a760d]['longitude'], _0x5c3086[_0x1a760d]['latitude'], _0x5c3086[_0x1a760d]['height']))
          }
          continue
        case'3':
          var _0x3557c1 = this['_viewer']['scene']['clampToHeightMostDetailed'](_0x13e5a0), _0x21ee0c = this
          continue
        case'4':
          _0x3557c1['then'](function(_0x4c2de8) {
            var _0x23a11e = []
            var _0x45774f = _0x21ee0c['_viewer']['scene']['globe']['ellipsoid']
            for (var _0x3539c7 = 0x0; _0x10ec70['JkUtY'](_0x3539c7, _0x4c2de8['length']); _0x3539c7++) {
              _0x23a11e['push'](_0x45774f['cartesianToCartographic'](_0x4c2de8[_0x3539c7]))
            }
            _0x10ec70['dqFqb'](_0x3ddd68, _0x23a11e)
          })['otherwise'](function(_0x46f8c6) {
            console['log'](_0x46f8c6)
          })
          continue
      }
      break
    }
  }
  _0x596756['prototype']['createEntity'] = function() {
    if (this['isMap']()) {
      return new Cesium['Entity']()
    }
  }
  _0x596756['prototype']['getPoint'] = function(_0x5dc547) {
    _0x5dc547 = _0x10ec70['EhPBP'](_0x5dc547, {})
    if (this['isMap']()) {
      return new Cesium['PointGraphics']({
        'color': _0x5dc547['color'] || Cesium['Color']['GREEN'],
        'pixelSize': _0x5dc547['pixelSize'] || 0x5,
        'outlineColor': _0x5dc547['outlineColor'] || Cesium['Color']['WHITE'],
        'outlineWidth': _0x5dc547['outlineWidth'] || 0x1
      })
    }
  }
  _0x596756['prototype']['getLine'] = function(_0x2838fa) {
    _0x2838fa = _0x10ec70['EhPBP'](_0x2838fa, {})
    if (this['isMap']() && _0x2838fa && _0x2838fa['positions']) {
      return new Cesium['PolylineGraphics']({
        'show': !![],
        'positions': _0x2838fa['positions'],
        'material': _0x2838fa['material'] || Cesium['Color']['YELLOW'],
        'width': _0x2838fa['width'] || 0x1,
        'clampToGround': _0x2838fa['clampToGround'] || ![]
      })
    }
  }
  _0x596756['prototype']['getPolygon'] = function(_0x28be90) {
    _0x28be90 = _0x10ec70['EhPBP'](_0x28be90, {})
    if (this['isMap']() && _0x28be90 && _0x28be90['positions']) {
      return new Cesium['PolygonGraphics']({
        'hierarchy': { 'positions': _0x28be90['positions'] },
        'material': _0x28be90['material'] || Cesium['Color']['RED']['withAlpha'](0.2),
        'clampToGround': _0x28be90['clampToGround'] || ![]
      })
    }
  }
  _0x596756['prototype']['getLabel'] = function(_0x3b6423) {
    _0x3b6423 = _0x10ec70['NntKv'](_0x3b6423, {})
    if (this['isMap']()) {
      return new Cesium['LabelGraphics']({
        'text': _0x3b6423['l_text'],
        'font': _0x3b6423['l_font'] || _0x10ec70['HXEXP'],
        'fillColor': _0x3b6423['l_fillColor'] || Cesium['Color']['GOLD'],
        'style': _0x3b6423['l_style'] || Cesium['LabelStyle']['FILL_AND_OUTLINE'],
        'outlineWidth': _0x3b6423['l_outlineWidth'] || 0x2,
        'showBackground': _0x3b6423['l_showBackground'] || ![],
        'backgroundColor': _0x3b6423['l_backgroundColor'] || new Cesium['Color'](0.165, 0.165, 0.165, 0.8),
        'verticalOrigin': _0x3b6423['l_verticalOrigin'] || Cesium['VerticalOrigin']['BOTTOM'],
        'pixelOffset': _0x3b6423['l_pixelOffset'] || new Cesium['Cartesian2'](0x0, -0x1e)
      })
    }
  }
  _0x596756['prototype']['getBillboard'] = function(_0x52f558) {
    _0x52f558 = _0x10ec70['hcxfk'](_0x52f558, {})
    if (this['isMap']() && _0x52f558 && _0x52f558['b_img']) {
      return new Cesium['BillboardGraphics']({
        'image': _0x52f558['b_img'],
        'width': _0x52f558['b_width'] || 0x23,
        'height': _0x52f558['b_height'] || 0x23,
        'clampToGround': _0x52f558['b_clampToGround'] || !![],
        'scale': _0x52f558['b_scale'] || 0x1,
        'pixelOffset': _0x52f558['b_pixelOffset'] || new Cesium['Cartesian2'](0x0, -0x14)
      })
    }
  }
  _0x596756['prototype']['getPath'] = function(_0x3fa019) {
    _0x3fa019 = _0x10ec70['hcxfk'](_0x3fa019, {})
    if (this['isMap']()) {
      return new Cesium['PathGraphics']({
        'resolution': _0x3fa019['resolution'] || 0x1,
        'material': new Cesium['PolylineGlowMaterialProperty']({
          'glowPower': _0x3fa019['glowPower'] || 0.1,
          'color': _0x3fa019['color'] || Cesium['Color']['YELLOW']
        }),
        'width': _0x3fa019['width'] || 0x1e
      })
    }
  }
  _0x596756['prototype']['getModel'] = function(_0x118a9f) {
    if (this['isMap']() && _0x118a9f) {
      return new Cesium['ModelGraphics']({
        'uri': _0x118a9f['m_url'],
        'scale': _0x118a9f['m_scale'] || 0x1c,
        'minimumPixelSize': _0x118a9f['m_minimumPixelSize'] || 0x1e,
        'color': _0x118a9f['m_color'] || Cesium['Color']['WHITE']
      })
    }
  }
  _0x596756['prototype']['getEllipse'] = function(_0xd0ac14) {
    _0xd0ac14 = _0x10ec70['HLGvz'](_0xd0ac14, {})
    if (this['isMap']() && _0xd0ac14) {
      var _0x3b1005 = _0x10ec70['KSJDH'](opt['r'], undefined) ? 0xf4240 : opt['r']
      new Cesium['EllipseGraphics']({
        'semiMajorAxis': _0xd0ac14['r'] || 0xf4240,
        'semiMinorAxis': _0xd0ac14['r'] || 0xf4240,
        'metarial': _0xd0ac14['metarial'] || Cesium['Color']['RED']['withAlpha'](0.5),
        'outline': _0xd0ac14['outline'] || !![]
      })
    }
  }
  _0x596756['prototype']['getEllipsoid'] = function(_0x44eea7) {
    _0x44eea7 = _0x10ec70['sxTYn'](_0x44eea7, {})
    if (this['isMap']()) {
      var _0x57b765 = _0x44eea7['r'] || 0xf4240
      return new Cesium['EllipsoidGraphics']({
        'radii': new Cesium['Cartesian3'](_0x57b765, _0x57b765, _0x57b765),
        'maximumCone': _0x44eea7['maximumCone'] || Cesium['Math']['PI_OVER_TWO'],
        'stackPartitions': _0x44eea7['stackPartitions'] || 0x38,
        'slicePartitions': _0x44eea7['slicePartitions'] || 0x38,
        'outlineWidth': _0x44eea7['outlineWidth'] || 0x2,
        'outlineColor': _0x44eea7['outlineColor'] || Cesium['Color']['YELLOW'],
        'material': _0x44eea7['material'] || Cesium['Color']['RED']['withAlpha'](0.1),
        'outline': _0x44eea7['outline'] || !![]
      })
    }
  }
  _0x596756['prototype']['createPoint'] = function(_0x1b26b0) {
    if (this['isMap']() && _0x1b26b0) {
      var _0x2337f9 = _0x10ec70['iYTxi']['split']('|'), _0x1df058 = 0x0
      while (!![]) {
        switch (_0x2337f9[_0x1df058++]) {
          case'0':
            if (_0x1b26b0['point']) _0x3c2e05['point'] = this['getPoint']()
            continue
          case'1':
            if (_0x1b26b0['billboard']) _0x3c2e05['billboard'] = this['getBillboard'](_0x1b26b0['billboard'])
            continue
          case'2':
            if (_0x1b26b0['label']) _0x3c2e05['label'] = this['getLabel'](_0x1b26b0['label'])
            continue
          case'3':
            _0x3c2e05['position'] = _0x1b26b0['position']
            continue
          case'4':
            var _0x3c2e05 = this['createEntity']()
            continue
          case'5':
            _0x3c2e05['name'] = _0x1b26b0['name'] || ''
            continue
          case'6':
            return _0x3c2e05
        }
        break
      }
    }
  }
  _0x596756['prototype']['createLine'] = function(_0x10c823) {
    _0x10c823 = _0x10ec70['wYllJ'](_0x10c823, {})
    if (this['isMap']()) {
      var _0x374cea = _0x10ec70['xptnS']['split']('|'), _0xf1a23c = 0x0
      while (!![]) {
        switch (_0x374cea[_0xf1a23c++]) {
          case'0':
            return _0x242f5b
          case'1':
            var _0x242f5b = this['createEntity']()
            continue
          case'2':
            _0x242f5b['oid'] = _0x10c823['oid'] || _0x10ec70['PAxKW']
            continue
          case'3':
            _0x242f5b['polyline'] = this['getLine'](_0x10c823)
            continue
          case'4':
            _0x242f5b['position'] = _0x10c823['positions']
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['createPolygon'] = function(_0x159ec9) {
    _0x159ec9 = _0x10ec70['qsHAQ'](_0x159ec9, {})
    if (this['isMap']()) {
      var _0x1fee4c = this['createEntity']()
      _0x1fee4c['polygon'] = this['getPolygon'](_0x159ec9)
      _0x1fee4c['clampToS3M'] = _0x159ec9['clampToS3M'] || ![]
      return _0x1fee4c
    }
  }
  _0x596756['prototype']['createModel'] = function(_0x24bac6) {
    _0x24bac6 = _0x10ec70['ZukkN'](_0x24bac6, {})
    if (this['isMap']()) {
      var _0x5ea394 = this['createEntity']()
      _0x5ea394['model'] = this['getModel'](_0x24bac6)
      _0x5ea394['position'] = _0x24bac6['position']
      return _0x5ea394
    }
  }
  _0x596756['prototype']['craeteCorridor'] = function(_0x4f8211) {
    if (this['isMap']()) {
      var _0x7fb9f6 = this['createEntity']()
      _0x7fb9f6['corridor'] = {
        'positions': _0x4f8211['positions'],
        'height': _0x4f8211['height'] || 0x6,
        'width': _0x4f8211['width'] || 0xf,
        'material': _0x4f8211['material'] || new Cesium['WarnLinkMaterialProperty']({
          'freely': _0x10ec70['kUzph'],
          'color': Cesium['Color']['YELLOW'],
          'duration': 0x3e8,
          'count': 0x1,
          'direction': '+'
        })
      }
      return _0x7fb9f6
    }
  }
  _0x596756['prototype']['createDynamicPolyline'] = function(_0x14b508) {
    _0x14b508 = _0x10ec70['ZukkN'](_0x14b508, {})
    if (this['isMap']()) {
      var _0x149749 = {
        'polyline': {
          'show': !![],
          'positions': [],
          'material': _0x14b508['material'] || Cesium['Color']['CHARTREUSE'],
          'width': _0x14b508['width'] || 0x5,
          'clampToGround': _0x14b508['clampToGround'] || ![]
        }
      }
      _0x149749['polyline']['positions'] = new Cesium['CallbackProperty'](function() {
        return _0x14b508['positions']
      }, ![])
      return _0x149749
    }
  }
  _0x596756['prototype']['createDynamicCylinder'] = function(_0x15e96a) {
    _0x15e96a = _0x10ec70['ZukkN'](_0x15e96a, {})
    if (this['isMap']()) {
      var _0x3df794 = _0x10ec70['kJkmO']['split']('|'), _0x4559da = 0x0
      while (!![]) {
        switch (_0x3df794[_0x4559da++]) {
          case'0':
            var _0x32ca18 = {
              'cylinder': {
                'HeightReference': Cesium['HeightReference']['RELATIVE_TO_GROUND'],
                'length': _0x1be22d['length'],
                'topRadius': 0x0,
                'bottomRadius': _0x1be22d['bottomRadius'],
                'material': _0x1be22d['material'] || new Cesium['Color'](0x0, 0x1, 0x1, 0.4),
                'slices': _0x1be22d['slices']
              }
            }
            continue
          case'1':
            var _0xaaa889 = _0x15e96a['entity'], _0x1be22d = _0x15e96a['cylinder'], _0x549852 = this
            continue
          case'2':
            _0x32ca18['position'] = new Cesium['CallbackProperty'](function() {
              var _0x43eef2 = _0xaaa889['position']['getValue'](_0x549852['_viewer']['clock']['currentTime'])
              var _0x2fd029 = _0x549852['_viewer']['scene']['globe']['ellipsoid']['cartesianToCartographic'](_0x43eef2)
              var _0x2e7644 = Cesium['Math']['toDegrees'](_0x2fd029['latitude']),
                _0x34c166 = Cesium['Math']['toDegrees'](_0x2fd029['longitude']),
                _0x4b263d = _0x10ec70['dqFqb'](parseFloat, _0x10ec70['bwEgz'](_0x2fd029['height'], 0x4))
              return Cesium['Cartesian3']['fromDegrees'](_0x34c166, _0x2e7644, 0x0)
            }, ![])
            continue
          case'3':
            return _0x32ca18
          case'4':
            _0x32ca18['cylinder']['length'] = new Cesium['CallbackProperty'](function() {
              var _0x43ff2c = _0xaaa889['position']['getValue'](_0x549852['_viewer']['clock']['currentTime'])
              var _0x12a2fe = _0x549852['_viewer']['scene']['globe']['ellipsoid']['cartesianToCartographic'](_0x43ff2c)
              return _0x10ec70['BEJrt'](_0x12a2fe['height'], 0x2)
            }, ![])
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['createShineEllipse'] = function(_0x3651ce) {
    if (this['isMap']()) {
      var _0x4be6da = this['createEntity'](), _0x555091 = _0x3651ce['alp'] || 0x1,
        _0x3c588a = _0x3651ce['flog'] || !![]
      _0x4be6da['position'] = _0x3651ce['position']
      _0x4be6da['ellipse'] = {
        'semiMinorAxis': _0x3651ce['semiMinorAxis'] || 0x7d0,
        'semiMajorAxis': _0x3651ce['semiMajorAxis'] || 0x7d0,
        'height': _0x3651ce['height'] || height,
        'material': new Cesium['ColorMaterialProperty'](new Cesium['CallbackProperty'](function() {
          if (_0x3c588a) {
            _0x555091 = _0x10ec70['gGNpm'](_0x555091, 0.05)
            if (_0x10ec70['snHCr'](_0x555091, 0x0)) {
              _0x3c588a = ![]
            }
          } else {
            _0x555091 = _0x10ec70['tbLVU'](_0x555091, 0.05)
            if (_0x10ec70['khOsG'](_0x555091, 0x1)) {
              _0x3c588a = !![]
            }
          }
          return Cesium['Color']['RED']['withAlpha'](_0x555091)
        }, ![]))
      }
      return _0x4be6da
    }
  }
  _0x596756['prototype']['createDynamicCricle'] = function(_0x4d25b7) {
    var _0x11f8bd = {
      'wcaAg': function(_0x33fcd5, _0x3fe073) {
        return _0x10ec70['zfNrx'](_0x33fcd5, _0x3fe073)
      }, 'GzLem': function(_0x492c63, _0x582525) {
        return _0x10ec70['khOsG'](_0x492c63, _0x582525)
      }
    }
    _0x4d25b7 = _0x10ec70['ZukkN'](_0x4d25b7, {})
    if (this['isMap']()) {
      var _0xfba44b = _0x10ec70['AxUoA']['split']('|'), _0x5f5574 = 0x0
      while (!![]) {
        switch (_0xfba44b[_0x5f5574++]) {
          case'0':
            _0x46a217['position'] = new Cesium['CallbackProperty'](function() {
              return _0x2cf701['transformWGS84ToCartesian'](_0x58680d)
            }, ![])
            continue
          case'1':
            _0x46a217['orientation'] = new Cesium['CallbackProperty'](function() {
              return Cesium['Transforms']['headingPitchRollQuaternion'](_0x2cf701['transformWGS84ToCartesian'](_0x58680d), new Cesium['HeadingPitchRoll'](Cesium['Math']['toRadians'](_0x44848f), Cesium['Math']['toRadians'](_0x3a17ef), Cesium['Math']['toRadians'](_0x4f5795)))
            }, ![])
            continue
          case'2':
            var _0x46a217 = this['createEntity'](), _0x2cf701 = this, _0x58680d = _0x4d25b7['center'],
              _0x375693 = _0x4d25b7['radius'], _0x120944 = _0x4d25b7['rotateAmount'] || 0x0, _0x5243d8 = 0x0,
              _0x27cd07 = _0x4d25b7['height'], _0x44848f = 0x0, _0x3a17ef = 0x0, _0x4f5795 = 0x0,
              _0x26b81f = _0x4d25b7['material'] || new Cesium['ImageMaterialProperty']({ 'image': _0x4d25b7['imge'] || _0x10ec70['jTcUx'] })
            continue
          case'3':
            _0x46a217['ellipse'] = {
              'material': _0x26b81f,
              'height': _0x27cd07,
              'semiMajorAxis': new Cesium['CallbackProperty'](function() {
                return _0x375693
              }, ![]),
              'semiMinorAxis': new Cesium['CallbackProperty'](function() {
                return _0x375693
              }, ![]),
              'stRotation': new Cesium['CallbackProperty'](function() {
                if (_0x11f8bd['wcaAg'](_0x120944, 0x0)) {
                  _0x5243d8 += _0x120944
                  if (_0x11f8bd['GzLem'](_0x5243d8, 0x168)) {
                    _0x5243d8 = 0x0
                  }
                }
                return _0x5243d8
              }, ![])
            }
            continue
          case'4':
            return _0x46a217
        }
        break
      }
    }
  }
  _0x596756['prototype']['createDynamicWall'] = function(_0x104b39) {
    if (this['isMap']() && _0x104b39 && _0x104b39['positions']) {
      var _0x117edd = _0x104b39['alp'] || 0x1, _0x3e451e = _0x104b39['num'],
        _0x3d313f = _0x104b39['color'] || Cesium['Color']['WHITE'], _0x389196 = _0x104b39['speed'] || 0.006
      var _0x3985ea = this['createEntity']()
      _0x3985ea['wall'] = {
        'positions': _0x104b39['positions'],
        'material': new Cesium['ImageMaterialProperty']({
          'image': _0x10ec70['dtvxZ'],
          'transparent': !![],
          'color': new Cesium['CallbackProperty'](function() {
            if (_0x10ec70['CsDUD'](_0x10ec70['WQBOZ'](_0x3e451e, 0x2), 0x0)) {
              _0x117edd -= _0x389196
            } else {
              _0x117edd += _0x389196
            }
            if (_0x10ec70['snHCr'](_0x117edd, 0.3)) {
              _0x3e451e++
            } else if (_0x10ec70['iRbPs'](_0x117edd, 0x1)) {
              _0x3e451e++
            }
            return _0x3d313f['withAlpha'](_0x117edd)
          }, ![])
        })
      }
      return _0x3985ea
    }
  }
  _0x596756['prototype']['createGifBillboard'] = function(_0x34f0ae) {
    if (this['isMap']() && SuperGif && _0x34f0ae['position']) {
      var _0x1b703e = [], _0x3fda97 = _0x34f0ae['url'], _0x3c3f2c = 0x0, _0x5aaa63 = 0x6
      this['_parseGifImages'](_0x3fda97, _0x1b703e)
      return this['_viewer']['entities']['add']({
        'position': _0x34f0ae['position'],
        'billboard': {
          'verticalOrigin': Cesium['VerticalOrigin']['BASELINE'],
          'image': new Cesium['CallbackProperty'](() => {
            if (_0x1b703e['length']) {
              if (_0x10ec70['JzheC'](_0x3c3f2c, _0x10ec70['cXgsZ'](_0x5aaa63, _0x10ec70['gGNpm'](_0x1b703e['length'], 0x1)))) {
                _0x3c3f2c++
              } else {
                _0x3c3f2c = 0x0
              }
              return _0x1b703e[Math['floor'](_0x10ec70['bwEgz'](_0x3c3f2c, _0x5aaa63))]
            } else {
              return _0x3fda97
            }
          }, ![])
        }
      })
    }
  }
  _0x596756['prototype']['_parseGifImages'] = function(_0xc17821, _0x5b5605) {
    var _0x3b7785 = _0x10ec70['nnfzR']['split']('|'), _0x3883ab = 0x0
    while (!![]) {
      switch (_0x3b7785[_0x3883ab++]) {
        case'0':
          document['body']['appendChild'](_0x8527dc)
          continue
        case'1':
          _0x8527dc['setAttribute'](_0x10ec70['bBIxL'], _0xc17821)
          continue
        case'2':
          var _0x33e7c9 = new SuperGif({ 'gif': _0x8527dc })
          continue
        case'3':
          _0x8527dc['src'] = _0xc17821
          continue
        case'4':
          if (!SuperGif) {
            _0x10ec70['zRsnx'](alert, _0x10ec70['BZjyi'])
            return ![]
          }
          continue
        case'5':
          var _0x8527dc = document['createElement'](_0x10ec70['DTOYU'])
          continue
        case'6':
          _0x8527dc['setAttribute'](_0x10ec70['eXeoR'], '0')
          continue
        case'7':
          return new Promise(_0x43c057 => {
            var _0x215885 = {
              'jNCCI': function(_0x2ce4e4, _0x392f80) {
                return _0x10ec70['snHCr'](_0x2ce4e4, _0x392f80)
              }, 'ppDSn': function(_0x349bb4, _0x3c1f42) {
                return _0x10ec70['LTaPv'](_0x349bb4, _0x3c1f42)
              }
            }
            _0x33e7c9['load'](() => {
              for (let _0x174944 = 0x1; _0x215885['jNCCI'](_0x174944, _0x33e7c9['get_length']()); _0x174944++) {
                _0x33e7c9['move_to'](_0x174944)
                _0x5b5605['push'](_0x33e7c9['get_canvas']()['toDataURL']())
              }
              _0x215885['ppDSn'](_0x43c057, _0x5b5605)
            })
          })
      }
      break
    }
  }
  _0x596756['prototype']['createCanvasImages'] = function() {
  }
  _0x596756['prototype']['setRotateModel'] = function(_0x3b1f75) {
    var _0x468e25 = {
      'THQev': function(_0x5b808d, _0x1eee98) {
        return _0x10ec70['zfNrx'](_0x5b808d, _0x1eee98)
      }, 'qXlmD': function(_0x31c75c, _0x1d781d) {
        return _0x10ec70['CsDUD'](_0x31c75c, _0x1d781d)
      }
    }
    if (this['isMap']() && _0x3b1f75 && _0x3b1f75['entity'] && _0x3b1f75['rotateAmount']) {
      var _0x3168cd = _0x3b1f75['entity'], _0x49e788 = _0x3b1f75['rotateAmount'], _0x1e9e6a = _0x3b1f75['position'],
        _0x5236af = this
      _0x1e9e6a['heading'] = 0x0, _0x1e9e6a['pitch'] = 0x0, _0x1e9e6a['roll'] = 0x0
      _0x3168cd['position'] = new Cesium['CallbackProperty'](function() {
        return _0x5236af['transformWGS84ToCartesian'](_0x1e9e6a)
      }, ![])
      _0x3168cd['orientation'] = new Cesium['CallbackProperty'](function() {
        if (_0x468e25['THQev'](_0x49e788, 0x0)) {
          _0x1e9e6a['heading'] += _0x49e788
          if (_0x468e25['qXlmD'](_0x1e9e6a['heading'], 0x168)) {
            _0x1e9e6a['heading'] = 0x0
          }
        }
        return Cesium['Transforms']['headingPitchRollQuaternion'](_0x5236af['transformWGS84ToCartesian'](_0x1e9e6a), new Cesium['HeadingPitchRoll'](Cesium['Math']['toRadians'](_0x1e9e6a['heading']), Cesium['Math']['toRadians'](_0x1e9e6a['pitch']), Cesium['Math']['toRadians'](_0x1e9e6a['roll'])))
      }, ![])
    }
  }
  _0x596756['prototype']['setDynamicHeight'] = function(_0x2e8eb9) {
    if (this['isMap']() && _0x2e8eb9) {
      var _0x14f0fc = _0x2e8eb9['entity'], _0x26f78b = _0x2e8eb9['minHeiht'], _0x5348c7 = _0x2e8eb9['maxHeiht'],
        _0x355df8 = _0x2e8eb9['cartesians'], _0x418b90 = _0x2e8eb9['speed'] || 0.01, _0x53880e = this
      _0x14f0fc['positions'] = new Cesium['CallbackProperty'](function() {
        var _0x5039c9 = _0x53880e['transformCartesianArrayToWGS84Array'](_0x355df8)
        for (var _0x56d17c in _0x5039c9) {
          var _0x2dc6e0 = _0x5039c9[_0x56d17c]
          if (_0x10ec70['ZfzSL'](_0x26f78b, 0x0)) {
            _0x26f78b += _0x418b90
            if (_0x10ec70['iRbPs'](_0x26f78b, _0x5348c7)) {
              _0x26f78b = 0x28
            }
          }
          _0x2dc6e0['alt'] = _0x26f78b
        }
        return _0x53880e['transformWGS84ArrayToCartesianArray'](_0x5039c9)
      }, ![])
    }
  }
  _0x596756['prototype']['_installMaterial'] = function() {
    var _0x5fa5c9 = _0x10ec70['FmHqT']['split']('|'), _0x5a044e = 0x0
    while (!![]) {
      switch (_0x5fa5c9[_0x5a044e++]) {
        case'0':
          this['_installMaterialSources']()
          continue
        case'1':
          this['_installWallMaterial']()
          continue
        case'2':
          this['_installFlowMaterial']()
          continue
        case'3':
          this['_installCityLineMaterial']()
          continue
        case'4':
          this['_installCircleMaterial']()
          continue
        case'5':
          this['_installWarnMaterial']()
          continue
        case'6':
          this['_installCityShaders']()
          continue
      }
      break
    }
  }
  _0x596756['prototype']['_installCityShaders'] = function() {
    Cesium['CityScanShader'] = {
      'vertexShader': 'varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20v_py;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v_py\x20=\x20position.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20',
      'fragmentShader': '\x20//\x20根据片元的高度来渐变\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20lightHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20lightWidth;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20maxH;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20texture1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20v_py;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20color1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20color2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20colorGo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20plot\x20(vec2\x20st,\x20float\x20pct){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20\x20smoothstep(\x20pct-lightWidth,\x20pct,\x20v_py)\x20-\x20smoothstep(\x20pct,\x20pct+0.02,\x20v_py);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main(){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20f1\x20=\x20plot(vUv,lightHeight);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20b1\x20=\x20vec4(colorGo.r,\x20colorGo.g,\x20colorGo.b,\x201.0)\x20;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20vec3\x20gradient\x20=\x20mix(color1,\x20color2,\x20v_py\x20*\x200.1);\x20//\x20除法渐变\x200.1\x20或者说\x2010.0\x20是指停止渐变高度\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20gradient\x20=\x20\x20mix(color1,\x20color2,\x20smoothstep(\x200.0,\x20maxH,\x20v_py));\x20//内置\x20smoothstep法渐变\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20gl_FragColor\x20=\x20vec4(gradient,1.);\x20//\x20仅仅渐变色\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20mix(vec4(gradient,1.),b1,f1);\x20\x20//渐变与光效混合\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20mix(texture2D(texture1,\x20vUv),vec4(gl_FragColor.r,gl_FragColor.g,gl_FragColor.b,0.9),0.9);\x20\x20//再混合材质\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20'
    }
  }
  _0x596756['prototype']['_installCityLineMaterial'] = function() {
    var _0x45f908 = {
      'bdJNZ': _0x10ec70['oFRGx'], 'MESLQ': function(_0x4cabaa, _0x5ec500, _0x3f0f6b) {
        return _0x10ec70['ylezw'](_0x4cabaa, _0x5ec500, _0x3f0f6b)
      }, 'tFLlY': _0x10ec70['jcamx'], 'QQWKz': function(_0x3894cb, _0x357257) {
        return _0x10ec70['ZqSmq'](_0x3894cb, _0x357257)
      }, 'MYQeM': function(_0x546b61, _0x5af961) {
        return _0x10ec70['CsDUD'](_0x546b61, _0x5af961)
      }, 'MkeBq': function(_0x2d88fd, _0x3f5e68) {
        return _0x10ec70['bwEgz'](_0x2d88fd, _0x3f5e68)
      }, 'LPavD': function(_0x3f39d1, _0x4b2765) {
        return _0x10ec70['ldbFf'](_0x3f39d1, _0x4b2765)
      }, 'hSxGk': function(_0x484000, _0x3011cb) {
        return _0x10ec70['QWepq'](_0x484000, _0x3011cb)
      }, 'YvpKJ': function(_0x47badf, _0x1b2e39) {
        return _0x10ec70['BUgUV'](_0x47badf, _0x1b2e39)
      }
    }
    var _0x3ef2ad = Cesium['Color'], _0x52a519 = Cesium['defaultValue'], _0x47c36d = Cesium['defined'],
      _0x28b215 = Object['defineProperties'], _0x35e932 = Cesium['Event'],
      _0xdbd7b2 = Cesium['createPropertyDescriptor'], _0x2e50a5 = Cesium['Property'], _0xef01ea = Cesium['Material'],
      _0x3844dd = _0x3ef2ad['WHITE']

    function _0x2e412a(_0x4386bb) {
      var _0x445812 = _0x45f908['bdJNZ']['split']('|'), _0x15fb15 = 0x0
      while (!![]) {
        switch (_0x445812[_0x15fb15++]) {
          case'0':
            this['_time'] = undefined
            continue
          case'1':
            _0x4386bb = _0x45f908['MESLQ'](_0x52a519, _0x4386bb, _0x52a519['EMPTY_OBJECT'])
            continue
          case'2':
            this['duration'] = _0x4386bb['duration'] || 0x3e8
            continue
          case'3':
            this['_definitionChanged'] = new _0x35e932()
            continue
          case'4':
            this['_colorSubscription'] = undefined
            continue
          case'5':
            this['color'] = _0x4386bb['color']
            continue
          case'6':
            this['_color'] = undefined
            continue
        }
        break
      }
    }

    _0x10ec70['bqGtk'](_0x28b215, _0x2e412a['prototype'], {
      'isvarant': {
        'get': function() {
          return ![]
        }
      }, 'definitionChanged': {
        'get': function() {
          return this['_definitionChanged']
        }
      }, 'color': _0x10ec70['ZqSmq'](_0xdbd7b2, _0x10ec70['IPkkw'])
    })
    _0x2e412a['prototype']['getType'] = function(_0x46fbf0) {
      return _0xef01ea['PolylineCityLinkType']
    }
    _0x2e412a['prototype']['getValue'] = function(_0x1fe781, _0x14a0d1) {
      var _0x378275 = _0x45f908['tFLlY']['split']('|'), _0x2a43d5 = 0x0
      while (!![]) {
        switch (_0x378275[_0x2a43d5++]) {
          case'0':
            if (!_0x45f908['QQWKz'](_0x47c36d, _0x14a0d1)) {
              _0x14a0d1 = {}
            }
            continue
          case'1':
            if (_0x45f908['MYQeM'](this['_time'], undefined)) {
              this['_time'] = _0x1fe781['secondsOfDay']
            }
            continue
          case'2':
            return _0x14a0d1
          case'3':
            _0x14a0d1['color'] = _0x2e50a5['getValueOrClonedDefault'](this['_color'], _0x1fe781, _0x3844dd, _0x14a0d1['color'])
            continue
          case'4':
            _0x14a0d1['image'] = _0xef01ea['PolylineCityLinkImage']
            continue
          case'5':
            _0x14a0d1['time'] = _0x45f908['MkeBq'](_0x45f908['LPavD'](_0x45f908['hSxGk'](_0x1fe781['secondsOfDay'], this['_time']), 0x3e8), this['duration'])
            continue
        }
        break
      }
    }
    _0x2e412a['prototype']['equals'] = function(_0x98c00e) {
      return _0x45f908['MYQeM'](this, _0x98c00e) || _0x45f908['YvpKJ'](_0x98c00e, _0x2e412a) && _0x2e50a5['equals'](this['_color'], _0x98c00e['_color'])
    }
    Cesium['PolylineCityLinkMaterialProperty'] = _0x2e412a
  }
  _0x596756['prototype']['_installWallMaterial'] = function() {
    var _0x433846 = {
      'IcZyb': _0x10ec70['jybOp'], 'CySoD': function(_0x154e95, _0x4cae34) {
        return _0x10ec70['SYQFk'](_0x154e95, _0x4cae34)
      }, 'oRrdG': function(_0x48665c, _0x176cec) {
        return _0x10ec70['bwEgz'](_0x48665c, _0x176cec)
      }, 'qzpXK': function(_0x274f79, _0x5b8061) {
        return _0x10ec70['WQBOZ'](_0x274f79, _0x5b8061)
      }, 'VhIUa': function(_0x859b0c, _0x249640) {
        return _0x10ec70['QWepq'](_0x859b0c, _0x249640)
      }
    }
    var _0x2066b5 = Cesium['Color'], _0x1a46a2 = Cesium['defaultValue'], _0x49ac94 = Cesium['defined'],
      _0x25edd7 = Object['defineProperties'], _0x24ceba = Cesium['Event'],
      _0x16a2d4 = Cesium['createPropertyDescriptor'], _0x1d174f = Cesium['Property'], _0x1c6422 = Cesium['Material']

    function _0x46429d(_0xaf645d) {
      var _0x49e07c = _0x10ec70['dvhNO']['split']('|'), _0x54eac7 = 0x0
      while (!![]) {
        switch (_0x49e07c[_0x54eac7++]) {
          case'0':
            this['_definitionChanged'] = new _0x24ceba()
            continue
          case'1':
            this['_color'] = undefined
            continue
          case'2':
            this['_time'] = new Date()['getTime']()
            continue
          case'3':
            this['color'] = _0x2066b5['BLUE']
            continue
          case'4':
            this['_colorSubscription'] = undefined
            continue
          case'5':
            _0xaf645d = _0x10ec70['MgjnY'](_0x1a46a2, _0xaf645d, _0x1a46a2['EMPTY_OBJECT'])
            continue
          case'6':
            this['duration'] = _0xaf645d['duration'] || 0xbb8
            continue
        }
        break
      }
    }

    _0x10ec70['MgjnY'](_0x25edd7, _0x46429d['prototype'], {
      'isvarant': {
        'get': function() {
          return ![]
        }
      }, 'definitionChanged': {
        'get': function() {
          return this['_definitionChanged']
        }
      }
    })
    _0x46429d['prototype']['getType'] = function(_0x6b9510) {
      return _0x1c6422['PolylineTrailLinkType']
    }
    _0x46429d['prototype']['getValue'] = function(_0x54aacd, _0x132d65) {
      var _0x160b2c = _0x433846['IcZyb']['split']('|'), _0x2a0982 = 0x0
      while (!![]) {
        switch (_0x160b2c[_0x2a0982++]) {
          case'0':
            _0x132d65['color'] = _0x1d174f['getValueOrClonedDefault'](this['_color'], _0x54aacd, _0x2066b5['WHITE'], _0x132d65['color'])
            continue
          case'1':
            if (!_0x433846['CySoD'](_0x49ac94, _0x132d65)) {
              _0x132d65 = {}
            }
            continue
          case'2':
            _0x132d65['time'] = _0x433846['oRrdG'](_0x433846['qzpXK'](_0x433846['VhIUa'](new Date()['getTime'](), this['_time']), this['duration']), this['duration'])
            continue
          case'3':
            return _0x132d65
          case'4':
            _0x132d65['image'] = _0x1c6422['PolylineTrailLinkImage']
            continue
        }
        break
      }
    }
    _0x46429d['prototype']['equals'] = function(_0xfb0ac1) {
      return _0x10ec70['CsDUD'](this, _0xfb0ac1) || _0x10ec70['BUgUV'](_0xfb0ac1, _0x46429d) && _0x1d174f['equals'](this['_color'], _0xfb0ac1['_color'])
    }
    _0x10ec70['MgjnY'](_0x25edd7, _0x46429d['prototype'], { 'color': _0x10ec70['FbXCZ'](_0x16a2d4, _0x10ec70['IPkkw']) })
    Cesium['WallLinkMaterialProperty'] = _0x46429d
  }
  _0x596756['prototype']['_installFlowMaterial'] = function() {
    var _0x205175 = Cesium['Color'], _0x4053ce = Cesium['defaultValue'], _0x11658e = Object['defineProperties'],
      _0x3076a4 = Cesium['Event'], _0x3c548f = Cesium['createPropertyDescriptor'], _0x1f05a6 = Cesium['Property'],
      _0x4ab030 = Cesium['Material']

    function _0x58301b(_0x4c2769) {
      var _0x5b5443 = _0x10ec70['vcgVJ']['split']('|'), _0x34199f = 0x0
      while (!![]) {
        switch (_0x5b5443[_0x34199f++]) {
          case'0':
            this['color'] = _0x4c2769['color'] || _0x205175['fromBytes'](0x0, 0xff, 0xff, 0xff)
            continue
          case'1':
            _0x4c2769 = _0x10ec70['MgjnY'](_0x4053ce, _0x4c2769, _0x4053ce['EMPTY_OBJECT'])
            continue
          case'2':
            this['_durationSubscription'] = undefined
            continue
          case'3':
            this['_definitionChanged'] = _0x10ec70['XHgEF'](_0x3076a4)
            continue
          case'4':
            this['duration'] = _0x10ec70['MgjnY'](_0x4053ce, _0x4c2769['duration'], 0x2d)
            continue
          case'5':
            this['_color'] = undefined
            continue
          case'6':
            this['_duration'] = undefined
            continue
          case'7':
            this['_colorSubscription'] = undefined
            continue
        }
        break
      }
    }

    _0x10ec70['gzFSC'](_0x11658e, _0x58301b['prototype'], {
      'isConstant': {
        'get': function() {
          return ![]
        }
      }, 'definitionChanged': {
        'get': function() {
          return this['_definitionChanged']
        }
      }
    })
    _0x58301b['prototype']['getType'] = function(_0x4c8503) {
      return _0x4ab030['PolylineFlowType']
    }
    _0x58301b['prototype']['getValue'] = function(_0x2ac9fe, _0x4910ca) {
      if (!_0x4910ca) {
        _0x4910ca = {}
      }
      _0x4910ca['color'] = _0x1f05a6['getValueOrClonedDefault'](this['_color'], _0x2ac9fe, Cesium['Color']['WHITE'], _0x4910ca['color'])
      _0x4910ca['duration'] = this['_duration']
      return _0x4910ca
    }
    _0x58301b['prototype']['equals'] = function(_0x1bf1b4) {
      return _0x10ec70['CsDUD'](this, _0x1bf1b4) || _0x10ec70['CaBmM'](_0x1bf1b4, _0x58301b) && _0x1f05a6['equals'](this['_color'], _0x1bf1b4['_color'])
    }
    _0x10ec70['gzFSC'](_0x11658e, _0x58301b['prototype'], {
      'color': _0x10ec70['HySRk'](_0x3c548f, _0x10ec70['IPkkw']),
      'duration': _0x10ec70['HySRk'](_0x3c548f, _0x10ec70['KPGMI'])
    })
    Cesium['PolylineFlowMaterialProperty'] = _0x58301b
  }
  _0x596756['prototype']['_installWarnMaterial'] = function() {
    var _0x2c74dc = {
      'YkUBn': _0x10ec70['EemJt'], 'yVrbU': function(_0x5a6fe1, _0xbb9937, _0x1b5ea7) {
        return _0x10ec70['gzFSC'](_0x5a6fe1, _0xbb9937, _0x1b5ea7)
      }
    }
    var _0x45bc0c = Cesium['Color'], _0x2d78a5 = Cesium['defaultValue'], _0x2ca6b2 = Cesium['defined'],
      _0x433993 = Object['defineProperties'], _0x3f971c = Cesium['Event'],
      _0x2c99b9 = Cesium['createPropertyDescriptor'], _0x4abbba = Cesium['Property'], _0x4e69c6 = Cesium['Material']

    function _0xa9959c(_0x154e65) {
      var _0xcaec82 = _0x2c74dc['YkUBn']['split']('|'), _0x25e3c1 = 0x0
      while (!![]) {
        switch (_0xcaec82[_0x25e3c1++]) {
          case'0':
            _0x154e65 = _0x2c74dc['yVrbU'](_0x2d78a5, _0x154e65, _0x2d78a5['EMPTY_OBJECT'])
            continue
          case'1':
            this['_definitionChanged'] = new _0x3f971c()
            continue
          case'2':
            this['color'] = _0x154e65['color'] || _0x45bc0c['BLUE']
            continue
          case'3':
            this['_time'] = new Date()['getTime']()
            continue
          case'4':
            this['_colorSubscription'] = undefined
            continue
          case'5':
            this['duration'] = _0x154e65['duration'] || 0xbb8
            continue
          case'6':
            this['_color'] = undefined
            continue
        }
        break
      }
    }

    _0x10ec70['iGWGO'](_0x433993, _0xa9959c['prototype'], {
      'isvarant': {
        'get': function() {
          return ![]
        }
      }, 'definitionChanged': {
        'get': function() {
          return this['_definitionChanged']
        }
      }
    })
    _0xa9959c['prototype']['getType'] = function(_0x2e25a7) {
      return _0x4e69c6['WarnLinkType']
    }
    _0xa9959c['prototype']['getValue'] = function(_0x5e4854, _0x2c2dcd) {
      var _0x16c3d8 = _0x10ec70['opMre']['split']('|'), _0x4d0caf = 0x0
      while (!![]) {
        switch (_0x16c3d8[_0x4d0caf++]) {
          case'0':
            _0x2c2dcd['image'] = _0x4e69c6['WarnLinkImage']
            continue
          case'1':
            _0x2c2dcd['color'] = _0x4abbba['getValueOrClonedDefault'](this['_color'], _0x5e4854, _0x45bc0c['WHITE'], _0x2c2dcd['color'])
            continue
          case'2':
            if (!_0x10ec70['HySRk'](_0x2ca6b2, _0x2c2dcd)) {
              _0x2c2dcd = {}
            }
            continue
          case'3':
            _0x2c2dcd['time'] = _0x10ec70['RGXKN'](_0x10ec70['ZmBDW'](_0x10ec70['QWepq'](new Date()['getTime'](), this['_time']), this['duration']), this['duration'])
            continue
          case'4':
            return _0x2c2dcd
        }
        break
      }
    }
    _0xa9959c['prototype']['equals'] = function(_0x3785fc) {
      return _0x10ec70['CsDUD'](this, _0x3785fc) || _0x10ec70['stTqn'](_0x3785fc, _0xa9959c) && _0x4abbba['equals'](this['_color'], _0x3785fc['_color'])
    }
    _0x10ec70['iGWGO'](_0x433993, _0xa9959c['prototype'], { 'color': _0x10ec70['xchso'](_0x2c99b9, _0x10ec70['IPkkw']) })
    Cesium['WarnLinkMaterialProperty'] = _0xa9959c
  }
  _0x596756['prototype']['_installCircleMaterial'] = function() {
    var _0x368f71 = {
      'eHjwQ': function(_0x879a8a, _0x5e6b37) {
        return _0x10ec70['drWJQ'](_0x879a8a, _0x5e6b37)
      }, 'mYTgs': function(_0x62c67a, _0x1a72bb) {
        return _0x10ec70['stTqn'](_0x62c67a, _0x1a72bb)
      }
    }
    var _0x256bee = Cesium['Color'], _0x238144 = Cesium['defaultValue'], _0x22fbd4 = Object['defineProperties'],
      _0x43980b = Cesium['Event'], _0x3bc5f5 = Cesium['Property'], _0x41b8b9 = Cesium['Material']

    function _0x2b5cbc(_0x222ecf) {
      var _0x591396 = _0x10ec70['ZJOMR']['split']('|'), _0x4a5542 = 0x0
      while (!![]) {
        switch (_0x591396[_0x4a5542++]) {
          case'0':
            this['_colorSubscription'] = undefined
            continue
          case'1':
            this['gradient'] = _0x10ec70['iGWGO'](_0x238144, _0x222ecf['gradient'], 0.1)
            continue
          case'2':
            this['duration'] = _0x10ec70['iGWGO'](_0x238144, _0x222ecf['duration'], 0x2d)
            continue
          case'3':
            this['_definitionChanged'] = new _0x43980b()
            continue
          case'4':
            this['_duration'] = undefined
            continue
          case'5':
            _0x222ecf = _0x10ec70['UosEj'](_0x222ecf, {})
            continue
          case'6':
            this['color'] = _0x10ec70['EoXwW'](_0x238144, _0x222ecf['color'], _0x256bee['fromBytes'](0x0, 0xff, 0xff, 0xff))
            continue
          case'7':
            this['_color'] = undefined
            continue
          case'8':
            this['count'] = Math['max'](_0x10ec70['nhajA'](_0x238144, _0x222ecf['count'], 0x2), 0x1)
            continue
          case'9':
            if (_0x10ec70['SwBRo'](this['gradient'], 0x0)) {
              this['gradient'] = 0x0
            } else if (_0x10ec70['HbGwk'](this['gradient'], 0x1)) {
              this['gradient'] = 0x1
            }
            continue
          case'10':
            this['_durationSubscription'] = undefined
            continue
        }
        break
      }
    }

    _0x10ec70['nhajA'](_0x22fbd4, _0x2b5cbc['prototype'], {
      'isConstant': {
        'get': function() {
          return ![]
        }
      }, 'definitionChanged': {
        'get': function() {
          return this['_definitionChanged']
        }
      }
    })
    _0x2b5cbc['prototype']['getType'] = function(_0x531b32) {
      return _0x41b8b9['CircleWaveType']
    }
    _0x2b5cbc['prototype']['getValue'] = function(_0xb7c32f, _0x15d53e) {
      var _0x58e5e9 = _0x10ec70['xORPx']['split']('|'), _0xdfeec = 0x0
      while (!![]) {
        switch (_0x58e5e9[_0xdfeec++]) {
          case'0':
            _0x15d53e['gradient'] = this['gradient']
            continue
          case'1':
            return _0x15d53e
          case'2':
            _0x15d53e['duration'] = this['_duration']
            continue
          case'3':
            _0x15d53e['color'] = _0x3bc5f5['getValueOrUndefined'](this['_color'], _0xb7c32f)
            continue
          case'4':
            _0x15d53e['count'] = this['count']
            continue
          case'5':
            if (!_0x15d53e) {
              _0x15d53e = {}
            }
            continue
        }
        break
      }
    }
    _0x2b5cbc['prototype']['equals'] = function(_0x20ef22) {
      return _0x368f71['eHjwQ'](this, _0x20ef22) || _0x368f71['mYTgs'](_0x20ef22, _0x2b5cbc) && Cesium['Property']['equals'](this['_color'], _0x20ef22['_color'])
    }
    _0x10ec70['nhajA'](_0x22fbd4, _0x2b5cbc['prototype'], {
      'color': Cesium['createPropertyDescriptor'](_0x10ec70['IPkkw']),
      'duration': Cesium['createPropertyDescriptor'](_0x10ec70['KPGMI'])
    })
    Cesium['CircleWaveMaterialProperty'] = _0x2b5cbc
  }
  _0x596756['prototype']['_installMaterialSources'] = function() {
    var _0x48b8ec = _0x10ec70['UwcPt']['split']('|'), _0x99a6df = 0x0
    while (!![]) {
      switch (_0x48b8ec[_0x99a6df++]) {
        case'0':
          _0x29c577['CircleWaveType'] = _0x10ec70['SkDkx']
          continue
        case'1':
          _0x29c577['PolylineCityLinkImage'] = _0x10ec70['YaSzZ']
          continue
        case'2':
          var _0x487bf1 = Cesium['Color'], _0x29c577 = Cesium['Material']
          continue
        case'3':
          _0x29c577['WarnLinkType'] = _0x10ec70['jeuBt']
          continue
        case'4':
          _0x29c577['PolylineTrailLinkImage'] = _0x10ec70['jmwfk']
          continue
        case'5':
          _0x29c577['PolylineTrailLinkType'] = _0x10ec70['mmKDi']
          continue
        case'6':
          _0x29c577['PolylineFlowType'] = _0x10ec70['vbVPx']
          continue
        case'7':
          _0x29c577['_materialCache']['addMaterial'](_0x29c577['CircleWaveType'], {
            'fabric': {
              'type': _0x29c577['CircleWaveType'],
              'uniforms': {
                'color': new _0x487bf1(0x1, 0x0, 0x0, 0.7),
                'duration': 0x2d,
                'count': 0x1,
                'gradient': 0.1
              },
              'source': this['_getCircleMaterial']()
            }, 'translucent': function(_0x949050) {
              return !![]
            }
          })
          continue
        case'8':
          _0x29c577['_materialCache']['addMaterial'](_0x29c577['PolylineFlowType'], {
            'fabric': {
              'type': _0x29c577['PolylineFlowType'],
              'uniforms': { 'color': new _0x487bf1(0x1, 0x0, 0x0, 0.7), 'duration': 0x2d },
              'source': this['_getFlowLineMaterail']()
            }, 'translucent': function(_0x225d44) {
              return !![]
            }
          })
          continue
        case'9':
          _0x29c577['WarnLinkImage'] = _0x10ec70['Nesww']
          continue
        case'10':
          _0x29c577['_materialCache']['addMaterial'](_0x29c577['PolylineTrailLinkType'], {
            'fabric': {
              'type': _0x29c577['PolylineTrailLinkType'],
              'uniforms': {
                'color': new _0x487bf1(0x1, 0x0, 0x0, 0.5),
                'image': _0x29c577['PolylineTrailLinkImage'],
                'time': 0x0
              },
              'source': this['_getWallMaterial']({ 'count': 0x1, 'freely': _0x10ec70['dQxIM'], 'direction': '-' })
            }, 'translucent': function(_0x1cc0ea) {
              return !![]
            }
          })
          continue
        case'11':
          _0x29c577['_materialCache']['addMaterial'](_0x29c577['PolylineCityLinkType'], {
            'fabric': {
              'type': _0x29c577['PolylineCityLinkType'],
              'uniforms': {
                'color': new _0x487bf1(0x1, 0x0, 0x0, 0x1),
                'image': _0x29c577['PolylineCityLinkImage'],
                'time': 0x0
              },
              'source': this['_getLineMaterail']()
            }, 'translucent': function() {
              return !![]
            }
          })
          continue
        case'12':
          _0x29c577['PolylineCityLinkType'] = _0x10ec70['OjovG']
          continue
        case'13':
          _0x29c577['_materialCache']['addMaterial'](_0x29c577['WarnLinkType'], {
            'fabric': {
              'type': _0x29c577['PolylineTrailLeftLinkType'],
              'uniforms': {
                'color': new _0x487bf1(0x1, 0x0, 0x0, 0.5),
                'image': _0x29c577['WarnLinkImage'],
                'time': 0x0
              },
              'source': this['_getWallMaterial']({ 'count': 0xa, 'freely': _0x10ec70['kUzph'], 'direction': '-' })
            }, 'translucent': function(_0x433747) {
              return !![]
            }
          })
          continue
      }
      break
    }
  }
  _0x596756['prototype']['_getWallMaterial'] = function(_0xf0c781) {
    var _0x5a09c5 = _0x10ec70['zKVan']['split']('|'), _0x19cece = 0x0
    while (!![]) {
      switch (_0x5a09c5[_0x19cece++]) {
        case'0':
          if (_0x10ec70['indRc'](_0xf0c781['freely'], _0x10ec70['dQxIM'])) {
            _0x574b97 += _0x10ec70['eJMNX'](_0x10ec70['FqmiV'](_0x10ec70['FqmiV'](_0x10ec70['FqmiV'](_0x10ec70['YKWYf'], _0xf0c781['count']), _0x10ec70['IRfNv']), _0xf0c781['direction']), _0x10ec70['CSbXE'])
          } else {
            _0x574b97 += _0x10ec70['FqmiV'](_0x10ec70['trkeo'](_0x10ec70['kTyxi'](_0x10ec70['kTyxi'](_0x10ec70['YKWYf'], _0xf0c781['count']), _0x10ec70['spNAi']), _0xf0c781['direction']), _0x10ec70['cMHWC'])
          }
          continue
        case'1':
          _0x574b97 += _0x10ec70['duNpq']
          continue
        case'2':
          _0x574b97 += _0x10ec70['hxFYq']
          continue
        case'3':
          var _0x574b97 = _0x10ec70['LIcbW']
          continue
        case'4':
          return _0x574b97
      }
      break
    }
  }
  _0x596756['prototype']['_getLineMaterail'] = function() {
    return _0x10ec70['tDtkM']
  }
  _0x596756['prototype']['_getFlowLineMaterail'] = function() {
    return _0x10ec70['nyzHH']
  }
  _0x596756['prototype']['_getCircleScanMaterail'] = function(_0x36ae34) {
    return _0x10ec70['OCrVD'](_0x10ec70['OjOkF'](_0x10ec70['ZeiLF'], _0x36ae34), _0x10ec70['pVxQt'])
  }
  _0x596756['prototype']['_getRadarScanMaterail'] = function() {
    return _0x10ec70['ihFtb']
  }
  _0x596756['prototype']['_getCircleMaterial'] = function() {
    return _0x10ec70['ftOqC']
  }
  _0x596756['prototype']['_installPlugin'] = function() {
    this['_installPrimitives']()
    this['_installCss3Renderer']()
    this['_installGroundSkyBox']()
  }
  _0x596756['prototype']['_initHeatMaps'] = function(_0x3628ab) {
    if (h337 && document['querySelector'](_0x10ec70['lJrgR'])) {
      var _0x5aefa7 = _0x10ec70['DnjWi']['split']('|'), _0x5f19f0 = 0x0
      while (!![]) {
        switch (_0x5aefa7[_0x5f19f0++]) {
          case'0':
            _0x3dcc14['setData'](_0x52efe6)
            continue
          case'1':
            while (_0x43fcf--) {
              var _0x2defda = Math['floor'](_0x10ec70['bVoML'](Math['random'](), 0x64))
              _0x18cfd8 = Math['max'](_0x18cfd8, _0x2defda)
              var _0x504f4d = {
                'x': Math['floor'](_0x10ec70['bVoML'](Math['random'](), _0x51bce0)),
                'y': Math['floor'](_0x10ec70['iBPjh'](Math['random'](), _0x257326)),
                'value': _0x2defda
              }
              _0x8b036['push'](_0x504f4d)
            }
            continue
          case'2':
            return _0x3dcc14
          case'3':
            var _0x52efe6 = { 'max': _0x18cfd8, 'data': _0x8b036 }
            continue
          case'4':
            var _0x3dcc14 = h337['create']({ 'container': document['querySelector'](_0x10ec70['lJrgR']) })
            continue
          case'5':
            var _0x8b036 = [], _0x18cfd8 = 0x0, _0x51bce0 = 0x348, _0x257326 = 0x190, _0x43fcf = 0xc8
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['_installCss3Renderer'] = function() {
    var _0x5b1bb0 = {
      'jWMcf': _0x10ec70['wVXgV'], 'WvPcY': function(_0x4f65a4, _0x521ddb) {
        return _0x10ec70['SwBRo'](_0x4f65a4, _0x521ddb)
      }, 'nLXsQ': function(_0x36480d, _0x5d7ed1) {
        return _0x10ec70['saoyK'](_0x36480d, _0x5d7ed1)
      }, 'OPJFz': function(_0x15e0c5, _0x4815d9) {
        return _0x10ec70['xchso'](_0x15e0c5, _0x4815d9)
      }, 'MVEnb': function(_0x35b040, _0x51c021) {
        return _0x10ec70['ROAHe'](_0x35b040, _0x51c021)
      }, 'QdXsL': function(_0x579aae, _0x4d974c) {
        return _0x10ec70['iJqWJ'](_0x579aae, _0x4d974c)
      }, 'suReC': function(_0x43d1df, _0x4c6309) {
        return _0x10ec70['iJqWJ'](_0x43d1df, _0x4c6309)
      }, 'xQNix': function(_0x22e33e, _0x5a0d1d) {
        return _0x10ec70['ROAHe'](_0x22e33e, _0x5a0d1d)
      }, 'amvFI': function(_0x50b731, _0x202654) {
        return _0x10ec70['OjLol'](_0x50b731, _0x202654)
      }, 'LRwCK': function(_0x5c571f, _0x10eb0c) {
        return _0x10ec70['gbucN'](_0x5c571f, _0x10eb0c)
      }, 'Mfkjc': _0x10ec70['MvdnS'], 'yEPSA': _0x10ec70['bIvub'], 'QGaVG': function(_0x21939d, _0x283e46) {
        return _0x10ec70['lXOlK'](_0x21939d, _0x283e46)
      }, 'pDNxo': _0x10ec70['ujqbo'], 'HJljY': function(_0x73fa46, _0x233f0a) {
        return _0x10ec70['iJqWJ'](_0x73fa46, _0x233f0a)
      }, 'JakrR': function(_0x49218f, _0x547aaf) {
        return _0x10ec70['LMjea'](_0x49218f, _0x547aaf)
      }, 'JLxDg': function(_0x16ffc3, _0x22d9e6) {
        return _0x10ec70['LMjea'](_0x16ffc3, _0x22d9e6)
      }, 'LvCPr': function(_0x26ce63, _0x47b1a2) {
        return _0x10ec70['RGXKN'](_0x26ce63, _0x47b1a2)
      }, 'oavJu': function(_0x5873ab, _0x37eceb) {
        return _0x10ec70['iRbPs'](_0x5873ab, _0x37eceb)
      }, 'PjhGN': function(_0x44a715, _0x61fec9) {
        return _0x10ec70['RGXKN'](_0x44a715, _0x61fec9)
      }, 'WVMzo': _0x10ec70['iRwVn'], 'LXBFm': function(_0x2b49f2, _0x6723fb) {
        return _0x10ec70['FyMsf'](_0x2b49f2, _0x6723fb)
      }, 'sFCxH': function(_0x28bdcd, _0x5699c0) {
        return _0x10ec70['RGXKN'](_0x28bdcd, _0x5699c0)
      }, 'jmoZE': function(_0x2980cd, _0x9b383f) {
        return _0x10ec70['RGXKN'](_0x2980cd, _0x9b383f)
      }, 'ifElo': function(_0x5e8526, _0x4b091c) {
        return _0x10ec70['TnGXP'](_0x5e8526, _0x4b091c)
      }, 'zyNuj': function(_0x3429a7, _0x4eb164) {
        return _0x10ec70['flYnx'](_0x3429a7, _0x4eb164)
      }, 'UILja': _0x10ec70['rQThk'], 'pskcY': _0x10ec70['gsySW'], 'pNvws': function(_0x1f00dc, _0x344389, _0x491266) {
        return _0x10ec70['dsVWq'](_0x1f00dc, _0x344389, _0x491266)
      }, 'hfVzj': _0x10ec70['JKTCY'], 'rOfvW': function(_0x17ad19, _0x2a896e, _0x51243b) {
        return _0x10ec70['dsVWq'](_0x17ad19, _0x2a896e, _0x51243b)
      }
    }
    var _0x4d803f = this['_viewer']

    function _0x1c50ff(_0x57e35b, _0x3bb253) {
      var _0xbccb30 = _0x5b1bb0['jWMcf']['split']('|'), _0x1a3421 = 0x0
      while (!![]) {
        switch (_0xbccb30[_0x1a3421++]) {
          case'0':
            this['_elements'] = _0x57e35b
            continue
          case'1':
            this['_scratch'] = new Cesium['Cartesian2']()
            continue
          case'2':
            this['_scene'] = _0x4d803f['scene'], this['_camera'] = _0x4d803f['camera']
            continue
          case'3':
            this['_isBackHide'] = _0x3bb253
            continue
          case'4':
            this['init']()
            continue
          case'5':
            this['_viewer'] = _0x4d803f
            continue
          case'6':
            this['_container'] = null
            continue
        }
        break
      }
    }

    _0x1c50ff['prototype']['init'] = function() {
      var _0x20aa46 = _0x10ec70['XkFrq']['split']('|'), _0x235571 = 0x0
      while (!![]) {
        switch (_0x20aa46[_0x235571++]) {
          case'0':
            var _0x1dfb7b = { 'IreVW': _0x10ec70['ujqbo'] }
            continue
          case'1':
            document['body']['appendChild'](_0x22ca5b)
            continue
          case'2':
            _0x22ca5b['className'] = 'ys-css3-container'
            continue
          case'3':
            var _0x22ca5b = document['createElement'](_0x10ec70['aOerJ'])
            continue
          case'4':
            this['_scene']['preRender']['addEventListener'](function() {
              for (var _0xb370e = 0x0; _0x5b1bb0['WvPcY'](_0xb370e, _0x22ca5b['children']['length']); _0xb370e++) {
                var _0x2bca5e = Cesium['Cartesian3']['fromDegrees'](_0x4ac96a['_elements'][_0xb370e]['position'][0x0], _0x4ac96a['_elements'][_0xb370e]['position'][0x1], _0x4ac96a['_elements'][_0xb370e]['position'][0x2] || 0x0)
                var _0x368fb5 = _0x4ac96a['_scene']['cartesianToCanvasCoordinates'](_0x2bca5e, _0x4ac96a['_scratch'])
                if (Cesium['defined'](_0x368fb5)) {
                  _0x22ca5b['children'][_0xb370e]['style']['left'] = _0x5b1bb0['nLXsQ'](_0x5b1bb0['nLXsQ'](_0x5b1bb0['OPJFz'](parseFloat, _0x368fb5['x']), _0x5b1bb0['MVEnb'](parseFloat, _0x4ac96a['_elements'][_0xb370e]['offset'][0x0])), 'px')
                  _0x22ca5b['children'][_0xb370e]['style']['top'] = _0x5b1bb0['QdXsL'](_0x5b1bb0['suReC'](_0x5b1bb0['xQNix'](parseFloat, _0x368fb5['y']), _0x5b1bb0['xQNix'](parseFloat, _0x4ac96a['_elements'][_0xb370e]['offset'][0x1])), 'px')
                  if (_0x4ac96a['_isBackHide']) {
                    var _0x4e9ccb = _0x4ac96a['_camera']['position'],
                      _0xe35a2d = _0x4ac96a['_scene']['globe']['ellipsoid']['cartesianToCartographic'](_0x4e9ccb)['height']
                    if (!(_0xe35a2d += _0x5b1bb0['amvFI'](0x1, _0x4ac96a['_scene']['globe']['ellipsoid']['maximumRadius']), _0x5b1bb0['LRwCK'](Cesium['Cartesian3']['distance'](_0x4e9ccb, _0x2bca5e), _0xe35a2d))) {
                      _0x22ca5b['children'][_0xb370e]['style']['display'] = _0x5b1bb0['Mfkjc']
                    } else {
                      _0x22ca5b['children'][_0xb370e]['style']['display'] = _0x5b1bb0['yEPSA']
                    }
                  }
                }
              }
            })
            continue
          case'5':
            this['_elements']['forEach'](function(_0x4daaad) {
              _0x22ca5b['insertAdjacentHTML'](_0x1dfb7b['IreVW'], _0x4daaad['element'])
            })
            continue
          case'6':
            this['_container'] = _0x22ca5b
            continue
          case'7':
            var _0x4ac96a = this
            continue
        }
        break
      }
    }
    _0x1c50ff['prototype']['remove'] = function(_0x5d1e14) {
      this['_elements'] = this['_elements']['filter'](function(_0x421275) {
        _0x5b1bb0['QGaVG'](_0x421275['id'], _0x5d1e14)
      })
      this['_container']['removeChild'](document['getElementById'](_0x5d1e14))
    }
    _0x1c50ff['prototype']['append'] = function(_0x106fa1) {
      this['_elements']['push'](_0x106fa1)
      this['_container']['insertAdjacentHTML'](_0x5b1bb0['pDNxo'], _0x106fa1['element'])
    }
    _0x1c50ff['prototype']['removeEntityLayer'] = function(_0x5d4644) {
      this['_viewer']['entities']['removeById'](_0x5b1bb0['suReC'](_0x5d4644, '_1'))
      this['_viewer']['entities']['removeById'](_0x5b1bb0['HJljY'](_0x5d4644, '_2'))
      this['_viewer']['entities']['removeById'](_0x5b1bb0['JakrR'](_0x5d4644, '_3'))
      this['remove'](_0x5d4644)
    }
    _0x1c50ff['prototype']['addEntityLayer'] = function(_0x4c50b9) {
      var _0xafecc7 = _0x5b1bb0['WVMzo']['split']('|'), _0x5093b9 = 0x0
      while (!![]) {
        switch (_0xafecc7[_0x5093b9++]) {
          case'0':
            var _0x3043fd = Cesium['Math']['toRadians'](0x1e)
            continue
          case'1':
            var _0x5ede97 = {
              'YsIxV': function(_0xabb937, _0x1d69fc) {
                return _0x5b1bb0['JLxDg'](_0xabb937, _0x1d69fc)
              }, 'iGItH': function(_0x4127a6, _0x5d64fe) {
                return _0x5b1bb0['LXBFm'](_0x4127a6, _0x5d64fe)
              }, 'EVnbe': function(_0x30f2be, _0x541260) {
                return _0x5b1bb0['sFCxH'](_0x30f2be, _0x541260)
              }, 'smtLp': function(_0x1a2a0f, _0x5e8801) {
                return _0x5b1bb0['jmoZE'](_0x1a2a0f, _0x5e8801)
              }, 'AkzEq': function(_0x44f556, _0x36be29) {
                return _0x5b1bb0['ifElo'](_0x44f556, _0x36be29)
              }, 'lrsGy': function(_0x5dad25, _0x21ef84) {
                return _0x5b1bb0['LXBFm'](_0x5dad25, _0x21ef84)
              }
            }
            continue
          case'2':
            if (_0x4c50b9['circleShow']) {
              _0x4c50b9['circleSize'] = _0x4c50b9['circleSize'] || 0x78
              this['_viewer']['entities']['add']({
                'id': _0x5b1bb0['zyNuj'](_0x4c50b9['id'], '_2'),
                'name': '椭圆',
                'position': Cesium['Cartesian3']['fromDegrees'](_0x373744, _0x1dba21),
                'ellipse': {
                  'semiMinorAxis': new Cesium['CallbackProperty'](function() {
                    if (_0x56fbed) {
                      _0x5d21ff = _0x5ede97['YsIxV'](_0x5d21ff, _0x5ede97['EVnbe'](_0x4c50b9['circleSize'], 0x14))
                      if (_0x5ede97['iGItH'](_0x5d21ff, _0x4c50b9['circleSize'])) {
                        _0x5d21ff = _0x4c50b9['circleSize']
                      }
                    }
                    return _0x5d21ff
                  }, ![]), 'semiMajorAxis': new Cesium['CallbackProperty'](function() {
                    if (_0x56fbed) {
                      _0x5be963 = _0x5ede97['YsIxV'](_0x5be963, _0x5ede97['smtLp'](_0x4c50b9['circleSize'], 0x14))
                      if (_0x5ede97['iGItH'](_0x5be963, _0x4c50b9['circleSize'])) {
                        _0x5be963 = _0x4c50b9['circleSize']
                      }
                    }
                    return _0x5be963
                  }, ![]), 'material': _0x5b1bb0['UILja'], 'rotation': new Cesium['CallbackProperty'](function() {
                    _0x3043fd += 0.05
                    return _0x3043fd
                  }, ![]), 'stRotation': new Cesium['CallbackProperty'](function() {
                    _0x3043fd += 0.05
                    return _0x3043fd
                  }, ![]), 'zIndex': 0x2
                }
              })
              this['_viewer']['entities']['add']({
                'id': _0x5b1bb0['zyNuj'](_0x4c50b9['id'], '_3'),
                'name': '椭圆',
                'position': Cesium['Cartesian3']['fromDegrees'](_0x373744, _0x1dba21),
                'ellipse': {
                  'semiMinorAxis': new Cesium['CallbackProperty'](function() {
                    if (_0x56fbed) {
                      _0x20e72c = _0x5b1bb0['JLxDg'](_0x20e72c, _0x5b1bb0['LvCPr'](_0x4c50b9['circleSize'], 0x14))
                      if (_0x5b1bb0['oavJu'](_0x20e72c, _0x5b1bb0['LvCPr'](_0x4c50b9['circleSize'], 0x2))) {
                        _0x20e72c = _0x5b1bb0['PjhGN'](_0x4c50b9['circleSize'], 0x2)
                      }
                    }
                    return _0x20e72c
                  }, ![]), 'semiMajorAxis': new Cesium['CallbackProperty'](function() {
                    if (_0x56fbed) {
                      _0x5878e6 = _0x5ede97['AkzEq'](_0x5878e6, _0x5ede97['smtLp'](_0x4c50b9['circleSize'], 0x14))
                      if (_0x5ede97['lrsGy'](_0x5878e6, _0x5ede97['smtLp'](_0x4c50b9['circleSize'], 0x2))) {
                        _0x5878e6 = _0x5ede97['smtLp'](_0x4c50b9['circleSize'], 0x2)
                      }
                    }
                    return _0x5878e6
                  }, ![]), 'material': _0x5b1bb0['pskcY'], 'rotation': new Cesium['CallbackProperty'](function() {
                    _0x2bb447 -= 0.03
                    return _0x2bb447
                  }, ![]), 'stRotation': new Cesium['CallbackProperty'](function() {
                    _0x2bb447 -= 0.03
                    return _0x2bb447
                  }, ![]), 'zIndex': 0x3
                }
              })
            }
            continue
          case'3':
            var _0x420a4f = _0x4c50b9['boxHeight'] || 0x12c, _0x31d8ae = _0x4c50b9['boxHeightMax'] || 0x190,
              _0x3f48de = _0x4c50b9['boxHeightDif'] || 0xa
            continue
          case'4':
            var _0x373744 = _0x4c50b9['position'][0x0], _0x1dba21 = _0x4c50b9['position'][0x1], _0x56fbed = ![],
              _0x1ef7be = this, _0x5d21ff = 0.001, _0x5be963 = _0x5d21ff, _0x20e72c = _0x5d21ff, _0x5878e6 = _0x5d21ff
            continue
          case'5':
            var _0x938ade = !![]
            continue
          case'6':
            var _0x2bb447 = Cesium['Math']['toRadians'](0x1e)
            continue
          case'7':
            _0x5b1bb0['pNvws'](setTimeout, function(_0x230a4) {
              _0x230a4 = !![]
            }, 0x12c)
            continue
          case'8':
            if (_0x4c50b9['boxShow']) {
              this['_viewer']['entities']['add']({
                'id': _0x5b1bb0['zyNuj'](_0x4c50b9['id'], '_1'),
                'name': _0x5b1bb0['hfVzj'],
                'position': new Cesium['CallbackProperty'](function() {
                  _0x420a4f = _0x5ede97['YsIxV'](_0x420a4f, _0x3f48de)
                  if (_0x5ede97['iGItH'](_0x420a4f, _0x31d8ae)) {
                    _0x420a4f = _0x31d8ae
                  }
                  return Cesium['Cartesian3']['fromDegrees'](_0x373744, _0x1dba21, _0x5ede97['EVnbe'](_0x420a4f, 0x2))
                }, ![]),
                'box': {
                  'dimensions': new Cesium['CallbackProperty'](function() {
                    _0x420a4f = _0x5ede97['YsIxV'](_0x420a4f, _0x3f48de)
                    if (_0x5ede97['iGItH'](_0x420a4f, _0x31d8ae)) {
                      _0x420a4f = _0x31d8ae
                      if (_0x938ade) {
                        _0x938ade = ![]
                        _0x1ef7be['append'](_0x4c50b9, !![])
                      }
                    }
                    return new Cesium['Cartesian3'](_0x4c50b9['boxSide'] || 0x64, _0x4c50b9['boxSide'] || 0x64, _0x420a4f)
                  }, ![]), 'material': _0x4c50b9['boxMaterial'] || Cesium['Color']['DEEPSKYBLUE']['withAlpha'](0.5)
                }
              })
            } else {
              _0x5b1bb0['rOfvW'](setTimeout, function() {
                _0x1ef7be['append'](_0x4c50b9, !![])
              }, 0x64)
            }
            continue
        }
        break
      }
    }
    Cesium['Css3Renderer'] = _0x1c50ff
  }
  _0x596756['prototype']['_installGroundSkyBox'] = function() {
    var _0xd8901 = {
      'SYJgo': _0x10ec70['xsPMs'], 'zCMit': function(_0x337374, _0x9827fd, _0x5778e6) {
        return _0x10ec70['dsVWq'](_0x337374, _0x9827fd, _0x5778e6)
      }, 'RMaby': _0x10ec70['Owozn'], 'ZYcOG': function(_0x3191d6, _0x337584) {
        return _0x10ec70['ROAHe'](_0x3191d6, _0x337584)
      }, 'smSPu': function(_0x153a60, _0x1d03ce) {
        return _0x10ec70['lXOlK'](_0x153a60, _0x1d03ce)
      }, 'UriIh': _0x10ec70['opBpC'], 'kWObS': _0x10ec70['EGlrQ'], 'PMQsH': function(_0x584ca1, _0x2d065c) {
        return _0x10ec70['HSRRf'](_0x584ca1, _0x2d065c)
      }, 'GHIbn': function(_0x1f982d, _0xd7af8d) {
        return _0x10ec70['UsXdz'](_0x1f982d, _0xd7af8d)
      }, 'KAoIg': function(_0x31d999, _0x176ce9) {
        return _0x10ec70['UsXdz'](_0x31d999, _0x176ce9)
      }, 'jVaLx': _0x10ec70['yIoIu'], 'jmXCr': function(_0xe3b428, _0x4670b9) {
        return _0x10ec70['UsXdz'](_0xe3b428, _0x4670b9)
      }, 'BbCiz': function(_0x33b321, _0xd93709) {
        return _0x10ec70['UsXdz'](_0x33b321, _0xd93709)
      }, 'wRSwz': _0x10ec70['WniOg'], 'rrVlf': function(_0x4539d6, _0x389910) {
        return _0x10ec70['KgMID'](_0x4539d6, _0x389910)
      }, 'kPFQd': function(_0x100fc1, _0x2006e3) {
        return _0x10ec70['KgMID'](_0x100fc1, _0x2006e3)
      }, 'eeRpM': function(_0x16f37e, _0x13cb2f) {
        return _0x10ec70['cEebA'](_0x16f37e, _0x13cb2f)
      }, 'IlQnl': function(_0x8fd38d, _0x17056e) {
        return _0x10ec70['cEebA'](_0x8fd38d, _0x17056e)
      }, 'uwjDq': function(_0x3998f0, _0x591a8c) {
        return _0x10ec70['cEebA'](_0x3998f0, _0x591a8c)
      }, 'ffZgN': function(_0x2336d4, _0x4e183f) {
        return _0x10ec70['TKjyT'](_0x2336d4, _0x4e183f)
      }, 'vDztL': _0x10ec70['OBolE'], 'GtnUt': function(_0x455d66, _0x5b183a) {
        return _0x10ec70['mGmBh'](_0x455d66, _0x5b183a)
      }, 'FNBsK': _0x10ec70['plDIw'], 'yQXMT': function(_0x1bb300, _0x1d57a9, _0x203c60) {
        return _0x10ec70['dsVWq'](_0x1bb300, _0x1d57a9, _0x203c60)
      }, 'Pikax': _0x10ec70['inNgf']
    }
    var _0x283c87 = Cesium['BoxGeometry'], _0x182bc7 = Cesium['Cartesian3'], _0x4b11ef = Cesium['defaultValue'],
      _0x444455 = Cesium['defined'], _0x2f2b4e = Cesium['destroyObject'], _0x9ee9f7 = Cesium['DeveloperError'],
      _0x128087 = Cesium['GeometryPipeline'], _0x53eb28 = Cesium['Matrix3'], _0x4c34e8 = Cesium['Matrix4'],
      _0x13c1ad = Cesium['Transforms'], _0x27265b = Cesium['VertexFormat'], _0x375ce3 = Cesium['BufferUsage'],
      _0x42a781 = Cesium['CubeMap'], _0x4f2568 = Cesium['DrawCommand'], _0xdb2e3 = Cesium['loadCubeMap'],
      _0x10257d = Cesium['RenderState'], _0x4f13b5 = Cesium['VertexArray'], _0x264d17 = Cesium['BlendingState'],
      _0x313140 = Cesium['SceneMode'], _0x69dbb2 = Cesium['ShaderProgram'], _0x51cf6d = Cesium['ShaderSource']
    var _0x4f8764 = _0x10ec70['EdPkc']
    var _0x1a327c = _0x10ec70['abxpC']
    if (!_0x10ec70['TKjyT'](_0x444455, _0x4c34e8['getRotation'])) {
      _0x4c34e8['getRotation'] = _0x4c34e8['getMatrix3']
    }

    function _0x427251(_0xf3fe01) {
      var _0x34c4bf = _0xd8901['SYJgo']['split']('|'), _0x11fafd = 0x0
      while (!![]) {
        switch (_0x34c4bf[_0x11fafd++]) {
          case'0':
            this['_attributeLocations'] = undefined
            continue
          case'1':
            this['_command'] = new _0x4f2568({
              'modelMatrix': _0x4c34e8['clone'](_0x4c34e8['IDENTITY']),
              'owner': this
            })
            continue
          case'2':
            this['sources'] = _0xf3fe01['sources']
            continue
          case'3':
            this['_useHdr'] = undefined
            continue
          case'4':
            this['_sources'] = undefined
            continue
          case'5':
            this['show'] = _0xd8901['zCMit'](_0x4b11ef, _0xf3fe01['show'], !![])
            continue
          case'6':
            this['_cubeMap'] = undefined
            continue
        }
        break
      }
    }

    var _0x582ce2 = new _0x53eb28()
    _0x427251['prototype']['update'] = function(_0x77013e, _0x1dffaa) {
      var _0x1d0a9f = _0xd8901['RMaby']['split']('|'), _0x552e6e = 0x0
      while (!![]) {
        switch (_0x1d0a9f[_0x552e6e++]) {
          case'0':
            if (!_0x77013e['passes']['render']) {
              return undefined
            }
            continue
          case'1':
            _0x149c5d['modelMatrix'] = _0x13c1ad['eastNorthUpToFixedFrame'](_0x77013e['camera']['_positionWC'])
            continue
          case'2':
            if (!_0xd8901['ZYcOG'](_0x444455, _0x149c5d['shaderProgram']) || _0xd8901['smSPu'](this['_useHdr'], _0x1dffaa)) {
              var _0xa73044 = new _0x51cf6d({
                'defines': [_0x1dffaa ? _0xd8901['UriIh'] : ''],
                'sources': [_0x4f8764]
              })
              _0x149c5d['shaderProgram'] = _0x69dbb2['fromCache']({
                'context': _0x3882fb,
                'vertexShaderSource': _0x1a327c,
                'fragmentShaderSource': _0xa73044,
                'attributeLocations': this['_attributeLocations']
              })
              this['_useHdr'] = _0x1dffaa
            }
            continue
          case'3':
            if (!_0xd8901['ZYcOG'](_0x444455, _0x149c5d['vertexArray'])) {
              var _0x4b0739 = _0xd8901['kWObS']['split']('|'), _0x10c1e = 0x0
              while (!![]) {
                switch (_0x4b0739[_0x10c1e++]) {
                  case'0':
                    _0x149c5d['renderState'] = _0x10257d['fromCache']({ 'blending': _0x264d17['ALPHA_BLEND'] })
                    continue
                  case'1':
                    var _0x48947d = this['_attributeLocations'] = _0x128087['createAttributeLocations'](_0x3720f1)
                    continue
                  case'2':
                    var _0x3720f1 = _0x283c87['createGeometry'](_0x283c87['fromDimensions']({
                      'dimensions': new _0x182bc7(0x2, 0x2, 0x2),
                      'vertexFormat': _0x27265b['POSITION_ONLY']
                    }))
                    continue
                  case'3':
                    _0x149c5d['uniformMap'] = {
                      'u_cubeMap': function() {
                        return _0x223617['_cubeMap']
                      }, 'u_rotateMatrix': function() {
                        return _0x4c34e8['getRotation'](_0x149c5d['modelMatrix'], _0x582ce2)
                      }
                    }
                    continue
                  case'4':
                    _0x149c5d['vertexArray'] = _0x4f13b5['fromGeometry']({
                      'context': _0x3882fb,
                      'geometry': _0x3720f1,
                      'attributeLocations': _0x48947d,
                      'bufferUsage': _0x375ce3['_DRAW']
                    })
                    continue
                }
                break
              }
            }
            continue
          case'4':
            return _0x149c5d
          case'5':
            var _0x149c5d = this['_command']
            continue
          case'6':
            if (!this['show']) {
              return undefined
            }
            continue
          case'7':
            var _0x3882fb = _0x77013e['context']
            continue
          case'8':
            if (!_0xd8901['PMQsH'](_0x444455, this['_cubeMap'])) {
              return undefined
            }
            continue
          case'9':
            if (_0xd8901['smSPu'](_0x77013e['mode'], _0x313140['SCENE3D']) && _0xd8901['GHIbn'](_0x77013e['mode'], _0x313140['MORPHING'])) {
              return undefined
            }
            continue
          case'10':
            if (_0xd8901['KAoIg'](this['_sources'], this['sources'])) {
              var _0x354f66 = _0xd8901['jVaLx']['split']('|'), _0x57f7d6 = 0x0
              while (!![]) {
                switch (_0x354f66[_0x57f7d6++]) {
                  case'0':
                    var _0x4f1eeb = this['sources']
                    continue
                  case'1':
                    this['_sources'] = this['sources']
                    continue
                  case'2':
                    if (_0xd8901['jmXCr'](typeof _0x4f1eeb['positiveX'], typeof _0x4f1eeb['negativeX']) || _0xd8901['jmXCr'](typeof _0x4f1eeb['positiveX'], typeof _0x4f1eeb['positiveY']) || _0xd8901['jmXCr'](typeof _0x4f1eeb['positiveX'], typeof _0x4f1eeb['negativeY']) || _0xd8901['BbCiz'](typeof _0x4f1eeb['positiveX'], typeof _0x4f1eeb['positiveZ']) || _0xd8901['BbCiz'](typeof _0x4f1eeb['positiveX'], typeof _0x4f1eeb['negativeZ'])) {
                      throw new _0x9ee9f7(_0xd8901['wRSwz'])
                    }
                    continue
                  case'3':
                    if (!_0xd8901['rrVlf'](_0x444455, _0x4f1eeb['positiveX']) || !_0xd8901['kPFQd'](_0x444455, _0x4f1eeb['negativeX']) || !_0xd8901['eeRpM'](_0x444455, _0x4f1eeb['positiveY']) || !_0xd8901['IlQnl'](_0x444455, _0x4f1eeb['negativeY']) || !_0xd8901['uwjDq'](_0x444455, _0x4f1eeb['positiveZ']) || !_0xd8901['ffZgN'](_0x444455, _0x4f1eeb['negativeZ'])) {
                      throw new _0x9ee9f7(_0xd8901['vDztL'])
                    }
                    continue
                  case'4':
                    if (_0xd8901['GtnUt'](typeof _0x4f1eeb['positiveX'], _0xd8901['FNBsK'])) {
                      _0xd8901['yQXMT'](_0xdb2e3, _0x3882fb, this['_sources'])['then'](function(_0x3aadfc) {
                        _0x223617['_cubeMap'] = _0x223617['_cubeMap'] && _0x223617['_cubeMap']['destroy']()
                        _0x223617['_cubeMap'] = _0x3aadfc
                      })
                    } else {
                      this['_cubeMap'] = this['_cubeMap'] && this['_cubeMap']['destroy']()
                      this['_cubeMap'] = new _0x42a781({ 'context': _0x3882fb, 'source': _0x4f1eeb })
                    }
                    continue
                }
                break
              }
            }
            continue
          case'11':
            var _0x223617 = this
            continue
        }
        break
      }
    }
    _0x427251['prototype']['isDestroyed'] = function() {
      return ![]
    }
    _0x427251['prototype']['destroy'] = function() {
      var _0x45479b = _0xd8901['Pikax']['split']('|'), _0xfb57fe = 0x0
      while (!![]) {
        switch (_0x45479b[_0xfb57fe++]) {
          case'0':
            return _0xd8901['ffZgN'](_0x2f2b4e, this)
          case'1':
            _0x36cccf['shaderProgram'] = _0x36cccf['shaderProgram'] && _0x36cccf['shaderProgram']['destroy']()
            continue
          case'2':
            var _0x36cccf = this['_command']
            continue
          case'3':
            this['_cubeMap'] = this['_cubeMap'] && this['_cubeMap']['destroy']()
            continue
          case'4':
            _0x36cccf['vertexArray'] = _0x36cccf['vertexArray'] && _0x36cccf['vertexArray']['destroy']()
            continue
        }
        break
      }
    }
    Cesium['GroundSkyBox'] = _0x427251
  }
  _0x596756['prototype']['_installPrimitives'] = function() {
    this['_installProbingPrimitive']()
    this['_installTexturePrimitive']()
    this['_installWaterPrimitive']()
  }
  _0x596756['prototype']['_installWaterPrimitive'] = function() {
    var _0x13f5a6 = {
      'IigeD': _0x10ec70['hVehw'],
      'xGRPu': _0x10ec70['LdUsx'],
      'zwpRk': function(_0x54fabd, _0x57510d) {
        return _0x10ec70['lZHHO'](_0x54fabd, _0x57510d)
      },
      'IpNmx': function(_0x5d6686, _0x24fce1) {
        return _0x10ec70['SwBRo'](_0x5d6686, _0x24fce1)
      }
    }

    function _0x40b5c4(_0x433fb2) {
      var _0x96b710 = _0x13f5a6['IigeD']['split']('|'), _0x71948c = 0x0
      while (!![]) {
        switch (_0x96b710[_0x71948c++]) {
          case'0':
            this['_animationSpeed'] = opt['animationSpeed'] || 0.01
            continue
          case'1':
            this['_positions'] = opt['positions']
            continue
          case'2':
            this['_amplitude'] = opt['amplitude'] || 0xa
            continue
          case'3':
            this['_fs'] = this['getFS']()
            continue
          case'4':
            this['_extrudedHeight'] = opt['extrudedHeight'] || 0x0
            continue
          case'5':
            this['_url'] = opt['normalMapUrl'] || _0x13f5a6['xGRPu']
            continue
          case'6':
            this['_frequency'] = opt['frequency'] || 0x3e8
            continue
        }
        break
      }
    }

    _0x40b5c4['prototype']['build'] = function() {
      this['_geometry'] = this['_createGeometry']()
      this['_appearance'] = this['_createAppearence']()
      this['primitive'] = this['_viewer']['scene']['primitives']['add'](new Cesium['Primitive']({
        'allowPicking': ![],
        'geometryInstances': new Cesium['GeometryInstance']({ 'geometry': this['_geometry'] }),
        'appearance': this['_appearance'],
        'asynchronous': ![]
      }))
    }
    _0x40b5c4['prototype']['_createAppearence'] = function() {
      return new Cesium['EllipsoidSurfaceAppearance']({
        'material': new Cesium['Material']({
          'fabric': {
            'type': _0x10ec70['QxkGV'],
            'uniforms': {
              'normalMap': this['_url'],
              'frequency': this['_frequency'],
              'animationSpeed': this['_animationSpeed'],
              'amplitude': this['_amplitude']
            }
          }
        }), 'fragmentShaderSource': this['_fs']
      })
    }
    _0x40b5c4['prototype']['_createGeometry'] = function(_0x3d384, _0x1fef2f) {
      return new Cesium['PolygonGeometry']({
        'polygonHierarchy': new Cesium['PolygonHierarchy'](Cesium['Cartesian3']['fromDegreesArrayHeights'](this['_positions'])),
        'extrudedHeight': this['_extrudedHeight'],
        'perPositionHeight': !![]
      })
    }
    _0x40b5c4['prototype']['getFS'] = function() {
      return _0x10ec70['pOlpM']
    }
    _0x596756['prototype']['updateDegreesPosition'] = function(_0x56d07a, _0x5ae848) {
      if (_0x13f5a6['zwpRk'](this['primitive'], null)) {
        this['_viewer']['scene']['primitives']['remove'](this['primitive'])
        if (_0x56d07a && _0x13f5a6['IpNmx'](_0x56d07a['length'], 0x3)) {
          return
        }
        var _0x5e46a1 = this['_createGeometry'](_0x56d07a, _0x5ae848 ? _0x5ae848 : 0x0)
        this['primitive'] = this['_viewer']['scene']['primitives']['add'](new Cesium['Primitive']({
          'allowPicking': ![],
          'geometryInstances': new Cesium['GeometryInstance']({ 'geometry': _0x5e46a1 }),
          'appearance': this['_appearance'],
          'asynchronous': ![]
        }))
      } else {
        return
      }
    }
    Cesium['WaterPrimitive'] = _0x40b5c4
  }
  _0x596756['prototype']['_installTexturePrimitive'] = function() {
    var _0x4c378c = {
      'DDYGh': _0x10ec70['hptLY'],
      'UgfbO': _0x10ec70['qaOKi'],
      'xixUa': function(_0x490b06, _0x2afb7d) {
        return _0x10ec70['SwBRo'](_0x490b06, _0x2afb7d)
      },
      'ajtXh': _0x10ec70['iWzDU'],
      'VoIOl': _0x10ec70['qcjIQ']
    }

    function _0x19888f(_0x149bb2) {
      var _0x4e84e8 = _0x4c378c['DDYGh']['split']('|'), _0x950e5c = 0x0
      while (!![]) {
        switch (_0x4e84e8[_0x950e5c++]) {
          case'0':
            this['_url'] = _0x149bb2['url']
            continue
          case'1':
            this['_id'] = _0x149bb2['id'] || ''
            continue
          case'2':
            this['_vertexShader'] = this['getVS']()
            continue
          case'3':
            this['_fragmentShader'] = this['getFS']()
            continue
          case'4':
            this['_cartesians'] = _0x149bb2['cartesians']
            continue
          case'5':
            this['_materialShader'] = this['getMS']()
            continue
        }
        break
      }
    }

    _0x19888f['prototype']['build'] = function(_0x2b5b32) {
      var _0x4c576c = _0x4c378c['UgfbO']['split']('|'), _0x2f7d3a = 0x0
      while (!![]) {
        switch (_0x4c576c[_0x2f7d3a++]) {
          case'0':
            this['_indiceArr'] = new Uint16Array(_0x3299eb)
            continue
          case'1':
            this['_sts'] = new Uint8Array(_0x47fb97)
            continue
          case'2':
            this['_geometry'] = this['_createGeometry']()
            continue
          case'3':
            this['_positionArr'] = new Float32Array(_0x5ac5e8)
            continue
          case'4':
            this['_appearance'] = this['_createAppearence']()
            continue
          case'5':
            for (var _0x4287e0 = 0x0; _0x4c378c['xixUa'](_0x4287e0, this['_cartesians']['length']); _0x4287e0++) {
              _0x5ac5e8['push'](this['_cartesians'][_0x4287e0]['x'])
              _0x5ac5e8['push'](this['_cartesians'][_0x4287e0]['y'])
              _0x5ac5e8['push'](this['_cartesians'][_0x4287e0]['z'])
            }
            continue
          case'6':
            this['primitive'] = this['_viewer']['scene']['primitives']['add'](new Cesium['Primitive']({
              'geometryInstances': new Cesium['GeometryInstance']({
                'geometry': this['_geometry'],
                'id': this['_id']
              }), 'appearance': this['_appearance'], 'asynchronous': ![]
            }))
            continue
          case'7':
            var _0x5ac5e8 = [], _0x47fb97 = [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x1],
              _0x3299eb = [0x0, 0x1, 0x2, 0x0, 0x2, 0x3]
            continue
        }
        break
      }
    }
    _0x19888f['prototype']['_createGeometry'] = function() {
      var _0x53e904 = new Cesium['GeometryAttribute']({
        'componentDatatype': Cesium['ComponentDatatype']['FLOAT'],
        'componentsPerAttribute': 0x2,
        'values': this['_sts']
      })
      return new Cesium['Geometry']({
        'attributes': {
          'position': new Cesium['GeometryAttribute']({
            'componentDatatype': Cesium['ComponentDatatype']['DOUBLE'],
            'componentsPerAttribute': 0x3,
            'values': this['_positions']
          }), 'st': _0x53e904
        },
        'indices': this['_indices'],
        'primitiveType': Cesium['PrimitiveType']['TRIANGLES'],
        'boundingSphere': Cesium['BoundingSphere']['fromVertices'](positions)
      })
    }
    _0x19888f['prototype']['_createAppearence'] = function() {
      return new Cesium['Appearance']({
        'material': new Cesium['Material']({
          'fabric': {
            'uniforms': { 'image': this['_url'] },
            'source': this['_materialShader']
          }
        }),
        'aboveGround': !![],
        'faceForward': !![],
        'flat': !![],
        'translucent': ![],
        'renderState': {
          'blending': Cesium['BlendingState']['PRE_MULTIPLIED_ALPHA_BLEND'],
          'depthTest': { 'enabled': !![] },
          'depthMask': !![]
        },
        'fragmentShaderSource': this['_fragmentShader'],
        'vertexShaderSource': this['_vertexShader']
      })
    }
    _0x19888f['prototype']['getVS'] = function() {
      return _0x4c378c['ajtXh']
    }
    _0x19888f['prototype']['getFS'] = function() {
      return _0x10ec70['uAgnZ']
    }
    _0x19888f['prototype']['getMS'] = function() {
      return _0x4c378c['VoIOl']
    }
    Cesium['TexturePrimitive'] = _0x19888f
  }
  _0x596756['prototype']['_installProbingPrimitive'] = function() {
    var _0x4fa7dc = {
      'NvMCh': function(_0x54f8c6, _0x4af68b) {
        return _0x10ec70['uEfZD'](_0x54f8c6, _0x4af68b)
      }, 'dxXEd': _0x10ec70['hoQWN']
    }
    var _0x31495d = {
      'color': new Cesium['Color'](0x1, 0x0, 0x1, 0.8),
      'repeat': 0x1e,
      'offset': 0x0,
      'thickness': 0.3,
      'center': Cesium['Cartesian3']['fromDegrees'](116.39, 39.9),
      'length': 0x61a80,
      'bottom': 0x3e8,
      'top': 0x0
    }
    var _0x44d401 = this['_viewer']

    function _0x272a84(_0x3985d3) {
      var _0x12ec24 = _0x10ec70['Mypwz']['split']('|'), _0x21b6ce = 0x0
      while (!![]) {
        switch (_0x12ec24[_0x21b6ce++]) {
          case'0':
            this['_viewer'] = _0x44d401
            continue
          case'1':
            this['build']()
            continue
          case'2':
            this['_center'] = _0x3985d3['center'] || _0x31495d['center']
            continue
          case'3':
            this['_offset'] = _0x3985d3['offset'] || _0x31495d['offset']
            continue
          case'4':
            this['_length'] = _0x3985d3['length'] || _0x31495d['length']
            continue
          case'5':
            this['_color'] = _0x3985d3['color'] || _0x31495d['color']
            continue
          case'6':
            this['_radar'] = undefined
            continue
          case'7':
            this['_bottom'] = _0x3985d3['bottom'] || _0x31495d['bottom']
            continue
          case'8':
            this['_top'] = _0x3985d3['top'] || _0x31495d['top']
            continue
          case'9':
            this['_repeat'] = _0x3985d3['repeat'] || _0x31495d['repeat']
            continue
          case'10':
            this['_thickness'] = _0x3985d3['thickness'] || _0x31495d['thickness']
            continue
        }
        break
      }
    }

    _0x272a84['prototype']['build'] = function() {
      var _0x423249 = new Cesium['CylinderGeometry']({
          'length': this['_length'],
          'topRadius': this['_top'],
          'bottomRadius': this['_bottom'],
          'vertexFormat': Cesium['MaterialAppearance']['MaterialSupport']['TEXTURED']['vertexFormat']
        }),
        _0x5b36ab = new Cesium['GeometryInstance']({ 'geometry': _0x423249, 'modelMatrix': this['getModelMatrix']() }),
        _0x16f0d8 = new Cesium['MaterialAppearance']({
          'material': this['getMaterial'](),
          'faceForward': ![],
          'closed': !![]
        }), _0x162292 = this
      this['_radar'] = this['_viewer']['scene']['primitives']['add'](new Cesium['Primitive']({
        'geometryInstances': [_0x5b36ab],
        'appearance': _0x16f0d8
      }))
      this['_viewer']['scene']['preUpdate']['addEventListener'](function() {
        var _0x77081b = _0x162292['_radar']['appearance']['material']['uniforms']['offset']
        _0x77081b -= 0.001
        if (_0x4fa7dc['NvMCh'](_0x77081b, 0x1)) {
          _0x77081b = 0x0
        }
        _0x162292['_radar']['appearance']['material']['uniforms']['offset'] = _0x77081b
      })
    }
    _0x272a84['prototype']['getModelMatrix'] = function() {
      return Cesium['Matrix4']['multiplyByTranslation'](Cesium['Transforms']['eastNorthUpToFixedFrame'](this['_center']), new Cesium['Cartesian3'](0x0, 0x0, _0x10ec70['OjLol'](this['_length'], 0.5)), new Cesium['Matrix4']())
    }
    _0x272a84['prototype']['updateModelMatrix'] = function(_0x22c064) {
    }
    _0x272a84['prototype']['getMaterial'] = function() {
      var _0x254b88 = 'uniform\x20vec4\x20color;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20repeat;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20offset;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20thickness;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20czm_getMaterial(czm_materialInput\x20materialInput){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20czm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20sp\x20=\x201.0/repeat;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20st\x20=\x20materialInput.st;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20dis\x20=\x20distance(st,\x20vec2(0.5));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20m\x20=\x20mod(dis\x20+\x20offset,\x20sp);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20a\x20=\x20step(sp*(1.0-thickness),\x20m);\x20\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.diffuse\x20=\x20color.rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20material.alpha\x20=\x20a\x20*\x20color.a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20material;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}'
      return new Cesium['Material']({
        'fabric': {
          'type': _0x4fa7dc['dxXEd'],
          'uniforms': {
            'color': this['_color'],
            'repeat': this['_repeat'],
            'offset': this['_offset'],
            'thickness': this['_thickness']
          },
          'source': _0x254b88
        }, 'translucent': ![]
      })
    }
    _0x272a84['prototype']['remove'] = function() {
      if (this['_radar']) {
        this['_viewer']['scene']['primitives']['remove'](this['_radar'])
      }
    }
    Cesium['ProbingPrimitive'] = _0x272a84
  }
  _0x596756['prototype']['_installImageryProvider'] = function() {
    this['_BaiduImageryProvider']()
  }
  _0x596756['prototype']['_BaiduImageryProvider'] = function() {
    var _0x5768a9 = {
      'SksrZ': _0x10ec70['OWDVx'],
      'gsnVI': _0x10ec70['EACUt'],
      'rvvZL': _0x10ec70['eziSJ'],
      'zEhbw': _0x10ec70['BhGCc'],
      'wMfgg': function(_0x21be2c, _0x1b6603) {
        return _0x10ec70['QWepq'](_0x21be2c, _0x1b6603)
      },
      'HLrlN': function(_0x3b6ea4, _0x494cb8) {
        return _0x10ec70['mMRmw'](_0x3b6ea4, _0x494cb8)
      },
      'HVglc': _0x10ec70['YHrWj'],
      'lZBVg': function(_0x59d33d, _0x582693) {
        return _0x10ec70['AZwHH'](_0x59d33d, _0x582693)
      },
      'WquZE': function(_0x2b247b, _0x372a30) {
        return _0x10ec70['AZwHH'](_0x2b247b, _0x372a30)
      },
      'jWNqc': function(_0x1c545f, _0x13c5a9) {
        return _0x10ec70['mMRmw'](_0x1c545f, _0x13c5a9)
      },
      'PeDeI': _0x10ec70['cBBlV'],
      'SGIox': _0x10ec70['jcISh'],
      'PiNGt': _0x10ec70['fprtt'],
      'OFEJl': _0x10ec70['GYklU']
    }
    var _0x1d9748 = _0x10ec70['xoMrL']

    function _0x224f95(_0x2f54c8) {
      var _0x169416 = _0x10ec70['aOTKh']['split']('|'), _0x4d0a09 = 0x0
      while (!![]) {
        switch (_0x169416[_0x4d0a09++]) {
          case'0':
            this['_url'] = _0x1d9748
            continue
          case'1':
            this['_style'] = _0x2f54c8['style'] || _0x10ec70['hlUGi']
            continue
          case'2':
            this['_tileWidth'] = 0x100
            continue
          case'3':
            this['_maximumLevel'] = 0x12
            continue
          case'4':
            this['_tilingScheme'] = new Cesium['WebMercatorTilingScheme']({
              'rectangleSouthwestInMeters': new Cesium['Cartesian2'](-0x1fffe86, -0x202ef88),
              'rectangleNortheastInMeters': new Cesium['Cartesian2'](0x1fffe86, 0x202ef88)
            })
            continue
          case'5':
            this['_rectangle'] = this['_tilingScheme']['rectangle']
            continue
          case'6':
            this['_credit'] = undefined
            continue
          case'7':
            this['_tileHeight'] = 0x100
            continue
        }
        break
      }
    }

    Object['defineProperties'](_0x224f95['prototype'], {
      'url': {
        'get': function() {
          return this['_url']
        }
      }, 'token': {
        'get': function() {
          return this['_token']
        }
      }, 'tileWidth': {
        'get': function() {
          if (!this['ready']) {
            throw new Cesium['DeveloperError'](_0x5768a9['SksrZ'])
          }
          return this['_tileWidth']
        }
      }, 'tileHeight': {
        'get': function() {
          if (!this['ready']) {
            throw new Cesium['DeveloperError'](_0x5768a9['gsnVI'])
          }
          return this['_tileHeight']
        }
      }, 'maximumLevel': {
        'get': function() {
          if (!this['ready']) {
            throw new Cesium['DeveloperError'](_0x10ec70['EACUt'])
          }
          return this['_tileHeight']
        }
      }, 'minimumLevel': {
        'get': function() {
          if (!this['ready']) {
            throw new Cesium['DeveloperError'](_0x10ec70['oqWpf'])
          }
          return 0x0
        }
      }, 'tilingScheme': {
        'get': function() {
          if (!this['ready']) {
            throw new Cesium['DeveloperError'](_0x10ec70['qdHvH'])
          }
          return this['_tilingScheme']
        }
      }, 'rectangle': {
        'get': function() {
          if (!this['ready']) {
            throw new Cesium['DeveloperError'](_0x10ec70['nsidQ'])
          }
          return this['_rectangle']
        }
      }, 'ready': {
        'get': function() {
          return !!this['_url']
        }
      }, 'credit': {
        'get': function() {
          return this['_credit']
        }
      }
    })
    _0x224f95['prototype']['getTileCredits'] = function(_0x4b826a, _0x5f2b09, _0x351805) {
    }
    _0x224f95['prototype']['requestImage'] = function(_0x27bd63, _0x2e9290, _0xcd5458) {
      var _0xc537cf = _0x5768a9['rvvZL']['split']('|'), _0xf8b92c = 0x0
      while (!![]) {
        switch (_0xc537cf[_0xf8b92c++]) {
          case'0':
            return Cesium['ImageryProvider']['loadImage'](this, _0x5dbe68)
          case'1':
            var _0x5dbe68 = this['_url']['replace'](_0x5768a9['zEhbw'], _0x5768a9['wMfgg'](_0x27bd63, _0x5768a9['HLrlN'](_0x53b2d3, 0x2)))['replace'](_0x5768a9['HVglc'], _0x5768a9['lZBVg'](_0x5768a9['WquZE'](_0x5768a9['jWNqc'](_0x3ea90f, 0x2), _0x2e9290), 0x1))['replace'](_0x5768a9['PeDeI'], _0xcd5458)['replace'](_0x5768a9['SGIox'], 0x1)['replace'](_0x5768a9['PiNGt'], this['_style'])
            continue
          case'2':
            var _0x53b2d3 = this['_tilingScheme']['getNumberOfXTilesAtLevel'](_0xcd5458)
            continue
          case'3':
            var _0x3ea90f = this['_tilingScheme']['getNumberOfYTilesAtLevel'](_0xcd5458)
            continue
          case'4':
            if (!this['ready']) {
              throw new Cesium['DeveloperError'](_0x5768a9['OFEJl'])
            }
            continue
        }
        break
      }
    }
    Cesium['BaiduImageryProvider'] = _0x224f95
  }
  _0x596756['prototype']['_bindEvent'] = function(_0x5f2df2, _0x132d90, _0x3d14f2) {
    var _0x598213 = {
      'pqrnK': function(_0x2af98a, _0x2eb47d) {
        return _0x10ec70['smfio'](_0x2af98a, _0x2eb47d)
      }
    }
    if (this['isMap']) {
      var _0x202e88 = new Cesium['ScreenSpaceEventHandler'](this['_viewer']['canvas'])
      _0x202e88['setInputAction'](function() {
        _0x5f2df2 && _0x10ec70['TKjyT'](_0x5f2df2, movement)
      }, Cesium['ScreenSpaceEventType']['LEFT_CLICK'])
      _0x202e88['setInputAction'](function() {
        _0x132d90 && _0x598213['pqrnK'](_0x132d90, movement)
      }, Cesium['ScreenSpaceEventType']['MOUSE_MOVE'])
      _0x202e88['setInputAction'](function() {
        _0x3d14f2 && _0x598213['pqrnK'](_0x3d14f2, movement)
      }, Cesium['ScreenSpaceEventType']['LEFT_DOUBLE_CLICK'])
    }
  }
  _0x596756['prototype']['createDom'] = function(_0x41f03d, _0x5ef051, _0x1c14a7) {
    var _0x4ed9ab = document['createElement'](_0x41f03d)
    _0x4ed9ab['className'] = _0x10ec70['KArLA'](_0x5ef051, '')
    if (_0x1c14a7) {
      _0x1c14a7['appendChild'](_0x4ed9ab)
    }
    return _0x4ed9ab
  }
  _0x596756['prototype']['removeDom'] = function(_0x449d45) {
    var _0x267710 = _0x449d45['parentNode']
    if (_0x267710) {
      _0x267710['removeChild'](_0x449d45)
    }
  }
  _0x596756['prototype']['emptyDom'] = function(_0x42120e) {
    while (_0x42120e['firstChild']) {
      _0x42120e['removeChild'](_0x42120e['firstChild'])
    }
  }
  _0x596756['prototype']['addDomClass'] = function(_0x77a8ed, _0x2c1a92) {
    if (_0x10ec70['JjnSl'](_0x77a8ed['classList'], undefined)) {
      var _0x5de091 = CV['Util']['splitWords'](_0x2c1a92)
      for (var _0x1d7760 = 0x0, _0x2e0a34 = _0x5de091['length']; _0x10ec70['SwBRo'](_0x1d7760, _0x2e0a34); _0x1d7760++) {
        _0x77a8ed['classList']['add'](_0x5de091[_0x1d7760])
      }
    } else if (!this['hasClass'](_0x77a8ed, _0x2c1a92)) {
      var _0x13315b = this['getClass'](_0x77a8ed)
      this['setClass'](_0x77a8ed, _0x10ec70['IvcHw'](_0x13315b ? _0x10ec70['IvcHw'](_0x13315b, '\x20') : '', _0x2c1a92))
    }
  }
  _0x596756['prototype']['removeDomClass'] = function(_0x516921, _0x2573de) {
    if (_0x10ec70['JjnSl'](_0x516921['classList'], undefined)) {
      _0x516921['classList']['remove'](_0x2573de)
    } else {
      this['setClass'](_0x516921, CV['Util']['trim'](_0x10ec70['HFspD'](_0x10ec70['Qryxo']('\x20', this['getClass'](_0x516921)), '\x20')['replace'](_0x10ec70['ZVKKU'](_0x10ec70['ZUMUM']('\x20', _0x2573de), '\x20'), '\x20')))
    }
  }
  _0x596756['prototype']['setDomClass'] = function(_0x4c5828, _0x52e866) {
    if (_0x10ec70['MLMJJ'](_0x4c5828['className']['baseVal'], undefined)) {
      _0x4c5828['className'] = _0x52e866
    } else {
      _0x4c5828['className']['baseVal'] = _0x52e866
    }
  }
  _0x596756['prototype']['getDomClass'] = function(_0x43b93d) {
    if (_0x43b93d['correspondingElement']) {
      _0x43b93d = _0x43b93d['correspondingElement']
    }
    return _0x10ec70['MLMJJ'](_0x43b93d['className']['baseVal'], undefined) ? _0x43b93d['className'] : _0x43b93d['className']['baseVal']
  }
  _0x596756['prototype']['createDomSvg'] = function(_0x163fab, _0x4889bb, _0x372b0e, _0x2effc7) {
    var _0x548b4a = _0x10ec70['yYxJc']['split']('|'), _0x257275 = 0x0
    while (!![]) {
      switch (_0x548b4a[_0x257275++]) {
        case'0':
          _0x456bba['setAttribute'](_0x10ec70['jqQNK'], _0x10ec70['ZUMUM'](_0x10ec70['UPCPb'](_0x10ec70['FZJpv'](_0x10ec70['eTnbN'], _0x163fab), '\x20'), _0x4889bb))
          continue
        case'1':
          _0x456bba['setAttribute'](_0x10ec70['UsxnP'], _0x10ec70['EoVeJ'])
          continue
        case'2':
          _0x456bba['setAttribute'](_0x10ec70['zfBUq'], _0x4889bb)
          continue
        case'3':
          _0x3af78b['setAttribute']('d', _0x372b0e)
          continue
        case'4':
          _0x456bba['setAttribute'](_0x10ec70['FSUPC'], _0x163fab)
          continue
        case'5':
          var _0x456bba = document['createElementNS'](_0x10ec70['zYvGS'], _0x10ec70['vvZwA'])
          continue
        case'6':
          if (_0x2effc7) {
            _0x2effc7['appendChild'](_0x456bba)
          }
          continue
        case'7':
          _0x456bba['appendChild'](_0x3af78b)
          continue
        case'8':
          return _0x456bba
        case'9':
          var _0x3af78b = document['createElementNS'](_0x10ec70['zYvGS'], _0x10ec70['Cezxm'])
          continue
      }
      break
    }
  }
  _0x596756['prototype']['createUUID'] = function(_0x17de7c) {
    _0x17de7c = _0x10ec70['nyPxI'](_0x17de7c, 'D')
    let _0x5af530 = []
    _0x5af530[0x8] = _0x5af530[0xd] = _0x5af530[0x12] = _0x5af530[0x17] = '-'
    _0x5af530[0xe] = '4'
    let _0x27c53e
    for (let _0x5a8887 = 0x0; _0x10ec70['uaOYl'](_0x5a8887, 0x24); _0x5a8887++) {
      if (!_0x5af530[_0x5a8887]) {
        _0x27c53e = _0x10ec70['mVYoB'](0x0, _0x10ec70['OjLol'](Math['random'](), 0x10))
        _0x5af530[_0x5a8887] = CHARS[_0x10ec70['ZcGTU'](_0x5a8887, 0x13) ? _0x10ec70['mVYoB'](_0x10ec70['zWxAa'](_0x27c53e, 0x3), 0x8) : _0x27c53e]
      }
    }
    return _0x10ec70['rDdmO'](_0x10ec70['rDdmO'](_0x17de7c, '-'), _0x5af530['join'](''))
  }
  _0x596756['prototype']['_installThreeJs'] = function() {
    this['_initContainer']()
    this['_initThree']()
  }
  _0x596756['prototype']['_initContainer'] = function() {
    var _0x311bb4 = _0x10ec70['FYfIQ']['split']('|'), _0x150111 = 0x0
    while (!![]) {
      switch (_0x311bb4[_0x150111++]) {
        case'0':
          this['cesiumContainer'] = undefined
          continue
        case'1':
          if (!this['threeContainer']) {
            var _0xb59fce = document['getElementsByTagName'](_0x10ec70['gKMNa'])[0x0]
            if (_0xb59fce) {
              var _0x2ab923 = _0x10ec70['zsfKW']['split']('|'), _0x23673b = 0x0
              while (!![]) {
                switch (_0x2ab923[_0x23673b++]) {
                  case'0':
                    this['threeContainer']['style']['left'] = 0x0
                    continue
                  case'1':
                    this['threeContainer'] = document['createElement'](_0x10ec70['aOerJ'])
                    continue
                  case'2':
                    this['threeContainer']['style']['overflow'] = _0x10ec70['NrvMt']
                    continue
                  case'3':
                    this['threeContainer']['style']['pointerEvents'] = _0x10ec70['bIvub']
                    continue
                  case'4':
                    this['threeContainer']['style']['padding'] = 0x0
                    continue
                  case'5':
                    this['threeContainer']['style']['position'] = _0x10ec70['BiIWm']
                    continue
                  case'6':
                    _0xb59fce['appendChild'](this['threeContainer'])
                    continue
                  case'7':
                    this['threeContainer']['style']['top'] = 0x0
                    continue
                  case'8':
                    this['threeContainer']['style']['fontFamily'] = _0x10ec70['erlqJ']
                    continue
                  case'9':
                    this['threeContainer']['style']['width'] = _0x10ec70['iOVek']
                    continue
                  case'10':
                    this['threeContainer']['style']['height'] = _0x10ec70['iOVek']
                    continue
                  case'11':
                    this['threeContainer']['id'] = _0x10ec70['wsvnR']
                    continue
                  case'12':
                    this['threeContainer']['style']['margin'] = 0x0
                    continue
                }
                break
              }
            }
          }
          continue
        case'2':
          this['threeContainer'] = undefined
          continue
        case'3':
          this['threeContainer'] = document['getElementById'](_0x10ec70['wsvnR'])
          continue
        case'4':
          if (this['cesiumContainer'] && this['threeContainer']) {
            return ![]
          }
          continue
        case'5':
          this['cesiumContainer'] = document['getElementById'](_0x10ec70['tOLzJ'])
          continue
        case'6':
          if (!this['cesiumContainer']) {
            _0x10ec70['AOIwH'](alert, _0x10ec70['DQBsb'])
            return ![]
          } else {
            if (_0x10ec70['siRua'](this['cesiumContainer']['style']['position'], _0x10ec70['BiIWm'])) {
              var _0x1d73f0 = _0x10ec70['pYOBE']['split']('|'), _0x3243dc = 0x0
              while (!![]) {
                switch (_0x1d73f0[_0x3243dc++]) {
                  case'0':
                    this['cesiumContainer']['style']['position'] = _0x10ec70['BiIWm']
                    continue
                  case'1':
                    this['cesiumContainer']['style']['padding'] = 0x0
                    continue
                  case'2':
                    this['cesiumContainer']['style']['height'] = _0x10ec70['iOVek']
                    continue
                  case'3':
                    this['cesiumContainer']['style']['top'] = 0x0
                    continue
                  case'4':
                    this['cesiumContainer']['style']['overflow'] = _0x10ec70['NrvMt']
                    continue
                  case'5':
                    this['cesiumContainer']['style']['fontFamily'] = _0x10ec70['erlqJ']
                    continue
                  case'6':
                    this['cesiumContainer']['style']['left'] = 0x0
                    continue
                  case'7':
                    this['cesiumContainer']['style']['width'] = _0x10ec70['iOVek']
                    continue
                  case'8':
                    this['cesiumContainer']['style']['margin'] = 0x0
                    continue
                }
                break
              }
            }
          }
          continue
      }
      break
    }
  }
  _0x596756['prototype']['_initThree'] = function() {
    var _0x2ef77f = _0x10ec70['qZcDR']['split']('|'), _0x191d10 = 0x0
    while (!![]) {
      switch (_0x2ef77f[_0x191d10++]) {
        case'0':
          this['_three']['renderer'] = new THREE['WebGLRenderer']({ 'alpha': !![] })
          continue
        case'1':
          this['_three']['camera'] = new THREE['PerspectiveCamera'](_0x56ba41, _0x4fca1c, _0x244df0, _0x383f88)
          continue
        case'2':
          this['_three']['scene'] = new THREE['Scene']()
          continue
        case'3':
          this['_three'] = { 'renderer': null, 'camera': null, 'scene': null }
          continue
        case'4':
          var _0x56ba41 = 0x2d, _0x114dfe = window['innerWidth'], _0x12609f = window['innerHeight'],
            _0x4fca1c = _0x10ec70['bQHuk'](_0x114dfe, _0x12609f), _0x244df0 = 0x1,
            _0x383f88 = _0x10ec70['OjLol'](_0x10ec70['OjLol'](0xa, 0x3e8), 0x3e8)
          continue
        case'5':
          if (this['threeContainer']) {
            this['threeContainer']['appendChild'](this['_three']['renderer']['domElement'])
          }
          continue
      }
      break
    }
  }
  _0x596756['prototype']['createThreeObject'] = function() {
    function _0x19558() {
      this['threeMesh'] = null
      this['minWGS84'] = null
      this['maxWGS84'] = null
    }

    return new _0x19558()
  }
  _0x596756['prototype']['addThreeObjects'] = function(_0x1757ac) {
    if (_0x1757ac && _0x10ec70['uEfZD'](_0x1757ac['length'], 0x0)) {
      this['_3Dobjects'] = _0x1757ac
      this['_renderCesium']()
      this['_renderThreeObj']()
      this['_loop']()
    }
  }
  _0x596756['prototype']['_loop'] = function() {
    window['loop'] = function() {
      _0x10ec70['TxcUX'](requestAnimationFrame, loop)
      _0x10ec70['NlOXW'](renderCesium)
      _0x10ec70['NlOXW'](renderThreeObj)
    }
    _0x10ec70['NlOXW'](loop)
  }
  _0x596756['prototype']['_renderCesium'] = function() {
    var _0xe09757 = this
    window['renderCesium'] = function() {
      _0xe09757['_viewer'] && _0xe09757['_viewer']['render']()
    }
  }
  _0x596756['prototype']['_renderThreeObj'] = function() {
    var _0x100791 = this
    window['renderThreeObj'] = function() {
      var _0x59fb04 = function(_0x5ad1f8) {
        return new THREE['Vector3'](_0x5ad1f8['x'], _0x5ad1f8['y'], _0x5ad1f8['z'])
      }
      if (_0x100791['_three'] && _0x100791['_viewer'] && _0x100791['_3Dobjects']) {
        var _0x5eda18 = _0x10ec70['LIbuD']['split']('|'), _0x179338 = 0x0
        while (!![]) {
          switch (_0x5eda18[_0x179338++]) {
            case'0':
              _0x100791['_three']['camera']['matrixAutoUpdate'] = ![]
              continue
            case'1':
              _0x100791['_three']['camera']['aspect'] = _0x14bb19
              continue
            case'2':
              _0x100791['_three']['camera']['updateProjectionMatrix']()
              continue
            case'3':
              _0x100791['_three']['renderer']['render'](_0x100791['_three']['scene'], _0x100791['_three']['camera'])
              continue
            case'4':
              _0x100791['_three']['camera']['matrixWorld']['set'](_0x1b3fa9[0x0], _0x1b3fa9[0x4], _0x1b3fa9[0x8], _0x1b3fa9[0xc], _0x1b3fa9[0x1], _0x1b3fa9[0x5], _0x1b3fa9[0x9], _0x1b3fa9[0xd], _0x1b3fa9[0x2], _0x1b3fa9[0x6], _0x1b3fa9[0xa], _0x1b3fa9[0xe], _0x1b3fa9[0x3], _0x1b3fa9[0x7], _0x1b3fa9[0xb], _0x1b3fa9[0xf])
              continue
            case'5':
              _0x100791['_three']['camera']['matrixWorldInverse']['set'](_0x5263db[0x0], _0x5263db[0x4], _0x5263db[0x8], _0x5263db[0xc], _0x5263db[0x1], _0x5263db[0x5], _0x5263db[0x9], _0x5263db[0xd], _0x5263db[0x2], _0x5263db[0x6], _0x5263db[0xa], _0x5263db[0xe], _0x5263db[0x3], _0x5263db[0x7], _0x5263db[0xb], _0x5263db[0xf])
              continue
            case'6':
              var _0x5263db = _0x100791['_viewer']['camera']['viewMatrix'],
                _0x1b3fa9 = _0x100791['_viewer']['camera']['inverseViewMatrix']
              continue
            case'7':
              _0x100791['_three']['camera']['fov'] = Cesium['Math']['toDegrees'](_0x100791['_viewer']['camera']['frustum']['fovy'])
              continue
            case'8':
              _0x100791['_three']['camera']['updateProjectionMatrix']()
              continue
            case'9':
              _0x100791['_three']['renderer']['setSize'](_0x2f76f3, _0x237d23)
              continue
            case'10':
              _0x100791['_three']['camera']['lookAt'](new THREE['Vector3'](0x0, 0x0, 0x0))
              continue
            case'11':
              for (var _0xb6e055 in _0x100791['_3Dobjects']) {
                var _0x5d14bd = _0x10ec70['wGtgq']['split']('|'), _0x5712a0 = 0x0
                while (!![]) {
                  switch (_0x5d14bd[_0x5712a0++]) {
                    case'0':
                      _0x100791['_3Dobjects'][_0xb6e055]['threeMesh']['lookAt'](_0x8cee29)
                      continue
                    case'1':
                      var _0x3c9418 = _0x10ec70['TxcUX'](_0x59fb04, Cesium['Cartesian3']['fromDegrees'](_0x4a78a4[0x0], _0x4a78a4[0x1]))
                      continue
                    case'2':
                      _0x100791['_3Dobjects'][_0xb6e055]['threeMesh']['position']['copy'](_0x81f48c)
                      continue
                    case'3':
                      var _0x313c0b = new THREE['Vector3']()['subVectors'](_0x3c9418, _0x1ca2f1)['normalize']()
                      continue
                    case'4':
                      _0x100791['_3Dobjects'][_0xb6e055]['threeMesh']['up']['copy'](_0x313c0b)
                      continue
                    case'5':
                      var _0x1ca2f1 = _0x10ec70['RgegA'](_0x59fb04, Cesium['Cartesian3']['fromDegrees'](_0x4a78a4[0x0], _0x5d7d0d[0x1]))
                      continue
                    case'6':
                      var _0x4a78a4 = _0x100791['_3Dobjects'][_0xb6e055]['minWGS84'],
                        _0x5d7d0d = _0x100791['_3Dobjects'][_0xb6e055]['maxWGS84'],
                        _0x81f48c = Cesium['Cartesian3']['fromDegrees'](_0x10ec70['bQHuk'](_0x10ec70['rDdmO'](_0x4a78a4[0x0], _0x5d7d0d[0x0]), 0x2), _0x10ec70['bQHuk'](_0x10ec70['rDdmO'](_0x4a78a4[0x1], _0x5d7d0d[0x1]), 0x2)),
                        _0x8cee29 = Cesium['Cartesian3']['fromDegrees'](_0x10ec70['hJKkD'](_0x10ec70['rDdmO'](_0x4a78a4[0x0], _0x5d7d0d[0x0]), 0x2), _0x10ec70['FUcFA'](_0x10ec70['iOJiz'](_0x4a78a4[0x1], _0x5d7d0d[0x1]), 0x2), 0x1)
                      continue
                  }
                  break
                }
              }
              continue
            case'12':
              var _0x2f76f3 = _0x100791['threeContainer']['clientWidth'],
                _0x237d23 = _0x100791['threeContainer']['clientHeight'],
                _0x14bb19 = _0x10ec70['FUcFA'](_0x2f76f3, _0x237d23)
              continue
          }
          break
        }
      }
    }
  }
  _0x596756['prototype']['showSceneEffectEditPanel'] = function(_0x1add8e) {
    var _0x3f09ee = { 'lcsaP': _0x10ec70['ZTFJc'] }
    if (this['isMap']() && dat['GUI']) {
      var _0x5143a7 = _0x10ec70['QqdPb']['split']('|'), _0x198eb2 = 0x0
      while (!![]) {
        switch (_0x5143a7[_0x198eb2++]) {
          case'0':
            _0x1e8846['scene']['colorCorrection']['hue'] = _0x1add8e['hue'] || 0x0
            continue
          case'1':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['ZRqbp'], 0x0, 0x1, 0.1)['name'](_0x10ec70['CqCch'])['onChange'](function(_0x2ab707) {
              _0x1e8846['scene']['lightSource']['ambientLightColor'] = new Cesium['Color'](_0x2ab707, _0x2ab707, _0x2ab707, 0x1)
            })
            continue
          case'2':
            _0x1e8846['scene']['bloomEffect']['show'] = _0x1add8e['bloomEffect'] || ![]
            continue
          case'3':
            _0x1e8846['scene']['hdrEnabled'] = _0x1add8e['hdrEnabled'] || !![]
            continue
          case'4':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['ZRqbp'], 0x0, 0x5, 0.1)['name']('色调')['onChange'](function(_0x438cc0) {
              _0x1e8846['scene']['hdrEnabled'] = _0x438cc0
            })
            continue
          case'5':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['phhFe'], 0x0, 0x5, 0.1)['name']('亮度')['onChange'](function(_0x2c55b3) {
              _0x1e8846['scene']['colorCorrection']['brightness'] = _0x2c55b3
            })
            continue
          case'6':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['NMkcL'], 0x0, 0x1, 0.1)['name'](_0x10ec70['UJVkX'])['onChange'](function(_0x2d013e) {
              _0x1e8846['scene']['bloomEffect']['threshold'] = _0x2d013e
            })
            continue
          case'7':
            _0x1e8846['scene']['bloomEffect']['bloomIntensity'] = _0x1add8e['bloomIntensity'] || 0x2
            continue
          case'8':
            _0x1e8846['scene']['lightSource']['ambientLightColor'] = _0x1add8e['ambientLightColor'] || new Cesium['Color'](0.3, 0.3, 0.3, 0x1)
            continue
          case'9':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['ZFYxW'], 0x0, 0xa, 0.1)['name'](_0x10ec70['kbEXv'])['onChange'](function(_0x54b88b) {
              _0x1e8846['scene']['bloomEffect']['bloomIntensity'] = _0x54b88b
            })
            continue
          case'10':
            _0x1e8846['scene']['colorCorrection']['brightness'] = _0x1add8e['brightness'] || 1.8
            continue
          case'11':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['cLFWX'])['name'](_0x10ec70['iqKoF'])['onChange'](function(_0x56ecaa) {
              _0x1e8846['scene']['colorCorrection']['show'] = _0x56ecaa
            })
            continue
          case'12':
            _0x1e8846['scene']['colorCorrection']['show'] = _0x1add8e['colorCorrection'] || ![]
            continue
          case'13':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['WzpoW'], 0x0, 0x5, 0.1)['name'](_0x10ec70['NlvWH'])['onChange'](function(_0x408797) {
              _0x1e8846['scene']['colorCorrection']['saturation'] = _0x408797
            })
            continue
          case'14':
            _0x1e8846['scene']['colorCorrection']['contrast'] = _0x1add8e['contrast'] || 1.2
            continue
          case'15':
            var _0x3333cb = new dat['GUI'](), _0x1e8846 = this['_viewer']
            continue
          case'16':
            _0x1e8846['scene']['bloomEffect']['threshold'] = _0x1add8e['threshold'] || 0x1
            continue
          case'17':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['NYiod'])['name'](_0x10ec70['njsqC'])['onChange'](function(_0x26e9ef) {
              _0x1e8846['scene']['hdrEnabled'] = _0x26e9ef
            })
            continue
          case'18':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['QrlvX'], 0x0, 0x5, 0.1)['name'](_0x10ec70['TUbob'])['onChange'](function(_0x10dbfb) {
              _0x1e8846['scene']['colorCorrection']['contrast'] = _0x10dbfb
            })
            continue
          case'19':
            _0x3150e9['add'](_0x13dce9, _0x10ec70['jPkFG'])['name'](_0x10ec70['wIxBh'])['onChange'](function(_0x35d1a0) {
              _0x1e8846['scene']['bloomEffect']['show'] = _0x35d1a0
              _0x1e8846['scene']['bloomEffect']['threshold'] = _0x13dce9['bloomThreshold']
              _0x1e8846['scene']['bloomEffect']['bloomIntensity'] = _0x13dce9['bloomIntensity']
            })
            continue
          case'20':
            _0x1e8846['scene']['colorCorrection']['saturation'] = _0x1add8e['saturation'] || 3.1
            continue
          case'21':
            var _0x13dce9 = new function() {
              var _0xfc4203 = _0x3f09ee['lcsaP']['split']('|'), _0x5374d6 = 0x0
              while (!![]) {
                switch (_0xfc4203[_0x5374d6++]) {
                  case'0':
                    this['bloomEffectShow'] = _0x1add8e['bloomEffect'] || ![]
                    continue
                  case'1':
                    this['colorCorrectionHue'] = _0x1add8e['hue'] || 0x0
                    continue
                  case'2':
                    this['colorCorrectionShow'] = ![]
                    continue
                  case'3':
                    this['ambientLightColor'] = _0x1add8e['ambientLightColor'] || 0.3
                    continue
                  case'4':
                    this['bloomIntensity'] = _0x1add8e['bloomIntensity'] || 0x2
                    continue
                  case'5':
                    this['colorCorrectionBrightness'] = _0x1add8e['brightness'] || 1.8
                    continue
                  case'6':
                    this['colorCorrectionSaturation'] = _0x1add8e['saturation'] || 3.1
                    continue
                  case'7':
                    this['colorCorrectionContrast'] = _0x1add8e['contrast'] || 1.2
                    continue
                  case'8':
                    this['bloomThreshold'] = _0x1add8e['threshold'] || 0x1
                    continue
                  case'9':
                    this['hdrEnabled'] = _0x1add8e['hdrEnabled'] || !![]
                    continue
                }
                break
              }
            }()
            continue
          case'22':
            var _0x3150e9 = _0x3333cb['addFolder'](_0x10ec70['CxDac'])
            continue
        }
        break
      }
    }
  }
  _0x596756['prototype']['showEntityOrientationEditPanel'] = function(_0x4457e4) {
    if (this['isMap']() && dat['GUI']) {
      var _0x2bbe68 = _0x10ec70['dDriA']['split']('|'), _0x9805d0 = 0x0
      while (!![]) {
        switch (_0x2bbe68[_0x9805d0++]) {
          case'0':
            var _0x23e48f = new dat['GUI']()
            continue
          case'1':
            var _0x11acf6 = _0x23e48f['addFolder'](_0x10ec70['aFdMP'])
            continue
          case'2':
            var _0x2bc75f = new function() {
              this['heading'] = 0x168
              this['pitch'] = 0x0
              this['roll'] = 0x0
            }()
            continue
          case'3':
            _0x11acf6['add'](_0x2bc75f, _0x10ec70['zeXod'], 0x0, 0x168, 0x0)['name'](_0x10ec70['UJVkX'])['onChange'](function(_0xc48895) {
              _0x4457e4['orientation']['pitch'] = Cesium['Math']['toRadians'](_0xc48895)
            })
            continue
          case'4':
            _0x11acf6['add'](_0x2bc75f, _0x10ec70['WyYig'], 0x0, 0x168, 0x0)['name'](_0x10ec70['kbEXv'])['onChange'](function(_0x36dc26) {
              _0x4457e4['orientation']['roll'] = Cesium['Math']['toRadians'](_0x36dc26)
            })
            continue
          case'5':
            _0x11acf6['add'](_0x2bc75f, _0x10ec70['wzfGc'], 0x0, 0x168, 0x168)['name'](_0x10ec70['wIxBh'])['onChange'](function(_0x30f31b) {
              _0x4457e4['orientation']['heading'] = Cesium['Math']['toRadians'](_0x30f31b)
            })
            continue
        }
        break
      }
    }
  }
  return _0x596756
}
export default Utils
